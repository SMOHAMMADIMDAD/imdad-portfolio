"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import ResumePreview from "@/components/ResumePreview";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-transparent"
      >
        {/* =========================================================
            VERY SUBTLE HERO LIGHT
        ========================================================= */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[10%] top-[18%] h-72 w-72 rounded-full bg-[#315cff]/[0.025] blur-3xl" />

          <div className="absolute right-[8%] top-[12%] h-96 w-96 rounded-full bg-[#315cff]/[0.035] blur-3xl" />

          <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white/30 blur-3xl" />
        </div>

        {/* =========================================================
            SUBTLE GRID
        ========================================================= */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #111 1px, transparent 1px),
              linear-gradient(to bottom, #111 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* =========================================================
            MAIN HERO CONTENT
        ========================================================= */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-12 pt-20 lg:px-10 lg:pt-16">
          <div className="grid w-full grid-cols-1 items-center lg:grid-cols-[1fr_1fr]">

            {/* =====================================================
                LEFT COLUMN
            ===================================================== */}
            <div className="relative z-20">

              {/* =================================================
                  EYEBROW
              ================================================= */}
              <motion.div
                initial={false}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease,
                }}
                className="mb-7 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-[#315cff]" />

                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/45">
                  AI Engineer · Software Developer
                </span>
              </motion.div>

              {/* =================================================
                  MOBILE TEXT CONTENT BACKGROUND
                  ONLY MOBILE
              ================================================= */}
              <div
                className="
                  relative
                  rounded-[1.25rem]
                  bg-[#f4f2ec]/[0.82]
                  px-3
                  py-3
                  backdrop-blur-[2px]

                  sm:bg-transparent
                  sm:px-0
                  sm:py-0
                  sm:backdrop-blur-0
                "
              >

                {/* =================================================
                    MAIN HEADING
                ================================================= */}
                <motion.h1
                  initial={false}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.25,
                    ease,
                  }}
                  className="max-w-3xl text-[clamp(2.43rem,4.68vw,4.68rem)] font-medium leading-[0.94] tracking-[-0.055em]"
                >
                  <span className="block">
                    Building
                  </span>

                  <span className="block">
                    intelligent solutions
                  </span>

                  <span className="block">
                    for a better
                  </span>

                  <span className="block text-black/35">
                    tomorrow.
                  </span>
                </motion.h1>

                {/* =================================================
                    DESCRIPTION
                ================================================= */}
                <motion.p
                  initial={false}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.45,
                    ease,
                  }}
                  className="mt-8 max-w-xl text-[15px] leading-7 text-black/55 md:text-base"
                >
                  I'm S. Mohammad Imdad, an AI & Data Science graduate
                  building AI-powered applications, intelligent systems,
                  and full-stack software that solve real-world problems.
                </motion.p>

                {/* =================================================
                    BUTTONS
                ================================================= */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.55,
                    ease,
                  }}
                  className="mt-2 flex flex-wrap items-center gap-3 lg:mt-8"
                >
                  {/* VIEW MY WORK */}
                  <Link
                    href="#work"
                    className="group inline-flex items-center gap-3 bg-[#111111] px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#315cff]"
                  >
                    <span>
                      View My Work
                    </span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>

                  {/* VIEW RESUME */}
                  <button
                    type="button"
                    onClick={() => setIsResumeOpen(true)}
                    className="relative z-50 touch-manipulation group inline-flex items-center gap-3 border border-black/15 bg-white/30 px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.12em] text-black/70 transition-all duration-300 hover:border-black/30 hover:bg-white/60 hover:text-black"
                    >
                    <span>
                      View Resume
                    </span>

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </button>
                </motion.div>
              </div>

              {/* =================================================
                  MOBILE ONLY
                  SPECIALTIES + PROFILE
              ================================================= */}
              <motion.div
                initial={false}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.7,
                  ease,
                }}
                className="
                  pointer-events-none
                  mt-[-65px]
                  grid
                  grid-cols-[1fr_1fr]
                  items-end
                  gap-2
                  lg:hidden
                "
              >

                {/* =================================================
                    MOBILE LEFT — SPECIALTIES
                ================================================= */}
                <div className="flex min-w-0 flex-col">

                  {/* AI */}
                  <div className="py-1.5">
                    <div className="text-[18px] font-medium leading-none tracking-tight">
                      AI
                    </div>

                    <div className="mt-1 text-[8px] uppercase leading-4 tracking-[0.15em] text-black/40">
                      Intelligent Systems
                    </div>
                  </div>

                  <div className="h-px w-full bg-black/10" />

                  {/* Full Stack */}
                  <div className="py-1.5">
                    <div className="text-[18px] font-medium leading-none tracking-tight">
                      Full-Stack
                    </div>

                    <div className="mt-1 text-[8px] uppercase leading-4 tracking-[0.15em] text-black/40">
                      Application Development
                    </div>
                  </div>

                  <div className="h-px w-full bg-black/10" />

                  {/* Data */}
                  <div className="py-1.5">
                    <div className="text-[18px] font-medium leading-none tracking-tight">
                      Data
                    </div>

                    <div className="mt-1 text-[8px] uppercase leading-4 tracking-[0.15em] text-black/40">
                      Engineering & Analytics
                    </div>
                  </div>
                </div>

                {/* =================================================
                    MOBILE RIGHT — PROFILE
                ================================================= */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.75,
                    ease,
                  }}
                  className="
                    relative
                    flex
                    h-[270px]
                    w-full
                    items-end
                    justify-center
                    overflow-visible
                  "
                >

                  {/* Profile glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-[8%]
                      left-1/2
                      h-36
                      w-36
                      -translate-x-1/2
                      rounded-full
                      bg-[#315cff]/[0.05]
                      blur-3xl
                    "
                  />

                  <div className="relative h-full w-full">
                    <Image
                      src="/images/profile.png"
                      alt="S. Mohammad Imdad"
                      fill
                      priority
                      sizes="(max-width: 1024px) 200px"
                      className="
                        object-contain
                        object-bottom
                        drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)]
                      "
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* =================================================
                  DESKTOP ONLY SPECIALTIES
              ================================================= */}
              <motion.div
                initial={false}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.7,
                  ease,
                }}
                className="mt-6 hidden flex-wrap items-center gap-x-8 gap-y-5 lg:flex"
              >

                {/* AI */}
                <div>
                  <div className="text-xl font-medium tracking-tight">
                    AI
                  </div>

                  <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-black/35">
                    Intelligent Systems
                  </div>
                </div>

                <div className="h-8 w-px bg-black/10" />

                {/* Full Stack */}
                <div>
                  <div className="text-xl font-medium tracking-tight">
                    Full-Stack
                  </div>

                  <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-black/35">
                    Application Development
                  </div>
                </div>

                <div className="h-8 w-px bg-black/10" />

                {/* Data */}
                <div>
                  <div className="text-xl font-medium tracking-tight">
                    Data
                  </div>

                  <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-black/35">
                    Engineering & Analytics
                  </div>
                </div>
              </motion.div>
            </div>

            {/* =====================================================
                DESKTOP RIGHT COLUMN — PORTRAIT
                HIDDEN ONLY ON MOBILE
            ===================================================== */}
            <div className="relative z-10 mt-10 hidden min-h-[620px] items-end justify-center lg:mt-0 lg:flex lg:min-h-[720px]">

              {/* Soft local glow */}
              <motion.div
                initial={false}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.45,
                  ease,
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#315cff]/[0.035] blur-[90px]"
              />

              {/* Small visual label */}
              <motion.div
                initial={false}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.9,
                  ease,
                }}
                className="absolute right-[4%] top-[23%] hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#315cff]/50" />

                  <div>
                    <div className="text-[9px] uppercase tracking-[0.22em] text-black/40">
                      AI SYSTEMS
                    </div>

                    <div className="mt-1 text-[8px] uppercase tracking-[0.18em] text-black/25">
                      Ideas · Technology
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Human + Technology label */}
              <motion.div
                initial={false}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 1,
                  ease,
                }}
                className="absolute left-[3%] top-[38%] hidden lg:block"
              >
                <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-black/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#315cff]" />

                  <span>
                    Human + Technology
                  </span>
                </div>
              </motion.div>

              {/* =================================================
                  DESKTOP PORTRAIT
              ================================================= */}
              <motion.div
                initial={false}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.4,
                  ease,
                }}
                className="relative z-20 flex h-[600px] w-[500px] translate-y-[-50px] items-end justify-center lg:h-[700px] lg:w-[560px] lg:translate-y-[-100px]"
              >
                <Image
                  src="/images/profile.png"
                  alt="S. Mohammad Imdad"
                  fill
                  priority
                  sizes="(max-width: 1024px) 500px, 560px"
                  className="object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.12)]"
                />
              </motion.div>

              {/* =================================================
                  BOTTOM RIGHT MICRO LABEL
              ================================================= */}
              <motion.div
                initial={false}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: 1.1,
                  ease,
                }}
                className="absolute bottom-[15%] right-[3%] hidden lg:block"
              >
                <div className="text-right">
                  <div className="text-[8px] uppercase tracking-[0.22em] text-black/30">
                    Technology
                  </div>

                  <div className="mt-1 text-[8px] uppercase tracking-[0.22em] text-black/20">
                    People
                  </div>

                  <div className="mt-1 text-[8px] uppercase tracking-[0.22em] text-black/20">
                    A Better Tomorrow
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* =========================================================
            SCROLL INDICATOR
        ========================================================= */}
       

        {/* =========================================================
            TOP RIGHT LABEL
        ========================================================= */}
        <motion.div
          initial={false}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease,
          }}
          className="absolute right-6 top-28 z-20 hidden lg:block"
        >
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-black/25">
            <span className="h-1.5 w-1.5 rounded-full bg-[#315cff]" />

            AI · SOFTWARE · DATA
          </div>
        </motion.div>
      </section>

      {/* =========================================================
          RESUME PREVIEW
      ========================================================= */}
      <ResumePreview
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
}