// Small seeded PRNG (mulberry32) so generation is deterministic per seed.
function mulberry32(seed) {
  let a = seed >>> 0
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function createRng(seed = (Math.random() * 2 ** 32) >>> 0) {
  const next = mulberry32(seed)
  const rng = {
    seed,
    next,
    // integer in [min, max] inclusive
    randInt(min, max) {
      return min + Math.floor(next() * (max - min + 1))
    },
    pick(arr) {
      return arr[Math.floor(next() * arr.length)]
    },
    // Fisher-Yates, returns a new array
    shuffle(arr) {
      const a = arr.slice()
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(next() * (i + 1))
        ;[a[i], a[j]] = [a[j], a[i]]
      }
      return a
    },
    chance(p) {
      return next() < p
    },
  }
  return rng
}

let nonce = 0
export function nextId(prefix) {
  nonce += 1
  return `${prefix}-${nonce}`
}
