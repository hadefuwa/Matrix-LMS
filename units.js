const BTEC_UNIT_DEFS = [
  { number: 1, title: "Engineering Principles", summary: "Core maths and science principles used across engineering." },
  { number: 2, title: "Delivery of Engineering Processes Safely as a Team", summary: "Safe team working, RAMS, communication, and workshop practice." },
  { number: 3, title: "Engineering Product Design and Manufacture", summary: "From concept to manufactured product using structured design steps." },
  { number: 4, title: "Applied Commercial and Quality Principles in Engineering", summary: "Quality systems, costing, and commercial decision making." },
  { number: 5, title: "Principles and Applications of Mechatronics", summary: "Integrating mechanics, electronics, sensors, and control." },
  { number: 6, title: "Design and Manufacture in Engineering", summary: "Turning design ideas into buildable engineering solutions." },
  { number: 7, title: "Calculus to Solve Engineering Problems", summary: "Using differentiation and integration for engineering analysis." },
  { number: 8, title: "Electrical and Electronic Principles", summary: "Electrical laws, circuits, and core electronic theory." },
  { number: 9, title: "Computer Aided Design in Engineering", summary: "Creating 2D/3D CAD models and technical drawings." },
  { number: 10, title: "Mechanical Behaviour of Engineering Materials", summary: "How materials perform under stress, strain, and load." },
  { number: 11, title: "Modern Manufacturing Systems", summary: "Automation, lean methods, and modern production systems." },
  { number: 12, title: "Mechanical Measurement and Inspection Technologies", summary: "Measurement tools, tolerances, and inspection techniques." },
  { number: 13, title: "Mechanical Testing of Materials", summary: "Tensile, hardness, and impact testing methods." },
  { number: 14, title: "Applications of Computer Numerical Control in Engineering", summary: "CNC setup, toolpaths, and machining operations." },
  { number: 15, title: "Electrical Systems and Fault Finding", summary: "Diagnosing electrical faults safely and systematically." },
  { number: 16, title: "Microcontroller Systems for Engineers", summary: "Programming embedded controllers for practical applications." },
  { number: 17, title: "Secondary Machining Techniques", summary: "Milling, turning, and finishing techniques in manufacture." },
  { number: 18, title: "Mechanical Principles and Applications", summary: "Forces, motion, and mechanical energy in systems." },
  { number: 19, title: "Hydraulics and Pneumatics", summary: "Fluid power components, circuits, and control." },
  { number: 20, title: "Investigating the Properties and Processing of Engineering Materials", summary: "Selecting and processing materials for engineering use." },
  { number: 21, title: "Computer Aided Manufacture in Engineering", summary: "Using CAM to generate manufacturing outputs." },
  { number: 22, title: "Electronic Devices and Circuits", summary: "Semiconductors and analogue/digital circuit applications." },
  { number: 23, title: "Electrical Machines", summary: "Principles and operation of motors and generators." },
  { number: 24, title: "Electronic Measurement and Testing", summary: "Test equipment use, measurements, and troubleshooting." },
  { number: 25, title: "Properties and Applications of Engineering Materials", summary: "Matching material properties to engineering applications." },
  { number: 26, title: "Further Mechanical Principles and Applications", summary: "Advanced mechanics for complex engineering systems." },
  { number: 27, title: "Further Electrical and Electronic Principles", summary: "Higher-level electrical and electronics concepts." },
  { number: 28, title: "Further Mathematics for Engineering Technicians", summary: "Advanced maths methods for engineering calculations." },
  { number: 29, title: "Work Experience in Engineering", summary: "Applying skills in a real engineering workplace." },
  { number: 30, title: "Computer Programming and Databases", summary: "Programming logic, data handling, and database basics." },
  { number: 31, title: "Electrical Machines and Drives", summary: "Machine control, power conversion, and drive systems." },
  { number: 32, title: "Thermodynamic Principles and Practice", summary: "Heat transfer, energy systems, and thermodynamic processes." },
  { number: 33, title: "Industrial Systems", summary: "Integrated industrial operations and systems thinking." },
  { number: 34, title: "Industrial Process Controllers", summary: "Process control strategies, instrumentation, and regulation." },
  { number: 35, title: "Fluid Mechanics", summary: "Fluid behaviour, pressure, and flow in engineering." },
  { number: 36, title: "Programmable Logic Controllers", summary: "PLC programming, I/O logic, and automation control." }
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
