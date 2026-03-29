window.BHC_HAT_CONFIG = {
  appointmentUrl: 'https://broadmoorhatco.com/pages/appointments',
  designerPagePath: '/pages/hat-designer',
  resultKeys: ['western_formal', 'everyday_classic', 'bold_statement', 'rugged_traditional'],
  tieBreakerQuestionOrder: [1, 7, 8],
  colors: [
    { id: 'pecan', label: 'Pecan', hex: '#7A4B2A' },
    { id: 'black', label: 'Black', hex: '#101010' },
    { id: 'chocolate', label: 'Chocolate', hex: '#4B2E22' },
    { id: 'silverbelly', label: 'Silverbelly', hex: '#C8BFAA' },
    { id: 'white', label: 'White', hex: '#F3F2EE' }
  ],
  parts: {
    brim: [
      { id: 'brim_george', label: 'George', asset: 'brim_george.png', category: 'brim' },
      { id: 'brim_low', label: 'Low', asset: 'brim_low.png', category: 'brim' },
      { id: 'brim_flat', label: 'Flat', asset: 'brim_flat.png', category: 'brim' }
    ],
    crown: [
      { id: 'crown_cattleman', label: 'Cattleman', asset: 'crown_cattleman.png', category: 'crown' },
      { id: 'crown_round_top', label: 'Round Top', asset: 'crown_round_top.png', category: 'crown' },
      { id: 'crown_gus', label: 'Gus', asset: 'crown_gus.png', category: 'crown' },
      { id: 'crown_wide_cattleman', label: 'Wide Cattleman', asset: 'crown_wide_cattleman.png', category: 'crown' }
    ],
    band: [
      { id: 'band_leather', label: 'Leather', asset: 'band_leather.png', category: 'band' },
      { id: 'band_horsehair', label: 'Horsehair', asset: 'band_horsehair.png', category: 'band' },
      { id: 'band_beaded', label: 'Beaded', asset: 'band_beaded.png', category: 'band' }
    ]
  },
  results: {
    western_formal: {
      key: 'western_formal',
      title: 'Western Formal',
      body: 'Your answers pointed toward a polished, elevated western style with clean lines and a timeless presence. This result is designed for weddings, formal events, and dress-forward occasions where you want your hat to feel refined, intentional, and classic.',
      build: { color: 'black', crown: 'crown_cattleman', brim: 'brim_george', band: 'band_leather' }
    },
    everyday_classic: {
      key: 'everyday_classic',
      title: 'Everyday Classic',
      body: 'Your answers leaned toward a versatile western style that feels natural in almost any setting. This result is built around balance, wearability, and timeless character, giving you a custom hat that feels easy to wear while still distinctly western.',
      build: { color: 'pecan', crown: 'crown_round_top', brim: 'brim_george', band: 'band_horsehair' }
    },
    bold_statement: {
      key: 'bold_statement',
      title: 'Bold Statement',
      body: 'Your answers showed a preference for individuality, confidence, and a stronger visual presence. This result starts with a more distinctive western profile that stands out in a crowd while still feeling grounded in premium craftsmanship.',
      build: { color: 'silverbelly', crown: 'crown_gus', brim: 'brim_low', band: 'band_beaded' }
    },
    rugged_traditional: {
      key: 'rugged_traditional',
      title: 'Rugged Traditional',
      body: 'Your answers aligned with a heritage-driven western style rooted in authenticity, grit, and tradition. This result reflects a stronger traditional character with a practical, grounded look inspired by classic western wear.',
      build: { color: 'chocolate', crown: 'crown_wide_cattleman', brim: 'brim_flat', band: 'band_leather' }
    }
  },
  quiz: [
    { id: 1, prompt: 'What are you most likely wearing this hat for?', answers: [
      { id: 'A', text: 'Weddings, formal events, or elevated occasions', result: 'western_formal' },
      { id: 'B', text: 'A little bit of everything', result: 'everyday_classic' },
      { id: 'C', text: 'Making a statement and standing out', result: 'bold_statement' },
      { id: 'D', text: 'Everyday western wear, ranch, or heritage style', result: 'rugged_traditional' }
    ]},
    { id: 2, prompt: 'What kind of first impression do you want your hat to give?', answers: [
      { id: 'A', text: 'Polished and refined', result: 'western_formal' },
      { id: 'B', text: 'Timeless and easy to wear', result: 'everyday_classic' },
      { id: 'C', text: 'Confident and unforgettable', result: 'bold_statement' },
      { id: 'D', text: 'Authentic and grounded', result: 'rugged_traditional' }
    ]},
    { id: 3, prompt: 'Which overall look feels most like you?', answers: [
      { id: 'A', text: 'Clean and elevated', result: 'western_formal' },
      { id: 'B', text: 'Classic and versatile', result: 'everyday_classic' },
      { id: 'C', text: 'Bold and fashion-forward', result: 'bold_statement' },
      { id: 'D', text: 'Traditional and rugged', result: 'rugged_traditional' }
    ]},
    { id: 4, prompt: 'How much attention do you want your hat to draw?', answers: [
      { id: 'A', text: 'Subtle and tasteful', result: 'western_formal' },
      { id: 'B', text: 'Noticeable, but balanced', result: 'everyday_classic' },
      { id: 'C', text: 'A strong visual statement', result: 'bold_statement' },
      { id: 'D', text: 'More functional than flashy', result: 'rugged_traditional' }
    ]},
    { id: 5, prompt: 'What best matches your wardrobe?', answers: [
      { id: 'A', text: 'Dress clothes, tailored looks, and formal westernwear', result: 'western_formal' },
      { id: 'B', text: 'Denim, boots, and everyday staples', result: 'everyday_classic' },
      { id: 'C', text: 'Standout outfits and elevated styling', result: 'bold_statement' },
      { id: 'D', text: 'Workwear, heritage westernwear, and durable basics', result: 'rugged_traditional' }
    ]},
    { id: 6, prompt: 'Which shape direction appeals to you most?', answers: [
      { id: 'A', text: 'Sleek and refined', result: 'western_formal' },
      { id: 'B', text: 'Balanced and classic', result: 'everyday_classic' },
      { id: 'C', text: 'Sharp and striking', result: 'bold_statement' },
      { id: 'D', text: 'Traditional and sturdy', result: 'rugged_traditional' }
    ]},
    { id: 7, prompt: 'What matters most in your custom hat?', answers: [
      { id: 'A', text: 'Looking elevated for important occasions', result: 'western_formal' },
      { id: 'B', text: 'Having one hat that works for almost everything', result: 'everyday_classic' },
      { id: 'C', text: 'Creating something unique', result: 'bold_statement' },
      { id: 'D', text: 'Wearing something authentic and rooted in western tradition', result: 'rugged_traditional' }
    ]},
    { id: 8, prompt: 'Which outcome sounds best to you?', answers: [
      { id: 'A', text: 'A refined western hat for elevated moments', result: 'western_formal' },
      { id: 'B', text: 'A go-to western hat I can wear anywhere', result: 'everyday_classic' },
      { id: 'C', text: 'A standout custom hat with strong personality', result: 'bold_statement' },
      { id: 'D', text: 'A traditional western hat with grit and character', result: 'rugged_traditional' }
    ]}
  ]
};
