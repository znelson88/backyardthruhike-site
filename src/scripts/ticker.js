// Footer trail-tip ticker — rotates every 5.2s with a fade.
// Season is read from <html data-season="...">; defaults to summer.
(function () {
  var TIPS = {
    summer: [
      'Fireflies peak in early July — the tall-grass strips along the Saranac River are reliable.',
      'Wild blackberries ripen along the rail trail by late August. Bring a container.',
      'Listen for the wood thrush at dusk — the most beautiful singer in the neighborhood.'
    ],
    fall: [
      'Red maples along the lakeshore turn first — usually by late September.',
      'First frost usually lands by mid-October in Plattsburgh. Pull the basil before then.',
      'Watch for broad-winged hawks funneling south over the Adirondacks in September.'
    ],
    winter: [
      'Bald eagles overwinter on Lake Champlain — scan the ice edges near the ferry dock.',
      'Track prints in new snow: fox tracks run in a near-straight line.',
      'Thin ice forms in the coves first. If it groans, stay on the bank.'
    ],
    spring: [
      'Spring peepers start singing in the wet meadows by mid-April — listen at dusk.',
      'Trout lilies bloom before the canopy leafs out. Look in the woodsy margins off Rt. 9.',
      'Mud season: stick to gravel paths so the trails don’t rut.'
    ]
  };

  var el = document.querySelector('[data-bth-tip]');
  if (!el) return;
  var season = document.documentElement.getAttribute('data-season') || 'summer';
  var list = TIPS[season] || TIPS.summer;
  var i = 0;
  el.textContent = list[0];
  if (list.length < 2) return;

  setInterval(function () {
    i = (i + 1) % list.length;
    el.classList.remove('is-changing');
    void el.offsetWidth;
    el.textContent = list[i];
    el.classList.add('is-changing');
  }, 5200);
})();
