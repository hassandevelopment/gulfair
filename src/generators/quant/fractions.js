import { finalizeOptions } from '../../engine/distractors.js'
import { nextId } from '../../engine/rng.js'

// Fractions, always clean by construction.

// fraction of a number: base is a multiple of the denominator
const OF_DENOMS = { 1: [2, 3, 4], 2: [2, 3, 4, 5, 8], 3: [3, 4, 5, 8, 12] }

// fraction <-> percent pairs (all resolve to round or half percents)
const PERCENT_PAIRS = [
  ['1/2', 50], ['1/4', 25], ['3/4', 75], ['1/5', 20], ['2/5', 40],
  ['3/5', 60], ['4/5', 80], ['1/10', 10], ['3/10', 30], ['7/10', 70], ['9/10', 90],
]

// a + b = result, all clean
const ADD_TRIPLES = [
  ['1/2', '1/4', '3/4'], ['1/4', '1/4', '1/2'], ['1/2', '1/2', '1'],
  ['3/8', '1/8', '1/2'], ['1/3', '1/3', '2/3'], ['2/5', '1/5', '3/5'],
  ['1/2', '1/8', '5/8'], ['1/4', '1/2', '3/4'], ['1/8', '1/8', '1/4'],
  ['1/3', '2/3', '1'], ['1/5', '2/5', '3/5'], ['5/8', '1/8', '3/4'],
]

// [unsimplified, simplified, near-miss wrongs]
const SIMPLIFY_SETS = [
  ['12/16', '3/4', ['6/8', '4/6', '2/3']],
  ['10/15', '2/3', ['5/10', '3/4', '2/5']],
  ['8/12', '2/3', ['4/6', '3/4', '1/2']],
  ['6/9', '2/3', ['3/6', '1/3', '3/4']],
  ['15/20', '3/4', ['5/10', '2/3', '4/5']],
  ['4/10', '2/5', ['2/4', '1/5', '4/5']],
  ['9/12', '3/4', ['3/6', '2/3', '4/5']],
  ['14/21', '2/3', ['7/14', '3/4', '1/2']],
  ['16/20', '4/5', ['8/12', '3/4', '2/5']],
  ['6/8', '3/4', ['2/3', '4/6', '1/2']],
]

export function genFraction(rng, level = 2) {
  const kinds =
    level === 1 ? ['of'] : level === 2 ? ['of', 'toPercent', 'fromPercent'] : ['of', 'toPercent', 'fromPercent', 'add', 'simplify']
  const kind = rng.pick(kinds)

  if (kind === 'of') {
    const d = rng.pick(OF_DENOMS[level])
    let n
    do {
      n = rng.randInt(1, d - 1)
    } while (gcd(n, d) !== 1)
    const k = rng.randInt(2, level === 3 ? 12 : 8)
    const base = d * k
    const ans = n * k
    const candidates = [k, (d - n) * k, ans + k, ans - k, ans + 1]
    const { options, correctIndex } = finalizeOptions(rng, ans, candidates, { min: 1 })
    return {
      id: nextId('quant-frac'),
      section: 'quant',
      type: 'fractions',
      prompt: `What is ${n}/${d} of ${base}?`,
      options,
      correctIndex,
      explanation: `${base} / ${d} = ${k}, then ${n} x ${k} = ${ans}.`,
    }
  }

  if (kind === 'toPercent') {
    const [frac, pct] = rng.pick(PERCENT_PAIRS)
    const wrongs = rng.shuffle(PERCENT_PAIRS.filter(([, v]) => v !== pct)).map(([, v]) => `${v}%`)
    const { options, correctIndex } = finalizeOptions(rng, `${pct}%`, wrongs, {
      format: String,
      topUp: (k, isTaken) => wrongs.find((w) => !isTaken(w)),
    })
    return {
      id: nextId('quant-frac'),
      section: 'quant',
      type: 'fractions',
      prompt: `What is ${frac} as a percentage?`,
      options,
      correctIndex,
      explanation: `${frac} of 100 is ${pct}, so ${frac} = ${pct}%.`,
    }
  }

  if (kind === 'fromPercent') {
    const [frac, pct] = rng.pick(PERCENT_PAIRS)
    const wrongs = rng.shuffle(PERCENT_PAIRS.filter(([f]) => f !== frac)).map(([f]) => f)
    const { options, correctIndex } = finalizeOptions(rng, frac, wrongs, {
      format: String,
      topUp: (k, isTaken) => wrongs.find((w) => !isTaken(w)),
    })
    return {
      id: nextId('quant-frac'),
      section: 'quant',
      type: 'fractions',
      prompt: `Write ${pct}% as a fraction in its simplest form.`,
      options,
      correctIndex,
      explanation: `${pct}% means ${pct}/100, which simplifies to ${frac}.`,
    }
  }

  if (kind === 'add') {
    const [a, b, res] = rng.pick(ADD_TRIPLES)
    const wrongPool = rng.shuffle(
      [...new Set(ADD_TRIPLES.map((t) => t[2]).concat(['1/8', '3/8', '4/5', '1/6']))].filter((f) => f !== res),
    )
    const { options, correctIndex } = finalizeOptions(rng, res, wrongPool, {
      format: String,
      topUp: (k, isTaken) => wrongPool.find((w) => !isTaken(w)),
    })
    return {
      id: nextId('quant-frac'),
      section: 'quant',
      type: 'fractions',
      prompt: `${a} + ${b} = ?`,
      options,
      correctIndex,
      explanation: `Put both over the same denominator: ${a} + ${b} = ${res}.`,
    }
  }

  // simplify
  const [big, simple, wrongs] = rng.pick(SIMPLIFY_SETS)
  const { options, correctIndex } = finalizeOptions(rng, simple, wrongs, {
    format: String,
    topUp: (k, isTaken) => ['1/2', '2/3', '3/5', '5/8'].find((w) => !isTaken(w)),
  })
  return {
    id: nextId('quant-frac'),
    section: 'quant',
    type: 'fractions',
    prompt: `Simplify ${big} as far as possible.`,
    options,
    correctIndex,
    explanation: `Divide top and bottom of ${big} by their largest common factor: ${simple}.`,
  }
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}
