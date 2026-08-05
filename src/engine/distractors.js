// The single place where answer options are assembled. Generators hand over the
// correct value plus typed near-miss candidates; this dedupes, tops up, shuffles,
// and returns { options, correctIndex }. Collisions are impossible by construction.

// Format a number without float noise: 1.7999999 -> "1.8", 45 -> "45".
export function fmt(n) {
  if (typeof n !== 'number') return String(n)
  const r = Math.round(n * 100) / 100
  return String(r)
}

// correct: number | string
// candidates: array of number | string, ordered by plausibility (best first)
// opts.format: value -> display string (default fmt)
// opts.step: numeric top-up step when candidates run dry (default 1)
// opts.min: numeric floor for options (exclusive of anything below), default -Infinity
// opts.topUp: (k, isTaken) => value, custom generator for non-numeric answers
export function finalizeOptions(rng, correct, candidates, opts = {}) {
  const { format = fmt, step = 1, min = -Infinity, topUp } = opts
  const key = (v) => format(v)
  const taken = new Set([key(correct)])
  const isTaken = (v) => taken.has(key(v))
  const wrongs = []

  for (const c of candidates) {
    if (wrongs.length === 3) break
    if (typeof c === 'number' && (!Number.isFinite(c) || c < min)) continue
    if (isTaken(c)) continue
    taken.add(key(c))
    wrongs.push(c)
  }

  let k = 1
  while (wrongs.length < 3 && k < 50) {
    let extra
    if (topUp) {
      extra = topUp(k, isTaken)
    } else {
      const base = typeof correct === 'number' ? correct : 0
      extra = k % 2 === 1 ? base + Math.ceil(k / 2) * step : base - Math.ceil(k / 2) * step
    }
    k += 1
    if (extra === undefined || extra === null) continue
    if (typeof extra === 'number' && (!Number.isFinite(extra) || extra < min)) continue
    if (isTaken(extra)) continue
    taken.add(key(extra))
    wrongs.push(extra)
  }

  const all = rng.shuffle([correct, ...wrongs])
  return {
    options: all.map(format),
    correctIndex: all.findIndex((v) => key(v) === key(correct)),
  }
}
