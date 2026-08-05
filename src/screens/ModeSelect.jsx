import { SECTION_LABELS } from '../engine/registry.js'
import { useKeyboard } from '../hooks/useKeyboard.js'

export default function ModeSelect({ sectionKey, settings, onMode, onBack }) {
  useKeyboard({
    onDigit: (i) => {
      if (i === 0) onMode('set')
      if (i === 1) onMode('spam')
    },
    onEscape: onBack,
  })

  return (
    <div className="min-h-dvh app-atmosphere flex flex-col">
      <div className="max-w-3xl mx-auto w-full px-5 md:px-8 py-12 flex-1 flex flex-col justify-center">
        <button type="button" onClick={onBack} className="self-start text-sm text-mut hover:text-ink transition-colors cursor-pointer">
          Back (Esc)
        </button>
        <p className="mt-8 text-xs uppercase tracking-[0.18em] text-dim animate-fade-up">
          {SECTION_LABELS[sectionKey]}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight animate-fade-up">Pick a mode</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-3 stagger">
          <button
            type="button"
            onClick={() => onMode('set')}
            className="text-left rounded-2xl p-6 border border-line bg-surface hover:border-dim hover:bg-raised hover:-translate-y-0.5 active:scale-[0.99] transition-all cursor-pointer"
          >
            <p className="font-mono text-xs text-dim">1</p>
            <p className="mt-1.5 text-xl font-medium">Set</p>
            <p className="mt-1.5 text-sm text-mut">
              {settings.setLength} questions, timed, scored, full review at the end
            </p>
          </button>
          <button
            type="button"
            onClick={() => onMode('spam')}
            className="text-left rounded-2xl p-6 border border-line bg-surface hover:border-dim hover:bg-raised hover:-translate-y-0.5 active:scale-[0.99] transition-all cursor-pointer"
          >
            <p className="font-mono text-xs text-dim">2</p>
            <p className="mt-1.5 text-xl font-medium">Spam</p>
            <p className="mt-1.5 text-sm text-mut">
              Endless fresh questions with live accuracy and pace
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}
