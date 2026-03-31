(function () {
  'use strict';

  const root = document.querySelector('[data-find-your-hat-root]');
  if (!root || !window.BHC_HAT_CONFIG) return;

  const {
    quiz, results, resultKeys,
    tieBreakerQuestionOrder,
    designerPagePath, appointmentUrl
  } = window.BHC_HAT_CONFIG;

  const startWrap    = root.querySelector('[data-quiz-start]');
  const questionWrap = root.querySelector('[data-quiz-question]');
  const resultWrap   = root.querySelector('[data-quiz-result]');
  const startBtn     = root.querySelector('[data-start-quiz]');

  const selections = [];

  startBtn.addEventListener('click', () => {
    startWrap.hidden = true;
    renderQuestion(0);
  });

  // ── Render question ───────────────────────────────────────
  function renderQuestion(index) {
    const q   = quiz[index];
    const pct = Math.round((index / quiz.length) * 100);

    questionWrap.hidden   = false;
    questionWrap.innerHTML =
      '<div class="bhc-quiz-progress">' +
        '<div class="bhc-progress-track"><div class="bhc-progress-fill" style="width:' + pct + '%"></div></div>' +
        '<span class="bhc-progress-label">Question ' + (index + 1) + ' of ' + quiz.length + '</span>' +
      '</div>' +
      '<p class="bhc-question-prompt">' + q.prompt + '</p>' +
      '<div class="bhc-answer-grid">' +
        q.answers.map(a =>
          '<button type="button" class="bhc-answer" data-answer-id="' + a.id + '">' + a.id + '. ' + a.text + '</button>'
        ).join('') +
      '</div>';

    questionWrap.querySelectorAll('[data-answer-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        selections[index] = btn.getAttribute('data-answer-id');
        if (index + 1 >= quiz.length) {
          questionWrap.hidden = true;
          renderResult();
        } else {
          renderQuestion(index + 1);
        }
      });
    });
  }

  // ── Scoring + tie-break ─────────────────────────────────
  function resolveWinner() {
    const totals = Object.fromEntries(resultKeys.map(k => [k, 0]));
    selections.forEach((answerId, i) => {
      const answer = quiz[i].answers.find(a => a.id === answerId);
      if (answer) totals[answer.result] += 1;
    });
    const high = Math.max(...Object.values(totals));
    const tied = resultKeys.filter(k => totals[k] === high);
    if (tied.length === 1) return tied[0];
    // Tie-break: Q1, Q7, Q8 (1-indexed)
    for (const qNum of tieBreakerQuestionOrder) {
      const answer = quiz[qNum - 1].answers.find(a => a.id === selections[qNum - 1]);
      if (answer && tied.includes(answer.result)) return answer.result;
    }
    return 'everyday_classic';
  }

  // ── Render result ────────────────────────────────────────
  function renderResult() {
    const winner = resolveWinner();
    const result = results[winner];
    const build  = result.build;
    const params = new URLSearchParams({
      origin: 'quiz', result: winner,
      color: build.color, brim: build.brim,
      crown: build.crown, band: build.band
    });
    const designerLink = designerPagePath + '?' + params.toString();

    resultWrap.hidden   = false;
    resultWrap.innerHTML =
      '<div class="bhc-result-card">' +
        '<h2 class="bhc-result-title">' + result.title + '</h2>' +
        '<p class="bhc-result-body">' + result.body + '</p>' +
        '<div class="bhc-actions">' +
          '<a class="bhc-button" href="' + designerLink + '">Start My Custom Hat</a>' +
          '<a class="bhc-button bhc-button-outline" href="' + appointmentUrl + '">Book Appointment</a>' +
        '</div>' +
      '</div>';
  }

})();
