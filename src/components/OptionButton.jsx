// One answer option. During feedback the correct option lights signal green,
// a wrong pick lights signal red and shakes, everything else dims.
export default function OptionButton({ index, children, state, onClick, mono }) {
  const base =
    'group w-full text-left rounded-2xl px-6 py-7 md:py-9 flex items-center gap-5 transition-all duration-150 border'
  const styles = {
    idle: 'border-line bg-surface card-shadow card-shadow-hover hover:border-dim/50 hover:bg-raised active:scale-[0.985] cursor-pointer',
    correct: 'border-good bg-good/10 animate-pop',
    wrong: 'border-bad bg-bad/10 animate-shake',
    dim: 'border-line bg-surface opacity-45',
  }
  const chipStyles = {
    idle: 'border-line bg-bg/60 text-mut group-hover:text-ink',
    correct: 'border-good bg-good text-onsignal',
    wrong: 'border-bad bg-bad text-onsignal',
    dim: 'border-line text-dim',
  }
  return (
    <button type="button" onClick={onClick} className={`${base} ${styles[state]}`} disabled={state !== 'idle'}>
      <span
        className={`shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-xl border flex items-center justify-center text-lg font-semibold tabular-nums transition-colors ${chipStyles[state]}`}
      >
        {index + 1}
      </span>
      <span className={`${mono ? 'font-semibold tabular-nums' : 'font-medium'} text-xl md:text-2xl leading-snug text-ink`}>
        {children}
      </span>
    </button>
  )
}
