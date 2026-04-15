const unitGrid = document.getElementById("unitGrid");
const searchInput = document.getElementById("searchInput");
const unitCount = document.getElementById("unitCount");

function renderUnits(units) {
  unitGrid.innerHTML = units
    .map(
      (unit) => `
      <a class="card" href="unit.html?unit=${unit.number}" aria-label="Open ${unit.code}: ${unit.title}">
        <img src="${unit.image}" alt="${unit.title}" loading="lazy" />
        <div class="card-body">
          <span class="unit-badge">${unit.code}</span>
          <h3>${unit.title}</h3>
          <p>${unit.summary || "Prototype unit overview."}</p>
        </div>
      </a>`
    )
    .join("");

  unitCount.textContent = `${units.length} units shown`;
}

function applyFilter() {
  const term = searchInput.value.trim().toLowerCase();
  const filtered = BTEC_UNITS.filter((unit) =>
    `${unit.code} ${unit.title} ${unit.summary || ""}`.toLowerCase().includes(term)
  );
  renderUnits(filtered);
}

searchInput.addEventListener("input", applyFilter);
renderUnits(BTEC_UNITS);
