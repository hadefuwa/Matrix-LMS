(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

  const revealTargets = [
    ...document.querySelectorAll(".site-header, .feature-banner, .unit-hero, .panel, .card, .site-footer")
  ];

  revealTargets.forEach((el, index) => {
    el.classList.add("reveal-init");
    el.style.setProperty("--reveal-delay", `${Math.min(index * 45, 420)}ms`);
  });

  if (!prefersReducedMotion && "IntersectionObserver" in window && !isCoarsePointer) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el, index) => {
      const delay = prefersReducedMotion ? 0 : Math.min(index * 55, 360);
      window.setTimeout(() => el.classList.add("revealed"), delay);
    });
  }

  if (!prefersReducedMotion && isCoarsePointer) {
    const ambientTargets = document.querySelectorAll(".panel, .card");
    ambientTargets.forEach((el, index) => {
      el.classList.add("touch-ambient");
      el.style.setProperty("--touch-delay", `${(index % 6) * 180}ms`);
    });
  }

  if (!prefersReducedMotion && window.matchMedia("(min-width: 900px)").matches && !isCoarsePointer) {
    const tiltTargets = document.querySelectorAll(
      ".card, .panel, .video-thumb, .download-btn, .course-btn, .scorm-btn, .quote-btn, .tab-btn, .offering-tab-btn, .contact-card"
    );

    tiltTargets.forEach((el) => {
      const maxTilt = el.classList.contains("card") || el.classList.contains("panel") ? 3 : 2;

      el.addEventListener("pointermove", (event) => {
        const rect = el.getBoundingClientRect();
        const relX = (event.clientX - rect.left) / rect.width;
        const relY = (event.clientY - rect.top) / rect.height;
        const rotateY = (relX - 0.5) * maxTilt * 2;
        const rotateX = (0.5 - relY) * maxTilt * 2;
        el.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-1px)`;
      });

      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
      });
    });

    window.addEventListener(
      "pointermove",
      (event) => {
        const x = (event.clientX / window.innerWidth) * 100;
        const y = (event.clientY / window.innerHeight) * 100;
        document.documentElement.style.setProperty("--mouse-x", `${x}%`);
        document.documentElement.style.setProperty("--mouse-y", `${y}%`);
      },
      { passive: true }
    );
  }
})();
