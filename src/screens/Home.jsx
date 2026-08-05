import { SECTIONS } from '../engine/registry.js'
import { getStats, displayStreak } from '../storage/stats.js'

export default function Home({ onSection, onSettings, onStats }) {
  const streak = displayStreak(getStats().streak)
  return (
    <div className="min-h-dvh app-atmosphere">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <header className="animate-fade-up">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Gulf Air prep</p>
              <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
                Psychometric Exam Preparation <span className="text-dim font-normal">~</span> Hassan Alnajjar
              </h1>
              <p className="mt-3 text-mut">Exam day: 17 August.</p>
            </div>
            <div className="flex items-center gap-4 mt-2">
              {streak > 0 && (
                <span className="text-base font-bold tabular-nums text-accent" title={`${streak} day streak`}>
                  <span aria-hidden="true">🔥</span> {streak}
                </span>
              )}
              <button
                type="button"
                onClick={onStats}
                className="text-sm text-mut hover:text-ink transition-colors cursor-pointer"
              >
                Stats
              </button>
              <button
                type="button"
                onClick={onSettings}
                className="text-sm text-mut hover:text-ink transition-colors cursor-pointer"
              >
                Settings
              </button>
            </div>
          </div>
        </header>

        <div className="mt-10 grid md:grid-cols-2 gap-3 stagger">
          {SECTIONS.map((s) => (
            <button
              key={s.key}
              type="button"
              disabled={!s.ready}
              onClick={() => onSection(s.key)}
              className={`text-left rounded-2xl p-5 border transition-all duration-150 ${
                s.ready
                  ? 'border-line bg-surface card-shadow card-shadow-hover hover:border-dim/50 hover:bg-raised hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer'
                  : 'border-line/60 bg-surface/50 opacity-55'
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-dim">Section {s.num}</p>
              <p className="mt-1.5 text-lg font-medium text-ink">{s.name}</p>
              <p className="mt-1 text-sm text-mut">{s.ready ? s.blurb : 'Coming next'}</p>
            </button>
          ))}
          <button
            type="button"
            onClick={() => onSection('mock')}
            className="md:col-span-2 text-left rounded-2xl p-5 border border-accent/40 bg-accent/5 card-shadow card-shadow-hover hover:bg-accent/10 hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-150 cursor-pointer"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">All scored sections</p>
            <p className="mt-1.5 text-lg font-medium text-accent">Mixed Mock</p>
            <p className="mt-1 text-sm text-mut">One stream drawing from every scored section</p>
          </button>
        </div>
      </div>
    </div>
  )
}
