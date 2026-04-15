const unitGrid = document.getElementById("unitGrid");
const searchInput = document.getElementById("searchInput");
const unitCount = document.getElementById("unitCount");
const tabBtec = document.getElementById("tabBtec");
const tabHn = document.getElementById("tabHn");

let activeTrack = "btec";

function getActiveUnits() {
  return activeTrack === "hn" ? HN_UNITS : BTEC_UNITS;
}

function renderUnits(units) {
  unitGrid.innerHTML = units
    .map(
      (unit) => `
      <a class="card" href="unit.html?unit=${encodeURIComponent(unit.id)}" aria-label="Open ${unit.code}: ${unit.title}">
        <img src="${unit.image}" alt="${unit.title}" loading="lazy" />
        <div class="card-body">
          <span class="unit-badge">${unit.code}</span>
          <h3>${unit.title}</h3>
          <p>${unit.summary || "Prototype unit overview."}</p>
        </div>
      </a>`
    )
    .join("");

  const label = activeTrack === "hn" ? "Higher National" : "BTEC National";
  unitCount.textContent = `${units.length} ${label} units shown`;
}

function applyFilter() {
  const term = searchInput.value.trim().toLowerCase();
  const filtered = getActiveUnits().filter((unit) =>
    `${unit.code} ${unit.title} ${unit.summary || ""}`.toLowerCase().includes(term)
  );
  renderUnits(filtered);
}

function setActiveTab(track) {
  activeTrack = track;
  tabBtec.classList.toggle("active", track === "btec");
  tabHn.classList.toggle("active", track === "hn");
  tabBtec.setAttribute("aria-selected", track === "btec" ? "true" : "false");
  tabHn.setAttribute("aria-selected", track === "hn" ? "true" : "false");
  applyFilter();
}

searchInput.addEventListener("input", applyFilter);

if (tabBtec && tabHn) {
  tabBtec.addEventListener("click", () => setActiveTab("btec"));
  tabHn.addEventListener("click", () => setActiveTab("hn"));
}

setActiveTab("btec");
