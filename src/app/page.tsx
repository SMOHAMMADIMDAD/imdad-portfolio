import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f4f2ec]">
      {/* Background particles */}
      <ParticleBackground />

      {/* Portfolio content */}
      <div className="relative z-20">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Contact />
      </div>
    </main>
  );
}