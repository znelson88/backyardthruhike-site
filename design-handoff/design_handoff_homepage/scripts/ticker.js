// 06 · Footer trail-tip ticker — rotates every 5.2s with a fade.
// Season is read from <html data-season="...">; defaults to summer.
// To disable rotation (rotateTips=false) just render the first tip and skip this script.
(function () {
  var TIPS = {
    summer: [
      'Chiggers love the tall grass by July — tuck your socks in.',
      'Wild blackberries ripen along the old rail trail by late August.',
      'Listen for the dickcissel buzzing its name from the fence posts.'
    ],
    fall: [
      'Oak and hickory peak in late October — the bluffs go gold and rust.',
      'First frost usually lands by mid-October. Cover the late tomatoes.',
      'Watch for monarchs funneling south through the prairie in September.'
    ],
    winter: [
      'Bald eagles gather below Smithville Dam through January.',
      'Track prints in new snow: fox tracks run in a near-straight line.',
      'Thin ice in the lake coves even when the middle looks solid. Stay on the bank.'
    ],
    spring: [
      'Spring ephemerals — trout lily, trillium — bloom before the canopy leafs out.',
      'Listen for spring peepers in the wet meadows by mid-April.',
      "Mud season: stick to gravel paths so the trails don't rut."
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
    void el.offsetWidth;            // restart the fade animation
    el.textContent = list[i];
    el.classList.add('is-changing');
  }, 5200);
})();
