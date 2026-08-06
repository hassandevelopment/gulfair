import { useMemo, useState } from 'react'
import { genSdtSection } from '../generators/sdt/index.js'
import { createRng } from '../engine/rng.js'
import { useKeyboard } from '../hooks/useKeyboard.js'
import Btn from '../components/Btn.jsx'

const LEVELS = [
  { level: 1, label: 'Easy' },
  { level: 2, label: 'Standard' },
  { level: 3, label: 'Hard' },
]

// Spoken mental math drill. Reuses the psychometric SDT generator but hides
// the options: read the prompt, say the answer out loud, then reveal.
export default function OralSdtDrill({ onBack, onHome }) {
  const rng = useMemo(() => createRng(), [])
  const [level, setLevel] = useState(2)
  const [q, setQ] = useState(() => genSdtSection(rng, 2))
  const [revealed, setRevealed] = useState(false)
  const [answered, setAnswered] = useState(0)

  const next = (lvl = level) => {
    setQ(genSdtSection(rng, lvl))
    setRevealed(false)
  }

  const advance = () => {
    if (!revealed) {
      setRevealed(true)
      setAnswered((n) => n + 1)
    } else {
      next()
    }
  }

  useKeyboard({ onEnter: advance, onEscape: onBack })

  return (
    <div className="min-h-dvh app-atmosphere">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <header className="animate-fade-up flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Oral interview</p>
            <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Say It Out Loud</h1>
            <p className="mt-3 text-mut">Work it out in your head and say the answer before revealing.</p>
          </div>
          <div className="mt-2 flex items-center gap-2.5">
            {onHome && <Btn onClick={onHome}>Menu</Btn>}
            <Btn onClick={onBack} kbd="Esc">Back</Btn>
          </div>
        </header>

        <div className="mt-8 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {LEVELS.map((l) => (
              <button
                key={l.level}
                type="button"
                onClick={() => {
                  setLevel(l.level)
                  next(l.level)
                }}
                className={`px-3.5 py-1.5 rounded-full border text-sm font-medium transition-colors cursor-pointer ${
                  level === l.level
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-line bg-surface text-mut hover:text-ink hover:border-dim/50'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
          <p className="text-sm text-dim tabular-nums">{answered} answered</p>
        </div>

        <div className="mt-6 rounded-2xl border border-line bg-surface card-shadow p-6 md:p-10 animate-fade-up">
          <p className="text-xl md:text-2xl leading-relaxed font-medium text-ink max-w-2xl">{q.prompt}</p>

          {revealed ? (
            <div className="mt-8 animate-fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-good">Answer</p>
              <p className="mt-2 font-bold text-4xl md:text-6xl tracking-tight tabular-nums text-ink">
                {q.options[q.correctIndex]}
              </p>
              <p className="mt-4 text-mut leading-relaxed max-w-2xl">{q.explanation}</p>
              <div className="mt-8">
                <Btn variant="primary" onClick={advance} kbd="Enter">Next question</Btn>
              </div>
            </div>
          ) : (
            <div className="mt-8">
              <p className="text-sm text-dim">Say the answer out loud, then reveal.</p>
              <div className="mt-4">
                <Btn variant="primary" onClick={advance} kbd="Enter">Reveal answer</Btn>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
