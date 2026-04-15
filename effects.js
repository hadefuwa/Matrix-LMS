const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealTargets = [
  ...document.querySelectorAll(".site-header, .feature-banner, .unit-hero, .panel, .card, .site-footer")
];
const pulseTargets = document.querySelectorAll(".tab-btn, .offering-tab-btn, .download-btn, .course-btn, .scorm-btn, .quote-btn");

function showWithoutMotion() {
  revealTargets.forEach((el) => {
    el.classList.add("reveal-init", "revealed");
  });
}

if (!revealTargets.length) {
  // Nothing to animate on this page
} else if (prefersReducedMotion) {
  showWithoutMotion();
} else {
  try {
    const motion = await import("https://cdn.jsdelivr.net/npm/motion@11.18.2/+esm");
    const { animate, inView, stagger } = motion;

    revealTargets.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(14px)";
      el.style.filter = "blur(4px)";
    });

    inView(
      revealTargets,
      (element) => {
        animate(
          element,
          { opacity: [0, 1], y: [14, 0], filter: ["blur(4px)", "blur(0px)"] },
          { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
        );
      },
      { amount: 0.15, margin: "0px 0px -40px 0px" }
    );

    const featureItems = document.querySelectorAll(".feature-item");
    if (featureItems.length) {
      animate(
        featureItems,
        { opacity: [0, 1], y: [8, 0], scale: [0.985, 1] },
        { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: stagger(0.06, { startDelay: 0.08 }) }
      );
    }

    pulseTargets.forEach((el) => {
      el.addEventListener("click", () => {
        animate(el, { scale: [1, 0.96, 1.03, 1] }, { duration: 0.36, ease: [0.34, 1.56, 0.64, 1] });
      });
    });
  } catch {
    showWithoutMotion();
  }
}
