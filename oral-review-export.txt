# Oral Interview Bank Review

Generated from `src/data/oralBank.js` (108 questions, 108 with written answers). Do not edit by hand; run `npm run oral-review` after changing the bank.

IMPORTANT: the answers below are unverified aviation theory written for study purposes. Some may be wrong or imprecise. Every answer must be checked by a qualified captain before it is trusted. Please mark anything incorrect, imprecise, or oddly phrased.

Each written entry shows the question, the concept explanation, the spoken answer skeleton, the multiple choice options with the marked answer, and the short flashcard answer. Entries marked PENDING have no answer content yet.

## Frequency 5: Almost certain (2 questions, 2 written)

Asked in 5 of 5 interview sets.

**1. What is drag and what are the types of drag?** `Aerodynamics` `oral-aero-01`

Drag is the aerodynamic force that resists the aircraft moving through the air. It acts backwards, along the relative airflow, and the engines have to spend thrust just to overcome it. Total drag splits into two families. Parasite drag is the price of simply pushing the airframe through the air, and it has three parts: form drag from the shape of the body, skin friction from air rubbing along every surface, and interference drag where airflows meet and disturb each other, like at the wing to fuselage junction. Parasite drag grows with the square of speed, so fly twice as fast and it roughly quadruples. Induced drag is different: it is the unavoidable byproduct of making lift. The pressure difference across the wing lets air spill around the tips, which creates vortices and downwash, and that tilts the lift force slightly backwards. The backwards component is induced drag. It is worst at low speed and high angle of attack, and it shrinks as you speed up. Plot both against speed and they cross at the minimum drag speed, where total drag is lowest.

Spoken answer skeleton:

- Force acting backwards along the airflow, resisting motion
- Two families: parasite and induced
- Parasite: form, skin friction, interference; grows with speed squared
- Induced: byproduct of lift, from tip vortices; worst at low speed
- The curves cross at minimum drag speed

Multiple choice:

- The force opposing lift, split into form drag and pressure drag
- The downward force on the tailplane, split into static and dynamic drag
- **The force opposing motion through the air, split into parasite and induced drag** <- marked answer
- The component of gravity along the flight path, split into profile and wave drag

Flashcard answer: Drag is the force resisting motion through the air. Parasite drag (form, skin friction, interference) rises with speed squared; induced drag comes from producing lift and falls as speed increases. Total drag is lowest where the two cross, the minimum drag speed.

**2. What is TAS?** `Instruments` `oral-inst-01`

True airspeed is the actual speed of the aircraft through the air mass it is flying in. The airspeed indicator does not measure it directly: it senses dynamic pressure through the pitot tube, and dynamic pressure depends on both speed and air density. At sea level on a standard day the two match, but as you climb the air gets thinner, so for the same true speed there is less dynamic pressure and the indicator under-reads. TAS is what you get after correcting indicated airspeed for that density change, which depends on altitude and temperature. The working rule of thumb is that TAS rises about 2 percent per 1000 ft for the same indicated airspeed. TAS matters because it is the speed you actually cover air with: add or subtract the wind and you get ground speed, which is what flight planning and navigation are built on.

Spoken answer skeleton:

- The real speed of the aircraft through the air mass
- ASI senses dynamic pressure, which drops with density, so it under-reads at altitude
- TAS is IAS corrected for density, meaning altitude and temperature
- Rule of thumb: about 2 percent higher per 1000 ft for the same IAS
- TAS plus or minus wind gives ground speed

Multiple choice:

- The speed shown directly on the airspeed indicator
- The speed of the aircraft over the ground
- **The actual speed of the aircraft through the air mass** <- marked answer
- Indicated airspeed corrected for instrument error only

Flashcard answer: TAS is the aircraft's real speed through the air mass: IAS corrected for air density. At altitude the air is thinner so TAS is higher than IAS, roughly 2 percent per 1000 ft. TAS with the wind applied gives ground speed.

## Frequency 4: Very common (5 questions, 5 written)

Asked in 4 of 5 interview sets.

**3. What are the four forces acting on an aircraft?** `Aerodynamics` `oral-aero-02`

Every aircraft in flight is being pulled and pushed by four forces at once. Lift acts upwards, perpendicular to the relative airflow, and is made mostly by the wings. Weight acts straight down towards the centre of the earth and comes from the mass of the aircraft, fuel and load. Thrust acts forwards from the engines. Drag acts backwards along the airflow, resisting motion. The useful way to think about them is in pairs: lift works against weight, thrust works against drag. In steady, level, unaccelerated flight the pairs are in balance, so lift equals weight and thrust equals drag, and the aircraft is in equilibrium. The moment one force changes, the balance breaks and the aircraft accelerates, climbs, descends or slows until a new balance is found. That is really all manoeuvring is: deliberately unbalancing these four forces.

Spoken answer skeleton:

- Lift, weight, thrust and drag
- Lift up, perpendicular to the airflow; weight straight down
- Thrust forwards; drag backwards
- Steady level flight: lift equals weight, thrust equals drag

Multiple choice:

- **Lift, weight, thrust and drag** <- marked answer
- Lift, gravity, power and inertia
- Thrust, drag, centrifugal force and torque
- Lift, thrust, side force and yaw

Flashcard answer: Lift, weight, thrust and drag. In steady level flight lift balances weight and thrust balances drag, so the aircraft is in equilibrium.

**4. What is lift and how is it generated?** `Aerodynamics` `oral-aero-03`

Lift is the aerodynamic force that supports the aircraft, acting perpendicular to the relative airflow. It is generated by the wing in two ways that are really two views of the same thing. First, pressure: the wing is cambered and meets the air at an angle of attack, so the airflow over the curved upper surface accelerates. Faster flow means lower pressure, so the pressure above the wing drops below the pressure underneath, and that difference pushes the wing up. Second, momentum: the wing deflects a huge mass of air downwards, and by action and reaction the air pushes the wing upwards. The amount of lift follows the lift formula, L equals half rho V squared S CL: it depends on air density, speed squared, wing area and the lift coefficient, which captures the wing shape and angle of attack. That is why the pilot controls lift mainly through speed and angle of attack.

Spoken answer skeleton:

- Force perpendicular to the relative airflow, supports the aircraft
- Air accelerates over the curved top, pressure drops above the wing
- Wing also deflects air down, reaction pushes the wing up
- Amount: L = half rho V squared S CL
- Pilot controls it through speed and angle of attack

Multiple choice:

- Higher pressure above the wing than below it
- Engine thrust directed under the wing
- **Lower pressure above the wing and air deflected downwards** <- marked answer
- Higher air density above the wing

Flashcard answer: Lift is the force perpendicular to the relative airflow. The wing accelerates air over its curved top so pressure drops above it, and it deflects air downwards, whose reaction pushes the wing up. L = half rho V squared S CL.

**5. What is a jetstream, how does it form, and where do you find it?** `Meteorology` `oral-met-01`

A jetstream is a narrow ribbon of very strong wind found near the tropopause: thousands of kilometres long but only a few hundred wide and a few kilometres deep, with core speeds of at least 60 knots and sometimes well over 150. It forms where two air masses with a big temperature difference sit next to each other. That horizontal temperature contrast creates a pressure gradient that grows stronger with height, so the wind keeps strengthening up to the tropopause, and the flow is turned to run west to east. The two main ones are the polar front jet, over the boundary between polar and warmer mid-latitude air at roughly 30 to 60 degrees latitude and around FL300, and the subtropical jet nearer 25 to 30 degrees and higher, around FL400. Both sit near breaks in the tropopause, are westerly in both hemispheres, and are strongest in winter when the temperature contrast is biggest. For us they matter twice: a well planned jet gives a serious tailwind, and the edges of the jet, especially the cold polar side, are prime areas for clear air turbulence.

Spoken answer skeleton:

- Narrow band of strong wind near the tropopause, core 60 kt or more
- Formed by a big horizontal temperature contrast between air masses
- Polar front jet around FL300, subtropical jet around FL400
- Westerly in both hemispheres, strongest in winter
- Found at tropopause breaks; edges give CAT, core gives tailwinds

Multiple choice:

- **A narrow band of very strong wind near tropopause breaks, formed by the temperature contrast between air masses** <- marked answer
- A wide layer of light wind at the surface, formed by daytime heating
- A vertical current inside a thunderstorm, formed by latent heat release
- A steady easterly wind found only over the equator

Flashcard answer: A narrow band of very strong westerly wind (60 kt plus at the core) near tropopause breaks, driven by the temperature contrast between air masses. Main ones are the polar front jet near FL300 and the subtropical jet near FL400; both are strongest in winter and their edges produce CAT.

**6. ILS: how does it work, what are its frequencies, what does it combine, and what are its errors?** `Navigation` `oral-nav-01`

The ILS is the standard precision approach aid: it combines lateral and vertical guidance to bring you down to the runway on a defined path. Lateral guidance comes from the localizer, an antenna past the far end of the runway transmitting on VHF between 108.10 and 111.95 MHz. Vertical guidance comes from the glideslope, an antenna beside the touchdown zone transmitting on UHF between about 329 and 335 MHz, giving a path of roughly 3 degrees. You never tune the glideslope yourself: it is frequency paired with the localizer, so selecting the localizer gives you both. Both beams work the same way: two overlapping lobes, one modulated at 90 Hz and one at 150 Hz, and the receiver compares the depth of modulation to tell you which side of the beam you are on. Range information comes from marker beacons or, more usually now, a paired DME. The errors to know: false glideslopes, which are reflection lobes at multiples of the real angle, around 6 and 9 degrees, which is why you intercept from below and cross check altitude against distance; and beam bending or scalloping, where vehicles, aircraft or terrain reflect the signal, which is why the ILS critical and sensitive areas are protected in low visibility operations.

Spoken answer skeleton:

- Precision approach: localizer for centreline plus glideslope for a 3 degree path
- Localizer VHF 108.10 to 111.95; glideslope UHF around 329 to 335, frequency paired
- Receiver compares 90 Hz and 150 Hz modulation to find beam centre
- Range from marker beacons or a paired DME
- Errors: false glideslopes at about 6 and 9 degrees, beam bending from reflections
- So intercept from below, cross check range against altitude, protect critical areas

Multiple choice:

- A single UHF beam giving distance and height above the runway
- **A VHF localizer (108.10 to 111.95 MHz) with a paired UHF glideslope giving centreline and a 3 degree path** <- marked answer
- A satellite based approach needing no ground equipment
- An NDB and a DME combined to give a curved approach path

Flashcard answer: A precision approach aid combining a VHF localizer (108.10 to 111.95 MHz) for centreline with a frequency paired UHF glideslope (about 329 to 335 MHz) for a roughly 3 degree path, plus markers or DME for range. Guidance comes from comparing 90 and 150 Hz modulations. Main errors: false glideslopes near 6 and 9 degrees, and beam bending from reflections, hence protected critical areas.

**7. What is ETOPS?** `General` `oral-gen-01`

ETOPS stands for Extended-range Twin-engine Operations; ICAO now calls the wider concept EDTO, extended diversion time operations. The background is simple: a twin that loses an engine has only one left, so historically twins were kept within 60 minutes single-engine flying time of an adequate airport. ETOPS is the approval that relaxes that rule. If the aircraft type is certified for it and the operator is approved, the aircraft may fly routes further away, up to its approved diversion time, quoted in minutes: ETOPS 120, ETOPS 180 and today well beyond that. The time means how far you may be from an adequate alternate, flown at the approved one engine inoperative speed in still air. In exchange there are stricter requirements: designated enroute alternates within the diversion time with suitable weather, extra fuel scenarios, and tighter maintenance rules, like not having the same engineer do the same task on both engines. It is what lets twins like the 787 or A350 fly long oceanic routes that used to need three or four engines.

Spoken answer skeleton:

- Extended range twin operations; ICAO now calls it EDTO
- Baseline rule: a twin stays within 60 minutes of an adequate airport
- ETOPS approval extends that to 120, 180 minutes or more
- Time is measured at the one engine inoperative speed in still air
- Needs enroute alternates, extra fuel planning and stricter maintenance

Multiple choice:

- A rule keeping twin engine aircraft within 60 NM of the coast at all times
- **Approval for twins to fly more than 60 minutes from an adequate alternate, up to an approved diversion time** <- marked answer
- The extra holding fuel carried on all oceanic crossings
- A certificate allowing flight without ATC contact over oceans

Flashcard answer: ETOPS (now EDTO) is the approval letting twin-engine aircraft fly more than 60 minutes from an adequate alternate, up to an approved diversion time such as 120 or 180 minutes at the one engine inoperative speed, with stricter alternate, fuel and maintenance requirements.

## Frequency 3: Common (10 questions, 10 written)

Asked in 3 of 5 interview sets.

**8. What is a stall?** `Aerodynamics` `oral-aero-04`

A stall is what happens when the wing is asked for more than the airflow can give. As angle of attack increases, lift increases, but only up to the critical angle of attack. Past that point the airflow can no longer follow the curved upper surface: it separates, becomes turbulent, lift drops sharply and drag rises. The essential idea, and the one interviewers listen for, is that a stall is about angle of attack, not about speed. The wing always stalls at the same critical angle, so you can stall at any airspeed and in any attitude if you pull hard enough. The published stall speed only tells you the speed at which you reach that angle in level 1g flight at a given weight; load the wing up more, by turning steeply or pulling, and the stall speed rises. The aircraft warns you first: airframe buffet from the separated flow, and on airliners the stick shaker before the real stall.

Spoken answer skeleton:

- Airflow separates when the wing passes its critical angle of attack
- Lift drops sharply, drag rises
- It is about angle of attack, not speed: possible at any speed or attitude
- Published stall speed is for level 1g flight; rises with weight and load factor
- Warnings first: buffet, then stick shaker

Multiple choice:

- An engine failure caused by disturbed airflow into the intake
- **A loss of lift when the wing exceeds its critical angle of attack and the airflow separates** <- marked answer
- A loss of lift that can only happen below the published stall speed
- A sudden roll caused by turbulence over one wing

Flashcard answer: A stall is airflow separation when the wing passes its critical angle of attack: lift falls sharply and drag rises. It depends on angle of attack, not speed, so it can happen at any speed; stall speed rises with weight and load factor.

**9. What is Mach number? Is it the same at high and low level?** `Aerodynamics` `oral-aero-05`

Mach number is your true airspeed divided by the local speed of sound. The key to the second half of the question is that the speed of sound depends only on air temperature: the colder the air, the slower sound travels. As you climb, the air gets colder, so the local speed of sound falls, which means the same TAS gives you a higher Mach number at altitude than it would low down. So no, it is not the same: Mach 0.8 at FL350 is a slower TAS than Mach 0.8 would be at sea level. At sea level in ISA conditions the speed of sound is about 661 knots, and it keeps falling until the tropopause, where the temperature stops dropping. This is also why we fly a climb on IAS at first and then switch to a constant Mach at the crossover altitude: it keeps us clear of the high speed limits as the local speed of sound comes down around us.

Spoken answer skeleton:

- Mach number = TAS divided by the local speed of sound
- Speed of sound depends only on temperature; colder means slower
- At altitude it is colder, so the same TAS gives a higher Mach
- About 661 kt at sea level in ISA, roughly, falling with height to the tropopause
- That is why we climb on IAS and change to Mach at crossover

Multiple choice:

- **TAS divided by the local speed of sound; not the same, because the speed of sound falls with temperature as you climb** <- marked answer
- IAS divided by ground speed; the same at every level
- The aircraft speed divided by 1000; it changes only with weight
- TAS divided by the local speed of sound; identical at all levels because the speed of sound never changes

Flashcard answer: Mach number is TAS divided by the local speed of sound. The speed of sound depends on temperature only, so in the colder air at altitude the same TAS gives a higher Mach number. At sea level in ISA it is about 661 kt.

**10. What are the types of flaps, how does each work, and what are the pros and cons?** `Aerodynamics` `oral-aero-06`

Flaps are trailing edge high lift devices. Their job is to increase the camber of the wing, and in some designs the area too, so the wing can produce enough lift at the low speeds we need for takeoff and landing. The main types, in rough order of effectiveness: a plain flap is simply the rear part of the wing hinged downwards. A split flap hinges down from the lower surface only, which adds lift but a lot of drag. A slotted flap opens a gap as it deploys, letting higher pressure air from below flow through and re-energize the airflow on top, delaying separation. A Fowler flap slides aft as well as down, so it adds wing area on top of camber; combined with slots it is the most effective, and that combination is what airliners carry. The trade is always the same: more lift at low speed, but more drag. So takeoff uses small settings, where you get mostly lift, and landing uses large settings, where the extra drag actually helps you fly a steady, slower approach with a better view over the nose.

Spoken answer skeleton:

- Trailing edge devices adding camber, and for Fowler also area
- Plain: simple hinge down. Split: lower surface only, lots of drag
- Slotted: a gap re-energizes the upper surface flow, delays separation
- Fowler: slides aft, adds area, most effective, what airliners use
- Trade: more low speed lift for more drag
- Small settings for takeoff, large settings for landing

Multiple choice:

- Leading edge, trailing edge and tip flaps, each reducing drag in cruise
- Krueger, slot and slat, each smoothing airflow over the tail
- Spoiler, aileron and trim tab, each raising the stall speed
- **Plain, split, slotted and Fowler, each raising lift by adding camber or area** <- marked answer

Flashcard answer: Main types: plain, split, slotted and Fowler. All add camber; Fowler also adds area by sliding aft, and slots re-energize the airflow. They give the lift needed at low speed at the cost of drag, so takeoff uses small settings and landing uses large ones.

**11. What are the types of slats, how do they work, and what is the difference between a flap and a slat?** `Aerodynamics` `oral-aero-07`

Slats are the leading edge high lift devices. When a slat runs forward and down, it opens a slot between itself and the wing. Higher pressure air from underneath accelerates through that gap and washes over the upper surface, re-energizing the boundary layer so the airflow stays attached at angles of attack that would otherwise stall the wing. In other words, a slat raises the critical angle of attack. The types worth naming: fixed slots, which are simply permanent gaps in the leading edge on some light aircraft; movable slats, the airliner solution, sealed in cruise and opened for takeoff and landing; and Krueger flaps, panels that fold out from under the leading edge, often used on the inboard wing. The difference from a flap comes down to position and purpose: a flap is at the trailing edge and adds camber and area, giving more lift at a given angle of attack, while a slat is at the leading edge and delays separation, letting you use a higher angle of attack before the stall. Airliners use both together to build the low speed envelope.

Spoken answer skeleton:

- Leading edge devices: fixed slots, movable slats, Krueger flaps
- Slat opens a gap; faster air through it keeps the upper flow attached
- Effect: raises the critical angle of attack, delays the stall
- Flap: trailing edge, adds camber and area, more lift at a given angle
- Slat: leading edge, lets you reach a higher angle before stalling

Multiple choice:

- **Leading edge devices such as movable slats and Krueger flaps that keep the airflow attached to a higher angle of attack; a flap is a trailing edge device that adds camber** <- marked answer
- Trailing edge devices that add wing area; a flap is a leading edge device that adds camber
- Tailplane devices that improve pitch control; a flap controls roll
- Panels that dump lift after touchdown; a flap adds drag in the climb

Flashcard answer: Slats are leading edge devices: movable slats, fixed slots and Krueger flaps. They open a slot that keeps the upper surface flow attached, raising the critical angle of attack. A flap is a trailing edge device adding camber and area; a slat delays the stall to a higher angle of attack.

**12. Name and define all the speeds on the aircraft.** `Performance` `oral-perf-01`

The cleanest way to hold these is in groups. Takeoff: V1 is the decision speed, the last moment a rejected takeoff can be started and still stop within the distance available, and equally the earliest the takeoff can be continued after an engine failure; VR is rotation, where you raise the nose; V2 is the takeoff safety speed, the climb speed that guarantees the required gradient with an engine out. Control minimums: VMCG is the minimum speed on the ground at which the rudder can keep you straight after an engine failure, VMCA the same in the air. Stall and landing: VS is the stall speed for the configuration, and VREF is the landing reference speed crossing the threshold, typically about 1.3 times the stall speed in the landing configuration, though the exact factor depends on the certification rules and the type. Structural and configuration limits: VMO and MMO are the maximum operating speed and Mach number, VFE the maximum with flaps extended, VLE the maximum with gear extended and VLO the maximum for actually operating the gear. There are more in the books, but these are the ones the interview wants.

Spoken answer skeleton:

- Takeoff trio: V1 decision, VR rotate, V2 takeoff safety speed
- Control minimums: VMCG on the ground, VMCA in the air
- Stall and landing: VS for the configuration, VREF about 1.3 times VS, roughly
- Limits: VMO and MMO maximum operating, VFE flaps, VLE and VLO gear

Multiple choice:

- V1 rotation speed, VR decision speed, V2 landing reference speed, VREF takeoff safety speed
- V1 maximum operating speed, VR stall speed, V2 gear limit speed, VREF flap limit speed
- **V1 decision speed, VR rotation speed, V2 takeoff safety speed, VREF landing reference speed** <- marked answer
- V1 climb speed, VR cruise speed, V2 descent speed, VREF taxi speed

Flashcard answer: Key speeds: V1 decision, VR rotate, V2 takeoff safety speed, VS stall, VREF landing reference (about 1.3 times VS), VMCG and VMCA minimum control speeds, VMO and MMO maximum operating, VFE flap limit, VLE and VLO gear limits.

**13. What are the takeoff segments?** `Performance` `oral-perf-02`

The takeoff segments describe the climb path the aircraft must be able to fly after an engine fails at the worst moment, from the 35 ft screen height at the end of the runway up to at least 1500 ft. For a twin the picture is: first segment, from the screen height until the gear is fully retracted, flown at V2 with takeoff thrust, where the requirement is simply a positive climb gradient. Second segment, from gear up to the acceleration altitude, which is at least 400 ft, still at V2 and takeoff thrust, with a minimum gross gradient of 2.4 percent for a twin; this is usually the most limiting segment and often sets the maximum takeoff weight. Third segment, a level acceleration at the acceleration altitude where the flaps are retracted on schedule and the aircraft accelerates to its final climb speed. Final segment, the climb from there to 1500 ft, now at maximum continuous thrust, with a minimum gradient of 1.2 percent. The numbers 2.4 and 1.2 percent are the certification minima for a twin; three and four engine aircraft have their own figures.

Spoken answer skeleton:

- The engine out climb path from 35 ft screen height to 1500 ft
- First: to gear up, at V2, takeoff thrust, positive gradient
- Second: gear up to at least 400 ft, 2.4 percent minimum for a twin, usually limiting
- Third: level acceleration, flaps retracted, reach final climb speed
- Final: climb at maximum continuous thrust, 1.2 percent, to 1500 ft

Multiple choice:

- **The engine out climb path from screen height to 1500 ft: gear retraction, second segment climb, level acceleration, then final segment** <- marked answer
- The runway distances used for the takeoff roll: TORA, TODA and ASDA
- The four thrust settings used between taxi and cruise
- The stages of a departure from pushback to top of climb

Flashcard answer: The one engine inoperative path from 35 ft to 1500 ft. First segment to gear up at V2; second segment to at least 400 ft at 2.4 percent minimum for a twin, usually the limiting one; third segment level acceleration and flap retraction; final segment at maximum continuous thrust, 1.2 percent, up to 1500 ft.

**14. What is a thunderstorm and what are its stages?** `Meteorology` `oral-met-02`

A thunderstorm is a cumulonimbus cloud producing lightning and thunder, and it needs three ingredients to get going: unstable air, enough moisture, and something to trigger the lifting, like surface heating, a front or terrain. A single cell then lives through three stages. In the cumulus stage the cloud is building: updrafts only, growing fast, no rain yet. The mature stage begins when precipitation starts to fall and drags air down with it, so updrafts and downdrafts exist side by side in the same cloud. This is the most dangerous stage: heavy rain, hail, lightning, severe turbulence, icing, and windshear or microbursts underneath. In the dissipating stage the downdrafts take over, cut off the storm's inflow of warm moist air, the anvil spreads out at the top and the cell collapses. A single cell lasts somewhere around an hour, roughly, but storms often form in multicell clusters or lines where new cells keep replacing old ones, which is why the storm as a whole can go on much longer.

Spoken answer skeleton:

- A CB with lightning; needs instability, moisture and a lifting trigger
- Cumulus stage: updrafts only, cloud building
- Mature stage: updrafts and downdrafts together, the dangerous one
- Hazards then: hail, severe turbulence, windshear, microbursts, lightning
- Dissipating stage: downdrafts dominate, anvil spreads, cell dies

Multiple choice:

- A stratus layer producing steady drizzle, with warm and cold stages
- **A cumulonimbus storm with lightning, growing through cumulus, mature and dissipating stages** <- marked answer
- A night time fog bank, with forming and clearing stages
- A standing wave cloud downwind of mountains, with lifting and sinking stages

Flashcard answer: A cumulonimbus producing lightning and thunder, built from instability, moisture and a trigger. Stages: cumulus (updrafts, building), mature (updrafts and downdrafts together, heaviest weather and windshear), dissipating (downdrafts and the anvil). The mature stage is the most hazardous.

**15. What is ISA, its parameters, and the lapse rates DALR, ELR, SALR?** `Meteorology` `oral-met-03`

ISA, the International Standard Atmosphere, is an agreed model of the atmosphere so that instruments, performance charts and pilots everywhere are talking about the same thing. Its sea level parameters: temperature 15 degrees C, pressure 1013.25 hPa, density 1.225 kilograms per cubic metre. In the model the temperature falls at 1.98 degrees per 1000 ft, in practice we say about 2, up to 36,090 ft, and above that it holds constant at minus 56.5 degrees. The lapse rates describe how real air behaves when a parcel of it is lifted. The DALR, dry adiabatic lapse rate, is 3 degrees per 1000 ft and applies to a parcel that is not saturated. The SALR, saturated adiabatic lapse rate, is lower, around 1.8 degrees per 1000 ft, because condensation releases latent heat that partly offsets the cooling; it is not a fixed number and varies with temperature. The ELR, environmental lapse rate, is not a rule at all: it is whatever the actual atmosphere is doing that day, measured by balloon. Comparing the ELR against the DALR and SALR is how we judge whether the air is stable or unstable.

Spoken answer skeleton:

- Standard model atmosphere: 15 C, 1013.25 hPa, 1.225 kg per cubic metre at sea level
- ISA temperature falls about 2 C per 1000 ft (1.98) up to 36,090 ft, then minus 56.5 constant
- DALR: 3 C per 1000 ft for an unsaturated parcel
- SALR: around 1.8, lower because condensation releases latent heat; it varies
- ELR: the actual measured rate that day; compare them to judge stability

Multiple choice:

- The average weather for each region, updated monthly
- A forecast model of upper winds issued every six hours
- **A standard atmosphere: 15 C and 1013.25 hPa at sea level, temperature falling about 2 C per 1000 ft up to 36,090 ft** <- marked answer
- The coldest recorded atmosphere, used for engine testing

Flashcard answer: ISA: sea level 15 C, 1013.25 hPa, density 1.225 kg per cubic metre, temperature falling 1.98 C (about 2) per 1000 ft to 36,090 ft, then constant at minus 56.5 C. DALR 3 C per 1000 ft, SALR around 1.8 and variable, ELR is whatever the real atmosphere measures that day.

**16. What is the tropopause and what happens there? What is its height at the equator and the poles?** `Meteorology` `oral-met-04`

The tropopause is the boundary between the troposphere, where we live and where nearly all weather happens, and the stratosphere above it. What defines it is temperature: through the troposphere temperature falls with height, and at the tropopause it stops falling, becoming constant or even rising slightly above. That makes the air above extremely stable, so the tropopause acts like a lid: convection, water vapour and weather are trapped underneath it, which is why CB tops flatten into anvils when they reach it. Its height varies with latitude and season: over the poles it sits at roughly 8 km, around 25,000 ft, while over the equator it is much higher, roughly 16 to 18 km, well above 50,000 ft, all approximate figures. Counter-intuitively the high equatorial tropopause is also the colder one, because the temperature keeps falling all the way up to it. The tropopause does not slope smoothly from equator to pole: it steps down in breaks, and those breaks are exactly where the jetstreams sit and where CAT is common.

Spoken answer skeleton:

- Boundary between troposphere and stratosphere
- Temperature stops falling with height there; air above is very stable
- Acts as a lid: weather and convection trapped below, CB anvils flatten on it
- Height roughly 8 km at the poles, 16 to 18 km at the equator, approximately
- Equatorial tropopause is higher and colder; jets and CAT sit at its breaks

Multiple choice:

- **The boundary where temperature stops falling with height, higher over the equator than over the poles** <- marked answer
- The layer of maximum weather, lowest over the equator
- The bottom of the troposphere, at the same height everywhere
- The level where pressure stops changing with height

Flashcard answer: The lid of the troposphere: the level where temperature stops falling with height, trapping weather and convection below. Roughly 8 km high at the poles and 16 to 18 km at the equator, and the equatorial one is both higher and colder. Jetstreams and CAT live near its breaks.

**17. What is CAT, what causes it, and where do you find it?** `Meteorology` `oral-met-05`

CAT is clear air turbulence: turbulence at high level in air with no cloud in it, which is what makes it nasty, because there is nothing to see out the window and nothing for the weather radar to paint. The cause is windshear: layers of air sliding past each other at different speeds or directions, and where the shear is strong enough the smooth flow breaks down into turbulent eddies. The classic place to find it is around the jetstream, since a jet is by definition a huge speed difference packed into a small space. It is worst near the tropopause on the edges of the jet, and the cold, polar side of the core has the reputation for the roughest air. You also find CAT in mountain waves, well downwind and far above the terrain that made them. Because you cannot detect it onboard, the defences are planning and reports: the significant weather charts, forecasts, and pilot reports from aircraft ahead, plus keeping the seatbelt sign in mind, and if you hit it, a change of level or route.

Spoken answer skeleton:

- Turbulence in clear air at high level; invisible to eye and radar
- Caused by windshear between layers moving at different speeds
- Classic location: jetstream edges near the tropopause, worst on the cold polar side
- Also in mountain waves, far from the terrain that made them
- Defences: SIGWX charts, forecasts, pilot reports, seatbelts, change level or route

Multiple choice:

- Turbulence inside a thunderstorm caused by updrafts and downdrafts
- Low level turbulence from surface heating on a hot afternoon
- Vibration caused by ice building on the wings
- **High level turbulence in cloud free air, caused by windshear around jetstreams and in mountain waves** <- marked answer

Flashcard answer: CAT is turbulence in clear air at high altitude, caused by windshear, most often at jetstream edges near the tropopause (worst on the cold polar side) and in mountain waves. Radar cannot see it, so you rely on forecasts and pilot reports.

## Frequency 2: Occasional (28 questions, 28 written)

Asked in 2 of 5 interview sets.

**18. What is the lift formula, what is CL, and what can you change in it?** `Aerodynamics` `oral-aero-08`

The lift formula is L equals half rho V squared S CL. Take it term by term: rho is air density, V is the true airspeed through the air, S is the wing area, and CL is the lift coefficient. CL is the interesting one: it is a dimensionless number that bundles up everything about how well the wing is working, mainly its shape and its angle of attack. Increase the angle of attack and CL rises, up to the critical angle where the wing stalls; deploy flaps or slats and you shift the whole CL curve so more lift is available at any given angle. Now, what can the pilot actually change? Density is set by altitude and temperature, so not directly. Wing area is fixed, unless Fowler flaps extend it. That leaves the two working levers: speed, which counts twice because it is squared, and CL, through angle of attack and the high lift devices. Flying is essentially trading those two against each other to keep lift equal to weight.

Spoken answer skeleton:

- L = half rho V squared S CL
- Rho density, V true airspeed, S wing area, CL lift coefficient
- CL bundles wing shape and angle of attack; flaps and slats shift its curve
- Pilot really controls two things: speed, squared, and CL
- Flying level is trading speed against angle of attack to keep lift equal to weight

Multiple choice:

- **L equals half rho V squared S CL; CL is the lift coefficient from wing shape and angle of attack; the pilot mainly changes speed and CL** <- marked answer
- L equals rho V S CL; CL is a fixed constant for every aircraft; the pilot can only change the weight
- L equals half rho V squared S CL; CL is the air density factor; the pilot mainly changes the wing area
- L equals thrust minus drag; CL is the climb limit; the pilot changes it with engine power

Flashcard answer: L = half rho V squared S CL. CL is the dimensionless lift coefficient set by wing shape and angle of attack, shifted by flaps and slats. In practice the pilot controls lift through speed (squared) and CL; density and area are essentially fixed.

**19. What is angle of attack?** `Aerodynamics` `oral-aero-09`

Angle of attack is the angle between the wing's chord line, the straight line from leading edge to trailing edge, and the relative airflow, the direction the air is actually meeting the wing from. The important discipline is keeping it separate from pitch attitude. Attitude is where the nose points relative to the horizon; angle of attack is how the wing meets the air, and the two can be very different. In a steep climb at low speed the flight path and the airflow tilt with you, and in a descent an aircraft can have the nose below the horizon yet a high angle of attack if it is sinking fast. Angle of attack is the single variable that sets the lift coefficient: raise it and CL rises, until the critical angle where the flow separates and the wing stalls. That is why it is the quantity that actually matters for the stall, not speed and not attitude.

Spoken answer skeleton:

- Angle between the chord line and the relative airflow
- Not the same as pitch attitude, which is nose against the horizon
- Sets the lift coefficient: more angle, more CL
- Up to the critical angle, where the wing stalls

Multiple choice:

- The angle between the nose and the horizon
- **The angle between the chord line and the relative airflow** <- marked answer
- The angle between the wing and the fuselage
- The angle of the flight path below the horizontal

Flashcard answer: The angle between the wing chord line and the relative airflow. It is not pitch attitude. It controls the lift coefficient, and past the critical angle of attack the wing stalls, at any speed.

**20. What is induced drag and how do you reduce it?** `Aerodynamics` `oral-aero-10`

Induced drag is the drag you pay for making lift. The wing works by keeping pressure lower on top than underneath, and at the wingtips that difference leaks: air curls around the tip from the high pressure side to the low, rolling up into the wingtip vortices. Those vortices drive downwash behind the wing, which tilts the local airflow downward, and since lift stays perpendicular to the airflow, the lift vector leans slightly backwards. That rearward lean is induced drag. It is worst exactly when the wing is working hardest for its speed: slow flight, high angle of attack, high weight, tight turns; it fades as speed rises. Reducing it: fly faster where you have the choice, keep weight down, and in design terms use a high aspect ratio wing, long and slender like a glider's, and fit winglets, which weaken the tip leak. This ties straight back to the drag picture: induced falling with speed, parasite rising, minimum drag where they cross.

Spoken answer skeleton:

- The drag that comes from producing lift
- Pressure leaks around the wingtips, forming vortices and downwash
- Downwash tilts the lift vector back; that rearward lean is the drag
- Worst slow, heavy and at high angle of attack; fades with speed
- Reduce it: more speed, less weight, high aspect ratio, winglets

Multiple choice:

- Drag from skin friction over the wing, reduced by polishing the surface
- Drag from the landing gear, reduced by retracting it
- **Drag created as a byproduct of lift, from tip vortices and downwash, reduced by speed, aspect ratio and winglets** <- marked answer
- Drag from shockwaves at high Mach, reduced by slowing down

Flashcard answer: Induced drag is the byproduct of lift: air leaks around the wingtips into vortices, the downwash tilts lift rearwards, and that rearward component is drag. Worst at low speed and high angle of attack. Reduced by flying faster, lower weight, high aspect ratio wings and winglets.

**21. How do you recover from a stall?** `Aerodynamics` `oral-aero-11`

Since a stall is the wing sitting past its critical angle of attack, the recovery has one non-negotiable first step: reduce the angle of attack. Push the nose down, or at least release the back pressure, until the wing is flying again. Everything else is secondary to that. Then roll the wings level with coordinated use of the controls, and add thrust as needed to rebuild energy, being aware that on aircraft with engines slung under the wing, a big handful of thrust pitches the nose up, which works against the recovery, so pitch control comes first and thrust follows. Once the buffet stops and airspeed is building, ease out of the descent gently. Pull too hard, too early, and you put the wing straight back past the critical angle: that is the secondary stall, and it is the classic recovery error. The modern training emphasis is exactly this order: angle of attack first, thrust second, altitude last.

Spoken answer skeleton:

- First and always: reduce the angle of attack, push or release back pressure
- Roll wings level with coordinated controls
- Thrust as required, remembering underwing engines pitch the nose up
- Let speed build, then ease out of the descent gently
- Pulling too early causes a secondary stall

Multiple choice:

- Pull back firmly to stop the descent and add full power
- **Reduce the angle of attack first, roll wings level, add thrust as required, then recover gently from the descent** <- marked answer
- Extend the speedbrakes and hold the attitude until the buffet stops
- Turn towards the nearest airport and lower the landing gear

Flashcard answer: Reduce the angle of attack first, by pushing or releasing back pressure, roll wings level, add thrust as required (underwing engines pitch up, so pitch first), then ease out of the descent gently to avoid a secondary stall.

**22. What are wingtip vortices and how do winglets help?** `Aerodynamics` `oral-aero-12`

Any wing making lift has higher pressure below than above, and at the tips that difference has an open edge to escape around. Air spills from underneath, curls around the tip and rolls up into two counter-rotating spirals trailing behind the aircraft: the wingtip vortices. They matter twice. Aerodynamically, they are the mechanism behind induced drag: the spillage feeds downwash, tilts the lift vector back, and costs fuel. Operationally, they are wake turbulence for whoever flies behind, strongest when the generating aircraft is heavy, slow and clean, because that is when the wing is working hardest. Winglets attack the first problem. By standing a surface at the tip, they act as a barrier that weakens the spillage and break up how the vortex forms, and their own aerodynamic force even recovers a little energy from the swirling flow. Weaker vortices mean less downwash, so less induced drag and measurably better fuel burn, most valuable on long sectors.

Spoken answer skeleton:

- High pressure under the wing spills around the tips
- Rolls up into two counter-rotating trailing vortices
- They drive induced drag, and they are the wake turbulence hazard
- Strongest when heavy, slow and clean
- Winglets weaken the spillage, cutting induced drag and fuel burn

Multiple choice:

- **Swirls of air where high pressure spills around the tips; winglets weaken them and so cut induced drag** <- marked answer
- Vibrations of the wing structure; winglets stiffen the wing to stop them
- Currents of hot engine exhaust; winglets deflect them away from the tail
- Shockwaves at the wingtip; winglets stop the airflow going supersonic

Flashcard answer: Wingtip vortices are the spirals formed as high pressure air spills around the tips of a lifting wing; they cause induced drag and wake turbulence, and are strongest heavy, slow and clean. Winglets act as a barrier that weakens the spillage, reducing induced drag and fuel burn.

**23. What is a vortex generator and what does it do?** `Aerodynamics` `oral-aero-13`

A vortex generator is one of those small metal vanes you see standing up in rows on the wing or tail, each only a few centimetres tall, set at an angle to the flow. Its job is boundary layer maintenance. The boundary layer, the thin layer of air slowed by friction against the surface, is the part of the flow that separates first when the going gets hard, near the stall or around shockwaves at high Mach. Each vane deliberately sheds a small, tidy vortex that stirs faster air from just outside the boundary layer down into it, re-energizing it so it stays attached further along the surface and to higher angles of attack. In practice they delay separation, keep ailerons and other controls effective at low speed, and tame shock-induced separation on transonic wings. The price is a tiny amount of extra parasite drag, which is why they are a cheap, common fix.

Spoken answer skeleton:

- Small vanes on the surface, set at an angle to the airflow
- Each sheds a tiny vortex that stirs fast air into the boundary layer
- Re-energized boundary layer stays attached longer
- Delays separation near the stall and around shockwaves
- Keeps controls effective; costs a little parasite drag

Multiple choice:

- A device that creates wingtip vortices to increase lift
- A generator that powers the instruments from the airflow
- A fairing that smooths the junction between wing and fuselage
- **A small vane that mixes faster air into the boundary layer, delaying airflow separation** <- marked answer

Flashcard answer: A small vane that sheds a controlled vortex, mixing faster air into the boundary layer to keep it attached longer. It delays separation near the stall and around shockwaves and keeps controls effective, at the cost of slight parasite drag.

**24. What is coffin corner?** `Aerodynamics` `oral-aero-14`

Coffin corner is the tight spot at the top of the flight envelope where the low speed and high speed limits close in on each other. As you climb, two things happen at once. The air gets thinner, so the true airspeed at which the wing reaches the stall, the low speed buffet, keeps rising. Meanwhile the air gets colder, the local speed of sound falls, and with it the true airspeed at which you hit the high speed limit, the Mach buffet near MMO. One limit climbing up, the other coming down: the corridor between them narrows with altitude. At the aerodynamic ceiling they meet: slow down and you get stall buffet, speed up and you get Mach buffet, and there is nowhere left to go. Airlines never operate at that point; cruise levels are chosen to keep a buffet margin, typically enough to handle a load factor from turbulence or a turn, because manoeuvring and weight both push the stall side of the corner up towards you.

Spoken answer skeleton:

- The narrow corridor between low speed and high speed buffet at altitude
- Climbing: stall TAS rises as air thins
- Same time: Mach limit TAS falls as air gets colder
- At the aerodynamic ceiling the two meet: buffet either way
- We cruise with a buffet margin for turbulence and turns

Multiple choice:

- **The point at high altitude where the stall buffet and Mach buffet speeds converge, leaving almost no speed margin** <- marked answer
- The corner of the runway where crosswind is strongest during takeoff
- The lowest altitude at which the autopilot can be engaged
- The part of the descent where the cabin altitude catches up with the aircraft

Flashcard answer: Coffin corner is the region near the aerodynamic ceiling where the rising stall speed and the falling Mach buffet speed converge: slower means stall buffet, faster means Mach buffet. Cruise levels are chosen to keep a buffet margin clear of it.

**25. What are spoilers used for?** `Aerodynamics` `oral-aero-15`

Spoilers are the panels hinged along the upper surface of the wing that swing up into the airflow. The name says exactly what they do: they spoil the lift the wing is making at that spot, and add drag while they are at it. That one trick gets used three ways. As roll spoilers, the panels on one wing rise a little to help the ailerons: killing lift on the downgoing wing rolls the aircraft crisply, especially at high speed where big aileron deflections are undesirable. As speedbrakes in flight, panels on both wings rise together, adding drag and dumping lift so you can descend faster or slow down without gaining speed. And as ground spoilers or lift dumpers after touchdown, all panels deploy fully, killing the remaining lift so the aircraft's weight settles onto the wheels, which is what makes the brakes actually bite, and shortening the landing roll.

Spoken answer skeleton:

- Upper surface panels that dump lift and add drag
- Roll spoilers: assist ailerons by killing lift on the downgoing wing
- Speedbrakes: both wings together, steeper descent or deceleration
- Ground spoilers: full deployment after touchdown
- Puts weight on the wheels so the brakes work

Multiple choice:

- Increasing lift for takeoff and landing
- **Assisting roll, acting as speedbrakes in flight, and dumping lift after touchdown** <- marked answer
- Trimming the aircraft in pitch during cruise
- Cooling the brakes during a long taxi

Flashcard answer: Spoilers are upper wing panels that dump lift and add drag. Three jobs: roll spoilers assisting the ailerons, speedbrakes for descent and deceleration, and ground spoilers after touchdown that put the weight on the wheels so the brakes bite.

**26. What is the local speed of sound, what affects it, and what is it at sea level?** `Aerodynamics` `oral-aero-16`

The local speed of sound is the speed at which pressure disturbances, sound waves, travel through the air you are flying in right now. It matters to us because it is the yardstick for Mach number: Mach is your TAS divided by this local value. The single thing that sets it is air temperature: warmer air carries sound faster, colder air slower. Pressure and density on their own do not change it, which surprises people, because their effects cancel each other out. At sea level in ISA conditions, plus 15 degrees, it is about 661 knots. Climb into colder air and it falls with the temperature, until the tropopause, where the temperature stops falling and the speed of sound steadies too. That falling yardstick is the whole story behind Mach effects at altitude: the same TAS measures as a higher Mach number up high simply because the speed of sound around you has come down.

Spoken answer skeleton:

- The speed pressure waves travel in the air around you
- Depends on temperature only: warmer faster, colder slower
- About 661 kt at sea level in ISA, roughly
- Falls as you climb until the tropopause, then steadies
- It is the yardstick for Mach number: TAS divided by it

Multiple choice:

- The speed of the jetstream at cruise level; it depends on pressure; about 100 kt at sea level
- The maximum speed of the aircraft; it depends on weight; about 350 kt at sea level
- **The speed sound waves travel in the surrounding air; it depends on temperature; about 661 kt at sea level in ISA** <- marked answer
- The speed of the wind at the surface; it depends on density; about 15 kt at sea level

Flashcard answer: The speed at which sound travels in the surrounding air, set by temperature alone: colder means slower. About 661 kt at sea level in ISA, falling with height to the tropopause. It is the denominator of Mach number.

**27. What are the primary flight controls?** `Aerodynamics` `oral-aero-17`

The primary flight controls are the surfaces that rotate the aircraft about its three axes, and there are three of them. The ailerons, out near the wingtips, move opposite to each other and roll the aircraft about its longitudinal axis; that is how you bank into a turn. The elevator, on the tailplane, pitches the aircraft about its lateral axis, controlling attitude and hence angle of attack. The rudder, on the fin, yaws the aircraft about its vertical axis, used for coordination, crosswinds and engine-out control. They are called primary because they are essential to controlling the flight path, as opposed to the secondary controls: flaps, slats, spoilers and trim, which change the wing's performance or relieve control loads rather than steer the aircraft. On big jets the surfaces are moved hydraulically or by fly by wire, and roll is often shared between ailerons and roll spoilers, but the three-axis principle is the same as in the smallest trainer.

Spoken answer skeleton:

- Ailerons: roll, about the longitudinal axis
- Elevator: pitch, about the lateral axis, sets attitude and angle of attack
- Rudder: yaw, about the vertical axis, coordination and engine out
- Primary because they steer the flight path
- Secondary controls are flaps, slats, spoilers and trim

Multiple choice:

- Flaps, slats and spoilers
- **Ailerons for roll, elevator for pitch and rudder for yaw** <- marked answer
- Throttles, brakes and nosewheel steering
- Trim tabs, servo tabs and balance tabs

Flashcard answer: Ailerons (roll, longitudinal axis), elevator (pitch, lateral axis) and rudder (yaw, vertical axis). They steer the flight path; flaps, slats, spoilers and trim are the secondary controls.

**28. Maximum endurance versus maximum range: what is the difference?** `Performance` `oral-perf-03`

They answer two different questions. Maximum endurance is about time: how long can I stay airborne on the fuel I have, never mind where I go. You get it by flying at the speed with the lowest fuel flow per hour, which for a jet is close to the minimum drag speed. It is the holding answer: when ATC parks you in a stack, you fly close to this. Maximum range is about distance: how far can I get on the fuel? Now the question is fuel burned per mile, not per hour, and it pays to fly somewhat faster than the endurance speed, because the extra ground covered outweighs the extra burn; for a jet the best range speed sits noticeably above minimum drag speed. Range also cares about wind where endurance does not: a headwind cuts miles per kilogram of fuel, so you fly a little faster into wind and it can pay to change level, while a holding pattern burns the same either way.

Spoken answer skeleton:

- Endurance: maximum time airborne; range: maximum distance
- Endurance speed: lowest fuel flow per hour, near minimum drag speed for a jet
- Range speed: best fuel per mile, somewhat faster than that
- Wind matters for range, not endurance: speed up a little into a headwind
- Holding uses endurance; diversion planning uses range

Multiple choice:

- Endurance is flying as fast as possible; range is flying as slowly as possible
- **Endurance is maximum time airborne, flown near minimum fuel flow; range is maximum distance, flown somewhat faster for the best fuel per mile** <- marked answer
- They are the same thing measured in different units
- Endurance applies only to jets and range only to propeller aircraft

Flashcard answer: Maximum endurance is the longest time airborne, flown at the lowest fuel flow, near minimum drag speed for a jet; used for holding. Maximum range is the greatest distance, flown somewhat faster for the best fuel per mile, and adjusted for wind.

**29. What is screen height? Does it change?** `Performance` `oral-perf-04`

Screen height is an imaginary screen standing at the end of the takeoff distance, and the certification rules say the aircraft must cross it by the time the takeoff distance available runs out, even with an engine failed at the worst moment. For a jet transport the screen is 35 ft on a dry runway. And yes, it changes: on a wet runway the rules allow a reduced screen height of 15 ft. The logic of the trade is worth understanding: on a wet runway, stopping distances stretch, so V1 is reduced to keep a rejected takeoff safe; a lower V1 means the continue case starts from a lower speed, and rather than demand more runway the rules accept clearing a lower screen. The same idea appears at the other end of the flight: the landing distance is measured from crossing the threshold at 50 ft. It also marks where the takeoff distance ends and the takeoff flight path, the climb segments, begins.

Spoken answer skeleton:

- Imaginary height to clear by the end of the takeoff distance, engine out
- 35 ft for a jet on a dry runway
- Yes it changes: reduced to 15 ft on a wet runway
- Wet: lower V1 for stopping, so a lower screen is accepted
- Marks the start of the takeoff flight path segments

Multiple choice:

- The minimum cloud base for takeoff; it changes with the time of day
- The height of the airport fence; it never changes
- **The height the aircraft must clear at the end of the takeoff distance: 35 ft dry, reduced to 15 ft wet for a jet** <- marked answer
- The height at which the flight directors engage; it changes with aircraft weight

Flashcard answer: Screen height is the height the aircraft must reach by the end of the takeoff distance available, even engine out: 35 ft on a dry runway for a jet, reduced to 15 ft on a wet one, where a lower V1 protects the stopping case.

**30. Does TAS change with altitude? What happens during the climb?** `Instruments` `oral-inst-02`

Yes. The airspeed indicator works on dynamic pressure, and dynamic pressure depends on density as well as speed. Climb at a constant indicated airspeed and the air keeps getting thinner, so to hold the same dynamic pressure the aircraft must actually move faster through the air: TAS rises steadily, by roughly 2 percent per 1000 ft as a rule of thumb. That is the first part of the climb. Higher up, at the crossover altitude, we stop flying a constant IAS and hold a constant Mach number instead, to stay clear of the high speed limits. From there the picture flips: the air is still getting colder, the local speed of sound is falling, and a constant Mach of a falling yardstick means TAS actually decreases gently through the rest of the climb, until the tropopause, where the temperature steadies and so does TAS. So in one climb profile you see TAS rise on the IAS segment and ease back slightly on the Mach segment.

Spoken answer skeleton:

- Yes: same IAS in thinner air means a higher TAS
- Roughly 2 percent more TAS per 1000 ft, as a rule of thumb
- Climb is flown constant IAS first, constant Mach after crossover
- On the Mach segment TAS falls gently as the air cools
- Above the tropopause temperature steadies, so TAS does too

Multiple choice:

- No, TAS is fixed by the throttle setting alone
- **Yes: at constant IAS, TAS rises as the air thins with altitude, then falls gently on the constant Mach segment as the air cools** <- marked answer
- Yes: TAS always falls as you climb because drag increases
- No, TAS and IAS are always equal above 10,000 ft

Flashcard answer: Yes. Climbing at constant IAS, the thinning air means TAS rises, roughly 2 percent per 1000 ft. After crossover, holding constant Mach in cooling air, TAS falls gently until the tropopause, where it steadies.

**31. Two aircraft at the same IAS, one at FL200 and one at FL350: which is faster and why?** `Instruments` `oral-inst-03`

The one at FL350 is faster, meaning it has the higher true airspeed. The reasoning comes straight from how the airspeed indicator works: it senses dynamic pressure, which is a product of air density and speed. Both aircraft are reading the same indicated airspeed, so both are feeling the same dynamic pressure. But at FL350 the air is far thinner than at FL200, so to generate that same pressure the higher aircraft must be pushing through the air considerably faster. Same IAS, less density, therefore more TAS. Using the rough 2 percent per 1000 ft rule of thumb, 15,000 ft of difference is on the order of a 30 percent gap in TAS, so this is not a small effect; it is exactly why flying high is efficient. Over the ground, of course, wind gets the final say, but through the air the FL350 aircraft is unambiguously the faster one.

Spoken answer skeleton:

- The one at FL350 has the higher TAS
- Same IAS means the same dynamic pressure at both levels
- Air at FL350 is much thinner
- So it must move faster through the air for the same pressure
- By the rough 2 percent per 1000 ft rule, a large TAS gap

Multiple choice:

- The one at FL200, because the air is denser and gives more lift
- Both have the same TAS because their IAS is the same
- **The one at FL350, because the thinner air means a higher TAS is needed for the same indicated airspeed** <- marked answer
- Impossible to say without knowing the wind

Flashcard answer: The aircraft at FL350. The same IAS means the same dynamic pressure, and in the much thinner air up there the aircraft must move faster through the air to create it, so its TAS is far higher.

**32. IAS, CAS, EAS: define each.** `Instruments` `oral-inst-04`

These are steps in a correction chain, and the order is easy to hold onto: I, C, E, then T. IAS, indicated airspeed, is simply what the airspeed indicator shows, straight from the dynamic pressure the pitot static system delivers, errors and all. CAS, calibrated airspeed, is IAS corrected for instrument error and position error, the error from where the pitot and static sources sit on the airframe and how the local airflow distorts what they sense; the correction varies with configuration and angle of attack. EAS, equivalent airspeed, is CAS corrected for compressibility: at high speed the air piles up and compresses slightly in the pitot, making the reading a little optimistic, and EAS takes that out. It is the aerodynamicist's honest speed. The last step, already covered under TAS, is correcting EAS for density to get the true speed through the air. At low speed and low level the four are close together; fast and high, the gaps grow.

Spoken answer skeleton:

- A correction chain: I, C, E, then T
- IAS: what the indicator shows, from dynamic pressure
- CAS: IAS corrected for instrument and position error
- EAS: CAS corrected for compressibility at high speed
- EAS corrected for density gives TAS

Multiple choice:

- **IAS is what the indicator shows; CAS corrects it for instrument and position error; EAS further corrects for compressibility** <- marked answer
- IAS is the true speed; CAS is the ground speed; EAS is the wind corrected speed
- IAS is corrected for density; CAS for temperature; EAS for wind
- They are three names for the same reading on different aircraft types

Flashcard answer: IAS: the raw indicator reading from dynamic pressure. CAS: IAS corrected for instrument and position error. EAS: CAS corrected for compressibility. Correct EAS for density and you have TAS.

**33. What is ground speed?** `Instruments` `oral-inst-05`

Ground speed is the speed of the aircraft over the surface of the earth, and it is the speed that navigation actually runs on: it decides your timings, your fuel over a route and your estimated arrival. The relationship to remember is that ground speed is true airspeed with the wind applied. The aircraft moves through the air mass at its TAS, but the air mass itself is moving over the ground, so a tailwind adds to TAS and a headwind subtracts, and a crosswind both costs a little speed and pushes you sideways, which is why we lay off drift. The clean contrast to hold: IAS is what the wing and the handling care about, TAS is your real speed through the air, and ground speed is what the flight plan and the passengers care about. Today it comes straight from the IRS and GPS, but the relationship TAS plus or minus wind is still the arithmetic underneath.

Spoken answer skeleton:

- Speed over the ground, the one navigation runs on
- Ground speed = TAS with the wind applied
- Tailwind adds, headwind subtracts, crosswind gives drift
- IAS for handling, TAS through the air, GS for timings and fuel
- Comes from IRS and GPS today, same arithmetic underneath

Multiple choice:

- The speed shown on the airspeed indicator during taxi
- **The aircraft speed over the surface: TAS with the wind added or subtracted** <- marked answer
- The speed of the air flowing over the wing
- The maximum speed permitted below 10,000 ft

Flashcard answer: Ground speed is the aircraft's speed over the earth's surface: TAS with the wind applied, tailwind adding and headwind subtracting. It drives timings, fuel and ETAs.

**34. What happens if the pitot is blocked, in the climb and the descent? What happens to the VSI?** `Instruments` `oral-inst-06`

Take it from what the instrument is doing. The airspeed indicator measures the difference between pitot pressure and static pressure. If the pitot tube blocks completely, including its drain hole, the pressure trapped inside the pitot line is frozen at whatever it was, while the static side keeps working. Now the ASI is comparing a fixed trapped pressure against a static pressure that changes with altitude, which means it has stopped being an airspeed indicator and has started behaving like an altimeter. In a climb, static pressure falls, the difference across the capsule grows, and the ASI over-reads: it shows the speed increasing when it may not be. That is the dangerous direction, because the instinctive response, pitching up or pulling power back to control the apparent overspeed, pushes you towards the stall. In a descent the opposite: static rises, the difference shrinks, and it under-reads. The VSI is untouched, because it works entirely from the static source; the same goes for the altimeter. Unreliable airspeed drills exist exactly for this: fly a known pitch and thrust, and sort the instruments out from there.

Spoken answer skeleton:

- Blocked pitot traps a fixed pressure; static keeps working
- ASI then behaves like an altimeter
- Climb: over-reads; the dangerous case, invites pulling towards the stall
- Descent: under-reads
- VSI and altimeter unaffected: they use static only
- Response: unreliable airspeed drill, known pitch and thrust

Multiple choice:

- The ASI reads zero at all times and the VSI fails
- **The ASI over-reads in the climb and under-reads in the descent, behaving like an altimeter; the VSI, on static pressure, is unaffected** <- marked answer
- The ASI under-reads in the climb and over-reads in the descent; the VSI freezes
- Nothing changes, because the static port takes over the pitot's job

Flashcard answer: A fully blocked pitot traps its pressure, so the ASI acts like an altimeter: over-reading in the climb (dangerous, invites a pull towards the stall) and under-reading in the descent. The VSI and altimeter run on static pressure and are unaffected. Fly pitch and thrust.

**35. How do clouds form?** `Meteorology` `oral-met-06`

A cloud is what you get when moist air is cooled to its dew point, the temperature at which it can no longer hold its water as invisible vapour. The vapour condenses into droplets on tiny particles in the air, condensation nuclei like dust and salt, and millions of those droplets together are the cloud. The cooling almost always comes from lifting: raise a parcel of air and it expands into the lower pressure and cools adiabatically, at the DALR while dry and the SALR once saturated. What does the lifting is the useful part of the answer: convection from a heated surface, air forced up over terrain, air climbing over a frontal surface, or air converging into a low and having nowhere to go but up. The character of the cloud then follows from stability: unstable air keeps rising and builds cumuliform cloud, stable air spreads into layered stratiform sheets. Cooling without lifting, by radiation on a clear night or advection over a cold surface, gives cloud at the surface, which is fog.

Spoken answer skeleton:

- Moist air cooled to its dew point; vapour condenses on nuclei
- Cooling is usually adiabatic, from lifting
- Lifting: convection, terrain, fronts, convergence
- Unstable air gives cumuliform, stable air gives stratiform
- Cooling at the surface without lifting gives fog

Multiple choice:

- Air is heated until its moisture evaporates into a visible cloud
- **Moist air is lifted and cooled to its dew point, and the vapour condenses on nuclei into droplets** <- marked answer
- Wind mixes smoke and dust into visible layers
- Rain falling from high level freezes into a cloud layer

Flashcard answer: Moist air is cooled, usually by being lifted and expanding, until it reaches its dew point; the vapour then condenses on condensation nuclei into droplets. Lifting comes from convection, terrain, fronts or convergence; stability decides whether the result is cumuliform or stratiform.

**36. How are clouds classified and what are the families?** `Meteorology` `oral-met-07`

Clouds are classified two ways at once: by the height of their base and by their form. Height gives the families. High cloud, the cirrus family, is made of ice crystals: cirrus, cirrocumulus and cirrostratus. Medium cloud carries the prefix alto: altocumulus and altostratus. Low cloud is stratus, stratocumulus, and nimbostratus, the thick rain-bearer that in practice spans low and medium levels. The fourth family is cloud of vertical development, which ignores the height bands entirely: cumulus and cumulonimbus, growing from a low base up through the levels, the CB sometimes all the way to the tropopause. The rough band heights vary with latitude, so treat them as approximate. Form tells you the physics: cumuliform means unstable air, heaped cloud, showers and bumps; stratiform means stable air, layered cloud, steady precipitation and smoother rides. The prefix nimbo or suffix nimbus simply marks a cloud that rains.

Spoken answer skeleton:

- Classified by base height and by form
- High: cirrus family, ice crystals. Medium: alto prefix
- Low: stratus, stratocumulus, nimbostratus
- Vertical development: cumulus and CB, up through the levels
- Cumuliform means unstable and showery; stratiform means stable and steady

Multiple choice:

- By colour: white, grey and dark clouds
- **By the height of their base and their form: high, medium, low and vertical development families** <- marked answer
- By the season in which they appear
- By wind speed at their level: fast, medium and slow clouds

Flashcard answer: Classified by base height and form. Families: high (cirrus, cirrocumulus, cirrostratus), medium (altocumulus, altostratus), low (stratus, stratocumulus, nimbostratus) and vertical development (cumulus, cumulonimbus). Cumuliform means unstable air; stratiform means stable.

**37. What is a microburst, what are its types, and why is it hazardous?** `Meteorology` `oral-met-08`

A microburst is an intense, concentrated downdraft from a convective cloud that hits the ground and bursts outward in all directions, like water poured onto a plate. It is small, a few kilometres across, and short-lived, usually a matter of minutes, which is exactly what makes it treacherous: it can be sitting on the approach path with little warning. The two types are wet and dry. A wet microburst arrives inside a shaft of heavy rain, visible on radar; a dry one falls from high-based cloud where the rain evaporates on the way down, the evaporation actually cooling and accelerating the downdraft, and there may be nothing to see but a ring of blown dust. The hazard is the shear sequence on approach: first you fly into the outflow headwind, performance and airspeed jump, and the temptation is to reduce thrust; seconds later the headwind becomes a downdraft and then a tailwind, and the aircraft is suddenly low, slow and sinking with the engines spooled down. That sequence has destroyed airliners, which is why windshear warnings trigger a full escape manoeuvre, not a corrected approach.

Spoken answer skeleton:

- A concentrated downdraft that hits the ground and bursts outward
- Small and brief: a few kilometres, a few minutes
- Wet type in heavy rain; dry type under high cloud, invisible
- Sequence: headwind gain, then downdraft, then tailwind loss
- Low, slow and sinking with thrust reduced: escape manoeuvre, never ride it

Multiple choice:

- A small area of clear air turbulence at cruise level
- A sudden increase in headwind that improves performance all the way down
- **An intense downdraft from a convective cloud spreading out at the ground, wet or dry, giving headwind then tailwind shear on approach** <- marked answer
- A gust of crosswind on the runway during taxi

Flashcard answer: An intense localized downdraft from convective cloud that spreads out on hitting the ground; wet (in heavy rain) or dry (evaporating, nearly invisible). Hazardous because approach shear runs headwind gain, then downdraft, then tailwind loss, leaving you low and slow; the answer is the windshear escape manoeuvre.

**38. What are the types of fog?** `Meteorology` `oral-met-09`

Fog is cloud at the surface, and the types are named for what does the cooling or supplies the moisture. Radiation fog forms on clear, calm nights: the ground radiates its heat away, chills the air touching it to its dew point, and a light stir of wind spreads the cooling into a layer; it favours valleys and burns off after sunrise. Advection fog forms when moist air flows over a cold surface, sea fog being the classic, and unlike radiation fog it can arrive in wind and persist for days. Upslope or hill fog is moist air cooled adiabatically as it is forced up rising ground, cloud sitting on the hills. Frontal or precipitation fog forms ahead of a warm front, where rain falling into the cold air beneath saturates it. Steam fog forms when very cold air drifts over much warmer water and the water appears to smoke. For operations, radiation fog is the early morning menace at inland airports; advection fog is the one that can shut a coastal airport for a long time.

Spoken answer skeleton:

- Radiation: clear calm night, ground cools the air; burns off in the morning
- Advection: moist air over a cold surface; sea fog, can persist in wind
- Upslope: moist air cooled climbing rising ground
- Frontal: rain ahead of a warm front saturates the cold air below
- Steam fog: cold air over warm water

Multiple choice:

- **Radiation, advection, upslope, frontal and steam fog** <- marked answer
- Cumulus, stratus and cirrus fog
- Morning, afternoon and evening fog
- Ground, sky and sea smoke only

Flashcard answer: Radiation fog (clear calm nights, ground cooling), advection fog (moist air over a cold surface, sea fog), upslope fog (air cooled climbing terrain), frontal fog (rain ahead of a warm front saturating cold air) and steam fog (cold air over warm water).

**39. Virga, dew, mist, haze: define each.** `Meteorology` `oral-met-10`

Four small definitions, each with an operational edge. Virga is precipitation that falls from a cloud but evaporates before reaching the ground; you see it as grey streaks hanging under the cloud base. The catch is that the evaporation cools the air and can drive strong downdrafts, so virga under convective cloud is a warning sign for dry microburst conditions. Dew is water vapour condensing directly onto cold surfaces on clear, calm nights, the same cooling that, with a little wind to stir it, would give radiation fog instead. Mist is water droplets reducing visibility, but not below fog limits: in reports, visibility of 1000 metres or more with high humidity is mist, coded BR, while below 1000 metres it becomes fog, FG. Haze is different in kind: it is dry particles, dust or smoke or salt, scattering the light, reduced visibility with no moisture story at all, coded HZ, common in this region when desert dust hangs in stable air.

Spoken answer skeleton:

- Virga: precipitation evaporating before it reaches the ground
- Under convective cloud, virga hints at dry microburst risk
- Dew: vapour condensing straight onto cold surfaces on calm clear nights
- Mist: water droplets, visibility 1000 m or more; below that it is fog
- Haze: dry particles like dust or smoke, no moisture involved

Multiple choice:

- Virga is ground frost; dew is falling rain; mist is smoke; haze is thick fog
- **Virga is precipitation evaporating before the ground; dew is condensation on surfaces; mist is water droplets with visibility 1000 m or more; haze is dry particles** <- marked answer
- All four are types of freezing precipitation
- Virga is a cloud family; dew, mist and haze are wind phenomena

Flashcard answer: Virga: precipitation evaporating before reaching the ground, a dry microburst clue under convective cloud. Dew: condensation directly onto cold surfaces at night. Mist: water droplets, visibility 1000 m or more (BR); below 1000 m it is fog. Haze: dry particles such as dust or smoke (HZ).

**40. What are the layers of the atmosphere?** `Meteorology` `oral-met-11`

From the ground up, the atmosphere is stacked in layers defined by what the temperature does in each. The troposphere is the bottom layer, where temperature falls with height, where nearly all the water vapour lives and therefore where the weather happens; it is capped by the tropopause, higher and colder over the equator than the poles. Above it lies the stratosphere, where temperature is first steady and then rises with height because the ozone layer absorbs solar ultraviolet; that makes it very stable, dry and largely weather-free, which is why cruising in the lower stratosphere on polar-side routes is such smooth flying. Above that, the mesosphere, where temperature falls again to the coldest point of the atmosphere, and then the thermosphere, where the thin air is heated by direct solar radiation, and within which the ionosphere sits, the electrified region that HF radio depends on. Commercial aviation lives in the troposphere and the lowest slice of the stratosphere; the rest matters to us mainly through radio and space weather.

Spoken answer skeleton:

- Troposphere: temperature falls with height, all the weather; capped by the tropopause
- Stratosphere: stable, ozone warms it with height, smooth cruising
- Mesosphere: temperature falls again, coldest point
- Thermosphere: heated by the sun, contains the ionosphere for HF
- We operate in the troposphere and lower stratosphere

Multiple choice:

- **Troposphere, stratosphere, mesosphere and thermosphere, separated by how temperature changes with height** <- marked answer
- Low, medium and high layers, separated by cloud families
- The pressure layer, the wind layer and the weather layer
- The ionosphere, then the stratosphere, then the troposphere going upward

Flashcard answer: Troposphere (temperature falling, all the weather), tropopause, stratosphere (stable, warmed aloft by ozone), mesosphere (cooling again), thermosphere (solar heated, holds the ionosphere). Airliners fly in the troposphere and lower stratosphere.

**41. What is windshear, how is it formed, and how do you handle it on the approach?** `Meteorology` `oral-met-12`

Windshear is a marked change of wind speed or direction over a short distance, horizontally or vertically, short enough that the aircraft crosses it before it can settle into the new wind, so the airspeed and flight path get disturbed. It forms in several ways: thunderstorms and microbursts are the violent source; fronts bring a wind change across their surface; a low-level temperature inversion can have calm air beneath and a strong flow just above, including the low-level jet at night; terrain and buildings bend the surface wind; and a strong gusty crosswind shears in its own right. On approach, the defence starts before the aircraft: if windshear is reported or a predictive windshear warning triggers, delay the approach or divert; there is no prize for flying into it. Fly a stabilised approach with any recommended speed additive. If you encounter it, the moment performance goes wrong, fluctuating airspeed, sink, a windshear warning, the answer is the escape manoeuvre: maximum thrust, rotate towards the commanded pitch, follow the flight director windshear guidance, keep the configuration until safely climbing away. Never try to rescue the landing out of a shear encounter.

Spoken answer skeleton:

- A marked wind change over a short distance, vertical or horizontal
- Sources: thunderstorms and microbursts, fronts, inversions and low level jets, terrain
- Reported or predicted on approach: delay or divert
- Stabilised approach, speed additive if recommended
- Encounter: escape manoeuvre, max thrust, pitch, configuration held, go around

Multiple choice:

- A steady headwind down the whole approach, handled by trimming once
- **A sudden change of wind speed or direction over a short distance; avoid when warned, and fly the escape manoeuvre if encountered** <- marked answer
- The normal decrease of wind near the ground, handled by reducing flap
- Turbulence from the aircraft ahead, handled by extra spacing only

Flashcard answer: Windshear is a marked wind change over a short distance, from storms and microbursts, fronts, inversions, low level jets or terrain. On approach: delay or divert if warned, fly stabilised with any additive, and on encountering it fly the windshear escape manoeuvre and go around; never continue the landing.

**42. What are the approach segments?** `Navigation` `oral-nav-02`

An instrument approach procedure is built from segments, each with its own job and its own obstacle protection. The arrival gets you from the enroute structure towards the airport, often via a STAR. The initial approach segment begins at the initial approach fix, the IAF, and its job is manoeuvring: getting the aircraft pointed the right way, descending, starting to slow. The intermediate segment, from the intermediate fix, is about preparation: it is designed with a shallow or level profile so you can configure, slow to approach speed and stabilise before the real descent begins. The final approach segment, from the final approach fix or point, is the descent to the runway, down to a decision altitude on a precision approach like the ILS, or a minimum descent altitude on a non-precision one. And the missed approach segment, from the missed approach point, is the protected escape route if you do not become visual: a defined track and climb that guarantees obstacle clearance. Knowing which segment you are in tells you what the procedure expects of you at that moment.

Spoken answer skeleton:

- Arrival brings you from enroute towards the procedure
- Initial, from the IAF: manoeuvring and slowing
- Intermediate, from the IF: configure and stabilise, shallow profile
- Final, from the FAF: the descent to DA or MDA
- Missed approach, from the MAP: the protected escape climb

Multiple choice:

- Takeoff, cruise, descent and landing
- Downwind, base and final only
- **Arrival, initial, intermediate, final and missed approach segments** <- marked answer
- The first, second, third and final climb segments

Flashcard answer: Arrival, then initial (from the IAF, manoeuvring), intermediate (from the IF, configure and stabilise), final (from the FAF, descent to DA or MDA) and missed approach (from the MAP, the protected escape climb). Each segment has its own job and obstacle protection.

**43. IRS and INS: what are they, how do they work, and what is the difference?** `Navigation` `oral-nav-03`

Both are self-contained navigation systems: give them a starting position and they track everything that happens to the aircraft afterwards, with no radio, no ground stations, no satellites. The principle is dead reckoning by physics. Accelerometers measure every acceleration of the aircraft; integrate acceleration once and you have velocity, integrate again and you have distance and direction travelled, and therefore present position. Gyros keep track of which way the accelerometers are pointing, and the whole thing needs a careful alignment on the ground, stationary at a known position, to find true north and level before flight. The difference is the generation of technology. The INS is the older system: a mechanically gimballed platform physically held stable in space by spinning gyros, with the accelerometers mounted on it. The IRS is the modern one: strapdown, meaning the sensors are bolted to the airframe, with ring laser gyros measuring rotation and a computer doing mathematically what the gimbals did mechanically. Both drift slowly with time, a few miles over a long flight being typical, roughly, which is why modern aircraft blend IRS with GPS updating: the IRS gives the smooth, continuous, jam-proof backbone, and GPS pins it to the earth.

Spoken answer skeleton:

- Self-contained dead reckoning: no radio, no satellites
- Accelerometers integrated once for velocity, twice for position
- Gyros track orientation; aligned before flight at a known position
- INS: old, mechanical gimballed platform. IRS: strapdown, ring laser gyros, computed
- Both drift with time, so modern aircraft blend IRS with GPS updates

Multiple choice:

- Radio systems that triangulate position from ground beacons
- **Self-contained systems integrating accelerometer and gyro data for position; INS uses a mechanical gimballed platform, IRS is strapdown with laser gyros** <- marked answer
- Satellite receivers that need at least four satellites to navigate
- Autopilot modes for holding a selected heading

Flashcard answer: Self-contained inertial navigation: accelerometers and gyros, aligned at a known position, integrate acceleration into velocity and position with no external signals. INS is the older gimballed platform; IRS is modern strapdown with ring laser gyros and computation. Both drift, so they are blended with GPS.

**44. RNAV and GPS: what are they and what are the charts used for?** `Navigation` `oral-nav-04`

RNAV, area navigation, is a capability, not a piece of equipment: it means the aircraft can fly point to point along any desired track, between arbitrary waypoints, instead of being chained to tracks that run beacon to beacon. The FMS builds the route from a database and feeds it whatever position sources it has: GPS, IRS, DME ranging. GPS is one of those sources, and today the dominant one: a constellation of satellites broadcasting timed signals, from which the receiver measures its distance to each and solves for position, needing at least four satellites for a three-dimensional fix, with integrity monitoring, RAIM, checking that the answer can be trusted. The charts: RNAV SIDs, STARs and RNAV or RNP approach charts describe procedures defined entirely by waypoints, with the required navigation accuracy printed on them; RNP means RNAV plus the aircraft monitoring and alerting its own accuracy. The chart tells you the path, the required performance, and the minima that apply to the equipment you are using.

Spoken answer skeleton:

- RNAV: the capability to fly point to point between waypoints, off the beacon tracks
- Position from whatever sensors are available: GPS, IRS, DME ranging
- GPS: satellite ranging, four satellites minimum for a 3D fix, RAIM for integrity
- RNP is RNAV with onboard accuracy monitoring and alerting
- Charts: RNAV SIDs, STARs and approaches, waypoint-defined with required accuracy and minima

Multiple choice:

- Two names for the autopilot system
- RNAV is a satellite constellation; GPS is the chart that displays it
- **RNAV is point to point navigation using available sensors; GPS is satellite ranging that feeds it; the charts define waypoint-based departures, arrivals and approaches** <- marked answer
- Radar systems used by ATC to vector aircraft

Flashcard answer: RNAV is the capability to navigate point to point between waypoints using available sensors; GPS is satellite ranging (four satellites for a 3D fix, RAIM for integrity) and is the main sensor today. RNAV and RNP charts define waypoint-based SIDs, STARs and approaches with the required accuracy and minima.

**45. What is a NOTAM and what is it used for?** `General` `oral-gen-02`

A NOTAM, a notice to airmen, is the system aviation uses to tell you what has changed and could affect your flight, when the change is too recent or too temporary to be in the charts and the AIP. It carries time-critical information: a runway or taxiway closed, an ILS or VOR out of service, a change to a procedure, cranes near the approach, airspace restricted for an exercise, or a temporary danger area. Each one states what, where, and from when to when. In practice they are the backbone of the preflight briefing: dispatch pulls the NOTAMs for departure, destination, alternates and the route, and the crew reads them looking for anything that changes the plan, a longer taxi, a different approach, a raised minimum, an unusable alternate. The skill with NOTAMs is filtering: a busy airport can have pages of them, and the discipline is finding the two or three that actually matter for tonight's flight.

Spoken answer skeleton:

- Time-critical notice of changes affecting flight operations
- Covers closures, navaid outages, procedure changes, obstacles, airspace restrictions
- States what, where, and the valid times
- Checked in the preflight briefing for departure, destination, alternates and route
- The skill is filtering out the few that change your plan

Multiple choice:

- A weather forecast for the destination airport
- A monthly magazine about new aircraft types
- The flight plan filed with air traffic control
- **A time-critical notice of changes such as closures, navaid outages and airspace restrictions, checked before flight** <- marked answer

Flashcard answer: A NOTAM is a time-critical notice of temporary or recent changes affecting flight: runway closures, navaid outages, procedure changes, obstacles, airspace restrictions, each with a validity period. Crews check NOTAMs for departure, destination, alternates and route in the preflight briefing.

## Frequency 1: Rare (63 questions, 63 written)

Asked in 1 of 5 interview sets.

**46. What are the different types of drag, in depth?** `Aerodynamics` `oral-aero-18`

Going one level deeper than the basic split. Parasite drag has three members. Form drag comes from the pressure field around the shape: the flow cannot close up neatly behind a blunt body, leaving lower pressure behind than in front; streamlining is the cure. Skin friction is the viscous rubbing of air in the boundary layer over every square metre of surface; it grows with wetted area and roughness, which is why surface condition matters. Interference drag is the extra loss where flows around different parts meet and disturb each other, beyond what each part costs alone. All of parasite drag rises with the square of speed. Induced drag is the lift byproduct: tip vortices, downwash, the lift vector tilted rearward; it falls as speed rises and grows with weight and with low aspect ratio. And at high Mach there is wave drag, the energy fed into shockwaves once airflow over the wing goes locally supersonic past Mcrit. Total drag is the sum, with its minimum at Vmd where parasite and induced cross.

Spoken answer skeleton:

- Parasite: form drag from the pressure field behind a shape
- Skin friction in the boundary layer, grows with wetted area and roughness
- Interference where flows meet at junctions
- All parasite drag rises with speed squared; induced falls with speed
- Induced: tip vortices and downwash tilting lift rearward
- Wave drag past Mcrit, energy lost into shockwaves

Multiple choice:

- **Parasite drag (form, skin friction, interference), induced drag from lift, and wave drag past Mcrit** <- marked answer
- Only form drag and friction drag, both falling with speed
- Static drag on the ground and dynamic drag in the air
- Engine drag, propeller drag and wheel drag

Flashcard answer: Parasite drag: form (pressure field), skin friction (boundary layer) and interference (junction flows), all rising with speed squared. Induced drag: the lift byproduct, falling with speed. Wave drag: shockwave losses past Mcrit. Total drag bottoms out at Vmd.

**47. What is interference drag, how does it form, and how do you reduce it?** `Aerodynamics` `oral-aero-19`

Interference drag is the extra drag that appears where the airflows around two parts of the aircraft meet, over and above the drag each part would have on its own. At a junction like the wing root against the fuselage, or an engine pylon against the wing, the two boundary layers and pressure fields run into each other, the combined flow slows and thickens, and it separates more readily than either flow alone, especially in the tight corner angles. The result is turbulent, low-energy air and extra drag charged to nobody in particular, which is exactly why it gets its own name. The cure is to soften the meeting: fairings and fillets that round out the corners, blended junctions, and careful placement so that strong pressure fields do not overlap. That is what the smooth moulded fillet at an airliner's wing root is doing: it is not decoration, it is managing the meeting of two airflows.

Spoken answer skeleton:

- Extra drag where airflows around two parts meet
- Junction flows slow, thicken and separate in the corners
- More drag than the two parts would cost separately
- Reduced with fairings, fillets and blended junctions
- The wing root fillet is exactly this fix

Multiple choice:

- Drag from ice contaminating the wing, reduced by de-icing
- **Drag created where airflows from different parts of the aircraft meet at junctions, reduced by fairings and fillets** <- marked answer
- Drag from the propeller slipstream, reduced by feathering
- Radio interference slowing the aircraft, reduced by shielding

Flashcard answer: The extra drag where airflows around different components meet, at junctions like wing root and pylons: the merged flows thicken and separate in the corners. Reduced with fairings, fillets and blended junctions.

**48. What is the critical angle of attack?** `Aerodynamics` `oral-aero-20`

The critical angle of attack is the angle at which the wing produces its maximum lift coefficient, and beyond which the airflow can no longer stay attached to the upper surface: it separates, lift falls away sharply, and the wing is stalled. Below it, increasing angle of attack buys more lift; past it, more angle only deepens the stall. The point worth pressing in an interview is that for a given wing and configuration it is essentially a fixed angle, typically somewhere around the mid teens of degrees for a conventional wing, as a rough figure. It does not care about weight, speed, or attitude; those change the speed at which you happen to reach the critical angle, not the angle itself. Slats raise it, which is how they delay the stall; ice and contamination lower it, which is why a contaminated wing can stall early and with little warning.

Spoken answer skeleton:

- The angle of attack giving maximum lift coefficient
- Beyond it the airflow separates: the stall
- Fixed for a given wing and configuration, roughly mid teens of degrees
- Weight and speed change when you reach it, not the angle itself
- Slats raise it; ice and contamination lower it

Multiple choice:

- The angle of bank at which the aircraft overbanks
- The pitch attitude at which the tail strikes the runway
- **The angle of attack at maximum lift coefficient, beyond which the airflow separates and the wing stalls** <- marked answer
- The angle of climb that gives the best gradient

Flashcard answer: The angle of attack at which the wing reaches maximum lift coefficient; past it the flow separates and the wing stalls. Essentially fixed for a configuration (roughly mid teens of degrees), regardless of weight or speed. Slats raise it, contamination lowers it.

**49. Can you stall at high speed?** `Aerodynamics` `oral-aero-21`

Yes, and being crisp about why is the point of the question. The wing stalls at its critical angle of attack, full stop; speed only determines how much lift you get at any angle. In level 1g flight you happen to reach the critical angle at the published stall speed. But load the wing harder, in a steep turn, a hard pull-up, or an abrupt gust, and it must fly at a higher angle of attack for the same speed to make the extra lift; pull hard enough and you reach the critical angle at a speed far above the 1g stall speed. That is the accelerated stall, and the arithmetic is unforgiving: stall speed rises with the square root of load factor, so at 2g the stall speed is roughly 40 percent higher. Separately, at high altitude and high Mach the flow can separate behind a shockwave, felt as high speed buffet, which is a compressibility effect rather than a classic stall, but it is the other way the wing can quit at speed.

Spoken answer skeleton:

- Yes: the wing stalls at its critical angle of attack, at any speed
- High load factor forces a higher angle at the same speed
- The accelerated stall: steep turns, hard pulls, gusts
- Stall speed rises with the square root of load factor, about 40 percent up at 2g
- At high Mach, shock-induced separation is the other high speed limit

Multiple choice:

- No, a stall can only happen below the published stall speed
- Yes, but only with the flaps extended
- No, at high speed the wing always has enough lift
- **Yes: under high load factor the wing can reach its critical angle of attack at speeds well above the 1g stall speed** <- marked answer

Flashcard answer: Yes. The wing stalls at its critical angle of attack regardless of speed, and high load factor (steep turns, hard pulls) forces it there at speeds well above the 1g stall speed: the accelerated stall. Stall speed grows with the square root of load factor.

**50. What is a secondary stall and how do you recover?** `Aerodynamics` `oral-aero-22`

A secondary stall is a second stall triggered during the recovery from the first one, and it is nearly always self-inflicted. The aircraft has just stalled, the pilot has correctly lowered the nose, the wing is flying again, and then, anxious about the nose-low attitude and the altitude unwinding, the pilot pulls out of the descent too aggressively before the airspeed has rebuilt. That pull raises the load factor, the wing is asked for more lift than it has speed to give, the angle of attack runs straight back past critical, and the buffet returns. The recovery is the same as any stall, applied with more patience: reduce the angle of attack again, release the back pressure, let the airspeed genuinely build this time, and then ease out of the descent with a gentle, progressive pull. The lesson under it is that stall recovery costs altitude by design; trying to save the altitude is what causes the secondary stall.

Spoken answer skeleton:

- A second stall during recovery from the first
- Cause: pulling out of the descent too hard, too early, before speed rebuilds
- The pull raises load factor and angle of attack back past critical
- Recover the same way: reduce angle of attack, be patient, let speed build
- Then ease out gently; accept the altitude loss

Multiple choice:

- A stall of the tailplane instead of the wing
- **A stall caused by pulling too hard during recovery from a first stall, before airspeed has rebuilt; recover by reducing angle of attack again and easing out gently** <- marked answer
- A stall that only occurs on the second flight of the day
- An engine compressor stall following an airframe stall

Flashcard answer: A second stall caused by pulling out of the recovery descent too hard before airspeed has rebuilt: the load factor drives the angle of attack back past critical. Recover by reducing the angle of attack again, letting speed build, then easing out gently. Accept the altitude loss.

**51. What is downwash?** `Aerodynamics` `oral-aero-23`

Downwash is the downward motion given to the air behind the wing as a consequence of it producing lift. It follows directly from the two pictures of lift: the wing deflects air downward, and the tip vortices wrap air down behind the span. Two consequences matter. First, induced drag: the downwash tilts the local relative airflow downward at the wing, and since lift stays perpendicular to that local flow, the lift vector leans back, and the rearward lean is induced drag; strong downwash, meaning slow flight and high lift coefficient, means strong induced drag. Second, the tailplane: it flies in the wing's downwash, so the air arrives at the tail descending, which changes the tail's effective angle of attack and therefore pitch trim and stability; changes of flap setting or speed change the downwash and produce the trim changes pilots feel. Behind the aircraft, the organised downwash between the vortices is also part of what makes wake turbulence sink.

Spoken answer skeleton:

- The downward flow given to the air behind a lifting wing
- Comes from deflecting air down and from the tip vortices
- Tilts the local airflow, leans lift back: induced drag
- Tailplane flies in it, so it shifts trim and stability with flap and speed
- Also part of why wake turbulence sinks

Multiple choice:

- **The downward deflection of air behind a lifting wing, responsible for induced drag and affecting the tailplane** <- marked answer
- The downdraft inside a thunderstorm
- Air escaping from the cabin pressurisation outflow valve
- The propeller slipstream over the wing roots

Flashcard answer: The downward motion of air behind a lifting wing, from deflection and the tip vortices. It tilts the local airflow so lift leans rearward (induced drag) and it changes the airflow the tailplane sees, shifting trim as flap and speed change.

**52. What does a sweptback wing do? Advantages and disadvantages?** `Aerodynamics` `oral-aero-24`

Sweeping the wing back is fundamentally a high speed trick. What matters for compressibility is the component of the airflow running straight across the wing, perpendicular to the leading edge; sweep the wing and that component is only part of the true airspeed, so the wing behaves as if it were flying slower than it is. The payoff is a higher critical Mach number: the aircraft can cruise faster before shockwaves and their drag arrive. Sweep also contributes to lateral stability, behaving a little like dihedral in a sideslip. The costs are real. A swept wing makes less lift at low speed, driving higher takeoff and landing speeds and demanding the full set of slats and flaps. The spanwise drift of the boundary layer encourages the tips to stall first, which is bad news because the tips are behind the centre of gravity: a tip stall pitches the nose up, deeper into the stall. And the combination of sweep and the resulting strong lateral stability makes the aircraft prone to Dutch roll, which is why swept jets carry yaw dampers.

Spoken answer skeleton:

- Only the airflow component across the wing counts for compressibility
- So sweep raises Mcrit: cruise faster before shockwaves and wave drag
- Bonus: adds lateral stability, like dihedral
- Costs: poor low speed lift, so higher speeds and full high lift devices
- Tip stall tendency with pitch-up, and Dutch roll, hence the yaw damper

Multiple choice:

- It increases low speed lift for shorter runways, at the cost of a slower cruise
- **It delays compressibility by reducing the effective airflow across the wing, allowing faster cruise, at the cost of low speed lift, tip stall tendency and Dutch roll** <- marked answer
- It reduces the weight of the wing with no aerodynamic effect
- It improves the view from the flight deck during taxi

Flashcard answer: Sweep means only part of the true airspeed flows straight across the wing, raising Mcrit so the aircraft cruises faster before shockwaves; it also adds lateral stability. Costs: weaker low speed lift (hence slats and flaps), a tip stall and pitch-up tendency, and Dutch roll, managed by the yaw damper.

**53. What is Mcrit and why do shockwaves happen?** `Aerodynamics` `oral-aero-25`

The wing works by accelerating air over its upper surface, which means the airflow there is always moving faster than the aircraft itself. So there comes a point, while the aircraft is still comfortably subsonic, where that accelerated local flow touches the speed of sound. The aircraft Mach number at which airflow somewhere on the airframe first reaches local Mach 1 is the critical Mach number, Mcrit. Fly faster than Mcrit and a pocket of supersonic flow grows over the wing. That pocket has to return to subsonic flow somewhere, and supersonic air cannot slow down gradually: the deceleration happens across an abrupt front, a shockwave, where pressure, density and temperature jump almost instantaneously. The shock costs energy, felt as wave drag, and the sharp pressure rise across it can peel the boundary layer off the wing, shock-induced separation, felt as high speed buffet and degraded control. Managing all this is why jets have swept wings, supercritical wing sections, and an MMO.

Spoken answer skeleton:

- Air over the wing moves faster than the aircraft
- Mcrit: aircraft Mach where some local flow first reaches Mach 1
- Beyond it a supersonic pocket forms over the wing
- Supersonic flow cannot slow gently: it snaps back through a shockwave
- Shock costs wave drag and can separate the flow: buffet
- Answers: sweep, supercritical sections, MMO

Multiple choice:

- The Mach number at which the whole aircraft goes supersonic; shockwaves are engine noise
- **The aircraft Mach number at which airflow somewhere first reaches local Mach 1; beyond it supersonic flow can only slow through an abrupt shockwave** <- marked answer
- The minimum control speed at altitude; shockwaves come from the flight controls
- The maximum operating altitude; shockwaves are a pressurisation effect

Flashcard answer: Mcrit is the aircraft Mach number at which the accelerated airflow somewhere, usually over the wing, first reaches local Mach 1. Past it a supersonic pocket forms, and supersonic flow can only return to subsonic through an abrupt shockwave, causing wave drag and possible shock-induced separation and buffet.

**54. What is Dutch roll and how do you prevent it?** `Aerodynamics` `oral-aero-26`

Dutch roll is an oscillation that couples yaw and roll: the aircraft yaws one way, the advancing wing speeds up and lifts more, rolling the aircraft, then the motion swings back the other way, and it settles into a continuous wallowing, rolling and yawing out of phase. It shows up when lateral stability is strong relative to directional stability: the rolling response to a sideslip is powerful, but the fin is not quick enough to kill the yaw that starts it. Swept wings make it worse, because sweep adds exactly that strong rolling response, and it is most persistent at high altitude where the thin air weakens the fin and the damping. The practical prevention on jets is the yaw damper: it senses the yawing oscillation and applies small, fast rudder inputs to stop it before it grows, running whenever the aircraft is airborne. If it must be flown by hand, the technique is gentle aileron inputs against the roll and disciplined feet, since ham-fisted rudder feeds the oscillation rather than stopping it.

Spoken answer skeleton:

- Coupled yaw and roll oscillation, a continuous wallowing motion
- Yaw advances one wing, it lifts more, the aircraft rolls, then swings back
- Happens when lateral stability is strong against weak directional stability
- Worse with swept wings and at high altitude
- Prevented by the yaw damper making small automatic rudder inputs

Multiple choice:

- A rolling takeoff technique used in strong crosswinds
- A steady spiral dive caused by too much fin area
- **A coupled yaw and roll oscillation, from strong lateral against weak directional stability, prevented by the yaw damper** <- marked answer
- A pitching oscillation caused by an aft centre of gravity

Flashcard answer: Dutch roll is a coupled yaw and roll oscillation, a wallowing motion arising when lateral stability is strong relative to directional stability, aggravated by wing sweep and high altitude. The yaw damper prevents it with small automatic rudder inputs.

**55. What is lateral stability?** `Aerodynamics` `oral-aero-27`

Lateral stability is the aircraft's tendency to return to wings level after a disturbance in roll, without the pilot doing anything. The mechanism runs through sideslip: when a wing drops, the aircraft slips towards the low wing, and a laterally stable design converts that sideslip into a rolling moment that picks the wing back up. Several features do the converting. Dihedral, the upward angle of the wings, means the into-wind wing meets the sideslip at a higher effective angle of attack and lifts more. Wing sweep does the same job in its own way, the into-wind wing presenting more effective span to the flow. A high wing with the fuselage hanging below, and keel area above the centre of gravity, add more of the same. Designers actually have to be careful not to have too much: excessive lateral stability against modest directional stability is exactly the recipe for Dutch roll, which is why some high wing types even use anhedral.

Spoken answer skeleton:

- Tendency to roll back to wings level on its own
- A dropped wing causes sideslip towards it
- Design turns that sideslip into a restoring roll
- From dihedral, sweep, high wing and keel effect
- Too much of it, against weak directional stability, invites Dutch roll

Multiple choice:

- The tendency to hold a constant heading in turbulence
- **The tendency to return to wings level after a roll disturbance, from dihedral, sweep and high wing effects** <- marked answer
- The strength of the wing structure in a steep turn
- The ability to taxi in a crosswind without weathercocking

Flashcard answer: The tendency to return to wings level after a roll disturbance: the resulting sideslip is converted into a restoring rolling moment by dihedral, wing sweep, a high wing and keel effect. Excess lateral stability contributes to Dutch roll.

**56. What is directional stability?** `Aerodynamics` `oral-aero-28`

Directional stability is the aircraft's tendency to yaw back into line with the relative airflow after a disturbance in yaw, the same way a weathercock swings to face the wind, which is why it is often called weathercock stability. The main agent is the fin: it sits well behind the centre of gravity, so when the aircraft is skidding sideways through the air the fin is flying at an angle to the flow, generates a sideways lift force, and that force acting on the long tail arm swings the nose back into the airflow. Fuselage side area behind the centre of gravity helps; side area ahead of it, like a long forward fuselage, actually fights it, which is part of why fins are sized the way they are. It is directional stability that keeps the aircraft honestly pointed along its flight path, and its balance against lateral stability sets the character of the Dutch roll tendency: a big powerful fin damps it, a marginal one lets it wallow.

Spoken answer skeleton:

- Tendency to yaw back into the relative airflow, weathercock stability
- The fin, behind the centre of gravity, is the main agent
- In a sideslip the fin generates side force on a long arm
- That swings the nose back into line
- Its balance against lateral stability governs Dutch roll

Multiple choice:

- The tendency to return to wings level after a gust
- The tendency to maintain altitude without trimming
- The ability to steer straight on the runway with nosewheel steering
- **The tendency to yaw back into the relative airflow after a disturbance, provided mainly by the fin behind the centre of gravity** <- marked answer

Flashcard answer: The weathercock tendency: after a yaw disturbance the aircraft swings back into the relative airflow, mainly because the fin, well behind the centre of gravity, generates a restoring side force in the sideslip.

**57. Can an aircraft be statically unstable and dynamically stable?** `Aerodynamics` `oral-aero-29`

First the definitions, because the whole question lives in them. Static stability is the initial tendency after a disturbance: displace the aircraft, and does the first response push it back towards where it was, or further away? Dynamic stability is what happens over time: do the resulting motions die away, persist, or grow? The classic answer expected here is no. Dynamic stability describes how the aircraft settles back to equilibrium, and there is nothing to settle back with if the initial tendency is divergent: a statically unstable aircraft moves away from equilibrium and keeps going, so it can never be dynamically stable. The combinations that do exist: statically and dynamically stable, the ideal; statically stable but dynamically unstable, where the aircraft swings back but each oscillation grows bigger; and statically stable with neutral dynamics, oscillating forever. Worth adding for a modern interview: relaxed stability fly by wire aircraft can be flown with marginal or negative natural static stability, but there the computers are supplying artificial stability; aerodynamically the rule stands.

Spoken answer skeleton:

- Static: the initial tendency after a disturbance
- Dynamic: how the motion behaves over time
- Classic answer: no, static stability is a prerequisite for dynamic stability
- Statically unstable means diverging from the start, nothing to settle back
- You can be statically stable yet dynamically unstable: growing oscillations
- Fly by wire can fake stability, but that is artificial, not aerodynamic

Multiple choice:

- Yes, most airliners are built that way
- **No: dynamic stability requires static stability first, since a divergent initial tendency never returns towards equilibrium** <- marked answer
- Yes, but only with the autopilot disengaged
- The two terms mean the same thing, so the question does not apply

Flashcard answer: The classic answer is no: static stability (an initial tendency back towards equilibrium) is a prerequisite for dynamic stability (motions dying out over time). The reverse combination exists: statically stable but dynamically unstable, with growing oscillations. Fly by wire can supply artificial stability, but that is the computers, not the aerodynamics.

**58. How does an aircraft fly?** `Aerodynamics` `oral-aero-30`

The one-breath version of everything else in this section. An aircraft flies because its wings generate an aerodynamic force, lift, big enough to balance its weight. The wing does that by moving fast through the air: its shape and angle of attack accelerate the flow over the upper surface, dropping the pressure there below the pressure underneath, and at the same time it deflects a great mass of air downward, whose reaction pushes the wing up: two views of the same force. The speed that makes this work comes from the engines, whose thrust balances the drag that resisting air creates. So in steady flight the four forces are in equilibrium: lift against weight, thrust against drag. Control comes from the three primary flight controls rotating the aircraft about its axes, and flying is managing the balance: more speed or angle of attack for more lift, thrust and pitch together setting climb and descent. Everything else in aerodynamics is detail hanging off this frame.

Spoken answer skeleton:

- Wings moving fast through air generate lift to balance weight
- Lower pressure above the wing, air deflected downward: one force, two views
- Engines supply thrust to balance drag and keep the speed
- Steady flight: four forces in equilibrium
- Controls rotate it about three axes; flying is managing the balance

Multiple choice:

- **Its wings, moving through the air, generate lift balancing weight, while engine thrust balances drag** <- marked answer
- Hot exhaust gases make it lighter than air
- The propeller or fan pushes it upward directly
- The pressurised cabin provides buoyancy like a balloon

Flashcard answer: The wings, driven through the air by engine thrust, generate lift (lower pressure above, air deflected below) that balances weight, while thrust balances drag. In steady flight the four forces are in equilibrium, and the flight controls manage the balance.

**59. What are fences?** `Aerodynamics` `oral-aero-31`

Wing fences are the thin walls you see standing chordwise on the upper surface of some swept wings, running in line with the flight direction. They exist because of a side effect of sweep: on a swept wing the boundary layer does not flow straight back, it drifts outward along the span, piling up tired, low-energy air towards the wingtips. That build-up makes the tips prone to stalling first, which on a swept wing is the bad case: the tips sit behind the centre of gravity, so losing their lift pitches the nose up, deeper into the stall, and it takes out the ailerons at the same time. A fence is a physical dam against that spanwise drift: it stops the boundary layer migration at its station, keeping the outer wing flow fresh, the tips flying and the ailerons working to higher angles of attack. They were common on early swept jets; newer designs get the same effect more elegantly with wing twist, slats and vortex devices, but the purpose is identical.

Spoken answer skeleton:

- Chordwise walls on the upper surface of swept wings
- Sweep makes the boundary layer drift outward along the span
- Tired air piles up at the tips: tip stall risk, pitch up, ailerons lost
- The fence dams the spanwise drift at its station
- Keeps the tips flying and the ailerons effective longer

Multiple choice:

- Barriers around the airport perimeter
- **Chordwise walls on a swept wing that block spanwise boundary layer drift, delaying tip stall** <- marked answer
- Movable panels that increase wing area for takeoff
- Guards that keep ice off the leading edge

Flashcard answer: Wing fences are chordwise walls on a swept wing's upper surface that dam the spanwise drift of the boundary layer towards the tips, delaying tip stall, its pitch-up, and the loss of aileron effectiveness.

**60. What is wake turbulence?** `Aerodynamics` `oral-aero-32`

Wake turbulence is the disturbed air an aircraft leaves behind it, and its dangerous core is the pair of wingtip vortices: two horizontal tornadoes of rolled-up air trailing from the tips of any wing making lift. They are strongest behind an aircraft that is heavy, slow and clean, because that is when the wing is at its highest lift coefficient and the tip spillage is fiercest, exactly the takeoff and landing phases. The vortices sink slowly behind the generating aircraft, a few hundred feet per minute at first, then level off, and they drift with the wind, which is the operational trap: a light crosswind can hold a vortex over the runway or push it onto the parallel one. For a following aircraft, flying into a vortex can mean a violent induced roll, worst when the follower is small and the leader was heavy. The defences are the wake turbulence separation minima by category, and airmanship: rotate before the leader's rotation point, land beyond their touchdown, stay at or above their approach path, and be patient behind a heavy in light winds.

Spoken answer skeleton:

- The disturbed air behind an aircraft, mainly the two trailing wingtip vortices
- Strongest behind heavy, slow and clean aircraft
- Vortices sink below the flight path and drift with the wind
- Hazard: violent induced roll for a following aircraft
- Defences: separation minima, stay above the leader's path, land beyond their touchdown

Multiple choice:

- Engine exhaust heat haze behind a departing aircraft
- Turbulence from the airport buildings near the runway
- **The trailing wingtip vortices behind a lifting aircraft, strongest heavy, slow and clean, hazardous to following traffic** <- marked answer
- The spray thrown up from a wet runway

Flashcard answer: The disturbed air behind an aircraft, dominated by its trailing wingtip vortices: strongest when heavy, slow and clean, sinking behind the aircraft and drifting with the wind. It can roll a following aircraft violently, hence wake separation minima and staying above the leader's path.

**61. What is V1?** `Performance` `oral-perf-05`

V1 is the takeoff decision speed, and the cleanest way to define it is from both sides. Looking at stopping: V1 is the maximum speed at which the first action to reject the takeoff, closing the thrust levers, braking, can be taken and the aircraft still stopped within the accelerate-stop distance available. Looking at going: it is also the minimum speed from which, if an engine fails, the takeoff can be continued and the screen height still reached within the distance remaining. Before V1 you can stop; at and after V1 you are committed to fly, because the runway left is no longer guaranteed for stopping. That is why the V1 call is made and why hands come off the thrust levers at V1. It is not a fixed number: it is calculated for every takeoff from weight, runway length and slope, wind, temperature, pressure altitude, flap setting and runway condition, and on a wet or contaminated runway it comes down to protect the stopping case.

Spoken answer skeleton:

- Takeoff decision speed
- Last speed at which a rejected takeoff can begin and still stop in the distance available
- Also the earliest speed to continue after engine failure and make the screen height
- At V1 you are committed to fly; hands off the thrust levers
- Calculated every takeoff from weight, runway, wind, temperature, condition; lower when wet

Multiple choice:

- The speed at which the nose is raised for liftoff
- **The decision speed: the last point a rejected takeoff can be started and still stop within the distance available; beyond it the takeoff is continued** <- marked answer
- The minimum climb speed with an engine failed
- The maximum taxi speed onto the runway

Flashcard answer: V1 is the takeoff decision speed: the maximum speed at which the stop action can begin and still stop within the accelerate-stop distance, and the minimum from which an engine-out takeoff can be safely continued. At V1 you are committed to fly. It is computed for every takeoff.

**62. Service ceiling and absolute ceiling: define both.** `Performance` `oral-perf-06`

Both describe how high the aircraft can usefully climb, and the difference is where you draw the line. Climb performance comes from excess thrust: thrust available beyond what is needed to balance drag. As altitude increases, the engines produce less thrust in the thinning air while the drag picture worsens, so the excess shrinks and the rate of climb falls away. The absolute ceiling is the theoretical end of the road: the altitude where excess thrust has gone to zero and the rate of climb is exactly nothing. You can approach it but only asymptotically, which makes it a textbook number rather than an operational one. The service ceiling is the practical version: the altitude at which the rate of climb has fallen to a small defined value, conventionally around 100 feet per minute for piston aircraft and around 500 feet per minute for jets, though the defining figure varies with certification and type, so treat those as the customary values. Airliners in practice are limited day to day by performance ceilings for buffet margin and engine-out requirements, which sit below these.

Spoken answer skeleton:

- Climb comes from excess thrust; it shrinks with altitude
- Absolute ceiling: rate of climb exactly zero, theoretical, approached asymptotically
- Service ceiling: rate of climb down to a small defined value
- Customarily about 100 fpm piston, about 500 fpm jet, definitions vary
- Daily limits are really buffet and engine-out ceilings, lower still

Multiple choice:

- Service ceiling is the cabin altitude limit; absolute ceiling is the oxygen mask altitude
- **Service ceiling is where climb rate falls to a small defined value; absolute ceiling is where climb rate reaches zero** <- marked answer
- Both are the same altitude measured on different days
- Service ceiling is for passengers; absolute ceiling is for cargo flights

Flashcard answer: Absolute ceiling: the altitude where excess thrust and rate of climb reach zero, a theoretical limit. Service ceiling: the altitude where the climb rate falls to a defined small value, customarily around 100 fpm for pistons and 500 fpm for jets, definitions varying by certification.

**63. A heavy aircraft is landing. What happens to the landing distance and why?** `Performance` `oral-perf-07`

The landing distance increases, and it increases through two multiplying effects. First, speed: a heavier aircraft needs more lift for the same approach, and since the approach is flown at a speed tied to the stall speed of the configuration, VREF, and stall speed rises with weight, the heavy aircraft crosses the threshold genuinely faster through the air. Second, energy: the kinetic energy the brakes must destroy is half m V squared, so it grows with the extra mass and with the square of that extra speed, a double penalty. More energy means longer ground roll, hotter brakes, and more demand on reversers and spoilers. There is a partial offset people sometimes mention, that more weight presses the wheels down and improves braking friction, but it does not come close to cancelling the energy growth: the net effect is always a longer landing distance. This is exactly why landing performance is calculated for the actual landing weight, and why overweight landings come with inspection requirements.

Spoken answer skeleton:

- Landing distance increases
- Heavier means a higher stall speed, so a higher VREF over the threshold
- Kinetic energy is half m V squared: more mass and speed squared
- Brakes must destroy far more energy: longer roll, hotter brakes
- Weight on wheels helps friction slightly, but nowhere near enough

Multiple choice:

- It decreases, because the extra weight presses the wheels down for better braking
- It stays the same, because VREF does not depend on weight
- **It increases: the higher VREF and the extra mass mean far more kinetic energy for the brakes to destroy** <- marked answer
- It only changes if the runway is wet

Flashcard answer: It increases. Higher weight raises stall speed and therefore VREF, and kinetic energy grows with mass and speed squared, so the brakes must destroy much more energy: a longer ground roll and hotter brakes. The better wheel friction from extra weight nowhere near offsets it.

**64. Landing at a high elevation airport, what happens to the landing distance?** `Performance` `oral-perf-08`

It gets longer. The approach is still flown at the same indicated airspeed, VREF for the weight, because the wing cares about dynamic pressure and the ASI measures exactly that. But at a high elevation airport the air is thinner, and the same indicated speed in thin air is a higher true airspeed, the same effect as the climb: roughly 2 percent more TAS per 1000 ft as a rule of thumb. Add no wind, and a higher TAS is a higher ground speed at touchdown, and since kinetic energy grows with the square of speed, the brakes have noticeably more energy to destroy and the ground roll stretches. The thin air also gives the wheels and any reverse thrust slightly less aerodynamic drag to help, and if things go wrong, the go-around performance is worse because the engines are down on thrust too. Hot days multiply the same effect, which is why hot and high airports, and there are plenty in this region, are the classic performance-limited landings.

Spoken answer skeleton:

- Landing distance increases
- Same IAS for VREF, but thin air makes that a higher TAS
- Roughly 2 percent per 1000 ft, as a rule of thumb
- Higher touchdown ground speed, energy up with speed squared
- Engines also give less for a go-around; hot and high stacks the effect

Multiple choice:

- **It increases: the same indicated approach speed is a higher true airspeed and ground speed in the thin air, so there is more energy to stop** <- marked answer
- It decreases, because the thinner air produces less lift and the aircraft settles faster
- It is unchanged, because VREF is the same indicated airspeed
- It only increases if the runway slopes uphill

Flashcard answer: It increases. VREF is the same indicated airspeed, but in the thin air that is a higher true airspeed and touchdown ground speed (roughly 2 percent per 1000 ft), and stopping energy grows with speed squared. Go-around thrust is also reduced. Hot and high compounds it.

**65. Takeoff segments: why 1500 ft?** `Performance` `oral-perf-09`

The takeoff segments exist to guarantee that, even with an engine failed at the worst point, the aircraft can climb away from the runway clear of obstacles. That guarantee has to end somewhere sensible, and the rules set the end of the takeoff flight path at 1500 ft above the runway, or higher if obstacles demand it. Why there? Because by 1500 ft the emergency transition is complete: the gear is long gone, the flaps have been retracted in the third segment, the aircraft has accelerated to its final segment climb speed, and thrust has been brought back from the takeoff setting to maximum continuous, which is the thrust the failed-engine climb can sustain indefinitely. In other words, at 1500 ft the aircraft is in a clean, stable, sustainable engine-out climb, and the special takeoff obstacle rules can hand over to the enroute obstacle clearance rules that cover the rest of the flight. It also sits comfortably at circuit height, from which an immediate return to land can be flown.

Spoken answer skeleton:

- The takeoff flight path must end somewhere: the rules set 1500 ft, or higher for obstacles
- By then the transition is complete: gear up, flaps in, final segment speed
- Thrust back to maximum continuous, sustainable indefinitely engine out
- So takeoff obstacle rules can hand over to enroute rules
- Also circuit height, from which a return can be flown

Multiple choice:

- Because radio contact is only possible above 1500 ft
- Because passengers may unfasten seatbelts at 1500 ft
- Because 1500 ft is the height of the highest obstacle in the world
- **Because by 1500 ft the aircraft is cleaned up, at final climb speed and on maximum continuous thrust, so the takeoff path can hand over to enroute obstacle rules** <- marked answer

Flashcard answer: The takeoff flight path ends at 1500 ft (or higher if obstacles require) because by then the engine-out transition is complete: clean configuration, final segment speed, maximum continuous thrust, a climb sustainable indefinitely. The takeoff obstacle rules then hand over to enroute rules.

**66. What are the pressure instruments and how do they work?** `Instruments` `oral-inst-07`

Three instruments live off the pitot static system, and each uses the two pressures differently. The altimeter uses static pressure alone: a sealed capsule expands as the static pressure around it falls with altitude, and the mechanism converts that into an altitude reading against whatever datum is set in the subscale, QNH, QFE or standard. The vertical speed indicator also uses only static pressure, but it measures how fast it is changing: static pressure feeds a capsule directly but reaches the case around it through a calibrated leak, so during a climb or descent a pressure difference exists between capsule and case that is proportional to the rate of change, giving rate of climb or descent; it lags slightly by design. The airspeed indicator is the one that needs both sources: it compares pitot pressure, which is static plus dynamic, against static pressure, and the difference, the dynamic pressure, is displayed as indicated airspeed. That division of labour is also the failure logic: a static problem upsets all three, a pitot problem only the ASI.

Spoken answer skeleton:

- Altimeter: static only, capsule expands as pressure falls, read against the set datum
- VSI: rate of static change, capsule against a calibrated leak, slight lag
- ASI: pitot minus static, displaying dynamic pressure as IAS
- Static fault upsets all three; pitot fault only the ASI

Multiple choice:

- The compass, the clock and the fuel gauge
- **The altimeter (static), the VSI (rate of static change) and the ASI (pitot minus static)** <- marked answer
- The attitude indicator, heading indicator and turn coordinator
- The EGT, N1 and fuel flow gauges

Flashcard answer: The altimeter (static pressure against a set datum), the VSI (rate of change of static pressure via a calibrated leak) and the ASI (pitot minus static, showing dynamic pressure as IAS). A static failure affects all three; a pitot failure only the ASI.

**67. Explain the pitot system and which pressure it uses.** `Instruments` `oral-inst-08`

The pitot tube is an open-ended probe facing straight into the airflow, mounted where the air arrives clean, on the forward fuselage or a boom. Because the moving air is brought to rest inside it, the tube senses total pressure, also called pitot or stagnation pressure: the static pressure of the air plus the dynamic pressure of its motion. That total on its own is not airspeed; the useful quantity is the dynamic part, so the airspeed indicator, and in a modern aircraft the air data computer, subtracts the static pressure measured at the static ports from the pitot total, and what remains, the dynamic pressure, is displayed as indicated airspeed. Details that matter operationally: the probes are electrically heated because a pitot icing over is the classic cause of unreliable airspeed, drain holes deal with water, and airliners carry multiple independent probes feeding captain, first officer and standby instruments precisely so one bad probe can be voted out and identified.

Spoken answer skeleton:

- Open tube facing the airflow; the air is brought to rest in it
- So it senses total pressure: static plus dynamic
- ASI or air data computer subtracts static from it
- The remainder, dynamic pressure, is shown as IAS
- Heated against icing, drained, and fitted in independent sets

Multiple choice:

- **A forward facing probe sensing total pressure, static plus dynamic; subtracting static pressure leaves the dynamic pressure shown as airspeed** <- marked answer
- A downward facing port sensing static pressure only, used for altitude
- A heated vane measuring the angle of attack
- A venturi that generates suction for the gyro instruments

Flashcard answer: The pitot tube faces the airflow and senses total (stagnation) pressure: static plus dynamic. The ASI or air data computer subtracts static pressure from it, leaving dynamic pressure, displayed as IAS. Probes are heated, drained and duplicated.

**68. What is GPWS and what are its modes?** `Instruments` `oral-inst-09`

GPWS, the ground proximity warning system, exists to prevent controlled flight into terrain: a serviceable aircraft flown unawares into the ground. The classic system works mainly from the radio altimeter and air data, watching how the ground is approaching, and it speaks in modes. Mode 1: excessive descent rate near the ground, "sink rate", escalating to "pull up". Mode 2: excessive closure rate with rising terrain, "terrain, terrain". Mode 3: altitude loss after takeoff or go-around, "don't sink". Mode 4: insufficient terrain clearance while not configured to land, "too low, gear" or "too low, flaps". Mode 5: dropping below the ILS glideslope, "glideslope". Mode 6 adds altitude callouts and bank angle warnings, and mode 7 is windshear alerting. The big limitation of classic GPWS is that a radio altimeter only looks straight down, so it is blind to a wall ahead; EGPWS fixed that by adding a terrain database and GPS position, looking ahead along the flight path and painting terrain on the display. The rule it exists for: a genuine "pull up" gets the full escape manoeuvre, immediately, no debate.

Spoken answer skeleton:

- Protection against controlled flight into terrain, built on the radio altimeter
- Mode 1 sink rate, mode 2 terrain closure, mode 3 altitude loss after takeoff
- Mode 4 too low not configured, mode 5 below glideslope
- Mode 6 callouts and bank angle, mode 7 windshear
- EGPWS adds a terrain database and looks ahead, not just down
- A real pull up warning means the escape manoeuvre, immediately

Multiple choice:

- A system warning of traffic conflicts, with modes TA and RA
- **A terrain warning system with modes for sink rate, terrain closure, altitude loss after takeoff, unsafe clearance, glideslope, callouts and windshear** <- marked answer
- An autoland system with three approach modes
- A weather radar with map, weather and turbulence modes

Flashcard answer: GPWS guards against controlled flight into terrain using the radio altimeter. Modes: 1 sink rate, 2 terrain closure, 3 altitude loss after takeoff, 4 unsafe clearance not configured, 5 below glideslope, 6 callouts and bank angle, 7 windshear. EGPWS adds a terrain database to look ahead. A pull up warning demands the immediate escape manoeuvre.

**69. What is TCAS? What is a TA and what is an RA?** `Instruments` `oral-inst-10`

TCAS, the traffic collision avoidance system, is the aircraft's own last line of defence against mid-air collision, deliberately independent of ATC. It interrogates the transponders of aircraft around it, works out their range, bearing and relative altitude, and projects whether any of them will pass dangerously close. Its two levels of alert do different jobs. A TA, traffic advisory, is attention: "traffic, traffic", the intruder turns amber on the display, and your job is to look and prepare, not to manoeuvre. An RA, resolution advisory, is command: the system has decided a collision risk is real, typically some tens of seconds from the closest point, and it orders a vertical escape, "climb, climb" or "descend, descend", with the required rate shown. RAs between two TCAS aircraft are coordinated through the transponder link so they choose opposite senses. The rules that make it work: follow the RA immediately and exactly, even against an ATC instruction, tell ATC as soon as possible, and RAs are inhibited close to the ground where the escape logic no longer makes sense.

Spoken answer skeleton:

- Independent collision avoidance, via transponder interrogation
- Builds range, bearing, relative altitude and closure of surrounding traffic
- TA: traffic traffic, look and prepare, do not manoeuvre
- RA: commanded vertical escape, climb or descend, coordinated between aircraft
- Follow the RA even against ATC, then report; inhibited near the ground

Multiple choice:

- A ground radar service that separates traffic in busy airspace
- **A collision avoidance system interrogating transponders; a TA alerts you to traffic, an RA commands a coordinated vertical avoidance manoeuvre** <- marked answer
- A navigation system showing traffic on the moving map only
- An ATC frequency dedicated to traffic information

Flashcard answer: TCAS interrogates nearby transponders and predicts collision threats independently of ATC. A TA ("traffic, traffic") means look and prepare; an RA commands a vertical escape ("climb" or "descend"), coordinated with the other aircraft, and must be followed immediately even against ATC instructions.

**70. What is TAT and what is SAT?** `Instruments` `oral-inst-11`

SAT, static air temperature, is the actual temperature of the undisturbed air the aircraft is flying through, the true outside air temperature. TAT, total air temperature, is what a probe on a fast aircraft actually measures, and it is always warmer. The reason is compression: the probe brings the oncoming air to rest, and compressing air heats it, so the sensor feels the static temperature plus a ram rise. The faster you fly, the bigger the rise; it grows with the square of Mach number, and at typical jet cruise speeds it is on the order of 25 to 30 degrees, roughly. So the chain on a modern aircraft is: the TAT probe measures total temperature, the air data computer knows the Mach number, and it computes SAT by removing the ram rise. SAT is what matters for meteorology, ISA deviation and true airspeed calculations; TAT is what matters at the probe, and, operationally, TAT is the temperature used for engine anti-ice decisions in many types since it is what the surfaces exposed to the airflow feel.

Spoken answer skeleton:

- SAT: the true temperature of the undisturbed air
- TAT: what the probe measures, SAT plus ram rise from compression
- Ram rise grows with Mach squared; roughly 25 to 30 degrees at jet cruise
- ADC removes the ram rise using Mach to compute SAT
- SAT for met and TAS; TAT is what exposed surfaces feel

Multiple choice:

- TAT is the temperature at takeoff; SAT is the temperature on a Saturday
- SAT is the cabin temperature; TAT is the cargo hold temperature
- **SAT is the true outside air temperature; TAT is SAT plus the ram rise from bringing the air to rest at the probe** <- marked answer
- TAT is always colder than SAT because of altitude

Flashcard answer: SAT is the actual temperature of the undisturbed air. TAT is what the probe measures: SAT plus the ram rise from compressing the oncoming air to rest, growing with Mach squared, roughly 25 to 30 degrees at jet cruise. The air data computer derives SAT from TAT and Mach.

**71. What is QNH and what is QFE?** `Instruments` `oral-inst-12`

Both are altimeter subscale settings, and the difference is simply which surface the altimeter reads zero, or its reference, from. QNH is the aerodrome pressure reduced to mean sea level: set it and the altimeter reads altitude above sea level, so on the runway it shows the published airfield elevation. That is the setting for terminal operations, because charted altitudes, airfield elevations and obstacle heights are all above sea level. QFE is the actual pressure at the aerodrome reference point: set it and the altimeter reads height above that aerodrome, zero on the runway. Some training environments and air forces like it for circuits, but airline flying uses QNH. The third member of the family is the standard setting, 1013.25 hPa, set climbing through the transition altitude, above which everyone flies flight levels on the same datum so that separation does not depend on local pressure. The classic gotcha to mention: flying from high pressure towards low on a fixed setting, the altimeter over-reads, you are lower than it says: high to low, look out below.

Spoken answer skeleton:

- Both are altimeter datum settings
- QNH: aerodrome pressure reduced to sea level; altimeter reads altitude, elevation on the runway
- QFE: actual aerodrome pressure; altimeter reads height above the field, zero on the runway
- Standard 1013 above transition altitude for flight levels
- High to low, look out below

Multiple choice:

- **QNH makes the altimeter read altitude above sea level; QFE makes it read height above the aerodrome, zero on the runway** <- marked answer
- QNH is the temperature setting; QFE is the wind setting
- QNH reads zero on the runway; QFE reads the airfield elevation on the runway
- They are radio frequencies for the tower and approach

Flashcard answer: QNH is aerodrome pressure reduced to sea level: the altimeter reads altitude, showing airfield elevation on the ground. QFE is the actual aerodrome pressure: the altimeter reads height above the field, zero on the runway. Above the transition altitude everyone sets standard, 1013.25, for flight levels.

**72. What is the major reason for weather changes?** `Meteorology` `oral-met-13`

Strip everything else away and the engine of all weather is the sun heating the earth unevenly. The equator receives far more solar energy than the poles, land heats and cools faster than sea, and deserts behave differently from forests. That uneven heating creates temperature differences, temperature differences create pressure differences, and pressure differences set air moving: wind, and the great circulations that carry warm air poleward and cold air back. Layer onto that the earth's rotation, which twists the moving air through the Coriolis effect, and water, which evaporates, condenses and carries huge amounts of latent heat around the system, and you have everything: air masses forming over different regions, fronts where they collide, lows and highs, jetstreams along the strongest temperature contrasts. So when the question comes, the clean answer is: unequal heating of the earth's surface by the sun; everything else in meteorology is the atmosphere's machinery for redistributing that heat.

Spoken answer skeleton:

- Unequal solar heating of the earth's surface
- Equator gets more energy than the poles; land and sea heat differently
- Temperature differences make pressure differences, which make wind
- Rotation adds Coriolis; moisture carries latent heat around
- Air masses, fronts, jets: all machinery for redistributing that heat

Multiple choice:

- The phases of the moon changing the tides
- **The unequal heating of the earth's surface by the sun, driving pressure differences and air movement** <- marked answer
- Volcanic activity warming the atmosphere from below
- Aircraft traffic mixing the upper atmosphere

Flashcard answer: Unequal heating of the earth's surface by the sun. It creates temperature and hence pressure differences that set air moving; with the earth's rotation and water's latent heat, that produces winds, air masses, fronts and all weather.

**73. What is the air composed of?** `Meteorology` `oral-met-14`

Dry air is a remarkably constant mixture: about 78 percent nitrogen, about 21 percent oxygen, a little under 1 percent argon, and then traces, carbon dioxide among them, all by volume. Those proportions hold essentially unchanged through the altitudes we fly at; what changes as you climb is not the recipe but the density, and with it the partial pressure of each ingredient. That is the aeromedical point hiding in this question: hypoxia at altitude is not the oxygen fraction falling, it is still 21 percent up there, it is the total pressure falling so far that 21 percent of it no longer pushes enough oxygen into the blood. The other component worth naming is the variable one: water vapour, anywhere from almost nothing over a desert to a few percent in tropical air. It is the joker in the pack, because it is what condenses into cloud, fuels storms with latent heat, and drives most of what we call weather.

Spoken answer skeleton:

- About 78 percent nitrogen, 21 percent oxygen, about 1 percent argon, plus traces
- Proportions stay the same with altitude; density and partial pressure fall
- Hypoxia is falling pressure, not a falling oxygen fraction
- Water vapour is the variable extra, up to a few percent
- The water is what makes the weather

Multiple choice:

- Mostly oxygen, with some nitrogen and helium
- Equal parts oxygen and nitrogen
- **About 78 percent nitrogen, 21 percent oxygen, about 1 percent argon plus traces, with variable water vapour** <- marked answer
- Mostly carbon dioxide with a little oxygen

Flashcard answer: About 78 percent nitrogen, 21 percent oxygen, roughly 1 percent argon and trace gases, plus variable water vapour. The mix stays constant with altitude; what falls is pressure, which is why hypoxia happens even though the oxygen fraction is unchanged.

**74. What causes wind? Explain pressure gradient and Coriolis.** `Meteorology` `oral-met-15`

Wind is air set moving by pressure differences. Wherever pressure is uneven, a force acts on the air from the high pressure side towards the low: the pressure gradient force, and the tighter the isobars are packed, the stronger it is and the stronger the wind. If the earth did not rotate, air would simply flow straight from high to low and fill it in. But the earth does rotate, and any air on a long journey across it is deflected: to the right in the northern hemisphere, to the left in the southern. That apparent force is the Coriolis effect, zero at the equator and strongest at the poles. Aloft, the two forces come into balance: the pressure gradient pushing towards the low, Coriolis pulling the moving air aside, and the result is the geostrophic wind, blowing not from high to low but along the isobars, low pressure on the left in the northern hemisphere, which is Buys Ballot's law seen from the cockpit. Near the surface, friction disturbs this balance, slowing the wind and letting it cut across the isobars towards the low.

Spoken answer skeleton:

- Pressure differences push air: the pressure gradient force, high towards low
- Tighter isobars, stronger force, stronger wind
- Coriolis, from the earth's rotation, deflects moving air: right in the north
- Aloft the two balance: geostrophic wind along the isobars
- Low on the left in the northern hemisphere; friction near the surface angles it into the low

Multiple choice:

- **Pressure differences accelerate air from high to low, and the Coriolis effect from the earth's rotation deflects it until the wind flows along the isobars** <- marked answer
- The earth's rotation drags the atmosphere around with it, creating all wind
- Temperature alone moves the air, with pressure playing no part
- The tides of the ocean pull the air along with them

Flashcard answer: Pressure differences create the pressure gradient force pushing air from high to low; the Coriolis effect of the rotating earth deflects the moving air (right in the northern hemisphere) until, aloft, the balance leaves the geostrophic wind blowing along the isobars, low pressure on the left in the north.

**75. Why are isobars more parallel at altitude and less so near the ground?** `Meteorology` `oral-met-16`

Really this is a question about what disturbs the clean balance of forces. Aloft, away from the surface, only two forces matter: the pressure gradient force and Coriolis. They settle into the geostrophic balance, the wind runs smoothly along the isobars, and the pressure pattern itself is smooth, broad highs and lows and long waves, so the isobars, and the flow following them, look clean and parallel. Near the ground that tidiness is broken up. Friction with the surface slows the wind, which weakens the Coriolis deflection and lets the wind cut across the isobars towards low pressure, at an angle of very roughly 10 to 30 degrees, more over rough land than over sea. And the surface itself stamps small-scale structure into the pressure field: uneven heating brewing local circulations like sea breezes, terrain steering and blocking the flow, and the general turbulence of the boundary layer. So the lower picture is inherently messier: the balance is disturbed by friction, and the pattern is disturbed by the surface.

Spoken answer skeleton:

- Aloft: only pressure gradient and Coriolis, in clean geostrophic balance
- Wind and isobars run smooth and parallel
- Near the ground, friction slows the wind and weakens Coriolis
- So the wind cuts across the isobars towards the low, roughly 10 to 30 degrees
- Surface heating and terrain add messy local structure to the pattern

Multiple choice:

- Because pressure does not exist near the ground
- Because aircraft flying at altitude smooth the isobars out
- **Because aloft the flow is in clean geostrophic balance, while surface friction, heating and terrain disturb both the wind and the pressure pattern near the ground** <- marked answer
- Because the isobars are drawn by different forecasters at each level

Flashcard answer: Aloft the wind is in clean geostrophic balance, pressure gradient against Coriolis, so flow and isobars are smooth and parallel. Near the surface, friction slows the wind and angles it across the isobars towards the low, and surface heating and terrain stamp messy local structure into the pattern.

**76. What is stability, what makes air stable, and which clouds form in each case?** `Meteorology` `oral-met-17`

Stability describes what the atmosphere does to a parcel of air that gets nudged upward. Lift the parcel and it cools adiabatically, at the DALR while dry, the SALR once saturated. The question is how its temperature then compares with the surrounding air, which cools with height at the environmental lapse rate. If the lifted parcel ends up colder than its surroundings, it is denser, and it sinks back: stable air. That happens when the ELR is small, less than the SALR; inversions, where temperature actually rises with height, are the extreme case. If the parcel stays warmer than its surroundings, it is buoyant and keeps accelerating upward: unstable air, which needs a steep ELR, greater than the DALR. In between, conditionally unstable air is stable while dry but unstable once condensation begins releasing latent heat. The clouds follow directly: stable air gives layered, stratiform cloud, steady precipitation, smooth but grey flying, and traps haze and fog beneath inversions; unstable air gives heaped, cumuliform cloud, showers, thermals and turbulence, cumulus through to CB when moisture and depth allow.

Spoken answer skeleton:

- Stability: what happens to a lifted parcel of air
- Parcel cools at DALR dry, SALR saturated; compare with the ELR
- Ends up colder than surroundings: sinks back, stable; inversions extreme
- Stays warmer: keeps rising, unstable; conditional in between
- Stable gives stratiform and steady rain; unstable gives cumuliform, showers, CB

Multiple choice:

- Stability is the strength of the wind; strong winds make stratus
- **Stability is whether a lifted parcel sinks back or keeps rising; stable air forms stratiform cloud, unstable air forms cumuliform cloud** <- marked answer
- Stability is the aircraft's handling quality in turbulence; clouds are unrelated
- Stability is constant pressure with height; all clouds need unstable air

Flashcard answer: Stability is whether a lifted parcel of air sinks back (stable: parcel colder than surroundings, small ELR or an inversion) or keeps rising (unstable: parcel stays warmer, ELR steeper than the DALR). Stable air builds stratiform cloud and steady precipitation; unstable air builds cumuliform cloud, showers and CB.

**77. What is an air mass?** `Meteorology` `oral-met-18`

An air mass is a huge body of air, spanning hundreds or thousands of kilometres, whose temperature and humidity are fairly uniform horizontally at any level. It gets that way by sitting: air that stagnates over a large, consistent region, a source region, gradually takes on that region's character. Air parked over the arctic becomes cold and dry; over a tropical ocean, warm and moist. The classification simply names the source: polar or tropical for temperature (with arctic as the extreme), maritime or continental for moisture, giving the working set: polar maritime, polar continental, tropical maritime, tropical continental. The reason pilots care is that an air mass carries its weather with it as it moves, modified by whatever it crosses: tropical maritime air arriving over cooler ground brings low cloud, drizzle and fog risk; polar maritime air warmed from below turns unstable and showery; tropical continental air brings heat, haze and dust. And where two different air masses meet, they do not blend politely: the boundary is a front, with its own chapter of weather.

Spoken answer skeleton:

- A vast body of air with fairly uniform temperature and humidity horizontally
- Formed by stagnating over a source region and taking its character
- Named by source: polar or tropical, maritime or continental
- Carries its weather as it moves, modified along the way
- Boundaries between air masses are fronts

Multiple choice:

- The total weight of the atmosphere above an airport
- **A large body of air with fairly uniform temperature and humidity, shaped by its source region, carrying its weather as it moves** <- marked answer
- A single large cloud covering a whole country
- The block of air displaced by an aircraft in flight

Flashcard answer: A vast body of air with fairly uniform horizontal temperature and humidity, acquired by stagnating over a source region: polar or tropical, maritime or continental. It carries its characteristic weather as it moves, and the boundary where two air masses meet is a front.

**78. What are the types of icing?** `Meteorology` `oral-met-19`

Airframe icing comes from supercooled water: liquid droplets colder than zero that freeze onto whatever hits them. Clear ice, or glaze, is the nasty one: large supercooled drops, typically in cumuliform cloud or freezing rain, spread back over the surface before freezing into a heavy, transparent, hard-to-see sheet that distorts the wing profile and can extend beyond the protected areas; freezing rain ahead of a warm front is its worst case. Rime ice comes from small droplets that freeze instantly on impact, trapping air: white, brittle, opaque, building forward into the airflow on leading edges; lighter than clear ice but still a lift-killer. Mixed ice is both together, common where drop sizes vary. Beyond those three, hoar frost forms by sublimation on a cold-soaked airframe in moist clear air, on the ground or descending into warm moist air, and engine icing, including piston carburettor icing which can occur well above freezing, has its own rules. Icing is generally a threat from around zero down to about minus 20, roughly, with the big supercooled drops, and the worst accretion, nearer the warm end of that band.

Spoken answer skeleton:

- From supercooled liquid droplets freezing on impact
- Clear ice: large drops spread then freeze; heavy, transparent, worst in freezing rain
- Rime: small drops freeze instantly; white, brittle, on leading edges
- Mixed: both together
- Plus hoar frost by sublimation, and engine or carb icing
- Roughly zero to minus 20 band, worst near the warm end

Multiple choice:

- **Clear ice, rime ice and mixed ice from supercooled droplets, plus hoar frost and engine icing** <- marked answer
- Dry ice, wet ice and packed ice
- Only carburettor icing affects aircraft
- Snow, hail and sleet on the runway

Flashcard answer: Clear (glaze) ice from large supercooled drops spreading before freezing, worst in freezing rain; rime ice from small drops freezing instantly, white and brittle on leading edges; mixed ice combining both; plus hoar frost by sublimation and engine or carburettor icing. Main band roughly 0 to minus 20.

**79. What are the types of fronts and what weather does each bring?** `Meteorology` `oral-met-20`

A front is the boundary where two different air masses meet, and its type is named for which one is winning. A warm front is warm air advancing over retreating cold air, sliding up a very shallow slope, so its weather announces itself far in advance: cirrus first, the cloud thickening and lowering through cirrostratus and altostratus to nimbostratus, with prolonged steady rain, poor visibility, a low cloud base, and frontal fog possible ahead of it; icing in the layered cloud, and freezing rain possible where rain falls into cold air below. A cold front is cold air driving under warm air, a steep and faster boundary: the lifting is abrupt, giving a narrower band of heavier weather, convective cloud up to CB, showers, squalls and thunderstorms, then a sharp wind veer, a temperature drop and rapidly clearing, brighter, showery air behind. An occluded front is a cold front that has caught the warm front up, lifting the warm air off the ground: a mix of both characters. A stationary front barely moves, with the boundary and its dreary weather lingering. Crossing any front, expect a wind shift and a pressure trough.

Spoken answer skeleton:

- A front is the boundary between two air masses
- Warm front: shallow slope, cloud lowering for hours, long steady rain, poor vis
- Cold front: steep and fast, CB and showers, squalls, then clearing behind
- Occlusion: cold front catches the warm one, mixed character
- Stationary: barely moves, weather lingers
- Any front: wind shift and a pressure trough

Multiple choice:

- Sea fronts, land fronts and mountain fronts, named for the surface below
- **Warm (layered cloud, long steady rain), cold (convective cloud, showers then clearing), occluded (mixed) and stationary (lingering) fronts** <- marked answer
- High fronts and low fronts, named for their altitude
- Only cold fronts exist; warm air cannot form a boundary

Flashcard answer: Fronts are air mass boundaries. Warm front: shallow, slow, layered cloud thickening to nimbostratus, prolonged steady rain, poor visibility. Cold front: steep, fast, convective cloud and showers or thunderstorms, then clearing. Occluded: the two combined. Stationary: persistent lingering weather. All bring a wind shift.

**80. What is a temperature inversion and what is an isotherm?** `Meteorology` `oral-met-21`

Normally temperature falls as you climb through the troposphere. A temperature inversion is a layer where that reverses: temperature increases with height through the layer. Inversions form several ways: radiation inversions on clear calm nights as the ground chills the air touching it; subsidence inversions under highs, where descending air warms and caps the layer below; and frontal inversions where warm air lies over cold. Whatever the cause, an inversion is an extremely stable lid: it traps haze, smoke, moisture and pollution beneath it, giving that murky brown layer with sparkling clear air above, and it can hold fog down through a morning. For handling, the air is smooth, but the top of an inversion is a shear surface: wind can jump in speed and direction crossing it, and a nocturnal low-level jet can sit just above one, so expect possible shear climbing or descending through. An isotherm is simpler: a line on a chart joining points of equal temperature, exactly as isobars join equal pressure; and an isothermal layer is one where temperature holds constant with height, itself very stable.

Spoken answer skeleton:

- Inversion: a layer where temperature rises with height instead of falling
- From night radiation, subsidence under highs, or warm air over cold
- Very stable lid: traps haze, smog, fog beneath it
- Shear possible at its top, including nocturnal low level jets
- Isotherm: a chart line of equal temperature; isothermal layer: constant with height

Multiple choice:

- **An inversion is a layer where temperature increases with height, acting as a stable lid; an isotherm is a line of equal temperature on a chart** <- marked answer
- An inversion is upside-down cloud; an isotherm is a thermometer error
- An inversion is a wind reversal at the surface; an isotherm is a line of equal wind speed
- An inversion is falling pressure; an isotherm is a line of equal humidity

Flashcard answer: A temperature inversion is a layer where temperature rises with height, a very stable lid that traps haze and fog and can hide windshear or a low-level jet at its top. An isotherm is a line joining points of equal temperature on a chart; an isothermal layer holds constant temperature with height.

**81. High pressure versus low pressure: which is good and which is bad?** `Meteorology` `oral-met-22`

The broad answer: high pressure is the good one for flying, low pressure the troublemaker, with one seasonal caveat worth naming. In a high, an anticyclone, air is slowly subsiding, warming as it descends, which suppresses cloud growth and often builds a subsidence inversion: the result is settled weather, light winds, little vertical development. In a low, a depression, air converges and rises, and rising air is the raw material of weather: cloud, precipitation, fronts swinging around the centre, stronger winds around the tighter pressure gradient, and in unstable air, showers and thunderstorms. The caveat on highs: that same subsidence inversion that keeps the sky clear also traps moisture and dirt in the lowest layer, so winter anticyclones deliver the classic persistent fog or a grim grey lid of stratus that can sit for days, and in this part of the world a stagnant high traps dust and haze. So: highs mean settled conditions but watch visibility under the inversion; lows mean active weather, wind and cloud, and that is where most of the operational challenges live.

Spoken answer skeleton:

- High: descending air, warming, cloud suppressed, settled, light winds
- Generally the good one for flying
- But its inversion traps fog, stratus, dust and haze, especially in winter
- Low: converging, rising air: cloud, rain, fronts, stronger wind
- Generally the bad one: active weather lives in lows

Multiple choice:

- Lows give settled clear weather; highs bring storms
- **Highs generally give settled weather from subsiding air, though fog and haze can be trapped under the inversion; lows give rising air, cloud, precipitation and wind** <- marked answer
- Both give identical weather; pressure only matters to the altimeter
- Highs always mean strong winds; lows always mean calm

Flashcard answer: High pressure: subsiding, warming air suppresses cloud, settled weather and light winds, but the inversion can trap fog, stratus and haze, especially in winter. Low pressure: converging, rising air builds cloud, precipitation, fronts and wind. Broadly, highs good, lows bad.

**82. What are the lifting mechanisms?** `Meteorology` `oral-met-23`

Cloud needs moist air lifted and cooled, so the lifting mechanisms are simply the list of things that can force air upward, and it is worth being able to reel them off. Convection: the sun heats the surface, the surface heats the air touching it, and buoyant thermals rise, the daytime engine of cumulus and, with enough instability and moisture, thunderstorms. Orographic lifting: wind meets rising terrain and has no choice but to climb it, giving hill fog, lee waves and, on the windward side, enhanced cloud and rain. Frontal lifting: at a warm front the warm air slides up over the cold wedge, at a cold front it is shoved upward, either way large-scale lifting along the boundary. Convergence: where airflows meet, over a low centre, along a sea breeze front, in the intertropical convergence zone, the accumulating air can only go up. Some lists add turbulent or mechanical mixing, the stirring of the lowest layer over rough ground, which can lift moist air to condensation and form stratus. Whether the lifted air keeps going is then the stability question.

Spoken answer skeleton:

- Convection: surface heating, buoyant thermals
- Orographic: wind forced up rising terrain
- Frontal: air lifted along an air mass boundary
- Convergence: airflows meeting, with nowhere to go but up
- Plus turbulent mixing of the lowest layer
- Stability then decides whether the lifted air keeps rising

Multiple choice:

- **Convection, orographic lifting, frontal lifting and convergence** <- marked answer
- Gravity, magnetism and friction
- Evaporation, condensation and precipitation
- Jetstreams, trade winds and sea breezes only

Flashcard answer: The ways air gets forced upward: convection from surface heating, orographic lifting over terrain, frontal lifting along air mass boundaries, and convergence where airflows meet, plus turbulent mixing of the lowest layer. Stability decides what the lifted air does next.

**83. What is a Foehn wind?** `Meteorology` `oral-met-24`

A Foehn wind is the warm, dry wind that pours down the lee side of a mountain range, and it is a beautiful application of the two lapse rates. Moist air is forced up the windward slope, cooling at the dry rate until it saturates, then at the slower saturated rate, around 1.8 degrees per 1000 ft, because condensation is releasing latent heat; the moisture falls out as cloud and rain on the windward side. Coming down the far slope, the now-dried air warms at the full dry rate, 3 degrees per 1000 ft, the whole way down. Slow cooling up, fast warming down: the air arrives in the lee valley markedly warmer and much drier than it started at the same level on the other side. The lee side gets sudden temperature rises, very low humidity, cloudless skies, rapid snowmelt and fire risk; for flying, expect turbulence and mountain wave activity to leeward, while the windward side sits under cloud and rain. The Chinook of the Rockies is the same wind by another name.

Spoken answer skeleton:

- Warm dry wind descending the lee side of mountains
- Air climbs the windward side: DALR, then SALR once saturated, rain falls out
- Descends the lee side warming at the full DALR
- Slow cooling up, fast warming down: arrives warmer and drier
- Lee side: warmth, clear skies, turbulence and mountain waves

Multiple choice:

- A cold damp wind blowing up the windward slope
- A sea breeze that reverses at night
- **A warm dry wind descending the lee of mountains, after moisture is lost windward and the air warms at the dry rate coming down** <- marked answer
- The outflow from a dissipating thunderstorm

Flashcard answer: A warm, dry wind descending the lee of a mountain range: air cools at the slower saturated rate going up (raining out its moisture), then warms at the full dry rate coming down, arriving warmer and drier. Expect lee-side warmth, clear skies, turbulence and mountain waves.

**84. What are oktas, and what is the difference between cloud base and cloud top?** `Meteorology` `oral-met-25`

Oktas are the units of cloud amount: the sky is treated as eight slices, and the report says how many are covered. The reporting bands are the ones you see in every METAR: FEW is 1 to 2 oktas, scattered 3 to 4, broken 5 to 7, overcast the full 8, and sky clear is zero. The operationally loaded word is broken: 5 oktas or more counts as a ceiling, which is what your approach minima conversations are about. Cloud base and top are simply the two surfaces of the cloud layer: the base is the height of its lowest part, and in METARs and TAFs it is given above aerodrome level, which is what matters when you break out on an approach; the top is the upper surface, which reports generally do not give you, though forecast charts and pilots do. The gap between them, the cloud's depth, is worth respecting: a deep cloud from a low base to a high top is a lot of climbing or descending inside cloud, with the icing band likely somewhere in it.

Spoken answer skeleton:

- Oktas: cloud amount in eighths of the sky
- FEW 1 to 2, SCT 3 to 4, BKN 5 to 7, OVC 8
- Broken or more is a ceiling, the number that bites on approaches
- Base: lowest surface, reported above aerodrome level
- Top: upper surface, from charts and pilot reports, not METARs

Multiple choice:

- Oktas measure visibility in kilometres; base and top are runway markings
- **Oktas are eighths of sky covered by cloud; the base is the lowest surface of a layer, reported above aerodrome level, and the top is its upper surface** <- marked answer
- Oktas are wind speeds in eights of a knot; base and top are pressure levels
- Oktas count the number of cloud layers; base and top are the first and last layers

Flashcard answer: Oktas are eighths of sky covered: FEW 1 to 2, SCT 3 to 4, BKN 5 to 7 (a ceiling), OVC 8. Cloud base is the lowest surface of the layer, reported above aerodrome level; the top is its upper surface, known from charts and pilot reports rather than METARs.

**85. Do stratus clouds produce precipitation?** `Meteorology` `oral-met-26`

Very little, and knowing why is the real answer. Stratus is a shallow, layered cloud of stable air, formed by gentle lifting or mixing, and its droplets stay small because there are no strong updrafts to keep them suspended long enough to grow. Small droplets fall out as drizzle at most, or snow grains in the cold; you will not get proper rain out of genuine stratus. If steady, persistent rain is falling from a grey layered sky, the cloud doing the work is nimbostratus, the thick, deep rain-bearing layer of a warm front, often with ragged stratus beneath it catching the blame. And if the precipitation is showery, starting and stopping with conviction, it is coming from convective cloud, cumulus congestus or CB, regardless of what else is in the sky. That is the tidy rule of thumb: drizzle from stratus, steady rain from nimbostratus, showers from convective cloud. Operationally stratus is less about precipitation and more about ceilings: a low sheet of it is what turns an approach into a minima discussion.

Spoken answer skeleton:

- At most drizzle, or snow grains: not proper rain
- Stable, shallow cloud, weak lifting, so droplets stay small
- Steady rain from a layered sky is nimbostratus doing the work
- Showers come from convective cloud
- Stratus's real operational issue is low ceilings

Multiple choice:

- Yes, stratus gives heavy showers and thunderstorms
- Yes, stratus produces the steadiest heavy rain of any cloud
- **At most drizzle or snow grains; steady rain comes from nimbostratus and showers from convective cloud** <- marked answer
- No cloud type produces precipitation except cumulonimbus

Flashcard answer: Genuine stratus gives at most drizzle or snow grains: its stable, shallow structure keeps droplets too small for rain. Steady rain from a layered sky is nimbostratus; showery precipitation is convective cloud. Stratus's real menace is the low ceiling.

**86. What is a gust and how does it appear in a METAR?** `Meteorology` `oral-met-27`

A gust is a brief, sharp increase in wind speed above the mean, lasting seconds, caused by turbulence in the airflow near the surface: mechanical stirring over rough ground, thermals punching through, or the outflow of convective weather. In a METAR the wind group carries it after a G: 24015G28KT reads as wind from 240 at a mean of 15 knots, gusting 28. The convention is that gusts are appended when they exceed the mean speed by a meaningful margin, 10 knots or more being the usual reporting criterion, so the presence of a G in the report is itself information: the wind is not steady, expect it to be rough down low. Operationally, gusts feed the crosswind assessment, since the gust value against the limit is the conservative check, and they shape the approach: the classic technique is carrying a speed additive based on part of the gust factor, per the aircraft's procedures, and expecting the airspeed swings and late-flare lurch that gusty air delivers.

Spoken answer skeleton:

- A brief sharp jump of wind speed above the mean, seconds long
- From low level turbulence, thermals or convective outflow
- METAR: after a G, like 24015G28KT, mean 15 gusting 28
- Reported when gusts exceed the mean by around 10 kt or more
- Use the gust for crosswind checks and speed additives on approach

Multiple choice:

- A wind that blows for exactly one hour, shown as W in the METAR
- **A brief sharp increase of wind above the mean, shown after a G in the wind group, like 24015G28KT** <- marked answer
- The average wind over the day, shown at the end of the METAR
- A change of wind direction only, shown with a V between directions

Flashcard answer: A gust is a brief sharp increase in wind speed above the mean, from low-level turbulence or convective outflow. In a METAR it follows a G in the wind group: 24015G28KT means mean 15 kt gusting 28, appended when gusts exceed the mean by roughly 10 kt or more. Use gust values for crosswind checks and approach additives.

**87. What is a cyclone?** `Meteorology` `oral-met-28`

The word has a general meaning and a fiercer specific one, and a good answer gives both. Generally, a cyclone is simply a region of low pressure with the air circulating around it, anticlockwise in the northern hemisphere and clockwise in the southern, converging and rising at the centre; in that sense every mid-latitude depression crossing Europe is a cyclone, with its fronts, cloud and rain, and the anticyclone is its settled opposite. The specific meaning is the tropical cyclone: an intense, warm-cored storm born over very warm ocean, feeding on the latent heat of evaporated seawater, with sustained winds above hurricane force, spiral bands of CB, torrential rain and a calm central eye ringed by the violent eyewall. It is the same beast called a hurricane in the Atlantic, a typhoon in the northwest Pacific, and a cyclone in the Indian Ocean and around Arabia, which is the name relevant to this region. Operationally a tropical cyclone is a no-go area: aviation responds by rerouting broadly around it and airports in its path shut down.

Spoken answer skeleton:

- General: a low pressure system with air circulating and rising, anticlockwise in the north
- The everyday depression with fronts, cloud and rain
- Specific: the tropical cyclone, an intense warm-cored ocean storm
- Hurricane force winds, spiral CB bands, torrential rain, a calm eye
- Same storm: hurricane, typhoon, or cyclone around the Indian Ocean

Multiple choice:

- A region of high pressure with descending air and clear skies
- **A low pressure system with circulating rising air; in the tropics, an intense warm-cored storm with hurricane force winds** <- marked answer
- A line of thunderstorms along a cold front only
- A rotating dust devil on a hot airfield

Flashcard answer: Generally, a low pressure system with air circulating (anticlockwise in the northern hemisphere) and rising: the ordinary depression. Specifically, a tropical cyclone: an intense warm-cored storm over warm ocean with hurricane-force winds, spiral CB bands and an eye; called hurricane, typhoon or cyclone by region.

**88. What is latent heat?** `Meteorology` `oral-met-29`

Latent heat is the energy absorbed or released when water changes phase without any change of temperature: it is hidden energy, which is what latent means. Evaporating water absorbs heat from its surroundings, which is why evaporation cools; condensation hands exactly that energy back, warming the surrounding air; freezing releases a smaller amount and melting absorbs it. The reason a weather answer keeps coming back to this: latent heat is the atmosphere's fuel line. When moist air is lifted and its vapour condenses, the released heat keeps the rising parcel warmer than its surroundings, which is precisely why the saturated lapse rate is gentler than the dry one, around 1.8 against 3 degrees per 1000 ft, and why moist air is so much more prone to instability. It is what powers a thunderstorm's updrafts and what a tropical cyclone runs on. And in the other direction, evaporative cooling under a rain shaft is part of what accelerates a downdraft into a microburst. One concept, threaded through half of meteorology.

Spoken answer skeleton:

- Energy absorbed or released in a phase change, with no temperature change
- Evaporation absorbs heat and cools; condensation releases it and warms
- Why the SALR is gentler than the DALR
- The fuel of thunderstorms and tropical cyclones
- Evaporative cooling also drives downdrafts and microbursts

Multiple choice:

- The heat trapped in the cabin after a long taxi
- **The energy absorbed or released when water changes phase without changing temperature** <- marked answer
- The warmth left in the runway after sunset
- The heat generated by air friction on the airframe

Flashcard answer: The energy absorbed or released when water changes phase with no temperature change: evaporation absorbs it and cools, condensation releases it and warms. It is why the SALR is gentler than the DALR, and it fuels thunderstorms, tropical cyclones and microburst downdrafts.

**89. What is the hazard of a volcanic eruption to aviation?** `Meteorology` `oral-met-30`

The killer hazard is the ash cloud. Volcanic ash is not soft dust: it is pulverised rock and glass, and a jet engine is the worst possible place for it. The core temperature of the engine is above the ash's melting point, so ingested ash melts, then solidifies as glass on the turbine nozzles and blades, choking the flow until the engines surge and flame out; the infamous BA 747 over Indonesia lost all four before relighting them outside the cloud. Beyond the engines, ash sandblasts the windscreen opaque and erodes leading edges, clogs pitot probes giving unreliable airspeed, contaminates bleed air, packs, and every filter, and the cloud itself is effectively invisible at night and does not paint on weather radar, which sees water, not rock. The defence is entirely strategic: volcanic ash advisories from the VAAC network, SIGMETs and NOTAMs, and routing that avoids contaminated airspace with a wide margin. If caught, the drill is a 180 degree turn out, engines gently handled, and the classic memory items.

Spoken answer skeleton:

- Ash: pulverised rock and glass, invisible to weather radar
- Melts in the hot section, coats turbines as glass: surge and flameout
- Sandblasts windscreens, blocks pitots, contaminates bleed air and filters
- Avoidance is everything: VAAC advisories, SIGMETs, wide rerouting
- If caught: turn 180 and get out

Multiple choice:

- Only the lava flow closing runways near the volcano
- The noise of the eruption disturbing communications
- **The ash cloud: it melts in engines causing flameout, sandblasts surfaces, blocks pitots, and is invisible to weather radar** <- marked answer
- The heat of the eruption creating strong thermals

Flashcard answer: The ash cloud: pulverised rock and glass that melts in the engine hot section and re-solidifies on the turbines, causing surge and flameout, while sandblasting windscreens, blocking pitot probes and contaminating systems. It does not show on weather radar, so avoidance via VAAC advisories and SIGMETs is everything.

**90. When do you need an alternate, and when would you use a METAR versus a TAF for that decision?** `Meteorology` `oral-met-31`

For airline IFR operations the starting rule is that you plan with a destination alternate, an airport you can divert to if the destination does not work out, with fuel to reach it and hold. The rules then allow exceptions and additions: an alternate can be dropped in specific cases, broadly a sufficiently equipped destination with two usable runways and a solidly good forecast around arrival time, and a second alternate is required when the destination forecast is marginal or unavailable; takeoff alternates cover the case where you could not return to your departure airport. The exact criteria live in the operations manual and national rules, so quote the principle, not chapter and verse. The METAR versus TAF logic is about time. Planning happens hours before arrival, so the planning decision runs on the TAF, the forecast valid for your arrival window, checked against the alternate planning minima. The METAR is the present tense: it validates the forecast as the flight progresses and drives the tactical decision at the point of diversion. Rule of thumb: TAF to plan, METAR to act.

Spoken answer skeleton:

- Baseline: plan a destination alternate, with fuel to reach and hold
- Exceptions exist: strong destination and forecast can drop it; marginal forecast demands two
- Details are ops manual and state rules: quote the principle
- TAF: the forecast for your arrival window, used for planning
- METAR: current weather, used to verify enroute and decide the actual diversion
- TAF to plan, METAR to act

Multiple choice:

- An alternate is only needed when the captain requests one; both reports are interchangeable
- **An alternate is planned per the operational rules, using the TAF for the planning decision at the arrival window and the METAR for the tactical decision in flight** <- marked answer
- An alternate is needed only for night flights, decided from the METAR alone
- An alternate is chosen after landing, using the TAF alone

Flashcard answer: Airline IFR planning starts from carrying a destination alternate, with rule-based exceptions (a strong destination and forecast) and additions (two alternates for marginal forecasts). Use the TAF, the forecast for your arrival window, for the planning decision, and the METAR, the current observation, to verify and act in flight: TAF to plan, METAR to act.

**91. CAVOK: what does it mean?** `Meteorology` `oral-met-32`

CAVOK, spoken "cav-okay", stands for ceiling and visibility OK, and it replaces the visibility, weather and cloud groups of a METAR when four conditions are all met at once. Visibility ten kilometres or more. No cloud below 5000 feet, or below the minimum sector altitude if that is higher, so a report cannot hide cloud that matters to terrain clearance behind a cheerful CAVOK. No cumulonimbus or towering cumulus at any level, because convective cloud is significant whatever its height. And no significant weather: no precipitation, thunderstorms, fog, dust, and so on. So CAVOK is a compact promise: good visibility, no operationally significant cloud, no convective menace, nothing falling out of the sky. Worth saying in an interview: CAVOK is not a wind statement, the wind group still stands, so a CAVOK report can still carry a howling crosswind, and it says nothing about turbulence either. It is ceilings and visibility it clears, not the whole operation.

Spoken answer skeleton:

- Ceiling and visibility OK, replacing vis, weather and cloud groups
- Visibility 10 km or more
- No cloud below 5000 ft or below the MSA, whichever is higher
- No CB or towering cumulus at any level, no significant weather
- Says nothing about wind: the crosswind can still be howling

Multiple choice:

- **Visibility 10 km or more, no cloud below 5000 ft or MSA, no CB or TCU at any level, and no significant weather** <- marked answer
- Calm wind and a dry runway for the next hour
- Clear skies guaranteed for the whole day
- The airport is open and all approaches are available

Flashcard answer: CAVOK replaces the visibility, weather and cloud groups when: visibility is 10 km or more, no cloud below 5000 ft (or below the MSA if higher), no CB or TCU at any level, and no significant weather. It says nothing about wind.

**92. What is CB and what makes it hazardous?** `Meteorology` `oral-met-33`

CB is cumulonimbus, the thunderstorm cloud: the fully developed convective tower, built by strong instability, plentiful moisture and a trigger, with a base down in the low levels and a top that can drive to the tropopause and flatten into the anvil. It is the most dangerous cloud in aviation because it packs every major hazard into one place. Severe turbulence from the updrafts and downdrafts coexisting inside it, capable of exceeding structural limits. Windshear and microbursts underneath and around it, the killers of the approach and departure phases. Hail, which can be thrown out the top and sides into clear air miles from the cloud. Severe icing in its huge load of supercooled water. Lightning, heavy rain that can flood engines and ruin visibility, and in the worst cells, tornadoes. The operational logic follows: you do not fly through a CB, you avoid it, using weather radar, by a wide margin, the customary guidance being on the order of 20 nautical miles around severe cells and never through the gap between close cells, and you respect the anvil and the clear air beneath the base as part of the storm.

Spoken answer skeleton:

- Cumulonimbus: the fully developed thunderstorm cloud, base low, top to the tropopause
- Every hazard at once: severe turbulence from paired updrafts and downdrafts
- Windshear and microbursts beneath, hail thrown into clear air
- Severe icing, lightning, torrential rain
- Avoid by radar with a wide margin, around 20 NM for severe cells, roughly
- The anvil and the air under the base are part of the storm

Multiple choice:

- Cirrus cloud at high level, hazardous because of poor visibility
- A cloud base measurement, hazardous when below minima
- **Cumulonimbus, the thunderstorm cloud, combining severe turbulence, windshear, hail, icing and lightning in one cell** <- marked answer
- A stable layer cloud producing drizzle

Flashcard answer: CB is cumulonimbus, the thunderstorm cloud, towering from a low base up to the tropopause anvil. It combines severe turbulence, windshear and microbursts, hail (even in nearby clear air), severe icing, lightning and torrential rain, so it is avoided by radar with a wide margin, customarily around 20 NM for severe cells.

**93. What is the point of equal time?** `Navigation` `oral-nav-05`

The point of equal time, also called the equal time point or critical point, is the position along your route from which it takes exactly the same time to continue to the destination as to turn back to the departure point, or more generally between any two suitable airfields you are flying between. Its job is decision-making: if something goes wrong, an engine failure, a medical emergency, a depressurisation, the PET tells you instantly which way is quicker to help; before it, turning back wins on time, after it, pressing on does. The wind is what makes it interesting: in still air the PET sits at the halfway point, but with wind it always moves into the wind, towards the headwind side, because the return against a tailwind-turned-headwind is slow, so you reach the "equal" point earlier. The classic formula: distance to the PET equals total distance times groundspeed home, divided by groundspeed on plus groundspeed home. It pairs with the point of safe return, which is about fuel rather than time; on ETOPS sectors these calculations are done for the engine-out and depressurised cases too.

Spoken answer skeleton:

- The point where continuing and turning back take equal time
- Its purpose: instant diversion decisions, which way is quicker to help
- Still air: halfway. With wind it always moves into the wind
- Distance to PET = D times GS home over GS on plus GS home
- Cousin of the PSR, which is about fuel; key on ETOPS sectors

Multiple choice:

- The halfway point of the route by distance, regardless of wind
- **The point from which continuing to destination and returning to departure take equal time, moving into wind, used for diversion decisions** <- marked answer
- The time at which fuel runs below reserve
- The point where two airways cross at the same level

Flashcard answer: The position from which continuing and turning back take the same time: before it, turning back is quicker, after it, continuing is. In still air it is halfway; wind always shifts it towards the headwind side. Distance to PET = D x GS home / (GS on + GS home). Used for engine failure and medical diversion decisions.

**94. What is DME and what is slant range?** `Navigation` `oral-nav-06`

DME, distance measuring equipment, gives you your distance from a ground station, and it does it by timing radio round trips. The aircraft interrogator transmits pulse pairs on UHF; the ground transponder receives them, waits a fixed known delay, and replies; the aircraft measures the total time, subtracts the fixed delay, and converts the remainder to distance at the speed of light. Because it needs that two-way exchange, a DME station serves a limited number of aircraft and replies on a different frequency than it listens on, and DME channels are paired with VOR and ILS frequencies so tuning the navaid tunes the distance too. Slant range is the honest name for what DME measures: the straight-line distance from aircraft to station through space, not the horizontal distance over the ground. The difference is negligible far from the station but grows as you approach, and the limiting case makes it vivid: directly overhead, DME cannot read zero, it reads your height above the station converted to distance, so at 36,000 ft overhead the box shows about 6 NM. The practical habit: treat DME close to a station, or at great height, with that correction in mind.

Spoken answer skeleton:

- Distance by timing radio round trips: interrogation, fixed delay, reply
- UHF, channels paired with VOR and ILS frequencies
- It measures slant range: the straight line through space, not over the ground
- Error negligible far out, grows near the station
- Overhead it reads your height: about 6 NM at 36,000 ft

Multiple choice:

- A radar that measures your ground speed only
- **Equipment timing interrogation and reply pulses to give distance; it measures slant range, the straight line to the station, reading your height when overhead** <- marked answer
- A beacon transmitting its own position for the FMS
- A system measuring the runway distance remaining

Flashcard answer: DME times pulse round trips between the aircraft interrogator and a ground transponder (UHF, paired with VOR/ILS frequencies) to give distance. It measures slant range, the straight line through space, so overhead the station it reads your height, about 6 NM at 36,000 ft, and it slightly over-reads ground distance close-in.

**95. What are the VOR errors?** `Navigation` `oral-nav-07`

The VOR is the workhorse VHF radial beacon, and its errors fall into tidy groups. Site and propagation errors: the signal reflects off terrain, buildings and even vehicles near the station, bending the radials, an effect called scalloping when the needle weaves as reflections interfere; hilly country makes it worse. Line of sight limits: being VHF, the signal does not follow the earth, so range depends on your altitude and the station elevation, and low altitude means short range and possible shadowing by terrain. The cone of confusion: directly over the station the radial geometry collapses and the indication becomes momentarily useless until you fly through it. Equipment errors: the ground station has a small alignment tolerance, and the aircraft receiver adds its own, which is why there are published limits and receiver checks; the overall system is customarily held to be accurate to within about five degrees, and a bearing error in degrees grows into miles with distance, one degree being roughly one mile at sixty. Add ordinary human errors, wrong ident, wrong radial, and that is the family. It is exactly these errors that GPS-based navigation largely designed out.

Spoken answer skeleton:

- Site errors: reflections from terrain and buildings, scalloping
- Line of sight: range depends on altitude, terrain can shadow it
- Cone of confusion overhead the station
- Ground alignment and receiver tolerances: about 5 degrees system accuracy, roughly
- Degrees become miles with distance: about 1 NM per degree at 60 NM

Multiple choice:

- **Site reflections and scalloping, line of sight range limits, the cone of confusion overhead, and ground plus receiver tolerances** <- marked answer
- Coastal refraction, night effect and thunderstorm static
- Slant range error and height error only
- Magnetic deviation from the aircraft compass only

Flashcard answer: VOR errors: site and propagation errors (reflections and scalloping from terrain), line of sight range limits, the cone of confusion overhead, and ground station plus receiver tolerances, customarily about 5 degrees overall. Bearing error grows with distance: roughly 1 NM per degree at 60 NM.

**96. What is an NDB and what are its errors, including coastal refraction and static?** `Navigation` `oral-nav-08`

An NDB, non-directional beacon, is the simplest navaid: a ground transmitter in the LF and MF bands radiating in all directions, and the aircraft's ADF simply points its needle at the strongest signal direction, giving a bearing to the station. That simplicity is why it survives at small airfields, and its long list of errors is why everything else replaced it. Coastal refraction: the ground wave travels at slightly different speeds over land and over sea, so a signal crossing a coastline at an angle bends, and a bearing taken across a coast is displaced, the classic statement being that the error pulls the apparent bearing towards the coastline; it is worst for an inland station and a shallow crossing angle, and least when you cross perpendicular. Night effect: at night, sky waves returning from the ionosphere contaminate the ground wave, and the needle wanders, worst around dawn and dusk. Thunderstorm static: a CB is a huge radio transmitter, and the ADF may point at the storm instead of the beacon. Add quadrantal error from the airframe bending the incoming wave, mountain reflections, and plain interference between stations at night, and the lesson writes itself: treat ADF bearings with suspicion, especially at night, near storms and along coasts.

Spoken answer skeleton:

- LF and MF beacon radiating all directions; the ADF needle points at it
- Coastal refraction: waves bend crossing a coast at an angle, bearing pulled towards the coastline; cross perpendicular to minimise
- Night effect: sky waves contaminate the ground wave, needle wanders, worst at dawn and dusk
- Thunderstorm static: the needle points at the CB
- Plus quadrantal error from the airframe and mountain reflections

Multiple choice:

- A satellite beacon with no known errors
- A VHF beacon with radial scalloping and a cone of confusion
- **An LF or MF beacon the ADF needle points to; errors include coastal refraction, night effect from sky waves, thunderstorm static and quadrantal error** <- marked answer
- A runway light system for low visibility approaches

Flashcard answer: An NDB is an LF/MF beacon radiating in all directions; the ADF points at it. Errors: coastal refraction (bearings bend crossing a coast at an angle, pulled towards the coastline), night effect (sky wave contamination, worst at dawn and dusk), thunderstorm static (the needle points at the CB), quadrantal error and terrain reflections.

**97. What is a false glideslope?** `Navigation` `oral-nav-09`

The ILS glideslope antenna cannot help producing more than one path. The way its signal lobes combine with reflections off the ground in front of the antenna creates repeats of the guidance at multiples of the true angle: for a standard three degree glideslope, the first and strongest false glideslope appears at roughly twice the angle, around six degrees, with another near nine. They exist above the true path, never below it, which is the saving grace. An aircraft that arrives high and captures a false slope gets a descent path roughly twice as steep as intended, and on some false lobes the fly-up and fly-down sense can be reversed or erratic, so the autopilot may chase nonsense. The defences are procedural and simple: intercept the glideslope from below, at the platform altitude, so the first slope you meet is the real one; and cross-check the descent against the published altitude versus DME or distance table on the chart, plus the outer marker or equivalent fix crossing altitude. If the numbers do not match the chart, the slope is lying: go around or fly the non-precision profile.

Spoken answer skeleton:

- Spurious repeats of the glideslope from antenna lobes and ground reflection
- At multiples of the real angle: about 6 and 9 degrees for a 3 degree slope
- Always above the true path, never below
- Roughly double the descent angle, indications may reverse
- Defence: intercept from below and check altitude against distance on the chart

Multiple choice:

- A glideslope that fails and shows a flag
- **A spurious glideslope signal at a multiple of the true angle, around 6 degrees, always above the real path, avoided by intercepting from below and checking altitude against distance** <- marked answer
- The glidepath of the parallel runway received by mistake
- A glideslope moved by strong winds to a shallower angle

Flashcard answer: A false glideslope is a spurious repeat of the ILS glidepath created by the antenna's signal lobes, at multiples of the true angle, about 6 and 9 degrees for a 3 degree slope, always above the real one. Guard against it by intercepting from below and cross-checking altitude against DME or fix distances.

**98. What is TCH and why does it differ from runway elevation?** `Navigation` `oral-nav-10`

TCH, threshold crossing height, is the height at which the glidepath, the ILS glideslope or a published vertical path, crosses the runway threshold. For most instrument runways it is on the order of fifty feet, roughly, and it is printed on the approach chart. Its purpose is geometry: the glidepath cannot aim at the very start of the pavement, or the main wheels, which hang well below and behind the antenna on a big aircraft, would be skimming the approach lights; aiming the path to cross the threshold around fifty feet up puts the touchdown point comfortably down the runway, near the aiming markings, with safe wheel clearance over the threshold. The reason it differs from runway elevation is that they are different kinds of number answering different questions. Runway or threshold elevation is an absolute figure: height of the surface above mean sea level, what your altimeter relates to. TCH is a relative figure: how far above that threshold the guidance path passes. So on a threshold at 200 ft elevation with a 50 ft TCH, the aircraft on the glidepath crosses at about 250 ft on the QNH altimeter; the radio altimeter reads the fifty.

Spoken answer skeleton:

- The height at which the glidepath crosses the runway threshold
- Typically around 50 ft, printed on the chart
- Ensures wheel clearance and a touchdown near the aiming point
- Runway elevation is absolute, above sea level; TCH is relative, above the threshold
- On the glidepath at the threshold: altimeter reads elevation plus TCH

Multiple choice:

- The height of the control tower above the airport
- The altitude at which the approach must be stabilised
- **The height of the glidepath above the runway threshold, typically about 50 ft; it is a relative height, while runway elevation is an absolute height above sea level** <- marked answer
- The maximum crossing height for vehicles near the runway

Flashcard answer: TCH is the height at which the glidepath crosses the runway threshold, typically around 50 ft, ensuring wheel clearance and a touchdown near the aiming point. It differs from runway elevation because TCH is relative to the threshold while elevation is an absolute height above mean sea level.

**99. Where do we use HF frequencies?** `Navigation` `oral-nav-11`

HF, the high frequency band from 3 to 30 MHz, is aviation's long-distance voice: we use it wherever the aircraft is beyond the reach of VHF ground stations, which means oceanic airspace, polar routes, deserts and other remote continental regions. The physics that makes it work is sky wave propagation: HF signals refract off the ionosphere and return to earth far beyond the horizon, and with multiple hops they can span thousands of miles, which no line-of-sight VHF station can do. The price of that reach is quality and reliability: the ionosphere changes between day and night and with solar activity, so working frequencies must change too, higher by day, lower by night as a rule of thumb, and the audio is noisy and fading, which is why oceanic HF procedures lean on SELCAL, letting the crew stop actively listening to static until the ground station triggers their code. In practice today HF sits alongside satellite communication and datalink, CPDLC position reporting having taken much of the load, but HF remains the required and universal backup across oceanic airspace.

Spoken answer skeleton:

- Long range comms: oceanic, polar, remote and desert airspace
- Sky waves refract off the ionosphere, going far beyond the horizon
- Beyond line of sight, where VHF cannot reach
- Ionosphere shifts day to night, so frequencies change; noisy, hence SELCAL
- Now paired with satcom and CPDLC, but still the oceanic backbone

Multiple choice:

- Only for talking to the company at the gate
- **For long range communication beyond VHF line of sight, over oceans, poles and remote areas, using ionospheric sky wave propagation** <- marked answer
- For the ILS localizer and glideslope
- For short range tower communication at busy airports

Flashcard answer: HF (3 to 30 MHz) is used for long range communication beyond VHF line of sight: oceanic, polar and remote airspace. Its sky waves refract off the ionosphere to travel far beyond the horizon, at the cost of noise and day-night frequency changes, managed with SELCAL and now backed by satcom and CPDLC.

**100. Where do we use VHF?** `Navigation` `oral-nav-12`

VHF is the everyday band of aviation, and it appears in two roles. Communication uses 118 to about 137 MHz: tower, ground, approach, area control, ATIS, company frequencies, essentially all routine voice within range of a ground station. Navigation sits just below, 108 to 118 MHz, where the VORs and ILS localizers live. The character of VHF is line of sight: the waves travel essentially straight, neither following the earth like low frequencies nor returning from the ionosphere like HF, so range is set by geometry, how high you are and how high the antenna is, plus terrain in between. From altitude that is generous, a couple of hundred nautical miles at cruise levels as a rough figure, and the rule-of-thumb range formula runs on the square roots of the two heights. Within that range the quality is exactly why we use it: clear, quiet, reliable audio, day or night, largely indifferent to the ionosphere. Domestic and continental operations can live entirely on VHF; it is only when the ground stations run out, over oceans and wilderness, that HF and satcom take over.

Spoken answer skeleton:

- The everyday band: comms 118 to 137 MHz, nav 108 to 118 for VOR and localizer
- All routine ATC voice: tower, approach, area, ATIS
- Line of sight: range set by aircraft and antenna height, plus terrain
- Roughly 200 NM from cruise levels, as a rough figure
- Clear and reliable within range; beyond it, HF and satcom take over

Multiple choice:

- Only over oceans, beyond the horizon
- **For short and medium range line of sight communication with ATC (118 to 137 MHz) and for VOR and localizer navigation (108 to 118 MHz)** <- marked answer
- Only for emergency transmissions
- For interrogating transponders and TCAS

Flashcard answer: VHF carries everyday line of sight operations: ATC and ATIS voice on 118 to 137 MHz, and VOR plus ILS localizer navigation on 108 to 118 MHz. Range depends on heights and terrain, roughly a couple of hundred NM from cruise level, with clear reliable audio; beyond ground station reach, HF and satcom take over.

**101. Explain how radio waves travel.** `Navigation` `oral-nav-13`

Radio energy gets from transmitter to receiver by three main paths, and which one dominates is a matter of frequency. Ground waves, also called surface waves, follow the curvature of the earth: the lower the frequency, the better the wave hugs the surface and the farther it reaches, which is why LF and MF signals, the NDB band, are usable well beyond the horizon at the cost of needing big transmitters. Sky waves travel up to the ionosphere, the electrified layers of the upper atmosphere, and are refracted back down to earth a long way from the transmitter; this is the HF story, thousands of miles by successive hops, with the catch that the ionosphere changes between day and night, which is behind both HF frequency management and the NDB night effect. Space waves, or direct waves, travel in essentially straight lines from antenna to antenna: this is VHF and everything above it, clean and predictable but limited to line of sight, so range comes from height. The tidy summary: low frequencies bend and follow, high frequencies bounce off the sky, very high frequencies fly straight.

Spoken answer skeleton:

- Three paths, chosen mainly by frequency
- Ground waves follow the earth: LF and MF, the NDB band, beyond the horizon
- Sky waves refract off the ionosphere: HF, huge ranges, day-night changes
- Space waves go straight, line of sight: VHF and above, range from height
- Low bends, high bounces, very high flies straight

Multiple choice:

- All radio waves follow the earth's surface equally at every frequency
- **As ground waves following the surface at low frequencies, sky waves refracted by the ionosphere at HF, and line of sight space waves at VHF and above** <- marked answer
- Radio waves only travel in straight lines regardless of frequency
- They travel through the ground between buried antennas

Flashcard answer: Three modes by frequency: ground waves hug the earth's curvature (LF and MF, the NDB band), sky waves refract off the ionosphere and return far beyond the horizon (HF), and space waves travel line of sight (VHF and above, range set by height). Low bends, high bounces, very high flies straight.

**102. Explain the night effect.** `Navigation` `oral-nav-14`

The night effect is the degradation of NDB and ADF bearings at night, and it comes from the ionosphere changing shape after sunset. By day, the lowest ionospheric layer absorbs most of the sky wave energy at NDB frequencies, so the receiver hears an almost pure ground wave and the ADF needle points steadily. At night that absorbing layer fades, and sky waves at LF and MF survive the trip up and come back down from the ionosphere. The receiver now hears two versions of the same signal, the steady ground wave and a sky wave that has travelled a different path with shifting phase and, arriving from a reflection, a corrupted apparent direction. The two interfere, and the needle wanders, swings and settles on errors of many degrees; the effect is worst around dawn and dusk when the ionosphere is actively reorganising, worse at greater ranges where the ground wave is weak, and worse for bearings involving long sky wave paths. The operational conclusions: treat night ADF bearings sceptically, average the needle's swings rather than chasing them, prefer closer beacons, and back everything up with other aids.

Spoken answer skeleton:

- Night degradation of NDB and ADF bearings
- By day the low ionosphere absorbs sky waves; needle gets clean ground wave
- At night sky waves return and interfere with the ground wave
- Needle wanders, errors of many degrees; worst around dawn and dusk, and at range
- So: distrust night ADF bearings, average the swings, cross-check other aids

Multiple choice:

- The runway lights dazzling the pilots on final at night
- The VOR cone of confusion growing larger after dark
- **Sky waves returning from the night ionosphere interfering with the NDB ground wave, making ADF bearings wander, worst around dawn and dusk** <- marked answer
- Radio silence enforced at night over cities

Flashcard answer: At night the ionospheric layer that absorbs LF/MF sky waves by day fades, so sky waves return and interfere with the NDB's ground wave. The ADF needle wanders with errors of many degrees, worst around dawn and dusk and at long range: distrust night bearings, average the swings, cross-check.

**103. Which is more accurate, GPS or VOR?** `Navigation` `oral-nav-15`

GPS, and it is not close. A VOR gives you an angle, and its system accuracy is customarily held to be within about five degrees; because it is angular, the position error grows with distance, roughly a mile per degree at sixty miles, so a legally serviceable VOR can have you miles off the radial centreline at range. GPS gives you a position directly, and a modern receiver is accurate to a few metres, tightened further by augmentation systems; its error does not grow with distance from anything. That accuracy gap is why RNAV and RNP procedures, which demand accuracies measured in fractions of a mile, are built on GPS, and why VOR airway widths are as generous as they are. The honest caveat belongs in the answer: GPS accuracy comes with dependence on faint satellite signals, so its weaknesses are jamming, interference and outages, which is why receivers run integrity monitoring, RAIM, why augmentation exists, and why states keep a minimum backbone of VORs and ILS as reversion. Precise but occasionally deniable, against coarse but sturdy: that is the real comparison.

Spoken answer skeleton:

- GPS, by a wide margin
- VOR is angular, about 5 degrees: error grows with range, a mile per degree at 60 NM
- GPS is a direct position, a few metres, independent of range
- That is why RNAV and RNP are built on it
- Caveat: GPS can be jammed or degraded, hence RAIM and a VOR/ILS backbone

Multiple choice:

- **GPS: it fixes position to a few metres, while VOR's angular error of about 5 degrees grows into miles with distance** <- marked answer
- VOR: satellites are too far away to be accurate
- They are identical in accuracy by regulation
- Neither can be used for instrument approaches

Flashcard answer: GPS, decisively: metres of position error versus VOR's roughly 5 degree angular accuracy, which becomes miles at range. That is why RNAV and RNP procedures are GPS-based. The caveat is GPS's vulnerability to jamming and outages, covered by RAIM, augmentation and a retained VOR/ILS backbone.

**104. What is MLS?** `Navigation` `oral-nav-16`

MLS, the microwave landing system, was designed to be the ILS's successor. Instead of the ILS's two fixed, narrow beams, MLS transmits scanning beams in the microwave band: a beam sweeps to and fro across a wide arc in azimuth, another sweeps vertically for elevation, and the airborne receiver times the passes of the beam to compute exactly where it sits within the coverage, with precision DME providing range. That architecture buys real advantages: guidance across a broad volume rather than a single approach corridor, so curved and segmented approaches and multiple glidepath angles become possible; many more channels than the ILS's crowded forty; and far less sensitivity to the siting problems, terrain and reflections that bend ILS beams and force protected critical areas. So why is it a footnote instead of the standard? Timing. Just as MLS matured in the 1990s, satellite navigation arrived and promised most of the same benefits without ground equipment at every runway. Adoption never reached critical mass; a handful of installations, London Heathrow the famous one for low visibility operations, and military use, are its legacy, and GPS-based approaches with augmentation took the future MLS was built for.

Spoken answer skeleton:

- The intended ILS successor: scanning microwave beams
- Sweeps in azimuth and elevation; receiver times the passes for its position, DME for range
- Wide coverage: curved approaches, multiple glidepaths, many channels
- Far fewer siting and reflection problems than ILS
- Overtaken by GPS approaches; only rare installations remain

Multiple choice:

- A medium range surveillance radar for approach control
- **The microwave landing system: scanning beams giving azimuth and elevation over a wide area, meant to replace ILS but overtaken by satellite navigation** <- marked answer
- A military-only navigation satellite constellation
- The marker beacon system of the ILS

Flashcard answer: MLS is the microwave landing system: scanning beams in azimuth and elevation, timed by the receiver, plus precision DME, giving guidance over a wide volume with curved approach capability and fewer siting problems than ILS. It was the intended ILS successor but satellite navigation overtook it; installations are rare.

**105. What does it mean to level off at a flight level, and what is an airway?** `Navigation` `oral-nav-17`

A flight level is an altitude flown on the standard pressure setting: climbing through the transition altitude, every aircraft winds 1013.25 hPa into the altimeter, and from then on levels are named in hundreds of feet indicated, FL350 being 35,000 ft on the standard setting. Levelling off at a flight level means capturing and holding that indicated level on 1013. The point of the convention is separation: local QNH varies from place to place, and if everyone flew on their own local setting, two aircraft showing the same altitude could be at genuinely different heights; on a common datum, everyone's errors match, so a thousand feet of indicated difference is a real thousand feet between aircraft. The trade is that flight levels drift relative to the ground as pressure changes, which is why terrain clearance near the ground uses QNH and why the transition altitude exists. An airway is a charted corridor of controlled airspace joining navaids and waypoints, with a defined width, customarily on the order of ten nautical miles, and defined base and upper levels; you fly it by clearance, at semicircular or ATC-assigned levels, with its centreline, minimum enroute altitudes and reporting points printed on the enroute chart.

Spoken answer skeleton:

- Flight level: altitude on the standard setting 1013.25, in hundreds of feet
- Set climbing through the transition altitude; FL350 is 35,000 ft indicated
- Common datum means everyone's errors match: reliable separation
- QNH below transition for terrain; flight levels drift with pressure
- Airway: charted controlled corridor between waypoints, defined width and levels

Multiple choice:

- A flight level is the aircraft's exact height above the ground; an airway is any direct route
- **A flight level is an indicated altitude on the standard 1013 setting, giving a common datum for separation; an airway is a charted controlled airspace corridor with defined width and levels** <- marked answer
- A flight level is the cabin altitude; an airway is the taxi route to the runway
- A flight level is set on QFE; an airway is the space above an airport

Flashcard answer: Levelling at a flight level means holding an indicated altitude on the standard setting, 1013.25 hPa, set above the transition altitude; the shared datum makes separation reliable even as local pressure varies. An airway is a charted corridor of controlled airspace between navaids and waypoints, with defined width and vertical limits.

**106. Tell me something about the engine.** `General` `oral-gen-03`

The open question, so have a clean story ready. A modern airliner engine is a high bypass turbofan, and the whole cycle fits in four words: suck, squeeze, burn, blow. Air comes in through the big fan; a small share continues into the core, where the compressor stages squeeze it to many times atmospheric pressure; fuel is added and burned in the combustion chamber; and the hot expanding gas drives the turbines on its way out. The turbines are the heart of the arrangement: they extract the energy that spins the compressor and, crucially, the fan at the front. And here is the modern part: most of the thrust does not come from the hot exhaust at all. The fan pushes a huge mass of air around the core rather than through it, the bypass flow, five to ten times the core flow or more on current engines, and accelerating a large mass of air slightly is far more efficient, and far quieter, than accelerating a small mass violently. That is why engines keep growing in diameter, and why fuel burn per seat keeps falling.

Spoken answer skeleton:

- High bypass turbofan: suck, squeeze, burn, blow
- Fan in, compressor squeezes, fuel burns, turbines extract the energy
- Turbines drive the compressor and the big fan
- Most thrust is the fan's bypass air, not the hot core exhaust
- Big slow-ish airflow beats small violent one: efficient and quiet

Multiple choice:

- **A high bypass turbofan: the compressor squeezes air, fuel burns, turbines drive the fan, and the fan's bypass flow provides most of the thrust** <- marked answer
- A piston engine turning a propeller through a gearbox
- A rocket carrying its own oxygen supply for the burn
- An electric fan powered by the aircraft batteries

Flashcard answer: A modern airliner engine is a high bypass turbofan: suck, squeeze, burn, blow. The compressor squeezes the core air, fuel burns, turbines extract energy to drive compressor and fan, and the fan's large bypass flow around the core provides most of the thrust, efficiently and quietly.

**107. What is hypoxia, what does it cause, and what is the time of useful consciousness at 30,000 ft?** `General` `oral-gen-04`

Hypoxia is the body running short of usable oxygen, and at altitude the mechanism is pressure, not composition: the air is still 21 percent oxygen, but with total pressure so low, the partial pressure of that oxygen is no longer enough to load the blood properly. What makes it a killer in aviation is how it presents. It is insidious: the early symptoms, a mild euphoria, overconfidence, degraded judgement and slowed thinking, are exactly the symptoms that stop you noticing you have symptoms. Alongside come blue-tinged lips and fingertips, tingling, headache, deteriorating vision, and eventually unconsciousness. The metric that captures the urgency is the time of useful consciousness: not time to death but the window in which you can still act competently, get a mask on, start a descent. At 30,000 ft it is commonly quoted as around one to two minutes for a resting person, and a rapid decompression roughly halves it, because the lungs dump their oxygen in the pressure drop. Which is the whole logic of the memory drill: masks on first, one hundred percent oxygen, establish crew communication, then the emergency descent; the masks come first because thirty seconds of fumbling at that altitude is a meaningful slice of your window.

Spoken answer skeleton:

- Insufficient usable oxygen: at altitude the partial pressure is too low, not the percentage
- Insidious: euphoria and poor judgement mask the onset
- Then blue lips, tingling, tunnelling vision, unconsciousness
- TUC at 30,000 ft: commonly quoted around 1 to 2 minutes, roughly
- Rapid decompression roughly halves it
- Hence: masks on first, then the emergency descent

Multiple choice:

- Overbreathing causing dizziness, cured by breathing into a bag, with hours of useful consciousness
- **Oxygen deficiency in the body: insidious euphoria and impaired judgement leading to unconsciousness, with a TUC at 30,000 ft of around 1 to 2 minutes** <- marked answer
- Carbon monoxide poisoning from the engines, with unlimited useful consciousness
- Cold shock from the cabin temperature falling

Flashcard answer: Hypoxia is oxygen starvation, at altitude caused by low partial pressure. It is insidious: euphoria and impaired judgement first, then cyanosis and unconsciousness. Time of useful consciousness at 30,000 ft is commonly quoted around 1 to 2 minutes, roughly halved by rapid decompression: masks on first, then descend.

**108. What is a stopbar?** `General` `oral-gen-05`

A stopbar is a row of red lights set into the taxiway surface across its full width at a runway holding position, usually paired with elevated red lights at the edges. It is the airfield's equivalent of a red traffic light guarding the runway, and it exists chiefly for low visibility operations, when the tower cannot see the holding points and pilots cannot see much of anything. The rule attached to it is absolute and worth stating exactly: never cross an illuminated stopbar, even if you have received a clearance to enter or cross the runway. The clearance and the lights must agree; when the controller clears you, they extinguish the stopbar, and typically the green lead-on centreline lights beyond it come alive to draw you through. Lights still red, you stop and query, every time, because a lit stopbar with a verbal clearance means somebody is wrong, and the stakes on the other side of that bar are a runway incursion, the kind of error behind the worst accident in aviation history. One tidy exception exists for a failed stopbar stuck on, crossed only under an explicit specific procedure with ATC.

Spoken answer skeleton:

- A row of red lights across the taxiway at a runway holding position
- A red traffic light for the runway, key in low visibility ops
- Never cross a lit stopbar, even with a verbal clearance
- Controller switches it off, green lead-on lights come on, then you go
- Lights against clearance: stop and query; incursion protection

Multiple choice:

- The painted holding position markings on the taxiway
- A barrier lowered across closed runways
- **A row of red lights across the taxiway at a runway holding position that must never be crossed while illuminated, even with a clearance** <- marked answer
- The final section of the runway used for stopping

Flashcard answer: A stopbar is a row of red lights across the taxiway at a runway holding position, central to low visibility operations. Never cross it while lit, even with a verbal clearance: ATC extinguishes it (green lead-on lights come on) to authorise entry. If lights and clearance disagree, stop and query.
