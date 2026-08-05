// Curated verbal bank. Each raw item stores the answer as the literal string;
// correctIndex is computed at load time and the module throws if an answer is
// missing from its options, so a wrong answer key cannot ship silently.
// After editing, regenerate the audit file: npm run verbal-review

export const VERBAL_RULES = [
  'loose_vs_lose',
  'their_there',
  'since_because',
  'affect_effect',
  'fewer_less',
  'subject_verb',
  'correct_sentence',
  'confusable',
  'synonym',
  'antonym',
  'sentence_completion',
]

export const RULE_LABELS = {
  loose_vs_lose: 'Loose vs lose',
  their_there: 'Their / there / they\'re',
  since_because: 'Since vs because',
  affect_effect: 'Affect vs effect',
  fewer_less: 'Fewer vs less',
  subject_verb: 'Subject-verb agreement',
  correct_sentence: 'Choose the correct sentence',
  confusable: 'Common confusables',
  synonym: 'Synonyms',
  antonym: 'Antonyms',
  sentence_completion: 'Sentence completion',
}

const raw = [
  // ---------- loose_vs_lose ----------
  { rule: 'loose_vs_lose', prompt: 'If you are not careful, you will ___ your boarding pass.', options: ['loose', 'lose', 'loss', 'loosen'], answer: 'lose', explanation: 'Lose is the verb meaning to misplace; loose is the adjective meaning not tight.' },
  { rule: 'loose_vs_lose', prompt: 'The screw on the tray table is ___.', options: ['lose', 'loss', 'loose', 'losing'], answer: 'loose', explanation: 'Loose is the adjective meaning not firmly fixed; lose is a verb.' },
  { rule: 'loose_vs_lose', prompt: 'Did the team ___ the match?', options: ['loose', 'lose', 'loss', 'loosed'], answer: 'lose', explanation: 'Lose is the verb meaning to be defeated; loose is an adjective.' },
  { rule: 'loose_vs_lose', prompt: 'My belt feels too ___ after the flight.', options: ['lose', 'loose', 'loss', 'losing'], answer: 'loose', explanation: 'Loose means not tight; lose is the verb.' },
  { rule: 'loose_vs_lose', prompt: 'He tends to ___ track of time.', options: ['loss', 'loose', 'loosen', 'lose'], answer: 'lose', explanation: 'To lose track of time is the verb phrase; loose is an adjective.' },
  { rule: 'loose_vs_lose', prompt: 'The dog got ___ and ran across the car park.', options: ['loose', 'lose', 'loss', 'lost'], answer: 'loose', explanation: 'Got loose means became free; lose is the verb to misplace.' },
  { rule: 'loose_vs_lose', prompt: 'We cannot afford to ___ this client.', options: ['loose', 'loss', 'lose', 'loosely'], answer: 'lose', explanation: 'Lose is the verb; loss is the noun; loose is the adjective.' },
  { rule: 'loose_vs_lose', prompt: 'She wore a ___ jacket over her uniform.', options: ['lose', 'loose', 'losing', 'loss'], answer: 'loose', explanation: 'Loose describes a relaxed fit; lose is a verb.' },
  { rule: 'loose_vs_lose', prompt: 'If the knot is too ___, the cargo will shift.', options: ['loose', 'lose', 'loss', 'losable'], answer: 'loose', explanation: 'Loose is the adjective meaning not tight.' },
  { rule: 'loose_vs_lose', prompt: 'They will ___ the deposit if they cancel late.', options: ['loss', 'loose', 'lose', 'loosen'], answer: 'lose', explanation: 'Lose is the verb meaning to forfeit; loss is the noun.' },
  { rule: 'loose_vs_lose', prompt: 'A ___ wire caused the fault.', options: ['lose', 'loss', 'losing', 'loose'], answer: 'loose', explanation: 'Loose is the adjective meaning not firmly attached.' },
  { rule: 'loose_vs_lose', prompt: 'You have nothing to ___.', options: ['loose', 'lose', 'loss', 'loosen'], answer: 'lose', explanation: 'Lose is the verb; nothing to lose is the fixed phrase.' },
  { rule: 'loose_vs_lose', prompt: 'The airline reported a heavy ___ last quarter.', options: ['lose', 'loose', 'loss', 'lost'], answer: 'loss', explanation: 'Loss is the noun; lose is the verb; loose is the adjective.' },
  { rule: 'loose_vs_lose', prompt: 'Do not ___ hope; the standby list is short.', options: ['loose', 'loss', 'loosen', 'lose'], answer: 'lose', explanation: 'Lose is the verb meaning to stop having something.' },

  // ---------- their_there ----------
  { rule: 'their_there', prompt: 'The crew left ___ bags in the hold.', options: ['there', 'their', 'they\'re', 'theirs'], answer: 'their', explanation: 'Their is the possessive: the bags belong to the crew.' },
  { rule: 'their_there', prompt: '___ is a delay on runway two.', options: ['Their', 'They\'re', 'There', 'Theirs'], answer: 'There', explanation: 'There introduces that something exists; their is possessive.' },
  { rule: 'their_there', prompt: '___ going to board in ten minutes.', options: ['They\'re', 'Their', 'There', 'Theirs'], answer: 'They\'re', explanation: 'They\'re is the contraction of they are.' },
  { rule: 'their_there', prompt: 'The passengers took ___ seats.', options: ['there', 'they\'re', 'their', 'theres'], answer: 'their', explanation: 'Their is possessive: the seats belong to the passengers.' },
  { rule: 'their_there', prompt: 'Put the trolley over ___.', options: ['their', 'there', 'they\'re', 'theirs'], answer: 'there', explanation: 'There refers to a place.' },
  { rule: 'their_there', prompt: '___ flight was cancelled, so ___ waiting in the lounge.', options: ['There / their', 'Their / they\'re', 'They\'re / there', 'Their / there'], answer: 'Their / they\'re', explanation: 'Their flight (possessive), then they\'re waiting (they are).' },
  { rule: 'their_there', prompt: 'Is ___ a doctor on board?', options: ['their', 'they\'re', 'theirs', 'there'], answer: 'there', explanation: 'There is used to say something exists.' },
  { rule: 'their_there', prompt: '___ sure the gate has changed.', options: ['They\'re', 'Their', 'There', 'Theres'], answer: 'They\'re', explanation: 'They\'re means they are: they are sure.' },
  { rule: 'their_there', prompt: 'The pilots checked ___ instruments.', options: ['there', 'their', 'they\'re', 'there\'s'], answer: 'their', explanation: 'Their is possessive: the instruments belong to the pilots.' },
  { rule: 'their_there', prompt: 'We got ___ an hour early.', options: ['their', 'they\'re', 'there', 'theirs'], answer: 'there', explanation: 'There is the place we arrived at.' },
  { rule: 'their_there', prompt: '___ luggage is still at ___ hotel.', options: ['Their / their', 'There / their', 'Their / there', 'They\'re / their'], answer: 'Their / their', explanation: 'Both blanks are possessive: the luggage and the hotel relate to them.' },
  { rule: 'their_there', prompt: 'I think ___ running late.', options: ['their', 'there', 'theirs', 'they\'re'], answer: 'they\'re', explanation: 'They\'re is the contraction of they are: they are running late.' },
  { rule: 'their_there', prompt: 'The car over ___ is ___ rental.', options: ['there / their', 'their / there', 'they\'re / their', 'there / they\'re'], answer: 'there / their', explanation: 'Over there is a place; their rental is possessive.' },
  { rule: 'their_there', prompt: '___ is no reason to panic; ___ trained for this.', options: ['Their / they\'re', 'There / they\'re', 'There / their', 'They\'re / there'], answer: 'There / they\'re', explanation: 'There is (existence), then they\'re trained (they are).' },

  // ---------- since_because ----------
  { rule: 'since_because', prompt: 'The flight was delayed ___ the weather was bad.', options: ['since', 'because', 'while', 'during'], answer: 'because', explanation: 'Because gives the reason; since is used for time in these tests.' },
  { rule: 'since_because', prompt: 'She has been a cabin crew member ___ 2019.', options: ['because', 'since', 'from when', 'due to'], answer: 'since', explanation: 'Since marks the starting point in time (2019).' },
  { rule: 'since_because', prompt: 'We diverted ___ the runway was closed.', options: ['since', 'until', 'because', 'during'], answer: 'because', explanation: 'The closed runway is the reason, so because is correct.' },
  { rule: 'since_because', prompt: 'He has felt unwell ___ the meal service.', options: ['because', 'since', 'due to', 'so'], answer: 'since', explanation: 'Since marks time: from the meal service until now.' },
  { rule: 'since_because', prompt: '___ the seatbelt sign is on, please remain seated.', options: ['Since 2019', 'During', 'Until', 'Because'], answer: 'Because', explanation: 'The sign being on is the reason for staying seated.' },
  { rule: 'since_because', prompt: 'They have been friends ___ training school.', options: ['because', 'due to', 'since', 'so that'], answer: 'since', explanation: 'Since marks the starting time: from training school onward.' },
  { rule: 'since_because', prompt: 'The gate changed ___ the aircraft was swapped.', options: ['since', 'because', 'until', 'while'], answer: 'because', explanation: 'The swap is the reason for the change, so because is correct.' },
  { rule: 'since_because', prompt: 'I have not seen her ___ Tuesday.', options: ['because', 'since', 'until', 'from'], answer: 'since', explanation: 'Since marks time: from Tuesday until now.' },
  { rule: 'since_because', prompt: 'We boarded early ___ the flight was full.', options: ['since 2020', 'until', 'because', 'during'], answer: 'because', explanation: 'The full flight is the reason for boarding early.' },
  { rule: 'since_because', prompt: 'The lounge has been closed ___ March.', options: ['because', 'due to', 'until', 'since'], answer: 'since', explanation: 'Since marks the starting point in time (March).' },
  { rule: 'since_because', prompt: '___ joining the airline, he has moved twice.', options: ['Because', 'Since', 'Due to', 'While'], answer: 'Since', explanation: 'Since marks time: from the moment of joining until now.' },
  { rule: 'since_because', prompt: 'The captain reduced speed ___ of turbulence.', options: ['since', 'because', 'due', 'as of'], answer: 'because', explanation: 'Because of is the reason phrase; since of is not English.' },
  { rule: 'since_because', prompt: 'It has been raining ___ midnight.', options: ['because', 'during', 'since', 'while'], answer: 'since', explanation: 'Since marks the starting time (midnight).' },
  { rule: 'since_because', prompt: 'We apologised ___ the delay was our fault.', options: ['since 2019', 'until', 'during', 'because'], answer: 'because', explanation: 'The fault is the reason for apologising, so because is correct.' },

  // ---------- affect_effect ----------
  { rule: 'affect_effect', prompt: 'The delay did not ___ our connection.', options: ['effect', 'affect', 'affection', 'effective'], answer: 'affect', explanation: 'Affect is the verb meaning to influence; effect is the noun.' },
  { rule: 'affect_effect', prompt: 'The new policy had an immediate ___.', options: ['affect', 'effect', 'affects', 'effecting'], answer: 'effect', explanation: 'Effect is the noun meaning the result; affect is the verb.' },
  { rule: 'affect_effect', prompt: 'Turbulence can ___ the meal service.', options: ['effect', 'affection', 'affect', 'effects'], answer: 'affect', explanation: 'Affect is the verb: turbulence influences the service.' },
  { rule: 'affect_effect', prompt: 'Coffee has a strong ___ on him.', options: ['affect', 'effect', 'affecting', 'effected'], answer: 'effect', explanation: 'Effect is the noun: the result coffee produces.' },
  { rule: 'affect_effect', prompt: 'Will the strike ___ your travel plans?', options: ['effect', 'affect', 'effects', 'affection'], answer: 'affect', explanation: 'Affect is the verb meaning to influence.' },
  { rule: 'affect_effect', prompt: 'The medicine took ___ within minutes.', options: ['affect', 'affects', 'effect', 'affected'], answer: 'effect', explanation: 'Took effect is the fixed noun phrase meaning started working.' },
  { rule: 'affect_effect', prompt: 'The schedule change ___ hundreds of passengers.', options: ['effected', 'affected', 'effect', 'affects on'], answer: 'affected', explanation: 'Affected is the past tense verb: it influenced the passengers.' },
  { rule: 'affect_effect', prompt: 'One ___ of jet lag is poor sleep.', options: ['affect', 'effect', 'affecting', 'affected'], answer: 'effect', explanation: 'Effect is the noun: a result of jet lag.' },
  { rule: 'affect_effect', prompt: 'His attitude ___ the whole team.', options: ['effects', 'affects', 'effect', 'affection'], answer: 'affects', explanation: 'Affects is the verb: his attitude influences the team.' },
  { rule: 'affect_effect', prompt: 'The announcement had no ___ on boarding time.', options: ['affect', 'affects', 'effect', 'affecting'], answer: 'effect', explanation: 'Effect is the noun after had: had no effect.' },
  { rule: 'affect_effect', prompt: 'Weather can seriously ___ flight schedules.', options: ['effect', 'affect', 'effects', 'effecting'], answer: 'affect', explanation: 'Affect is the verb meaning to influence.' },
  { rule: 'affect_effect', prompt: 'The new rule comes into ___ on Monday.', options: ['affect', 'effect', 'affects', 'affected'], answer: 'effect', explanation: 'Comes into effect is the fixed noun phrase.' },
  { rule: 'affect_effect', prompt: 'Losing sleep can ___ your concentration.', options: ['effect', 'affection', 'affect', 'effects'], answer: 'affect', explanation: 'Affect is the verb: lack of sleep influences concentration.' },
  { rule: 'affect_effect', prompt: 'Side ___ may include drowsiness.', options: ['affects', 'effects', 'affect', 'effected'], answer: 'effects', explanation: 'Side effects is the noun phrase; affects is a verb form.' },

  // ---------- fewer_less ----------
  { rule: 'fewer_less', prompt: 'There are ___ passengers on the evening flight.', options: ['less', 'fewer', 'lesser', 'few of'], answer: 'fewer', explanation: 'Fewer is for countable nouns; passengers can be counted.' },
  { rule: 'fewer_less', prompt: 'We have ___ time than expected.', options: ['fewer', 'less', 'fewer of', 'a fewer'], answer: 'less', explanation: 'Less is for uncountable nouns; time is uncountable.' },
  { rule: 'fewer_less', prompt: '___ than ten seats remain.', options: ['Less', 'Fewer', 'Lesser', 'Least'], answer: 'Fewer', explanation: 'Seats are countable, so fewer is correct.' },
  { rule: 'fewer_less', prompt: 'The new aircraft uses ___ fuel.', options: ['fewer', 'less', 'fewer of', 'lesser of'], answer: 'less', explanation: 'Fuel is uncountable, so less is correct.' },
  { rule: 'fewer_less', prompt: 'She made ___ mistakes on her second attempt.', options: ['less', 'lesser', 'fewer', 'least'], answer: 'fewer', explanation: 'Mistakes are countable, so fewer is correct.' },
  { rule: 'fewer_less', prompt: 'There is ___ noise in the front cabin.', options: ['fewer', 'less', 'fewer of', 'a few'], answer: 'less', explanation: 'Noise is uncountable, so less is correct.' },
  { rule: 'fewer_less', prompt: '___ bags were lost this year.', options: ['Less', 'Lesser', 'Least', 'Fewer'], answer: 'Fewer', explanation: 'Bags are countable, so fewer is correct.' },
  { rule: 'fewer_less', prompt: 'He has ___ experience than the captain.', options: ['fewer', 'less', 'fewer of', 'lesser'], answer: 'less', explanation: 'Experience is uncountable, so less is correct.' },
  { rule: 'fewer_less', prompt: 'We received ___ complaints this month.', options: ['less', 'fewer', 'lesser', 'least'], answer: 'fewer', explanation: 'Complaints are countable, so fewer is correct.' },
  { rule: 'fewer_less', prompt: 'Drink ___ coffee before a night shift.', options: ['fewer', 'fewer of', 'less', 'least of'], answer: 'less', explanation: 'Coffee as a substance is uncountable, so less is correct.' },
  { rule: 'fewer_less', prompt: 'There were ___ delays this summer.', options: ['less', 'fewer', 'lesser', 'less of'], answer: 'fewer', explanation: 'Delays are countable, so fewer is correct.' },
  { rule: 'fewer_less', prompt: 'This route has ___ traffic.', options: ['fewer', 'less', 'fewer of', 'a fewer'], answer: 'less', explanation: 'Traffic is uncountable, so less is correct.' },
  { rule: 'fewer_less', prompt: '___ people are checking in bags these days.', options: ['Less', 'Lesser', 'Fewer', 'Least'], answer: 'Fewer', explanation: 'People are countable, so fewer is correct.' },
  { rule: 'fewer_less', prompt: 'The briefing took ___ effort than expected.', options: ['fewer', 'less', 'fewer of', 'least'], answer: 'less', explanation: 'Effort is uncountable, so less is correct.' },

  // ---------- subject_verb ----------
  { rule: 'subject_verb', prompt: 'The list of passengers ___ on the desk.', options: ['are', 'is', 'were', 'have been'], answer: 'is', explanation: 'The subject is the list (singular), not the passengers.' },
  { rule: 'subject_verb', prompt: 'Each of the pilots ___ a licence.', options: ['have', 'has', 'are having', 'were having'], answer: 'has', explanation: 'Each is singular, so it takes has.' },
  { rule: 'subject_verb', prompt: 'The crew ___ ready for boarding.', options: ['are being', 'is', 'am', 'were being'], answer: 'is', explanation: 'Crew acts as a single unit here, so the singular is is used.' },
  { rule: 'subject_verb', prompt: 'Neither the captain nor the officers ___ late.', options: ['was', 'were', 'is', 'has been'], answer: 'were', explanation: 'With neither-nor, the verb agrees with the nearer subject, officers (plural).' },
  { rule: 'subject_verb', prompt: 'Everyone ___ to complete the safety course.', options: ['need', 'needs', 'are needing', 'have'], answer: 'needs', explanation: 'Everyone is singular, so it takes needs.' },
  { rule: 'subject_verb', prompt: 'The number of flights ___ increased.', options: ['have', 'has', 'are', 'were'], answer: 'has', explanation: 'The number is singular, so it takes has.' },
  { rule: 'subject_verb', prompt: 'A number of passengers ___ still waiting.', options: ['is', 'was', 'are', 'has been'], answer: 'are', explanation: 'A number of means many, and takes a plural verb.' },
  { rule: 'subject_verb', prompt: 'There ___ three exits on each side.', options: ['is', 'was', 'are', 'has'], answer: 'are', explanation: 'The real subject is three exits (plural), so are is correct.' },
  { rule: 'subject_verb', prompt: 'One of the engines ___ inspected yesterday.', options: ['were', 'was', 'are', 'have been'], answer: 'was', explanation: 'The subject is one (singular), so was is correct.' },
  { rule: 'subject_verb', prompt: 'Mathematics ___ my strongest subject.', options: ['are', 'were', 'is', 'have been'], answer: 'is', explanation: 'Mathematics is a singular subject name despite ending in s.' },
  { rule: 'subject_verb', prompt: 'The pilot, along with the crew, ___ arrived.', options: ['have', 'were', 'has', 'are'], answer: 'has', explanation: 'Along with does not change the subject; the pilot is singular.' },
  { rule: 'subject_verb', prompt: 'Fifty kilometres ___ a long taxi ride.', options: ['are', 'is', 'were', 'have been'], answer: 'is', explanation: 'A distance is treated as one amount, so it takes a singular verb.' },
  { rule: 'subject_verb', prompt: 'Either answer ___ acceptable.', options: ['are', 'were', 'is', 'have been'], answer: 'is', explanation: 'Either is singular, so it takes is.' },
  { rule: 'subject_verb', prompt: 'The scissors ___ in the first aid kit.', options: ['is', 'was', 'are', 'has been'], answer: 'are', explanation: 'Scissors is a plural-only noun, so it takes are.' },

  // ---------- correct_sentence ----------
  { rule: 'correct_sentence', prompt: 'Choose the correct sentence.', options: ['The passengers were asked to fasten their seatbelts.', 'The passengers was asked to fasten their seatbelts.', 'The passengers were asked to fasten there seatbelts.', 'The passengers where asked to fasten their seatbelts.'], answer: 'The passengers were asked to fasten their seatbelts.', explanation: 'Plural subject takes were, and their is the possessive.' },
  { rule: 'correct_sentence', prompt: 'Choose the correct sentence.', options: ['She don\'t have any luggage.', 'She doesn\'t have any luggage.', 'She doesn\'t has any luggage.', 'She don\'t has any luggage.'], answer: 'She doesn\'t have any luggage.', explanation: 'Third person singular takes doesn\'t, followed by the base verb have.' },
  { rule: 'correct_sentence', prompt: 'Choose the correct sentence.', options: ['We have already ate.', 'We has already eaten.', 'We have already eaten.', 'We have all ready eaten.'], answer: 'We have already eaten.', explanation: 'Have takes the past participle eaten; already means before now.' },
  { rule: 'correct_sentence', prompt: 'Choose the correct sentence.', options: ['He has gone to the gate an hour ago.', 'He went to the gate an hour ago.', 'He gone to the gate an hour ago.', 'He went to the gate since an hour.'], answer: 'He went to the gate an hour ago.', explanation: 'A finished past time (an hour ago) takes the simple past went.' },
  { rule: 'correct_sentence', prompt: 'Choose the correct sentence.', options: ['There is fewer seats in business class.', 'There are less seats in business class.', 'Their are fewer seats in business class.', 'There are fewer seats in business class.'], answer: 'There are fewer seats in business class.', explanation: 'Seats are countable (fewer) and plural (are); there introduces existence.' },
  { rule: 'correct_sentence', prompt: 'Choose the correct sentence.', options: ['The captain and the first officer are on board.', 'The captain and the first officer is on board.', 'The captain and the first officer am on board.', 'The captain and the first officer be on board.'], answer: 'The captain and the first officer are on board.', explanation: 'Two subjects joined by and take a plural verb.' },
  { rule: 'correct_sentence', prompt: 'Choose the correct sentence.', options: ['I look forward to hear from you.', 'I look forward for hearing from you.', 'I look forward to hearing from you.', 'I am look forward to hearing from you.'], answer: 'I look forward to hearing from you.', explanation: 'Look forward to is followed by the -ing form.' },
  { rule: 'correct_sentence', prompt: 'Choose the correct sentence.', options: ['It\'s wing was damaged.', 'Its wing was damaged.', 'Its\' wing was damaged.', 'Its wing were damaged.'], answer: 'Its wing was damaged.', explanation: 'Its is the possessive; it\'s means it is.' },
  { rule: 'correct_sentence', prompt: 'Choose the correct sentence.', options: ['Who\'s bag is this?', 'Whos bag is this?', 'Whose bag are this?', 'Whose bag is this?'], answer: 'Whose bag is this?', explanation: 'Whose is the possessive; who\'s means who is.' },
  { rule: 'correct_sentence', prompt: 'Choose the correct sentence.', options: ['You\'re welcome to board now.', 'Your welcome to board now.', 'You\'re welcome to boarding now.', 'Your welcome to boarding now.'], answer: 'You\'re welcome to board now.', explanation: 'You\'re means you are; your is the possessive.' },
  { rule: 'correct_sentence', prompt: 'Choose the correct sentence.', options: ['He did good in the interview.', 'He done well in the interview.', 'He did well in the interview.', 'He done good in the interview.'], answer: 'He did well in the interview.', explanation: 'Well is the adverb describing how he did; good is an adjective.' },
  { rule: 'correct_sentence', prompt: 'Choose the correct sentence.', options: ['Between you and I, the flight is full.', 'Between you and me, the flight is full.', 'Between we, the flight is full.', 'Between you and myself, the flight is full.'], answer: 'Between you and me, the flight is full.', explanation: 'After the preposition between, use the object pronoun me.' },
  { rule: 'correct_sentence', prompt: 'Choose the correct sentence.', options: ['She is more taller than I am.', 'She is tallest than I am.', 'She is taller than me am.', 'She is taller than I am.'], answer: 'She is taller than I am.', explanation: 'Taller is the comparative; no more is needed, and I goes with am.' },
  { rule: 'correct_sentence', prompt: 'Choose the correct sentence.', options: ['The luggage is heavy.', 'The luggage are heavy.', 'The luggages is heavy.', 'The luggage were heavy.'], answer: 'The luggage is heavy.', explanation: 'Luggage is uncountable and takes a singular verb.' },

  // ---------- confusable ----------
  { rule: 'confusable', prompt: '___ almost time to depart.', options: ['Its', 'It\'s', 'Its\'', 'It'], answer: 'It\'s', explanation: 'It\'s is the contraction of it is; its is the possessive.' },
  { rule: 'confusable', prompt: 'The aircraft folded ___ wings.', options: ['it\'s', 'its\'', 'its', 'it'], answer: 'its', explanation: 'Its is the possessive; it\'s means it is.' },
  { rule: 'confusable', prompt: '___ seat is in row 12.', options: ['You\'re', 'Your', 'Yours\'', 'You'], answer: 'Your', explanation: 'Your is the possessive; you\'re means you are.' },
  { rule: 'confusable', prompt: '___ going to enjoy this view.', options: ['Your', 'Yours', 'You\'re', 'Youre'], answer: 'You\'re', explanation: 'You\'re is the contraction of you are.' },
  { rule: 'confusable', prompt: 'The flight is longer ___ I expected.', options: ['then', 'than', 'that', 'as'], answer: 'than', explanation: 'Than makes comparisons; then refers to time or sequence.' },
  { rule: 'confusable', prompt: 'We landed, and ___ we cleared customs.', options: ['than', 'then', 'that', 'thus far'], answer: 'then', explanation: 'Then means next in sequence; than compares.' },
  { rule: 'confusable', prompt: 'It is ___ hot to stand on the tarmac.', options: ['to', 'two', 'too', 'toe'], answer: 'too', explanation: 'Too means excessively; to is a preposition.' },
  { rule: 'confusable', prompt: 'I do not know ___ the flight is on time.', options: ['weather', 'whether', 'wether', 'whither'], answer: 'whether', explanation: 'Whether introduces alternatives; weather is the climate.' },
  { rule: 'confusable', prompt: 'Everyone boarded ___ one passenger.', options: ['accept', 'expect', 'except', 'access'], answer: 'except', explanation: 'Except means excluding; accept means to receive or agree.' },
  { rule: 'confusable', prompt: 'We ___ the new schedule.', options: ['except', 'accept', 'expect of', 'access'], answer: 'accept', explanation: 'Accept means to agree to; except means excluding.' },
  { rule: 'confusable', prompt: 'Can you give me some ___ about the interview?', options: ['advise', 'advice', 'advises', 'advising'], answer: 'advice', explanation: 'Advice is the noun; advise is the verb.' },
  { rule: 'confusable', prompt: 'The trolley went ___ my seat.', options: ['passed', 'past', 'pass', 'pasted'], answer: 'past', explanation: 'Past is the preposition meaning beyond; passed is the verb.' },
  { rule: 'confusable', prompt: 'She ___ the exam on her first try.', options: ['past', 'passed', 'pass', 'paced'], answer: 'passed', explanation: 'Passed is the past tense verb; past is a preposition or noun.' },
  { rule: 'confusable', prompt: 'The aircraft remained ___ at the gate.', options: ['stationery', 'stationary', 'stationairy', 'station'], answer: 'stationary', explanation: 'Stationary means not moving; stationery is paper supplies.' },
  { rule: 'confusable', prompt: 'The crew received a ___ on their service.', options: ['complement', 'compliment', 'complyment', 'completion'], answer: 'compliment', explanation: 'A compliment is praise; a complement completes something.' },

  // ---------- synonym ----------
  { rule: 'synonym', prompt: 'Choose the word closest in meaning to RAPID.', options: ['slow', 'quick', 'careful', 'loud'], answer: 'quick', explanation: 'Rapid means fast, so quick is the synonym.' },
  { rule: 'synonym', prompt: 'Choose the word closest in meaning to COMMENCE.', options: ['finish', 'delay', 'begin', 'cancel'], answer: 'begin', explanation: 'Commence means to start, so begin is the synonym.' },
  { rule: 'synonym', prompt: 'Choose the word closest in meaning to ASSIST.', options: ['help', 'watch', 'ignore', 'follow'], answer: 'help', explanation: 'Assist means to help.' },
  { rule: 'synonym', prompt: 'Choose the word closest in meaning to PURCHASE.', options: ['sell', 'borrow', 'lend', 'buy'], answer: 'buy', explanation: 'Purchase means to buy.' },
  { rule: 'synonym', prompt: 'Choose the word closest in meaning to ENORMOUS.', options: ['huge', 'tiny', 'average', 'narrow'], answer: 'huge', explanation: 'Enormous means extremely large, so huge is the synonym.' },
  { rule: 'synonym', prompt: 'Choose the word closest in meaning to VACANT.', options: ['full', 'empty', 'busy', 'closed'], answer: 'empty', explanation: 'Vacant means unoccupied, so empty is the synonym.' },
  { rule: 'synonym', prompt: 'Choose the word closest in meaning to DEPART.', options: ['arrive', 'remain', 'leave', 'return'], answer: 'leave', explanation: 'Depart means to leave.' },
  { rule: 'synonym', prompt: 'Choose the word closest in meaning to FREQUENT.', options: ['rare', 'common', 'brief', 'late'], answer: 'common', explanation: 'Frequent means happening often, so common is the closest.' },
  { rule: 'synonym', prompt: 'Choose the word closest in meaning to ESSENTIAL.', options: ['optional', 'extra', 'useless', 'necessary'], answer: 'necessary', explanation: 'Essential means absolutely needed, so necessary is the synonym.' },
  { rule: 'synonym', prompt: 'Choose the word closest in meaning to POLITE.', options: ['courteous', 'rude', 'quiet', 'shy'], answer: 'courteous', explanation: 'Polite means well mannered, so courteous is the synonym.' },
  { rule: 'synonym', prompt: 'Choose the word closest in meaning to ERROR.', options: ['answer', 'mistake', 'method', 'result'], answer: 'mistake', explanation: 'An error is a mistake.' },
  { rule: 'synonym', prompt: 'Choose the word closest in meaning to SUFFICIENT.', options: ['scarce', 'absent', 'enough', 'excessive'], answer: 'enough', explanation: 'Sufficient means as much as needed, so enough is the synonym.' },
  { rule: 'synonym', prompt: 'Choose the word closest in meaning to HAZARD.', options: ['danger', 'signal', 'rule', 'path'], answer: 'danger', explanation: 'A hazard is a danger.' },
  { rule: 'synonym', prompt: 'Choose the word closest in meaning to PROHIBIT.', options: ['allow', 'suggest', 'prefer', 'forbid'], answer: 'forbid', explanation: 'Prohibit means to forbid.' },
  { rule: 'synonym', prompt: 'Choose the word closest in meaning to ACCURATE.', options: ['vague', 'precise', 'quick', 'careless'], answer: 'precise', explanation: 'Accurate means exact and correct, so precise is the synonym.' },

  // ---------- antonym ----------
  { rule: 'antonym', prompt: 'Choose the word opposite in meaning to ARRIVE.', options: ['depart', 'land', 'appear', 'enter'], answer: 'depart', explanation: 'Arrive means to reach a place; depart means to leave it.' },
  { rule: 'antonym', prompt: 'Choose the word opposite in meaning to EXPAND.', options: ['grow', 'stretch', 'shrink', 'widen'], answer: 'shrink', explanation: 'Expand means to get bigger; shrink means to get smaller.' },
  { rule: 'antonym', prompt: 'Choose the word opposite in meaning to ANCIENT.', options: ['old', 'modern', 'historic', 'ruined'], answer: 'modern', explanation: 'Ancient means very old; modern means of the present time.' },
  { rule: 'antonym', prompt: 'Choose the word opposite in meaning to SCARCE.', options: ['plentiful', 'rare', 'limited', 'thin'], answer: 'plentiful', explanation: 'Scarce means in short supply; plentiful means abundant.' },
  { rule: 'antonym', prompt: 'Choose the word opposite in meaning to ASCEND.', options: ['climb', 'descend', 'rise', 'lift'], answer: 'descend', explanation: 'Ascend means to go up; descend means to go down.' },
  { rule: 'antonym', prompt: 'Choose the word opposite in meaning to VICTORY.', options: ['prize', 'battle', 'triumph', 'defeat'], answer: 'defeat', explanation: 'Victory means winning; defeat means losing.' },
  { rule: 'antonym', prompt: 'Choose the word opposite in meaning to TRANSPARENT.', options: ['opaque', 'clear', 'thin', 'bright'], answer: 'opaque', explanation: 'Transparent lets light through; opaque does not.' },
  { rule: 'antonym', prompt: 'Choose the word opposite in meaning to GENEROUS.', options: ['kind', 'stingy', 'wealthy', 'giving'], answer: 'stingy', explanation: 'Generous means giving freely; stingy means unwilling to give.' },
  { rule: 'antonym', prompt: 'Choose the word opposite in meaning to PERMANENT.', options: ['lasting', 'fixed', 'temporary', 'stable'], answer: 'temporary', explanation: 'Permanent means lasting forever; temporary means for a short time.' },
  { rule: 'antonym', prompt: 'Choose the word opposite in meaning to ABUNDANT.', options: ['scarce', 'plentiful', 'rich', 'full'], answer: 'scarce', explanation: 'Abundant means existing in large amounts; scarce means in short supply.' },
  { rule: 'antonym', prompt: 'Choose the word opposite in meaning to SMOOTH.', options: ['soft', 'flat', 'even', 'rough'], answer: 'rough', explanation: 'Smooth means without bumps; rough means uneven.' },
  { rule: 'antonym', prompt: 'Choose the word opposite in meaning to INCREASE.', options: ['decrease', 'rise', 'gain', 'growth'], answer: 'decrease', explanation: 'Increase means to go up; decrease means to go down.' },
  { rule: 'antonym', prompt: 'Choose the word opposite in meaning to CAUTIOUS.', options: ['careful', 'alert', 'reckless', 'slow'], answer: 'reckless', explanation: 'Cautious means careful of risk; reckless means ignoring risk.' },
  { rule: 'antonym', prompt: 'Choose the word opposite in meaning to PUNCTUAL.', options: ['prompt', 'tardy', 'exact', 'ready'], answer: 'tardy', explanation: 'Punctual means on time; tardy means late.' },
  { rule: 'antonym', prompt: 'Choose the word opposite in meaning to RIGID.', options: ['stiff', 'solid', 'flexible', 'firm'], answer: 'flexible', explanation: 'Rigid means unable to bend; flexible means able to bend.' },

  // ---------- sentence_completion ----------
  { rule: 'sentence_completion', prompt: 'The safety briefing was short, ___ it covered everything important.', options: ['yet', 'so', 'unless', 'nor'], answer: 'yet', explanation: 'Yet links two contrasting ideas: short, but still complete.' },
  { rule: 'sentence_completion', prompt: '___ the fog cleared, the flight departed.', options: ['Although', 'Once', 'Unless', 'Despite'], answer: 'Once', explanation: 'Once means as soon as: the departure followed the fog clearing.' },
  { rule: 'sentence_completion', prompt: 'Passengers may board ___ they have a valid boarding pass.', options: ['unless', 'despite', 'provided', 'whereas'], answer: 'provided', explanation: 'Provided means on the condition that.' },
  { rule: 'sentence_completion', prompt: 'He checked the list twice ___ avoid mistakes.', options: ['for', 'to', 'so', 'at'], answer: 'to', explanation: 'To plus a verb expresses purpose: in order to avoid mistakes.' },
  { rule: 'sentence_completion', prompt: '___ being tired, she finished the report.', options: ['Because', 'Since', 'Despite', 'Unless'], answer: 'Despite', explanation: 'Despite introduces a contrast: tired, but she still finished.' },
  { rule: 'sentence_completion', prompt: 'The flight was full; ___, we found two seats together.', options: ['therefore', 'nevertheless', 'because', 'meanwhile'], answer: 'nevertheless', explanation: 'Nevertheless signals a surprising contrast with the full flight.' },
  { rule: 'sentence_completion', prompt: 'Please switch off large devices ___ takeoff.', options: ['during', 'while', 'among', 'between'], answer: 'during', explanation: 'During goes before a noun (takeoff); while goes before a clause.' },
  { rule: 'sentence_completion', prompt: 'Neither the first flight ___ the second was on time.', options: ['or', 'nor', 'and', 'but'], answer: 'nor', explanation: 'Neither pairs with nor.' },
  { rule: 'sentence_completion', prompt: 'The weather improved, ___ the delay was cancelled.', options: ['yet', 'unless', 'so', 'whether'], answer: 'so', explanation: 'So introduces the result of the improved weather.' },
  { rule: 'sentence_completion', prompt: '___ you hurry, you will miss the connection.', options: ['Because', 'Unless', 'Since', 'Providing'], answer: 'Unless', explanation: 'Unless means if you do not: if you do not hurry, you will miss it.' },
  { rule: 'sentence_completion', prompt: 'She speaks not only English ___ also Arabic.', options: ['and', 'or', 'but', 'yet'], answer: 'but', explanation: 'Not only pairs with but also.' },
  { rule: 'sentence_completion', prompt: 'The briefing will start as soon ___ everyone arrives.', options: ['that', 'as', 'when', 'if'], answer: 'as', explanation: 'As soon as is the fixed pair.' },
  { rule: 'sentence_completion', prompt: 'He is responsible ___ checking the cabin.', options: ['of', 'on', 'for', 'to'], answer: 'for', explanation: 'Responsible takes the preposition for.' },
  { rule: 'sentence_completion', prompt: 'We would have landed earlier ___ the storm.', options: ['because', 'but for', 'even', 'unless'], answer: 'but for', explanation: 'But for means if it had not been for the storm.' },
]

export const verbalBank = raw.map((item, i) => {
  const correctIndex = item.options.indexOf(item.answer)
  if (correctIndex === -1) {
    throw new Error(`verbalBank item ${i} ("${item.prompt}"): answer "${item.answer}" not found in options`)
  }
  if (item.options.length !== 4) {
    throw new Error(`verbalBank item ${i} ("${item.prompt}"): expected 4 options, got ${item.options.length}`)
  }
  if (new Set(item.options).size !== 4) {
    throw new Error(`verbalBank item ${i} ("${item.prompt}"): duplicate options`)
  }
  return {
    id: `verbal-${i}`,
    section: 'verbal',
    type: 'verbal',
    rule: item.rule,
    prompt: item.prompt,
    options: item.options,
    correctIndex,
    explanation: item.explanation,
  }
})
