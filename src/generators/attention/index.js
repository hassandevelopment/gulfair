import { genAnagramCheck } from './anagramCheck.js'
import { genFindDifferent } from './findDifferent.js'
import { genCountChars } from './countChars.js'
import { genMatchPair } from './matchPair.js'

export const attentionPool = [
  { fn: genAnagramCheck, weight: 2 },
  { fn: genFindDifferent, weight: 3 },
  { fn: genCountChars, weight: 2 },
  { fn: genMatchPair, weight: 3 },
]
