// ─── Catalog ────────────────────────────────────────────────────────────────
// Crown IDs mirror the manifest asset_name convention (minus color suffix)
// e.g., 'cattleman' → assets/crowns/crown_cattleman_silverbelly.png

const catalog = {
  crowns: [
    { id: 'open',           label: 'Open',           tags: ['casual','western'],          priceMod: 0,   turnaround: 0 },
    { id: 'low-cattleman',  label: 'Low Cattleman',  tags: ['classic','western'],         priceMod: 10,  turnaround: 0 },
    { id: 'cattleman',      label: 'Cattleman',      tags: ['classic','western'],         priceMod: 20,  turnaround: 0 },
    { id: 'wide-cattleman', label: 'Wide Cattleman', tags: ['classic','bold'],            priceMod: 25,  turnaround: 0 },
    { id: 'ranch',          label: 'Ranch',          tags: ['rugged','casual'],           priceMod: 15,  turnaround: 0 },
    { id: 'gus',            label: 'Gus',            tags: ['bold','rugged'],             priceMod: 40,  turnaround: 1 },
    { id: 'brick',          label: 'Brick',          tags: ['modern','bold'],             priceMod: 45,  turnaround: 1 },
    { id: 'square-top',     label: 'Square Top',     tags: ['modern','dressy'],           priceMod: 50,  turnaround: 1 },
    { id: 'round-top',      label: 'Round Top',      tags: ['classic','versatile'],       priceMod: 30,  turnaround: 0 },
    { id: 'diamond-top',    label: 'Diamond Top',    tags: ['bold','dressy'],             priceMod: 55,  turnaround: 1 },
    { id: 'gambler',        label: 'Gambler',        tags: ['dressy','event'],            priceMod: 35,  turnaround: 1 },
    { id: 'clint',          label: 'Clint',          tags: ['rugged','western'],          priceMod: 45,  turnaround: 1 },
    { id: 'association',    label: 'Association',    tags: ['classic','western','event'], priceMod: 40,  turnaround: 1 },
    { id: 'puncher',        label: 'Puncher',        tags: ['bold','rugged'],             priceMod: 35,  turnaround: 0 },
    { id: 'luke',           label: 'Luke',           tags: ['modern','versatile'],        priceMod: 30,  turnaround: 0 },
  ],

  // Brim style: curl/roll profile. Matches manifest brim_style column.
  brimStyles: [
    { id: 'flat',          label: 'Flat',         tags: ['classic','clean'],   priceMod: 0,  curlRy: 22 },
    { id: 'low',           label: 'Low',          tags: ['classic'],           priceMod: 10, curlRy: 30 },
    { id: 'george',        label: 'George',       tags: ['traditional'],       priceMod: 15, curlRy: 36 },
    { id: 'half-taco',     label: 'Half Taco',    tags: ['western','rugged'],  priceMod: 20, curlRy: 42 },
    { id: 'relaxed-taco',  label: 'Relaxed Taco', tags: ['casual','western'],  priceMod: 20, curlRy: 40 },
    { id: 'taco',          label: 'Taco',         tags: ['western','bold'],    priceMod: 25, curlRy: 50 },
    { id: 'buckaroo',      label: 'Buckaroo',     tags: ['bold','rugged'],     priceMod: 35, curlRy: 58 },
    { id: 'retro',         label: 'Retro',        tags: ['vintage','dressy'],  priceMod: 25, curlRy: 43 },
    { id: 'rolled',        label: 'Rolled',       tags: ['classic','dressy'],  priceMod: 30, curlRy: 46 },
    { id: 'cone-and-go',   label: 'Cone & Go',    tags: ['western','bold'],    priceMod: 40, curlRy: 38 },
    { id: 'pencil-roll',   label: 'Pencil Roll',  tags: ['vintage','dressy'],  priceMod: 30, curlRy: 40 },
  ],

  // Brim edge: front/tip shape. Matches manifest brim_front column.
  brimEdges: [
    { id: 'pointed',    label: 'Pointed',    priceMod: 0,  rxMod: 0.95 },
    { id: 'round',      label: 'Round',      priceMod: 0,  rxMod: 1.0  },
    { id: 'square',     label: 'Square',     priceMod: 5,  rxMod: 1.0  },
    { id: 'wide',       label: 'Wide',       priceMod: 10, rxMod: 1.12 },
    { id: 'extra-wide', label: 'Extra Wide', priceMod: 20, rxMod: 1.28 },
  ],

  bands: [
    { id: 'grosgrain', label: 'Grosgrain Ribbon', priceMod: 0  },
    { id: 'leather',   label: 'Leather Band',     priceMod: 25 },
    { id: 'braided',   label: 'Braided Band',      priceMod: 35 },
    { id: 'horsehair', label: 'Horsehair Band',    priceMod: 50 },
    { id: 'concho',    label: 'Concho Band',       priceMod: 65 },
  ],

  materials: [
    { id: 'premium-felt', label: 'Premium Western Felt', priceMod: 0,    turnaround: '4–6 weeks' },
    { id: 'fur-felt-4x',  label: '4X Fur Felt',          priceMod: 150,  turnaround: '5–7 weeks' },
    { id: 'fur-felt-8x',  label: '8X Fur Felt',          priceMod: 300,  turnaround: '6–8 weeks' },
    { id: 'straw',        label: 'Premium Straw',         priceMod: -75,  turnaround: '3–5 weeks' },
  ],

  // Colors: silverbelly is the base manifest color; others via CSS filter on base PNG.
  colors: [
    { id: 'silverbelly', label: 'Silverbelly', hex: '#c4b99a', filter: 'none' },
    { id: 'black',       label: 'Black',       hex: '#1c1c1e', filter: 'brightness(0.12) saturate(0)' },
    { id: 'chocolate',   label: 'Chocolate',   hex: '#3d1f10', filter: 'sepia(100%) saturate(280%) hue-rotate(345deg) brightness(0.52)' },
    { id: 'buckskin',    label: 'Buckskin',    hex: '#c8924a', filter: 'sepia(70%) saturate(220%) hue-rotate(15deg) brightness(1.08)' },
    { id: 'natural',     label: 'Natural',     hex: '#e2d0b0', filter: 'sepia(20%) saturate(50%) brightness(1.22)' },
    { id: 'pecan',       label: 'Pecan',       hex: '#7a5230', filter: 'sepia(100%) saturate(200%) hue-rotate(352deg) brightness(0.7)' },
    { id: 'steel-grey',  label: 'Steel Grey',  hex: '#5e6166', filter: 'saturate(10%) brightness(0.78)' },
    { id: 'caribou',     label: 'Caribou',     hex: '#9a7a60', filter: 'sepia(50%) saturate(130%) brightness(0.92)' },
  ],
};

const BASE_PRICE = 500;

// ─── Compatibility rules ────────────────────────────────────────────────────
// [crownId, brimStyleId] combos that clash aesthetically.
const blockedPairs = [
  ['gambler',    'buckaroo'],
  ['gambler',    'taco'],
  ['gambler',    'cone-and-go'],
  ['brick',      'taco'],
  ['brick',      'buckaroo'],
  ['square-top', 'buckaroo'],
];
const FALLBACK_BRIM_STYLE = 'flat';

// ─── Quiz ───────────────────────────────────────────────────────────────────
const quiz = [
  {
    id: 'inspiration',
    question: 'What draws you to a custom hat?',
    options: [
      { label: 'Western Heritage',     crownTags: ['classic','western'],       brimTags: ['classic','western'] },
      { label: 'City Western Style',   crownTags: ['modern','versatile'],      brimTags: ['classic','vintage'] },
      { label: 'Special Event / Bride',crownTags: ['dressy','event'],          brimTags: ['vintage','dressy']  },
      { label: 'Working Ranch',        crownTags: ['rugged','casual'],         brimTags: ['western','rugged']  },
    ],
  },
  {
    id: 'silhouette',
    question: 'What silhouette speaks to you?',
    options: [
      { label: 'Classic & Traditional', crownIds: ['cattleman','low-cattleman','association'] },
      { label: 'Tall & Dramatic',       crownIds: ['gus','clint','association','puncher']     },
      { label: 'Low & Clean',           crownIds: ['open','gambler','low-cattleman']          },
      { label: 'Modern & Unique',       crownIds: ['brick','square-top','diamond-top','luke'] },
    ],
  },
  {
    id: 'brimVibe',
    question: 'How do you want your brim?',
    options: [
      { label: 'Flat & Sharp',          brimStyleId: 'flat',         brimEdgeId: 'square'    },
      { label: 'Slight Curve',          brimStyleId: 'low',          brimEdgeId: 'round'     },
      { label: 'Classic Western Curl',  brimStyleId: 'taco',         brimEdgeId: 'wide'      },
      { label: 'Dramatic Roll',         brimStyleId: 'buckaroo',     brimEdgeId: 'round'     },
    ],
  },
  {
    id: 'material',
    question: 'What material suits your lifestyle?',
    options: [
      { label: 'Premium Western Felt — everyday workhorse', materialId: 'premium-felt' },
      { label: '4X Fur Felt — heirloom quality',            materialId: 'fur-felt-4x'  },
      { label: '8X Fur Felt — top of the line',             materialId: 'fur-felt-8x'  },
      { label: 'Premium Straw — warm weather',              materialId: 'straw'         },
    ],
  },
  {
    id: 'occasion',
    question: 'Color direction?',
    options: [
      { label: 'Silverbelly — the classic neutral', colorId: 'silverbelly' },
      { label: 'Black — bold statement',            colorId: 'black'       },
      { label: 'Chocolate — rich & warm',           colorId: 'chocolate'   },
      { label: 'Natural — light & airy',            colorId: 'natural'     },
    ],
  },
];

// ─── State ──────────────────────────────────────────────────────────────────
const state = {
  mode: 'quiz',    // 'quiz' | 'builder'
  quizStep: 0,
  answers: {},
  selected: {
    crownId:      'cattleman',
    brimStyleId:  'taco',
    brimEdgeId:   'round',
    bandId:       'grosgrain',
    materialId:   'premium-felt',
    colorId:      'silverbelly',
  },
};

// ─── DOM refs ───────────────────────────────────────────────────────────────
const el = {
  quizSection:     document.getElementById('quizSection'),
  builderSection:  document.getElementById('builderSection'),
  quizStep:        document.getElementById('quizStep'),
  quizProgressBar: document.getElementById('quizProgressBar'),
  quizProgressLbl: document.getElementById('quizProgressLabel'),
  prevBtn:         document.getElementById('prevBtn'),
  nextBtn:         document.getElementById('nextBtn'),
  crownSelect:     document.getElementById('crownSelect'),
  brimStyleSelect: document.getElementById('brimStyleSelect'),
  brimEdgeSelect:  document.getElementById('brimEdgeSelect'),
  bandSelect:      document.getElementById('bandSelect'),
  materialSelect:  document.getElementById('materialSelect'),
  colorChips:      document.getElementById('colorChips'),
  layerBrim:       document.getElementById('layerBrim'),
  layerCrown:      document.getElementById('layerCrown'),
  layerBand:       document.getElementById('layerBand'),
  svgDefs:         document.getElementById('svgDefs'),
  buildCode:       document.getElementById('buildCode'),
  buildSummary:    document.getElementById('buildSummary'),
  buildPrice:      document.getElementById('buildPrice'),
  buildTurnaround: document.getElementById('buildTurnaround'),
  compatNote:      document.getElementById('compatNote'),
  assetBadge:      document.getElementById('assetBadge'),
  shareBtn:        document.getElementById('shareBtn'),
  shareToast:      document.getElementById('shareToast'),
  saveBtn:         document.getElementById('saveBtn'),
  tabs:            document.querySelectorAll('.tab'),
};

// ─── Init ───────────────────────────────────────────────────────────────────
function init() {
  loadFromHash();
  buildColorChips();
  populateSelect(el.crownSelect,     catalog.crowns,      'crownId');
  populateSelect(el.brimStyleSelect, catalog.brimStyles,  'brimStyleId');
  populateSelect(el.brimEdgeSelect,  catalog.brimEdges,   'brimEdgeId');
  populateSelect(el.bandSelect,      catalog.bands,       'bandId');
  populateSelect(el.materialSelect,  catalog.materials,   'materialId');
  wireModeTabs();
  wireQuizButtons();
  wireShareButtons();
  renderQuizStep();
  enforceCompatibility();
  renderPreview();
  applyMode();
}

// ─── Mode tabs ──────────────────────────────────────────────────────────────
function wireModeTabs() {
  el.tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      state.mode = tab.dataset.mode;
      el.tabs.forEach((t) => {
        t.classList.toggle('active', t === tab);
        t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
      });
      applyMode();
    });
  });
}

function applyMode() {
  const isBuilder = state.mode === 'builder';
  el.quizSection.hidden   = isBuilder;
  el.builderSection.hidden = !isBuilder;
}

// ─── Quiz ───────────────────────────────────────────────────────────────────
function wireQuizButtons() {
  el.prevBtn.addEventListener('click', () => {
    state.quizStep = Math.max(0, state.quizStep - 1);
    renderQuizStep();
  });
  el.nextBtn.addEventListener('click', () => {
    if (state.quizStep < quiz.length - 1) {
      state.quizStep += 1;
      renderQuizStep();
      return;
    }
    // Final step: apply answers → switch to builder
    applyQuizAnswers();
    state.mode = 'builder';
    el.tabs.forEach((t) => {
      const isBuilder = t.dataset.mode === 'builder';
      t.classList.toggle('active', isBuilder);
      t.setAttribute('aria-selected', isBuilder ? 'true' : 'false');
    });
    applyMode();
    renderPreview();
  });
}

function renderQuizStep() {
  const step = quiz[state.quizStep];
  const answered = state.answers[step.id];
  const pct = ((state.quizStep) / quiz.length) * 100;

  el.quizProgressBar.style.width = pct + '%';
  el.quizProgressLbl.textContent = `Step ${state.quizStep + 1} of ${quiz.length}`;

  el.quizStep.innerHTML = `
    <h3>${step.question}</h3>
    <div class="options">
      ${step.options
        .map((opt) => `<button data-opt="${opt.label}" class="${answered === opt.label ? 'active' : ''}">${opt.label}</button>`)
        .join('')}
    </div>
  `;

  el.quizStep.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.answers[step.id] = btn.dataset.opt;
      renderQuizStep();
    });
  });

  el.prevBtn.disabled = state.quizStep === 0;
  el.nextBtn.textContent = state.quizStep === quiz.length - 1 ? 'Build My Hat' : 'Next';
}

function applyQuizAnswers() {
  quiz.forEach((step) => {
    const answer = state.answers[step.id];
    if (!answer) return;
    const opt = step.options.find((o) => o.label === answer);
    if (!opt) return;

    if (opt.crownIds) {
      // Pick a random crown from the suggested list
      state.selected.crownId = opt.crownIds[Math.floor(Math.random() * opt.crownIds.length)];
    }
    if (opt.brimStyleId) state.selected.brimStyleId = opt.brimStyleId;
    if (opt.brimEdgeId)  state.selected.brimEdgeId  = opt.brimEdgeId;
    if (opt.materialId)  state.selected.materialId  = opt.materialId;
    if (opt.colorId)     state.selected.colorId     = opt.colorId;
  });

  enforceCompatibility();
  syncSelects();
  syncColorChips();
}

// ─── Builder selects ────────────────────────────────────────────────────────
function populateSelect(select, items, stateKey) {
  select.innerHTML = items.map((item) => `<option value="${item.id}">${item.label}</option>`).join('');
  select.value = state.selected[stateKey];
  select.addEventListener('change', () => {
    state.selected[stateKey] = select.value;
    enforceCompatibility();
    syncSelects();
    renderPreview();
  });
}

function syncSelects() {
  el.crownSelect.value     = state.selected.crownId;
  el.brimStyleSelect.value = state.selected.brimStyleId;
  el.brimEdgeSelect.value  = state.selected.brimEdgeId;
  el.bandSelect.value      = state.selected.bandId;
  el.materialSelect.value  = state.selected.materialId;
}

// ─── Color chips ────────────────────────────────────────────────────────────
function buildColorChips() {
  el.colorChips.innerHTML = catalog.colors.map((c) => `
    <button class="color-chip ${c.id === state.selected.colorId ? 'active' : ''}"
            data-color-id="${c.id}" title="${c.label}" role="radio"
            aria-checked="${c.id === state.selected.colorId}">
      <span class="chip-swatch" style="background:${c.hex}"></span>
      <span class="chip-label">${c.label}</span>
    </button>
  `).join('');

  el.colorChips.querySelectorAll('.color-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      state.selected.colorId = chip.dataset.colorId;
      syncColorChips();
      renderPreview();
    });
  });
}

function syncColorChips() {
  el.colorChips.querySelectorAll('.color-chip').forEach((chip) => {
    const active = chip.dataset.colorId === state.selected.colorId;
    chip.classList.toggle('active', active);
    chip.setAttribute('aria-checked', active);
  });
}

// ─── Compatibility ──────────────────────────────────────────────────────────
function enforceCompatibility() {
  const { crownId, brimStyleId } = state.selected;
  const blocked = blockedPairs.some(([c, b]) => c === crownId && b === brimStyleId);
  if (blocked) {
    state.selected.brimStyleId = FALLBACK_BRIM_STYLE;
    showCompatNote(`${getPart('crowns', crownId).label} pairs better with a flat or low brim — we've updated your selection.`);
  } else {
    hideCompatNote();
  }
}

function showCompatNote(msg) {
  el.compatNote.textContent = msg;
  el.compatNote.hidden = false;
}
function hideCompatNote() {
  el.compatNote.hidden = true;
}

// ─── Preview rendering ──────────────────────────────────────────────────────
function renderPreview() {
  const { crownId, brimStyleId, brimEdgeId, bandId, materialId, colorId } = state.selected;
  const crown    = getPart('crowns',      crownId);
  const brimSt   = getPart('brimStyles',  brimStyleId);
  const brimEd   = getPart('brimEdges',   brimEdgeId);
  const band     = getPart('bands',       bandId);
  const material = getPart('materials',   materialId);
  const color    = getPart('colors',      colorId);

  // Try to load PNG assets; fall back to SVG shapes
  loadLayer(el.layerBrim,  crownAssetPath(crown,  color), brimSvgFallback(brimSt, brimEd, color));
  loadLayer(el.layerCrown, crownAssetPath(crown, color),  crownSvgFallback(crown, color));
  el.layerBand.innerHTML = bandSvg(band);
  el.svgDefs.innerHTML   = bandDefs();

  // Pricing & metadata
  const base  = BASE_PRICE;
  const total = base + crown.priceMod + brimSt.priceMod + brimEd.priceMod + band.priceMod + material.priceMod;
  const code  = makeBuildCode(crownId, brimStyleId, brimEdgeId, bandId, colorId);

  el.buildCode.textContent     = `BHC-${code}`;
  el.buildSummary.textContent  = `${crown.label} crown · ${brimSt.label} / ${brimEd.label} brim · ${band.label} · ${material.label} · ${color.label}`;
  el.buildPrice.textContent    = `Est. from $${total}`;
  el.buildTurnaround.textContent = material.turnaround;

  saveToHash();
}

// Asset path convention matches the manifest output_filename pattern.
// Crown: assets/crowns/crown_{id}_silverbelly.png (color applied via CSS filter)
// Brim:  assets/brims/brim_{style}_{edge}_silverbelly.png
function crownAssetPath(crown, color) {
  const id = crown.id.replace(/-/g, '_');
  return `assets/crowns/crown_${id}_silverbelly.png`;
}

function brimAssetPath(brimSt, brimEd) {
  const s = brimSt.id.replace(/-/g, '_').replace('&', 'and');
  const e = brimEd.id.replace(/-/g, '_');
  return `assets/brims/brim_${s}_${e}_silverbelly.png`;
}

// Attempt to load a PNG; on failure use the SVG fallback.
// For SVG <image> elements, onerror fires when the src 404s.
function loadLayer(group, assetPath, fallbackSvg) {
  // Always render SVG immediately so there's no blank flash
  group.innerHTML = fallbackSvg;

  const testImg = document.createElementNS('http://www.w3.org/2000/svg', 'image');
  const filter  = getPart('colors', state.selected.colorId).filter;

  testImg.setAttribute('href', assetPath);
  testImg.setAttribute('x', '0');
  testImg.setAttribute('y', '0');
  testImg.setAttribute('width', '420');
  testImg.setAttribute('height', '300');
  testImg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  testImg.style.filter = filter;

  testImg.addEventListener('load', () => {
    group.innerHTML = '';
    group.appendChild(testImg);
    el.assetBadge.textContent = 'Composited from part assets';
    el.assetBadge.classList.add('has-assets');
  });
  // On error: keep the SVG fallback (already rendered above)
}

// ─── SVG fallback shapes ─────────────────────────────────────────────────────
// These are schematic placeholders; real PNGs replace them per the manifest.

const crownPaths = {
  'open':           'M122 148 Q135 128 210 122 Q285 128 298 148 L296 172 Q210 183 124 172 Z',
  'low-cattleman':  'M126 135 Q142 110 170 103 Q210 95 250 103 Q278 110 294 135 L292 172 Q210 183 128 172 Z',
  'cattleman':      'M128 120 Q148 90 178 82 Q210 73 242 82 Q272 90 292 120 L290 172 Q210 182 130 172 Z',
  'wide-cattleman': 'M112 122 Q135 90 170 81 Q210 71 250 81 Q285 90 308 122 L305 172 Q210 183 115 172 Z',
  'ranch':          'M130 125 Q148 98 176 89 Q210 80 244 89 Q272 98 290 125 L288 172 Q210 182 132 172 Z',
  'gus':            'M132 100 Q150 62 182 50 Q210 42 238 50 Q270 62 288 100 L285 172 Q210 182 135 172 Z',
  'brick':          'M140 105 L140 52 L280 52 L280 105 Q292 120 294 145 L292 172 Q210 182 128 172 Q128 120 140 105 Z',
  'square-top':     'M138 108 Q142 74 165 62 L165 50 L255 50 L255 62 Q278 74 282 108 L280 172 Q210 182 140 172 Z',
  'round-top':      'M136 108 Q146 68 210 50 Q274 68 284 108 L282 172 Q210 182 138 172 Z',
  'diamond-top':    'M152 102 Q175 72 210 44 Q245 72 268 102 L284 135 L282 172 Q210 182 138 172 L136 135 Z',
  'gambler':        'M130 145 Q142 118 210 110 Q278 118 290 145 L288 172 Q210 182 132 172 Z',
  'clint':          'M142 96 Q152 56 182 44 Q210 36 238 44 Q268 56 278 96 Q292 118 292 142 L290 172 Q210 182 130 172 Q128 118 142 96 Z',
  'association':    'M136 96 Q152 58 184 46 Q210 38 236 46 Q268 58 284 96 L288 130 L286 172 Q210 182 134 172 L132 130 Z',
  'puncher':        'M132 100 Q148 60 210 46 Q272 60 288 100 L286 172 Q210 182 134 172 Z',
  'luke':           'M138 112 Q153 80 182 70 Q210 62 238 70 Q267 80 282 112 L280 172 Q210 182 140 172 Z',
};

function crownSvgFallback(crown, color) {
  const path = crownPaths[crown.id] || crownPaths['cattleman'];
  return `<path d="${path}" fill="#939393" style="filter:${color.filter}" />`;
}

function brimSvgFallback(brimSt, brimEd, color) {
  const baseRx = 168 * brimEd.rxMod;
  const ry     = brimSt.curlRy;
  const cy     = 186 + Math.round((ry - 22) * 0.18); // sink deeper as curl increases
  return `<ellipse cx="210" cy="${cy}" rx="${Math.round(baseRx)}" ry="${ry}" fill="#8a8a8a" style="filter:${color.filter}" />`;
}

function bandSvg(band) {
  const fills = {
    grosgrain: '#1a1a1a',
    leather:   '#4a2210',
    braided:   'url(#braidPat)',
    horsehair: 'url(#hairPat)',
    concho:    '#2a2a2a',
  };
  const fill = fills[band.id] || '#222';
  let extra = '';
  if (band.id === 'concho') {
    // Small concho circles along band
    extra = [0, 1, 2, 3].map((i) => `<circle cx="${158 + i * 28}" cy="164" r="7" fill="#c8a04a" stroke="#2a2a2a" stroke-width="1.5" />`).join('');
  }
  return `<rect x="138" y="156" width="144" height="16" fill="${fill}" rx="3" />${extra}`;
}

function bandDefs() {
  return `
    <pattern id="braidPat" width="10" height="10" patternUnits="userSpaceOnUse">
      <rect width="10" height="10" fill="#6c4f37" />
      <path d="M0 0L10 10 M10 0L0 10" stroke="#9f7b5c" stroke-width="1.5" />
    </pattern>
    <pattern id="hairPat" width="4" height="10" patternUnits="userSpaceOnUse">
      <rect width="4" height="10" fill="#1a1a1a" />
      <line x1="2" y1="0" x2="2" y2="10" stroke="#555" stroke-width="0.8" />
    </pattern>
  `;
}

// ─── Build code ──────────────────────────────────────────────────────────────
function makeBuildCode(crownId, brimStyleId, brimEdgeId, bandId, colorId) {
  const seg = (id, len = 2) => id.replace(/-/g, '').slice(0, len).toUpperCase();
  return `${seg(crownId)}${seg(brimStyleId)}${seg(brimEdgeId)}${seg(bandId)}${seg(colorId)}`;
}

// ─── URL hash persistence ────────────────────────────────────────────────────
function saveToHash() {
  const { crownId, brimStyleId, brimEdgeId, bandId, materialId, colorId } = state.selected;
  const params = new URLSearchParams({ c: crownId, bs: brimStyleId, be: brimEdgeId, b: bandId, m: materialId, col: colorId });
  history.replaceState(null, '', '#' + params.toString());
}

function loadFromHash() {
  const hash = location.hash.slice(1);
  if (!hash) return;
  const params = new URLSearchParams(hash);
  const map = { c: 'crownId', bs: 'brimStyleId', be: 'brimEdgeId', b: 'bandId', m: 'materialId', col: 'colorId' };
  Object.entries(map).forEach(([key, stateKey]) => {
    if (params.has(key)) state.selected[stateKey] = params.get(key);
  });
  // If loaded from a shared link, go straight to builder
  if (hash.length > 0) state.mode = 'builder';
}

// ─── Share / Save ────────────────────────────────────────────────────────────
function wireShareButtons() {
  const copyUrl = () => {
    navigator.clipboard.writeText(location.href).then(() => {
      el.shareToast.hidden = false;
      setTimeout(() => { el.shareToast.hidden = true; }, 2200);
    });
  };
  el.shareBtn.addEventListener('click', copyUrl);
  el.saveBtn.addEventListener('click', copyUrl);
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function getPart(type, id) {
  return catalog[type].find((p) => p.id === id) || catalog[type][0];
}

// ─── Boot ────────────────────────────────────────────────────────────────────
init();
