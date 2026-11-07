export const site = {
  name: "Rowel Sabahat",
  title: "Rowel Sabahat | Portfolio",
  description: "The personal portfolio of Rowel Sabahat.",
  hero: {
    nameLines: ["Rowel", "Sabahat"],
    // TODO: Replace the preview copy and portrait with approved content.
    focus: "Product Manager",
    introduction: "Exploring how technology can solve problems for the people who use it.",
    portrait: null as { src: string; alt: string; position?: string } | null,
  },
  navigation: [
    { label: "Home", id: "home", available: true },
    { label: "Education", id: "education", available: false },
    { label: "Experience", id: "experience", available: false },
    { label: "Projects", id: "projects", available: false },
    { label: "Places", id: "places", available: false },
    { label: "Contact", id: "contact", available: false },
  ],
} as const;
