/* ==========================================================================
   components/skills-section.js — renderiza os grupos de habilidades.
   ========================================================================== */

(function () {
  function createGroup(group) {
    var wrapper = document.createElement("div");
    wrapper.className = "skill-group";

    var title = document.createElement("h3");
    title.className = "skill-group__title";
    title.textContent = group.title;

    var list = document.createElement("ul");
    list.className = "skill-group__list";
    group.items.forEach(function (item) {
      var li = document.createElement("li");
      var chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = item;
      li.appendChild(chip);
      list.appendChild(li);
    });

    wrapper.appendChild(title);
    wrapper.appendChild(list);
    return wrapper;
  }

  window.initSkillsSection = function () {
    var container = document.getElementById("skills-grid");
    if (!container) return;
    container.replaceChildren.apply(
      container,
      window.PORTFOLIO_SKILLS.map(createGroup)
    );
  };
})();
