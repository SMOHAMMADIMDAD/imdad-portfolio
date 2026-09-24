export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
    ],
  },

  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "HTML",
      "CSS",
    ],
  },

  {
    title: "Backend",
    skills: [
      "FastAPI",
      "Django",
      "REST APIs",
    ],
  },

  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },

  {
    title: "AI / ML",
    skills: [
      "LLMs",
      "AI Agents",
      "Prompt Engineering",
      "Computer Vision",
    ],
  },

  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "Power BI",
      "Tableau",
    ],
  },
];