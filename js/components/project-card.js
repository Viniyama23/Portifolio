/* ==========================================================================
   components/project-card.js — monta o elemento de um card de projeto.
   ========================================================================== */

(function () {
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function createTags(tags) {
    var list = el("ul", "card__tags");
    tags.forEach(function (tag) {
      var li = el("li");
      li.appendChild(el("span", "chip", tag));
      list.appendChild(li);
    });
    return list;
  }

  function createFooter(project) {
    var foot = el("div", "card__foot");
    if (project.link) {
      var a = el("a", "card__link", "Ver no GitHub ↗");
      a.href = project.link;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", "Ver " + project.title + " no GitHub");
      foot.appendChild(a);
    } else {
      foot.appendChild(el("span", "card__note", "código não publicado"));
    }
    return foot;
  }

  window.createProjectCard = function (project) {
    var card = el("article", "card");
    card.dataset.categories = project.categories.join(" ");

    var top = el("div", "card__top");
    top.appendChild(el("span", "label card__kind", project.kind));
    if (project.featured) top.appendChild(el("span", "card__star", "★ destaque"));

    card.appendChild(top);
    card.appendChild(el("h3", "card__title", project.title));
    card.appendChild(el("p", "card__desc", project.description));
    card.appendChild(createTags(project.tags));
    card.appendChild(createFooter(project));
    return card;
  };
})();
