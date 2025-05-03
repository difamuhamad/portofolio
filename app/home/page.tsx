"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const cardAnimation = {
  hover: {
    y: -10,
    scale: 1.03,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.05)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function HomePage() {
  return (
    <>
      <main
        id="home"
        className="container mx-auto px-4 min-h-screen flex items-center justify-center pt-16 md:pt-0"
      >
        <div
          id="home-content-wrapper"
          className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 max-w-7xl w-full py-8 md:py-0"
        >
          {/* Profile Image Section - Light Theme Design */}
          <div
            id="home-profile-section"
            className="flex-1 flex justify-center relative order-1 md:order-2"
          >
            <motion.div
              id="home-profile-image-container"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80"
              variants={cardAnimation}
              whileHover="hover"
            >
              {/* Background subtle glow - Light version */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-cyan-100/50 filter blur-[60px] -z-10" />

              {/* Frame with light theme accents */}
              <div className="absolute inset-0">
                {/* Main frame - square with one rounded corner */}
                <div className="absolute inset-0 border-2 border-blue-200/70 rounded-br-3xl" />

                {/* Floating accent lines - Light version */}
                <motion.div
                  className="absolute -top-3 -right-3 w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400"
                  animate={{
                    x: [0, 5, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div
                  className="absolute -bottom-3 -left-3 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400"
                  animate={{
                    x: [0, -5, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 2,
                  }}
                />
                <motion.div
                  className="absolute -left-3 -top-3 h-24 w-1 bg-gradient-to-b from-blue-400 to-cyan-400"
                  animate={{
                    y: [0, 5, 0],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1,
                  }}
                />
              </div>

              {/* Inner image container with diagonal cutout */}
              <div className="absolute inset-4 overflow-hidden bg-white/80 backdrop-blur-sm border border-gray-100">
                {/* Diagonal cutout */}
                <div
                  className="absolute top-0 right-0 w-16 h-16 bg-white/0 z-10"
                  style={{
                    clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                  }}
                />

                {/* Single image container */}
                <div className="relative w-full h-full">
                  {/* Image placeholder - replace with your actual Image component */}
                  <div className="absolute inset-0 bg-gray-200">
                    <Image
                      src="/profile.webp"
                      alt="Profile picture"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  {/* Light theme overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent opacity-50" />
                </div>
              </div>

              {/* Animated edge highlight - Light version */}
              <motion.div
                className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-50"
                animate={{
                  background: [
                    "linear-gradient(45deg, transparent 60%, rgba(96, 165, 250, 0.2) 100%)",
                    "linear-gradient(45deg, transparent 60%, rgba(34, 211, 238, 0.2) 100%)",
                    "linear-gradient(45deg, transparent 60%, rgba(96, 165, 250, 0.2) 100%)",
                  ],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Animated particles in corner - Light version */}
              <div className="absolute -top-2 -right-2">
                <div className="relative">
                  <motion.div
                    className="absolute w-1 h-1 rounded-full bg-cyan-400"
                    animate={{
                      y: [0, 8, 0],
                      opacity: [0.4, 1, 0.4],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  <motion.div
                    className="absolute w-1 h-1 rounded-full bg-blue-400 ml-5"
                    animate={{
                      y: [0, 5, 0],
                      opacity: [0.4, 1, 0.4],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 0.5,
                    }}
                  />
                  <motion.div
                    className="absolute w-1 h-1 rounded-full bg-indigo-400 ml-2 mt-2"
                    animate={{
                      y: [0, 6, 0],
                      opacity: [0.4, 1, 0.4],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1,
                    }}
                  />
                </div>
              </div>

              {/* Digital element accent - Light version */}
              <div className="absolute -bottom-2 -right-2">
                <motion.div
                  className="text-xs font-mono bg-white/80 text-blue-600 px-2 py-1 rounded border border-blue-200 backdrop-blur-sm shadow-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                    <span>DEV_2025</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Text Content Section */}
          <motion.div
            id="home-text-content"
            className="flex-1 text-center md:text-left space-y-4 md:space-y-8 order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h1
              id="home-title"
              className="text-2xl sm:text-4xl md:text-6xl lg:text-6xl font-bold text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I&apos;m <br className="hidden sm:block" />
              <motion.span
                className="text-blue-600 inline-block"
                transition={{
                  duration: 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  repeatDelay: 5,
                }}
              >
                Difa Muhamad
              </motion.span>
            </motion.h1>

            <motion.p
              id="home-subtitle"
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Front-End Developer Specialist | Tech Enthusiast
            </motion.p>

            <motion.p
              id="home-description"
              className="text-sm sm:text-base md:text-lg text-gray-500 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              New fresh graduate who successfully turned his passion into a
              career at a young age, and continues to learn and grow in the tech
              industry.
            </motion.p>

            <motion.div
              id="home-action-buttons"
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4 md:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex flex-row gap-4 items-center">
                {/* Sponsor Button - Light version */}
                <div
                  id="home-sponsor-button-wrapper"
                  className="relative w-[140px] overflow-hidden rounded-md"
                >
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 animate-gradient-xy" />
                  </div>
                  <div className="absolute inset-[2px] bg-white rounded-[4px]" />
                </div>
              </div>

              {/* Social Links - Light version */}
              <motion.div
                id="home-social-links"
                className="flex gap-6 items-center mt-4 sm:mt-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <a
                  href="https://github.com/difamuhamad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-all duration-300 hover:scale-125 hover:rotate-12"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/difa-muhamad-1b8347333/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-all duration-300 hover:scale-125 hover:-rotate-12"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-all duration-300 hover:scale-125 hover:rotate-12"
                >
                  <FaInstagram size={24} />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
