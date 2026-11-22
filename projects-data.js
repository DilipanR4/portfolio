/**
 * ==========================================================================
 * PROJECTS DATA CONFIGURATION (projects-data.js)
 * ==========================================================================
 * Easily update, add, or modify projects shown on the portfolio.
 * 
 * INSTRUCTIONS FOR ADDING CAMPUS LOST & FOUND REPOSITORY URL:
 * When the repository is ready, simply paste the GitHub URL into the `repoUrl`
 * field of the "campus-lost-found" object below (e.g., "https://github.com/DilipanR4/campus-lost-found").
 * The project card will automatically display the working GitHub button!
 */

const PROJECTS_DATA = [
  {
    id: "pharmafog",
    title: "PharmaFog",
    subtitle: "Clinical Medication Safety & Risk Intelligence",
    status: {
      label: "Featured Project",
      type: "featured" // 'featured' | 'in-development' | 'completed'
    },
    description: "A medication safety and clinical decision-support platform designed to identify potential drug-drug interactions, duplicate medications, and polypharmacy risks. Features pairwise DDI detection with severity classification (Major, Moderate, Minor), an explainable 0–100 risk scoring engine factoring polypharmacy burden and AGS Beers Criteria geriatric flags, patient regimen tracking, clinician checklists, grounded clinical insights, and audit-ready PDF report generation.",
    tags: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "FastAPI",
      "Scikit-learn",
      "NetworkX"
    ],
    // Working GitHub repository
    repoUrl: "https://github.com/DilipanR4/pharmafog",
    icon: "💊"
  },
  {
    id: "inkloomguard",
    title: "InkloomGuard",
    subtitle: "Intelligent Brand Governance & AI Review Platform",
    status: {
      label: "Featured Project",
      type: "featured"
    },
    description: "An enterprise-grade brand governance and pre-publication content review platform built for the CodeNexus India 2026 Hackathon. Uses a hybrid evaluation engine combining deterministic regex rules with Google Gemini LLM claim and tone analysis. Flags guideline violations with exact source citations, strictly differentiates contradicted from unsupported claims, provides intent-preserving rewrite recommendations, and enforces role-based human-in-the-loop governance (Creator, Reviewer, Manager).",
    tags: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "FastAPI",
      "Google Gemini API",
      "Scikit-learn"
    ],
    // Working GitHub repository
    repoUrl: "https://github.com/DilipanR4/InkloomGuard",
    icon: "🛡️"
  },
  {
    id: "deepguard",
    title: "DeepGuard",
    subtitle: "Deepfake Image Detection",
    status: {
      label: "Featured Project",
      type: "featured"
    },
    description: "Built a prototype classifying images as REAL or DEEPFAKE using an EfficientNet-B0 model. Processed image datasets, wired PyTorch inference to FastAPI, and built an upload UI with MTCNN face detection and Grad-CAM explainability heatmaps.",
    tags: [
      "Python",
      "PyTorch",
      "EfficientNet-B0",
      "OpenCV",
      "FastAPI"
    ],
    // Working GitHub repository
    repoUrl: "https://github.com/DilipanR4/DeepFake-detection",
    icon: "👁️"
  },
  {
    id: "campus-lost-found",
    title: "Campus Lost & Found",
    subtitle: "Campus Belongings Recovery & Management Portal",
    status: {
      label: "Featured Project",
      type: "featured"
    },
    description: "A campus-focused web platform designed for reporting lost and found items and helping students reconnect with misplaced belongings across university facilities. Built with secure student authentication, lost/found item submission with location details, item claim tracking, direct owner contact workflows, and administrative moderation controls.",
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT"
    ],
    // Working GitHub repository
    repoUrl: "https://github.com/DilipanR4/Campus-Lost-Found",
    icon: "🔍"
  }
];

// Attach to window or module object for browser and Node.js access
if (typeof window !== "undefined") {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PROJECTS_DATA;
}
