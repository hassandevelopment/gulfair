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
  {
    id: 'oral-aero-01',
    category: 'aerodynamics',
    frequency: 5,
    question: 'What is drag and what are the types of drag?',
    conceptExplanation:
      'Drag is the aerodynamic force that resists the aircraft moving through the air. It acts backwards, along the relative airflow, and the engines have to spend thrust just to overcome it. Total drag splits into two families. Parasite drag is the price of simply pushing the airframe through the air, and it has three parts: form drag from the shape of the body, skin friction from air rubbing along every surface, and interference drag where airflows meet and disturb each other, like at the wing to fuselage junction. Parasite drag grows with the square of speed, so fly twice as fast and it roughly quadruples. Induced drag is different: it is the unavoidable byproduct of making lift. The pressure difference across the wing lets air spill around the tips, which creates vortices and downwash, and that tilts the lift force slightly backwards. The backwards component is induced drag. It is worst at low speed and high angle of attack, and it shrinks as you speed up. Plot both against speed and they cross at the minimum drag speed, where total drag is lowest.',
    spokenVersion: [
      'Force acting backwards along the airflow, resisting motion',
      'Two families: parasite and induced',
      'Parasite: form, skin friction, interference; grows with speed squared',
      'Induced: byproduct of lift, from tip vortices; worst at low speed',
      'The curves cross at minimum drag speed',
    ],
    mcq: {
      options: [
        'The force opposing lift, split into form drag and pressure drag',
        'The downward force on the tailplane, split into static and dynamic drag',
        'The force opposing motion through the air, split into parasite and induced drag',
        'The component of gravity along the flight path, split into profile and wave drag',
      ],
      correctIndex: 2,
    },
    flashcardAnswer:
      'Drag is the force resisting motion through the air. Parasite drag (form, skin friction, interference) rises with speed squared; induced drag comes from producing lift and falls as speed increases. Total drag is lowest where the two cross, the minimum drag speed.',
  },
  {
    id: 'oral-aero-02',
    category: 'aerodynamics',
    frequency: 4,
    question: 'What are the four forces acting on an aircraft?',
    conceptExplanation:
      'Every aircraft in flight is being pulled and pushed by four forces at once. Lift acts upwards, perpendicular to the relative airflow, and is made mostly by the wings. Weight acts straight down towards the centre of the earth and comes from the mass of the aircraft, fuel and load. Thrust acts forwards from the engines. Drag acts backwards along the airflow, resisting motion. The useful way to think about them is in pairs: lift works against weight, thrust works against drag. In steady, level, unaccelerated flight the pairs are in balance, so lift equals weight and thrust equals drag, and the aircraft is in equilibrium. The moment one force changes, the balance breaks and the aircraft accelerates, climbs, descends or slows until a new balance is found. That is really all manoeuvring is: deliberately unbalancing these four forces.',
    spokenVersion: [
      'Lift, weight, thrust and drag',
      'Lift up, perpendicular to the airflow; weight straight down',
      'Thrust forwards; drag backwards',
      'Steady level flight: lift equals weight, thrust equals drag',
    ],
    mcq: {
      options: [
        'Lift, weight, thrust and drag',
        'Lift, gravity, power and inertia',
        'Thrust, drag, centrifugal force and torque',
        'Lift, thrust, side force and yaw',
      ],
      correctIndex: 0,
    },
    flashcardAnswer:
      'Lift, weight, thrust and drag. In steady level flight lift balances weight and thrust balances drag, so the aircraft is in equilibrium.',
  },
  {
    id: 'oral-aero-03',
    category: 'aerodynamics',
    frequency: 4,
    question: 'What is lift and how is it generated?',
    conceptExplanation:
      'Lift is the aerodynamic force that supports the aircraft, acting perpendicular to the relative airflow. It is generated by the wing in two ways that are really two views of the same thing. First, pressure: the wing is cambered and meets the air at an angle of attack, so the airflow over the curved upper surface accelerates. Faster flow means lower pressure, so the pressure above the wing drops below the pressure underneath, and that difference pushes the wing up. Second, momentum: the wing deflects a huge mass of air downwards, and by action and reaction the air pushes the wing upwards. The amount of lift follows the lift formula, L equals half rho V squared S CL: it depends on air density, speed squared, wing area and the lift coefficient, which captures the wing shape and angle of attack. That is why the pilot controls lift mainly through speed and angle of attack.',
    spokenVersion: [
      'Force perpendicular to the relative airflow, supports the aircraft',
      'Air accelerates over the curved top, pressure drops above the wing',
      'Wing also deflects air down, reaction pushes the wing up',
      'Amount: L = half rho V squared S CL',
      'Pilot controls it through speed and angle of attack',
    ],
    mcq: {
      options: [
        'Higher pressure above the wing than below it',
        'Engine thrust directed under the wing',
        'Lower pressure above the wing and air deflected downwards',
        'Higher air density above the wing',
      ],
      correctIndex: 2,
    },
    flashcardAnswer:
      'Lift is the force perpendicular to the relative airflow. The wing accelerates air over its curved top so pressure drops above it, and it deflects air downwards, whose reaction pushes the wing up. L = half rho V squared S CL.',
  },
  {
    id: 'oral-aero-04',
    category: 'aerodynamics',
    frequency: 3,
    question: 'What is a stall?',
    conceptExplanation:
      'A stall is what happens when the wing is asked for more than the airflow can give. As angle of attack increases, lift increases, but only up to the critical angle of attack. Past that point the airflow can no longer follow the curved upper surface: it separates, becomes turbulent, lift drops sharply and drag rises. The essential idea, and the one interviewers listen for, is that a stall is about angle of attack, not about speed. The wing always stalls at the same critical angle, so you can stall at any airspeed and in any attitude if you pull hard enough. The published stall speed only tells you the speed at which you reach that angle in level 1g flight at a given weight; load the wing up more, by turning steeply or pulling, and the stall speed rises. The aircraft warns you first: airframe buffet from the separated flow, and on airliners the stick shaker before the real stall.',
    spokenVersion: [
      'Airflow separates when the wing passes its critical angle of attack',
      'Lift drops sharply, drag rises',
      'It is about angle of attack, not speed: possible at any speed or attitude',
      'Published stall speed is for level 1g flight; rises with weight and load factor',
      'Warnings first: buffet, then stick shaker',
    ],
    mcq: {
      options: [
        'An engine failure caused by disturbed airflow into the intake',
        'A loss of lift when the wing exceeds its critical angle of attack and the airflow separates',
        'A loss of lift that can only happen below the published stall speed',
        'A sudden roll caused by turbulence over one wing',
      ],
      correctIndex: 1,
    },
    flashcardAnswer:
      'A stall is airflow separation when the wing passes its critical angle of attack: lift falls sharply and drag rises. It depends on angle of attack, not speed, so it can happen at any speed; stall speed rises with weight and load factor.',
  },
  {
    id: 'oral-aero-05',
    category: 'aerodynamics',
    frequency: 3,
    question: 'What is Mach number? Is it the same at high and low level?',
    conceptExplanation:
      'Mach number is your true airspeed divided by the local speed of sound. The key to the second half of the question is that the speed of sound depends only on air temperature: the colder the air, the slower sound travels. As you climb, the air gets colder, so the local speed of sound falls, which means the same TAS gives you a higher Mach number at altitude than it would low down. So no, it is not the same: Mach 0.8 at FL350 is a slower TAS than Mach 0.8 would be at sea level. At sea level in ISA conditions the speed of sound is about 661 knots, and it keeps falling until the tropopause, where the temperature stops dropping. This is also why we fly a climb on IAS at first and then switch to a constant Mach at the crossover altitude: it keeps us clear of the high speed limits as the local speed of sound comes down around us.',
    spokenVersion: [
      'Mach number = TAS divided by the local speed of sound',
      'Speed of sound depends only on temperature; colder means slower',
      'At altitude it is colder, so the same TAS gives a higher Mach',
      'About 661 kt at sea level in ISA, roughly, falling with height to the tropopause',
      'That is why we climb on IAS and change to Mach at crossover',
    ],
    mcq: {
      options: [
        'TAS divided by the local speed of sound; not the same, because the speed of sound falls with temperature as you climb',
        'IAS divided by ground speed; the same at every level',
        'The aircraft speed divided by 1000; it changes only with weight',
        'TAS divided by the local speed of sound; identical at all levels because the speed of sound never changes',
      ],
      correctIndex: 0,
    },
    flashcardAnswer:
      'Mach number is TAS divided by the local speed of sound. The speed of sound depends on temperature only, so in the colder air at altitude the same TAS gives a higher Mach number. At sea level in ISA it is about 661 kt.',
  },
  {
    id: 'oral-aero-06',
    category: 'aerodynamics',
    frequency: 3,
    question: 'What are the types of flaps, how does each work, and what are the pros and cons?',
    conceptExplanation:
      'Flaps are trailing edge high lift devices. Their job is to increase the camber of the wing, and in some designs the area too, so the wing can produce enough lift at the low speeds we need for takeoff and landing. The main types, in rough order of effectiveness: a plain flap is simply the rear part of the wing hinged downwards. A split flap hinges down from the lower surface only, which adds lift but a lot of drag. A slotted flap opens a gap as it deploys, letting higher pressure air from below flow through and re-energize the airflow on top, delaying separation. A Fowler flap slides aft as well as down, so it adds wing area on top of camber; combined with slots it is the most effective, and that combination is what airliners carry. The trade is always the same: more lift at low speed, but more drag. So takeoff uses small settings, where you get mostly lift, and landing uses large settings, where the extra drag actually helps you fly a steady, slower approach with a better view over the nose.',
    spokenVersion: [
      'Trailing edge devices adding camber, and for Fowler also area',
      'Plain: simple hinge down. Split: lower surface only, lots of drag',
      'Slotted: a gap re-energizes the upper surface flow, delays separation',
      'Fowler: slides aft, adds area, most effective, what airliners use',
      'Trade: more low speed lift for more drag',
      'Small settings for takeoff, large settings for landing',
    ],
    mcq: {
      options: [
        'Leading edge, trailing edge and tip flaps, each reducing drag in cruise',
        'Krueger, slot and slat, each smoothing airflow over the tail',
        'Spoiler, aileron and trim tab, each raising the stall speed',
        'Plain, split, slotted and Fowler, each raising lift by adding camber or area',
      ],
      correctIndex: 3,
    },
    flashcardAnswer:
      'Main types: plain, split, slotted and Fowler. All add camber; Fowler also adds area by sliding aft, and slots re-energize the airflow. They give the lift needed at low speed at the cost of drag, so takeoff uses small settings and landing uses large ones.',
  },
  {
    id: 'oral-aero-07',
    category: 'aerodynamics',
    frequency: 3,
    question: 'What are the types of slats, how do they work, and what is the difference between a flap and a slat?',
    conceptExplanation:
      'Slats are the leading edge high lift devices. When a slat runs forward and down, it opens a slot between itself and the wing. Higher pressure air from underneath accelerates through that gap and washes over the upper surface, re-energizing the boundary layer so the airflow stays attached at angles of attack that would otherwise stall the wing. In other words, a slat raises the critical angle of attack. The types worth naming: fixed slots, which are simply permanent gaps in the leading edge on some light aircraft; movable slats, the airliner solution, sealed in cruise and opened for takeoff and landing; and Krueger flaps, panels that fold out from under the leading edge, often used on the inboard wing. The difference from a flap comes down to position and purpose: a flap is at the trailing edge and adds camber and area, giving more lift at a given angle of attack, while a slat is at the leading edge and delays separation, letting you use a higher angle of attack before the stall. Airliners use both together to build the low speed envelope.',
    spokenVersion: [
      'Leading edge devices: fixed slots, movable slats, Krueger flaps',
      'Slat opens a gap; faster air through it keeps the upper flow attached',
      'Effect: raises the critical angle of attack, delays the stall',
      'Flap: trailing edge, adds camber and area, more lift at a given angle',
      'Slat: leading edge, lets you reach a higher angle before stalling',
    ],
    mcq: {
      options: [
        'Leading edge devices such as movable slats and Krueger flaps that keep the airflow attached to a higher angle of attack; a flap is a trailing edge device that adds camber',
        'Trailing edge devices that add wing area; a flap is a leading edge device that adds camber',
        'Tailplane devices that improve pitch control; a flap controls roll',
        'Panels that dump lift after touchdown; a flap adds drag in the climb',
      ],
      correctIndex: 0,
    },
    flashcardAnswer:
      'Slats are leading edge devices: movable slats, fixed slots and Krueger flaps. They open a slot that keeps the upper surface flow attached, raising the critical angle of attack. A flap is a trailing edge device adding camber and area; a slat delays the stall to a higher angle of attack.',
  },
  {
    id: 'oral-aero-08',
    category: 'aerodynamics',
    frequency: 2,
    question: 'What is the lift formula, what is CL, and what can you change in it?',
    conceptExplanation:
      'The lift formula is L equals half rho V squared S CL. Take it term by term: rho is air density, V is the true airspeed through the air, S is the wing area, and CL is the lift coefficient. CL is the interesting one: it is a dimensionless number that bundles up everything about how well the wing is working, mainly its shape and its angle of attack. Increase the angle of attack and CL rises, up to the critical angle where the wing stalls; deploy flaps or slats and you shift the whole CL curve so more lift is available at any given angle. Now, what can the pilot actually change? Density is set by altitude and temperature, so not directly. Wing area is fixed, unless Fowler flaps extend it. That leaves the two working levers: speed, which counts twice because it is squared, and CL, through angle of attack and the high lift devices. Flying is essentially trading those two against each other to keep lift equal to weight.',
    spokenVersion: [
      'L = half rho V squared S CL',
      'Rho density, V true airspeed, S wing area, CL lift coefficient',
      'CL bundles wing shape and angle of attack; flaps and slats shift its curve',
      'Pilot really controls two things: speed, squared, and CL',
      'Flying level is trading speed against angle of attack to keep lift equal to weight',
    ],
    mcq: {
      options: [
        'L equals half rho V squared S CL; CL is the lift coefficient from wing shape and angle of attack; the pilot mainly changes speed and CL',
        'L equals rho V S CL; CL is a fixed constant for every aircraft; the pilot can only change the weight',
        'L equals half rho V squared S CL; CL is the air density factor; the pilot mainly changes the wing area',
        'L equals thrust minus drag; CL is the climb limit; the pilot changes it with engine power',
      ],
      correctIndex: 0,
    },
    flashcardAnswer:
      'L = half rho V squared S CL. CL is the dimensionless lift coefficient set by wing shape and angle of attack, shifted by flaps and slats. In practice the pilot controls lift through speed (squared) and CL; density and area are essentially fixed.',
  },
  {
    id: 'oral-aero-09',
    category: 'aerodynamics',
    frequency: 2,
    question: 'What is angle of attack?',
    conceptExplanation:
      'Angle of attack is the angle between the wing\'s chord line, the straight line from leading edge to trailing edge, and the relative airflow, the direction the air is actually meeting the wing from. The important discipline is keeping it separate from pitch attitude. Attitude is where the nose points relative to the horizon; angle of attack is how the wing meets the air, and the two can be very different. In a steep climb at low speed the flight path and the airflow tilt with you, and in a descent an aircraft can have the nose below the horizon yet a high angle of attack if it is sinking fast. Angle of attack is the single variable that sets the lift coefficient: raise it and CL rises, until the critical angle where the flow separates and the wing stalls. That is why it is the quantity that actually matters for the stall, not speed and not attitude.',
    spokenVersion: [
      'Angle between the chord line and the relative airflow',
      'Not the same as pitch attitude, which is nose against the horizon',
      'Sets the lift coefficient: more angle, more CL',
      'Up to the critical angle, where the wing stalls',
    ],
    mcq: {
      options: [
        'The angle between the nose and the horizon',
        'The angle between the chord line and the relative airflow',
        'The angle between the wing and the fuselage',
        'The angle of the flight path below the horizontal',
      ],
      correctIndex: 1,
    },
    flashcardAnswer:
      'The angle between the wing chord line and the relative airflow. It is not pitch attitude. It controls the lift coefficient, and past the critical angle of attack the wing stalls, at any speed.',
  },
  {
    id: 'oral-aero-10',
    category: 'aerodynamics',
    frequency: 2,
    question: 'What is induced drag and how do you reduce it?',
    conceptExplanation:
      'Induced drag is the drag you pay for making lift. The wing works by keeping pressure lower on top than underneath, and at the wingtips that difference leaks: air curls around the tip from the high pressure side to the low, rolling up into the wingtip vortices. Those vortices drive downwash behind the wing, which tilts the local airflow downward, and since lift stays perpendicular to the airflow, the lift vector leans slightly backwards. That rearward lean is induced drag. It is worst exactly when the wing is working hardest for its speed: slow flight, high angle of attack, high weight, tight turns; it fades as speed rises. Reducing it: fly faster where you have the choice, keep weight down, and in design terms use a high aspect ratio wing, long and slender like a glider\'s, and fit winglets, which weaken the tip leak. This ties straight back to the drag picture: induced falling with speed, parasite rising, minimum drag where they cross.',
    spokenVersion: [
      'The drag that comes from producing lift',
      'Pressure leaks around the wingtips, forming vortices and downwash',
      'Downwash tilts the lift vector back; that rearward lean is the drag',
      'Worst slow, heavy and at high angle of attack; fades with speed',
      'Reduce it: more speed, less weight, high aspect ratio, winglets',
    ],
    mcq: {
      options: [
        'Drag from skin friction over the wing, reduced by polishing the surface',
        'Drag from the landing gear, reduced by retracting it',
        'Drag created as a byproduct of lift, from tip vortices and downwash, reduced by speed, aspect ratio and winglets',
        'Drag from shockwaves at high Mach, reduced by slowing down',
      ],
      correctIndex: 2,
    },
    flashcardAnswer:
      'Induced drag is the byproduct of lift: air leaks around the wingtips into vortices, the downwash tilts lift rearwards, and that rearward component is drag. Worst at low speed and high angle of attack. Reduced by flying faster, lower weight, high aspect ratio wings and winglets.',
  },
  {
    id: 'oral-aero-11',
    category: 'aerodynamics',
    frequency: 2,
    question: 'How do you recover from a stall?',
    conceptExplanation:
      'Since a stall is the wing sitting past its critical angle of attack, the recovery has one non-negotiable first step: reduce the angle of attack. Push the nose down, or at least release the back pressure, until the wing is flying again. Everything else is secondary to that. Then roll the wings level with coordinated use of the controls, and add thrust as needed to rebuild energy, being aware that on aircraft with engines slung under the wing, a big handful of thrust pitches the nose up, which works against the recovery, so pitch control comes first and thrust follows. Once the buffet stops and airspeed is building, ease out of the descent gently. Pull too hard, too early, and you put the wing straight back past the critical angle: that is the secondary stall, and it is the classic recovery error. The modern training emphasis is exactly this order: angle of attack first, thrust second, altitude last.',
    spokenVersion: [
      'First and always: reduce the angle of attack, push or release back pressure',
      'Roll wings level with coordinated controls',
      'Thrust as required, remembering underwing engines pitch the nose up',
      'Let speed build, then ease out of the descent gently',
      'Pulling too early causes a secondary stall',
    ],
    mcq: {
      options: [
        'Pull back firmly to stop the descent and add full power',
        'Reduce the angle of attack first, roll wings level, add thrust as required, then recover gently from the descent',
        'Extend the speedbrakes and hold the attitude until the buffet stops',
        'Turn towards the nearest airport and lower the landing gear',
      ],
      correctIndex: 1,
    },
    flashcardAnswer:
      'Reduce the angle of attack first, by pushing or releasing back pressure, roll wings level, add thrust as required (underwing engines pitch up, so pitch first), then ease out of the descent gently to avoid a secondary stall.',
  },
  {
    id: 'oral-aero-12',
    category: 'aerodynamics',
    frequency: 2,
    question: 'What are wingtip vortices and how do winglets help?',
    conceptExplanation:
      'Any wing making lift has higher pressure below than above, and at the tips that difference has an open edge to escape around. Air spills from underneath, curls around the tip and rolls up into two counter-rotating spirals trailing behind the aircraft: the wingtip vortices. They matter twice. Aerodynamically, they are the mechanism behind induced drag: the spillage feeds downwash, tilts the lift vector back, and costs fuel. Operationally, they are wake turbulence for whoever flies behind, strongest when the generating aircraft is heavy, slow and clean, because that is when the wing is working hardest. Winglets attack the first problem. By standing a surface at the tip, they act as a barrier that weakens the spillage and break up how the vortex forms, and their own aerodynamic force even recovers a little energy from the swirling flow. Weaker vortices mean less downwash, so less induced drag and measurably better fuel burn, most valuable on long sectors.',
    spokenVersion: [
      'High pressure under the wing spills around the tips',
      'Rolls up into two counter-rotating trailing vortices',
      'They drive induced drag, and they are the wake turbulence hazard',
      'Strongest when heavy, slow and clean',
      'Winglets weaken the spillage, cutting induced drag and fuel burn',
    ],
    mcq: {
      options: [
        'Swirls of air where high pressure spills around the tips; winglets weaken them and so cut induced drag',
        'Vibrations of the wing structure; winglets stiffen the wing to stop them',
        'Currents of hot engine exhaust; winglets deflect them away from the tail',
        'Shockwaves at the wingtip; winglets stop the airflow going supersonic',
      ],
      correctIndex: 0,
    },
    flashcardAnswer:
      'Wingtip vortices are the spirals formed as high pressure air spills around the tips of a lifting wing; they cause induced drag and wake turbulence, and are strongest heavy, slow and clean. Winglets act as a barrier that weakens the spillage, reducing induced drag and fuel burn.',
  },
  {
    id: 'oral-aero-13',
    category: 'aerodynamics',
    frequency: 2,
    question: 'What is a vortex generator and what does it do?',
    conceptExplanation:
      'A vortex generator is one of those small metal vanes you see standing up in rows on the wing or tail, each only a few centimetres tall, set at an angle to the flow. Its job is boundary layer maintenance. The boundary layer, the thin layer of air slowed by friction against the surface, is the part of the flow that separates first when the going gets hard, near the stall or around shockwaves at high Mach. Each vane deliberately sheds a small, tidy vortex that stirs faster air from just outside the boundary layer down into it, re-energizing it so it stays attached further along the surface and to higher angles of attack. In practice they delay separation, keep ailerons and other controls effective at low speed, and tame shock-induced separation on transonic wings. The price is a tiny amount of extra parasite drag, which is why they are a cheap, common fix.',
    spokenVersion: [
      'Small vanes on the surface, set at an angle to the airflow',
      'Each sheds a tiny vortex that stirs fast air into the boundary layer',
      'Re-energized boundary layer stays attached longer',
      'Delays separation near the stall and around shockwaves',
      'Keeps controls effective; costs a little parasite drag',
    ],
    mcq: {
      options: [
        'A device that creates wingtip vortices to increase lift',
        'A generator that powers the instruments from the airflow',
        'A fairing that smooths the junction between wing and fuselage',
        'A small vane that mixes faster air into the boundary layer, delaying airflow separation',
      ],
      correctIndex: 3,
    },
    flashcardAnswer:
      'A small vane that sheds a controlled vortex, mixing faster air into the boundary layer to keep it attached longer. It delays separation near the stall and around shockwaves and keeps controls effective, at the cost of slight parasite drag.',
  },
  {
    id: 'oral-aero-14',
    category: 'aerodynamics',
    frequency: 2,
    question: 'What is coffin corner?',
    conceptExplanation:
      'Coffin corner is the tight spot at the top of the flight envelope where the low speed and high speed limits close in on each other. As you climb, two things happen at once. The air gets thinner, so the true airspeed at which the wing reaches the stall, the low speed buffet, keeps rising. Meanwhile the air gets colder, the local speed of sound falls, and with it the true airspeed at which you hit the high speed limit, the Mach buffet near MMO. One limit climbing up, the other coming down: the corridor between them narrows with altitude. At the aerodynamic ceiling they meet: slow down and you get stall buffet, speed up and you get Mach buffet, and there is nowhere left to go. Airlines never operate at that point; cruise levels are chosen to keep a buffet margin, typically enough to handle a load factor from turbulence or a turn, because manoeuvring and weight both push the stall side of the corner up towards you.',
    spokenVersion: [
      'The narrow corridor between low speed and high speed buffet at altitude',
      'Climbing: stall TAS rises as air thins',
      'Same time: Mach limit TAS falls as air gets colder',
      'At the aerodynamic ceiling the two meet: buffet either way',
      'We cruise with a buffet margin for turbulence and turns',
    ],
    mcq: {
      options: [
        'The point at high altitude where the stall buffet and Mach buffet speeds converge, leaving almost no speed margin',
        'The corner of the runway where crosswind is strongest during takeoff',
        'The lowest altitude at which the autopilot can be engaged',
        'The part of the descent where the cabin altitude catches up with the aircraft',
      ],
      correctIndex: 0,
    },
    flashcardAnswer:
      'Coffin corner is the region near the aerodynamic ceiling where the rising stall speed and the falling Mach buffet speed converge: slower means stall buffet, faster means Mach buffet. Cruise levels are chosen to keep a buffet margin clear of it.',
  },
  {
    id: 'oral-aero-15',
    category: 'aerodynamics',
    frequency: 2,
    question: 'What are spoilers used for?',
    conceptExplanation:
      'Spoilers are the panels hinged along the upper surface of the wing that swing up into the airflow. The name says exactly what they do: they spoil the lift the wing is making at that spot, and add drag while they are at it. That one trick gets used three ways. As roll spoilers, the panels on one wing rise a little to help the ailerons: killing lift on the downgoing wing rolls the aircraft crisply, especially at high speed where big aileron deflections are undesirable. As speedbrakes in flight, panels on both wings rise together, adding drag and dumping lift so you can descend faster or slow down without gaining speed. And as ground spoilers or lift dumpers after touchdown, all panels deploy fully, killing the remaining lift so the aircraft\'s weight settles onto the wheels, which is what makes the brakes actually bite, and shortening the landing roll.',
    spokenVersion: [
      'Upper surface panels that dump lift and add drag',
      'Roll spoilers: assist ailerons by killing lift on the downgoing wing',
      'Speedbrakes: both wings together, steeper descent or deceleration',
      'Ground spoilers: full deployment after touchdown',
      'Puts weight on the wheels so the brakes work',
    ],
    mcq: {
      options: [
        'Increasing lift for takeoff and landing',
        'Assisting roll, acting as speedbrakes in flight, and dumping lift after touchdown',
        'Trimming the aircraft in pitch during cruise',
        'Cooling the brakes during a long taxi',
      ],
      correctIndex: 1,
    },
    flashcardAnswer:
      'Spoilers are upper wing panels that dump lift and add drag. Three jobs: roll spoilers assisting the ailerons, speedbrakes for descent and deceleration, and ground spoilers after touchdown that put the weight on the wheels so the brakes bite.',
  },
  {
    id: 'oral-aero-16',
    category: 'aerodynamics',
    frequency: 2,
    question: 'What is the local speed of sound, what affects it, and what is it at sea level?',
    conceptExplanation:
      'The local speed of sound is the speed at which pressure disturbances, sound waves, travel through the air you are flying in right now. It matters to us because it is the yardstick for Mach number: Mach is your TAS divided by this local value. The single thing that sets it is air temperature: warmer air carries sound faster, colder air slower. Pressure and density on their own do not change it, which surprises people, because their effects cancel each other out. At sea level in ISA conditions, plus 15 degrees, it is about 661 knots. Climb into colder air and it falls with the temperature, until the tropopause, where the temperature stops falling and the speed of sound steadies too. That falling yardstick is the whole story behind Mach effects at altitude: the same TAS measures as a higher Mach number up high simply because the speed of sound around you has come down.',
    spokenVersion: [
      'The speed pressure waves travel in the air around you',
      'Depends on temperature only: warmer faster, colder slower',
      'About 661 kt at sea level in ISA, roughly',
      'Falls as you climb until the tropopause, then steadies',
      'It is the yardstick for Mach number: TAS divided by it',
    ],
    mcq: {
      options: [
        'The speed of the jetstream at cruise level; it depends on pressure; about 100 kt at sea level',
        'The maximum speed of the aircraft; it depends on weight; about 350 kt at sea level',
        'The speed sound waves travel in the surrounding air; it depends on temperature; about 661 kt at sea level in ISA',
        'The speed of the wind at the surface; it depends on density; about 15 kt at sea level',
      ],
      correctIndex: 2,
    },
    flashcardAnswer:
      'The speed at which sound travels in the surrounding air, set by temperature alone: colder means slower. About 661 kt at sea level in ISA, falling with height to the tropopause. It is the denominator of Mach number.',
  },
  {
    id: 'oral-aero-17',
    category: 'aerodynamics',
    frequency: 2,
    question: 'What are the primary flight controls?',
    conceptExplanation:
      'The primary flight controls are the surfaces that rotate the aircraft about its three axes, and there are three of them. The ailerons, out near the wingtips, move opposite to each other and roll the aircraft about its longitudinal axis; that is how you bank into a turn. The elevator, on the tailplane, pitches the aircraft about its lateral axis, controlling attitude and hence angle of attack. The rudder, on the fin, yaws the aircraft about its vertical axis, used for coordination, crosswinds and engine-out control. They are called primary because they are essential to controlling the flight path, as opposed to the secondary controls: flaps, slats, spoilers and trim, which change the wing\'s performance or relieve control loads rather than steer the aircraft. On big jets the surfaces are moved hydraulically or by fly by wire, and roll is often shared between ailerons and roll spoilers, but the three-axis principle is the same as in the smallest trainer.',
    spokenVersion: [
      'Ailerons: roll, about the longitudinal axis',
      'Elevator: pitch, about the lateral axis, sets attitude and angle of attack',
      'Rudder: yaw, about the vertical axis, coordination and engine out',
      'Primary because they steer the flight path',
      'Secondary controls are flaps, slats, spoilers and trim',
    ],
    mcq: {
      options: [
        'Flaps, slats and spoilers',
        'Ailerons for roll, elevator for pitch and rudder for yaw',
        'Throttles, brakes and nosewheel steering',
        'Trim tabs, servo tabs and balance tabs',
      ],
      correctIndex: 1,
    },
    flashcardAnswer:
      'Ailerons (roll, longitudinal axis), elevator (pitch, lateral axis) and rudder (yaw, vertical axis). They steer the flight path; flaps, slats, spoilers and trim are the secondary controls.',
  },
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
  {
    id: 'oral-perf-01',
    category: 'performance',
    frequency: 3,
    question: 'Name and define all the speeds on the aircraft.',
    conceptExplanation:
      'The cleanest way to hold these is in groups. Takeoff: V1 is the decision speed, the last moment a rejected takeoff can be started and still stop within the distance available, and equally the earliest the takeoff can be continued after an engine failure; VR is rotation, where you raise the nose; V2 is the takeoff safety speed, the climb speed that guarantees the required gradient with an engine out. Control minimums: VMCG is the minimum speed on the ground at which the rudder can keep you straight after an engine failure, VMCA the same in the air. Stall and landing: VS is the stall speed for the configuration, and VREF is the landing reference speed crossing the threshold, typically about 1.3 times the stall speed in the landing configuration, though the exact factor depends on the certification rules and the type. Structural and configuration limits: VMO and MMO are the maximum operating speed and Mach number, VFE the maximum with flaps extended, VLE the maximum with gear extended and VLO the maximum for actually operating the gear. There are more in the books, but these are the ones the interview wants.',
    spokenVersion: [
      'Takeoff trio: V1 decision, VR rotate, V2 takeoff safety speed',
      'Control minimums: VMCG on the ground, VMCA in the air',
      'Stall and landing: VS for the configuration, VREF about 1.3 times VS, roughly',
      'Limits: VMO and MMO maximum operating, VFE flaps, VLE and VLO gear',
    ],
    mcq: {
      options: [
        'V1 rotation speed, VR decision speed, V2 landing reference speed, VREF takeoff safety speed',
        'V1 maximum operating speed, VR stall speed, V2 gear limit speed, VREF flap limit speed',
        'V1 decision speed, VR rotation speed, V2 takeoff safety speed, VREF landing reference speed',
        'V1 climb speed, VR cruise speed, V2 descent speed, VREF taxi speed',
      ],
      correctIndex: 2,
    },
    flashcardAnswer:
      'Key speeds: V1 decision, VR rotate, V2 takeoff safety speed, VS stall, VREF landing reference (about 1.3 times VS), VMCG and VMCA minimum control speeds, VMO and MMO maximum operating, VFE flap limit, VLE and VLO gear limits.',
  },
  {
    id: 'oral-perf-02',
    category: 'performance',
    frequency: 3,
    question: 'What are the takeoff segments?',
    conceptExplanation:
      'The takeoff segments describe the climb path the aircraft must be able to fly after an engine fails at the worst moment, from the 35 ft screen height at the end of the runway up to at least 1500 ft. For a twin the picture is: first segment, from the screen height until the gear is fully retracted, flown at V2 with takeoff thrust, where the requirement is simply a positive climb gradient. Second segment, from gear up to the acceleration altitude, which is at least 400 ft, still at V2 and takeoff thrust, with a minimum gross gradient of 2.4 percent for a twin; this is usually the most limiting segment and often sets the maximum takeoff weight. Third segment, a level acceleration at the acceleration altitude where the flaps are retracted on schedule and the aircraft accelerates to its final climb speed. Final segment, the climb from there to 1500 ft, now at maximum continuous thrust, with a minimum gradient of 1.2 percent. The numbers 2.4 and 1.2 percent are the certification minima for a twin; three and four engine aircraft have their own figures.',
    spokenVersion: [
      'The engine out climb path from 35 ft screen height to 1500 ft',
      'First: to gear up, at V2, takeoff thrust, positive gradient',
      'Second: gear up to at least 400 ft, 2.4 percent minimum for a twin, usually limiting',
      'Third: level acceleration, flaps retracted, reach final climb speed',
      'Final: climb at maximum continuous thrust, 1.2 percent, to 1500 ft',
    ],
    mcq: {
      options: [
        'The engine out climb path from screen height to 1500 ft: gear retraction, second segment climb, level acceleration, then final segment',
        'The runway distances used for the takeoff roll: TORA, TODA and ASDA',
        'The four thrust settings used between taxi and cruise',
        'The stages of a departure from pushback to top of climb',
      ],
      correctIndex: 0,
    },
    flashcardAnswer:
      'The one engine inoperative path from 35 ft to 1500 ft. First segment to gear up at V2; second segment to at least 400 ft at 2.4 percent minimum for a twin, usually the limiting one; third segment level acceleration and flap retraction; final segment at maximum continuous thrust, 1.2 percent, up to 1500 ft.',
  },
  {
    id: 'oral-perf-03',
    category: 'performance',
    frequency: 2,
    question: 'Maximum endurance versus maximum range: what is the difference?',
    conceptExplanation:
      'They answer two different questions. Maximum endurance is about time: how long can I stay airborne on the fuel I have, never mind where I go. You get it by flying at the speed with the lowest fuel flow per hour, which for a jet is close to the minimum drag speed. It is the holding answer: when ATC parks you in a stack, you fly close to this. Maximum range is about distance: how far can I get on the fuel? Now the question is fuel burned per mile, not per hour, and it pays to fly somewhat faster than the endurance speed, because the extra ground covered outweighs the extra burn; for a jet the best range speed sits noticeably above minimum drag speed. Range also cares about wind where endurance does not: a headwind cuts miles per kilogram of fuel, so you fly a little faster into wind and it can pay to change level, while a holding pattern burns the same either way.',
    spokenVersion: [
      'Endurance: maximum time airborne; range: maximum distance',
      'Endurance speed: lowest fuel flow per hour, near minimum drag speed for a jet',
      'Range speed: best fuel per mile, somewhat faster than that',
      'Wind matters for range, not endurance: speed up a little into a headwind',
      'Holding uses endurance; diversion planning uses range',
    ],
    mcq: {
      options: [
        'Endurance is flying as fast as possible; range is flying as slowly as possible',
        'Endurance is maximum time airborne, flown near minimum fuel flow; range is maximum distance, flown somewhat faster for the best fuel per mile',
        'They are the same thing measured in different units',
        'Endurance applies only to jets and range only to propeller aircraft',
      ],
      correctIndex: 1,
    },
    flashcardAnswer:
      'Maximum endurance is the longest time airborne, flown at the lowest fuel flow, near minimum drag speed for a jet; used for holding. Maximum range is the greatest distance, flown somewhat faster for the best fuel per mile, and adjusted for wind.',
  },
  {
    id: 'oral-perf-04',
    category: 'performance',
    frequency: 2,
    question: 'What is screen height? Does it change?',
    conceptExplanation:
      'Screen height is an imaginary screen standing at the end of the takeoff distance, and the certification rules say the aircraft must cross it by the time the takeoff distance available runs out, even with an engine failed at the worst moment. For a jet transport the screen is 35 ft on a dry runway. And yes, it changes: on a wet runway the rules allow a reduced screen height of 15 ft. The logic of the trade is worth understanding: on a wet runway, stopping distances stretch, so V1 is reduced to keep a rejected takeoff safe; a lower V1 means the continue case starts from a lower speed, and rather than demand more runway the rules accept clearing a lower screen. The same idea appears at the other end of the flight: the landing distance is measured from crossing the threshold at 50 ft. It also marks where the takeoff distance ends and the takeoff flight path, the climb segments, begins.',
    spokenVersion: [
      'Imaginary height to clear by the end of the takeoff distance, engine out',
      '35 ft for a jet on a dry runway',
      'Yes it changes: reduced to 15 ft on a wet runway',
      'Wet: lower V1 for stopping, so a lower screen is accepted',
      'Marks the start of the takeoff flight path segments',
    ],
    mcq: {
      options: [
        'The minimum cloud base for takeoff; it changes with the time of day',
        'The height of the airport fence; it never changes',
        'The height the aircraft must clear at the end of the takeoff distance: 35 ft dry, reduced to 15 ft wet for a jet',
        'The height at which the flight directors engage; it changes with aircraft weight',
      ],
      correctIndex: 2,
    },
    flashcardAnswer:
      'Screen height is the height the aircraft must reach by the end of the takeoff distance available, even engine out: 35 ft on a dry runway for a jet, reduced to 15 ft on a wet one, where a lower V1 protects the stopping case.',
  },
  { id: 'oral-perf-05', category: 'performance', frequency: 1, question: 'What is V1?' },
  { id: 'oral-perf-06', category: 'performance', frequency: 1, question: 'Service ceiling and absolute ceiling: define both.' },
  { id: 'oral-perf-07', category: 'performance', frequency: 1, question: 'A heavy aircraft is landing. What happens to the landing distance and why?' },
  { id: 'oral-perf-08', category: 'performance', frequency: 1, question: 'Landing at a high elevation airport, what happens to the landing distance?' },
  { id: 'oral-perf-09', category: 'performance', frequency: 1, question: 'Takeoff segments: why 1500 ft?' },

  // ---------- instruments ----------
  {
    id: 'oral-inst-01',
    category: 'instruments',
    frequency: 5,
    question: 'What is TAS?',
    conceptExplanation:
      'True airspeed is the actual speed of the aircraft through the air mass it is flying in. The airspeed indicator does not measure it directly: it senses dynamic pressure through the pitot tube, and dynamic pressure depends on both speed and air density. At sea level on a standard day the two match, but as you climb the air gets thinner, so for the same true speed there is less dynamic pressure and the indicator under-reads. TAS is what you get after correcting indicated airspeed for that density change, which depends on altitude and temperature. The working rule of thumb is that TAS rises about 2 percent per 1000 ft for the same indicated airspeed. TAS matters because it is the speed you actually cover air with: add or subtract the wind and you get ground speed, which is what flight planning and navigation are built on.',
    spokenVersion: [
      'The real speed of the aircraft through the air mass',
      'ASI senses dynamic pressure, which drops with density, so it under-reads at altitude',
      'TAS is IAS corrected for density, meaning altitude and temperature',
      'Rule of thumb: about 2 percent higher per 1000 ft for the same IAS',
      'TAS plus or minus wind gives ground speed',
    ],
    mcq: {
      options: [
        'The speed shown directly on the airspeed indicator',
        'The speed of the aircraft over the ground',
        'The actual speed of the aircraft through the air mass',
        'Indicated airspeed corrected for instrument error only',
      ],
      correctIndex: 2,
    },
    flashcardAnswer:
      'TAS is the aircraft\'s real speed through the air mass: IAS corrected for air density. At altitude the air is thinner so TAS is higher than IAS, roughly 2 percent per 1000 ft. TAS with the wind applied gives ground speed.',
  },
  {
    id: 'oral-inst-02',
    category: 'instruments',
    frequency: 2,
    question: 'Does TAS change with altitude? What happens during the climb?',
    conceptExplanation:
      'Yes. The airspeed indicator works on dynamic pressure, and dynamic pressure depends on density as well as speed. Climb at a constant indicated airspeed and the air keeps getting thinner, so to hold the same dynamic pressure the aircraft must actually move faster through the air: TAS rises steadily, by roughly 2 percent per 1000 ft as a rule of thumb. That is the first part of the climb. Higher up, at the crossover altitude, we stop flying a constant IAS and hold a constant Mach number instead, to stay clear of the high speed limits. From there the picture flips: the air is still getting colder, the local speed of sound is falling, and a constant Mach of a falling yardstick means TAS actually decreases gently through the rest of the climb, until the tropopause, where the temperature steadies and so does TAS. So in one climb profile you see TAS rise on the IAS segment and ease back slightly on the Mach segment.',
    spokenVersion: [
      'Yes: same IAS in thinner air means a higher TAS',
      'Roughly 2 percent more TAS per 1000 ft, as a rule of thumb',
      'Climb is flown constant IAS first, constant Mach after crossover',
      'On the Mach segment TAS falls gently as the air cools',
      'Above the tropopause temperature steadies, so TAS does too',
    ],
    mcq: {
      options: [
        'No, TAS is fixed by the throttle setting alone',
        'Yes: at constant IAS, TAS rises as the air thins with altitude, then falls gently on the constant Mach segment as the air cools',
        'Yes: TAS always falls as you climb because drag increases',
        'No, TAS and IAS are always equal above 10,000 ft',
      ],
      correctIndex: 1,
    },
    flashcardAnswer:
      'Yes. Climbing at constant IAS, the thinning air means TAS rises, roughly 2 percent per 1000 ft. After crossover, holding constant Mach in cooling air, TAS falls gently until the tropopause, where it steadies.',
  },
  {
    id: 'oral-inst-03',
    category: 'instruments',
    frequency: 2,
    question: 'Two aircraft at the same IAS, one at FL200 and one at FL350: which is faster and why?',
    conceptExplanation:
      'The one at FL350 is faster, meaning it has the higher true airspeed. The reasoning comes straight from how the airspeed indicator works: it senses dynamic pressure, which is a product of air density and speed. Both aircraft are reading the same indicated airspeed, so both are feeling the same dynamic pressure. But at FL350 the air is far thinner than at FL200, so to generate that same pressure the higher aircraft must be pushing through the air considerably faster. Same IAS, less density, therefore more TAS. Using the rough 2 percent per 1000 ft rule of thumb, 15,000 ft of difference is on the order of a 30 percent gap in TAS, so this is not a small effect; it is exactly why flying high is efficient. Over the ground, of course, wind gets the final say, but through the air the FL350 aircraft is unambiguously the faster one.',
    spokenVersion: [
      'The one at FL350 has the higher TAS',
      'Same IAS means the same dynamic pressure at both levels',
      'Air at FL350 is much thinner',
      'So it must move faster through the air for the same pressure',
      'By the rough 2 percent per 1000 ft rule, a large TAS gap',
    ],
    mcq: {
      options: [
        'The one at FL200, because the air is denser and gives more lift',
        'Both have the same TAS because their IAS is the same',
        'The one at FL350, because the thinner air means a higher TAS is needed for the same indicated airspeed',
        'Impossible to say without knowing the wind',
      ],
      correctIndex: 2,
    },
    flashcardAnswer:
      'The aircraft at FL350. The same IAS means the same dynamic pressure, and in the much thinner air up there the aircraft must move faster through the air to create it, so its TAS is far higher.',
  },
  {
    id: 'oral-inst-04',
    category: 'instruments',
    frequency: 2,
    question: 'IAS, CAS, EAS: define each.',
    conceptExplanation:
      'These are steps in a correction chain, and the order is easy to hold onto: I, C, E, then T. IAS, indicated airspeed, is simply what the airspeed indicator shows, straight from the dynamic pressure the pitot static system delivers, errors and all. CAS, calibrated airspeed, is IAS corrected for instrument error and position error, the error from where the pitot and static sources sit on the airframe and how the local airflow distorts what they sense; the correction varies with configuration and angle of attack. EAS, equivalent airspeed, is CAS corrected for compressibility: at high speed the air piles up and compresses slightly in the pitot, making the reading a little optimistic, and EAS takes that out. It is the aerodynamicist\'s honest speed. The last step, already covered under TAS, is correcting EAS for density to get the true speed through the air. At low speed and low level the four are close together; fast and high, the gaps grow.',
    spokenVersion: [
      'A correction chain: I, C, E, then T',
      'IAS: what the indicator shows, from dynamic pressure',
      'CAS: IAS corrected for instrument and position error',
      'EAS: CAS corrected for compressibility at high speed',
      'EAS corrected for density gives TAS',
    ],
    mcq: {
      options: [
        'IAS is what the indicator shows; CAS corrects it for instrument and position error; EAS further corrects for compressibility',
        'IAS is the true speed; CAS is the ground speed; EAS is the wind corrected speed',
        'IAS is corrected for density; CAS for temperature; EAS for wind',
        'They are three names for the same reading on different aircraft types',
      ],
      correctIndex: 0,
    },
    flashcardAnswer:
      'IAS: the raw indicator reading from dynamic pressure. CAS: IAS corrected for instrument and position error. EAS: CAS corrected for compressibility. Correct EAS for density and you have TAS.',
  },
  {
    id: 'oral-inst-05',
    category: 'instruments',
    frequency: 2,
    question: 'What is ground speed?',
    conceptExplanation:
      'Ground speed is the speed of the aircraft over the surface of the earth, and it is the speed that navigation actually runs on: it decides your timings, your fuel over a route and your estimated arrival. The relationship to remember is that ground speed is true airspeed with the wind applied. The aircraft moves through the air mass at its TAS, but the air mass itself is moving over the ground, so a tailwind adds to TAS and a headwind subtracts, and a crosswind both costs a little speed and pushes you sideways, which is why we lay off drift. The clean contrast to hold: IAS is what the wing and the handling care about, TAS is your real speed through the air, and ground speed is what the flight plan and the passengers care about. Today it comes straight from the IRS and GPS, but the relationship TAS plus or minus wind is still the arithmetic underneath.',
    spokenVersion: [
      'Speed over the ground, the one navigation runs on',
      'Ground speed = TAS with the wind applied',
      'Tailwind adds, headwind subtracts, crosswind gives drift',
      'IAS for handling, TAS through the air, GS for timings and fuel',
      'Comes from IRS and GPS today, same arithmetic underneath',
    ],
    mcq: {
      options: [
        'The speed shown on the airspeed indicator during taxi',
        'The aircraft speed over the surface: TAS with the wind added or subtracted',
        'The speed of the air flowing over the wing',
        'The maximum speed permitted below 10,000 ft',
      ],
      correctIndex: 1,
    },
    flashcardAnswer:
      'Ground speed is the aircraft\'s speed over the earth\'s surface: TAS with the wind applied, tailwind adding and headwind subtracting. It drives timings, fuel and ETAs.',
  },
  {
    id: 'oral-inst-06',
    category: 'instruments',
    frequency: 2,
    question: 'What happens if the pitot is blocked, in the climb and the descent? What happens to the VSI?',
    conceptExplanation:
      'Take it from what the instrument is doing. The airspeed indicator measures the difference between pitot pressure and static pressure. If the pitot tube blocks completely, including its drain hole, the pressure trapped inside the pitot line is frozen at whatever it was, while the static side keeps working. Now the ASI is comparing a fixed trapped pressure against a static pressure that changes with altitude, which means it has stopped being an airspeed indicator and has started behaving like an altimeter. In a climb, static pressure falls, the difference across the capsule grows, and the ASI over-reads: it shows the speed increasing when it may not be. That is the dangerous direction, because the instinctive response, pitching up or pulling power back to control the apparent overspeed, pushes you towards the stall. In a descent the opposite: static rises, the difference shrinks, and it under-reads. The VSI is untouched, because it works entirely from the static source; the same goes for the altimeter. Unreliable airspeed drills exist exactly for this: fly a known pitch and thrust, and sort the instruments out from there.',
    spokenVersion: [
      'Blocked pitot traps a fixed pressure; static keeps working',
      'ASI then behaves like an altimeter',
      'Climb: over-reads; the dangerous case, invites pulling towards the stall',
      'Descent: under-reads',
      'VSI and altimeter unaffected: they use static only',
      'Response: unreliable airspeed drill, known pitch and thrust',
    ],
    mcq: {
      options: [
        'The ASI reads zero at all times and the VSI fails',
        'The ASI over-reads in the climb and under-reads in the descent, behaving like an altimeter; the VSI, on static pressure, is unaffected',
        'The ASI under-reads in the climb and over-reads in the descent; the VSI freezes',
        'Nothing changes, because the static port takes over the pitot\'s job',
      ],
      correctIndex: 1,
    },
    flashcardAnswer:
      'A fully blocked pitot traps its pressure, so the ASI acts like an altimeter: over-reading in the climb (dangerous, invites a pull towards the stall) and under-reading in the descent. The VSI and altimeter run on static pressure and are unaffected. Fly pitch and thrust.',
  },
  { id: 'oral-inst-07', category: 'instruments', frequency: 1, question: 'What are the pressure instruments and how do they work?' },
  { id: 'oral-inst-08', category: 'instruments', frequency: 1, question: 'Explain the pitot system and which pressure it uses.' },
  { id: 'oral-inst-09', category: 'instruments', frequency: 1, question: 'What is GPWS and what are its modes?' },
  { id: 'oral-inst-10', category: 'instruments', frequency: 1, question: 'What is TCAS? What is a TA and what is an RA?' },
  { id: 'oral-inst-11', category: 'instruments', frequency: 1, question: 'What is TAT and what is SAT?' },
  { id: 'oral-inst-12', category: 'instruments', frequency: 1, question: 'What is QNH and what is QFE?' },

  // ---------- meteorology ----------
  {
    id: 'oral-met-01',
    category: 'meteorology',
    frequency: 4,
    question: 'What is a jetstream, how does it form, and where do you find it?',
    conceptExplanation:
      'A jetstream is a narrow ribbon of very strong wind found near the tropopause: thousands of kilometres long but only a few hundred wide and a few kilometres deep, with core speeds of at least 60 knots and sometimes well over 150. It forms where two air masses with a big temperature difference sit next to each other. That horizontal temperature contrast creates a pressure gradient that grows stronger with height, so the wind keeps strengthening up to the tropopause, and the flow is turned to run west to east. The two main ones are the polar front jet, over the boundary between polar and warmer mid-latitude air at roughly 30 to 60 degrees latitude and around FL300, and the subtropical jet nearer 25 to 30 degrees and higher, around FL400. Both sit near breaks in the tropopause, are westerly in both hemispheres, and are strongest in winter when the temperature contrast is biggest. For us they matter twice: a well planned jet gives a serious tailwind, and the edges of the jet, especially the cold polar side, are prime areas for clear air turbulence.',
    spokenVersion: [
      'Narrow band of strong wind near the tropopause, core 60 kt or more',
      'Formed by a big horizontal temperature contrast between air masses',
      'Polar front jet around FL300, subtropical jet around FL400',
      'Westerly in both hemispheres, strongest in winter',
      'Found at tropopause breaks; edges give CAT, core gives tailwinds',
    ],
    mcq: {
      options: [
        'A narrow band of very strong wind near tropopause breaks, formed by the temperature contrast between air masses',
        'A wide layer of light wind at the surface, formed by daytime heating',
        'A vertical current inside a thunderstorm, formed by latent heat release',
        'A steady easterly wind found only over the equator',
      ],
      correctIndex: 0,
    },
    flashcardAnswer:
      'A narrow band of very strong westerly wind (60 kt plus at the core) near tropopause breaks, driven by the temperature contrast between air masses. Main ones are the polar front jet near FL300 and the subtropical jet near FL400; both are strongest in winter and their edges produce CAT.',
  },
  {
    id: 'oral-met-02',
    category: 'meteorology',
    frequency: 3,
    question: 'What is a thunderstorm and what are its stages?',
    conceptExplanation:
      'A thunderstorm is a cumulonimbus cloud producing lightning and thunder, and it needs three ingredients to get going: unstable air, enough moisture, and something to trigger the lifting, like surface heating, a front or terrain. A single cell then lives through three stages. In the cumulus stage the cloud is building: updrafts only, growing fast, no rain yet. The mature stage begins when precipitation starts to fall and drags air down with it, so updrafts and downdrafts exist side by side in the same cloud. This is the most dangerous stage: heavy rain, hail, lightning, severe turbulence, icing, and windshear or microbursts underneath. In the dissipating stage the downdrafts take over, cut off the storm\'s inflow of warm moist air, the anvil spreads out at the top and the cell collapses. A single cell lasts somewhere around an hour, roughly, but storms often form in multicell clusters or lines where new cells keep replacing old ones, which is why the storm as a whole can go on much longer.',
    spokenVersion: [
      'A CB with lightning; needs instability, moisture and a lifting trigger',
      'Cumulus stage: updrafts only, cloud building',
      'Mature stage: updrafts and downdrafts together, the dangerous one',
      'Hazards then: hail, severe turbulence, windshear, microbursts, lightning',
      'Dissipating stage: downdrafts dominate, anvil spreads, cell dies',
    ],
    mcq: {
      options: [
        'A stratus layer producing steady drizzle, with warm and cold stages',
        'A cumulonimbus storm with lightning, growing through cumulus, mature and dissipating stages',
        'A night time fog bank, with forming and clearing stages',
        'A standing wave cloud downwind of mountains, with lifting and sinking stages',
      ],
      correctIndex: 1,
    },
    flashcardAnswer:
      'A cumulonimbus producing lightning and thunder, built from instability, moisture and a trigger. Stages: cumulus (updrafts, building), mature (updrafts and downdrafts together, heaviest weather and windshear), dissipating (downdrafts and the anvil). The mature stage is the most hazardous.',
  },
  {
    id: 'oral-met-03',
    category: 'meteorology',
    frequency: 3,
    question: 'What is ISA, its parameters, and the lapse rates DALR, ELR, SALR?',
    conceptExplanation:
      'ISA, the International Standard Atmosphere, is an agreed model of the atmosphere so that instruments, performance charts and pilots everywhere are talking about the same thing. Its sea level parameters: temperature 15 degrees C, pressure 1013.25 hPa, density 1.225 kilograms per cubic metre. In the model the temperature falls at 1.98 degrees per 1000 ft, in practice we say about 2, up to 36,090 ft, and above that it holds constant at minus 56.5 degrees. The lapse rates describe how real air behaves when a parcel of it is lifted. The DALR, dry adiabatic lapse rate, is 3 degrees per 1000 ft and applies to a parcel that is not saturated. The SALR, saturated adiabatic lapse rate, is lower, around 1.8 degrees per 1000 ft, because condensation releases latent heat that partly offsets the cooling; it is not a fixed number and varies with temperature. The ELR, environmental lapse rate, is not a rule at all: it is whatever the actual atmosphere is doing that day, measured by balloon. Comparing the ELR against the DALR and SALR is how we judge whether the air is stable or unstable.',
    spokenVersion: [
      'Standard model atmosphere: 15 C, 1013.25 hPa, 1.225 kg per cubic metre at sea level',
      'ISA temperature falls about 2 C per 1000 ft (1.98) up to 36,090 ft, then minus 56.5 constant',
      'DALR: 3 C per 1000 ft for an unsaturated parcel',
      'SALR: around 1.8, lower because condensation releases latent heat; it varies',
      'ELR: the actual measured rate that day; compare them to judge stability',
    ],
    mcq: {
      options: [
        'The average weather for each region, updated monthly',
        'A forecast model of upper winds issued every six hours',
        'A standard atmosphere: 15 C and 1013.25 hPa at sea level, temperature falling about 2 C per 1000 ft up to 36,090 ft',
        'The coldest recorded atmosphere, used for engine testing',
      ],
      correctIndex: 2,
    },
    flashcardAnswer:
      'ISA: sea level 15 C, 1013.25 hPa, density 1.225 kg per cubic metre, temperature falling 1.98 C (about 2) per 1000 ft to 36,090 ft, then constant at minus 56.5 C. DALR 3 C per 1000 ft, SALR around 1.8 and variable, ELR is whatever the real atmosphere measures that day.',
  },
  {
    id: 'oral-met-04',
    category: 'meteorology',
    frequency: 3,
    question: 'What is the tropopause and what happens there? What is its height at the equator and the poles?',
    conceptExplanation:
      'The tropopause is the boundary between the troposphere, where we live and where nearly all weather happens, and the stratosphere above it. What defines it is temperature: through the troposphere temperature falls with height, and at the tropopause it stops falling, becoming constant or even rising slightly above. That makes the air above extremely stable, so the tropopause acts like a lid: convection, water vapour and weather are trapped underneath it, which is why CB tops flatten into anvils when they reach it. Its height varies with latitude and season: over the poles it sits at roughly 8 km, around 25,000 ft, while over the equator it is much higher, roughly 16 to 18 km, well above 50,000 ft, all approximate figures. Counter-intuitively the high equatorial tropopause is also the colder one, because the temperature keeps falling all the way up to it. The tropopause does not slope smoothly from equator to pole: it steps down in breaks, and those breaks are exactly where the jetstreams sit and where CAT is common.',
    spokenVersion: [
      'Boundary between troposphere and stratosphere',
      'Temperature stops falling with height there; air above is very stable',
      'Acts as a lid: weather and convection trapped below, CB anvils flatten on it',
      'Height roughly 8 km at the poles, 16 to 18 km at the equator, approximately',
      'Equatorial tropopause is higher and colder; jets and CAT sit at its breaks',
    ],
    mcq: {
      options: [
        'The boundary where temperature stops falling with height, higher over the equator than over the poles',
        'The layer of maximum weather, lowest over the equator',
        'The bottom of the troposphere, at the same height everywhere',
        'The level where pressure stops changing with height',
      ],
      correctIndex: 0,
    },
    flashcardAnswer:
      'The lid of the troposphere: the level where temperature stops falling with height, trapping weather and convection below. Roughly 8 km high at the poles and 16 to 18 km at the equator, and the equatorial one is both higher and colder. Jetstreams and CAT live near its breaks.',
  },
  {
    id: 'oral-met-05',
    category: 'meteorology',
    frequency: 3,
    question: 'What is CAT, what causes it, and where do you find it?',
    conceptExplanation:
      'CAT is clear air turbulence: turbulence at high level in air with no cloud in it, which is what makes it nasty, because there is nothing to see out the window and nothing for the weather radar to paint. The cause is windshear: layers of air sliding past each other at different speeds or directions, and where the shear is strong enough the smooth flow breaks down into turbulent eddies. The classic place to find it is around the jetstream, since a jet is by definition a huge speed difference packed into a small space. It is worst near the tropopause on the edges of the jet, and the cold, polar side of the core has the reputation for the roughest air. You also find CAT in mountain waves, well downwind and far above the terrain that made them. Because you cannot detect it onboard, the defences are planning and reports: the significant weather charts, forecasts, and pilot reports from aircraft ahead, plus keeping the seatbelt sign in mind, and if you hit it, a change of level or route.',
    spokenVersion: [
      'Turbulence in clear air at high level; invisible to eye and radar',
      'Caused by windshear between layers moving at different speeds',
      'Classic location: jetstream edges near the tropopause, worst on the cold polar side',
      'Also in mountain waves, far from the terrain that made them',
      'Defences: SIGWX charts, forecasts, pilot reports, seatbelts, change level or route',
    ],
    mcq: {
      options: [
        'Turbulence inside a thunderstorm caused by updrafts and downdrafts',
        'Low level turbulence from surface heating on a hot afternoon',
        'Vibration caused by ice building on the wings',
        'High level turbulence in cloud free air, caused by windshear around jetstreams and in mountain waves',
      ],
      correctIndex: 3,
    },
    flashcardAnswer:
      'CAT is turbulence in clear air at high altitude, caused by windshear, most often at jetstream edges near the tropopause (worst on the cold polar side) and in mountain waves. Radar cannot see it, so you rely on forecasts and pilot reports.',
  },
  {
    id: 'oral-met-06',
    category: 'meteorology',
    frequency: 2,
    question: 'How do clouds form?',
    conceptExplanation:
      'A cloud is what you get when moist air is cooled to its dew point, the temperature at which it can no longer hold its water as invisible vapour. The vapour condenses into droplets on tiny particles in the air, condensation nuclei like dust and salt, and millions of those droplets together are the cloud. The cooling almost always comes from lifting: raise a parcel of air and it expands into the lower pressure and cools adiabatically, at the DALR while dry and the SALR once saturated. What does the lifting is the useful part of the answer: convection from a heated surface, air forced up over terrain, air climbing over a frontal surface, or air converging into a low and having nowhere to go but up. The character of the cloud then follows from stability: unstable air keeps rising and builds cumuliform cloud, stable air spreads into layered stratiform sheets. Cooling without lifting, by radiation on a clear night or advection over a cold surface, gives cloud at the surface, which is fog.',
    spokenVersion: [
      'Moist air cooled to its dew point; vapour condenses on nuclei',
      'Cooling is usually adiabatic, from lifting',
      'Lifting: convection, terrain, fronts, convergence',
      'Unstable air gives cumuliform, stable air gives stratiform',
      'Cooling at the surface without lifting gives fog',
    ],
    mcq: {
      options: [
        'Air is heated until its moisture evaporates into a visible cloud',
        'Moist air is lifted and cooled to its dew point, and the vapour condenses on nuclei into droplets',
        'Wind mixes smoke and dust into visible layers',
        'Rain falling from high level freezes into a cloud layer',
      ],
      correctIndex: 1,
    },
    flashcardAnswer:
      'Moist air is cooled, usually by being lifted and expanding, until it reaches its dew point; the vapour then condenses on condensation nuclei into droplets. Lifting comes from convection, terrain, fronts or convergence; stability decides whether the result is cumuliform or stratiform.',
  },
  {
    id: 'oral-met-07',
    category: 'meteorology',
    frequency: 2,
    question: 'How are clouds classified and what are the families?',
    conceptExplanation:
      'Clouds are classified two ways at once: by the height of their base and by their form. Height gives the families. High cloud, the cirrus family, is made of ice crystals: cirrus, cirrocumulus and cirrostratus. Medium cloud carries the prefix alto: altocumulus and altostratus. Low cloud is stratus, stratocumulus, and nimbostratus, the thick rain-bearer that in practice spans low and medium levels. The fourth family is cloud of vertical development, which ignores the height bands entirely: cumulus and cumulonimbus, growing from a low base up through the levels, the CB sometimes all the way to the tropopause. The rough band heights vary with latitude, so treat them as approximate. Form tells you the physics: cumuliform means unstable air, heaped cloud, showers and bumps; stratiform means stable air, layered cloud, steady precipitation and smoother rides. The prefix nimbo or suffix nimbus simply marks a cloud that rains.',
    spokenVersion: [
      'Classified by base height and by form',
      'High: cirrus family, ice crystals. Medium: alto prefix',
      'Low: stratus, stratocumulus, nimbostratus',
      'Vertical development: cumulus and CB, up through the levels',
      'Cumuliform means unstable and showery; stratiform means stable and steady',
    ],
    mcq: {
      options: [
        'By colour: white, grey and dark clouds',
        'By the height of their base and their form: high, medium, low and vertical development families',
        'By the season in which they appear',
        'By wind speed at their level: fast, medium and slow clouds',
      ],
      correctIndex: 1,
    },
    flashcardAnswer:
      'Classified by base height and form. Families: high (cirrus, cirrocumulus, cirrostratus), medium (altocumulus, altostratus), low (stratus, stratocumulus, nimbostratus) and vertical development (cumulus, cumulonimbus). Cumuliform means unstable air; stratiform means stable.',
  },
  {
    id: 'oral-met-08',
    category: 'meteorology',
    frequency: 2,
    question: 'What is a microburst, what are its types, and why is it hazardous?',
    conceptExplanation:
      'A microburst is an intense, concentrated downdraft from a convective cloud that hits the ground and bursts outward in all directions, like water poured onto a plate. It is small, a few kilometres across, and short-lived, usually a matter of minutes, which is exactly what makes it treacherous: it can be sitting on the approach path with little warning. The two types are wet and dry. A wet microburst arrives inside a shaft of heavy rain, visible on radar; a dry one falls from high-based cloud where the rain evaporates on the way down, the evaporation actually cooling and accelerating the downdraft, and there may be nothing to see but a ring of blown dust. The hazard is the shear sequence on approach: first you fly into the outflow headwind, performance and airspeed jump, and the temptation is to reduce thrust; seconds later the headwind becomes a downdraft and then a tailwind, and the aircraft is suddenly low, slow and sinking with the engines spooled down. That sequence has destroyed airliners, which is why windshear warnings trigger a full escape manoeuvre, not a corrected approach.',
    spokenVersion: [
      'A concentrated downdraft that hits the ground and bursts outward',
      'Small and brief: a few kilometres, a few minutes',
      'Wet type in heavy rain; dry type under high cloud, invisible',
      'Sequence: headwind gain, then downdraft, then tailwind loss',
      'Low, slow and sinking with thrust reduced: escape manoeuvre, never ride it',
    ],
    mcq: {
      options: [
        'A small area of clear air turbulence at cruise level',
        'A sudden increase in headwind that improves performance all the way down',
        'An intense downdraft from a convective cloud spreading out at the ground, wet or dry, giving headwind then tailwind shear on approach',
        'A gust of crosswind on the runway during taxi',
      ],
      correctIndex: 2,
    },
    flashcardAnswer:
      'An intense localized downdraft from convective cloud that spreads out on hitting the ground; wet (in heavy rain) or dry (evaporating, nearly invisible). Hazardous because approach shear runs headwind gain, then downdraft, then tailwind loss, leaving you low and slow; the answer is the windshear escape manoeuvre.',
  },
  {
    id: 'oral-met-09',
    category: 'meteorology',
    frequency: 2,
    question: 'What are the types of fog?',
    conceptExplanation:
      'Fog is cloud at the surface, and the types are named for what does the cooling or supplies the moisture. Radiation fog forms on clear, calm nights: the ground radiates its heat away, chills the air touching it to its dew point, and a light stir of wind spreads the cooling into a layer; it favours valleys and burns off after sunrise. Advection fog forms when moist air flows over a cold surface, sea fog being the classic, and unlike radiation fog it can arrive in wind and persist for days. Upslope or hill fog is moist air cooled adiabatically as it is forced up rising ground, cloud sitting on the hills. Frontal or precipitation fog forms ahead of a warm front, where rain falling into the cold air beneath saturates it. Steam fog forms when very cold air drifts over much warmer water and the water appears to smoke. For operations, radiation fog is the early morning menace at inland airports; advection fog is the one that can shut a coastal airport for a long time.',
    spokenVersion: [
      'Radiation: clear calm night, ground cools the air; burns off in the morning',
      'Advection: moist air over a cold surface; sea fog, can persist in wind',
      'Upslope: moist air cooled climbing rising ground',
      'Frontal: rain ahead of a warm front saturates the cold air below',
      'Steam fog: cold air over warm water',
    ],
    mcq: {
      options: [
        'Radiation, advection, upslope, frontal and steam fog',
        'Cumulus, stratus and cirrus fog',
        'Morning, afternoon and evening fog',
        'Ground, sky and sea smoke only',
      ],
      correctIndex: 0,
    },
    flashcardAnswer:
      'Radiation fog (clear calm nights, ground cooling), advection fog (moist air over a cold surface, sea fog), upslope fog (air cooled climbing terrain), frontal fog (rain ahead of a warm front saturating cold air) and steam fog (cold air over warm water).',
  },
  {
    id: 'oral-met-10',
    category: 'meteorology',
    frequency: 2,
    question: 'Virga, dew, mist, haze: define each.',
    conceptExplanation:
      'Four small definitions, each with an operational edge. Virga is precipitation that falls from a cloud but evaporates before reaching the ground; you see it as grey streaks hanging under the cloud base. The catch is that the evaporation cools the air and can drive strong downdrafts, so virga under convective cloud is a warning sign for dry microburst conditions. Dew is water vapour condensing directly onto cold surfaces on clear, calm nights, the same cooling that, with a little wind to stir it, would give radiation fog instead. Mist is water droplets reducing visibility, but not below fog limits: in reports, visibility of 1000 metres or more with high humidity is mist, coded BR, while below 1000 metres it becomes fog, FG. Haze is different in kind: it is dry particles, dust or smoke or salt, scattering the light, reduced visibility with no moisture story at all, coded HZ, common in this region when desert dust hangs in stable air.',
    spokenVersion: [
      'Virga: precipitation evaporating before it reaches the ground',
      'Under convective cloud, virga hints at dry microburst risk',
      'Dew: vapour condensing straight onto cold surfaces on calm clear nights',
      'Mist: water droplets, visibility 1000 m or more; below that it is fog',
      'Haze: dry particles like dust or smoke, no moisture involved',
    ],
    mcq: {
      options: [
        'Virga is ground frost; dew is falling rain; mist is smoke; haze is thick fog',
        'Virga is precipitation evaporating before the ground; dew is condensation on surfaces; mist is water droplets with visibility 1000 m or more; haze is dry particles',
        'All four are types of freezing precipitation',
        'Virga is a cloud family; dew, mist and haze are wind phenomena',
      ],
      correctIndex: 1,
    },
    flashcardAnswer:
      'Virga: precipitation evaporating before reaching the ground, a dry microburst clue under convective cloud. Dew: condensation directly onto cold surfaces at night. Mist: water droplets, visibility 1000 m or more (BR); below 1000 m it is fog. Haze: dry particles such as dust or smoke (HZ).',
  },
  {
    id: 'oral-met-11',
    category: 'meteorology',
    frequency: 2,
    question: 'What are the layers of the atmosphere?',
    conceptExplanation:
      'From the ground up, the atmosphere is stacked in layers defined by what the temperature does in each. The troposphere is the bottom layer, where temperature falls with height, where nearly all the water vapour lives and therefore where the weather happens; it is capped by the tropopause, higher and colder over the equator than the poles. Above it lies the stratosphere, where temperature is first steady and then rises with height because the ozone layer absorbs solar ultraviolet; that makes it very stable, dry and largely weather-free, which is why cruising in the lower stratosphere on polar-side routes is such smooth flying. Above that, the mesosphere, where temperature falls again to the coldest point of the atmosphere, and then the thermosphere, where the thin air is heated by direct solar radiation, and within which the ionosphere sits, the electrified region that HF radio depends on. Commercial aviation lives in the troposphere and the lowest slice of the stratosphere; the rest matters to us mainly through radio and space weather.',
    spokenVersion: [
      'Troposphere: temperature falls with height, all the weather; capped by the tropopause',
      'Stratosphere: stable, ozone warms it with height, smooth cruising',
      'Mesosphere: temperature falls again, coldest point',
      'Thermosphere: heated by the sun, contains the ionosphere for HF',
      'We operate in the troposphere and lower stratosphere',
    ],
    mcq: {
      options: [
        'Troposphere, stratosphere, mesosphere and thermosphere, separated by how temperature changes with height',
        'Low, medium and high layers, separated by cloud families',
        'The pressure layer, the wind layer and the weather layer',
        'The ionosphere, then the stratosphere, then the troposphere going upward',
      ],
      correctIndex: 0,
    },
    flashcardAnswer:
      'Troposphere (temperature falling, all the weather), tropopause, stratosphere (stable, warmed aloft by ozone), mesosphere (cooling again), thermosphere (solar heated, holds the ionosphere). Airliners fly in the troposphere and lower stratosphere.',
  },
  {
    id: 'oral-met-12',
    category: 'meteorology',
    frequency: 2,
    question: 'What is windshear, how is it formed, and how do you handle it on the approach?',
    conceptExplanation:
      'Windshear is a marked change of wind speed or direction over a short distance, horizontally or vertically, short enough that the aircraft crosses it before it can settle into the new wind, so the airspeed and flight path get disturbed. It forms in several ways: thunderstorms and microbursts are the violent source; fronts bring a wind change across their surface; a low-level temperature inversion can have calm air beneath and a strong flow just above, including the low-level jet at night; terrain and buildings bend the surface wind; and a strong gusty crosswind shears in its own right. On approach, the defence starts before the aircraft: if windshear is reported or a predictive windshear warning triggers, delay the approach or divert; there is no prize for flying into it. Fly a stabilised approach with any recommended speed additive. If you encounter it, the moment performance goes wrong, fluctuating airspeed, sink, a windshear warning, the answer is the escape manoeuvre: maximum thrust, rotate towards the commanded pitch, follow the flight director windshear guidance, keep the configuration until safely climbing away. Never try to rescue the landing out of a shear encounter.',
    spokenVersion: [
      'A marked wind change over a short distance, vertical or horizontal',
      'Sources: thunderstorms and microbursts, fronts, inversions and low level jets, terrain',
      'Reported or predicted on approach: delay or divert',
      'Stabilised approach, speed additive if recommended',
      'Encounter: escape manoeuvre, max thrust, pitch, configuration held, go around',
    ],
    mcq: {
      options: [
        'A steady headwind down the whole approach, handled by trimming once',
        'A sudden change of wind speed or direction over a short distance; avoid when warned, and fly the escape manoeuvre if encountered',
        'The normal decrease of wind near the ground, handled by reducing flap',
        'Turbulence from the aircraft ahead, handled by extra spacing only',
      ],
      correctIndex: 1,
    },
    flashcardAnswer:
      'Windshear is a marked wind change over a short distance, from storms and microbursts, fronts, inversions, low level jets or terrain. On approach: delay or divert if warned, fly stabilised with any additive, and on encountering it fly the windshear escape manoeuvre and go around; never continue the landing.',
  },
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
  {
    id: 'oral-nav-01',
    category: 'navigation',
    frequency: 4,
    question: 'ILS: how does it work, what are its frequencies, what does it combine, and what are its errors?',
    conceptExplanation:
      'The ILS is the standard precision approach aid: it combines lateral and vertical guidance to bring you down to the runway on a defined path. Lateral guidance comes from the localizer, an antenna past the far end of the runway transmitting on VHF between 108.10 and 111.95 MHz. Vertical guidance comes from the glideslope, an antenna beside the touchdown zone transmitting on UHF between about 329 and 335 MHz, giving a path of roughly 3 degrees. You never tune the glideslope yourself: it is frequency paired with the localizer, so selecting the localizer gives you both. Both beams work the same way: two overlapping lobes, one modulated at 90 Hz and one at 150 Hz, and the receiver compares the depth of modulation to tell you which side of the beam you are on. Range information comes from marker beacons or, more usually now, a paired DME. The errors to know: false glideslopes, which are reflection lobes at multiples of the real angle, around 6 and 9 degrees, which is why you intercept from below and cross check altitude against distance; and beam bending or scalloping, where vehicles, aircraft or terrain reflect the signal, which is why the ILS critical and sensitive areas are protected in low visibility operations.',
    spokenVersion: [
      'Precision approach: localizer for centreline plus glideslope for a 3 degree path',
      'Localizer VHF 108.10 to 111.95; glideslope UHF around 329 to 335, frequency paired',
      'Receiver compares 90 Hz and 150 Hz modulation to find beam centre',
      'Range from marker beacons or a paired DME',
      'Errors: false glideslopes at about 6 and 9 degrees, beam bending from reflections',
      'So intercept from below, cross check range against altitude, protect critical areas',
    ],
    mcq: {
      options: [
        'A single UHF beam giving distance and height above the runway',
        'A VHF localizer (108.10 to 111.95 MHz) with a paired UHF glideslope giving centreline and a 3 degree path',
        'A satellite based approach needing no ground equipment',
        'An NDB and a DME combined to give a curved approach path',
      ],
      correctIndex: 1,
    },
    flashcardAnswer:
      'A precision approach aid combining a VHF localizer (108.10 to 111.95 MHz) for centreline with a frequency paired UHF glideslope (about 329 to 335 MHz) for a roughly 3 degree path, plus markers or DME for range. Guidance comes from comparing 90 and 150 Hz modulations. Main errors: false glideslopes near 6 and 9 degrees, and beam bending from reflections, hence protected critical areas.',
  },
  {
    id: 'oral-nav-02',
    category: 'navigation',
    frequency: 2,
    question: 'What are the approach segments?',
    conceptExplanation:
      'An instrument approach procedure is built from segments, each with its own job and its own obstacle protection. The arrival gets you from the enroute structure towards the airport, often via a STAR. The initial approach segment begins at the initial approach fix, the IAF, and its job is manoeuvring: getting the aircraft pointed the right way, descending, starting to slow. The intermediate segment, from the intermediate fix, is about preparation: it is designed with a shallow or level profile so you can configure, slow to approach speed and stabilise before the real descent begins. The final approach segment, from the final approach fix or point, is the descent to the runway, down to a decision altitude on a precision approach like the ILS, or a minimum descent altitude on a non-precision one. And the missed approach segment, from the missed approach point, is the protected escape route if you do not become visual: a defined track and climb that guarantees obstacle clearance. Knowing which segment you are in tells you what the procedure expects of you at that moment.',
    spokenVersion: [
      'Arrival brings you from enroute towards the procedure',
      'Initial, from the IAF: manoeuvring and slowing',
      'Intermediate, from the IF: configure and stabilise, shallow profile',
      'Final, from the FAF: the descent to DA or MDA',
      'Missed approach, from the MAP: the protected escape climb',
    ],
    mcq: {
      options: [
        'Takeoff, cruise, descent and landing',
        'Downwind, base and final only',
        'Arrival, initial, intermediate, final and missed approach segments',
        'The first, second, third and final climb segments',
      ],
      correctIndex: 2,
    },
    flashcardAnswer:
      'Arrival, then initial (from the IAF, manoeuvring), intermediate (from the IF, configure and stabilise), final (from the FAF, descent to DA or MDA) and missed approach (from the MAP, the protected escape climb). Each segment has its own job and obstacle protection.',
  },
  {
    id: 'oral-nav-03',
    category: 'navigation',
    frequency: 2,
    question: 'IRS and INS: what are they, how do they work, and what is the difference?',
    conceptExplanation:
      'Both are self-contained navigation systems: give them a starting position and they track everything that happens to the aircraft afterwards, with no radio, no ground stations, no satellites. The principle is dead reckoning by physics. Accelerometers measure every acceleration of the aircraft; integrate acceleration once and you have velocity, integrate again and you have distance and direction travelled, and therefore present position. Gyros keep track of which way the accelerometers are pointing, and the whole thing needs a careful alignment on the ground, stationary at a known position, to find true north and level before flight. The difference is the generation of technology. The INS is the older system: a mechanically gimballed platform physically held stable in space by spinning gyros, with the accelerometers mounted on it. The IRS is the modern one: strapdown, meaning the sensors are bolted to the airframe, with ring laser gyros measuring rotation and a computer doing mathematically what the gimbals did mechanically. Both drift slowly with time, a few miles over a long flight being typical, roughly, which is why modern aircraft blend IRS with GPS updating: the IRS gives the smooth, continuous, jam-proof backbone, and GPS pins it to the earth.',
    spokenVersion: [
      'Self-contained dead reckoning: no radio, no satellites',
      'Accelerometers integrated once for velocity, twice for position',
      'Gyros track orientation; aligned before flight at a known position',
      'INS: old, mechanical gimballed platform. IRS: strapdown, ring laser gyros, computed',
      'Both drift with time, so modern aircraft blend IRS with GPS updates',
    ],
    mcq: {
      options: [
        'Radio systems that triangulate position from ground beacons',
        'Self-contained systems integrating accelerometer and gyro data for position; INS uses a mechanical gimballed platform, IRS is strapdown with laser gyros',
        'Satellite receivers that need at least four satellites to navigate',
        'Autopilot modes for holding a selected heading',
      ],
      correctIndex: 1,
    },
    flashcardAnswer:
      'Self-contained inertial navigation: accelerometers and gyros, aligned at a known position, integrate acceleration into velocity and position with no external signals. INS is the older gimballed platform; IRS is modern strapdown with ring laser gyros and computation. Both drift, so they are blended with GPS.',
  },
  {
    id: 'oral-nav-04',
    category: 'navigation',
    frequency: 2,
    question: 'RNAV and GPS: what are they and what are the charts used for?',
    conceptExplanation:
      'RNAV, area navigation, is a capability, not a piece of equipment: it means the aircraft can fly point to point along any desired track, between arbitrary waypoints, instead of being chained to tracks that run beacon to beacon. The FMS builds the route from a database and feeds it whatever position sources it has: GPS, IRS, DME ranging. GPS is one of those sources, and today the dominant one: a constellation of satellites broadcasting timed signals, from which the receiver measures its distance to each and solves for position, needing at least four satellites for a three-dimensional fix, with integrity monitoring, RAIM, checking that the answer can be trusted. The charts: RNAV SIDs, STARs and RNAV or RNP approach charts describe procedures defined entirely by waypoints, with the required navigation accuracy printed on them; RNP means RNAV plus the aircraft monitoring and alerting its own accuracy. The chart tells you the path, the required performance, and the minima that apply to the equipment you are using.',
    spokenVersion: [
      'RNAV: the capability to fly point to point between waypoints, off the beacon tracks',
      'Position from whatever sensors are available: GPS, IRS, DME ranging',
      'GPS: satellite ranging, four satellites minimum for a 3D fix, RAIM for integrity',
      'RNP is RNAV with onboard accuracy monitoring and alerting',
      'Charts: RNAV SIDs, STARs and approaches, waypoint-defined with required accuracy and minima',
    ],
    mcq: {
      options: [
        'Two names for the autopilot system',
        'RNAV is a satellite constellation; GPS is the chart that displays it',
        'RNAV is point to point navigation using available sensors; GPS is satellite ranging that feeds it; the charts define waypoint-based departures, arrivals and approaches',
        'Radar systems used by ATC to vector aircraft',
      ],
      correctIndex: 2,
    },
    flashcardAnswer:
      'RNAV is the capability to navigate point to point between waypoints using available sensors; GPS is satellite ranging (four satellites for a 3D fix, RAIM for integrity) and is the main sensor today. RNAV and RNP charts define waypoint-based SIDs, STARs and approaches with the required accuracy and minima.',
  },
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
  {
    id: 'oral-gen-01',
    category: 'general',
    frequency: 4,
    question: 'What is ETOPS?',
    conceptExplanation:
      'ETOPS stands for Extended-range Twin-engine Operations; ICAO now calls the wider concept EDTO, extended diversion time operations. The background is simple: a twin that loses an engine has only one left, so historically twins were kept within 60 minutes single-engine flying time of an adequate airport. ETOPS is the approval that relaxes that rule. If the aircraft type is certified for it and the operator is approved, the aircraft may fly routes further away, up to its approved diversion time, quoted in minutes: ETOPS 120, ETOPS 180 and today well beyond that. The time means how far you may be from an adequate alternate, flown at the approved one engine inoperative speed in still air. In exchange there are stricter requirements: designated enroute alternates within the diversion time with suitable weather, extra fuel scenarios, and tighter maintenance rules, like not having the same engineer do the same task on both engines. It is what lets twins like the 787 or A350 fly long oceanic routes that used to need three or four engines.',
    spokenVersion: [
      'Extended range twin operations; ICAO now calls it EDTO',
      'Baseline rule: a twin stays within 60 minutes of an adequate airport',
      'ETOPS approval extends that to 120, 180 minutes or more',
      'Time is measured at the one engine inoperative speed in still air',
      'Needs enroute alternates, extra fuel planning and stricter maintenance',
    ],
    mcq: {
      options: [
        'A rule keeping twin engine aircraft within 60 NM of the coast at all times',
        'Approval for twins to fly more than 60 minutes from an adequate alternate, up to an approved diversion time',
        'The extra holding fuel carried on all oceanic crossings',
        'A certificate allowing flight without ATC contact over oceans',
      ],
      correctIndex: 1,
    },
    flashcardAnswer:
      'ETOPS (now EDTO) is the approval letting twin-engine aircraft fly more than 60 minutes from an adequate alternate, up to an approved diversion time such as 120 or 180 minutes at the one engine inoperative speed, with stricter alternate, fuel and maintenance requirements.',
  },
  {
    id: 'oral-gen-02',
    category: 'general',
    frequency: 2,
    question: 'What is a NOTAM and what is it used for?',
    conceptExplanation:
      'A NOTAM, a notice to airmen, is the system aviation uses to tell you what has changed and could affect your flight, when the change is too recent or too temporary to be in the charts and the AIP. It carries time-critical information: a runway or taxiway closed, an ILS or VOR out of service, a change to a procedure, cranes near the approach, airspace restricted for an exercise, or a temporary danger area. Each one states what, where, and from when to when. In practice they are the backbone of the preflight briefing: dispatch pulls the NOTAMs for departure, destination, alternates and the route, and the crew reads them looking for anything that changes the plan, a longer taxi, a different approach, a raised minimum, an unusable alternate. The skill with NOTAMs is filtering: a busy airport can have pages of them, and the discipline is finding the two or three that actually matter for tonight\'s flight.',
    spokenVersion: [
      'Time-critical notice of changes affecting flight operations',
      'Covers closures, navaid outages, procedure changes, obstacles, airspace restrictions',
      'States what, where, and the valid times',
      'Checked in the preflight briefing for departure, destination, alternates and route',
      'The skill is filtering out the few that change your plan',
    ],
    mcq: {
      options: [
        'A weather forecast for the destination airport',
        'A monthly magazine about new aircraft types',
        'The flight plan filed with air traffic control',
        'A time-critical notice of changes such as closures, navaid outages and airspace restrictions, checked before flight',
      ],
      correctIndex: 3,
    },
    flashcardAnswer:
      'A NOTAM is a time-critical notice of temporary or recent changes affecting flight: runway closures, navaid outages, procedure changes, obstacles, airspace restrictions, each with a validity period. Crews check NOTAMs for departure, destination, alternates and route in the preflight briefing.',
  },
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
