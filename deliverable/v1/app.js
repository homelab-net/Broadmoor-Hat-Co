function setActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach((a) => {
    const href = a.getAttribute('href');
    if (href === current) a.classList.add('active');
  });
}

function bindDemoActions() {
  const quizBtn = document.getElementById('quiz-continue');
  if (quizBtn) {
    quizBtn.addEventListener('click', () => {
      const params = new URLSearchParams({
        source: 'quiz',
        crown: 'teardrop',
        brim: 'rancher',
        color: 'sand'
      });
      window.location.href = `hat-designer.html?${params.toString()}`;
    });
  }

  const shareBtn = document.getElementById('share-link');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const shareUrl = `${window.location.origin}${window.location.pathname}?build=demo-v1`;
      try {
        await navigator.clipboard.writeText(shareUrl);
        shareBtn.textContent = 'Copied!';
      } catch {
        shareBtn.textContent = 'Copy failed';
      }
      setTimeout(() => { shareBtn.textContent = 'Copy Share Link'; }, 1200);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  bindDemoActions();
});
