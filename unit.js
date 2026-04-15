const params = new URLSearchParams(window.location.search);
const unitNumber = Number(params.get("unit")) || 1;
const unit = BTEC_UNITS.find((u) => u.number === unitNumber) || BTEC_UNITS[0];

document.title = `${unit.code} - ${unit.title}`;
document.getElementById("unitTitle").textContent = `${unit.code}: ${unit.title}`;
document.getElementById("unitHero").src = unit.image;
document.getElementById("unitHero").alt = unit.title;

document.getElementById("unitDescription").innerHTML = `
  <p>The primary aim of this unit is to bridge the gap between scientific theory and practical engineering applications. While physics tells you how the universe works, this unit teaches you how to ensure a bridge does not collapse, an engine does not overheat, and a mechanical lift operates efficiently.</p>
  <p><strong>Official Theme:</strong> "To introduce learners to the essential mechanical principles associated with engineering applications, involving the behavior of static, dynamic, and fluid systems."</p>
`;

const learningAims = [
  {
    title: "Learning Aim A: Examine static engineering systems",
    intro: "This section focuses on objects at rest and the internal stresses they face.",
    topics: [
      {
        code: "A1",
        title: "Reduction of systems of forces",
        points: [
          "Resolving forces into horizontal and vertical components.",
          "Determining the resultant of a system of coplanar forces using vector addition and trigonometry."
        ]
      },
      {
        code: "A2",
        title: "Equilibrium of 2D force systems",
        points: [
          "Applying the conditions for static equilibrium: ΣFₓ = 0, ΣFᵧ = 0, and ΣM = 0.",
          "Calculating support reactions for simply supported beams."
        ]
      },
      {
        code: "A3",
        title: "Stress, strain, and elasticity",
        points: [
          "Calculating direct stress (σ), strain (ε), and Young’s Modulus (E).",
          "Understanding the relationship between factor of safety and material limits."
        ]
      }
    ]
  },
  {
    title: "Learning Aim B: Examine dynamic engineering systems",
    intro: "This section transitions into kinetic energy and the physics of moving parts.",
    topics: [
      {
        code: "B1",
        title: "Kinetic and potential energy",
        points: [
          "Calculating kinetic energy (Eₖ = 1/2mv²) and gravitational potential energy (Eₚ = mgh).",
          "Applying the Principle of Conservation of Energy to solve engineering problems involving falling objects or oscillating systems."
        ]
      },
      {
        code: "B2",
        title: "Work and power",
        points: [
          "Calculating work done by a constant force (W = Fs).",
          "Determining power requirements for mechanical systems (P = Fv)."
        ]
      },
      {
        code: "B3",
        title: "Uniform acceleration",
        points: [
          "Using the equations of motion (SUVAT) for linear displacement.",
          "Applying Newton’s Second Law (F = ma) to systems involving friction and inclined planes."
        ]
      }
    ]
  },
  {
    title: "Learning Aim C: Examine fluid and thermodynamic systems",
    intro: "This section covers how fluids behave under pressure and how heat energy moves.",
    topics: [
      {
        code: "C1",
        title: "Fluid mechanics",
        points: [
          "Determining hydrostatic pressure at various depths (p = ρgh).",
          "Understanding buoyancy and Archimedes’ Principle for floating bodies."
        ]
      },
      {
        code: "C2",
        title: "Thermodynamic properties",
        points: [
          "Understanding relationships between pressure, volume, and temperature (Boyle’s Law, Charles’s Law, and the General Gas Law).",
          "Calculating heat transfer using specific heat capacity (Q = mcΔT)."
        ]
      },
      {
        code: "C3",
        title: "Simple machines",
        points: [
          "Analyzing the Mechanical Advantage (MA) and Velocity Ratio (VR) of lifting machines (for example screw jacks and pulley blocks).",
          "Calculating system efficiency based on energy input versus useful output."
        ]
      }
    ]
  }
];

const assessmentTerms = [
  {
    level: "Pass (P)",
    description: "Use correct formulas to solve standard problems accurately."
  },
  {
    level: "Merit (M)",
    description: "Explain why results occur and complete more complex multi-stage calculations."
  },
  {
    level: "Distinction (D)",
    description: "Evaluate variable impacts (for example material choice vs factor of safety) and justify engineering decisions."
  }
];

const sow = [
  "Week 1: Unit intro, baseline assessment, and key concepts.",
  "Week 2: Tutor-led theory session plus worked examples.",
  "Week 3: Practical workshop activity and observation.",
  "Week 4: Assessment preparation and learner support session.",
  "Week 5: Assignment completion and feedback review."
];

const hardwareSummary = "This full set of equipment allows students to understand the principles of fundamental statics, materials and dynamics engineering systems in one portal set of equipment.";

const hardware = [
  "Statics fundamentals",
  "Materials fundamentals",
  "Dynamics fundamentals",
  "Mechanisms fundamentals",
  "Dynamics Plus",
  "Mechanisms Plus"
];

const docs = [
  {
    title: "Curriculum on Static forces for mechanical engineering teaching",
    ref: "CP6368",
    url: "https://www.matrixtsl.com/wp-content/uploads/2026/03/CP6368-Statics-Fundamentals.pdf",
    summary: "Statics fundamentals curriculum document.",
    suitableFor: ["FM1883", "FM9458-2"]
  },
  {
    title: "Curriculum on Dynamic forces for mechanical engineering teaching",
    ref: "CP1505",
    url: "https://www.matrixtsl.com/wp-content/uploads/2026/03/CP1505-Dynamics-Fundamentals.pdf",
    summary: "Dynamics fundamentals curriculum document.",
    suitableFor: ["FM3935", "FM9458-2"]
  },
  {
    title: "Materials Fundamentals",
    ref: "CP0876",
    url: "https://www.matrixtsl.com/wp-content/uploads/2026/03/CP0876-Materials-Fundamentals.pdf",
    summary: "Learn about the behaviour of material properties under different types of forces.",
    suitableFor: ["FM1292", "FM5498-2"]
  }
];

const featureTicks = [
  "Matrix Hardware Available",
  "Matrix Software Free",
  "Matrix Curriculum Mapped To Learning Outcomes Free",
  "SCORM Compliant",
  "Course Hours: 60 hours free"
];

const PLAYLIST_ID = "PLZonYDsrgLmcNqDHwAIUKlt4ZCHFO_rHd";
const playlistVideos = [
  { id: "1iceY6lAKr0", title: "Introducing Fundamental Mechanics from Matrix TSL" },
  { id: "VxfDRLughQg", title: "Fundamental Mechanics - Materials" },
  { id: "Cz5zJkafZo8", title: "Fundamental Mechanics - Dynamics" },
  { id: "7I_fW6juM40", title: "Fundamental Mechanics - Statics" },
  { id: "ZJf9ni8KNcI", title: "Introducing Mechanisms Fundamentals" },
  { id: "9vpu4dfIw90", title: "New to the Fundamental Mechanics range" }
];

function fillList(id, items) {
  document.getElementById(id).innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderObjectives(id) {
  const html = learningAims
    .map(
      (aim) => `
      <article class="aim-block">
        <h3>${aim.title}</h3>
        <p>${aim.intro}</p>
        ${aim.topics
          .map(
            (topic) => `
            <div class="aim-topic">
              <h4>${topic.code}: ${topic.title}</h4>
              <ul>
                ${topic.points.map((point) => `<li>${point}</li>`).join("")}
              </ul>
            </div>`
          )
          .join("")}
      </article>`
    )
    .join("");

  const assessmentHtml = `
    <article class="aim-block assessment-block">
      <h3>Key Assessment Terms</h3>
      <p>When these appear in assignment briefs, this is the expected level of evidence:</p>
      <ul>
        ${assessmentTerms
          .map((term) => `<li><strong>${term.level}</strong>: ${term.description}</li>`)
          .join("")}
      </ul>
    </article>`;

  document.getElementById(id).innerHTML = html + assessmentHtml;
}

function setupObjectivesToggle() {
  const content = document.getElementById("objectivesContent");
  const toggle = document.getElementById("objectivesToggle");
  if (!content || !toggle) return;

  let expanded = false;

  const update = () => {
    content.classList.toggle("objectives-collapsed", !expanded);
    toggle.textContent = expanded ? "Hide full content ▲" : "Expand here ▼";
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
  };

  toggle.addEventListener("click", () => {
    expanded = !expanded;
    update();
  });

  update();
}

function fillDocs(id, items) {
  document.getElementById(id).innerHTML = items
    .map(
      (doc) => `
      <li>
        <a href="${doc.url}" target="_blank" rel="noopener noreferrer">${doc.title}</a>
        <div><strong>REF:</strong> ${doc.ref}</div>
        <div>${doc.summary}</div>
        <div><strong>Suitable for:</strong> ${doc.suitableFor.map((s) => `<code>${s}</code>`).join(" ")}</div>
      </li>`
    )
    .join("");
}

function renderFeatureTicks(id, items) {
  const host = document.getElementById(id);
  host.innerHTML = items
    .map(
      (item) => `
      <li class="feature-item">
        <span class="feature-tick">✓</span>
        <span>${item}</span>
      </li>`
    )
    .join("");

  host.querySelectorAll(".feature-item").forEach((el, index) => {
    setTimeout(() => el.classList.add("show"), 90 * index + 80);
  });
}

const videoSlider = document.getElementById("videoSlider");
const videoPlayer = document.getElementById("videoPlayer");

function setActiveVideo(videoId, index) {
  videoPlayer.src = `https://www.youtube.com/embed/${videoId}?list=${PLAYLIST_ID}&index=${index}&rel=0`;
  document.querySelectorAll(".video-thumb").forEach((el) => {
    el.classList.toggle("active", el.dataset.id === videoId);
  });
}

function renderVideoSlider() {
  videoSlider.innerHTML = playlistVideos
    .map(
      (video, index) => `
      <button class="video-thumb${index === 0 ? " active" : ""}" data-id="${video.id}" data-index="${index}" aria-label="Play ${video.title}">
        <img src="https://i.ytimg.com/vi/${video.id}/mqdefault.jpg" alt="${video.title}" loading="lazy" />
        <span>${video.title}</span>
      </button>`
    )
    .join("");

  videoSlider.addEventListener("click", (event) => {
    const btn = event.target.closest(".video-thumb");
    if (!btn) return;
    setActiveVideo(btn.dataset.id, Number(btn.dataset.index));
  });

  setActiveVideo(playlistVideos[0].id, 0);
}

renderFeatureTicks("featureTicks", featureTicks);
renderObjectives("objectivesContent");
setupObjectivesToggle();
fillList("sowList", sow);
document.getElementById("hardwareSummary").textContent = hardwareSummary;
fillList("hardwareList", hardware);
fillDocs("docsList", docs);
renderVideoSlider();
