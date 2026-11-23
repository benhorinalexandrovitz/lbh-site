/* LBH static site behaviour: mobile menu and count-up figures. Content is fully present in the HTML without this script. */
(function () {
  var btn = document.getElementById('menu-btn'), menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? btn.getAttribute('data-close') : btn.getAttribute('data-open'));
    });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); } });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && menu.classList.contains('open')) { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); btn.focus(); } });
  }
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = [].slice.call(document.querySelectorAll('[data-count]'));
  if (reduce || !els.length || !('IntersectionObserver' in window)) return;
  els.forEach(function (el) {
    var r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return; // already visible: keep the final value
    var final = el.textContent, to = parseFloat(el.getAttribute('data-count')), dec = +el.getAttribute('data-dec') || 0, pre = el.getAttribute('data-pre') || '';
    el.textContent = pre + (0).toFixed(dec);
    var io = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting) return;
      io.disconnect();
      var t0 = null;
      function step(t) {
        if (t0 === null) t0 = t;
        var x = Math.min(1, Math.max(0, (t - t0) / 1400));
        el.textContent = x < 1 ? pre + (to * (1 - Math.pow(1 - x, 3))).toFixed(dec) : final;
        if (x < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(el);
  });
})();
