// Oral interview technical bank. Stage 1: every question is entered with its
// frequency tier and category, but the answer content fields are null until
// they are written and reviewed. isComplete() gates what the Exam can draw and
// what the Textbook shows as written.
//
// Content rules for Stage 2:
// - conceptExplanation teaches the concept in plain natural English.
// - spokenVersion is a 3 to 6 bullet skeleton of key points, not a script.
// - Answers are unverified aviation theory until checked by a captain.
// After editing, regenerate the audit file: npm run oral-review

export const ORAL_CATEGORIES = [
  'aerodynamics',
  'performance',
  'instruments',
  'meteorology',
  'navigation',
  'general',
]

export const CATEGORY_LABELS = {
  aerodynamics: 'Aerodynamics',
  performance: 'Performance',
  instruments: 'Instruments',
  meteorology: 'Meteorology',
  navigation: 'Navigation',
  general: 'General',
}

const CATEGORY_CODES = {
  aerodynamics: 'aero',
  performance: 'perf',
  instruments: 'inst',
  meteorology: 'met',
  navigation: 'nav',
  general: 'gen',
}

export const FREQ_LABELS = {
  5: 'Almost certain',
  4: 'Very common',
  3: 'Common',
  2: 'Occasional',
  1: 'Rare',
}

export const FREQ_DETAIL = {
  5: 'Asked in 5 of 5 interview sets',
  4: 'Asked in 4 of 5 interview sets',
  3: 'Asked in 3 of 5 interview sets',
  2: 'Asked in 2 of 5 interview sets',
  1: 'Asked in 1 of 5 interview sets',
}

const raw = [
  // ---------- aerodynamics ----------
  { id: 'oral-aero-01', category: 'aerodynamics', frequency: 5, question: 'What is drag and what are the types of drag?' },
  { id: 'oral-aero-02', category: 'aerodynamics', frequency: 4, question: 'What are the four forces acting on an aircraft?' },
  { id: 'oral-aero-03', category: 'aerodynamics', frequency: 4, question: 'What is lift and how is it generated?' },
  { id: 'oral-aero-04', category: 'aerodynamics', frequency: 3, question: 'What is a stall?' },
  { id: 'oral-aero-05', category: 'aerodynamics', frequency: 3, question: 'What is Mach number? Is it the same at high and low level?' },
  { id: 'oral-aero-06', category: 'aerodynamics', frequency: 3, question: 'What are the types of flaps, how does each work, and what are the pros and cons?' },
  { id: 'oral-aero-07', category: 'aerodynamics', frequency: 3, question: 'What are the types of slats, how do they work, and what is the difference between a flap and a slat?' },
  { id: 'oral-aero-08', category: 'aerodynamics', frequency: 2, question: 'What is the lift formula, what is CL, and what can you change in it?' },
  { id: 'oral-aero-09', category: 'aerodynamics', frequency: 2, question: 'What is angle of attack?' },
  { id: 'oral-aero-10', category: 'aerodynamics', frequency: 2, question: 'What is induced drag and how do you reduce it?' },
  { id: 'oral-aero-11', category: 'aerodynamics', frequency: 2, question: 'How do you recover from a stall?' },
  { id: 'oral-aero-12', category: 'aerodynamics', frequency: 2, question: 'What are wingtip vortices and how do winglets help?' },
  { id: 'oral-aero-13', category: 'aerodynamics', frequency: 2, question: 'What is a vortex generator and what does it do?' },
  { id: 'oral-aero-14', category: 'aerodynamics', frequency: 2, question: 'What is coffin corner?' },
  { id: 'oral-aero-15', category: 'aerodynamics', frequency: 2, question: 'What are spoilers used for?' },
  { id: 'oral-aero-16', category: 'aerodynamics', frequency: 2, question: 'What is the local speed of sound, what affects it, and what is it at sea level?' },
  { id: 'oral-aero-17', category: 'aerodynamics', frequency: 2, question: 'What are the primary flight controls?' },
  { id: 'oral-aero-18', category: 'aerodynamics', frequency: 1, question: 'What are the different types of drag, in depth?' },
  { id: 'oral-aero-19', category: 'aerodynamics', frequency: 1, question: 'What is interference drag, how does it form, and how do you reduce it?' },
  { id: 'oral-aero-20', category: 'aerodynamics', frequency: 1, question: 'What is the critical angle of attack?' },
  { id: 'oral-aero-21', category: 'aerodynamics', frequency: 1, question: 'Can you stall at high speed?' },
  { id: 'oral-aero-22', category: 'aerodynamics', frequency: 1, question: 'What is a secondary stall and how do you recover?' },
  { id: 'oral-aero-23', category: 'aerodynamics', frequency: 1, question: 'What is downwash?' },
  { id: 'oral-aero-24', category: 'aerodynamics', frequency: 1, question: 'What does a sweptback wing do? Advantages and disadvantages?' },
  { id: 'oral-aero-25', category: 'aerodynamics', frequency: 1, question: 'What is Mcrit and why do shockwaves happen?' },
  { id: 'oral-aero-26', category: 'aerodynamics', frequency: 1, question: 'What is Dutch roll and how do you prevent it?' },
  { id: 'oral-aero-27', category: 'aerodynamics', frequency: 1, question: 'What is lateral stability?' },
  { id: 'oral-aero-28', category: 'aerodynamics', frequency: 1, question: 'What is directional stability?' },
  { id: 'oral-aero-29', category: 'aerodynamics', frequency: 1, question: 'Can an aircraft be statically unstable and dynamically stable?' },
  { id: 'oral-aero-30', category: 'aerodynamics', frequency: 1, question: 'How does an aircraft fly?' },
  { id: 'oral-aero-31', category: 'aerodynamics', frequency: 1, question: 'What are fences?' },
  { id: 'oral-aero-32', category: 'aerodynamics', frequency: 1, question: 'What is wake turbulence?' },

  // ---------- performance ----------
  { id: 'oral-perf-01', category: 'performance', frequency: 3, question: 'Name and define all the speeds on the aircraft.' },
  { id: 'oral-perf-02', category: 'performance', frequency: 3, question: 'What are the takeoff segments?' },
  { id: 'oral-perf-03', category: 'performance', frequency: 2, question: 'Maximum endurance versus maximum range: what is the difference?' },
  { id: 'oral-perf-04', category: 'performance', frequency: 2, question: 'What is screen height? Does it change?' },
  { id: 'oral-perf-05', category: 'performance', frequency: 1, question: 'What is V1?' },
  { id: 'oral-perf-06', category: 'performance', frequency: 1, question: 'Service ceiling and absolute ceiling: define both.' },
  { id: 'oral-perf-07', category: 'performance', frequency: 1, question: 'A heavy aircraft is landing. What happens to the landing distance and why?' },
  { id: 'oral-perf-08', category: 'performance', frequency: 1, question: 'Landing at a high elevation airport, what happens to the landing distance?' },
  { id: 'oral-perf-09', category: 'performance', frequency: 1, question: 'Takeoff segments: why 1500 ft?' },

  // ---------- instruments ----------
  { id: 'oral-inst-01', category: 'instruments', frequency: 5, question: 'What is TAS?' },
  { id: 'oral-inst-02', category: 'instruments', frequency: 2, question: 'Does TAS change with altitude? What happens during the climb?' },
  { id: 'oral-inst-03', category: 'instruments', frequency: 2, question: 'Two aircraft at the same IAS, one at FL200 and one at FL350: which is faster and why?' },
  { id: 'oral-inst-04', category: 'instruments', frequency: 2, question: 'IAS, CAS, EAS: define each.' },
  { id: 'oral-inst-05', category: 'instruments', frequency: 2, question: 'What is ground speed?' },
  { id: 'oral-inst-06', category: 'instruments', frequency: 2, question: 'What happens if the pitot is blocked, in the climb and the descent? What happens to the VSI?' },
  { id: 'oral-inst-07', category: 'instruments', frequency: 1, question: 'What are the pressure instruments and how do they work?' },
  { id: 'oral-inst-08', category: 'instruments', frequency: 1, question: 'Explain the pitot system and which pressure it uses.' },
  { id: 'oral-inst-09', category: 'instruments', frequency: 1, question: 'What is GPWS and what are its modes?' },
  { id: 'oral-inst-10', category: 'instruments', frequency: 1, question: 'What is TCAS? What is a TA and what is an RA?' },
  { id: 'oral-inst-11', category: 'instruments', frequency: 1, question: 'What is TAT and what is SAT?' },
  { id: 'oral-inst-12', category: 'instruments', frequency: 1, question: 'What is QNH and what is QFE?' },

  // ---------- meteorology ----------
  { id: 'oral-met-01', category: 'meteorology', frequency: 4, question: 'What is a jetstream, how does it form, and where do you find it?' },
  { id: 'oral-met-02', category: 'meteorology', frequency: 3, question: 'What is a thunderstorm and what are its stages?' },
  { id: 'oral-met-03', category: 'meteorology', frequency: 3, question: 'What is ISA, its parameters, and the lapse rates DALR, ELR, SALR?' },
  { id: 'oral-met-04', category: 'meteorology', frequency: 3, question: 'What is the tropopause and what happens there? What is its height at the equator and the poles?' },
  { id: 'oral-met-05', category: 'meteorology', frequency: 3, question: 'What is CAT, what causes it, and where do you find it?' },
  { id: 'oral-met-06', category: 'meteorology', frequency: 2, question: 'How do clouds form?' },
  { id: 'oral-met-07', category: 'meteorology', frequency: 2, question: 'How are clouds classified and what are the families?' },
  { id: 'oral-met-08', category: 'meteorology', frequency: 2, question: 'What is a microburst, what are its types, and why is it hazardous?' },
  { id: 'oral-met-09', category: 'meteorology', frequency: 2, question: 'What are the types of fog?' },
  { id: 'oral-met-10', category: 'meteorology', frequency: 2, question: 'Virga, dew, mist, haze: define each.' },
  { id: 'oral-met-11', category: 'meteorology', frequency: 2, question: 'What are the layers of the atmosphere?' },
  { id: 'oral-met-12', category: 'meteorology', frequency: 2, question: 'What is windshear, how is it formed, and how do you handle it on the approach?' },
  { id: 'oral-met-13', category: 'meteorology', frequency: 1, question: 'What is the major reason for weather changes?' },
  { id: 'oral-met-14', category: 'meteorology', frequency: 1, question: 'What is the air composed of?' },
  { id: 'oral-met-15', category: 'meteorology', frequency: 1, question: 'What causes wind? Explain pressure gradient and Coriolis.' },
  { id: 'oral-met-16', category: 'meteorology', frequency: 1, question: 'Why are isobars more parallel at altitude and less so near the ground?' },
  { id: 'oral-met-17', category: 'meteorology', frequency: 1, question: 'What is stability, what makes air stable, and which clouds form in each case?' },
  { id: 'oral-met-18', category: 'meteorology', frequency: 1, question: 'What is an air mass?' },
  { id: 'oral-met-19', category: 'meteorology', frequency: 1, question: 'What are the types of icing?' },
  { id: 'oral-met-20', category: 'meteorology', frequency: 1, question: 'What are the types of fronts and what weather does each bring?' },
  { id: 'oral-met-21', category: 'meteorology', frequency: 1, question: 'What is a temperature inversion and what is an isotherm?' },
  { id: 'oral-met-22', category: 'meteorology', frequency: 1, question: 'High pressure versus low pressure: which is good and which is bad?' },
  { id: 'oral-met-23', category: 'meteorology', frequency: 1, question: 'What are the lifting mechanisms?' },
  { id: 'oral-met-24', category: 'meteorology', frequency: 1, question: 'What is a Foehn wind?' },
  { id: 'oral-met-25', category: 'meteorology', frequency: 1, question: 'What are oktas, and what is the difference between cloud base and cloud top?' },
  { id: 'oral-met-26', category: 'meteorology', frequency: 1, question: 'Do stratus clouds produce precipitation?' },
  { id: 'oral-met-27', category: 'meteorology', frequency: 1, question: 'What is a gust and how does it appear in a METAR?' },
  { id: 'oral-met-28', category: 'meteorology', frequency: 1, question: 'What is a cyclone?' },
  { id: 'oral-met-29', category: 'meteorology', frequency: 1, question: 'What is latent heat?' },
  { id: 'oral-met-30', category: 'meteorology', frequency: 1, question: 'What is the hazard of a volcanic eruption to aviation?' },
  { id: 'oral-met-31', category: 'meteorology', frequency: 1, question: 'When do you need an alternate, and when would you use a METAR versus a TAF for that decision?' },
  { id: 'oral-met-32', category: 'meteorology', frequency: 1, question: 'CAVOK: what does it mean?' },
  { id: 'oral-met-33', category: 'meteorology', frequency: 1, question: 'What is CB and what makes it hazardous?' },

  // ---------- navigation ----------
  { id: 'oral-nav-01', category: 'navigation', frequency: 4, question: 'ILS: how does it work, what are its frequencies, what does it combine, and what are its errors?' },
  { id: 'oral-nav-02', category: 'navigation', frequency: 2, question: 'What are the approach segments?' },
  { id: 'oral-nav-03', category: 'navigation', frequency: 2, question: 'IRS and INS: what are they, how do they work, and what is the difference?' },
  { id: 'oral-nav-04', category: 'navigation', frequency: 2, question: 'RNAV and GPS: what are they and what are the charts used for?' },
  { id: 'oral-nav-05', category: 'navigation', frequency: 1, question: 'What is the point of equal time?' },
  { id: 'oral-nav-06', category: 'navigation', frequency: 1, question: 'What is DME and what is slant range?' },
  { id: 'oral-nav-07', category: 'navigation', frequency: 1, question: 'What are the VOR errors?' },
  { id: 'oral-nav-08', category: 'navigation', frequency: 1, question: 'What is an NDB and what are its errors, including coastal refraction and static?' },
  { id: 'oral-nav-09', category: 'navigation', frequency: 1, question: 'What is a false glideslope?' },
  { id: 'oral-nav-10', category: 'navigation', frequency: 1, question: 'What is TCH and why does it differ from runway elevation?' },
  { id: 'oral-nav-11', category: 'navigation', frequency: 1, question: 'Where do we use HF frequencies?' },
  { id: 'oral-nav-12', category: 'navigation', frequency: 1, question: 'Where do we use VHF?' },
  { id: 'oral-nav-13', category: 'navigation', frequency: 1, question: 'Explain how radio waves travel.' },
  { id: 'oral-nav-14', category: 'navigation', frequency: 1, question: 'Explain the night effect.' },
  { id: 'oral-nav-15', category: 'navigation', frequency: 1, question: 'Which is more accurate, GPS or VOR?' },
  { id: 'oral-nav-16', category: 'navigation', frequency: 1, question: 'What is MLS?' },
  { id: 'oral-nav-17', category: 'navigation', frequency: 1, question: 'What does it mean to level off at a flight level, and what is an airway?' },

  // ---------- general ----------
  { id: 'oral-gen-01', category: 'general', frequency: 4, question: 'What is ETOPS?' },
  { id: 'oral-gen-02', category: 'general', frequency: 2, question: 'What is a NOTAM and what is it used for?' },
  { id: 'oral-gen-03', category: 'general', frequency: 1, question: 'Tell me something about the engine.' },
  { id: 'oral-gen-04', category: 'general', frequency: 1, question: 'What is hypoxia, what does it cause, and what is the time of useful consciousness at 30,000 ft?' },
  { id: 'oral-gen-05', category: 'general', frequency: 1, question: 'What is a stopbar?' },
]

// A question is complete only when every content field is written and well
// formed. Half-written entries are treated as pending everywhere.
export function isComplete(q) {
  return Boolean(
    q.conceptExplanation &&
      Array.isArray(q.spokenVersion) &&
      q.spokenVersion.length >= 3 &&
      q.spokenVersion.length <= 6 &&
      q.mcq &&
      q.mcq.options?.length === 4 &&
      Number.isInteger(q.mcq.correctIndex) &&
      q.mcq.options[q.mcq.correctIndex] !== undefined &&
      q.flashcardAnswer
  )
}

// Validation runs at module load so a malformed entry can never ship silently.
const seenIds = new Set()
for (const item of raw) {
  const where = item.id ?? item.question ?? 'unknown entry'
  if (!item.id || !/^oral-(aero|perf|inst|met|nav|gen)-\d{2}$/.test(item.id)) {
    throw new Error(`oralBank: bad id on ${where}`)
  }
  if (seenIds.has(item.id)) throw new Error(`oralBank: duplicate id ${item.id}`)
  seenIds.add(item.id)
  if (!ORAL_CATEGORIES.includes(item.category)) {
    throw new Error(`oralBank: unknown category "${item.category}" on ${where}`)
  }
  if (!item.id.startsWith(`oral-${CATEGORY_CODES[item.category]}-`)) {
    throw new Error(`oralBank: id ${item.id} does not match category ${item.category}`)
  }
  if (!Number.isInteger(item.frequency) || item.frequency < 1 || item.frequency > 5) {
    throw new Error(`oralBank: bad frequency on ${where}`)
  }
  if (!item.question || !item.question.trim()) throw new Error(`oralBank: empty question on ${where}`)
  if (item.mcq) {
    if (item.mcq.options?.length !== 4 || new Set(item.mcq.options).size !== 4) {
      throw new Error(`oralBank: mcq needs 4 unique options on ${where}`)
    }
    if (item.mcq.options[item.mcq.correctIndex] === undefined) {
      throw new Error(`oralBank: bad mcq correctIndex on ${where}`)
    }
  }
  if (item.spokenVersion && (item.spokenVersion.length < 3 || item.spokenVersion.length > 6)) {
    throw new Error(`oralBank: spokenVersion must be 3 to 6 bullets on ${where}`)
  }
  const texts = [
    item.question,
    item.conceptExplanation,
    item.flashcardAnswer,
    ...(item.spokenVersion ?? []),
    ...(item.mcq?.options ?? []),
  ]
  for (const t of texts) {
    if (typeof t === 'string' && t.includes('—')) {
      throw new Error(`oralBank: em-dash found on ${where}`)
    }
  }
}

export const oralBank = raw.map((item) => ({
  conceptExplanation: null,
  spokenVersion: null,
  mcq: null,
  flashcardAnswer: null,
  ...item,
}))

export function completeOralQuestions() {
  return oralBank.filter(isComplete)
}
