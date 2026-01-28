"use client";

import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  year: string;
  videoSrc?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  year,
  videoSrc,
}: ProjectProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) videoRef.current.pause();
  };

  return (
    <Link
      href={link}
      target="_blank"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
    >
      {/* GLASS CONTAINER 
        This div wraps the background video and the glass overlay.
        It appears only on Desktop (lg:block).
      */}
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:shadow-[0_0_30px_0_rgba(255,255,255,0.05)] overflow-hidden">
        {/* LAYER 1: VIDEO (The "Alive" Background) */}
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            loop
            muted
            playsInline
            // Starts invisible/grayscale. On hover: becomes visible (70% opacity) and full color.
            className="absolute inset-0 h-full w-50 object-cover opacity-0 grayscale transition-all duration-500 group-hover:opacity-70 group-hover:grayscale-0"
          />
        ) : (
          // FALLBACK: Gradient if no video
          <motion.div
            className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "conic-gradient(from 0deg at 50% 50%, #0f172a 0deg, #1e293b 60deg, #14b8a6 180deg, #1e293b 300deg, #0f172a 360deg)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* LAYER 2: THE REAL GLASS OVERLAY 
           Based on your InfiniteLogoScroller.jsx.
           - Gradient: White opacity (sheen) instead of flat slate.
           - Border: White/10 to define the edge.
           - Blur: Softens the video behind it.
        */}
        <div
          className="absolute inset-0 
            bg-gradient-to-tr from-white/15 via-white/5 to-white/0 
            border border-white/10 
            backdrop-blur-[2px] 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
      </div>

      {/* CONTENT LAYER */}
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
        {year}
      </header>

      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          <div>
            <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group-hover:text-teal-300 transition-colors">
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {title}
                <span className="inline-block">
                  <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                </span>
              </span>
            </span>
          </div>
        </h3>
        <p className="mt-2 text-sm leading-normal text-slate-400">
          {description}
        </p>
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
          {tags.map((tag, index) => (
            <li key={index} className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                {tag}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
