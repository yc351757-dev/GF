/**
 * Only Us ❤️ - Love Quiz Data
 * 
 * Highly editable and customizable!
 * You can easily modify questions, options, correct answers, and romantic explanations.
 */

export const quizRounds = [
  {
    id: 1,
    title: "Round 1: How Well Do You Know Me?",
    subtitle: "Our story, our origins, and the basics that started it all 💕",
    badge: "The Foundations",
    icon: "HeartHandshake",
    color: "from-blush-500 to-plum-600",
  },
  {
    id: 2,
    title: "Round 2: Our Little World",
    subtitle: "The late-night calls, the inside smiles, and our long-distance magic ✨",
    badge: "Our Daily Moments",
    icon: "Sparkles",
    color: "from-lavender-400 to-blush-500",
  },
  {
    id: 3,
    title: "Round 3: Forever & Always",
    subtitle: "Our dreams, closing the distance, and the future waiting for us 💍",
    badge: "The Future & Beyond",
    icon: "Infinity",
    color: "from-plum-600 to-midnight-800",
  },
];

export const quizQuestions = [
  // ROUND 1: How Well Do You Know Me?
  {
    id: 1,
    roundId: 1,
    question: "Which country is Amanda from? 🌺",
    description: "The homeland of the sweetest, prettiest girl in the world.",
    type: "factual",
    options: [
      { id: "a", text: "Indonesia 🇮🇩", isCorrect: true },
      { id: "b", text: "Singapore 🇸🇬", isCorrect: false },
      { id: "c", text: "Malaysia 🇲🇾", isCorrect: false },
      { id: "d", text: "Philippines 🇵🇭", isCorrect: false },
    ],
    explanation: "Correct! Indonesia 🇮🇩 — where my favorite smile lives and where my heart currently beats.",
    sweetNote: "Even though you are in Indonesia, you occupy 100% of my thoughts in India every single day."
  },
  {
    id: 2,
    roundId: 1,
    question: "Which country is her boyfriend from? 🪷",
    description: "The boy who is crazy in love with you and counting down every second.",
    type: "factual",
    options: [
      { id: "a", text: "United Kingdom 🇬🇧", isCorrect: false },
      { id: "b", text: "India 🇮🇳", isCorrect: true },
      { id: "c", text: "Canada 🇨🇦", isCorrect: false },
      { id: "d", text: "Australia 🇦🇺", isCorrect: false },
    ],
    explanation: "Spot on! India 🇮🇳 — waiting, working, and dreaming of the flight that lands right by your side.",
    sweetNote: "Thousands of miles can never diminish how deeply I love and cherish you, Amanda."
  },
  {
    id: 3,
    roundId: 1,
    question: "What makes our long-distance relationship truly special? 💫",
    description: "Across oceans and borders, what keeps our hearts beating as one?",
    type: "romantic",
    options: [
      { id: "a", text: "Every message and call feels genuinely precious and never taken for granted 💖", isCorrect: true },
      { id: "b", text: "The way distance makes every single shared second feel like pure stardust ✨", isCorrect: true },
      { id: "c", text: "How safe, understood, and deeply at home we feel with each other 🏡", isCorrect: true },
      { id: "d", text: "All of the above — our love is stronger than any ocean 💕", isCorrect: true },
    ],
    explanation: "Every single one of these is so true! Distance tests not how far you can go, but how deep your love can reach.",
    sweetNote: "You make every mile worth enduring. Amanda, you are my greatest reward."
  },
  {
    id: 4,
    roundId: 1,
    question: "What are we most excited about experiencing together? ✈️",
    description: "That moment when the screen turns into reality.",
    type: "romantic",
    options: [
      { id: "a", text: "That first long airport embrace where the whole world fades away 🫂", isCorrect: true },
      { id: "b", text: "Holding your hand and walking through quiet streets under the city lights 🌃", isCorrect: true },
      { id: "c", text: "Waking up together and having our very first warm morning breakfast 🥞", isCorrect: true },
      { id: "d", text: "Just sitting quietly side by side, knowing we don't have to hang up a call 🥺", isCorrect: true },
    ],
    explanation: "Oh Amanda, that first hug is going to heal all the days we spent longing for each other.",
    sweetNote: "I replay that airport moment in my head every night before falling asleep."
  },

  // ROUND 2: Our Little World
  {
    id: 5,
    roundId: 2,
    question: "What would our perfect first day together look like? 🌸",
    description: "No hurry, no screens, just you and me.",
    type: "romantic",
    options: [
      { id: "a", text: "Cozy morning cuddles, delicious food, and endless quiet whispers ☕", isCorrect: true },
      { id: "b", text: "Exploring cute romantic cafes, taking adorable photos, and late-night walks 🌆", isCorrect: true },
      { id: "c", text: "A scenic beach sunset holding hands with the waves at our feet 🌅", isCorrect: true },
      { id: "d", text: "Literally anywhere on earth, as long as Amanda is right next to me 🥰", isCorrect: true },
    ],
    explanation: "Anywhere with you is my favorite place. Your presence turns any normal room into a fairy tale.",
    sweetNote: "I don't need a fancy destination—I just need your warm hand wrapped in mine."
  },
  {
    id: 6,
    roundId: 2,
    question: "What little thing can make our everyday conversations special? 🌙",
    description: "The secret warmth hidden inside ordinary hours.",
    type: "romantic",
    options: [
      { id: "a", text: "Hearing your cute sleepy voice and soft laughter when you wake up 🧸", isCorrect: true },
      { id: "b", text: "Random silly photos, voice notes, and our secret inside jokes 🤳", isCorrect: true },
      { id: "c", text: "Deep midnight conversations about our souls, hopes, and memories 💫", isCorrect: true },
      { id: "d", text: "When you smile during a video call and my entire heart melts on the spot 🥹", isCorrect: true },
    ],
    explanation: "Your smile is genuinely my favorite view in the universe.",
    sweetNote: "A single notification with your name can instantly turn my entire day around."
  },
  {
    id: 7,
    roundId: 2,
    question: "What kind of virtual date brings the most warmth to our hearts? 🍿",
    description: "Bridging the time zones between India and Indonesia with love.",
    type: "romantic",
    options: [
      { id: "a", text: "Syncing our movies together, eating snacks, and sharing live reactions 🎬", isCorrect: true },
      { id: "b", text: "Cooking or eating our favorite meals together over a cozy video dinner 🍜", isCorrect: true },
      { id: "c", text: "Exchanging favorite songs and slow dancing in our rooms under fairy lights 🎶", isCorrect: true },
      { id: "d", text: "Falling asleep together on call with the quiet sound of each other breathing 💤", isCorrect: true },
    ],
    explanation: "Even when there are 4,000 kilometers between us, virtual dates make us feel inches apart.",
    sweetNote: "Falling asleep on call with you feels like being wrapped in a soft blanket of peace."
  },
  {
    id: 8,
    roundId: 2,
    question: "What matters most when we ever misunderstand each other? 🤍",
    description: "The golden rule that protects our bond from any storm.",
    type: "romantic",
    options: [
      { id: "a", text: "Listening with patience, remembering we are always on the same team 🤝", isCorrect: true },
      { id: "b", text: "Reassuring each other that our love is so much bigger than any fleeting moment 🕊️", isCorrect: true },
      { id: "c", text: "Honest gentle communication, humility, and sweet apologies 🫂", isCorrect: true },
      { id: "d", text: "All of these — because preserving Amanda's peace and smile is my priority 💖", isCorrect: true },
    ],
    explanation: "We never fight against each other. It's always you and me together against the problem.",
    sweetNote: "You are safe with me, Amanda. My heart will always choose tenderness with you."
  },

  // ROUND 3: Forever & Always
  {
    id: 9,
    roundId: 3,
    question: "What is one dream we could work toward together? 🏰",
    description: "Looking at the horizon of our shared future.",
    type: "romantic",
    options: [
      { id: "a", text: "Closing the distance between India and Indonesia permanently 🌏", isCorrect: true },
      { id: "b", text: "Traveling the world together and filling our passports with shared stamps ✈️", isCorrect: true },
      { id: "c", text: "Creating a cozy home filled with plants, warmth, laughter, and calm 🏡", isCorrect: true },
      { id: "d", text: "Supporting each other to achieve our highest individual and shared dreams 🌟", isCorrect: true },
    ],
    explanation: "Closing this distance is our promised milestone, and every day brings us one step closer.",
    sweetNote: "One day we won't have to say 'I miss you' over a screen. We will just say 'goodnight' in person."
  },
  {
    id: 10,
    roundId: 3,
    question: "How should we support each other on difficult days? 🌿",
    description: "When life gets heavy and energy runs low.",
    type: "romantic",
    options: [
      { id: "a", text: "With endless patience, soft words, and zero pressure 🌸", isCorrect: true },
      { id: "b", text: "Being a safe haven where you can vent, rest, or cry without fear 🫂", isCorrect: true },
      { id: "c", text: "Sending sweet surprises, cute reminders, and constant love notes 💌", isCorrect: true },
      { id: "d", text: "Standing steadfast like a rock, letting you lean on me completely 🪨❤️", isCorrect: true },
    ],
    explanation: "Love is sweetest when life is easy, but it is strongest when things are tough.",
    sweetNote: "You will never have to face a heavy storm alone, Amanda. I'm right here with you."
  },
  {
    id: 11,
    roundId: 3,
    question: "What kind of memories do we want to create together? 📸",
    description: "The chapters we are getting ready to write side-by-side.",
    type: "romantic",
    options: [
      { id: "a", text: "Funny little mishaps, spontaneous laughs, and goofy inside stories 😂", isCorrect: true },
      { id: "b", text: "Quiet lazy mornings with coffee, soft forehead kisses, and peace ☕", isCorrect: true },
      { id: "c", text: "Dressing up for candlelit dinners and celebrating our milestones 🥂", isCorrect: true },
      { id: "d", text: "A lifetime of quiet, ordinary days turned into extraordinary magic 💍", isCorrect: true },
    ],
    explanation: "A lifetime of memories with Amanda is the greatest adventure I could ever ask for.",
    sweetNote: "Every memory with you is already my favorite, and our best ones are still waiting."
  },
  {
    id: 12,
    roundId: 3,
    question: "What is the most important thing we want to protect in our relationship? 🔐",
    description: "The eternal promise sealed in our hearts.",
    type: "romantic",
    options: [
      { id: "a", text: "Our deep emotional bond, pure honesty, and unwavering trust 💎", isCorrect: true },
      { id: "b", text: "The childlike laughter, softness, and playfulness we bring out in each other 🧸", isCorrect: true },
      { id: "c", text: "Choosing each other every single day, through every season of life 🌅", isCorrect: true },
      { id: "d", text: "Our promise to always be each other's safest sanctuary and greatest love ♾️", isCorrect: true },
    ],
    explanation: "Amanda, you are my favorite person in this whole world, today, tomorrow, and forever.",
    sweetNote: "I choose you today, I will choose you tomorrow, and I will choose you a thousand times over."
  },
];

