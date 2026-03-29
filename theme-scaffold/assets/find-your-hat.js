(function () {
  const root = document.querySelector('[data-find-your-hat-root]');
  if (!root || !window.BHC_HAT_CONFIG) return;

  const startWrap = root.querySelector('[data-quiz-start]');
  const questionWrap = root.querySelector('[data-quiz-question]');
  const resultWrap = root.querySelector('[data-quiz-result]');
  const startBtn = root.querySelector('[data-start-quiz]');

  const { quiz, results, resultKeys, tieBreakerQuestionOrder, designerPagePath, appointmentUrl } = window.BHC_HAT_CONFIG;

  const selections = [];
  let index = 0;

  function renderQuestion() {
    const q = quiz[index];
    questionWrap.hidden = false;
    questionWrap.innerHTML = `
      <h2>Question ${index + 1} of ${quiz.length}</h2>
      <p>${q.prompt}</p>
      <div class="bhc-answer-grid">
        ${q.answers.map((answer) => `<button type="button" class="bhc-answer" data-answer-id="${answer.id}">${answer.id}. ${answer.text}</button>`).join('')}
      </div>
    `;

    questionWrap.querySelectorAll('[data-answer-id]').forEach((button) => {
      button.addEventListener('click', () => {
        selections[index] = button.getAttribute('data-answer-id');
        index += 1;
        if (index >= quiz.length) {
          renderResult();
        } else {
          renderQuestion();
        }
      });
    });
  }

  function winnerFromAnswers() {
    const totals = Object.fromEntries(resultKeys.map((key) => [key, 0]));
    selections.forEach((pickedId, i) => {
      const answer = quiz[i].answers.find((option) => option.id === pickedId);
      if (answer) totals[answer.result] += 1;
    });

    const highScore = Math.max(...Object.values(totals));
    const tied = Object.keys(totals).filter((key) => totals[key] === highScore);
    if (tied.length === 1) return tied[0];

    for (const qNum of tieBreakerQuestionOrder) {
      const pickedId = selections[qNum - 1];
      const answer = quiz[qNum - 1].answers.find((option) => option.id === pickedId);
      if (answer && tied.includes(answer.result)) return answer.result;
    }

    return 'everyday_classic';
  }

  function renderResult() {
    const winner = winnerFromAnswers();
    const result = results[winner];

    questionWrap.hidden = true;
    resultWrap.hidden = false;
    resultWrap.innerHTML = `
      <h2>${result.title}</h2>
      <p>${result.body}</p>
      <div class="bhc-actions">
        <a class="bhc-button" href="${buildDesignerLink(winner)}">Start My Custom Hat</a>
        <a class="bhc-button bhc-button-outline" href="${appointmentUrl}">Book Appointment</a>
      </div>
    `;
  }

  function buildDesignerLink(resultKey) {
    const build = results[resultKey].build;
    const params = new URLSearchParams({
      origin: 'quiz',
      result: resultKey,
      color: build.color,
      brim: build.brim,
      crown: build.crown,
      band: build.band
    });

    return `${designerPagePath}?${params.toString()}`;
  }

  startBtn.addEventListener('click', () => {
    startWrap.hidden = true;
    renderQuestion();
  });
})();
