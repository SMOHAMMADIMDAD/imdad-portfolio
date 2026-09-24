"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import type { ComponentType } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const journey = [
  {
    number: "01",
    period: "2022",
    title: "Started with Engineering",
    description:
      "Began my B.Tech journey in Artificial Intelligence & Data Science, building a foundation in programming, databases, mathematics, and computer science.",
    tags: ["Python", "C", "SQL", "Computer Science"],
    icon: GraduationCap,
  },
  {
    number: "02",
    period: "2023 — 2024",
    title: "Exploring AI & Software",
    description:
      "Moved from learning fundamentals to building real applications across web development, data, machine learning, and backend systems.",
    tags: ["Django", "React", "Machine Learning", "Data"],
    icon: Code2,
  },
  {
    number: "03",
    period: "2025",
    title: "Building Real Systems",
    description:
      "Started combining AI with software engineering through projects involving computer vision, recommendation systems, APIs, databases, and intelligent applications.",
    tags: ["Computer Vision", "REST APIs", "PostgreSQL", "AI"],
    icon: Database,
  },
  {
    number: "04",
    period: "2026 — Now",
    title: "Building with AI",
    description:
      "Completed my engineering degree and focused on building intelligent products, exploring generative AI, AI agents, automation, and full-stack systems.",
    tags: ["Gen AI", "AI Agents", "Automation", "Full-Stack"],
    icon: BrainCircuit,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

type JourneyItemData = (typeof journey)[number];

export default function Journey() {
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 35%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.55,
  });

  const progressHeight = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-transparent py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* =====================================================
            MAIN JOURNEY FRAME
        ===================================================== */}

        <div className="overflow-hidden rounded-[2rem] border border-black/[0.07] bg-[#EEF3F8] shadow-[0_25px_80px_rgba(20,35,60,0.055)]">

          {/* ===================================================
              HEADER
          =================================================== */}

          <div className="relative overflow-hidden border-b border-black/[0.07] px-7 py-9 sm:px-10 sm:py-11 lg:px-14 lg:py-14">

            {/* Soft decorative glow */}
            <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-72 w-72 rounded-full bg-[#315CFF]/[0.045] blur-[90px]" />

            <div className="relative grid gap-9 lg:grid-cols-[1fr_0.42fr] lg:items-end lg:gap-16">

              <div>

                {/* Section label */}

                <motion.div
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease }}
                  className="flex items-center gap-4"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#5B6472]">
                    04 / Journey
                  </span>

                  <span className="h-px w-14 bg-black/10" />
                </motion.div>

                {/* Main heading */}

                <div className="mt-8">
                  <motion.h2
                    initial={false}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9, ease }}
                    className="max-w-4xl text-[clamp(2.8rem,5vw,5.7rem)] font-medium leading-[0.9] tracking-[-0.06em] text-[#111827]"
                  >
                    Learning.
                    <br />
                    Building.
                    <br />
                    <span className="text-[#7B8491]">Evolving.</span>
                  </motion.h2>
                </div>
              </div>

              {/* Header description */}

              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease,
                }}
                className="max-w-sm"
              >
                <p className="text-[14px] leading-6 text-[#5B6472]">
                  From engineering fundamentals to building intelligent
                  products — each stage added another layer to how I think,
                  build, and solve problems.
                </p>

                <div className="mt-7 flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.08] bg-white/65">
                    <Sparkles
                      size={15}
                      strokeWidth={1.4}
                      className="text-[#315CFF]"
                    />
                  </div>

                  <div>
                    <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black/30">
                      Progression
                    </p>

                    <p className="mt-1 text-[10px] font-medium text-[#4B5563]">
                      Learn → Build → Evolve
                    </p>
                  </div>

                </div>
              </motion.div>

            </div>
          </div>

          {/* ===================================================
              TIMELINE
          =================================================== */}

          <div
            ref={timelineRef}
            className="relative px-5 py-7 sm:px-8 sm:py-9 lg:px-14 lg:py-12"
          >

            {/* Static timeline rail */}

            <div className="pointer-events-none absolute bottom-12 left-[31px] top-12 w-px bg-black/[0.08] sm:left-[43px] lg:left-[79px]" />

            {/* Animated timeline progress */}

            <motion.div
              style={{ height: progressHeight }}
              className="pointer-events-none absolute left-[31px] top-12 w-px origin-top bg-[#315CFF] sm:left-[43px] lg:left-[79px]"
            />

            <div className="relative">
              {journey.map((item, index) => (
                <JourneyCard
                  key={item.number}
                  item={item}
                  index={index}
                  total={journey.length}
                />
              ))}
            </div>
          </div>

          {/* ===================================================
              BOTTOM STATEMENT
          =================================================== */}

          <div className="border-t border-black/[0.07] bg-[#E7EEF7] px-7 py-7 sm:px-10 lg:grid lg:grid-cols-[0.35fr_1fr] lg:px-14 lg:py-8">

            <motion.div
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35 lg:mb-0"
            >
              Still learning
            </motion.div>

            <motion.p
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease,
              }}
              className="max-w-3xl text-[16px] leading-7 tracking-[-0.01em] text-[#4B5563] sm:text-[18px]"
            >
              Every project is another opportunity to understand a problem
              better, build something useful, and become a better engineer.
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   JOURNEY CARD
============================================================ */

function JourneyCard({
  item,
  index,
  total,
}: {
  item: JourneyItemData;
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 88%", "start 38%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.45,
  });

  /*
   * Keep the scroll-linked movement, but don't let the card
   * become invisible before the user reaches it.
   */
  const y = useTransform(
    smoothProgress,
    [0, 1],
    [25, 0]
  );

  

  const scale = useTransform(
    smoothProgress,
    [0, 1],
    [0.985, 1]
  );

  const isCurrent = index === total - 1;

  const Icon = item.icon as ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
  }>;

  return (
    <motion.article
      ref={cardRef}
      style={{
        y,
        scale,
      }}
      className={`group relative grid gap-6 border-b border-black/[0.06] py-8 pl-12 sm:gap-8 sm:py-9 sm:pl-16 lg:grid-cols-[150px_1fr] lg:gap-12 lg:pl-0 lg:py-11 ${
        index === total - 1 ? "border-b-0" : ""
      }`}
    >

      {/* =====================================================
          TIMELINE NODE
      ===================================================== */}

      <motion.div
        initial={false}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 0.15,
          ease,
        }}
        className={`absolute left-[17px] top-[36px] z-20 flex h-7 w-7 items-center justify-center rounded-full border sm:left-[29px] lg:left-[65px] ${
          isCurrent
            ? "border-[#315CFF]/30 bg-[#E6EDFF]"
            : "border-black/[0.1] bg-white/80"
        }`}
      >
        <span
          className={`h-2 w-2 rounded-full ${
            isCurrent
              ? "bg-[#315CFF] shadow-[0_0_14px_rgba(49,92,255,0.45)]"
              : "bg-black/20"
          }`}
        />
      </motion.div>

      {/* =====================================================
          YEAR
      ===================================================== */}

      <div className="relative">
        <div className="lg:sticky lg:top-28">

          <div className="flex items-baseline gap-3 lg:block">

            <motion.span
              initial={false}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.08,
                ease,
              }}
              className={`text-[clamp(1.9rem,3vw,3rem)] font-medium leading-none tracking-[-0.055em] ${
                isCurrent
                  ? "text-[#315CFF]"
                  : "text-[#111827]/45"
              }`}
            >
              {item.period.split(" ")[0]}
            </motion.span>

            <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-black/25 lg:mt-2 lg:block">
              Milestone {item.number}
            </span>

          </div>

          {isCurrent && (
            <span className="mt-4 inline-flex rounded-full border border-[#315CFF]/15 bg-[#E6EDFF] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#315CFF]">
              Current
            </span>
          )}

        </div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

          <div className="flex items-center gap-3">

            <motion.div
              initial={false}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.12,
                ease,
              }}
              whileHover={{
                rotate: 6,
                scale: 1.05,
              }}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                isCurrent
                  ? "border-[#315CFF]/20 bg-[#E6EDFF]"
                  : "border-black/[0.08] bg-white/65"
              }`}
            >
              <Icon
                size={16}
                strokeWidth={1.5}
                className={
                  isCurrent
                    ? "text-[#315CFF]"
                    : "text-[#5B6472]"
                }
              />
            </motion.div>

            <div>
              <h3 className="text-[21px] font-semibold tracking-[-0.03em] text-[#111827] sm:text-[23px]">
                {item.title}
              </h3>

              <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.16em] text-black/25">
                {isCurrent ? "Current focus" : "Milestone"}
              </p>
            </div>

          </div>

          <span className="text-[8px] font-medium uppercase tracking-[0.15em] text-black/25">
            {index + 1} / {total}
          </span>

        </div>

        {/* Description */}

        <motion.p
          initial={false}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.55,
            delay: 0.16,
            ease,
          }}
          className="mt-5 max-w-3xl text-[14px] leading-6 text-[#5B6472] sm:text-[15px] sm:leading-7"
        >
          {item.description}
        </motion.p>

        {/* Tags */}

        <div className="mt-5 flex flex-wrap gap-2">
          {item.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={false}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.35,
                delay: 0.2 + tagIndex * 0.03,
                ease,
              }}
              whileHover={{
                y: -2,
              }}
              className="rounded-full border border-black/[0.08] bg-white/65 px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.1em] text-[#5B6472] transition-all duration-300 hover:border-[#315CFF]/25 hover:bg-[#E6EDFF] hover:text-[#315CFF]"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Hover arrow */}

        <motion.div
          whileHover={{
            x: 3,
            y: -3,
          }}
          transition={{ duration: 0.25 }}
          className="absolute right-0 top-1 hidden h-9 w-9 items-center justify-center rounded-full border border-black/[0.08] bg-white/70 lg:flex"
        >
          <ArrowUpRight
            size={13}
            strokeWidth={1.5}
            className="text-black/25 transition-colors duration-300 group-hover:text-[#315CFF]"
          />
        </motion.div>

        {/* Hover accent */}

        <div
          className={`absolute bottom-[-1px] left-0 h-px bg-[#315CFF] transition-all duration-500 ${
            isCurrent ? "w-16" : "w-0 group-hover:w-16"
          }`}
        />

      </div>
    </motion.article>
  );
}