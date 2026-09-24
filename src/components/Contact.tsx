"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/s-mohammad-imdad-05196a2a7",
  },
  {
    label: "GitHub",
    href: "https://github.com/SMOHAMMADIMDAD",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-transparent py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* =====================================================
            MAIN CONTACT PANEL
        ===================================================== */}

        <div className="relative overflow-hidden rounded-[2rem] bg-[#0D1628] text-white shadow-[0_35px_100px_rgba(13,22,40,0.18)]">

          {/* ===================================================
              BACKGROUND
          =================================================== */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#315CFF]/10 blur-[110px]" />

            <div className="absolute -bottom-40 left-[-100px] h-[400px] w-[400px] rounded-full bg-[#315CFF]/[0.06] blur-[120px]" />

            <div
              className="absolute inset-0 opacity-[0.13]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />
          </div>

          <div className="relative z-10">

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="border-b border-white/[0.08] px-7 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
              <div className="flex items-center gap-4">

                <motion.span
                  initial={false}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease }}
                  className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45"
                >
                  05 / Contact
                </motion.span>

                <span className="h-px w-14 bg-white/10" />

                <motion.span
                  initial={false}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                    ease,
                  }}
                  className="hidden text-[8px] uppercase tracking-[0.18em] text-white/25 sm:block"
                >
                  Start a conversation
                </motion.span>

              </div>
            </div>

            {/* =================================================
                MAIN CTA
            ================================================= */}

            <div className="px-7 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">

                {/* Left */}

                <motion.div
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease,
                  }}
                >
                  <div className="mb-6 flex items-center gap-3">

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                      <Sparkles
                        size={15}
                        strokeWidth={1.4}
                        className="text-[#6F8CFF]"
                      />
                    </span>

                    <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/30">
                      Open to opportunities
                    </span>

                  </div>

                  <h2 className="max-w-5xl text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.065em]">
                    Let&apos;s build
                    <br />
                    <span className="text-white/30">
                      something useful.
                    </span>
                  </h2>
                </motion.div>

                {/* Right */}

                <motion.div
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15,
                    ease,
                  }}
                  className="max-w-md"
                >
                  <p className="text-[14px] leading-6 text-white/45">
                    Have a role, project, collaboration, or idea worth
                    exploring? Send me a message and let&apos;s start from
                    there.
                  </p>

                  <motion.a
                    href="mailto:smohammadimdad132@gmail.com"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.25 }}
                    className="group mt-7 inline-flex items-center gap-4 rounded-full bg-[#315CFF] px-5 py-3.5 transition-all duration-300 hover:bg-[#4A6FFF]"
                  >
                    <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white">
                      Send me a message
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.7}
                      />
                    </span>
                  </motion.a>
                </motion.div>

              </div>
            </div>

            {/* =================================================
                CONTACT DETAILS
            ================================================= */}

            <div className="grid border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">

              {/* EMAIL */}

              <motion.a
                href="mailto:smohammadimdad132@gmail.com"
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.08,
                  ease,
                }}
                className="group border-b border-white/[0.08] p-7 transition-colors duration-300 hover:bg-white/[0.025] sm:p-8 lg:border-b-0 lg:border-r"
              >
                <div className="flex items-center gap-3 text-white/30">
                  <Mail size={15} strokeWidth={1.5} />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.18em]">
                    Email
                  </span>
                </div>

                <div className="mt-6 flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <p className="break-all text-[13px] font-medium leading-6 text-white/75">
                      smohammadimdad132@gmail.com
                    </p>

                    <p className="mt-2 text-[7px] uppercase tracking-[0.14em] text-white/25">
                      Primary contact
                    </p>
                  </div>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="shrink-0 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#6F8CFF]"
                  />
                </div>
              </motion.a>

              {/* PHONE */}

              <motion.a
                href="tel:+919100365711"
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.14,
                  ease,
                }}
                className="group border-b border-white/[0.08] p-7 transition-colors duration-300 hover:bg-white/[0.025] sm:p-8 lg:border-b-0 lg:border-r"
              >
                <div className="flex items-center gap-3 text-white/30">
                  <Phone size={15} strokeWidth={1.5} />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.18em]">
                    Phone
                  </span>
                </div>

                <div className="mt-6 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[16px] font-medium text-white/75">
                      +91 9100365711
                    </p>

                    <p className="mt-2 text-[7px] uppercase tracking-[0.14em] text-white/25">
                      Call or WhatsApp
                    </p>
                  </div>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="shrink-0 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#6F8CFF]"
                  />
                </div>
              </motion.a>

              {/* LOCATION */}

              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease,
                }}
                className="border-b border-white/[0.08] p-7 transition-colors duration-300 hover:bg-white/[0.025] sm:p-8 lg:border-b-0 lg:border-r"
              >
                <div className="flex items-center gap-3 text-white/30">
                  <MapPin size={15} strokeWidth={1.5} />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.18em]">
                    Based in
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-[16px] font-medium text-white/75">
                    India
                  </p>

                  <p className="mt-2 text-[7px] uppercase tracking-[0.14em] text-white/25">
                    Open to opportunities
                  </p>
                </div>
              </motion.div>

              {/* AVAILABILITY */}

              <motion.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.26,
                  ease,
                }}
                className="p-7 transition-colors duration-300 hover:bg-white/[0.025] sm:p-8"
              >
                <div className="flex items-center gap-3 text-white/30">

                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#315CFF]/40" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#315CFF]" />
                  </span>

                  <span className="text-[8px] font-semibold uppercase tracking-[0.18em]">
                    Availability
                  </span>

                </div>

                <div className="mt-6">
                  <p className="text-[16px] font-medium text-white/75">
                    Open to opportunities
                  </p>

                  <p className="mt-2 text-[7px] uppercase tracking-[0.14em] text-white/25">
                    AI · Software · Data
                  </p>
                </div>
              </motion.div>

            </div>

            {/* =================================================
                SOCIALS + RESUME
            ================================================= */}

            <div className="border-t border-white/[0.08] px-7 py-6 sm:px-9">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                {/* Social links */}

                <div className="flex flex-wrap items-center gap-5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[8px] font-semibold uppercase tracking-[0.16em] text-white/40 transition-colors duration-300 hover:text-[#6F8CFF]"
                    >
                      {social.label}
                    </a>
                  ))}

                  <Link
                    href="/resume.pdf?v=2"
                    download="S_Mohammad_Imdad_Resume.pdf"
                    className="group flex items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-white/40 transition-colors duration-300 hover:text-white"
                  >
                    <Download
                      size={13}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-y-0.5"
                    />

                    Resume
                  </Link>
                </div>

                <div className="text-[8px] uppercase tracking-[0.17em] text-white/20">
                  S. Mohammad Imdad · AI · Software · Data
                </div>

              </div>
            </div>

            {/* =================================================
                FOOTER
            ================================================= */}

            <div className="flex flex-col gap-4 border-t border-white/[0.08] px-7 py-5 text-[8px] uppercase tracking-[0.16em] text-white/20 sm:flex-row sm:items-center sm:justify-between sm:px-9">

              <span>© 2026 S. Mohammad Imdad</span>

              <div className="flex flex-wrap gap-5">
                <Link
                  href="#home"
                  className="transition-colors duration-300 hover:text-white/60"
                >
                  Home
                </Link>

                <Link
                  href="#work"
                  className="transition-colors duration-300 hover:text-white/60"
                >
                  Work
                </Link>

                <Link
                  href="#about"
                  className="transition-colors duration-300 hover:text-white/60"
                >
                  About
                </Link>

                <Link
                  href="#skills"
                  className="transition-colors duration-300 hover:text-white/60"
                >
                  Skills
                </Link>

                <Link
                  href="#journey"
                  className="transition-colors duration-300 hover:text-white/60"
                >
                  Journey
                </Link>
              </div>

              <span>Built with purpose</span>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}