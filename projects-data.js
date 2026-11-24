/**
 * ==========================================================================
 * PROJECTS DATA CONFIGURATION (projects-data.js)
 * ==========================================================================
 * Dilipan R Portfolio - Projects Configuration based on Resume
 * 
 * Featured projects with working GitHub repositories, technology stacks,
 * and individual color themes (Orange, Purple, Electric Blue, Pink).
 */

const PROJECTS_DATA = [
  {
    id: "inkloomguard",
    title: "InkloomGuard",
    subtitle: "AI-Integrated Security Platform",
    category: "ai-ml",
    categoryLabel: "AI & Security",
    status: {
      label: "Featured Project",
      type: "featured"
    },
    description: "Integrated Express.js and FastAPI AI services using Bearer tokens and hmac.compare_digest auth. Enforced input validation, env-based secret management, CORS policies, and fail-safe fallbacks. Validated API contracts, authentication flows, and error handling across backend and AI services.",
    tags: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Bearer Auth",
      "HMAC"
    ],
    repoUrl: "https://github.com/DilipanR4/InkloomGuard",
    icon: "🛡️",
    badgeColor: "rgba(249, 115, 22, 0.15)",
    accentColor: "#F97316"
  },
  {
    id: "deepguard",
    title: "DeepGuard",
    subtitle: "Deepfake Image Detection",
    category: "ai-ml",
    categoryLabel: "Deep Learning & CV",
    status: {
      label: "Featured Project",
      type: "featured"
    },
    description: "Trained and deployed an EfficientNet-B0 classifier to detect REAL vs. DEEPFAKE images. Automated OpenCV image preprocessing, FastAPI inference endpoints, and an interactive dark-themed web upload interface.",
    tags: [
      "Python",
      "PyTorch",
      "EfficientNet-B0",
      "OpenCV",
      "FastAPI"
    ],
    repoUrl: "https://github.com/DilipanR4/DeepFake-detection",
    icon: "👁️",
    badgeColor: "rgba(59, 130, 246, 0.15)",
    accentColor: "#3B82F6"
  },
  {
    id: "pharmafog",
    title: "PharmaFog+",
    subtitle: "Multi-Agent Polypharmacy Risk Engine",
    category: "ai-ml",
    categoryLabel: "AI & Healthcare",
    status: {
      label: "Featured Project",
      type: "featured"
    },
    description: "Engineered a polypharmacy risk engine evaluating medication inputs into actionable risk factors. Paired a scikit-learn model and rule checks in FastAPI with an interactive React/Vite dashboard for clinical decision support.",
    tags: [
      "Python",
      "FastAPI",
      "Scikit-learn",
      "React",
      "Vite"
    ],
    repoUrl: "https://github.com/DilipanR4/pharmafog",
    icon: "💊",
    badgeColor: "rgba(139, 92, 246, 0.15)",
    accentColor: "#8B5CF6"
  },
  {
    id: "campus-lost-found",
    title: "Campus Lost and Found",
    subtitle: "Full-Stack Belongings Recovery Platform",
    category: "fullstack",
    categoryLabel: "Full Stack Web",
    status: {
      label: "Featured Project",
      type: "featured"
    },
    description: "Developed a full-stack recovery platform supporting report submission, search, and multi-filtering. Implemented role-based admin/student access, status workflows, analytics, and HttpOnly JWT auth.",
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT Auth"
    ],
    repoUrl: "https://github.com/DilipanR4/Campus-Lost-Found",
    icon: "🔍",
    badgeColor: "rgba(236, 72, 153, 0.15)",
    accentColor: "#EC4899"
  }
];

// Attach to window or module object for browser and Node.js access
if (typeof window !== "undefined") {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PROJECTS_DATA;
}
