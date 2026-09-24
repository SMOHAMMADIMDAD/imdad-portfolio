"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Code2,
  BrainCircuit,
  Database,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Artificial Intelligence",
    description:
      "Building AI-powered applications, intelligent workflows, and systems around modern AI capabilities.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "Full-Stack Development",
    description:
      "Turning ideas into complete products across frontend, backend, APIs, databases, and software architecture.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Data & Computer Vision",
    description:
      "Working with data, machine learning, and computer vision to transform information into useful experiences.",
    icon: Database,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-transparent
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =========================================================
          OUTER CONTENT
      ========================================================= */}

      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* =======================================================
            MAIN ABOUT FRAME
        ======================================================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-black/[0.07]
            bg-[#EEF3F8]
            shadow-[0_25px_80px_rgba(20,35,60,0.055)]
          "
        >

          {/* =====================================================
              SUBTLE ATMOSPHERE
          ===================================================== */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            {/* Top-right blue glow */}

            <div
              className="
                absolute
                right-[-100px]
                top-[-120px]
                h-[360px]
                w-[360px]
                rounded-full
                bg-[#315CFF]/[0.045]
                blur-[90px]
              "
            />

            {/* Bottom-left blue glow */}

            <div
              className="
                absolute
                bottom-[-160px]
                left-[-120px]
                h-[380px]
                w-[380px]
                rounded-full
                bg-[#315CFF]/[0.025]
                blur-[100px]
              "
            />

            {/* Fine horizontal line */}

            <div
              className="
                absolute
                inset-x-0
                top-0
                h-px
                bg-white/70
              "
            />

          </div>


          {/* =====================================================
              HEADER / INTRODUCTION
          ===================================================== */}

          <div
            className="
              relative
              border-b
              border-black/[0.07]
              px-7
              py-9
              sm:px-10
              sm:py-11
              lg:px-14
              lg:py-14
            "
          >

            <div
              className="
                grid
                gap-10
                lg:grid-cols-[1.15fr_0.85fr]
                lg:items-end
                lg:gap-16
              "
            >

              {/* =================================================
                  LEFT — MAIN STATEMENT
              ================================================= */}

              <div>

                {/* Section label */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.7,
                    ease,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-[#5B6472]
                    "
                  >
                    01 / About
                  </span>

                  <span
                    className="
                      h-px
                      w-14
                      bg-black/10
                    "
                  />
                </motion.div>


                {/* Main heading */}

                <div className="mt-8 overflow-hidden">

                  <motion.h2
                    initial={{
                      opacity: 0,
                      y: 55,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.9,
                      ease,
                    }}
                    className="
                      max-w-4xl
                      text-[clamp(2.8rem,5.2vw,5.8rem)]
                      font-medium
                      leading-[0.9]
                      tracking-[-0.06em]
                      text-[#111827]
                    "
                  >
                    I turn ideas into.
                    <br />
                    <span className="text-[#7B8491]">
                       Intelligent systems.
                    </span>
                  </motion.h2>

                </div>

              </div>


              {/* =================================================
                  RIGHT — INTRO
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.15,
                  ease,
                }}
                className="relative"
              >

                {/* Small icon */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.35,
                    ease,
                  }}
                  className="
                    mb-7
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/10
                    bg-white/50
                  "
                >
                  <Sparkles
                    size={16}
                    strokeWidth={1.4}
                    className="text-[#315CFF]"
                  />
                </motion.div>


                <p
                  className="
                    max-w-xl
                    text-[16px]
                    font-medium
                    leading-7
                    tracking-[-0.02em]
                    text-[#303844]
                    sm:text-[18px]
                  "
                >
                  I’m S. Mohammad Imdad, an AI & Data Science graduate building intelligent systems at the intersection of AI, software, and data — turning complex problems into practical products.
                    </p>


                <p
                  className="
                    mt-5
                    max-w-lg
                    text-[12px]
                    leading-6
                    text-[#68717E]
                    sm:text-[13px]
                  "
                >
                  My work spans AI applications, full-stack development,
                  APIs, databases, and computer-vision-based systems. I enjoy
                  taking an idea from concept to a working product.
                </p>


                {/* Explore */}

                <motion.a
                  href="#work"
                  whileHover={{
                    x: 5,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    group
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#111827]
                  "
                >
                  <span>Explore my work</span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="
                      text-[#315CFF]
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </motion.a>

              </motion.div>

            </div>


            {/* =================================================
                SMALL METADATA ROW
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease,
              }}
              className="
                mt-12
                flex
                flex-wrap
                gap-x-10
                gap-y-4
                border-t
                border-black/[0.07]
                pt-5
              "
            >

              <div>
                <div
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-[#89919D]
                  "
                >
                  Based in
                </div>

                <div
                  className="
                    mt-1.5
                    text-[11px]
                    font-medium
                    text-[#4B5563]
                  "
                >
                  India
                </div>
              </div>


              <div>
                <div
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-[#89919D]
                  "
                >
                  Focus
                </div>

                <div
                  className="
                    mt-1.5
                    text-[11px]
                    font-medium
                    text-[#4B5563]
                  "
                >
                  AI · Software · Data
                </div>
              </div>

            </motion.div>

          </div>


          {/* =====================================================
              APPROACH STATEMENT
          ===================================================== */}

          <div
            className="
              relative
              border-b
              border-black/[0.07]
              px-7
              py-10
              sm:px-10
              sm:py-12
              lg:px-14
              lg:py-14
            "
          >

            {/* Decorative number */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-[-20px]
                right-6
                text-[8rem]
                font-medium
                leading-none
                tracking-[-0.08em]
                text-[#315CFF]/[0.045]
                sm:right-10
                lg:text-[10rem]
              "
            >
              01
            </div>


            <div className="relative z-10 grid gap-8 lg:grid-cols-[0.22fr_1fr]">

              {/* Label */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-[#7A8491]
                "
              >
                <span
                  className="
                    mt-1
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#315CFF]
                  "
                />

                <span>
                  My approach
                </span>
              </div>


              {/* Statement */}

              <div>

                <motion.h3
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.85,
                    ease,
                  }}
                  className="
                    max-w-5xl
                    text-[clamp(2.2rem,4.2vw,4.7rem)]
                    font-medium
                    leading-[0.93]
                    tracking-[-0.055em]
                    text-[#111827]
                  "
                >
                  I don&apos;t just build applications.
                  <br />

                  <span className="text-[#8A939F]">
                    I build systems that solve problems.
                  </span>
                </motion.h3>


                <motion.div
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.25,
                    ease,
                  }}
                  className="
                    mt-8
                    max-w-xl
                    border-l
                    border-[#315CFF]/40
                    pl-5
                  "
                >
                  <p
                    className="
                      text-[11px]
                      leading-6
                      text-[#68717E]
                      sm:text-[12px]
                    "
                  >
                    I like working at the intersection of intelligence,
                    software, and real-world problems — turning ideas into
                    systems that people can actually use.
                  </p>
                </motion.div>

              </div>

            </div>

          </div>


          {/* =====================================================
              CAPABILITIES HEADER
          ===================================================== */}

          <div
            className="
              border-b
              border-black/[0.07]
              px-7
              py-6
              sm:px-10
              lg:px-14
            "
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                ease,
              }}
              className="
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-end
                sm:justify-between
              "
            >

              <div>

                <span
                  className="
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#5B6472]
                  "
                >
                  Capabilities
                </span>

                <p
                  className="
                    mt-2
                    text-[10px]
                    text-[#89919D]
                  "
                >
                  The areas I work across
                </p>

              </div>


              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#315CFF]
                  "
                />

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.18em]
                    text-[#89919D]
                  "
                >
                  AI · Software · Data
                </span>
              </div>

            </motion.div>

          </div>


          {/* =====================================================
              CAPABILITIES
          ===================================================== */}

          <div className="relative">

            {capabilities.map((capability, index) => {
              const Icon = capability.icon;

              return (
                <motion.article
                  key={capability.number}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease,
                  }}
                  className="
                    group
                    relative
                    grid
                    border-b
                    border-black/[0.07]
                    px-7
                    py-7
                    sm:px-10
                    sm:py-8
                    lg:grid-cols-[70px_1fr_1fr_60px]
                    lg:items-center
                    lg:gap-8
                    lg:px-14
                  "
                >

                  {/* Number */}

                  <div
                    className="
                      mb-5
                      text-[9px]
                      font-medium
                      tracking-[0.18em]
                      text-[#8A939F]
                      lg:mb-0
                    "
                  >
                    {capability.number}
                  </div>


                  {/* Title */}

                  <div
                    className="
                      flex
                      items-center
                      gap-4
                    "
                  >

                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 4,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-black/10
                        bg-white/55
                        transition-all
                        duration-300
                        group-hover:border-[#315CFF]/25
                        group-hover:bg-[#315CFF]/[0.05]
                      "
                    >
                      <Icon
                        size={15}
                        strokeWidth={1.5}
                        className="
                          text-[#697482]
                          transition-colors
                          duration-300
                          group-hover:text-[#315CFF]
                        "
                      />
                    </motion.div>


                    <h3
                      className="
                        text-[17px]
                        font-medium
                        tracking-[-0.025em]
                        text-[#111827]
                        transition-colors
                        duration-300
                        group-hover:text-[#315CFF]
                        sm:text-[19px]
                      "
                    >
                      {capability.title}
                    </h3>

                  </div>


                  {/* Description */}

                  <p
                    className="
                      mt-4
                      text-[11px]
                      leading-6
                      text-[#7A8491]
                      lg:mt-0
                      lg:text-[12px]
                    "
                  >
                    {capability.description}
                  </p>


                  {/* Arrow */}

                  <div
                    className="
                      absolute
                      right-7
                      top-7
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black/10
                      bg-white/35
                      transition-all
                      duration-300
                      group-hover:border-[#315CFF]/25
                      group-hover:bg-white/70
                      sm:right-10
                      lg:relative
                      lg:right-auto
                      lg:top-auto
                    "
                  >
                    <motion.div
                      whileHover={{
                        x: 3,
                        y: -3,
                      }}
                    >
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.4}
                        className="
                          text-[#8A939F]
                          transition-colors
                          duration-300
                          group-hover:text-[#315CFF]
                        "
                      />
                    </motion.div>
                  </div>

                </motion.article>
              );
            })}

          </div>


          {/* =====================================================
              BOTTOM STATEMENT
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease,
            }}
            className="
              grid
              gap-6
              px-7
              py-8
              sm:px-10
              sm:py-10
              md:grid-cols-[0.35fr_1fr]
              lg:px-14
              lg:py-12
            "
          >

            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#89919D]
              "
            >
              Building with purpose
            </span>

            <p
              className="
                max-w-2xl
                text-[12px]
                leading-6
                text-[#68717E]
                sm:text-[13px]
              "
            >
              I enjoy taking ideas from requirements and early concepts
              through implementation, testing, integration, and into
              something people can actually use.
            </p>

          </motion.div>

        </div>
      </div>
    </section>
  );
}