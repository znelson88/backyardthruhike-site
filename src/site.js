(function () {
  'use strict';

  // ── Mobile menu ──────────────────────────────────────────────
  var toggle = document.getElementById('menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = !mobileNav.hidden;
      mobileNav.hidden = isOpen;
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── Footer tip ticker ────────────────────────────────────────
  var ticker = document.getElementById('ticker-text');

  if (ticker) {
    var tips;
    try {
      tips = JSON.parse(ticker.dataset.tips || '[]');
    } catch (e) {
      tips = [];
    }

    if (tips.length > 1) {
      var index = 0;

      setInterval(function () {
        index = (index + 1) % tips.length;
        ticker.classList.remove('is-fading');
        // Force reflow so the animation re-triggers
        void ticker.offsetWidth;
        ticker.textContent = tips[index];
        ticker.classList.add('is-fading');
      }, 5200);
    }
  }
})();
