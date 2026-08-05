import { genPercent } from './percent.js'
import { genTables } from './tables.js'
import { genDivision } from './division.js'
import { genOrderOfOps } from './orderOfOps.js'
import { genSdt } from './sdt.js'
import { genWordProblem } from './wordProblems.js'

// Weighted toward percents, tables, and division per exam emphasis.
export const quantPool = [
  { fn: genPercent, weight: 3 },
  { fn: genTables, weight: 3 },
  { fn: genDivision, weight: 3 },
  { fn: genOrderOfOps, weight: 2 },
  { fn: genSdt, weight: 2 },
  { fn: genWordProblem, weight: 2 },
]
