"use client";

import { useEffect } from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

export default function SpotlightCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const backgroundImage = useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;

  useEffect(() => {
    function updateMousePosition({ clientX, clientY }: MouseEvent) {
      mouseX.set(clientX);
      mouseY.set(clientY);
    }

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[99] transition duration-300" // <--- CHANGED from z-0 to z-[5]
      style={{
        backgroundImage,
      }}
    />
  );
}
