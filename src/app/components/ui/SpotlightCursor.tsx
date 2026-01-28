"use client";

import { useEffect } from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";

export default function SpotlightCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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
    <div className="pointer-events-none fixed inset-0 z-0 transition duration-300">
      <motion.div
        className="absolute inset-0 z-0 bg-slate-950"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(29, 78, 216, 0.15),
              transparent 80%
            )
          `,
        }}
      />
    </div>
  );
}
