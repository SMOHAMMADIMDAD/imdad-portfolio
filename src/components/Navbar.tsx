"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  Mail,
  Download,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
];

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

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* ---------------- SCROLL STATE ---------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ---------------- ACTIVE SECTION ---------------- */

  useEffect(() => {
    const sections = [
      "home",
      "work",
      "about",
      "skills",
      "journey",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isPlaceholder = (href: string) =>
    href.startsWith("YOUR_");

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <motion.header
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.15,
          ease,
        }}
        className="fixed left-0 right-0 top-0 z-50"
      >
        <div
          className={`mx-auto mt-3 flex h-[68px] max-w-[1400px] items-center px-5 transition-all duration-500 lg:mt-4 lg:px-8 ${
            scrolled
              ? "rounded-2xl border border-black/[0.08] bg-[#f4f2ec]/85 shadow-[0_12px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl"
              : "bg-transparent"
          }`}
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="#home"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-3"
          >
            {/* Monogram */}
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden bg-[#111] text-[10px] font-semibold tracking-[-0.04em] text-white transition-all duration-500 group-hover:bg-[#315cff]">
              <span className="relative z-10">
                IM
              </span>

              <motion.div
                className="absolute inset-0 bg-[#315cff]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{
                  duration: 0.45,
                  ease,
                }}
              />
            </div>

            {/* Name */}
            <div className="block">
              <div className="text-[11px] font-semibold tracking-[-0.02em]">
                S. MOHAMMAD IMDAD
              </div>

              <div className="mt-[3px] flex items-center gap-2 text-[7px] font-medium uppercase tracking-[0.2em] text-black/35">
                <span className="h-[4px] w-[4px] rounded-full bg-[#315cff]" />
                AI · Software · Data
              </div>
            </div>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="ml-16 hidden items-center gap-2 lg:flex xl:ml-20">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const active = activeSection === sectionId;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative px-4 py-2.5"
                >
                  <span
                      className={`relative z-10 text-[11px] font-semibold uppercase tracking-[0.13em] transition-colors duration-300 ${
                      active
                      ? "text-black"
                      : "text-black/65 group-hover:text-black"
                      }`}
                    >
                    {item.label}
                  </span>

                  {/* Active background */}
                  <span
                    className={`absolute inset-0 rounded-full bg-black/[0.045] transition-all duration-300 ${
                      active
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                    }`}
                  />

                  {/* Blue active dot */}
                  <span
                    className={`absolute bottom-[3px] left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-[#315cff] transition-all duration-300 ${
                      active
                        ? "scale-100 opacity-100"
                        : "scale-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="ml-auto hidden items-center gap-5 lg:flex">
            {/* Availability */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#315cff]/40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#315cff]" />
              </span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-black/55">
                Available
              </span>
            </div>

            <div className="h-5 w-px bg-black/10" />

            {/* Social */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={
                    isPlaceholder(social.href)
                      ? undefined
                      : social.href
                  }
                  target={
                    isPlaceholder(social.href)
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    isPlaceholder(social.href)
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={`text-[10px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                    isPlaceholder(social.href)
                      ? "cursor-default text-black/20"
                      : "text-black/60 hover:text-[#315cff]"
                  }`}
                >
                  {social.label}
                </a>
              ))}
            </div>

            <div className="h-5 w-px bg-black/10" />

            {/* Contact */}
            <Link
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-[#111] px-4 py-2.5 text-[8px] font-medium uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#315cff]"
            >
              <span>Contact</span>

              <ArrowUpRight
                size={12}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* =================================================
              MOBILE BUTTON
          ================================================= */}

          <button
            type="button"
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen((value) => !value)
            }
            className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/30 transition-all duration-300 hover:bg-black hover:text-white lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.7,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={17} strokeWidth={1.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 45,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -45,
                    scale: 0.7,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={17} strokeWidth={1.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.4,
              ease,
            }}
            className="fixed inset-x-4 top-[88px] z-40 overflow-hidden rounded-2xl border border-black/[0.08] bg-[#f4f2ec]/95 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl lg:hidden"
          >
            {/* Menu header */}
            <div className="flex items-center justify-between border-b border-black/[0.08] px-6 py-5">
              <div>
                <div className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                  Navigation
                </div>

                <div className="mt-1 text-[8px] text-black/30">
                  Explore the portfolio
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-[5px] w-[5px] rounded-full bg-[#315cff]" />

                <span className="text-[7px] uppercase tracking-[0.15em] text-black/30">
                  Online
                </span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="px-5">
              {navItems.map((item, index) => {
                const sectionId =
                  item.href.replace("#", "");

                const active =
                  activeSection === sectionId;

                return (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.05,
                      ease,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between border-b border-black/[0.08] py-5"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-[8px] tracking-[0.1em] ${
                            active
                              ? "text-[#315cff]"
                              : "text-black/25"
                          }`}
                        >
                          0{index + 1}
                        </span>

                        <span
                          className={`text-[12px] font-medium uppercase tracking-[0.13em] transition-colors ${
                            active
                              ? "text-black"
                              : "text-black/55 group-hover:text-black"
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.4}
                        className="text-black/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#315cff]"
                      />
                    </Link>
                  </motion.div>
                );
              })}

              {/* Contact */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.35,
                  delay: 0.2,
                  ease,
                }}
              >
                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="group flex items-center justify-between py-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[8px] tracking-[0.1em] text-[#315cff]">
                      05
                    </span>

                    <span className="text-[12px] font-medium uppercase tracking-[0.13em]">
                      Contact
                    </span>
                  </div>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.4}
                    className="text-[#315cff] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.div>
            </nav>

            {/* Mobile footer */}
            <div className="border-t border-black/[0.08] px-6 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={
                        isPlaceholder(social.href)
                          ? undefined
                          : social.href
                      }
                      target={
                        isPlaceholder(social.href)
                          ? undefined
                          : "_blank"
                      }
                      rel={
                        isPlaceholder(social.href)
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className={`text-[8px] font-medium uppercase tracking-[0.14em] ${
                        isPlaceholder(social.href)
                          ? "cursor-default text-black/20"
                          : "text-black/40 hover:text-[#315cff]"
                      }`}
                    >
                      {social.label}
                    </a>
                  ))}

                  <a
                    href="mailto:smohammadimdad132@gmail.com"
                    className="text-black/40 transition-colors hover:text-[#315cff]"
                    aria-label="Email"
                  >
                    <Mail
                      size={14}
                      strokeWidth={1.5}
                    />
                  </a>
                </div>

                <a
                  href="/resume.pdf"
                  download="S_Mohammad_Imdad_Resume.pdf"
                  className="flex items-center gap-2 text-[8px] font-medium uppercase tracking-[0.14em] text-black/40 transition-colors hover:text-black"
                >
                  <Download
                    size={13}
                    strokeWidth={1.5}
                  />
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}