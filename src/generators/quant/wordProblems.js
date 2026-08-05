import { finalizeOptions } from '../../engine/distractors.js'
import { nextId } from '../../engine/rng.js'

// One or two step word problems with real framing and clean numbers.
// Level 1: single step. Level 2: mixed. Level 3: discounts, averages, clock maths.
const KINDS = {
  1: ['fuelRate', 'trips', 'change'],
  2: ['fuelRate', 'trips', 'change', 'tankPercent', 'twoItems', 'discount', 'average'],
  3: ['discount', 'average', 'timeDiff', 'tankPercent', 'change', 'twoItems'],
}

function fmtDuration(mins) {
  const h = Math.floor(mins / 60)
  const m = mins % 60
  if (h === 0) return `${m} min`
  if (m === 0) return `${h} h`
  return `${h} h ${m} min`
}

export function genWordProblem(rng, level = 2) {
  const kind = rng.pick(KINDS[level] ?? KINDS[2])

  if (kind === 'change') {
    const c = rng.randInt(2, 6)
    const k = rng.randInt(2, 5)
    const total = c * k
    const paid = rng.pick([10, 20, 50].filter((p) => p > total))
    const ans = paid - total
    const candidates = [total, paid - c, ans + 1, ans - 1]
    const { options, correctIndex } = finalizeOptions(rng, ans, candidates, {
      min: 1,
      format: (v) => `${v} BD`,
    })
    return {
      id: nextId('quant-word'),
      section: 'quant',
      type: 'word',
      prompt: `An airport bus ticket costs ${c} BD. You buy ${k} tickets and pay with a ${paid} BD note. How much change do you get?`,
      options,
      correctIndex,
      explanation: `Tickets cost ${c} x ${k} = ${total} BD. Change = ${paid} - ${total} = ${ans} BD.`,
    }
  }

  if (kind === 'fuelRate') {
    const r = rng.pick([20, 30, 40, 50, 60])
    const m = rng.randInt(3, 8)
    const ans = r * m
    const candidates = [ans + r, ans - r, r + m, ans + 10]
    const { options, correctIndex } = finalizeOptions(rng, ans, candidates, {
      min: 10,
      step: 10,
      format: (v) => `${v} kg`,
    })
    return {
      id: nextId('quant-word'),
      section: 'quant',
      type: 'word',
      prompt: `An aircraft burns ${r} kg of fuel per minute. How much fuel does it burn in ${m} minutes?`,
      options,
      correctIndex,
      explanation: `${r} kg per minute for ${m} minutes: ${r} x ${m} = ${ans} kg.`,
    }
  }

  if (kind === 'tankPercent') {
    let cap, p, ans
    do {
      cap = rng.pick([20, 40, 50, 60, 80, 100, 120, 200])
      p = rng.pick([10, 20, 25, 30, 40, 50, 60, 75, 80, 90])
      ans = (cap * p) / 100
    } while (!Number.isInteger(ans))
    const candidates = [cap - ans, ans * 10, ans / 10, ans + 5, ans - 5]
    const { options, correctIndex } = finalizeOptions(rng, ans, candidates, {
      min: 1,
      step: 5,
      format: (v) => `${v} litres`,
    })
    return {
      id: nextId('quant-word'),
      section: 'quant',
      type: 'word',
      prompt: `A fuel tank holds ${cap} litres and is ${p}% full. How many litres are in the tank?`,
      options,
      correctIndex,
      explanation: `10% of ${cap} is ${cap / 10}; ${p}% is ${p / 10} x ${cap / 10} = ${ans} litres.`,
    }
  }

  if (kind === 'trips') {
    const k = rng.randInt(3, 6)
    const d = rng.pick([6, 8, 12, 15, 20, 25])
    const ans = k * d
    const candidates = [ans + d, ans - d, k + d, ans + 10]
    const { options, correctIndex } = finalizeOptions(rng, ans, candidates, {
      min: 5,
      step: 5,
      format: (v) => `${v} km`,
    })
    return {
      id: nextId('quant-word'),
      section: 'quant',
      type: 'word',
      prompt: `A crew shuttle makes ${k} trips of ${d} km each. What total distance does it cover?`,
      options,
      correctIndex,
      explanation: `${k} trips x ${d} km = ${ans} km.`,
    }
  }

  if (kind === 'discount') {
    let price, p, off
    do {
      price = rng.pick([20, 40, 60, 80, 120, 200])
      p = rng.pick([10, 20, 25, 50, 75])
      off = (price * p) / 100
    } while (!Number.isInteger(off))
    const ans = price - off
    const item = rng.pick(['A suitcase', 'A jacket', 'A watch', 'A pair of headphones'])
    const candidates = [off, price - p, ans + 5, ans - 5]
    const { options, correctIndex } = finalizeOptions(rng, ans, candidates, {
      min: 1,
      step: 5,
      format: (v) => `${v} BD`,
    })
    return {
      id: nextId('quant-word'),
      section: 'quant',
      type: 'word',
      prompt: `${item} costs ${price} BD and is discounted by ${p}%. What is the new price?`,
      options,
      correctIndex,
      explanation: `${p}% of ${price} is ${off}, so the new price is ${price} - ${off} = ${ans} BD.`,
    }
  }

  if (kind === 'average') {
    const k = rng.randInt(3, 6)
    const avg = rng.randInt(4, 12)
    const total = k * avg
    const candidates = [avg + 1, avg - 1, total - k, avg + 2]
    const { options, correctIndex } = finalizeOptions(rng, avg, candidates, {
      min: 1,
      format: (v) => `${v} kg`,
    })
    return {
      id: nextId('quant-word'),
      section: 'quant',
      type: 'word',
      prompt: `${k} crew members carry ${total} kg of luggage in total. What is the average per person?`,
      options,
      correctIndex,
      explanation: `Average = total / people = ${total} / ${k} = ${avg} kg.`,
    }
  }

  if (kind === 'timeDiff') {
    const startH = rng.randInt(6, 18)
    const startM = rng.pick([0, 10, 15, 20, 30, 40, 45, 50])
    const diff = rng.pick([45, 60, 75, 90, 120, 150])
    const endTotal = startH * 60 + startM + diff
    const endH = Math.floor(endTotal / 60)
    const endM = endTotal % 60
    const fmt = (h, m) => `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
    const wrongs = [diff + 30, diff - 30, diff + 15, diff - 15].filter((d) => d > 0)
    const { options, correctIndex } = finalizeOptions(rng, diff, wrongs, {
      format: (v) => fmtDuration(v),
    })
    return {
      id: nextId('quant-word'),
      section: 'quant',
      type: 'word',
      prompt: `A flight departs at ${fmt(startH, startM)} and lands at ${fmt(endH, endM)}. How long is the flight?`,
      options,
      correctIndex,
      explanation: `From ${fmt(startH, startM)} to ${fmt(endH, endM)} is ${fmtDuration(diff)}.`,
    }
  }

  // twoItems: k coffees plus one sandwich
  const a = rng.randInt(2, 4)
  const b = rng.randInt(3, 8)
  const k = rng.randInt(2, 4)
  const ans = k * a + b
  const candidates = [k * (a + b), a + b, ans + a, ans - a]
  const { options, correctIndex } = finalizeOptions(rng, ans, candidates, {
    min: 1,
    format: (v) => `${v} BD`,
  })
  return {
    id: nextId('quant-word'),
    section: 'quant',
    type: 'word',
    prompt: `A coffee costs ${a} BD and a sandwich costs ${b} BD. How much do ${k} coffees and one sandwich cost?`,
    options,
    correctIndex,
    explanation: `${k} coffees: ${k} x ${a} = ${k * a} BD. Add the sandwich: ${k * a} + ${b} = ${ans} BD.`,
  }
}
