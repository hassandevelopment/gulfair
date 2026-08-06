import { useState } from 'react'
import {
  oralBank,
  isComplete,
  ORAL_CATEGORIES,
  CATEGORY_LABELS,
  FREQ_LABELS,
  FREQ_DETAIL,
} from '../data/oralBank.js'
import Btn from '../components/Btn.jsx'

function Chip({ active, onClick, children, title }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`px-3.5 py-1.5 rounded-full border text-sm font-medium transition-colors cursor-pointer ${
        active
          ? 'border-accent bg-accent/10 text-accent'
          : 'border-line bg-surface text-mut hover:text-ink hover:border-dim/50'
      }`}
    >
      {children}
    </button>
  )
}

// Frequency shown as filled dots out of five.
function FreqBadge({ frequency }) {
  return (
    <span className="inline-flex items-center gap-1" title={FREQ_DETAIL[frequency]}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${i <= frequency ? 'bg-accent' : 'bg-line'}`}
        />
      ))}
    </span>
  )
}

function Entry({ q, expanded, onToggle }) {
  const complete = isComplete(q)
  return (
    <div className="rounded-2xl border border-line bg-surface card-shadow overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 cursor-pointer hover:bg-raised transition-colors"
      >
        <div>
          <p className="font-medium text-ink leading-snug">{q.question}</p>
          <div className="mt-2 flex items-center gap-3">
            <FreqBadge frequency={q.frequency} />
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-dim">
              {CATEGORY_LABELS[q.category]}
            </span>
          </div>
        </div>
        <span className={`mt-1 text-dim transition-transform duration-150 ${expanded ? 'rotate-90' : ''}`}>
          &rsaquo;
        </span>
      </button>
      {expanded && (
        <div className="px-5 pb-5 pt-1 border-t border-line/60 animate-fade-up">
          {complete ? (
            <>
              <p className="mt-3 text-mut leading-relaxed">{q.conceptExplanation}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                Say it like this
              </p>
              <ul className="mt-2 space-y-1.5">
                {q.spokenVersion.map((b, i) => (
                  <li key={i} className="flex gap-2.5 text-ink">
                    <span className="text-accent shrink-0">-</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="mt-3 inline-block px-3 py-1.5 rounded-full bg-bg/60 border border-line text-sm text-dim">
              Answer pending review
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default function OralTextbook({ onBack }) {
  const [freq, setFreq] = useState('all')
  const [category, setCategory] = useState('all')
  const [expandedId, setExpandedId] = useState(null)

  const written = oralBank.filter(isComplete).length
  const filtered = oralBank.filter(
    (q) => (freq === 'all' || q.frequency === freq) && (category === 'all' || q.category === category)
  )

  // With no frequency filter, group under tier headers, highest first.
  const groups =
    freq === 'all'
      ? [5, 4, 3, 2, 1]
          .map((f) => ({ f, items: filtered.filter((q) => q.frequency === f) }))
          .filter((g) => g.items.length)
      : [{ f: freq, items: filtered }]

  return (
    <div className="min-h-dvh app-atmosphere">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <header className="animate-fade-up">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Oral interview</p>
              <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Textbook</h1>
              <p className="mt-3 text-mut">
                {written} of {oralBank.length} answers written.
              </p>
            </div>
            <div className="mt-2">
              <Btn onClick={onBack} kbd="Esc">Back</Btn>
            </div>
          </div>
        </header>

        <div className="mt-8 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-dim w-20">Frequency</span>
            <Chip active={freq === 'all'} onClick={() => setFreq('all')}>All</Chip>
            {[5, 4, 3, 2, 1].map((f) => (
              <Chip key={f} active={freq === f} onClick={() => setFreq(f)} title={FREQ_DETAIL[f]}>
                {f}
              </Chip>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-dim w-20">Topic</span>
            <Chip active={category === 'all'} onClick={() => setCategory('all')}>All</Chip>
            {ORAL_CATEGORIES.map((c) => (
              <Chip key={c} active={category === c} onClick={() => setCategory(c)}>
                {CATEGORY_LABELS[c]}
              </Chip>
            ))}
          </div>
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-mut">No questions match these filters.</p>
        )}

        <div className="mt-8 space-y-8">
          {groups.map((g) => (
            <section key={g.f}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-dim">
                Frequency {g.f}: {FREQ_LABELS[g.f]}
                <span className="ml-2 normal-case tracking-normal font-normal">({g.items.length})</span>
              </h2>
              <div className="mt-3 space-y-2.5">
                {g.items.map((q) => (
                  <Entry
                    key={q.id}
                    q={q}
                    expanded={expandedId === q.id}
                    onToggle={() => setExpandedId(expandedId === q.id ? null : q.id)}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
