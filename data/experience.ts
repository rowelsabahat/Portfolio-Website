import rbc from "../assets/experience/rbc.svg";
import qnx from "../assets/experience/qnx.svg";
import ubc from "../assets/experience/ubc.svg";
import medicine from "../assets/experience/ubc-medicine.svg";
import ams from "../assets/experience/ams-ubc.svg";
import herbaland from "../assets/experience/herbaland.svg";
import type { StaticImageData } from "next/image";

type Experience = {
  employer: string;
  role: string;
  dates: string;
  location: string;
  highlights: readonly [string, string, string?];
  logo: StaticImageData;
};

export const experiences: readonly Experience[] = [
  {
    employer: "Royal Bank of Canada (RBC)",
    role: "Product Delivery Manager",
    dates: "May 2026 – August 2026",
    location: "Toronto, Ontario",
    highlights: [
      "Owned the development of RBC digital products, including Virtual Visa Debit and Konek, translating business needs into product requirements and aligning IT and business units across products to support $50M in transaction volume",
      "Defined requirements with business stakeholders and partnered with designers to prototype in-app debit card renewal journeys in Figma, launching a more streamlined renewal process and improving user experience (UX) for 3.8M+ users",
      "Partnered with legal and business teams to define client ownership requirements for virtual debit cards, translating operational and compliance needs into clear product documentation",
    ],
    logo: rbc,
  },
  {
    employer: "BlackBerry QNX",
    role: "Technical Project & Release Manager",
    dates: "September 2025 – December 2025",
    location: "Ottawa, Ontario",
    highlights: [
      "Partnered with engineering and product stakeholders to deliver SDP 8.0 and QNX Cabin features, translating customer and program requirements into execution plans to 250M+ vehicles across multiple automotive OEMs worldwide",
      "Integrated an automated workflow that compiled review status from Jama, Jira, and ReviewBoard into a centralized dashboard using Power Automate, improving cross-team visibility and reducing project gate planning timelines by 30%",
      "Developed a Power Query and SQL–driven operational analytics dashboard to improve visibility into resource allocation, identify planning bottlenecks, and support data-informed project execution decisions, helping keep projects on budget",
    ],
    logo: qnx,
  },
  {
    employer: "University of British Columbia",
    role: "Graduate Teaching Assistant",
    dates: "January 2025 – April 2025",
    location: "Vancouver, British Columbia",
    highlights: [
      "Led class discussions with 60 students, making sure students are actively engaged in course content; gave three lectures on specific topics related to genetic engineering, evaluating comprehension of students through online assessments",
      "Maintained comprehensive grade books on Canvas, reporting class averages and normalizations back to the course lead",
    ],
    logo: ubc,
  },
  {
    employer: "UBC Medicine — Drone Transport Initiative",
    role: "Technical Project Manager",
    dates: "September 2023 – May 2024",
    location: "Vancouver, British Columbia",
    highlights: [
      "Developed a program schedule to align technical, strategy, and finance teams, defining project KPIs and scope; developed a risk register and mitigation strategies for drone operational security, ensuring system downtime was reduced by 65%",
      "Directed Agile workflows for engineering teams in Jira, leading stand ups and sprint planning for project efficiency; implemented security risk assessments in accordance to compliance policies for data transmission in drone operations",
      "Designed detailed process documentation and structured training materials, which facilitated smoother onboarding of new team members and ensured consistency in operational procedures",
    ],
    logo: medicine,
  },
  {
    employer: "AMS UBC",
    role: "Software Engineer",
    dates: "June 2023 – May 2024",
    location: "Vancouver, British Columbia",
    highlights: [
      "Developed SUS BlueCard in React, a data-driven student discount service, serving over 1300 users; enhanced UX through iterative development by translating user needs into digital features, leading to a 30% increase in user engagement",
      "Engineered an e-commerce store front, integrated with Stripe API, enabling seamless online transactions for 900+ users; automated sales data to track real-time inventory, improving marketing decision making and sales efficiency by 20%",
      "Improved system reliability and addressed security vulnerabilities through SQL optimizations and automated database maintenance tasks; debugged platform issues and ensured site wide system health",
    ],
    logo: ams,
  },
  {
    employer: "Herbaland Naturals Inc.",
    role: "R&D Program Manager",
    dates: "April 2022 – December 2022",
    location: "Richmond, British Columbia",
    highlights: [
      "Led end-to-end ideation, development, and GTM launches of 5 product lines, including Oh My! Gummies and HBL Korea, across Asian and North American markets, contributing $450K in revenue and driving 10% market growth",
      "Managed manufacturing scale-up using Six Sigma methodologies, designing and integrating sensor-based dispensing automation into production lines to reduce material waste by 34%",
      "Coordinated project schedules, resource requirements, and vendor deliverables across R&D, manufacturing, and operations teams, tracking key milestones and resolving dependencies to support on-time project execution",
    ],
    logo: herbaland,
  },
];
