export interface Application {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
}

export const applications: Application[] = [
  {
    id: "1",
    title: "Junior Front-End Developer",
    company: "Anghami",
    location: "Beirut (Hybrid)",
    description:
      "Submitted portfolio featuring React and Next.js projects. Followed up with the engineering lead.",
  },
  {
    id: "2",
    title: "Graduate Software Engineer",
    company: "Murex",
    location: "Beirut",
    description:
      "Completed initial technical screening assessment and shared GitHub repository showcase.",
  },
  {
    id: "3",
    title: "Web Development Intern",
    company: "FOO Solutions",
    location: "Beirut",
    description:
      "Applied via university career board with focus on front-end component architecture and UI design.",
  },
  {
    id: "4",
    title: "Associate React Engineer",
    company: "CME Offshore",
    location: "Remote",
    description:
      "Direct application for entry-level engineering batch. Tailored resume highlighting TypeScript coursework.",
  },
];
