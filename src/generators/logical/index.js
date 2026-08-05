import { genAlphabetize } from './alphabetize.js'
import { genNumberSeries } from './numberSeries.js'
import { genLetterSeries } from './letterSeries.js'
import { genOddOneOut } from './oddOneOut.js'
import { genCoding } from './coding.js'

export const logicalPool = [
  { fn: genAlphabetize, weight: 2 },
  { fn: genNumberSeries, weight: 3 },
  { fn: genLetterSeries, weight: 2 },
  { fn: genOddOneOut, weight: 2 },
  { fn: genCoding, weight: 2 },
]
