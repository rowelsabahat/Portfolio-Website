type Resource = { label: "GitHub" | "PRD" | "Report" | "Product Report" | "Video Presentation"; url: `https://${string}` };

type Project = {
  id: string;
  name: string;
  category: string;
  dates: string;
  technologies: readonly string[];
  summary: string;
  resources: readonly Resource[];
};

export const projects = [
  {
    id: "bundlelab",
    name: "BundleLab",
    category: "AI / Product Development / E-Commerce",
    dates: "October 2026",
    technologies: ["Next.js", "TypeScript", "OpenAI APIs", "Product Strategy"],
    summary: "An AI-powered e-commerce bundling platform that helps merchants generate profitable product bundles, customize pricing, and automate product listings.",
    resources: [
      { label: "PRD", url: "https://drive.google.com/file/d/1lP71tqKoh50fALlGv7oTM8QNBswXjjH2/view?usp=sharing" },
      { label: "GitHub", url: "https://github.com/rowelsabahat/BundleLab" },
    ],
  },
  {
    id: "orthovista",
    name: "OrthoVISTA",
    category: "AI / Medical Imaging / Research",
    dates: "January 2026 – May 2026",
    technologies: ["Python", "LLaVA 1.5", "Computer Vision", "NLP"],
    summary: "An AI-assisted radiology system for fracture analysis, exploring ways to improve model reliability through visual grounding and decoding optimization.",
    resources: [
      { label: "GitHub", url: "https://github.com/himans-iitk/VISTA" },
      { label: "Report", url: "https://drive.google.com/drive/folders/1tsnFweK6PtcoOTTcvz1Puu8cRu4FXTRK?usp=sharing" },
    ],
  },
  {
    id: "reading",
    name: "That's New to Me",
    category: "AI / NLP / Personalized Research",
    dates: "January 2026 – May 2026",
    technologies: ["Python", "SciBERT", "SPECTER2"],
    summary: "An AI-powered personalized research reading system that adapts highlights based on a user's reading history to reduce redundant information and support more efficient reading.",
    resources: [
      { label: "GitHub", url: "https://github.com/Andyrooooo16/CPSC532" },
      { label: "Report", url: "https://drive.google.com/file/d/1QRizkt1ECVdinFmMAaOeX7kaZKBRovgg/view?usp=sharing" },
    ],
  },
  {
    id: "surgicover",
    name: "SurgiCover",
    category: "Product Design / Healthcare / Market Research",
    dates: "May 2025 – August 2025",
    technologies: ["Product Design", "Product Strategy", "Market Analysis"],
    summary: "A surgical positioning solution developed through product design and clinical research, identifying a market opportunity exceeding $76,000 through clinical interviews.",
    resources: [
      { label: "Product Report", url: "https://drive.google.com/file/d/1k1l0bYR4jdVPxvy4XUBeXgZlwIs5eVon/view?usp=sharing" },
    ],
  },
  {
    id: "inspireai",
    name: "InspireAI",
    category: "AI / Product Management / User Research",
    dates: "January 2025 – May 2025",
    technologies: ["AI Product Development", "User Research", "Product Requirements"],
    summary: "Product discovery for an AI-powered Pinterest content recommendation system, identifying user pain points and defining personalization features to improve content discovery, relevance, and user engagement",
    resources: [
      { label: "PRD", url: "https://docs.google.com/document/d/1TMmYtD7enrBQG1lv-vaQYnGQwLjSmZ8BXavZ5tEdrlo/edit?usp=sharing" },
      { label: "Video Presentation", url: "https://youtu.be/4RkUKlXdJeg" },
    ],
  },
  {
    id: "skeletrack",
    name: "SkeleTrack",
    category: "Machine Learning / Computer Vision / Biometrics",
    dates: "January 2025 – April 2025",
    technologies: ["Python", "PyTorch", "MediaPipe"],
    summary: "A biometric identification system that uses skeletal movement patterns to identify individuals from low-resolution video feeds.",
    resources: [
      { label: "GitHub", url: "https://github.com/Joshua-Chiu/CPSC538P-Project" },
      { label: "Report", url: "https://drive.google.com/file/d/1hOYeTpwJuK2U9pdsQJ1-UwiA7RBcB3Ir/view?usp=sharing" },
    ],
  },
  {
    id: "sepsiskill",
    name: "Sepsiskill",
    category: "Predictive Analytics / Healthcare / Machine Learning",
    dates: "October 2024 – December 2024",
    technologies: ["R", "Python", "LightGBM"],
    summary: "A clinical decision-support algorithm exploring early sepsis prediction, with optimized processing time of approximately six minutes for more than 10,000 cases.",
    resources: [
      { label: "GitHub", url: "https://github.com/SfyXboh/BMEG423_CDSS_Assignment_2024/tree/main" },
      { label: "Report", url: "https://docs.google.com/document/d/1edOI_1QzPCWmioBMU6vsAyXd1YrDgm3e7o9LHyPDyts/edit?usp=sharing" },
    ],
  },
] as const satisfies readonly Project[];

export type PortfolioProject = (typeof projects)[number];
