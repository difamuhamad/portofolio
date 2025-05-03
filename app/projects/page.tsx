"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import Head from "next/head";

// SEO keywords and descriptions
const SEO = {
  title: "Difa Muhamad | Projects Portfolio",
  description:
    "Explore my portfolio of web development and software engineering projects. Featuring Next.js, React, TypeScript.",
  keywords:
    "Portofolio Projects, React projects, Next.js portfolio, TypeScript,",
};

type MediaType = "image" | "youtube";

type Project = {
  id: number;
  title: string;
  description: string;
  media: {
    type: MediaType;
    src: string; // image path or YouTube video ID
  };
  tags: string[];
  link: string;
  github: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "ARABINESIA",
    description:
      "arabinesia is a learning platform application for learning Indonesian for foreign speakers, with Arabic delivery.",
    media: {
      type: "image",
      src: "/projects/arabinesia-page.webp",
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://arabinesia.com",
    github: "https://github.com/difamuhamad",
  },
  {
    id: 2,
    title: "Void Story",
    description:
      "Void story is an application for posting or sharing moments like Instagram but with a lighter version and futuristic design. This application is made using MVP architecture.",
    media: {
      type: "image",
      src: "/projects/void-story-page.webp",
    },
    tags: ["Javascript", "HTML", "CSS"],
    link: "",
    github: "https://github.com/difamuhamad/void-story",
  },
  {
    id: 3,
    title: "Difa Muhamad | Portofolio",
    description:
      "Personal portfolio website with a modern style created to showcase skills and also practice applying cool animations from Framer Motion.",
    media: {
      type: "image",
      src: "/projects/portofolio-web-page.webp",
    },
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    link: "https://github.com/difamuhamad/",
    github: "https://github.com/difamuhamad/void-story",
  },
];

// Add this new constant for shared transition config
const transitionConfig = {
  type: "spring",
  bounce: 0.15,
  duration: 0.4,
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      name: SEO.title,
      description: SEO.description,
      keywords: SEO.keywords,
      mainEntity: {
        "@type": "Person",
        name: "Person",
        url: "https://github.com/difamuhamad",
        sameAs: ["https://github.com/difamuhamad"],
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.head.removeChild(script);
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <>
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords} />
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
      </Head>

      <div
        id="projects-page"
        className="min-h-screen w-full text-gray-800 mt-10 relative z-10"
      >
        <div id="projects-container" className="max-w-7xl mx-auto px-4 py-8">
          <h1
            id="projects-title"
            className="text-4xl mb-10 text-center sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"
          >
            Projects
          </h1>

          <div
            id="projects-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                id={`project-card-${project.id}`}
                layoutId={`project-${project.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={transitionConfig}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg flex flex-col h-full group cursor-pointer will-change-transform border border-gray-200"
                onClick={() => setSelectedProject(project)}
              >
                <div
                  id={`project-media-${project.id}`}
                  className="relative w-full aspect-video overflow-hidden bg-gray-100"
                >
                  <Image
                    src={project.media.src}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority={index < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div
                  id={`project-details-${project.id}`}
                  className="p-4 sm:p-6 flex flex-col flex-grow"
                >
                  <h2
                    id={`project-title-${project.id}`}
                    className="text-lg sm:text-xl font-bold text-gray-800 mb-2"
                  >
                    {project.title}
                  </h2>
                  <p
                    id={`project-description-${project.id}`}
                    className="text-sm text-gray-600 leading-relaxed mb-3 flex-grow line-clamp-3"
                  >
                    {project.description}
                  </p>
                  <div
                    id={`project-tags-${project.id}`}
                    className="flex flex-wrap gap-2 mb-4"
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    id={`project-links-${project.id}`}
                    className="flex flex-wrap gap-3 mt-auto"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, "_blank");
                      }}
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors text-xs sm:text-sm"
                      aria-label={`View source code for ${project.title} on GitHub`}
                      title="View on GitHub"
                    >
                      <FiGithub className="w-4 h-4" />
                      <span>GitHub</span>
                    </button>
                    {project.link && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.link, "_blank");
                        }}
                        className="flex items-center gap-2 text-white hover:text-white bg-blue-600 hover:bg-blue-500 px-3 py-1.5 rounded-lg transition-colors text-xs sm:text-sm"
                        aria-label={`View live demo of ${project.title}`}
                        title="View Live Demo"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <footer className="mt-20 text-center text-sm text-gray-500 hidden">
            <p>
              Portfolio template showcasing web development and software
              engineering projects. Built with Next.js, React, TypeScript, and
              Tailwind CSS.
            </p>
          </footer>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedProject && (
          <motion.div
            id="project-modal-backdrop"
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8 mt-16"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              id={`project-modal-${selectedProject.id}`}
              layoutId={`project-${selectedProject.id}`}
              transition={transitionConfig}
              className="bg-white rounded-xl overflow-hidden shadow-2xl w-full max-h-[85vh] max-w-5xl flex flex-col md:flex-row will-change-transform"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full md:w-[65%] bg-gray-100 flex items-center justify-center p-4">
                <Image
                  src={selectedProject.media.src}
                  alt={selectedProject.title}
                  width={1200}
                  height={675}
                  className="w-full h-auto object-contain rounded-lg"
                  priority
                  sizes="(max-width: 768px) 100vw, 65vw"
                />
              </div>

              <div className="p-6 md:p-8 overflow-y-auto md:w-[35%] flex flex-col bg-white">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  {selectedProject.title}
                </h2>

                <div className="space-y-6">
                  <p className="text-base text-gray-600 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-sm rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() =>
                        window.open(selectedProject.github, "_blank")
                      }
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-5 py-2.5 rounded-lg transition-colors text-sm font-medium"
                    >
                      <FiGithub className="w-5 h-5" />
                      <span>GitHub</span>
                    </button>
                    {selectedProject.link && (
                      <button
                        onClick={() =>
                          window.open(selectedProject.link, "_blank")
                        }
                        className="flex items-center gap-2 text-white hover:text-white bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-lg transition-colors text-sm font-medium"
                      >
                        <FiExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(null);
                }}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white/80 hover:bg-white rounded-full p-2.5 transition-colors z-10 shadow-sm"
              >
                <FiX className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
