import { genPercent } from './percent.js'
import { genTables } from './tables.js'
import { genDivision } from './division.js'
import { genOrderOfOps } from './orderOfOps.js'
import { genSdt } from './sdt.js'
import { genWordProblem } from './wordProblems.js'
import { genFraction } from './fractions.js'

// Weighted to mirror the real 20-question paper: 5 BEDMAS, 5 percentages,
// then fractions, word problems, tables, division, and speed-distance-time.
export const quantPool = [
  { fn: genOrderOfOps, weight: 5 },
  { fn: genPercent, weight: 5 },
  { fn: genFraction, weight: 3 },
  { fn: genWordProblem, weight: 3 },
  { fn: genTables, weight: 2 },
  { fn: genDivision, weight: 1 },
  { fn: genSdt, weight: 1 },
]
