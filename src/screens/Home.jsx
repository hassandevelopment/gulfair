import { SECTIONS } from '../engine/registry.js'

function ThemeIcon({ dark }) {
  return dark ? (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8 1.2v1.8M8 13v1.8M1.2 8H3M13 8h1.8M3.2 3.2l1.3 1.3M11.5 11.5l1.3 1.3M12.8 3.2l-1.3 1.3M4.5 11.5l-1.3 1.3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M13.5 9.6A5.8 5.8 0 0 1 6.4 2.5a5.8 5.8 0 1 0 7.1 7.1Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Home({ onSection, onSettings, theme, onToggleTheme }) {
  const dark = theme === 'dark'
  return (
    <div className="min-h-dvh app-atmosphere">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <header className="animate-fade-up">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Gulf Air prep</p>
              <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">Psych Drill</h1>
              <p className="mt-3 text-mut">Exam day: 17 August. Train sharp, land it.</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <button
                type="button"
                onClick={onToggleTheme}
                title={dark ? 'Switch to day mode' : 'Switch to night mode'}
                className="w-9 h-9 rounded-lg hairline bg-surface card-shadow flex items-center justify-center text-mut hover:text-ink active:scale-95 transition cursor-pointer"
              >
                <ThemeIcon dark={dark} />
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
