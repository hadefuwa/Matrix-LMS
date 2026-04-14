const params = new URLSearchParams(window.location.search);
const unitNumber = Number(params.get("unit")) || 1;
const unit = BTEC_UNITS.find((u) => u.number === unitNumber) || BTEC_UNITS[0];

document.title = `${unit.code} - ${unit.title}`;
document.getElementById("unitTitle").textContent = `${unit.code}: ${unit.title}`;
document.getElementById("unitHero").src = unit.image;
document.getElementById("unitHero").alt = unit.title;

document.getElementById("unitDescription").textContent =
  `This is placeholder prototype text for ${unit.code}. In the final system this will describe what learners study, teaching context, assessment approach, and delivery guidance.`;

const objectives = [
  "Understand the core principles and vocabulary for this unit.",
  "Apply theory to practical engineering examples.",
  "Produce evidence suitable for assessment.",
  "Reflect on safety, quality, and industry practice."
];

const sow = [
  "Week 1: Unit intro, baseline assessment, and key concepts.",
  "Week 2: Tutor-led theory session plus worked examples.",
  "Week 3: Practical workshop activity and observation.",
  "Week 4: Assessment preparation and learner support session.",
  "Week 5: Assignment completion and feedback review."
];

const hardware = [
  "Matrix training board (placeholder)",
  "Relevant sensors/actuators (placeholder)",
  "Power supply and protection equipment (placeholder)",
  "PC/software tools for demonstration (placeholder)"
];

const manuals = [
  "Hardware user guide (placeholder)",
  "Tutor quick-start guide (placeholder)",
  "Health and safety checklist (placeholder)"
];

const videos = [
  "Intro video: concept overview (placeholder)",
  "Demo video: setup and operation (placeholder)",
  "Assessment tips video (placeholder)"
];

function fillList(id, items) {
  document.getElementById(id).innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

fillList("objectivesList", objectives);
fillList("sowList", sow);
fillList("hardwareList", hardware);
fillList("manualsList", manuals);
fillList("videosList", videos);
