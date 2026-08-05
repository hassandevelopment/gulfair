// The single renderer for abstract ShapeSpecs, used for sequence cells and
// answer options alike so every figure is visually consistent. Draws in
// currentColor, so it adapts to both themes.

const POSITIONS = {
  1: [[50, 50]],
  2: [
    [30, 50],
    [70, 50],
  ],
  3: [
    [50, 28],
    [30, 68],
    [70, 68],
  ],
  4: [
    [30, 30],
    [70, 30],
    [30, 70],
    [70, 70],
  ],
}
const SIZES = { 1: 52, 2: 32, 3: 30, 4: 30 }

function Shape({ shape, x, y, s, fill, rotation }) {
  const solid = fill === 'solid'
  const common = {
    fill: solid ? 'currentColor' : 'none',
    stroke: 'currentColor',
    strokeWidth: 5,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    transform: `rotate(${rotation} ${x} ${y})`,
  }
  const h = s / 2
  if (shape === 'circle') return <circle cx={x} cy={y} r={h} {...common} />
  if (shape === 'square') return <rect x={x - h} y={y - h} width={s} height={s} {...common} />
  if (shape === 'triangle')
    return <polygon points={`${x},${y - h} ${x - h},${y + h} ${x + h},${y + h}`} {...common} />
  // arrow pointing up
  return (
    <g {...common} fill="none">
      <path d={`M ${x} ${y + h} L ${x} ${y - h * 0.55}`} />
      <path
        d={`M ${x - h * 0.7} ${y - h * 0.1} L ${x} ${y - h} L ${x + h * 0.7} ${y - h * 0.1} ${solid ? 'Z' : ''}`}
        fill={solid ? 'currentColor' : 'none'}
      />
    </g>
  )
}

export default function SvgFigure({ spec, size = 64 }) {
  const positions = POSITIONS[spec.count] ?? POSITIONS[1]
  const s = (SIZES[spec.count] ?? 52) * spec.scale
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className="text-ink" aria-hidden="true">
      {positions.map(([x, y], i) => (
        <Shape key={i} shape={spec.shape} x={x} y={y} s={s} fill={spec.fill} rotation={spec.rotation} />
      ))}
    </svg>
  )
}
