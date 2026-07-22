/* Theme Toggle — system default + manual override */
(function() {
  const STORAGE_KEY = 'ux-library-theme';

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    if (theme === 'system') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    updateToggleIcon();
  }

  function getCurrentVisualTheme() {
    const explicit = document.documentElement.getAttribute('data-theme');
    if (explicit) return explicit;
    return getSystemTheme();
  }

  function updateToggleIcon() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    const isDark = getCurrentVisualTheme() === 'dark';
    // Sun for dark mode (click to go light), moon for light mode (click to go dark)
    // Wrap glyph in a span so it can't intercept pointer events (option C, defensive)
    const glyph = isDark ? '☀' : '☾';
    btn.innerHTML = '<span class="theme-icon" aria-hidden="true">' + glyph + '</span>';
    btn.title = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  }

  function toggleTheme() {
    const current = getCurrentVisualTheme();
    const next = current === 'dark' ? 'light' : 'dark';

    // If the next theme matches system, store 'system' to clear override
    if (next === getSystemTheme()) {
      localStorage.setItem(STORAGE_KEY, 'system');
      applyTheme('system');
    } else {
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    }
  }

  // Initialize on load
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && stored !== 'system') {
    applyTheme(stored);
  }

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored || stored === 'system') {
      updateToggleIcon();
    }
  });

  // Expose toggle function
  window.toggleTheme = toggleTheme;

  // Update icon when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function(){ updateToggleIcon(); initExpandableSearch(); });
  } else {
    updateToggleIcon();
    initExpandableSearch();
  }

  // E) Expandable search on mobile subpages
  function initExpandableSearch() {
    var nav = document.querySelector('.site-nav.subpage-nav');
    if (!nav) return;
    var input = nav.querySelector('#navSearchInput');
    if (!input) return;
    input.addEventListener('focus', function() {
      if (window.innerWidth <= 768) nav.classList.add('search-expanded');
    });
    input.addEventListener('blur', function() {
      // Small delay so click on dropdown results can register
      setTimeout(function() { nav.classList.remove('search-expanded'); }, 200);
    });
  }
})();
