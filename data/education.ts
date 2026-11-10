type Month = { label: string; dateTime: string };

type Credential = {
  title: string;
  institution: string;
  field?: string;
  start: Month;
  end: Month;
  website?: string;
};

export const credentials: readonly Credential[] = [
  {
    title: "Master of Engineering",
    institution: "University of British Columbia",
    field: "Biomedical Engineering",
    start: { label: "Sept 2024", dateTime: "2024-09" },
    end: { label: "Aug 2026", dateTime: "2026-08" },
  },
  {
    title: "Bachelor of Science",
    start: { label: "Sept 2019", dateTime: "2019-09" },
    end: { label: "May 2024", dateTime: "2024-05" },
    institution: "University of British Columbia",
  },
  {
    title: "Certificate in AI Product Management",
    institution: "Co.Lab",
    start: { label: "Jan 2025", dateTime: "2025-01" },
    end: { label: "Apr 2025", dateTime: "2025-04" },
    website: "https://www.joincolab.io/",
  },
];
