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

const HN_UNIT_DEFS = [
  { number: 4001, title: "Engineering Design" },
  { number: 4002, title: "Engineering Mathematics" },
  { number: 4003, title: "Engineering Science I" },
  { number: 4004, title: "Managing a Professional Engineering Project" },
  { number: 4005, title: "Renewable Energy" },
  { number: 4006, title: "Mechatronics" },
  { number: 4007, title: "Machining and Processing of Engineering Materials" },
  { number: 4008, title: "Mechanical Principles" },
  { number: 4009, title: "Materials, Properties and Testing" },
  { number: 4010, title: "Mechanical Workshop Practices" },
  { number: 4011, title: "Fluid Mechanics" },
  { number: 4013, title: "Fundamentals of Thermodynamics and Heat Transfer" },
  { number: 4014, title: "Production Engineering for Manufacture" },
  { number: 4015, title: "Automation, Robotics and Programmable Logic Controllers (PLCs)" },
  { number: 4016, title: "Instrumentation and Control Systems" },
  { number: 4017, title: "Quality and Process Improvement" },
  { number: 4018, title: "Maintenance Engineering" },
  { number: 4019, title: "Electrical and Electronic Principles" },
  { number: 4020, title: "Digital Principles" },
  { number: 4021, title: "Electrical Machines" },
  { number: 4022, title: "Electronic Circuits and Devices" },
  { number: 4023, title: "Computer Aided Design and Manufacture (CAD/CAM)" },
  { number: 4024, title: "Electro, Pneumatic and Hydraulic Systems" },
  { number: 4025, title: "Operations and Plant Management" },
  { number: 4026, title: "Electrical Systems and Fault Finding" },
  { number: 4027, title: "CAD for Schematics in Maintenance Engineering" },
  { number: 4030, title: "Industry 4.0" },
  { number: 4032, title: "Introduction to Biomedical Engineering" },
  { number: 4034, title: "Computer Aided Design (CAD) for Engineering" },
  { number: 4041, title: "Aircraft Aerodynamics" },
  { number: 4042, title: "Aircraft Electrical Power and Distribution Systems" },
  { number: 4043, title: "Airframe Mechanical Systems" },
  { number: 4044, title: "Composite Materials for Aerospace Applications" },
  { number: 4045, title: "Turbine Rotary Wing Mechanical and Flight Systems" },
  { number: 4076, title: "Manufacturing Processes" }
].map((u) => ({
  ...u,
  summary: `Higher National unit covering ${u.title.toLowerCase()}.`
}));

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

function buildUnits(defs, track) {
  const qualification = track === "btec" ? "BTEC National" : "Higher National";
  return defs.map((u, index) => ({
    ...u,
    id: `${track}-${u.number}`,
    track,
    qualification,
    code: `Unit ${u.number}`,
    image: SHUFFLED_ASSETS[index % SHUFFLED_ASSETS.length]
  }));
}

const BTEC_UNITS = buildUnits(BTEC_UNIT_DEFS, "btec");
const HN_UNITS = buildUnits(HN_UNIT_DEFS, "hn");
const ALL_UNITS = [...BTEC_UNITS, ...HN_UNITS];
