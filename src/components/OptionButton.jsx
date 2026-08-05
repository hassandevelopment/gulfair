// One answer option. During feedback the correct option lights green, a wrong
// pick lights red and shakes, everything else dims.
export default function OptionButton({ index, children, state, onClick, mono }) {
  const base =
    'group w-full text-left rounded-xl px-4 py-3.5 flex items-center gap-3.5 transition-all duration-150 border'
  const styles = {
    idle: 'border-line bg-surface hover:border-dim hover:bg-raised active:scale-[0.985] cursor-pointer',
    correct: 'border-good/70 bg-good/10 animate-pop',
    wrong: 'border-bad/70 bg-bad/10 animate-shake',
    dim: 'border-line bg-surface opacity-40',
  }
  const chipStyles = {
    idle: 'border-line text-mut group-hover:text-ink group-hover:border-dim',
    correct: 'border-good/70 text-good',
    wrong: 'border-bad/70 text-bad',
    dim: 'border-line text-dim',
  }
  return (
    <button type="button" onClick={onClick} className={`${base} ${styles[state]}`} disabled={state !== 'idle'}>
      <span
        className={`shrink-0 w-7 h-7 rounded-md border flex items-center justify-center font-mono text-xs transition-colors ${chipStyles[state]}`}
      >
        {index + 1}
      </span>
      <span className={`${mono ? 'font-mono' : ''} text-[15px] leading-snug`}>{children}</span>
    </button>
  )
}
