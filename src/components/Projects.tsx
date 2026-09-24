"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  Workflow,
} from "lucide-react";
import { projects } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Projects() {
  const orderedProjects = [
    projects.find((project) => project.id === "ai-stylist"),
    projects.find((project) => project.id === "ai-assistant"),
  ].filter(Boolean);

  return (
    <section
      id="work"
      className="
        relative
        overflow-hidden
        bg-transparent
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* =========================================================
            MAIN PROJECT PANEL
        ========================================================= */}

        <motion.div
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
            margin: "-80px",
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-black/[0.07]
            bg-[#EEF3F8]
            text-[#111827]
            shadow-[0_30px_90px_rgba(31,41,55,0.08)]
          "
        >

          {/* =======================================================
              AMBIENT BACKGROUND
          ======================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-80
              w-80
              rounded-full
              bg-[#315CFF]/[0.045]
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-40
              -left-32
              h-96
              w-96
              rounded-full
              bg-[#8EA8D8]/[0.08]
              blur-3xl
            "
          />

          {/* =======================================================
              HEADER
          ======================================================= */}

          <div
            className="
              relative
              grid
              gap-10
              border-b
              border-black/[0.07]
              px-7
              py-9
              sm:px-10
              sm:py-11
              lg:grid-cols-[1.15fr_0.45fr]
              lg:gap-16
              lg:px-14
              lg:py-14
            "
          >

            {/* LEFT HEADER */}

            <div>

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
                  duration: 0.65,
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
                  02 / Selected Work
                </span>

                <motion.span
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: 56,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15,
                    ease,
                  }}
                  className="h-px bg-black/15"
                />
              </motion.div>


              <div className="mt-8 overflow-hidden">

                <motion.h2
                  initial={{
                    y: "100%",
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.9,
                    ease,
                  }}
                  className="
                    max-w-4xl
                    text-[clamp(2.7rem,5vw,5.6rem)]
                    font-medium
                    leading-[0.93]
                    tracking-[-0.055em]
                    text-[#111827]
                  "
                >
                  Selected work.
                  <br />

                  <span className="text-[#8A94A3]">
                    Built to solve.
                  </span>
                </motion.h2>

              </div>

            </div>


            {/* RIGHT HEADER */}

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
                delay: 0.15,
                ease,
              }}
              className="
                flex
                flex-col
                justify-end
              "
            >

              <p
                className="
                  max-w-sm
                  text-[14px]
                  leading-6
                  text-[#667085]
                "
              >
                A collection of AI and software systems built around
                practical problems, thoughtful interfaces, and useful
                technology.
              </p>


              <div className="mt-6 flex items-center gap-3">

                <motion.span
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/[0.08]
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
                </motion.span>

                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.18em]
                    text-[#7A8493]
                  "
                >
                  AI · Software · Data
                </span>

              </div>

            </motion.div>

          </div>


          {/* =======================================================
              PROJECTS
          ======================================================= */}

          <div className="relative">

            {orderedProjects.map((project, index) => {
              if (!project) return null;

              const isStylist = project.id === "ai-stylist";

              return (
                <motion.article
                  key={project.id}
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
                    margin: "-100px",
                  }}
                  transition={{
                    duration: 0.85,
                    delay: index * 0.1,
                    ease,
                  }}
                  className={`
                    relative
                    px-7
                    py-9
                    sm:px-10
                    sm:py-11
                    lg:px-14
                    lg:py-14
                    ${
                      index !== orderedProjects.length - 1
                        ? "border-b border-black/[0.07]"
                        : ""
                    }
                  `}
                >

                  <div
                    className="
                      grid
                      gap-10
                      lg:grid-cols-[0.7fr_1.3fr]
                      lg:items-center
                      lg:gap-12
                    "
                  >

                    {/* =================================================
                        PROJECT INFORMATION
                    ================================================= */}

                    <div>

                      {/* NUMBER + CATEGORY */}

                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.55,
                          delay: 0.1,
                          ease,
                        }}
                        className="
                          flex
                          items-center
                          justify-between
                          gap-4
                        "
                      >

                        <span
                          className="
                            text-[9px]
                            font-semibold
                            tracking-[0.2em]
                            text-[#9AA3AF]
                          "
                        >
                          {project.number}
                        </span>

                        <span
                          className="
                            rounded-full
                            border
                            border-black/[0.08]
                            bg-white/50
                            px-3
                            py-1.5
                            text-[8px]
                            font-medium
                            uppercase
                            tracking-[0.14em]
                            text-[#6B7280]
                          "
                        >
                          {isStylist
                            ? "Fashion + AI"
                            : "AI Agents + Automation"}
                        </span>

                      </motion.div>


                      {/* PROJECT CONTENT */}

                      <motion.div
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
                        }}
                        transition={{
                          duration: 0.75,
                          delay: 0.18,
                          ease,
                        }}
                        className="mt-10"
                      >

                        {/* ICON */}

                        <motion.div
                          whileHover={{
                            rotate: 8,
                            scale: 1.08,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="
                            mb-5
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-black/[0.07]
                            bg-white/65
                            shadow-sm
                          "
                        >
                          {isStylist ? (
                            <Sparkles
                              size={17}
                              strokeWidth={1.5}
                              className="text-[#315CFF]"
                            />
                          ) : (
                            <Workflow
                              size={17}
                              strokeWidth={1.5}
                              className="text-[#315CFF]"
                            />
                          )}
                        </motion.div>


                        {/* TITLE */}

                        <motion.h3
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
                            delay: 0.22,
                            ease,
                          }}
                          className="
                            max-w-xl
                            text-[clamp(2.3rem,4vw,4.4rem)]
                            font-medium
                            leading-[0.94]
                            tracking-[-0.055em]
                            text-[#111827]
                          "
                        >
                          {project.title}
                        </motion.h3>


                        {/* CATEGORY */}

                        <motion.p
                          initial={{
                            opacity: 0,
                          }}
                          whileInView={{
                            opacity: 1,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.6,
                            delay: 0.32,
                          }}
                          className="
                            mt-4
                            text-[15px]
                            font-medium
                            text-[#475467]
                          "
                        >
                          {project.category}
                        </motion.p>


                        {/* DESCRIPTION */}

                        <motion.p
                          initial={{
                            opacity: 0,
                          }}
                          whileInView={{
                            opacity: 1,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.6,
                            delay: 0.38,
                          }}
                          className="
                            mt-4
                            max-w-xl
                            text-[14px]
                            leading-6
                            text-[#667085]
                          "
                        >
                          {project.description}
                        </motion.p>


                        {/* TECHNOLOGIES */}

                        <div
                          className="
                            mt-6
                            flex
                            max-w-xl
                            flex-wrap
                            gap-2
                          "
                        >
                          {project.technologies.map(
                            (technology, techIndex) => (
                              <motion.span
                                key={technology}
                                initial={{
                                  opacity: 0,
                                  y: 8,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                viewport={{
                                  once: true,
                                }}
                                transition={{
                                  duration: 0.4,
                                  delay:
                                    0.42 +
                                    techIndex * 0.045,
                                  ease,
                                }}
                                whileHover={{
                                  y: -2,
                                }}
                                className="
                                  rounded-full
                                  border
                                  border-black/[0.07]
                                  bg-white/55
                                  px-3
                                  py-1.5
                                  text-[8px]
                                  font-medium
                                  uppercase
                                  tracking-[0.11em]
                                  text-[#667085]
                                  transition-colors
                                  duration-300
                                  hover:border-[#315CFF]/25
                                  hover:text-[#315CFF]
                                "
                              >
                                {technology}
                              </motion.span>
                            )
                          )}
                        </div>


                        {/* CTA */}

                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          whileInView={{
                            opacity: 1,
                            y: 0,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 0.55,
                            delay: 0.55,
                            ease,
                          }}
                        >
                          <Link
                            href="#contact"
                            className="
                              group
                              mt-8
                              inline-flex
                              items-center
                              gap-3
                            "
                          >
                            <span
                              className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-full
                                bg-[#315CFF]
                                text-white
                                shadow-[0_8px_20px_rgba(49,92,255,0.18)]
                                transition-all
                                duration-300
                                group-hover:-translate-y-1
                                group-hover:translate-x-1
                                group-hover:bg-[#111827]
                              "
                            >
                              <ArrowUpRight
                                size={15}
                                strokeWidth={1.7}
                              />
                            </span>

                            <span
                              className="
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.16em]
                                text-[#5B6472]
                                transition-colors
                                duration-300
                                group-hover:text-[#111827]
                              "
                            >
                              Discuss this project
                            </span>
                          </Link>
                        </motion.div>

                      </motion.div>

                    </div>


                    {/* =================================================
                        NEW REALISTIC PROJECT VISUAL
                    ================================================= */}

                    <div className="min-w-0">
                      {isStylist ? (
                        <ProjectImage
                          src="/images/ai-stylist-showcase.png"
                          alt="AI Stylist project interface showing AI-powered fashion recommendations"
                        />
                      ) : (
                        <ProjectImage
                          src="/images/ai-assistant-showcase.png"
                          alt="AI Assistant project interface showing an agentic workflow and AI automation"
                        />
                      )}
                    </div>

                  </div>

                </motion.article>
              );
            })}

          </div>


          {/* =======================================================
              FOOTER
          ======================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              flex
              flex-col
              gap-3
              border-t
              border-black/[0.07]
              bg-white/[0.22]
              px-7
              py-5
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-[#98A1AE]
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-10
              lg:px-14
            "
          >
            <span>
              S. Mohammad Imdad
            </span>

            <span>
              AI · Software · Data
            </span>

            <span>
              02 / 02 Projects
            </span>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}


/* ================================================================
   REALISTIC PROJECT IMAGE
================================================================ */

function ProjectImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.94,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.95,
        ease,
      }}
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      className="
        group
        relative
        mx-auto
        w-full
        max-w-[760px]
      "
    >

      {/* Outer glow */}

      <div
        className="
          pointer-events-none
          absolute
          -inset-5
          rounded-[2rem]
          bg-[#315CFF]/[0.035]
          opacity-0
          blur-2xl
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      />


      {/* Image frame */}

      <div
        className="
          relative
          aspect-[1.27]
          overflow-hidden
          rounded-[1.7rem]
          border
          border-black/[0.08]
          bg-[#111827]
          shadow-[0_30px_80px_rgba(13,22,40,0.16)]
        "
      >

        <Image
          src={src}
          alt={alt}
          fill
          sizes="
            (max-width: 1024px) 100vw,
            58vw
          "
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.015]
          "
          priority={false}
        />


        {/* Subtle glass overlay */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/[0.08]
            via-transparent
            to-white/[0.04]
          "
        />


        {/* Soft blue edge glow */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[1.7rem]
            ring-1
            ring-inset
            ring-white/[0.12]
          "
        />


        {/* Floating status indicator */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.45,
            ease,
          }}
          className="
            absolute
            right-4
            top-4
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/20
            bg-black/20
            px-3
            py-2
            backdrop-blur-md
          "
        >
          <motion.span
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#6F8CFF]
              shadow-[0_0_10px_rgba(111,140,255,0.9)]
            "
          />

          <span
            className="
              text-[7px]
              font-medium
              uppercase
              tracking-[0.14em]
              text-white/60
            "
          >
            AI system
          </span>
        </motion.div>

      </div>

    </motion.div>
  );
}