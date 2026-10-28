/* ==========================================================================
   components/theme-toggle.js — alterna entre tema claro e escuro.
   Sem escolha manual, o site segue o tema do sistema.
   ========================================================================== */

(function () {
  var STORAGE_KEY = "portfolio-theme";

  function systemPrefersDark() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function currentTheme() {
    var explicit = document.documentElement.getAttribute("data-theme");
    return explicit || (systemPrefersDark() ? "dark" : "light");
  }

  function save(theme) {
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) { /* sem armazenamento */ }
  }

  function restore() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") {
        document.documentElement.setAttribute("data-theme", saved);
      }
    } catch (e) { /* sem armazenamento */ }
  }

  window.initThemeToggle = function () {
    restore();
    var button = document.getElementById("theme-toggle");
    if (!button) return;
    button.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      save(next);
    });
  };
})();
