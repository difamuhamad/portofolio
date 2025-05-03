"use client";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "@/components/ui/sparkles";

export default function About() {
  const words = [
    "play video games",
    "be one with nature",
    "watch some movies & anime",
  ];

  return (
    <div
      id="about-page"
      className="h-screen w-full text-gray-800 overflow-hidden relative bg-gray-50"
      data-theme-target="about-page"
    >
      {/* Light Background */}
      <div
        id="about-background"
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100"
        data-theme-target="about-background"
      />

      {/* Subtle Sparkles - Light Version */}
      <div
        id="about-sparkles-container"
        className="absolute inset-0 w-full h-full"
      >
        <SparklesCore
          id="about-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#3b82f6" // Blue-500
          data-theme-target="about-sparkles"
        />
      </div>

      <div className="relative z-10 h-full">
        <main
          id="about-content"
          className="container mx-auto px-4 h-full flex items-center justify-center"
        >
          <div id="about-container" className="max-w-4xl">
            <motion.div
              id="about-title-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1
                id="about-title"
                className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"
                data-theme-target="about-title"
              >
                About Me
              </h1>
            </motion.div>

            <motion.div
              id="about-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8 text-center md:text-left backdrop-blur-sm bg-white/80 p-8 rounded-2xl border border-gray-200 shadow-lg"
              data-theme-target="about-card"
            >
              <p
                id="about-intro"
                className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed"
              >
                Associate Engineer
              </p>

              <p
                id="about-description-1"
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
              >
                A fresh graduate who transformed his passion in Front-End
                Development into a successful career by building company and
                client projects, now honing skills in Golang technology to solve
                problems and mastering Backend Development.
                <br />
                I&apos;m always looking out for new things to explore. I love to
                collaborate with like-minded people who are fueled by curiosity.
                I work with TypeScript/JavaScript ecosystems for my web
                development projects.
              </p>

              <div
                id="about-hobbies"
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
              >
                When I&apos;m not coding, I usually
                <FlipWords
                  words={words}
                  className="text-blue-600 font-medium"
                />
              </div>

              <motion.div
                id="about-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-6"
              ></motion.div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
