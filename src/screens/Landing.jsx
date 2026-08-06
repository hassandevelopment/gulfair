// Entry screen. Two doors only: the psychometric drills and the oral
// interview side. Everything else lives behind them.
export default function Landing({ onPsychometric, onOral }) {
  return (
    <div className="min-h-dvh app-atmosphere">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16 min-h-dvh flex flex-col justify-center">
        <header className="animate-fade-up text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Gulf Air prep</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
            Interview Preparation
          </h1>
          <p className="mt-3 text-mut">Pick a side to practise.</p>
        </header>

        <div className="mt-10 grid gap-4 stagger">
          <button
            type="button"
            onClick={onPsychometric}
            className="text-left rounded-2xl p-7 md:p-9 border border-line bg-surface card-shadow card-shadow-hover hover:border-dim/50 hover:bg-raised hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-150 cursor-pointer"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-dim">Computer exam</p>
            <p className="mt-1.5 text-2xl font-semibold text-ink">Psychometric</p>
            <p className="mt-1.5 text-mut">Timed aptitude drills across all six sections, mocks and stats.</p>
          </button>

          <button
            type="button"
            onClick={onOral}
            className="text-left rounded-2xl p-7 md:p-9 border border-accent/40 bg-accent/5 card-shadow card-shadow-hover hover:bg-accent/10 hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-150 cursor-pointer"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">Technical interview</p>
            <p className="mt-1.5 text-2xl font-semibold text-accent">Oral Interview</p>
            <p className="mt-1.5 text-mut">Technical questions, exam practice and spoken mental math.</p>
          </button>
        </div>
      </div>
    </div>
  )
}
