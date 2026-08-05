import { useEffect, useMemo, useReducer, useRef, useCallback } from 'react'
import { createRng } from '../engine/rng.js'
import { buildSource } from '../engine/registry.js'
import { initSession, sessionReducer, currentQuestion } from '../engine/session.js'

// Owns one drill session: question flow, answer timing, auto-advance.
export function useQuizSession(sectionKey, mode, settings) {
  const rng = useMemo(() => createRng(), [])
  const source = useMemo(
    () => buildSource(sectionKey, rng, settings.difficulty),
    [sectionKey, rng, settings.difficulty],
  )

  const [state, dispatch] = useReducer(sessionReducer, undefined, () =>
    initSession({
      questions:
        mode === 'set'
          ? Array.from({ length: settings.setLength }, () => source.next())
          : [source.next()],
      mode,
      feedbackMode: settings.feedbackMode,
    }),
  )

  const startRef = useRef(Date.now())
  const autoRef = useRef(null)

  useEffect(() => {
    if (state.phase === 'answering') startRef.current = Date.now()
  }, [state.phase, state.index])

  useEffect(() => () => clearTimeout(autoRef.current), [])

  const question = currentQuestion(state)

  const next = useCallback(() => {
    clearTimeout(autoRef.current)
    if (state.mode === 'spam' && state.index + 1 >= state.questions.length) {
      dispatch({ type: 'APPEND_QUESTION', question: source.next() })
    }
    dispatch({ type: 'NEXT' })
  }, [state.mode, state.index, state.questions.length, source])

  const answer = useCallback(
    (picked) => {
      if (state.phase !== 'answering') return
      const ms = Date.now() - startRef.current
      const showsFeedback = state.feedbackMode === 'immediate'
      // Silent-advance spam needs the next question in place BEFORE the
      // reducer moves the index forward.
      if (!showsFeedback && state.mode === 'spam') {
        dispatch({ type: 'APPEND_QUESTION', question: source.next() })
      }
      dispatch({ type: 'ANSWER', picked, ms })
      const correct = picked === question?.correctIndex
      if (showsFeedback && correct) {
        autoRef.current = setTimeout(() => next(), 700)
      }
    },
    [state.phase, state.mode, state.feedbackMode, question, next, source],
  )

  const finish = useCallback(() => {
    clearTimeout(autoRef.current)
    dispatch({ type: 'FINISH' })
  }, [])

  return { state, question, answer, next, finish }
}
