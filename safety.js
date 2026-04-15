(() => {
  const selectors = ".site-header, .feature-banner, .unit-hero, .panel, .card, .site-footer";

  function forceVisible() {
    document.querySelectorAll(selectors).forEach((el) => {
      const s = getComputedStyle(el);
      if (Number(s.opacity) < 0.05 || s.visibility === "hidden") {
        el.style.opacity = "1";
        el.style.visibility = "visible";
      }
      el.style.filter = "none";
      if (el.style.transform.includes("translate") || el.style.transform.includes("scale")) {
        el.style.transform = "none";
      }
      el.classList.add("revealed");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(forceVisible, 1400), { once: true });
  } else {
    setTimeout(forceVisible, 1400);
  }
})();
