(function () {
  const root = document.querySelector('[data-hat-designer-root]');
  if (!root || !window.BHC_HAT_CONFIG) return;

  const { colors, parts, results, appointmentUrl } = window.BHC_HAT_CONFIG;
  const colorContainer = root.querySelector('[data-color-options]');
  const selectedColorText = root.querySelector('[data-selected-color]');
  const quizOriginMessage = root.querySelector('[data-quiz-origin-message]');
  const bookLink = root.querySelector('[data-book-appointment]');

  const state = resolveInitialState();
  bookLink.href = appointmentUrl;

  mountSelect('brim', parts.brim);
  mountSelect('crown', parts.crown);
  mountSelect('band', parts.band);
  mountColors();
  syncUiFromState();
  renderPreview();

  root.querySelector('[data-copy-share]').addEventListener('click', async () => {
    const link = `${window.location.origin}${window.location.pathname}?${encodeState(state)}`;
    await navigator.clipboard.writeText(link);
  });

  root.querySelector('[data-save-png]').addEventListener('click', () => {
    const canvas = root.querySelector('#bhc-hat-preview');
    const link = document.createElement('a');
    link.download = 'custom_hat.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });

  function resolveInitialState() {
    const params = new URLSearchParams(window.location.search);
    const resultKey = params.get('result');

    if (params.get('origin') === 'quiz' && resultKey && results[resultKey]) {
      const resolved = {
        ...results[resultKey].build,
        color: params.get('color') || results[resultKey].build.color,
        brim: params.get('brim') || results[resultKey].build.brim,
        crown: params.get('crown') || results[resultKey].build.crown,
        band: params.get('band') || results[resultKey].build.band,
        origin: 'quiz',
        result: resultKey
      };

      quizOriginMessage.hidden = false;
      quizOriginMessage.textContent = `Loaded from your Find Your Hat result: ${results[resultKey].title}`;
      return resolved;
    }

    return {
      ...results.western_formal.build,
      origin: 'direct',
      result: 'western_formal'
    };
  }

  function mountSelect(kind, options) {
    const select = root.querySelector(`[data-part-select="${kind}"]`);
    select.innerHTML = options.map((item) => `<option value="${item.id}">${item.label}</option>`).join('');
    select.addEventListener('change', () => {
      state[kind] = select.value;
      renderPreview();
      updateShareUrl();
    });
  }

  function mountColors() {
    colorContainer.innerHTML = colors.map((color) => (
      `<button class="bhc-color-dot" data-color-id="${color.id}" title="${color.label}" style="background:${color.hex}"></button>`
    )).join('');

    colorContainer.querySelectorAll('[data-color-id]').forEach((button) => {
      button.addEventListener('click', () => {
        state.color = button.getAttribute('data-color-id');
        syncUiFromState();
        renderPreview();
        updateShareUrl();
      });
    });
  }

  function syncUiFromState() {
    root.querySelector('[data-part-select="brim"]').value = state.brim;
    root.querySelector('[data-part-select="crown"]').value = state.crown;
    root.querySelector('[data-part-select="band"]').value = state.band;

    colorContainer.querySelectorAll('[data-color-id]').forEach((dot) => {
      dot.classList.toggle('is-active', dot.getAttribute('data-color-id') === state.color);
    });

    const color = colors.find((item) => item.id === state.color);
    selectedColorText.textContent = `Selected color: ${color ? color.label : 'Black'}`;
  }

  function renderPreview() {
    const canvas = root.querySelector('#bhc-hat-preview');
    const ctx = canvas.getContext('2d');

    // Placeholder neutral export-safe renderer until part assets are wired.
    ctx.fillStyle = '#ece8e2';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#222';
    ctx.font = 'bold 40px sans-serif';
    ctx.fillText('Hat Preview Base', 56, 120);

    ctx.font = '30px sans-serif';
    ctx.fillText(`Brim: ${labelFor('brim', state.brim)}`, 56, 240);
    ctx.fillText(`Crown: ${labelFor('crown', state.crown)}`, 56, 300);
    ctx.fillText(`Band: ${labelFor('band', state.band)}`, 56, 360);
    ctx.fillText(`Color: ${state.color}`, 56, 420);

    ctx.fillStyle = '#111';
    ctx.fillRect(canvas.width - 240, canvas.height - 80, 200, 40);
    ctx.fillStyle = '#fff';
    ctx.font = '18px sans-serif';
    ctx.fillText('Broadmoor Hat Co', canvas.width - 230, canvas.height - 52);
  }

  function labelFor(kind, id) {
    const item = parts[kind].find((entry) => entry.id === id);
    return item ? item.label : id;
  }

  function encodeState(current) {
    return new URLSearchParams({
      origin: current.origin,
      result: current.result,
      color: current.color,
      brim: current.brim,
      crown: current.crown,
      band: current.band
    }).toString();
  }

  function updateShareUrl() {
    const params = encodeState(state);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  }
})();
