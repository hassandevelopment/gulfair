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

// Same numbering as ORAL_REVIEW.md and the PDF (tier 5 to 1, category order),
// so a captain's note about "question 41" points at the same entry here.
const QUESTION_NUMBERS = (() => {
  const map = {}
  let n = 0
  for (const f of [5, 4, 3, 2, 1]) {
    for (const c of ORAL_CATEGORIES) {
      for (const item of oralBank.filter((x) => x.frequency === f && x.category === c)) {
        n += 1
        map[item.id] = n
      }
    }
  }
  return map
})()

// Split a long explanation into short paragraphs at sentence boundaries so
// the dropdown reads as structured text, not a wall. Display only; the
// stored content is untouched.
function toParagraphs(text) {
  const sentences = text.split(/(?<=[.!?])\s+/)
  const paras = []
  let cur = ''
  for (const s of sentences) {
    if (cur && cur.length + s.length > 320) {
      paras.push(cur)
      cur = s
    } else {
      cur = cur ? cur + ' ' + s : s
    }
  }
  if (cur) paras.push(cur)
  return paras
}

function SectionLabel({ children }) {
  return (
    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.1em] text-accent">{children}</p>
  )
}

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
        <div className="flex items-start gap-3">
          <span className="shrink-0 mt-0.5 text-sm font-semibold tabular-nums text-dim">
            {QUESTION_NUMBERS[q.id]}.
          </span>
          <div>
            <p className="font-medium text-ink leading-snug">{q.question}</p>
            <div className="mt-2 flex items-center gap-3">
              <FreqBadge frequency={q.frequency} />
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-dim">
                {CATEGORY_LABELS[q.category]}
              </span>
            </div>
          </div>
        </div>
        <span className={`mt-1 text-dim transition-transform duration-150 ${expanded ? 'rotate-90' : ''}`}>
          &rsaquo;
        </span>
      </button>
      {expanded && (
        <div className="px-5 pb-6 pt-1 border-t border-line/60 animate-fade-up">
          {complete ? (
            <>
              <SectionLabel>The concept</SectionLabel>
              {toParagraphs(q.conceptExplanation).map((p, i) => (
                <p key={i} className="mt-2.5 text-mut leading-relaxed">
                  {p}
                </p>
              ))}
              <SectionLabel>Say it like this</SectionLabel>
              <ul className="mt-2.5 space-y-2">
                {q.spokenVersion.map((b, i) => (
                  <li key={i} className="flex gap-3 text-ink leading-snug">
                    <span className="shrink-0 mt-0.5 w-5 h-5 rounded-md bg-accent/10 text-accent text-xs font-semibold flex items-center justify-center tabular-nums">
                      {i + 1}
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <SectionLabel>In one breath</SectionLabel>
              <p className="mt-2 text-mut italic leading-relaxed">{q.flashcardAnswer}</p>
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

export default function OralTextbook({ onBack, onHome }) {
  const [freq, setFreq] = useState('all')
  const [category, setCategory] = useState('all')
  // Multiple entries can stay open at once, so expanding the next question
  // never collapses the one you were reading.
  const [expanded, setExpanded] = useState(() => new Set())
  const toggle = (id) =>
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

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
            <div className="mt-2 flex items-center gap-2.5">
              {onHome && <Btn onClick={onHome}>Menu</Btn>}
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
                  <Entry key={q.id} q={q} expanded={expanded.has(q.id)} onToggle={() => toggle(q.id)} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
