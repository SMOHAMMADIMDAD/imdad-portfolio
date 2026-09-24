"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Sparkles,
  Terminal,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "AI & Intelligence",
    icon: Sparkles,
    description:
      "Building intelligent applications with modern AI, computer vision, and language models.",
    skills: [
      "Generative AI",
      "AI Agents",
      "LLM APIs",
      "Computer Vision",
      "OpenCLIP",
      "YOLO",
      "Prompt Engineering",
    ],
  },
  {
    number: "02",
    title: "Software Engineering",
    icon: Code2,
    description:
      "Turning product ideas into reliable frontend, backend, and API-driven applications.",
    skills: [
      "Python",
      "JavaScript",
      "React",
      "Next.js",
      "Django",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    number: "03",
    title: "Data & Backend",
    icon: Database,
    description:
      "Working with databases, structured data, APIs, and the systems behind applications.",
    skills: [
      "SQL",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Data Processing",
      "Database Design",
    ],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    icon: GitBranch,
    description:
      "Using modern development tools to build, test, manage, and iterate on products.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter",
      "Google Colab",
      "Figma",
    ],
  },
];

const coreStack = [
  "Python",
  "React",
  "Next.js",
  "FastAPI",
  "Django",
  "REST APIs",
  "SQL",
  "PostgreSQL",
  "AI Agents",
  "LLM APIs",
];

const principles = [
  {
    number: "01",
    icon: Terminal,
    title: "Build",
    text: "Turn ideas into working software.",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "Solve",
    text: "Break complex problems into systems.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Learn",
    text: "Keep improving how I build.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-transparent py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* =====================================================
            MAIN FRAME
        ===================================================== */}

        <div className="overflow-hidden rounded-[2rem] border border-black/[0.07] bg-[#EEF3F8] shadow-[0_25px_80px_rgba(20,35,60,0.055)]">
          {/* ===================================================
              HEADER
          =================================================== */}

          <div className="border-b border-black/[0.07] px-7 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease }}
                  className="flex items-center gap-4"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#5B6472]">
                    03 / Skills
                  </span>

                  <span className="h-px w-14 bg-black/10" />
                </motion.div>

                <div className="mt-7 overflow-hidden">
                  <motion.h2
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease }}
                    className="text-[clamp(2.7rem,5vw,5.4rem)] font-medium leading-[0.92] tracking-[-0.06em] text-[#111827]"
                  >
                    What I build
                    <br />
                    <span className="text-[#7B8491]">
                      with.
                    </span>
                  </motion.h2>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.12,
                  ease,
                }}
                className="max-w-md"
              >
                <p className="text-[14px] leading-6 text-[#5B6472]">
                  A practical toolkit spanning AI, software engineering,
                  backend systems, data, and modern development workflows.
                </p>
              </motion.div>
            </div>

            {/* =================================================
                CORE STACK
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease,
              }}
              className="mt-9 border-t border-black/[0.07] pt-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                  Core stack
                </span>

                <span className="text-[8px] uppercase tracking-[0.16em] text-[#9AA2AE]">
                  AI · Software · Data
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {coreStack.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{
                      opacity: 0,
                      y: 8,
                      scale: 0.96,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.035,
                      ease,
                    }}
                    whileHover={{
                      y: -2,
                    }}
                    className="rounded-full border border-black/[0.08] bg-white/70 px-3.5 py-2 text-[8px] font-semibold uppercase tracking-[0.1em] text-[#5B6472] transition-all duration-300 hover:border-[#315CFF]/25 hover:bg-[#E6EDFF] hover:text-[#315CFF]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ===================================================
              ANIMATED SKILL SEQUENCE
          =================================================== */}

          <div>
            {capabilities.map((capability, index) => (
              <AnimatedSkillRow
                key={capability.number}
                capability={capability}
                index={index}
              />
            ))}
          </div>

          {/* ===================================================
              HOW I WORK
          =================================================== */}

          <div className="bg-[#E7EEF7] px-6 py-6 sm:px-8 lg:px-10">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#5B6472]">
                How I work
              </span>

              <span className="text-[8px] uppercase tracking-[0.16em] text-[#9AA2AE]">
                Process
              </span>
            </div>

            <div className="grid lg:grid-cols-3">
              {principles.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <motion.div
                    key={principle.number}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                      ease,
                    }}
                    className={`flex items-center gap-3 py-3 lg:px-5 ${
                      index !== 0
                        ? "border-t border-black/[0.07] lg:border-l lg:border-t-0"
                        : ""
                    }`}
                  >
                    <span className="text-[8px] font-semibold tracking-[0.18em] text-[#9AA2AE]">
                      {principle.number}
                    </span>

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-white/65">
                      <Icon
                        size={14}
                        strokeWidth={1.4}
                        className="text-[#315CFF]"
                      />
                    </div>

                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.17em] text-[#4B5563]">
                        {principle.title}
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-[#6B7280]">
                        {principle.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ANIMATED SKILL ROW
============================================================ */

function AnimatedSkillRow({
  capability,
}: {
  capability: (typeof capabilities)[number];
  index: number;
}) {
  const rowRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start 92%", "start 42%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.5,
  });

  const y = useTransform(
    smoothProgress,
    [0, 1],
    [70, 0]
  );

  const opacity = useTransform(
    smoothProgress,
    [0, 0.45, 1],
    [0, 0.5, 1]
  );

  const scale = useTransform(
    smoothProgress,
    [0, 1],
    [0.965, 1]
  );

  const lineScale = useTransform(
    smoothProgress,
    [0, 1],
    [0, 1]
  );

  const Icon = capability.icon;

  return (
    <motion.article
      ref={rowRef}
      style={{
        y,
        opacity,
        scale,
      }}
      className="group relative border-b border-black/[0.07] bg-[#F8FAFC] px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-9"
    >
      {/* Animated left accent */}
      <motion.div
        style={{ scaleY: lineScale }}
        className="absolute bottom-0 left-0 top-0 w-0.5 origin-bottom bg-[#315CFF]"
      />

      <div className="grid gap-7 lg:grid-cols-[0.9fr_1.4fr_40px] lg:items-center lg:gap-12">
        {/* =====================================================
            CATEGORY
        ===================================================== */}

        <div>
          <div className="flex items-center gap-3">
            <motion.span
              initial={{
                opacity: 0.25,
              }}
              whileInView={{
                opacity: 0.7,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[9px] font-semibold tracking-[0.2em] text-[#6B7280]"
            >
              {capability.number}
            </motion.span>

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 28 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.12,
                ease,
              }}
              className="h-px bg-black/10"
            />
          </div>

          <div className="mt-5 flex items-center gap-3">
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.15,
                ease,
              }}
              whileHover={{
                rotate: 7,
                scale: 1.06,
              }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/[0.08] bg-white transition-all duration-300 group-hover:border-[#315CFF]/20 group-hover:bg-[#E6EDFF]"
            >
              <Icon
                size={16}
                strokeWidth={1.5}
                className="text-[#5B6472] transition-colors duration-300 group-hover:text-[#315CFF]"
              />
            </motion.div>

            <h3 className="text-[18px] font-semibold tracking-[-0.025em] text-[#111827]">
              {capability.title}
            </h3>
          </div>
        </div>

        {/* =====================================================
            DESCRIPTION + SKILLS
        ===================================================== */}

        <div>
          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.18,
              ease,
            }}
            className="max-w-2xl text-[13px] leading-5 text-[#6B7280]"
          >
            {capability.description}
          </motion.p>

          <div className="mt-5 flex flex-wrap gap-2">
            {capability.skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{
                  opacity: 0,
                  y: 10,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: 0.22 + skillIndex * 0.035,
                  ease,
                }}
                whileHover={{
                  y: -2,
                  scale: 1.02,
                }}
                className="rounded-full border border-black/[0.08] bg-white/75 px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.1em] text-[#5B6472] transition-all duration-300 hover:border-[#315CFF]/25 hover:bg-[#E6EDFF] hover:text-[#315CFF]"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* =====================================================
            ARROW
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -8,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            ease,
          }}
          whileHover={{
            x: 3,
            y: -3,
          }}
          className="hidden h-9 w-9 items-center justify-center rounded-full border border-black/[0.08] bg-white lg:flex"
        >
          <ArrowUpRight
            size={13}
            strokeWidth={1.5}
            className="text-[#6B7280] transition-colors duration-300 group-hover:text-[#315CFF]"
          />
        </motion.div>
      </div>
    </motion.article>
  );
}