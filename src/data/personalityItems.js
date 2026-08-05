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

  // ---- Paraphrase variants: same themes, different wording, so long runs
  // ---- re-test each trait without repeating a statement verbatim.
  // Composure
  I('I stay composed when everything happens at once.', 'composure'),
  I('I panic when several things go wrong together.', 'composure', true),
  I('Pressure tends to bring out my best work.', 'composure'),
  I('Small setbacks can ruin my whole day.', 'composure', true),
  I('I stay calm when others around me are panicking.', 'composure'),
  I('Criticism in front of others embarrasses me deeply.', 'composure', true),
  I('I let harsh comments roll off me.', 'composure'),
  I('I replay stressful moments in my head at night.', 'composure', true),
  I('I am the person others turn to in a crisis.', 'composure'),
  I('Sudden emergencies make me freeze for a moment.', 'composure', true),
  // Conscientiousness
  I('I finish what I start, even when it gets tedious.', 'conscientiousness'),
  I('I sometimes hand in work I know is not my best.', 'conscientiousness', true),
  I('I arrive early rather than exactly on time.', 'conscientiousness'),
  I('I misplace things like keys or documents.', 'conscientiousness', true),
  I('I read instructions fully before starting.', 'conscientiousness'),
  I('I skip steps when a process feels too slow.', 'conscientiousness', true),
  I('I keep promises even when they become inconvenient.', 'conscientiousness'),
  I('My to-do lists tend to go unfinished.', 'conscientiousness', true),
  I('I like every item in its proper place.', 'conscientiousness'),
  I('I improvise first and read the manual later.', 'conscientiousness', true),
  I('I track small tasks so nothing slips through.', 'conscientiousness'),
  I('Being five minutes late does not bother me.', 'conscientiousness', true),
  // Sociability
  I('Strangers often end up telling me their life story.', 'sociability'),
  I('I warm up slowly around people I do not know.', 'sociability', true),
  I('I feel energised after a busy social event.', 'sociability'),
  I('I avoid situations where I have to speak first.', 'sociability', true),
  I('I make friends quickly in new places.', 'sociability'),
  I('Large groups make me uncomfortable.', 'sociability', true),
  I('I enjoy entertaining the people around me.', 'sociability'),
  I('I would rather message someone than talk face to face.', 'sociability', true),
  I('I remember names and faces easily.', 'sociability'),
  I('I stay on the edge of group conversations.', 'sociability', true),
  // Customer focus
  I('I can stay polite to someone who is shouting at me.', 'service'),
  I('People who complain should mostly solve their own problems.', 'service', true),
  I('I go out of my way to make someone’s day better.', 'service'),
  I('I secretly think most complaints are exaggerated.', 'service', true),
  I('Serving others gives me genuine satisfaction.', 'service'),
  I('I lose interest in helping when people are ungrateful.', 'service', true),
  I('I notice when someone needs help before they ask.', 'service'),
  I('Repeating the same answer to many people annoys me.', 'service', true),
  // Adaptability
  I('I treat sudden changes as a challenge rather than a threat.', 'adaptability'),
  I('I get stressed when my routine is disturbed.', 'adaptability', true),
  I('I quickly change my approach when something is not working.', 'adaptability'),
  I('Once I have a plan, I hate changing it.', 'adaptability', true),
  I('New environments excite me.', 'adaptability'),
  I('I need plenty of notice before any change.', 'adaptability', true),
  I('I switch between tasks without losing momentum.', 'adaptability'),
  I('Doing things a new way feels risky to me.', 'adaptability', true),
  // Drive
  I('I aim to be the best at what I do.', 'drive'),
  I('I do the minimum required if nobody will notice.', 'drive', true),
  I('I look for extra work when my own tasks are done.', 'drive'),
  I('I lower my goals when things get hard.', 'drive', true),
  I('I take the lead when a group has no direction.', 'drive'),
  I('I let difficult problems wait for someone else.', 'drive', true),
  I('I finish strong even at the end of a long shift.', 'drive'),
  I('Effort feels pointless when a task is boring.', 'drive', true),
  // Integrity
  I('I tell the truth even when it costs me.', 'integrity'),
  I('I would stay quiet about a mistake nobody saw.', 'integrity', true),
  I('I give credit to others when it is due.', 'integrity'),
  I('I exaggerate my achievements a little when it helps.', 'integrity', true),
  I('I follow through on what I say I will do.', 'integrity'),
  I('I make excuses when I miss a commitment.', 'integrity', true),
  I('I own unpopular decisions instead of hiding behind others.', 'integrity'),
  I('Rules apply a little less to people who work hard.', 'integrity', true),
  // Energy
  I('I keep my enthusiasm up through repetitive work.', 'energy'),
  I('I run out of patience faster as the day goes on.', 'energy', true),
  I('People describe me as upbeat.', 'energy'),
  I('I need quiet time before I can face a busy morning.', 'energy', true),
  I('I stay friendly even on very early starts.', 'energy'),
  I('My energy crashes in the afternoon.', 'energy', true),
  // Focus
  I('I commit to a decision once I have made it.', 'focus'),
  I('I keep asking others to confirm my choices.', 'focus', true),
  I('I can work accurately with noise around me.', 'focus'),
  I('I lose my place when someone interrupts me.', 'focus', true),
  I('I finish one task before starting another.', 'focus'),
  I('I jump between tasks and finish none of them.', 'focus', true),
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
