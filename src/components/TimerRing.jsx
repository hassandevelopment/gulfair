const R = 22
const CIRC = 2 * Math.PI * R

// Countdown ring. Terracotta while comfortable, signal red inside the last
// 10 seconds. The count stays espresso-dark so it reads at a glance.
export default function TimerRing({ remaining, fraction, size = 56 }) {
  const urgent = remaining <= 10
  const color = urgent ? 'var(--color-bad)' : 'var(--color-accent)'
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg viewBox="0 0 56 56" width={size} height={size} className="-rotate-90">
        <circle cx="28" cy="28" r={R} fill="none" stroke="var(--color-line)" strokeWidth="3" />
        <circle
          cx="28"
          cy="28"
          r={R}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={CIRC * (1 - fraction)}
          style={{ transition: 'stroke-dashoffset 0.12s linear, stroke 0.3s' }}
        />
      </svg>
      <span
        className={`absolute inset-0 flex items-center justify-center text-sm font-semibold tabular-nums ${urgent ? 'text-bad' : 'text-ink'}`}
      >
        {Math.ceil(remaining)}
      </span>
    </div>
  )
}
