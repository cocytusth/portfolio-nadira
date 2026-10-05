// Garde toujours "#home" dans l'adresse, même quand on clique sur À propos / Projects / Contact.
// Sans ce script, les liens fonctionnent quand même (l'adresse affichera alors #about, etc.).
(function () {
  var isIndex = /\/index\.html$|\/$/.test(location.pathname);

  function keepHome() {
    if (isIndex && location.hash !== "#home") {
      history.replaceState(null, "", location.pathname + location.search + "#home");
    }
  }

  // Au chargement (y compris arrivée depuis une page projet vers index.html#projects)
  window.addEventListener("load", function () {
    setTimeout(keepHome, 50);
  });

  // Clic sur un lien d'ancre de la page courante : défilement doux, sans changer l'adresse
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a[href]");
    if (!a || !a.hash || a.pathname !== location.pathname) return;
    var target = document.getElementById(a.hash.slice(1));
    if (!target) return;
    e.preventDefault();
    var smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
    keepHome();
  });
})();
