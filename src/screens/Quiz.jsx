import { useEffect } from 'react'
import { useQuizSession } from '../hooks/useQuizSession.js'
import { useCountdown } from '../hooks/useCountdown.js'
import { useKeyboard } from '../hooks/useKeyboard.js'
import { sessionStats } from '../engine/session.js'
import { SECTION_LABELS } from '../engine/registry.js'
import TimerRing from '../components/TimerRing.jsx'
import QuestionCard from '../components/QuestionCard.jsx'
import OptionButton from '../components/OptionButton.jsx'
import SvgFigure from '../components/SvgFigure.jsx'

export default function Quiz({ sectionKey, mode, settings, onDone, onExit }) {
  const { state, question, answer, next, finish } = useQuizSession(sectionKey, mode, settings)
  const answering = state.phase === 'answering'
  const feedback = state.phase === 'feedback'
  const last = feedback ? state.answers[state.answers.length - 1] : null
  const stats = sessionStats(state)

  const { remaining, fraction } = useCountdown(settings.perQuestionSeconds, {
    running: answering,
    resetKey: question?.id,
    onExpire: () => answer(-1),
  })

  useEffect(() => {
    if (state.phase === 'done') {
      onDone({ questions: state.questions, answers: state.answers, sectionKey, mode })
    }
  }, [state.phase]) // eslint-disable-line react-hooks/exhaustive-deps

  useKeyboard({
    onDigit: (i) => answering && i < 4 && answer(i),
    onEnter: () => feedback && next(),
    onEscape: () => (mode === 'spam' ? finish() : onExit()),
  })

  if (!question || state.phase === 'done') return null

  const optionState = (i) => {
    if (!feedback) return 'idle'
    if (i === question.correctIndex) return 'correct'
    if (i === last.picked) return 'wrong'
    return 'dim'
  }
  const mono = question.section === 'quant'

  return (
    <div className="min-h-dvh app-atmosphere flex flex-col">
      <header className="flex items-center justify-between px-5 md:px-8 pt-5">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={mode === 'spam' ? finish : onExit}
            className="text-mut hover:text-ink text-sm transition-colors cursor-pointer"
          >
            {mode === 'spam' ? 'End session' : 'Exit'}
          </button>
        </div>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dim">{SECTION_LABELS[sectionKey]}</p>
          <p className="text-sm font-medium tabular-nums text-mut mt-0.5">
            {mode === 'set'
              ? `${state.index + 1} / ${state.questions.length}`
              : `${stats.answered} answered${stats.answered ? ` / ${stats.accuracy}%` : ''}${
                  stats.answered ? ` / ${(stats.avgMs / 1000).toFixed(1)}s avg` : ''
                }`}
          </p>
        </div>
        <TimerRing remaining={remaining} fraction={fraction} />
      </header>

      <main key={question.id} className="flex-1 flex flex-col justify-center max-w-4xl w-full mx-auto px-5 md:px-8 pb-10 animate-fade-up">
        <QuestionCard question={question} />
        <div className="grid gap-3 md:grid-cols-2">
          {question.options.map((opt, i) => (
            <OptionButton key={i} index={i} state={optionState(i)} mono={mono} onClick={() => answer(i)}>
              {typeof opt === 'string' ? opt : <SvgFigure spec={opt} size={64} />}
            </OptionButton>
          ))}
        </div>

        <div className="h-14 mt-5 flex items-center">
          {feedback ? (
            last.correct ? (
              <p className="text-good font-bold animate-fade-up">Correct</p>
            ) : (
              <div className="animate-fade-up">
                <p className="text-bad font-bold">
                  {last.timedOut ? 'Time expired' : 'Incorrect'}
                  <span className="text-mut font-normal ml-2">press Enter to continue</span>
                </p>
                {question.explanation && (
                  <p className="text-base text-mut mt-1 max-w-xl">{question.explanation}</p>
                )}
              </div>
            )
          ) : (
            <p className="text-xs text-dim">Keys 1 to 4 answer, Enter continues</p>
          )}
        </div>
      </main>
    </div>
  )
}
