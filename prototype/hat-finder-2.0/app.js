const catalog = {
  crowns: [
    { id: 'cattleman', label: 'Cattleman', shapeTags: ['classic', 'western'], priceMod: 40, height: 'mid' },
    { id: 'teardrop', label: 'Teardrop', shapeTags: ['modern', 'sleek'], priceMod: 60, height: 'mid' },
    { id: 'pinch-front', label: 'Pinch Front', shapeTags: ['dressy', 'bold'], priceMod: 80, height: 'high' },
  ],
  brims: [
    { id: 'four-flat', label: '4” Flat', shapeTags: ['classic', 'bold'], priceMod: 30, width: 4 },
    { id: 'three-quarter-curve', label: '3.75” Curve', shapeTags: ['versatile'], priceMod: 20, width: 3.75 },
    { id: 'three-curved', label: '3” Traditional Curve', shapeTags: ['dressy'], priceMod: 10, width: 3 },
  ],
  bands: [
    { id: 'grosgrain', label: 'Grosgrain Ribbon', priceMod: 10 },
    { id: 'leather', label: 'Leather Band', priceMod: 25 },
    { id: 'braided', label: 'Braided Band', priceMod: 35 },
  ],
  palettes: [
    { id: 'sand', label: 'Sand', color: '#c9b08b' },
    { id: 'charcoal', label: 'Charcoal', color: '#4a4a4f' },
    { id: 'sage', label: 'Sage', color: '#98a38d' },
    { id: 'rust', label: 'Rust', color: '#9f5a41' },
  ],
};

const compatibility = {
  blocked: [
    ['pinch-front', 'four-flat'],
  ],
};

const quiz = [
  { id: 'inspiration', question: 'What is your inspiration?', options: ['Rodeo Heritage', 'City Western', 'Bridal', 'Corporate Event'] },
  { id: 'shape', question: 'What overall silhouette feels right?', options: ['Classic', 'Bold', 'Modern', 'Dressy'] },
  { id: 'occasion', question: 'What are you wearing this for?', options: ['Daily Wear', 'Special Event', 'Wedding', 'Brand Activation'] },
];

const state = {
  step: 0,
  answers: {},
  selected: {
    crownId: 'cattleman',
    brimId: 'three-quarter-curve',
    bandId: 'grosgrain',
    paletteId: 'sand',
  },
};

const el = {
  quizStep: document.getElementById('quizStep'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  crownSelect: document.getElementById('crownSelect'),
  brimSelect: document.getElementById('brimSelect'),
  bandSelect: document.getElementById('bandSelect'),
  colorSelect: document.getElementById('colorSelect'),
  layerBrim: document.getElementById('layerBrim'),
  layerCrown: document.getElementById('layerCrown'),
  layerBand: document.getElementById('layerBand'),
  buildCode: document.getElementById('buildCode'),
  buildSummary: document.getElementById('buildSummary'),
  buildPrice: document.getElementById('buildPrice'),
};

function init() {
  wireQuizButtons();
  populateSelect(el.crownSelect, catalog.crowns, 'crownId');
  populateSelect(el.brimSelect, catalog.brims, 'brimId');
  populateSelect(el.bandSelect, catalog.bands, 'bandId');
  populateSelect(el.colorSelect, catalog.palettes, 'paletteId');
  renderQuizStep();
  applyQuizRecommendation();
  renderPreview();
}

function wireQuizButtons() {
  el.prevBtn.addEventListener('click', () => {
    state.step = Math.max(0, state.step - 1);
    renderQuizStep();
  });

  el.nextBtn.addEventListener('click', () => {
    if (state.step < quiz.length - 1) {
      state.step += 1;
      renderQuizStep();
      return;
    }
    applyQuizRecommendation();
    renderPreview();
  });
}

function renderQuizStep() {
  const current = quiz[state.step];
  const answer = state.answers[current.id];

  el.quizStep.innerHTML = `
    <h3>Step ${state.step + 1}: ${current.question}</h3>
    <div class="options">
      ${current.options
        .map((option) => `<button data-option="${option}" class="${answer === option ? 'active' : ''}">${option}</button>`)
        .join('')}
    </div>
  `;

  el.quizStep.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      state.answers[current.id] = button.dataset.option;
      renderQuizStep();
    });
  });

  el.prevBtn.disabled = state.step === 0;
  el.nextBtn.textContent = state.step === quiz.length - 1 ? 'Apply to Designer' : 'Next';
}

function applyQuizRecommendation() {
  const shape = state.answers.shape;

  if (shape === 'Bold') {
    state.selected.crownId = 'pinch-front';
    state.selected.brimId = 'three-curved';
    state.selected.bandId = 'braided';
  }
  if (shape === 'Classic') {
    state.selected.crownId = 'cattleman';
    state.selected.brimId = 'four-flat';
    state.selected.bandId = 'grosgrain';
  }
  if (shape === 'Modern') {
    state.selected.crownId = 'teardrop';
    state.selected.brimId = 'three-quarter-curve';
    state.selected.bandId = 'leather';
  }

  enforceCompatibility();
  syncSelects();
}

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
  el.crownSelect.value = state.selected.crownId;
  el.brimSelect.value = state.selected.brimId;
  el.bandSelect.value = state.selected.bandId;
  el.colorSelect.value = state.selected.paletteId;
}

function enforceCompatibility() {
  const pair = [state.selected.crownId, state.selected.brimId];
  const blocked = compatibility.blocked.some(([crownId, brimId]) => crownId === pair[0] && brimId === pair[1]);

  if (blocked) {
    state.selected.brimId = 'three-quarter-curve';
  }
}

function getSelectedPart(type, id) {
  return catalog[type].find((part) => part.id === id);
}

function renderPreview() {
  const crown = getSelectedPart('crowns', state.selected.crownId);
  const brim = getSelectedPart('brims', state.selected.brimId);
  const band = getSelectedPart('bands', state.selected.bandId);
  const palette = getSelectedPart('palettes', state.selected.paletteId);

  const tintFilter = buildCssFilter(palette.color);
  el.layerBrim.innerHTML = brimSvg(tintFilter);
  el.layerCrown.innerHTML = crownSvg(tintFilter, crown.id);
  el.layerBand.innerHTML = bandSvg(band.id);

  const base = 420;
  const total = base + crown.priceMod + brim.priceMod + band.priceMod;
  const code = buildCode(crown.id, brim.id, band.id, palette.id);

  el.buildCode.textContent = `Build Code: ${code}`;
  el.buildSummary.textContent = `${crown.label} crown + ${brim.label} brim + ${band.label} in ${palette.label}`;
  el.buildPrice.textContent = `Estimated Starting Price: $${total}`;
}

function buildCssFilter(hex) {
  // This prototype uses a simple hue-rotate + saturate filter approximation.
  // Production should use per-part masks with calibrated HSL transforms.
  const map = {
    '#c9b08b': 'sepia(18%) saturate(95%) hue-rotate(350deg)',
    '#4a4a4f': 'grayscale(20%) brightness(0.6)',
    '#98a38d': 'sepia(20%) saturate(70%) hue-rotate(45deg)',
    '#9f5a41': 'sepia(55%) saturate(150%) hue-rotate(340deg)',
  };
  return map[hex] ?? 'none';
}

function buildCode(crownId, brimId, bandId, paletteId) {
  return `BHC-${crownId.slice(0, 2).toUpperCase()}${brimId.slice(0, 2).toUpperCase()}${bandId.slice(0, 2).toUpperCase()}${paletteId.slice(0, 2).toUpperCase()}`;
}

function brimSvg(filter) {
  return `<ellipse cx="210" cy="190" rx="180" ry="52" fill="#8f8f8f" style="filter:${filter}" />`;
}

function crownSvg(filter, crownId) {
  const pathByCrown = {
    cattleman: 'M130 95 Q210 45 290 95 L290 180 Q210 210 130 180 Z',
    teardrop: 'M140 98 Q210 34 280 98 L280 178 Q210 205 140 178 Z',
    'pinch-front': 'M145 104 Q210 26 275 104 L275 180 Q210 208 145 180 Z',
  };

  return `<path d="${pathByCrown[crownId]}" fill="#8c8c8c" style="filter:${filter}" />`;
}

function bandSvg(bandId) {
  const bandFill = {
    grosgrain: '#222',
    leather: '#5a321f',
    braided: 'url(#braidPattern)',
  };

  return `
    <defs>
      <pattern id="braidPattern" width="10" height="10" patternUnits="userSpaceOnUse">
        <rect width="10" height="10" fill="#6c4f37" />
        <path d="M0 0L10 10 M10 0L0 10" stroke="#9f7b5c" stroke-width="1" />
      </pattern>
    </defs>
    <rect x="140" y="154" width="140" height="18" fill="${bandFill[bandId]}" rx="3" />
  `;
}

init();
