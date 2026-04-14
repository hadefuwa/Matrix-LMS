const BTEC_UNIT_DEFS = [
  { number: 1, title: "Engineering Principles" },
  { number: 2, title: "Delivery of Engineering Processes Safely as a Team" },
  { number: 3, title: "Engineering Product Design and Manufacture" },
  { number: 4, title: "Applied Commercial and Quality Principles in Engineering" },
  { number: 5, title: "Principles and Applications of Mechatronics" },
  { number: 6, title: "Design and Manufacture in Engineering" },
  { number: 7, title: "Calculus to Solve Engineering Problems" },
  { number: 8, title: "Electrical and Electronic Principles" },
  { number: 9, title: "Computer Aided Design in Engineering" },
  { number: 10, title: "Mechanical Behaviour of Engineering Materials" },
  { number: 11, title: "Modern Manufacturing Systems" },
  { number: 12, title: "Mechanical Measurement and Inspection Technologies" },
  { number: 13, title: "Mechanical Testing of Materials" },
  { number: 14, title: "Applications of Computer Numerical Control in Engineering" },
  { number: 15, title: "Electrical Systems and Fault Finding" },
  { number: 16, title: "Microcontroller Systems for Engineers" },
  { number: 17, title: "Secondary Machining Techniques" },
  { number: 18, title: "Mechanical Principles and Applications" },
  { number: 19, title: "Hydraulics and Pneumatics" },
  { number: 20, title: "Investigating the Properties and Processing of Engineering Materials" },
  { number: 21, title: "Computer Aided Manufacture in Engineering" },
  { number: 22, title: "Electronic Devices and Circuits" },
  { number: 23, title: "Electrical Machines" },
  { number: 24, title: "Electronic Measurement and Testing" },
  { number: 25, title: "Properties and Applications of Engineering Materials" },
  { number: 26, title: "Further Mechanical Principles and Applications" },
  { number: 27, title: "Further Electrical and Electronic Principles" },
  { number: 28, title: "Further Mathematics for Engineering Technicians" },
  { number: 29, title: "Work Experience in Engineering" },
  { number: 30, title: "Computer Programming and Databases" },
  { number: 31, title: "Electrical Machines and Drives" },
  { number: 32, title: "Thermodynamic Principles and Practice" },
  { number: 33, title: "Industrial Systems" },
  { number: 34, title: "Industrial Process Controllers" },
  { number: 35, title: "Fluid Mechanics" },
  { number: 36, title: "Programmable Logic Controllers" }
];

const UNIT_GRADIENTS = [
  ["#1d3557", "#457b9d"],
  ["#0b6e4f", "#09a66d"],
  ["#7a1f3d", "#c04070"],
  ["#4d2d52", "#8d5ba6"],
  ["#7a4f01", "#d89100"],
  ["#134074", "#3f88c5"]
];

function unitEmoji(title) {
  const t = title.toLowerCase();
  if (t.includes("logic controllers") || t.includes("process controllers")) return "🤖";
  if (t.includes("thermodynamic")) return "🔥";
  if (t.includes("fluid") || t.includes("hydraulics") || t.includes("pneumatics")) return "💧";
  if (t.includes("electrical") || t.includes("electronic")) return "⚡";
  if (t.includes("calculus") || t.includes("mathematics")) return "📐";
  if (t.includes("computer") || t.includes("programming") || t.includes("microcontroller")) return "💻";
  if (t.includes("material")) return "🧱";
  if (t.includes("manufacture") || t.includes("machining") || t.includes("mechanical")) return "⚙️";
  return "🔧";
}

function truncate(text, max = 44) {
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

function svgDataUrl(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function unitImage(unit) {
  const [from, to] = UNIT_GRADIENTS[unit.number % UNIT_GRADIENTS.length];
  const emoji = unitEmoji(unit.title);
  const title = truncate(unit.title.replace(/&/g, "and"));
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#g)"/>
  <circle cx="1020" cy="180" r="180" fill="rgba(255,255,255,0.08)"/>
  <circle cx="110" cy="690" r="140" fill="rgba(255,255,255,0.06)"/>
  <text x="70" y="120" font-family="Arial, sans-serif" font-size="56" fill="white" opacity="0.9">Unit ${unit.number}</text>
  <text x="70" y="195" font-family="Arial, sans-serif" font-size="44" fill="white" font-weight="700">${title}</text>
  <text x="915" y="520" font-size="240">${emoji}</text>
  <text x="70" y="740" font-family="Arial, sans-serif" font-size="28" fill="white" opacity="0.85">Matrix LMS Prototype</text>
</svg>`;

  return svgDataUrl(svg);
}

const BTEC_UNITS = BTEC_UNIT_DEFS.map((u) => ({
  ...u,
  code: `Unit ${u.number}`,
  image: unitImage(u)
}));
