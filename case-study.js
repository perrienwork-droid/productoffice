/* case-study.js — shared behaviour for all case study pages.
 * Centres image captions that render on a single line; leaves
 * multi-line captions left-aligned. Re-runs on load, font load, resize. */
(function () {
  function centerSingleLineCaptions() {
    document.querySelectorAll('.case-img figcaption').forEach(function (cap) {
      cap.style.textAlign = '';
      var cs = getComputedStyle(cap);
      var lh = parseFloat(cs.lineHeight);
      if (!lh || isNaN(lh)) { lh = parseFloat(cs.fontSize) * 1.4; }
      var pt = parseFloat(cs.paddingTop) || 0;
      var pb = parseFloat(cs.paddingBottom) || 0;
      var textH = cap.clientHeight - pt - pb;
      if (Math.round(textH / lh) <= 1) { cap.style.textAlign = 'center'; }
    });
  }
  document.addEventListener('DOMContentLoaded', centerSingleLineCaptions);
  window.addEventListener('load', centerSingleLineCaptions);
  window.addEventListener('resize', centerSingleLineCaptions);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(centerSingleLineCaptions);
  }
})();
