import { finalizeOptions } from '../../engine/distractors.js'
import { nextId } from '../../engine/rng.js'

// Dedicated Speed Distance Time section. Every question is solvable in the
// head: parameters are picked so all divisions and conversions land clean.
// Level 1: one-step whole hours. Level 2: minutes, unit conversions and
// half-hour times (150 km/h for 2.5 hours: double it, then add half).
// Level 3: two legs, averages, closing speeds, catch-up, remaining distance,
// half-hour speeds, round trips and wind corrections.

const KINDS = {
  1: ['distance', 'speed', 'time'],
  2: ['minSpeed', 'minDistance', 'minTime', 'perMinute', 'halfDistance', 'halfTime'],
  3: ['twoLeg', 'avgSpeed', 'closing', 'catchUp', 'remaining', 'halfDistance', 'halfSpeed', 'roundTrip', 'wind'],
}

const fmtKm = (v) => `${v} km`
const fmtKmh = (v) => `${v} km/h`
const fmtH = (v) => (v === 1 ? '1 hour' : `${v} hours`)
const fmtMin = (v) => `${v} min`

const MIN_LABEL = { 15: 'a quarter of an hour', 20: 'a third of an hour', 30: 'half an hour', 45: 'three quarters of an hour' }
const MIN_METHOD = {
  15: 'multiply the distance by 4',
  20: 'multiply the distance by 3',
  30: 'double the distance',
  45: 'divide the distance by 3, then multiply by 4',
}

// Vehicle is chosen from the speed so the scenario stays plausible: no bus
// doing 600 km/h and no aircraft crawling at 40. Verbs stay neutral
// (travels, covers) so no vehicle ever "flies" or "drives" wrongly.
function vehicleFor(rng, speed) {
  if (speed >= 200) return rng.pick(['A plane', 'An aircraft'])
  if (speed >= 140) return 'A train'
  return rng.pick(['A car', 'A bus', 'A train'])
}

let activeRng = null
function q(type, prompt, correct, candidates, format, explanation, opts = {}) {
  const { options, correctIndex } = finalizeOptions(activeRng, correct, candidates, {
    min: 1,
    format,
    ...opts,
  })
  return {
    id: nextId('sdt'),
    section: 'sdt',
    type,
    prompt,
    options,
    correctIndex,
    explanation,
  }
}

export function genSdtSection(rng, level = 2) {
  activeRng = rng
  const kind = rng.pick(KINDS[level] ?? KINDS[2])

  if (kind === 'distance') {
    const s = rng.pick([40, 50, 60, 80, 100, 120])
    const t = rng.randInt(2, 5)
    const d = s * t
    return q(
      'distance',
      `${vehicleFor(rng, s)} travels at ${s} km/h for ${fmtH(t)}. How far does it travel?`,
      d,
      [s * (t + 1), s * (t - 1), s + t, d + 10],
      fmtKm,
      `Distance = speed x time = ${s} x ${t} = ${d} km.`,
      { step: 10 },
    )
  }

  if (kind === 'speed') {
    const s = rng.pick([40, 50, 60, 70, 80, 90, 100, 120])
    const t = rng.randInt(2, 5)
    const d = s * t
    return q(
      'speed',
      `${vehicleFor(rng, s)} covers ${d} km in ${fmtH(t)}. What is its speed?`,
      s,
      [s + 10, s - 10, s * 2, d - t],
      fmtKmh,
      `Speed = distance / time = ${d} / ${t} = ${s} km/h.`,
      { step: 10 },
    )
  }

  if (kind === 'time') {
    const s = rng.pick([40, 50, 60, 80, 100])
    const t = rng.randInt(2, 6)
    const d = s * t
    return q(
      'time',
      `${vehicleFor(rng, s)} needs to cover ${d} km at ${s} km/h. How long does it take?`,
      t,
      [t + 1, t - 1, t + 2, t * 2],
      fmtH,
      `Time = distance / speed = ${d} / ${s} = ${fmtH(t)}.`,
    )
  }

  if (kind === 'minSpeed' || kind === 'minDistance') {
    let s, m, d
    do {
      s = rng.pick([80, 90, 120, 150, 160, 200, 240, 300, 360, 400, 600])
      m = rng.pick([15, 20, 30, 45])
      d = (s * m) / 60
    } while (!Number.isInteger(d) || d < 10)
    if (kind === 'minSpeed') {
      return q(
        'minSpeed',
        `${vehicleFor(rng, s)} covers ${d} km in ${m} minutes. What is its speed in km/h?`,
        s,
        [d * (60 / 30), s / 2, s + 20, s - 20, d],
        fmtKmh,
        `${m} minutes is ${MIN_LABEL[m]}: ${MIN_METHOD[m]}, giving ${s} km/h.`,
        { step: 20 },
      )
    }
    return q(
      'minDistance',
      `${vehicleFor(rng, s)} travels at ${s} km/h. How far does it get in ${m} minutes?`,
      d,
      [s, d * 2, d / 2, d + 10],
      fmtKm,
      `${m} minutes is ${MIN_LABEL[m]}: ${s} x ${m}/60 = ${d} km.`,
      { step: 10 },
    )
  }

  if (kind === 'minTime') {
    let s, m, d
    do {
      s = rng.pick([40, 60, 80, 120, 160, 200, 240])
      m = rng.pick([15, 20, 30, 45])
      d = (s * m) / 60
    } while (!Number.isInteger(d) || d < 5)
    return q(
      'minTime',
      `At ${s} km/h, how long does it take to cover ${d} km?`,
      m,
      [m + 15, m - 15, m + 30, m * 2],
      fmtMin,
      `${d} km is ${MIN_LABEL[m]} of ${s}: time = ${d} / ${s} of an hour = ${m} minutes.`,
      { step: 5 },
    )
  }

  if (kind === 'perMinute') {
    const k = rng.randInt(2, 12)
    return q(
      'perMinute',
      `An aircraft covers ${k} km every minute. What is its speed in km/h?`,
      60 * k,
      [6 * k, 60 * k + 60, 60 * k - 60, 100 * k],
      fmtKmh,
      `There are 60 minutes in an hour: ${k} x 60 = ${60 * k} km/h.`,
      { step: 60 },
    )
  }

  if (kind === 'halfDistance') {
    const s = rng.pick([40, 60, 80, 100, 120, 140, 150, 160, 180, 200, 240, 300])
    const t = rng.pick([1.5, 2.5, 3.5])
    const whole = Math.floor(t)
    const d = s * t
    return q(
      'halfDistance',
      `${vehicleFor(rng, s)} travels at ${s} km/h for ${t} hours. How far does it travel?`,
      d,
      [s * (t + 0.5), s * (t - 0.5), s * (whole + 1), d + s / 2],
      fmtKm,
      `${t} hours is ${whole} ${whole === 1 ? 'hour' : 'hours'} plus half an hour: ${s} x ${whole} = ${s * whole}, plus half of ${s} = ${s / 2}, gives ${d} km.`,
      { step: 10 },
    )
  }

  if (kind === 'halfTime') {
    const s = rng.pick([40, 60, 80, 100, 120])
    const t = rng.pick([1.5, 2.5, 3.5])
    const d = s * t
    return q(
      'halfTime',
      `${vehicleFor(rng, s)} needs to cover ${d} km at ${s} km/h. How long does it take?`,
      t,
      [t + 0.5, t - 0.5, t + 1, t * 2],
      fmtH,
      `${d} / ${s} = ${t} hours: the whole hours cover ${s * Math.floor(t)} km, and the last ${d - s * Math.floor(t)} km is half an hour at ${s} km/h.`,
      { step: 0.5, min: 0.5 },
    )
  }

  if (kind === 'halfSpeed') {
    const s = rng.pick([60, 80, 100, 120, 140, 150, 160, 180, 200])
    const t = rng.pick([1.5, 2.5])
    const d = s * t
    return q(
      'halfSpeed',
      `${vehicleFor(rng, s)} covers ${d} km in ${t} hours. What is its speed?`,
      s,
      [Math.round(d / (t + 0.5)), Math.round(d / (t - 0.5)), s + 20, s - 20],
      fmtKmh,
      `Double both: ${d * 2} km in ${t * 2} hours, so ${d * 2} / ${t * 2} = ${s} km/h.`,
      { step: 10 },
    )
  }

  if (kind === 'roundTrip') {
    const [d, sOut, sBack] = rng.pick([
      [120, 60, 40],
      [200, 100, 50],
      [240, 120, 80],
      [180, 90, 60],
      [160, 80, 40],
      [300, 100, 60],
    ])
    const tOut = d / sOut
    const tBack = d / sBack
    const total = tOut + tBack
    return q(
      'roundTrip',
      `${vehicleFor(rng, sOut)} goes ${d} km out at ${sOut} km/h and returns the same way at ${sBack} km/h. How long does the whole round trip take?`,
      total,
      [total - 1, total + 1, tOut * 2, total + 2],
      fmtH,
      `Out: ${d} / ${sOut} = ${fmtH(tOut)}. Back: ${d} / ${sBack} = ${fmtH(tBack)}. Total ${tOut} + ${tBack} = ${fmtH(total)}.`,
      { min: 1 },
    )
  }

  if (kind === 'wind') {
    const s = rng.pick([300, 400, 500, 600])
    const w = rng.pick([50, 100])
    const tail = rng.chance(0.5)
    const gs = tail ? s + w : s - w
    const t = rng.randInt(1, 3)
    const d = gs * t
    return q(
      'wind',
      `An aircraft cruises at ${s} km/h in still air with a ${w} km/h ${tail ? 'tailwind' : 'headwind'}. How far does it travel in ${fmtH(t)}?`,
      d,
      [s * t, (tail ? s - w : s + w) * t, d + 100, d - 100],
      fmtKm,
      `Ground speed = ${s} ${tail ? '+' : '-'} ${w} = ${gs} km/h, so ${gs} x ${t} = ${d} km.`,
      { step: 50 },
    )
  }

  if (kind === 'twoLeg') {
    const s1 = rng.pick([60, 80, 100, 120])
    const s2 = rng.pick([40, 50, 70, 90])
    const t1 = rng.randInt(1, 3)
    const t2 = rng.randInt(1, 3)
    const total = s1 * t1 + s2 * t2
    return q(
      'twoLeg',
      `${vehicleFor(rng, Math.max(s1, s2))} travels ${fmtH(t1)} at ${s1} km/h, then ${fmtH(t2)} at ${s2} km/h. What total distance does it cover?`,
      total,
      [s1 * t2 + s2 * t1, total + 20, total - 20, s1 + s2],
      fmtKm,
      `First leg: ${s1} x ${t1} = ${s1 * t1} km. Second leg: ${s2} x ${t2} = ${s2 * t2} km. Total ${s1 * t1} + ${s2 * t2} = ${total} km.`,
      { step: 10 },
    )
  }

  if (kind === 'avgSpeed') {
    const s1 = rng.pick([60, 80, 100, 120, 140])
    let s2
    do {
      s2 = rng.pick([40, 60, 80, 100, 120])
    } while (s2 === s1)
    const t = rng.randInt(1, 2)
    const avg = (s1 + s2) / 2
    return q(
      'avgSpeed',
      `${vehicleFor(rng, Math.max(s1, s2))} travels ${fmtH(t)} at ${s1} km/h and then ${fmtH(t)} at ${s2} km/h. What is its average speed?`,
      avg,
      [s1 + s2, avg + 10, avg - 10, Math.max(s1, s2)],
      fmtKmh,
      `Equal times, so average the speeds: (${s1} + ${s2}) / 2 = ${avg} km/h.`,
      { step: 10 },
    )
  }

  if (kind === 'closing') {
    const a = rng.pick([300, 400, 450, 500, 600])
    const b = rng.pick([200, 300, 350, 400, 500])
    const t = rng.randInt(1, 2)
    const gap = (a + b) * t
    return q(
      'closing',
      `Two aircraft fly directly toward each other at ${a} km/h and ${b} km/h, starting ${gap} km apart. How long until they meet?`,
      t,
      [t + 1, t * 2, t + 2],
      fmtH,
      `They close the gap at ${a} + ${b} = ${a + b} km/h, so ${gap} / ${a + b} = ${fmtH(t)}.`,
    )
  }

  if (kind === 'catchUp') {
    const slow = rng.pick([40, 50, 60, 80])
    const diff = rng.pick([10, 20, 25, 40])
    const fast = slow + diff
    const t = rng.randInt(1, 3)
    const gap = diff * t
    return q(
      'catchUp',
      `A car doing ${fast} km/h is chasing a truck doing ${slow} km/h, ${gap} km ahead. How long until the car catches it?`,
      t,
      [t + 1, t * 2, t + 2],
      fmtH,
      `The car gains ${fast} - ${slow} = ${diff} km/h, so ${gap} / ${diff} = ${fmtH(t)}.`,
    )
  }

  // remaining
  const s = rng.pick([300, 400, 500, 600])
  const h = rng.randInt(1, 3)
  const rem = rng.pick([200, 300, 400, 500])
  const total = s * h + rem
  return q(
    'remaining',
    `A flight of ${total} km cruises at ${s} km/h. After ${fmtH(h)}, how far is left?`,
    rem,
    [s * h, rem + 100, rem - 100, total - s],
    fmtKm,
    `Covered so far: ${s} x ${h} = ${s * h} km. Remaining: ${total} - ${s * h} = ${rem} km.`,
    { step: 50 },
  )
}

export const sdtPool = [{ fn: genSdtSection, weight: 1 }]
