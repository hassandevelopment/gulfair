import { useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { completeOralQuestions, CATEGORY_LABELS } from '../data/oralBank.js'
import { initSession, sessionReducer, currentQuestion, sessionStats } from '../engine/session.js'
import { makeBankSource } from '../engine/sources.js'
import { createRng } from '../engine/rng.js'
import { getOralCycle, saveOralCycle } from '../storage/storage.js'
import { useKeyboard } from '../hooks/useKeyboard.js'
import Btn from '../components/Btn.jsx'
import OptionButton from '../components/OptionButton.jsx'

const RUN_LENGTH = 10

// Draws a run of questions from the persisted no-repeat cycle so the whole
// bank is seen before anything repeats, across sessions.
function drawRun(kind) {
  const pool = completeOralQuestions()
  const rng = createRng()
  const source = makeBankSource(pool, rng, getOralCycle(kind), (c) => saveOralCycle(kind, c))
  return Array.from({ length: Math.min(RUN_LENGTH, pool.length) }, () => source.next())
}

// ---------- multiple choice ----------

function McqRun({ onDone, onExit }) {
  const questions = useMemo(
    () =>
      drawRun('mcq').map((q) => ({
        id: q.id,
        section: 'oral',
        type: q.category,
        prompt: q.question,
        options: q.mcq.options,
        correctIndex: q.mcq.correctIndex,
        explanation: q.conceptExplanation,
      })),
    []
  )
  const [state, dispatch] = useReducer(
    sessionReducer,
    { questions, mode: 'set', feedbackMode: 'immediate' },
    initSession
  )
  const startedAt = useRef(Date.now())

  const q = currentQuestion(state)
  const last = state.answers[state.answers.length - 1]

  const pick = (i) => {
    if (state.phase !== 'answering') return
    dispatch({ type: 'ANSWER', picked: i, ms: Date.now() - startedAt.current })
  }
  const next = () => {
    if (state.phase !== 'feedback') return
    startedAt.current = Date.now()
    dispatch({ type: 'NEXT' })
  }

  useKeyboard({
    onDigit: (i) => i < 4 && pick(i),
    onEnter: next,
    onEscape: onExit,
  })

  const done = state.phase === 'done'
  useEffect(() => {
    if (done) onDone(state)
  }, [done])
  if (done) return null

  const optionState = (i) => {
    if (state.phase === 'answering') return 'idle'
    if (i === q.correctIndex) return 'correct'
    if (i === last?.picked) return 'wrong'
    return 'dim'
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-sm text-dim tabular-nums">
          Question {state.index + 1} of {state.questions.length}
        </p>
        <Btn onClick={onExit} kbd="Esc">Exit</Btn>
      </div>
      <div className="py-8 md:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-dim">
          {CATEGORY_LABELS[q.type]}
        </p>
        <p className="mt-2 text-xl md:text-2xl leading-relaxed font-medium text-ink max-w-2xl">
          {q.prompt}
        </p>
      </div>
      <div className="space-y-3">
        {q.options.map((opt, i) => (
          <OptionButton key={i} index={i} state={optionState(i)} onClick={() => pick(i)}>
            {opt}
          </OptionButton>
        ))}
      </div>
      {state.phase === 'feedback' && (
        <div className="mt-6 animate-fade-up">
          <p className="text-mut leading-relaxed max-w-2xl">{q.explanation}</p>
          <div className="mt-5">
            <Btn variant="primary" onClick={next} kbd="Enter">Next</Btn>
          </div>
        </div>
      )}
    </>
  )
}

// ---------- flashcards ----------

function FlashRun({ onDone, onExit }) {
  const [deck, setDeck] = useState(() => drawRun('flash'))
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [results, setResults] = useState([])
  const requeuedRef = useRef(false)

  const q = deck[index]

  const mark = (got) => {
    if (!revealed) return
    const nextResults = [...results, { q, got }]
    setResults(nextResults)
    setRevealed(false)
    if (index + 1 < deck.length) {
      setIndex(index + 1)
      return
    }
    // End of deck: requeue missed cards once, then finish.
    const missed = nextResults.filter((r) => !r.got).map((r) => r.q)
    if (missed.length && !requeuedRef.current) {
      requeuedRef.current = true
      setDeck([...deck, ...missed])
      setIndex(index + 1)
      return
    }
    onDone(nextResults)
  }

  useKeyboard({
    onEnter: () => !revealed && setRevealed(true),
    onDigit: (i) => {
      if (!revealed) return
      if (i === 0) mark(true)
      if (i === 1) mark(false)
    },
    onEscape: onExit,
  })

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-sm text-dim tabular-nums">
          Card {index + 1} of {deck.length}
        </p>
        <Btn onClick={onExit} kbd="Esc">Exit</Btn>
      </div>
      <div className="mt-6 rounded-2xl border border-line bg-surface card-shadow p-6 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-dim">
          {CATEGORY_LABELS[q.category]}
        </p>
        <p className="mt-2 text-xl md:text-2xl leading-relaxed font-medium text-ink max-w-2xl">
          {q.question}
        </p>
        {revealed ? (
          <div className="mt-8 animate-fade-up">
            <p className="text-ink leading-relaxed max-w-2xl">{q.flashcardAnswer}</p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
              Say it like this
            </p>
            <ul className="mt-2 space-y-1.5">
              {q.spokenVersion.map((b, i) => (
                <li key={i} className="flex gap-2.5 text-mut">
                  <span className="text-accent shrink-0">-</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-3">
              <Btn variant="primary" onClick={() => mark(true)} kbd="1">Got it</Btn>
              <Btn onClick={() => mark(false)} kbd="2">Missed it</Btn>
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <p className="text-sm text-dim">Answer out loud in your own words, then reveal.</p>
            <div className="mt-4">
              <Btn variant="primary" onClick={() => setRevealed(true)} kbd="Enter">Reveal answer</Btn>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

// ---------- shell ----------

export default function OralExam({ onBack }) {
  // phase: 'setup' | 'mcq' | 'flash' | { summary }
  const [phase, setPhase] = useState('setup')
  const [summary, setSummary] = useState(null)
  const ready = completeOralQuestions().length

  useKeyboard({ onEscape: phase === 'setup' ? onBack : undefined })

  const finishMcq = (state) => {
    const stats = sessionStats(state)
    setSummary({
      kind: 'mcq',
      headline: `${stats.correct} of ${stats.answered} correct`,
      rows: state.answers.map((a) => ({
        text: state.questions.find((q) => q.id === a.questionId)?.prompt ?? a.questionId,
        good: a.correct,
      })),
    })
    setPhase('summary')
  }

  const finishFlash = (results) => {
    const got = results.filter((r) => r.got).length
    setSummary({
      kind: 'flash',
      headline: `${got} of ${results.length} marked got it`,
      rows: results.map((r) => ({ text: r.q.question, good: r.got })),
    })
    setPhase('summary')
  }

  return (
    <div className="min-h-dvh app-atmosphere">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16">
        {phase === 'setup' && (
          <>
            <header className="animate-fade-up flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Oral interview</p>
                <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Exam</h1>
                <p className="mt-3 text-mut">
                  {ready
                    ? `${ready} questions with written answers are in the pool.`
                    : 'No answers are written yet. The exam unlocks once answers pass review.'}
                </p>
              </div>
              <div className="mt-2">
                <Btn onClick={onBack} kbd="Esc">Back</Btn>
              </div>
            </header>
            <div className="mt-10 grid gap-3 stagger">
              {[
                {
                  key: 'mcq',
                  name: 'Multiple choice',
                  blurb: 'Four options, instant feedback, explanation after each answer',
                },
                {
                  key: 'flash',
                  name: 'Flashcards',
                  blurb: 'Answer out loud, reveal, then mark yourself honestly',
                },
              ].map((m) => (
                <button
                  key={m.key}
                  type="button"
                  disabled={!ready}
                  onClick={() => setPhase(m.key)}
                  className={`text-left rounded-2xl p-5 md:p-6 border transition-all duration-150 ${
                    ready
                      ? 'border-line bg-surface card-shadow card-shadow-hover hover:border-dim/50 hover:bg-raised hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer'
                      : 'border-line/60 bg-surface/50 opacity-55'
                  }`}
                >
                  <p className="text-lg font-medium text-ink">{m.name}</p>
                  <p className="mt-1 text-sm text-mut">{ready ? m.blurb : 'Answers pending review'}</p>
                </button>
              ))}
            </div>
          </>
        )}

        {phase === 'mcq' && <McqRun onDone={finishMcq} onExit={() => setPhase('setup')} />}
        {phase === 'flash' && <FlashRun onDone={finishFlash} onExit={() => setPhase('setup')} />}

        {phase === 'summary' && summary && (
          <div className="animate-fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              {summary.kind === 'mcq' ? 'Multiple choice' : 'Flashcards'}
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">{summary.headline}</h1>
            <div className="mt-8 space-y-2">
              {summary.rows.map((r, i) => (
                <div
                  key={i}
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    r.good ? 'border-good/40 bg-good/5 text-ink' : 'border-bad/40 bg-bad/5 text-ink'
                  }`}
                >
                  {r.text}
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3">
              <Btn variant="primary" onClick={() => setPhase(summary.kind)}>Again</Btn>
              <Btn onClick={() => setPhase('setup')}>Modes</Btn>
              <Btn onClick={onBack} kbd="Esc">Back</Btn>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
