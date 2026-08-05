import { useState } from 'react'
import { personalityItems, LIKERT } from '../data/personalityItems.js'
import { useKeyboard } from '../hooks/useKeyboard.js'
import Btn from '../components/Btn.jsx'

export default function PersonalityDrill({ onDone }) {
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState(null)
  const finished = index >= personalityItems.length

  function choose(i) {
    if (picked !== null || finished) return
    setPicked(i)
    setTimeout(() => {
      setPicked(null)
      setIndex((n) => n + 1)
    }, 350)
  }

  useKeyboard({
    onDigit: (i) => i < 5 && choose(i),
    onEnter: () => finished && onDone(),
    onEscape: onDone,
  })

  if (finished) {
    return (
      <div className="min-h-dvh app-atmosphere flex items-center justify-center px-5">
        <div className="text-center animate-fade-up">
          <h2 className="text-3xl font-semibold tracking-tight">That is the format</h2>
          <p className="mt-3 text-mut max-w-md mx-auto">
            Steady, honest, consistent. Nothing was recorded.
          </p>
          <Btn variant="primary" onClick={onDone} kbd="Enter" className="mt-6">
            Home
          </Btn>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-dvh app-atmosphere flex flex-col">
      <header className="grid grid-cols-3 items-center px-5 md:px-8 pt-5">
        <Btn onClick={onDone} kbd="Esc" className="justify-self-start">
          Exit
        </Btn>
        <p className="text-sm font-medium tabular-nums text-mut text-center">
          {index + 1} / {personalityItems.length}
        </p>
        <span />
      </header>
      <main key={index} className="flex-1 flex flex-col justify-center items-center max-w-3xl w-full mx-auto px-5 md:px-8 pb-10 animate-fade-up">
        <p className="text-2xl md:text-3xl font-medium text-ink leading-relaxed text-center max-w-2xl">
          {personalityItems[index]}
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
        <p className="mt-6 text-xs text-dim text-center">Keys 1 to 5 answer. No scoring, no feedback.</p>
      </main>
    </div>
  )
}
