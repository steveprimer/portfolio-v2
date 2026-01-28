"use client";

import { Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import Link from "next/link";
// specific import path based on your previous snippet
import ProjectCard from "@/app/components/ProjectCard";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      year: "2025",
      title: "ScaleBridge Agency",
      description:
        "A sleek, SEO-optimized website for a digital services agency. Scores 95+ on PageSpeed Insights and features a high-performance accessible UI.",
      tags: ["React.js", "Tailwind CSS", "Netlify", "SEO"],
      link: "https://scalebridge.netlify.app/",
      videoSrc: "/a11.mp4",
    },
    {
      year: "2025",
      title: "AI Chat Support",
      description:
        "Dynamic AI-powered customer service assistant for e-commerce. Features GPT-3.5 integration, context awareness, and real-time typing animations.",
      tags: ["React", "Node.js", "OpenAI API", "Express"],
      link: "https://aichat-support.netlify.app/",
      videoSrc: "/a12.mp4",
    },
    {
      year: "2025",
      title: "Aromatte Luxe",
      description:
        "Full-stack e-commerce platform for luxury perfumes. Includes Razorpay payments, admin dashboard, and dynamic product management.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://aromatteluxe.netlify.app/",
      videoSrc: "/a13.mp4",
    },
    {
      year: "2024",
      title: "TheBOX Construction",
      description:
        "Professional business website for construction services. Focuses on clear navigation and professional brand presentation.",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://peaceful-kashata-56e745.netlify.app/",
      videoSrc: "/a14.mp4",
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 50 },
    },
  };

  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      {/* LEFT COLUMN: Sticky Header */}
      <motion.header
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
      >
        <div>
          {/* --- PROFILE IMAGE SECTION START --- */}
          <div className="mb-8 block lg:w-48">
            <Image
              src="/profile.jpg"
              alt="Anson Stephan"
              width={160}
              height={160}
              quality={95}
              priority
              className="rounded-full border-2 border-slate-200/10 bg-slate-800 object-cover shadow-2xl filter grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>
          {/* --- PROFILE IMAGE SECTION END --- */}

          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Anson Stephan
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Full Stack Developer
          </h2>
          <p className="mt-4 max-w-xs leading-normal text-slate-400">
            Building accessible, pixel-perfect digital experiences for the
            modern web. Co-founder of A* Codex.
          </p>

          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              <li>
                <a
                  className="group flex items-center py-3 active"
                  href="#about"
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-teal-300"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                    About
                  </span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3" href="#experience">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-teal-300"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                    Experience
                  </span>
                </a>
              </li>
              <li>
                <a className="group flex items-center py-3" href="#projects">
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-teal-300"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                    Projects
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="ml-1 mt-8 flex items-center gap-5 lg:mt-0"
        >
          <li className="mr-5 text-xs">
            <Link
              href="https://github.com/steveprimer/"
              target="_blank"
              className="block hover:text-slate-200"
            >
              <Github className="h-6 w-6" />
            </Link>
          </li>
          <li className="mr-5 text-xs">
            <Link
              href="https://www.linkedin.com/in/anson-stephan-71132525b/"
              target="_blank"
              className="block hover:text-slate-200"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
          </li>
          <li className="mr-5 text-xs">
            <Link
              href="https://www.instagram.com/_steve_primer/"
              target="_blank"
              className="block hover:text-slate-200"
            >
              <Instagram className="h-6 w-6" />
            </Link>
          </li>
        </motion.ul>
      </motion.header>

      {/* RIGHT COLUMN: Scrollable Content */}
      <main className="pt-24 lg:w-1/2 lg:py-24">
        {/* Animated Wrapper for Right Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ABOUT */}
          <motion.section
            variants={itemVariants}
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                About
              </h2>
            </div>
            <div>
              <p className="mb-4 text-slate-400">
                I’m a developer passionate about crafting accessible,
                pixel-perfect user interfaces that blend thoughtful design with
                robust engineering. Currently, I'm the co-founder of{" "}
                <span className="font-medium text-slate-200">A* Codex</span>{" "}
                (formerly ScaleBridge), where we help brands scale their digital
                presence.
              </p>
              <p className="mb-4 text-slate-400">
                My expertise spans the{" "}
                <span className="font-medium text-slate-200">MERN stack</span>,
                Next.js, and modern CSS architectures. When I'm not coding, I'm
                likely exploring VR game development, playing drums, or creating
                content about freelancing for my community.
              </p>
            </div>
          </motion.section>

          {/* EXPERIENCE */}
          <motion.section
            variants={itemVariants}
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Experience
              </h2>
            </div>
            <ol className="group/list">
              <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                    2025 — Present
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group-hover:text-teal-300 transition-colors"
                          href="https://astarcodex.com"
                          target="_blank"
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            Co-Founder & Lead Developer ·{" "}
                            <span className="inline-block">
                              A* Codex
                              <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-400">
                      Leading a digital agency focused on web development and
                      SEO. Rebranded from ScaleBridge to expand service
                      offerings into custom software solutions.
                    </p>
                    <ul className="mt-2 flex flex-wrap">
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          React
                        </div>
                      </li>
                      <li className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          Next.js
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ol>
          </motion.section>

          {/* PROJECTS */}
          <motion.section
            variants={itemVariants}
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Projects
              </h2>
            </div>
            <div className="group/list">
              {projects.map((project, index) => (
                <div key={index} className="mb-12">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  );
}
