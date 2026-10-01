export interface ProjectDetail {
  slug: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  status: string;
  source?: string;
}
export const PROJECT_DETAILS: ProjectDetail[] = [
  {
    slug: "whatsapp-api-platform",
    challenge:
      "Business conversations and notifications need to connect with customer records and operational workflows.",
    approach:
      "Built a messaging platform around WhatsApp API workflows and backend integrations, with contact management and template-based notifications.",
    deliverables: [
      "Customer conversations and contact management",
      "Template notifications and campaign-style communication",
      "REST integrations with operational systems",
    ],
    status: "Business application",
  },
  {
    slug: "manpower-erp",
    challenge:
      "Manpower operations span employee records, deployment, attendance and document tracking.",
    approach:
      "Developed a Frappe/ERPNext system that brings these workflows together with payroll support and operational reporting.",
    deliverables: [
      "Employee and recruitment records",
      "Deployment, attendance and document tracking",
      "Customer management and operational reports",
    ],
    status: "Business application",
    source: "https://github.com/hilalhabeeb/manpowerERP",
  },
  {
    slug: "number-plate-detection",
    challenge:
      "Parking and access-control workflows need structured information from vehicle images.",
    approach:
      "Implemented an OpenCV workflow combining image processing and number plate detection for downstream systems.",
    deliverables: [
      "Image processing and detection workflow",
      "Number plate recognition",
      "Structured output for integration",
    ],
    status: "Computer vision project",
  },
  {
    slug: "erp-business-solutions",
    challenge:
      "Standard ERP workflows need adapting to the way a business handles stock, sales and approvals.",
    approach:
      "Customized ERPNext with Python and JavaScript business rules, permissions, reports and print formats.",
    deliverables: [
      "Sales, inventory, accounting and HR workflows",
      "Role permissions and approval logic",
      "Reports, print formats and task automation",
    ],
    status: "ERPNext customization",
  },
  {
    slug: "sportigo",
    challenge:
      "Players need a straightforward way to discover and book football turfs.",
    approach:
      "Built a Django booking system with recommendations based on user preferences, deployed on AWS EC2 and tested with Selenium.",
    deliverables: [
      "Football turf booking flow",
      "ML-based turf recommendations",
      "AWS deployment and browser testing",
    ],
    status: "Academic product",
    source: "https://github.com/hilalhabeeb/sportigoturfbooking",
  },
  {
    slug: "epark-bh",
    challenge:
      "Machine-paid parking can connect vehicle identification with digital payment and operations.",
    approach:
      "Explored a Bahrain parking concept using OpenCV number plate recognition and payment-flow design.",
    deliverables: [
      "Vehicle identification concept",
      "Digital payment-flow design",
      "Parking operation automation concept",
    ],
    status: "Concept project",
    source: "https://github.com/hilalhabeeb/epark.bh",
  },
];
export const WTC_LIVE_URL = "https://bahrain-wtc.hilalhabeeb-bh.workers.dev/";
export const WTC_STACK = [
  "React",
  "TypeScript",
  "Three.js",
  "Python / NumPy",
  "GLB / glTF",
  "Open-Meteo",
  "Cloudflare Workers",
];
export const WTC_SOURCES = [
  {
    name: "Bahrain World Trade Center",
    note: "Building operator: rotor diameter and turbine ratings.",
    url: "https://www.bahrainwtc.com/",
  },
  {
    name: "Ramboll / Norwin installation announcement",
    note: "Historical engineering reference for tower height, rotor size and installation heights.",
    url: "https://www.norwin.dk/Resources/PR-BWTC-Ramboll-Norwin-01.pdf",
  },
  {
    name: "Otis project showcase",
    note: "Architectural context and original design expectations.",
    url: "https://www.otis.com/en/us/our-company/global-projects/project-showcase/bahrain-world-trade-center",
  },
  {
    name: "Open-Meteo documentation",
    note: "Weather data provider. Model-derived weather, rather than building sensor readings.",
    url: "https://open-meteo.com/en/docs",
  },
];
