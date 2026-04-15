(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const tickEls = [...document.querySelectorAll(".feature-tick")];
  const buttonEls = [
    ...document.querySelectorAll(
      ".tab-btn, .offering-tab-btn, .download-btn, .course-btn, .scorm-btn, .cpd-btn, .quote-btn, .contact-card"
    )
  ];

  const safeAnimate = (el, keyframes, options) => {
    if (!el || !el.animate || prefersReducedMotion) return;
    try {
      el.animate(keyframes, options);
    } catch {
      // ignore animation failures
    }
  };

  const setupTabGlider = () => {
    const wrap = document.querySelector(".unit-tabs");
    if (!wrap) return;

    const tabs = [...wrap.querySelectorAll(".tab-btn")];
    if (!tabs.length) return;

    let glider = wrap.querySelector(".tab-glider");
    if (!glider) {
      glider = document.createElement("span");
      glider.className = "tab-glider";
      wrap.appendChild(glider);
    }

    const move = () => {
      const active = wrap.querySelector(".tab-btn.active") || tabs[0];
      if (!active) return;
      const parentRect = wrap.getBoundingClientRect();
      const activeRect = active.getBoundingClientRect();
      const x = activeRect.left - parentRect.left;
      const width = activeRect.width;

      if (prefersReducedMotion) {
        glider.style.transform = `translateX(${x}px)`;
        glider.style.width = `${width}px`;
        return;
      }

      safeAnimate(
        glider,
        [
          { transform: glider.style.transform || `translateX(${x}px)`, width: glider.style.width || `${width}px` },
          { transform: `translateX(${x}px)`, width: `${width}px` }
        ],
        { duration: 320, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" }
      );
      glider.style.transform = `translateX(${x}px)`;
      glider.style.width = `${width}px`;
    };

    move();
    wrap.addEventListener("click", (event) => {
      if (event.target.closest(".tab-btn")) {
        requestAnimationFrame(move);
      }
    });
    window.addEventListener("resize", move, { passive: true });
  };

  const setupButtons = () => {
    buttonEls.forEach((el) => {
      el.addEventListener("click", () => {
        safeAnimate(
          el,
          [
            { transform: "scale(1)" },
            { transform: "scale(0.97)" },
            { transform: "scale(1.02)" },
            { transform: "scale(1)" }
          ],
          { duration: 300, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" }
        );
      });

      if (canHover && !prefersReducedMotion) {
        el.addEventListener("pointerenter", () => {
          safeAnimate(el, [{ transform: "translateY(0)" }, { transform: "translateY(-2px)" }], {
            duration: 180,
            easing: "ease-out",
            fill: "forwards"
          });
        });
        el.addEventListener("pointerleave", () => {
          safeAnimate(el, [{ transform: "translateY(-2px)" }, { transform: "translateY(0)" }], {
            duration: 180,
            easing: "ease-out",
            fill: "forwards"
          });
        });
      }
    });
  };

  const setupTicks = () => {
    if (prefersReducedMotion) return;

    tickEls.forEach((tick, index) => {
      safeAnimate(
        tick,
        [
          { transform: "scale(1) rotate(0deg)", boxShadow: "0 0 0 0 rgba(56, 198, 117, 0.35)" },
          { transform: "scale(1.11) rotate(-6deg)", boxShadow: "0 0 0 8px rgba(56, 198, 117, 0.08)" },
          { transform: "scale(1) rotate(0deg)", boxShadow: "0 0 0 0 rgba(56, 198, 117, 0.2)" }
        ],
        {
          duration: 1800,
          delay: index * 120,
          easing: "ease-in-out",
          iterations: Infinity
        }
      );
    });
  };

  setupTabGlider();
  setupButtons();
  setupTicks();
})();
