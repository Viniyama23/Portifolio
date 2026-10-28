/* ==========================================================================
   components/copy-button.js — botões "copiar" (usados no e-mail).
   Uso: <button class="copy-btn" data-copy="texto">copiar</button>
   ========================================================================== */

(function () {
  function selectText(source) {
    var range = document.createRange();
    range.selectNodeContents(source);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  window.initCopyButtons = function () {
    document.querySelectorAll(".copy-btn").forEach(function (button) {
      button.addEventListener("click", function () {
        var original = button.textContent;
        var text = button.dataset.copy;
        var source = document.getElementById(button.dataset.source);

        function done(label) {
          button.textContent = label;
          setTimeout(function () { button.textContent = original; }, 1600);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(
            function () { done("copiado"); },
            function () { if (source) selectText(source); done("selecionado"); }
          );
        } else {
          if (source) selectText(source);
          done("selecionado");
        }
      });
    });
  };
})();
