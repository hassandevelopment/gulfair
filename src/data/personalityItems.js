// Likert trait statements. Half are reverse-keyed (agreeing is NOT the
// flattering answer), so spamming Agree produces an inconsistent profile,
// just like on the real exam. Each item carries its trait dimension and
// whether it is reverse-scored, which powers the end-of-run trait sketch.

const I = (text, trait, reversed = false) => ({ text, trait, reversed })

export const personalityItems = [
  // Composure under pressure
  I('I remain calm under pressure.', 'composure'),
  I('I often feel tense before important events.', 'composure', true),
  I('Unexpected problems rattle me more than I would like.', 'composure', true),
  I('I recover quickly after something goes wrong.', 'composure'),
  I('I worry about mistakes long after they happen.', 'composure', true),
  I('I keep a level head during emergencies.', 'composure'),
  I('I keep my emotions steady when criticised.', 'composure'),
  I('Harsh feedback stays with me for days.', 'composure', true),
  I('I can laugh at my own mistakes.', 'composure'),
  I('I take disagreements personally.', 'composure', true),
  // Conscientiousness
  I('I double check my work for small errors.', 'conscientiousness'),
  I('I sometimes leave tasks unfinished when I lose interest.', 'conscientiousness', true),
  I('I plan my day before it starts.', 'conscientiousness'),
  I('I tend to put off boring tasks until the last minute.', 'conscientiousness', true),
  I('I keep my workspace organised.', 'conscientiousness'),
  I('Deadlines sometimes catch me by surprise.', 'conscientiousness', true),
  I('I follow procedures even when nobody is checking.', 'conscientiousness'),
  I('I occasionally cut corners when I am in a hurry.', 'conscientiousness', true),
  I('I notice small details others miss.', 'conscientiousness'),
  I('Paperwork bores me, so I rush through it.', 'conscientiousness', true),
  I('Rules exist for good reasons and I follow them.', 'conscientiousness'),
  I('Some rules are worth breaking to save time.', 'conscientiousness', true),
  // Sociability
  I('I enjoy working as part of a team.', 'sociability'),
  I('I prefer working alone to working in a group.', 'sociability', true),
  I('I find it easy to start conversations with strangers.', 'sociability'),
  I('Meeting new people drains my energy.', 'sociability', true),
  I('I am comfortable being the centre of attention.', 'sociability'),
  I('I keep quiet in group discussions.', 'sociability', true),
  I('I find small talk with passengers easy.', 'sociability'),
  I('I need time alone to recharge after a busy shift.', 'sociability', true),
  // Customer focus
  I('I stay patient with difficult customers.', 'service'),
  I('Rude people test my patience quickly.', 'service', true),
  I('I genuinely enjoy helping people.', 'service'),
  I('I find constant requests from others tiring.', 'service', true),
  // Adaptability
  I('I adapt quickly when plans change.', 'adaptability'),
  I('I find last minute changes frustrating.', 'adaptability', true),
  I('I enjoy variety more than routine.', 'adaptability'),
  I('I prefer a predictable schedule to surprises.', 'adaptability', true),
  // Drive and initiative
  I('I speak up when I see something being done unsafely.', 'drive'),
  I('I wait for others to take the lead.', 'drive', true),
  I('I volunteer for tasks nobody else wants.', 'drive'),
  I('I avoid responsibility when the stakes are high.', 'drive', true),
  I('I set high standards for myself.', 'drive'),
  I('Good enough is usually good enough for me.', 'drive', true),
  I('I keep pushing when a task gets difficult.', 'drive'),
  I('I give up quickly on puzzles I cannot solve.', 'drive', true),
  // Integrity
  I('I admit my mistakes straight away.', 'integrity'),
  I('I sometimes bend the truth to avoid awkward situations.', 'integrity', true),
  I('I take responsibility when something goes wrong.', 'integrity'),
  I('I blame circumstances when things fail.', 'integrity', true),
  I('I ask for help when I need it.', 'integrity'),
  I('Asking for help feels like weakness to me.', 'integrity', true),
  // Energy
  I('I stay cheerful through long shifts.', 'energy'),
  I('My mood swings noticeably during a hard day.', 'energy', true),
  I('I bring energy to the people around me.', 'energy'),
  I('I get irritable when I am tired.', 'energy', true),
  // Focus
  I('I make decisions quickly when time is short.', 'focus'),
  I('I second guess my decisions after making them.', 'focus', true),
  I('I stay focused when there are distractions around me.', 'focus'),
  I('My mind wanders during repetitive tasks.', 'focus', true),
]

// Trait sketch copy: [high (avg >= 3.8), middle, low (avg <= 2.4)]
export const TRAITS = {
  composure: {
    label: 'Composure',
    bands: [
      'Calm and steady under pressure.',
      'Generally steady, with some stress spikes.',
      'Stress lands hard on you; build steadying routines before the exam.',
    ],
  },
  conscientiousness: {
    label: 'Conscientiousness',
    bands: [
      'Organised, thorough, and procedure-minded.',
      'Reasonably organised, occasionally loose on detail.',
      'You cut corners under time pressure; interviewers probe this.',
    ],
  },
  sociability: {
    label: 'Sociability',
    bands: [
      'Outgoing and comfortable with strangers.',
      'Comfortable socially, with quieter stretches.',
      'Reserved; a customer-facing role will stretch you.',
    ],
  },
  service: {
    label: 'Customer focus',
    bands: [
      'Patient and genuinely service-minded.',
      'Mostly patient, though rudeness tests you.',
      'Difficult customers drain you quickly.',
    ],
  },
  adaptability: {
    label: 'Adaptability',
    bands: [
      'Flexible when plans change.',
      'Adaptable, but you prefer routine.',
      'Last minute changes unsettle you.',
    ],
  },
  drive: {
    label: 'Drive',
    bands: [
      'High standards, initiative, and persistence.',
      'Steady effort with moderate ambition.',
      'You tend to settle for good enough.',
    ],
  },
  integrity: {
    label: 'Integrity',
    bands: [
      'Accountable and straight about mistakes.',
      'Mostly accountable.',
      'You deflect blame under pressure; watch this in interviews.',
    ],
  },
  energy: {
    label: 'Energy',
    bands: [
      'Consistent positive energy through long days.',
      'Good energy with dips when tired.',
      'Long shifts drain your mood quickly.',
    ],
  },
  focus: {
    label: 'Focus',
    bands: [
      'Decisive and hard to distract.',
      'Focused most of the time, with some second guessing.',
      'Distraction and doubt pull at you.',
    ],
  },
}

export const LIKERT = [
  'Strongly disagree',
  'Disagree',
  'Neutral',
  'Agree',
  'Strongly agree',
]
