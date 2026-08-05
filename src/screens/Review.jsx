import { SECTION_LABELS } from '../engine/registry.js'
import { useKeyboard } from '../hooks/useKeyboard.js'
import SvgFigure from '../components/SvgFigure.jsx'
import Btn from '../components/Btn.jsx'

function Opt({ value }) {
  if (typeof value === 'string') return value
  return (
    <span className="inline-block align-middle">
      <SvgFigure spec={value} size={40} />
    </span>
  )
}

export default function Review({ result, onHome, onRetry }) {
  const { questions, answers, sectionKey, mode } = result
  const correct = answers.filter((a) => a.correct).length
  const accuracy = answers.length ? Math.round((correct / answers.length) * 100) : 0
  const avgS = answers.length
    ? (answers.reduce((s, a) => s + a.ms, 0) / answers.length / 1000).toFixed(1)
    : '0.0'

  useKeyboard({ onEnter: onRetry, onEscape: onHome })

  return (
    <div className="min-h-dvh app-atmosphere">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-10">
        <header className="animate-fade-up">
          <p className="text-xs uppercase tracking-[0.18em] text-dim">
            {SECTION_LABELS[sectionKey]} / {mode === 'set' ? 'Set complete' : 'Session ended'}
          </p>
          <div className="mt-4 flex flex-wrap items-end gap-x-8 gap-y-4">
            <div>
              <p className="text-6xl font-bold tabular-nums tracking-tight text-ink">
                {correct}
                <span className="text-dim text-3xl">/{answers.length}</span>
              </p>
              <p className="text-mut text-sm mt-1">correct</p>
            </div>
            <div className="pb-1">
              <p className={`text-3xl font-bold tabular-nums ${accuracy >= 80 ? 'text-good' : accuracy >= 50 ? 'text-accent' : 'text-bad'}`}>
                {accuracy}%
              </p>
              <p className="text-mut text-sm mt-1">accuracy</p>
            </div>
            <div className="pb-1">
              <p className="text-3xl font-bold tabular-nums text-ink">{avgS}s</p>
              <p className="text-mut text-sm mt-1">avg / question</p>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <Btn variant="primary" onClick={onRetry} kbd="Enter">
              Go again
            </Btn>
            <Btn onClick={onHome} kbd="Esc">
              Home
            </Btn>
          </div>
        </header>

        <ul className="mt-10 space-y-3">
          {answers.map((a, i) => {
            const q = questions[i]
            if (!q) return null
            return (
              <li key={q.id + i} className={`rounded-xl p-4 border card-shadow ${a.correct ? 'border-line bg-surface' : 'border-bad/40 bg-bad/5'}`}>
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[15px] font-medium text-ink leading-snug">
                    <span className="text-dim tabular-nums mr-2">{i + 1}.</span>
                    {q.prompt}
                  </p>
                  <span className={`shrink-0 text-[11px] font-bold tracking-[0.08em] mt-1 ${a.correct ? 'text-good' : 'text-bad'}`}>
                    {a.correct ? 'PASS' : a.timedOut ? 'TIME' : 'MISS'}
                  </span>
                </div>
                <div className="mt-2 text-sm space-y-0.5">
                  {!a.correct && (
                    <p className="text-bad font-medium">
                      Your answer: {a.timedOut ? 'none (time expired)' : <Opt value={q.options[a.picked]} />}
                    </p>
                  )}
                  <p className="text-good font-medium">
                    Correct: <Opt value={q.options[q.correctIndex]} />
                  </p>
                  {q.explanation && <p className="text-mut mt-1.5">{q.explanation}</p>}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
