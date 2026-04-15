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

const hardwareSummary = "This full set of equipment allows students to understand the principles of fundamental statics, materials and dynamics engineering systems in one portal set of equipment.";

const hardware = [
  "Statics fundamentals",
  "Materials fundamentals",
  "Dynamics fundamentals",
  "Mechanisms fundamentals",
  "Dynamics Plus",
  "Mechanisms Plus"
];

const manuals = [
  "Hardware user guide (placeholder)",
  "Tutor quick-start guide (placeholder)",
  "Health and safety checklist (placeholder)"
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

fillList("objectivesList", objectives);
fillList("sowList", sow);
document.getElementById("hardwareSummary").textContent = hardwareSummary;
fillList("hardwareList", hardware);
fillList("manualsList", manuals);
renderVideoSlider();
