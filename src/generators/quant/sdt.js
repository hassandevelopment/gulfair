import { finalizeOptions } from '../../engine/distractors.js'
import { nextId } from '../../engine/rng.js'

// Speed, distance, time. Whole answers by construction: pick speed and a clean
// time fraction, distance is their product, then ask for any of the three.

const TIMES = [
  { h: 0.25, label: '15 minutes', speedHint: 'a quarter of an hour, so multiply by 4' },
  { h: 0.5, label: '30 minutes', speedHint: 'half an hour, so multiply by 2' },
  { h: 1, label: '1 hour', speedHint: 'one hour, so speed equals distance' },
  { h: 2, label: '2 hours', speedHint: 'two hours, so divide by 2' },
  { h: 3, label: '3 hours', speedHint: 'three hours, so divide by 3' },
]
const SPEEDS = [40, 60, 80, 100, 120, 160, 200, 240, 300, 400, 480, 600]

export function genSdt(rng) {
  let s, t, d
  do {
    s = rng.pick(SPEEDS)
    t = rng.pick(TIMES)
    d = s * t.h
  } while (!Number.isInteger(d) || d < 10)

  const ask = rng.pick(['speed', 'distance', 'time'])
  const vehicle = rng.pick(['A plane', 'An aircraft', 'A bus', 'A car'])

  if (ask === 'speed') {
    const candidates = [d, Math.round(d * t.h), s * 2, Math.round(s / 2), s + 20, s - 20]
    const { options, correctIndex } = finalizeOptions(rng, s, candidates, {
      min: 5,
      step: 10,
      format: (v) => `${v} km/h`,
    })
    return {
      id: nextId('quant-sdt'),
      section: 'quant',
      type: 'sdt',
      prompt: `${vehicle} covers ${d} km in ${t.label}. What is its speed in km/h?`,
      options,
      correctIndex,
      explanation: `${t.label} is ${t.speedHint}: ${d} km in ${t.label} means ${s} km/h.`,
    }
  }

  if (ask === 'distance') {
    const candidates = [s, Math.round(s / (t.h || 1)), d * 2, Math.round(d / 2), d + 20, d - 20]
    const { options, correctIndex } = finalizeOptions(rng, d, candidates, {
      min: 5,
      step: 10,
      format: (v) => `${v} km`,
    })
    return {
      id: nextId('quant-sdt'),
      section: 'quant',
      type: 'sdt',
      prompt: `${vehicle.toLowerCase() === 'a plane' ? 'A plane' : vehicle} travels at ${s} km/h for ${t.label}. How far does it go?`,
      options,
      correctIndex,
      explanation: `Distance = speed x time = ${s} x ${t.h} = ${d} km.`,
    }
  }

  // ask time: options are time labels
  const wrongLabels = TIMES.filter((x) => x.h !== t.h).map((x) => x.label)
  const shuffledWrong = rng.shuffle(wrongLabels)
  const { options, correctIndex } = finalizeOptions(rng, t.label, shuffledWrong, {
    format: (v) => String(v),
    topUp: (k, isTaken) => shuffledWrong.find((l) => !isTaken(l)),
  })
  return {
    id: nextId('quant-sdt'),
    section: 'quant',
    type: 'sdt',
    prompt: `${vehicle} travels at ${s} km/h. How long does it take to cover ${d} km?`,
    options,
    correctIndex,
    explanation: `Time = distance / speed = ${d} / ${s} = ${t.h} hours, which is ${t.label}.`,
  }
}
