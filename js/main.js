/* ==========================================================================
   main.js — ponto de entrada. Só inicializa os componentes.
   ========================================================================== */

(function () {
  window.initThemeToggle();
  window.initSkillsSection();
  window.initProjectsSection();
  window.initCopyButtons();
  document.getElementById("year").textContent = new Date().getFullYear();
})();
