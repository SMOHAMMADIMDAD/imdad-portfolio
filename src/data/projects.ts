export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  technologies: string[];
};
export const projects: Project[] = [
  {
    id: "ai-stylist",
    number: "01",
    title: "AI Stylist",
    category: "Fashion Recommendation System",
    shortDescription:
      "An end-to-end fashion recommendation system combining backend APIs, frontend development, databases, and computer vision.",
    description:
      "A full-stack fashion recommendation system developed using Django, REST APIs, React, and PostgreSQL. The system includes computer-vision-based attribute recognition and focuses on maintainable software architecture, reliable outputs, testing, and debugging.",
    technologies: [
      "Python",
      "Django",
      "React",
      "PostgreSQL",
      "REST API",
      "Computer Vision",
    ],
  },

  {
    id: "ai-assistant",
    number: "02",
    title: "AI Assistant",
    category: "Multi-Step Agentic Query & Automation Tool",
    shortDescription:
      "A multi-step AI system designed to process natural-language and image-based inputs and produce structured outputs.",
    description:
      "An AI-powered application built with FastAPI and Google Gemini API, using a multi-step workflow for research, processing, summarization, and structured output.",
    technologies: [
      "Python",
      "FastAPI",
      "Google Gemini API",
      "REST APIs",
    ],
  },
];