// Footer trail-tip ticker — rotates every 5.2s with a fade.
// Tips come from window.BTH_TIPS injected by base.njk from seasonaltips.json.
// Season is read from <html data-season="...">; defaults to summer.
(function () {
  var el = document.querySelector('[data-bth-tip]');
  if (!el) return;

  var season = document.documentElement.getAttribute('data-season') || 'summer';
  var tips = (window.BTH_TIPS && window.BTH_TIPS[season]) || [];

  if (!tips.length) {
    el.textContent = '';
    return;
  }

  var i = 0;
  el.textContent = tips[0];
  if (tips.length < 2) return;

  setInterval(function () {
    i = (i + 1) % tips.length;
    el.classList.remove('is-changing');
    void el.offsetWidth;
    el.textContent = tips[i];
    el.classList.add('is-changing');
  }, 5200);
})();
