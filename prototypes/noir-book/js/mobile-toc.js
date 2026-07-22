// Mobile TOC — floating button + slide-up panel
(function() {
  const btn = document.getElementById('mobileTocBtn');
  const overlay = document.getElementById('mobileTocOverlay');
  const closeBtn = document.getElementById('mobileTocClose');
  if (!btn || !overlay) return;

  function open() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);

  // Close when clicking overlay backdrop
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) close();
  });

  // Close when clicking a TOC link (navigate + dismiss)
  overlay.querySelectorAll('.mobile-toc-list a').forEach(function(link) {
    link.addEventListener('click', function() {
      close();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) close();
  });
})();
