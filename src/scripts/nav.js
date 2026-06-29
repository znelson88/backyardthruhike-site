// Header — hamburger toggle (vanilla, no deps)
(function () {
  var burger = document.querySelector('.bth-burger');
  var menu = document.getElementById('bth-mobile-menu');
  if (!burger || !menu) return;

  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();
