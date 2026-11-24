/**
 * ==========================================================================
 * PROJECTS DATA CONFIGURATION (projects-data.js)
 * ==========================================================================
 * Dilipan R Portfolio - Projects Configuration verbatim from Updated Resume
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
    description: "Architected a dual-backend microservices orchestrator connecting an Express.js gateway and FastAPI AI inference service via constant-time hmac.compare_digest validation and Bearer tokens. Enforced strict input validation, CORS sandboxing, env-based secret management, and fail-safe fallbacks preventing service disruption during traffic anomalies.",
    tags: [
      "FastAPI",
      "Express.js",
      "Python",
      "Node.js",
      "Microservices",
      "HMAC",
      "REST APIs"
    ],
    repoUrl: "https://github.com/DilipanR4/InkloomGuard",
    icon: "🛡️",
    badgeColor: "rgba(249, 115, 22, 0.15)",
    accentColor: "#F97316"
  },
  {
    id: "campus-lost-found",
    title: "Campus Lost and Found",
    subtitle: "Full-Stack Recovery Portal",
    category: "fullstack",
    categoryLabel: "Full Stack Web",
    status: {
      label: "Featured Project",
      type: "featured"
    },
    description: "Shipped an end-to-end campus recovery platform supporting real-time report submission, multi-attribute search, and lifecycle status tracking for campus users. Implemented Role-Based Access Control (RBAC) across Admin and Student tiers, interactive status workflows, and tamper-proof session persistence via HttpOnly cookie JWTs.",
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "RBAC",
      "JWT"
    ],
    repoUrl: "https://github.com/DilipanR4/Campus-Lost-Found",
    icon: "🔍",
    badgeColor: "rgba(236, 72, 153, 0.15)",
    accentColor: "#EC4899"
  },
  {
    id: "deepguard",
    title: "DeepGuard",
    subtitle: "Deepfake Image Detection Engine",
    category: "ai-ml",
    categoryLabel: "Deep Learning & CV",
    status: {
      label: "Featured Project",
      type: "featured"
    },
    description: "Trained and fine-tuned a computer vision classifier on facial datasets using EfficientNet-B0 via Transfer Learning to detect authentic vs. AI-synthesized deepfake media. Automated OpenCV image preprocessing pipelines and exposed sub-150ms real-time inference endpoints paired with a responsive web upload UI.",
    tags: [
      "PyTorch",
      "EfficientNet-B0",
      "Transfer Learning",
      "OpenCV",
      "FastAPI",
      "React"
    ],
    repoUrl: "https://github.com/DilipanR4/DeepFake-detection",
    icon: "👁️",
    badgeColor: "rgba(59, 130, 246, 0.15)",
    accentColor: "#3B82F6"
  },
  {
    id: "pharmafog",
    title: "PharmaFog+",
    subtitle: "Polypharmacy Risk Analysis Engine",
    category: "ai-ml",
    categoryLabel: "AI & Healthcare",
    status: {
      label: "Featured Project",
      type: "featured"
    },
    description: "Engineered a clinical decision engine evaluating complex drug combinations to surface adverse contraindications and risk factors in real time. Paired scikit-learn predictive scoring models with deterministic rule checks in FastAPI, surfacing risk analytics via a reactive React/Vite dashboard.",
    tags: [
      "FastAPI",
      "scikit-learn",
      "React",
      "Vite",
      "Python"
    ],
    repoUrl: "https://github.com/DilipanR4/pharmafog",
    icon: "💊",
    badgeColor: "rgba(139, 92, 246, 0.15)",
    accentColor: "#8B5CF6"
  }
];

if (typeof window !== "undefined") {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PROJECTS_DATA;
}
