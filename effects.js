(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealTargets = [
    ...document.querySelectorAll(".site-header, .feature-banner, .unit-hero, .panel, .card, .site-footer")
  ];
  const pulseTargets = document.querySelectorAll(
    ".tab-btn, .offering-tab-btn, .download-btn, .course-btn, .scorm-btn, .quote-btn"
  );

  if (!revealTargets.length || prefersReducedMotion) return;

  const fallbackPulse = () => {
    pulseTargets.forEach((el) => {
      el.addEventListener("click", () => {
        el.animate(
          [{ transform: "scale(1)" }, { transform: "scale(0.97)" }, { transform: "scale(1.02)" }, { transform: "scale(1)" }],
          { duration: 300, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" }
        );
      });
    });
  };

  const fallbackReveal = () => {
    revealTargets.forEach((el, index) => {
      el.animate(
        [
          { opacity: 0, transform: "translateY(12px)", filter: "blur(3px)" },
          { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" }
        ],
        {
          duration: 520,
          delay: Math.min(index * 45, 360),
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "both"
        }
      );
    });

    fallbackPulse();
  };

  import("https://cdn.jsdelivr.net/npm/motion@11.18.2/+esm")
    .then(({ animate, inView, stagger }) => {
      revealTargets.forEach((el, index) => {
        const delay = Math.min(index * 0.04, 0.34);

        inView(
          el,
          () => {
            animate(
              el,
              { opacity: [0, 1], y: [12, 0], filter: ["blur(3px)", "blur(0px)"] },
              { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }
            );
          },
          { amount: 0.15, margin: "0px 0px -40px 0px" }
        );
      });

      const featureItems = document.querySelectorAll(".feature-item");
      if (featureItems.length) {
        animate(
          featureItems,
          { opacity: [0, 1], y: [8, 0], scale: [0.99, 1] },
          { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: stagger(0.05, { startDelay: 0.08 }) }
        );
      }

      pulseTargets.forEach((el) => {
        el.addEventListener("click", () => {
          animate(el, { scale: [1, 0.97, 1.02, 1] }, { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] });
        });
      });
    })
    .catch(() => {
      fallbackReveal();
    });
})();
