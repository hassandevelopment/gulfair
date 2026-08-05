// A source is { next(): Question }. The quiz screen only ever calls next(),
// so generated sections and the static verbal bank behave identically.

// getLevel(i) maps the i-th question served to a difficulty level (1..3);
// generators that take a level use it, the rest ignore the extra argument.
export function makeGeneratorSource(pool, rng, getLevel = () => 2) {
  const total = pool.reduce((s, g) => s + g.weight, 0)
  let served = 0
  return {
    next() {
      const level = getLevel(served)
      served += 1
      let r = rng.next() * total
      for (const g of pool) {
        r -= g.weight
        if (r <= 0) return g.fn(rng, level)
      }
      return pool[pool.length - 1].fn(rng, level)
    },
  }
}

// Shuffled cycle over a static bank: no repeats until the pool is exhausted.
// cycle ({ order, pos }) is persisted by the caller so the guarantee holds
// across sessions. Reshuffles only on exhaustion, guarding against a
// back-to-back repeat at the cycle boundary.
export function makeBankSource(bank, rng, cycle, onCycleChange) {
  let order = cycle?.order?.length === bank.length ? cycle.order.slice() : null
  let pos = order ? Math.min(cycle.pos, order.length) : 0
  if (!order) {
    order = rng.shuffle(bank.map((_, i) => i))
    pos = 0
  }
  return {
    next() {
      if (pos >= order.length) {
        const last = order[order.length - 1]
        let fresh = rng.shuffle(bank.map((_, i) => i))
        if (fresh[0] === last && fresh.length > 1) {
          ;[fresh[0], fresh[fresh.length - 1]] = [fresh[fresh.length - 1], fresh[0]]
        }
        order = fresh
        pos = 0
      }
      const q = bank[order[pos]]
      pos += 1
      onCycleChange?.({ order: order.slice(), pos })
      return q
    },
  }
}

export function makeMockSource(sources, rng) {
  return {
    next() {
      return rng.pick(sources).next()
    },
  }
}
