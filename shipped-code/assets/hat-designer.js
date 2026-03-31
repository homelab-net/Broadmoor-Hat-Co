(function () {
  'use strict';

  const root = document.querySelector('[data-hat-designer-root]');
  if (!root || !window.BHC_HAT_CONFIG) return;

  const { colors, parts, results, appointmentUrl } = window.BHC_HAT_CONFIG;

  // Asset base URL injected by Liquid template via data-asset-base attribute.
  // Trailing slash is normalised below.
  const rawBase  = root.dataset.assetBase || '';
  const assetBase = rawBase.endsWith('/') ? rawBase : rawBase + '/';

  const canvas = root.querySelector('#bhc-hat-preview');
  const ctx    = canvas.getContext('2d');
  const W      = canvas.width;   // 1078 per spec
  const H      = canvas.height;  // 1078 per spec

  // ── Image cache ──────────────────────────────────────────────────
  const cache = {};

  function loadImage(asset) {
    if (cache[asset] instanceof HTMLImageElement) return Promise.resolve(cache[asset]);
    if (cache[asset] instanceof Promise)          return cache[asset];
    cache[asset] = new Promise(resolve => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload  = () => { cache[asset] = img; resolve(img); };
      img.onerror = () => resolve(null);
      img.src = assetBase + asset;
    });
    return cache[asset];
  }

  // Preload all assets for snappy switching
  function preloadAll() {
    [...parts.brim, ...parts.crown, ...parts.band].forEach(p => loadImage(p.asset));
  }

  // ── State ────────────────────────────────────────────────────
  const state = resolveInitialState();

  function resolveInitialState() {
    const p         = new URLSearchParams(window.location.search);
    const origin    = p.get('origin');
    const resultKey = p.get('result');
    const def       = results.western_formal.build;

    if (origin === 'quiz' && resultKey && results[resultKey]) {
      const base = results[resultKey].build;
      return {
        brim:   p.get('brim')  || base.brim,
        crown:  p.get('crown') || base.crown,
        band:   p.get('band')  || base.band,
        color:  p.get('color') || base.color,
        origin: 'quiz', result: resultKey
      };
    }
    if (p.get('brim')) {
      return {
        brim:   p.get('brim')  || def.brim,
        crown:  p.get('crown') || def.crown,
        band:   p.get('band')  || def.band,
        color:  p.get('color') || def.color,
        origin: 'direct', result: resultKey || 'western_formal'
      };
    }
    return { ...def, origin: 'direct', result: 'western_formal' };
  }

  // ── Boot ─────────────────────────────────────────────────────
  preloadAll();

  const bookLink = root.querySelector('[data-book-appointment]');
  if (bookLink) bookLink.href = appointmentUrl;

  mountSelect('brim',  parts.brim);
  mountSelect('crown', parts.crown);
  mountSelect('band',  parts.band);
  mountColors();
  syncUiFromState();
  setupQuizOriginMessage();
  setupActions();
  renderPreview();

  // ── Quiz origin message ───────────────────────────────────────
  function setupQuizOriginMessage() {
    const msg = root.querySelector('[data-quiz-origin-message]');
    if (!msg) return;
    if (state.origin === 'quiz' && results[state.result]) {
      msg.hidden = false;
      msg.textContent = 'Loaded from your Find Your Hat result: ' + results[state.result].title;
    }
  }

  // ── Select controls ──────────────────────────────────────────
  function mountSelect(kind, options) {
    const sel = root.querySelector('[data-part-select="' + kind + '"]');
    if (!sel) return;
    sel.innerHTML = options.map(o => '<option value="' + o.id + '">' + o.label + '</option>').join('');
    sel.value = state[kind];
    sel.addEventListener('change', () => {
      state[kind] = sel.value;
      renderPreview();
      updateShareUrl();
    });
  }

  // ── Color selector ─────────────────────────────────────────
  function mountColors() {
    const row = root.querySelector('[data-color-options]');
    if (!row) return;
    row.innerHTML = colors.map(c =>
      '<button class="bhc-color-dot" data-color-id="' + c.id + '" title="' + c.label + '" style="background:' + c.hex + '" aria-label="' + c.label + '"></button>'
    ).join('');
    row.querySelectorAll('[data-color-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.color = btn.dataset.colorId;
        syncUiFromState();
        renderPreview();
        updateShareUrl();
      });
    });
  }

  function syncUiFromState() {
    ['brim', 'crown', 'band'].forEach(k => {
      const sel = root.querySelector('[data-part-select="' + k + '"]');
      if (sel) sel.value = state[k];
    });
    const row  = root.querySelector('[data-color-options]');
    const text = root.querySelector('[data-selected-color]');
    if (row) {
      row.querySelectorAll('[data-color-id]').forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.colorId === state.color);
      });
    }
    if (text) {
      const c = colors.find(x => x.id === state.color);
      text.textContent = 'Selected color: ' + (c ? c.label : state.color);
    }
  }

  // ── Canvas rendering ─────────────────────────────────────────
  function renderPreview() {
    const colorObj  = colors.find(c => c.id === state.color) || colors[0];
    const brimPart  = parts.brim.find(p => p.id === state.brim)   || parts.brim[0];
    const crownPart = parts.crown.find(p => p.id === state.crown) || parts.crown[0];
    const bandPart  = parts.band.find(p => p.id === state.band)   || parts.band[0];

    Promise.all([
      loadImage(brimPart.asset),
      loadImage(crownPart.asset),
      loadImage(bandPart.asset)
    ]).then(([brimImg, crownImg, bandImg]) => {
      ctx.clearRect(0, 0, W, H);
      // Layer order: brim (bottom) → crown → band (top)
      if (brimImg)  drawTinted(ctx, brimImg,  colorObj);
      if (crownImg) drawTinted(ctx, crownImg, colorObj);
      // Band uses original colour — no tinting
      if (bandImg)  ctx.drawImage(bandImg, 0, 0, W, H);
      if (!brimImg && !crownImg && !bandImg) drawPlaceholder(colorObj, brimPart, crownPart, bandPart);
    });
  }

  /**
   * Tint a hat part image using greyscale + luminance-normalize + multiply blend.
   *
   * Different PNG parts can have different base luminance levels (e.g. brim shot
   * brighter than crown). The brightness/contrast normalization in the greyscale
   * step brings all parts to a consistent midtone range so they colour-match
   * across the full palette, especially for light colours (white, charcoal).
   *
   * tintHex null = draw normalized greyscale only, no colour overlay.
   */
  function drawTinted(targetCtx, img, colorObj) {
    const off  = document.createElement('canvas');
    off.width  = W; off.height = H;
    const oc   = off.getContext('2d');

    // Step 1: greyscale + normalize luminance so all parts share a consistent
    // tonal baseline. brightness(1.12) lifts shadows; contrast(0.88) compresses
    // the range so no part looks washed-out or muddy against another.
    oc.filter = 'grayscale(1) brightness(1.12) contrast(0.88)';
    oc.drawImage(img, 0, 0, W, H);
    oc.filter = 'none';

    if (colorObj.tintHex) {
      // Step 2: multiply-blend target colour — tints while preserving luminance
      oc.globalCompositeOperation = 'multiply';
      oc.fillStyle = colorObj.tintHex;
      oc.fillRect(0, 0, W, H);
      // Step 3: restore original alpha (clips tint to hat shape)
      oc.globalCompositeOperation = 'destination-in';
      oc.drawImage(img, 0, 0, W, H);
    }

    targetCtx.globalCompositeOperation = 'source-over';
    targetCtx.drawImage(off, 0, 0);
  }

  function drawPlaceholder(colorObj, brimPart, crownPart, bandPart) {
    ctx.fillStyle = '#f2ede6';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#888';
    ctx.font = 'bold 42px sans-serif';
    ctx.fillText('Assets loading…', 80, 280);
    ctx.font = '32px sans-serif';
    ctx.fillText('Brim: '  + brimPart.label,  80, 400);
    ctx.fillText('Crown: ' + crownPart.label, 80, 460);
    ctx.fillText('Band: '  + bandPart.label,  80, 520);
  }

  // ── PNG export ───────────────────────────────────────────────
  function exportPng() {
    const exp    = document.createElement('canvas');
    exp.width    = 1078; exp.height = 1078;
    const ectx   = exp.getContext('2d');

    // Neutral background
    ectx.fillStyle = '#f5f2ee';
    ectx.fillRect(0, 0, 1078, 1078);

    // Copy current composited preview
    ectx.drawImage(canvas, 0, 0);

    // Branding: bottom-right corner
    const brand = 'BROADMOOR HAT CO';
    ectx.font = 'bold 22px Georgia, serif';
    const tw  = ectx.measureText(brand).width;
    const pad = 16;
    const bx  = 1078 - tw - pad * 2 - 12;
    const by  = 1078 - 56;
    ectx.fillStyle = 'rgba(43, 26, 18, 0.75)';
    ectx.fillRect(bx, by, tw + pad * 2, 38);
    ectx.fillStyle = '#ffffff';
    ectx.fillText(brand, bx + pad, by + 26);

    const a = document.createElement('a');
    a.download = 'custom_hat.png';
    a.href     = exp.toDataURL('image/png');
    a.click();
  }

  // ── Actions ──────────────────────────────────────────────────
  function setupActions() {
    const copyBtn = root.querySelector('[data-copy-share]');
    const pngBtn  = root.querySelector('[data-save-png]');
    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        const url = window.location.origin + window.location.pathname + '?' + encodeState();
        try {
          await navigator.clipboard.writeText(url);
          const orig = copyBtn.textContent;
          copyBtn.textContent = 'Link Copied!';
          setTimeout(() => { copyBtn.textContent = orig; }, 2200);
        } catch (_) { window.prompt('Copy this link:', url); }
      });
    }
    if (pngBtn) pngBtn.addEventListener('click', exportPng);
  }

  // ── URL state ───────────────────────────────────────────────
  function encodeState() {
    return new URLSearchParams({
      origin: state.origin, result: state.result,
      color:  state.color,  brim:   state.brim,
      crown:  state.crown,  band:   state.band
    }).toString();
  }
  function updateShareUrl() {
    history.replaceState({}, '', window.location.pathname + '?' + encodeState());
  }

})();
