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
  // Arrow as a closed polygon, so outline vs solid reads as hollow vs filled
  // instead of "slightly bolder".
  const headY = y - h + s * 0.48
  const headW = h * 0.92
  const shaftW = s * 0.2
  return (
    <polygon
      points={[
        `${x},${y - h}`,
        `${x + headW},${headY}`,
        `${x + shaftW},${headY}`,
        `${x + shaftW},${y + h}`,
        `${x - shaftW},${y + h}`,
        `${x - shaftW},${headY}`,
        `${x - headW},${headY}`,
      ].join(' ')}
      {...common}
    />
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
