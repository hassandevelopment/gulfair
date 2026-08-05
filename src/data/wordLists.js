// Word data for the logical and attention generators.

// All letters unique, so alphabetize options never collide.
export const ALPHA_WORDS = [
  'PLANE', 'CHAIR', 'MONEY', 'FRUIT', 'HOUSE', 'TIGER', 'CLOUD', 'FLIGHT',
  'CABIN', 'OCEAN', 'PILOT', 'SMART', 'WORLD', 'PHONE', 'DREAM', 'LUNCH',
  'TRAIN', 'STORM', 'VOICE', 'MUSIC', 'DANCE', 'LIGHT', 'POWER', 'EARTH',
  'SOUND', 'BEACH', 'CRANE', 'PLANT', 'GLOVE', 'SHIRT', 'WATCH', 'MOUSE',
  'HORSE', 'JUICE', 'KNIFE', 'LEMON', 'MANGO', 'NURSE', 'ORBIT', 'PEACH',
  'QUEST', 'RADIO', 'SUGAR', 'TABLE', 'UNCLE', 'WAGON', 'YOUNG', 'ZEBRA',
]

// Odd-one-out categories. `avoid` lists categories too close to mix fairly.
export const ODD_GROUPS = [
  { key: 'fruits', label: 'fruits', singular: 'fruit', avoid: ['vegetables'], words: ['Apple', 'Banana', 'Mango', 'Grape', 'Orange', 'Peach', 'Lemon'] },
  { key: 'vegetables', label: 'vegetables', singular: 'vegetable', avoid: ['fruits'], words: ['Carrot', 'Onion', 'Potato', 'Cabbage', 'Cucumber', 'Spinach'] },
  { key: 'vehicles', label: 'vehicles', singular: 'vehicle', avoid: [], words: ['Car', 'Bus', 'Train', 'Lorry', 'Tram', 'Scooter'] },
  { key: 'animals', label: 'animals', singular: 'animal', avoid: ['birds'], words: ['Lion', 'Tiger', 'Horse', 'Camel', 'Monkey', 'Rabbit'] },
  { key: 'birds', label: 'birds', singular: 'bird', avoid: ['animals'], words: ['Falcon', 'Eagle', 'Sparrow', 'Parrot', 'Owl', 'Crow'] },
  { key: 'colors', label: 'colours', singular: 'colour', avoid: [], words: ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Brown'] },
  { key: 'countries', label: 'countries', singular: 'country', avoid: [], words: ['Bahrain', 'Oman', 'Qatar', 'Kuwait', 'Jordan', 'Egypt'] },
  { key: 'professions', label: 'professions', singular: 'profession', avoid: [], words: ['Pilot', 'Doctor', 'Teacher', 'Engineer', 'Chef', 'Nurse'] },
  { key: 'metals', label: 'metals', singular: 'metal', avoid: [], words: ['Gold', 'Iron', 'Copper', 'Silver', 'Zinc'] },
  { key: 'instruments', label: 'musical instruments', singular: 'musical instrument', avoid: [], words: ['Guitar', 'Piano', 'Violin', 'Drums', 'Flute'] },
  { key: 'furniture', label: 'furniture', singular: 'piece of furniture', avoid: [], words: ['Table', 'Chair', 'Sofa', 'Desk', 'Wardrobe'] },
  { key: 'sports', label: 'sports', singular: 'sport', avoid: [], words: ['Football', 'Tennis', 'Cricket', 'Golf', 'Rugby'] },
]

export const CODE_WORDS = [
  'CAT', 'DOG', 'SUN', 'SKY', 'JET', 'BAG', 'CUP', 'MAP', 'PEN', 'KEY',
  'BOX', 'CAR', 'BED', 'FAN', 'HAT', 'NET', 'OWL', 'PIG', 'TOP', 'VAN',
  'WING', 'FUEL', 'SEAT', 'GATE', 'CREW', 'DECK', 'NOSE', 'TAIL',
]

export const ANAGRAM_WORDS = [
  'PLANE', 'TRAIN', 'STONE', 'HEART', 'CREAM', 'SPACE', 'TIMES', 'NIGHT',
  'BREAD', 'SCALE', 'TABLE', 'CHAIR', 'DRIVE', 'SOUND', 'LIGHT', 'FIELD',
]
