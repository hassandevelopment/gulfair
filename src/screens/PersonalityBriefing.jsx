import { useKeyboard } from '../hooks/useKeyboard.js'

export default function PersonalityBriefing({ onStart, onBack }) {
  useKeyboard({ onEnter: onStart, onEscape: onBack })

  return (
    <div className="min-h-dvh app-atmosphere flex flex-col">
      <div className="max-w-2xl mx-auto w-full px-5 md:px-8 py-12 flex-1 flex flex-col justify-center">
        <button type="button" onClick={onBack} className="self-start text-sm text-mut hover:text-ink transition-colors cursor-pointer">
          Back (Esc)
        </button>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-dim animate-fade-up">
          Section 1 / Personality Profiler
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight animate-fade-up">
          There are no right answers here
        </h2>
        <div className="mt-6 space-y-4 text-mut leading-relaxed animate-fade-up">
          <p>
            The real profiler shows you trait statements and asks how strongly you agree, from
            Strongly disagree up to Strongly agree. It is not scored like the other sections. It
            measures two things:
            consistency (similar statements should get similar answers) and self-awareness.
          </p>
          <p>
            Answer honestly and steadily. Do not overthink individual items, and avoid painting
            an unrealistic picture; profilers flag people who claim the maximum on everything.
          </p>
          <p>
            Below is a short practice run so the format feels familiar. Nothing is recorded and
            nothing is graded.
          </p>
        </div>
        <button
          type="button"
          onClick={onStart}
          className="mt-8 self-start px-5 py-2.5 rounded-lg bg-accent text-onsignal font-semibold text-sm hover:brightness-110 active:scale-[0.97] transition cursor-pointer animate-fade-up"
        >
          Try the format (Enter)
        </button>
      </div>
    </div>
  )
}
