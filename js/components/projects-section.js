/* ==========================================================================
   components/projects-section.js — renderiza os cards e os filtros.
   ========================================================================== */

(function () {
  function renderCards(container, projects) {
    var fragment = document.createDocumentFragment();
    projects.forEach(function (project) {
      fragment.appendChild(window.createProjectCard(project));
    });
    container.replaceChildren(fragment);
  }

  function applyFilter(container, filterId) {
    container.querySelectorAll(".card").forEach(function (card) {
      var categories = card.dataset.categories.split(" ");
      card.hidden = filterId !== "all" && categories.indexOf(filterId) === -1;
    });
  }

  function renderFilters(container, filters, onChange) {
    var buttons = filters.map(function (filter, index) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "filter";
      button.textContent = filter.label;
      button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
      button.addEventListener("click", function () {
        buttons.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
        button.setAttribute("aria-pressed", "true");
        onChange(filter.id);
      });
      return button;
    });
    container.replaceChildren.apply(container, buttons);
  }

  window.initProjectsSection = function () {
    var grid = document.getElementById("projects-grid");
    var filters = document.getElementById("projects-filters");
    if (!grid || !filters) return;

    renderCards(grid, window.PORTFOLIO_PROJECTS);
    renderFilters(filters, window.PORTFOLIO_FILTERS, function (id) {
      applyFilter(grid, id);
    });
  };
})();
