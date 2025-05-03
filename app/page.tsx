"use client";
import ExperiencePage from "./experience/page";
import HeroPage from "./home/page";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import { useEffect } from "react";

export default function Home() {
  // Create subtle grid pattern effect with CSS
  useEffect(() => {
    const gridOverlay = document.createElement("div");
    gridOverlay.className = "absolute inset-0 z-[-1]";
    gridOverlay.style.backgroundImage =
      "linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)";
    gridOverlay.style.backgroundSize = "40px 40px";
    gridOverlay.style.opacity = "0.15";

    const bgElement = document.getElementById("gradient-background");
    if (bgElement) {
      bgElement.appendChild(gridOverlay);
    }

    return () => {
      if (bgElement && bgElement.contains(gridOverlay)) {
        bgElement.removeChild(gridOverlay);
      }
    };
  }, []);

  return (
    <main
      className="main-content"
      id="main-content"
      data-theme-target="main-content"
    >
      {/* Light background */}
      <div
        className="fixed inset-0 bg-gray-50 z-[-2]"
        id="page-background-base"
        data-theme-target="page-background-base"
      ></div>

      <div className="min-h-screen w-full text-gray-800 overflow-x-hidden relative">
        {/* Light theme gradient background */}
        <div
          className="fixed inset-0 z-[-1] overflow-hidden"
          data-theme-target="gradient-background"
          id="gradient-background"
        >
          {/* Soft gradient blobs */}
          <div
            className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
            data-theme-target="gradient-blob-1"
            id="gradient-blob-1"
          />
          <div
            className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-bl from-purple-100 to-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
            data-theme-target="gradient-blob-2"
            id="gradient-blob-2"
          />
          <div
            className="absolute bottom-10 left-1/3 w-96 h-96 bg-gradient-to-tl from-cyan-100 to-teal-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"
            data-theme-target="gradient-blob-3"
            id="gradient-blob-3"
          />

          {/* Subtle overlay effect */}
          <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
        </div>

        <section
          id="home"
          className="relative z-10"
          data-theme-target="home-section"
        >
          <HeroPage />
        </section>
      </div>

      {/* Main Sections */}
      <section
        id="about"
        className="scroll-mt-20"
        data-theme-target="about-section"
      >
        <About />
      </section>

      <section
        id="experience"
        className="scroll-mt-20"
        data-theme-target="experience-section"
      >
        <ExperiencePage />
      </section>

      <section
        id="skills"
        className="scroll-mt-20"
        data-theme-target="skills-section"
      >
        <Skills />
      </section>

      <section
        id="projects"
        className="scroll-mt-20"
        data-theme-target="projects-section"
      >
        <Projects />
      </section>

      <style jsx global>{`
        /* Subtle noise texture */
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)' opacity='0.2'/%3E%3C/svg%3E");
        }

        /* Blob animations */
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-30px, 30px) scale(1.05);
          }
          50% {
            transform: translate(20px, -20px) scale(0.95);
          }
          75% {
            transform: translate(-20px, -20px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 15s infinite alternate;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
}
