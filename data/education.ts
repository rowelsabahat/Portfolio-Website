type Credential = {
  title: string;
  institution: string;
  field?: string;
  completed: { label: string; dateTime: string };
  website?: string;
};

export const credentials: readonly Credential[] = [
  {
    title: "Master of Engineering",
    institution: "University of British Columbia",
    field: "Biomedical Engineering",
    completed: { label: "August 2026", dateTime: "2026-08" },
  },
  {
    title: "Bachelor of Science",
    completed: { label: "May 2024", dateTime: "2024-05" },
    institution: "University of British Columbia",
  },
  {
    title: "Certificate in AI Product Management",
    institution: "Co.Lab",
    completed: { label: "April 2025", dateTime: "2025-04" },
    website: "https://www.joincolab.io/",
  },
];
