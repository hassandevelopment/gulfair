// One answer option. During feedback the correct option lights signal green,
// a wrong pick lights signal red and shakes, everything else dims.
export default function OptionButton({ index, children, state, onClick, mono }) {
  const base =
    'group w-full text-left rounded-2xl px-5 py-5 md:py-6 flex items-center gap-4 transition-all duration-150 border'
  const styles = {
    idle: 'border-line bg-surface card-shadow card-shadow-hover hover:border-dim/50 hover:bg-raised active:scale-[0.985] cursor-pointer',
    correct: 'border-good bg-good/10 animate-pop',
    wrong: 'border-bad bg-bad/10 animate-shake',
    dim: 'border-line bg-surface opacity-45',
  }
  const chipStyles = {
    idle: 'border-line bg-bg/60 text-mut group-hover:text-ink',
    correct: 'border-good bg-good text-white',
    wrong: 'border-bad bg-bad text-white',
    dim: 'border-line text-dim',
  }
  return (
    <button type="button" onClick={onClick} className={`${base} ${styles[state]}`} disabled={state !== 'idle'}>
      <span
        className={`shrink-0 w-9 h-9 rounded-lg border flex items-center justify-center text-sm font-semibold tabular-nums transition-colors ${chipStyles[state]}`}
      >
        {index + 1}
      </span>
      <span className={`${mono ? 'font-semibold tabular-nums' : 'font-medium'} text-[17px] md:text-lg leading-snug text-ink`}>
        {children}
      </span>
    </button>
  )
}
