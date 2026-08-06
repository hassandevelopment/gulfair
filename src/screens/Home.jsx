import { SECTIONS } from '../engine/registry.js'
import { getStats, displayStreak } from '../storage/stats.js'
import Btn from '../components/Btn.jsx'

// Flame outline with the streak count drawn inside it.
function StreakFlame({ count }) {
  return (
    <span className="inline-flex items-center" title={`${count} day streak`}>
      <svg width="34" height="40" viewBox="0 0 24 29" aria-label={`${count} day streak`}>
        <path
          d="M12 1.6c2.6 4.6 7 7.6 7 13.4a7 7 0 1 1-14 0c0-2.5.9-4.6 2.3-6.4C8.4 10.4 10.8 6 12 1.6z"
          fill="var(--color-accent)"
          fillOpacity="0.14"
          stroke="var(--color-accent)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <text
          x="12"
          y="18.6"
          textAnchor="middle"
          fontSize={String(count).length > 1 ? 8 : 10}
          fontWeight="800"
          fill="var(--color-accent)"
          style={{ fontFamily: 'inherit' }}
        >
          {count}
        </text>
      </svg>
    </span>
  )
}

export default function Home({ onSection, onSettings, onStats }) {
  const streak = displayStreak(getStats().streak)
  return (
    <div className="min-h-dvh app-atmosphere">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <header className="animate-fade-up">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Gulf Air prep</p>
              <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
                Psychometric Exam Preparation
              </h1>
              <p className="mt-3 text-mut">Exam day: 17 August.</p>
            </div>
            <div className="flex items-center gap-2.5 mt-2">
              {streak > 0 && <StreakFlame count={streak} />}
              <Btn onClick={onStats}>Stats</Btn>
              <Btn onClick={onSettings}>Settings</Btn>
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
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-dim">
                {s.kicker ?? `Section ${s.num}`}
              </p>
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
