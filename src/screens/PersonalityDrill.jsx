import { useMemo, useState } from 'react'
import { personalityItems, TRAITS, LIKERT } from '../data/personalityItems.js'
import { useKeyboard } from '../hooks/useKeyboard.js'
import { createRng } from '../engine/rng.js'
import Btn from '../components/Btn.jsx'

// Score an answer 1..5 on the trait scale, flipping reverse-keyed items.
const traitScore = (item, picked) => (item.reversed ? 5 - picked : picked + 1)

function Results({ answers, onDone }) {
  const byTrait = {}
  let extremes = 0
  let neutrals = 0
  for (const { item, picked } of answers) {
    const t = (byTrait[item.trait] ??= { sum: 0, n: 0 })
    t.sum += traitScore(item, picked)
    t.n += 1
    if (picked === 0 || picked === 4) extremes += 1
    if (picked === 2) neutrals += 1
  }
  const rows = Object.entries(byTrait)
    .map(([trait, { sum, n }]) => ({ trait, avg: sum / n }))
    .sort((a, b) => b.avg - a.avg)

  const extremePct = Math.round((extremes / answers.length) * 100)
  const neutralPct = Math.round((neutrals / answers.length) * 100)
  let styleNote = 'Your answering style looks balanced, which reads as honest and self-aware.'
  if (extremePct >= 60) {
    styleNote = `You answered at the extremes ${extremePct}% of the time. Real profilers flag heavy Strongly answers as an unrealistic self-portrait.`
  } else if (neutralPct >= 40) {
    styleNote = `You picked Neutral ${neutralPct}% of the time. Heavy Neutral use reads as indecisive; commit where you honestly can.`
  }

  useKeyboard({ onEnter: onDone, onEscape: onDone })

  return (
    <div className="min-h-dvh app-atmosphere">
      <div className="max-w-2xl mx-auto px-5 md:px-8 py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dim animate-fade-up">
          Personality Profiler / Trait sketch
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight animate-fade-up">
          A rough idea of how you come across
        </h2>
        <p className="mt-3 text-mut text-sm animate-fade-up">
          Informal and unscored. Reverse-worded statements are flipped before averaging, so this
          reflects what your answers actually imply. Nothing is saved.
        </p>

        <ul className="mt-8 rounded-2xl hairline bg-surface card-shadow overflow-hidden animate-fade-up">
          {rows.map(({ trait, avg }) => {
            const meta = TRAITS[trait]
            if (!meta) return null
            const band = avg >= 3.8 ? 0 : avg <= 2.4 ? 2 : 1
            return (
              <li key={trait} className="px-5 py-4 border-b border-line last:border-0">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-semibold text-ink">{meta.label}</span>
                  <span className="text-sm tabular-nums text-mut">{avg.toFixed(1)} / 5</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-bg overflow-hidden">
                  <div
                    className={`h-full rounded-full ${band === 0 ? 'bg-good' : band === 2 ? 'bg-bad' : 'bg-accent'}`}
                    style={{ width: `${(avg / 5) * 100}%` }}
                  />
                </div>
                <p className="mt-2 text-sm text-mut">{meta.bands[band]}</p>
              </li>
            )
          })}
        </ul>

        <p className="mt-5 text-sm text-mut animate-fade-up">{styleNote}</p>

        <Btn variant="primary" onClick={onDone} kbd="Enter" className="mt-6">
          Home
        </Btn>
      </div>
    </div>
  )
}

export default function PersonalityDrill({ settings, onDone }) {
  // Shuffled run of the requested length. Past the bank size, statements
  // reappear in a new order, which mirrors how real profilers re-ask
  // similar items to check consistency.
  const items = useMemo(() => {
    const rng = createRng()
    const target = settings.personalityLength ?? 30
    let list = []
    while (list.length < target) {
      list = list.concat(rng.shuffle(personalityItems))
    }
    return list.slice(0, target)
  }, [settings.personalityLength])

  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState(null)
  const [answers, setAnswers] = useState([])
  const finished = index >= items.length

  function choose(i) {
    if (picked !== null || finished) return
    setPicked(i)
    setAnswers((a) => [...a, { item: items[index], picked: i }])
    setTimeout(() => {
      setPicked(null)
      setIndex((n) => n + 1)
    }, 350)
  }

  useKeyboard({
    onDigit: (i) => i < 5 && choose(i),
    onEscape: onDone,
  })

  if (finished) {
    return <Results answers={answers} onDone={onDone} />
  }

  return (
    <div className="min-h-dvh app-atmosphere flex flex-col">
      <header className="grid grid-cols-3 items-center px-5 md:px-8 pt-5">
        <Btn onClick={onDone} kbd="Esc" className="justify-self-start">
          Exit
        </Btn>
        <p className="text-sm font-medium tabular-nums text-mut text-center">
          {index + 1} / {items.length}
        </p>
        <span />
      </header>
      <main key={index} className="flex-1 flex flex-col justify-center items-center max-w-3xl w-full mx-auto px-5 md:px-8 pb-10 animate-fade-up">
        <p className="text-2xl md:text-3xl font-medium text-ink leading-relaxed text-center max-w-2xl">
          {items[index].text}
        </p>
        <div className="mt-10 flex flex-col gap-3 w-full max-w-xl">
          {LIKERT.map((label, i) => (
            <button
              key={i}
              type="button"
              onClick={() => choose(i)}
              className={`group flex items-center gap-4 rounded-2xl border px-6 py-4 text-left transition-all duration-150 cursor-pointer ${
                picked === i
                  ? 'border-accent bg-accent/10 animate-pop'
                  : 'border-line bg-surface card-shadow card-shadow-hover hover:border-dim/50 active:scale-[0.985]'
              }`}
            >
              <span className="shrink-0 w-8 h-8 rounded-lg border border-line bg-bg/60 flex items-center justify-center text-sm font-semibold tabular-nums text-mut group-hover:text-ink transition-colors">
                {i + 1}
              </span>
              <span className="text-lg md:text-xl font-medium text-ink">{label}</span>
            </button>
          ))}
        </div>
        <p className="mt-6 text-xs text-dim text-center">
          Keys 1 to 5 answer. Unscored; you get an informal trait sketch at the end.
        </p>
      </main>
    </div>
  )
}
