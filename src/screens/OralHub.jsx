import { oralBank, completeOralQuestions } from '../data/oralBank.js'
import Btn from '../components/Btn.jsx'

// Hub for the oral interview side: textbook, exam, and the spoken SDT drill.
export default function OralHub({ onTextbook, onExam, onSdt, onBack }) {
  const total = oralBank.length
  const ready = completeOralQuestions().length

  const tiles = [
    {
      key: 'textbook',
      kicker: 'Reference',
      name: 'Textbook',
      blurb: `Browse all ${total} technical questions by frequency and topic`,
      onClick: onTextbook,
      enabled: true,
    },
    {
      key: 'exam',
      kicker: 'Practice',
      name: 'Exam',
      blurb: ready
        ? `Multiple choice and flashcards over ${ready} written answers`
        : 'Answers pending review',
      onClick: onExam,
      enabled: ready > 0,
    },
    {
      key: 'sdt',
      kicker: 'Mental math',
      name: 'Say It Out Loud',
      blurb: 'Speed, distance and time, answered aloud',
      onClick: onSdt,
      enabled: true,
    },
  ]

  return (
    <div className="min-h-dvh app-atmosphere">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <header className="animate-fade-up">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Technical interview</p>
              <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Oral Interview</h1>
              <p className="mt-3 text-mut">Learn the theory, then practise saying it.</p>
            </div>
            <div className="mt-2">
              <Btn onClick={onBack} kbd="Esc">Menu</Btn>
            </div>
          </div>
        </header>

        <div className="mt-10 grid gap-3 stagger">
          {tiles.map((t) => (
            <button
              key={t.key}
              type="button"
              disabled={!t.enabled}
              onClick={t.onClick}
              className={`text-left rounded-2xl p-5 md:p-6 border transition-all duration-150 ${
                t.enabled
                  ? 'border-line bg-surface card-shadow card-shadow-hover hover:border-dim/50 hover:bg-raised hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer'
                  : 'border-line/60 bg-surface/50 opacity-55'
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-dim">{t.kicker}</p>
              <p className="mt-1.5 text-lg font-medium text-ink">{t.name}</p>
              <p className="mt-1 text-sm text-mut">{t.blurb}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
