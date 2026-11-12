export const site = {
  name: "Rowel Sabahat",
  title: "Rowel Sabahat | Portfolio",
  description: "Rowel Sabahat’s portfolio of product delivery, technical project management, and independent projects.",
  hero: {
    nameLines: ["Rowel", "Sabahat"],
    focus: [
      "A product manager.",
      "An engineer.",
      "A project manager.",
      "An innovator.",
      "A sunset catcher.",
      "An explorer.",
    ],
    portrait: { src: "/portraits/rowel-hero-charcoal.webp", alt: "Rowel Sabahat smiling and wearing glasses" },
  },
  navigation: [
    { label: "Home", id: "home", available: true },
    { label: "Education", id: "education", available: true },
    { label: "Experience", id: "experience", available: true },
    { label: "Projects", id: "projects", available: true },
    { label: "Places", id: "places", available: true },
    { label: "Contact", id: "contact", available: true },
  ],
} as const;
