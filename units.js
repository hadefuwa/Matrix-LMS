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

const ASSET_IMAGES = [
  "assets/web/pexels-alshreef-36673118.webp",
  "assets/web/pexels-ferhat-kocakaya-218644751-33689077.webp",
  "assets/web/pexels-hoang-nc-483165236-36692505.webp",
  "assets/web/pexels-laura-893134855-36920312.webp",
  "assets/web/pexels-maarten-ceulemans-1837879676-36564994.webp",
  "assets/web/pexels-mikhail-nilov-9242180.webp",
  "assets/web/pexels-mikhail-nilov-9242216.webp",
  "assets/web/pexels-mikhail-nilov-9242858.webp",
  "assets/web/pexels-pixabay-256297.webp",
  "assets/web/pexels-theshuttervision-10290629.webp",
  "assets/web/pexels-thisisengineering-3862379.webp",
  "assets/web/scott-blake-x-ghf9LjrVg-unsplash.webp"
];

function deterministicShuffle(items) {
  const arr = [...items];
  let seed = 36036;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    const j = seed % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const SHUFFLED_ASSETS = deterministicShuffle(ASSET_IMAGES);

const BTEC_UNITS = BTEC_UNIT_DEFS.map((u) => ({
  ...u,
  code: `Unit ${u.number}`,
  image: SHUFFLED_ASSETS[(u.number - 1) % SHUFFLED_ASSETS.length]
}));
