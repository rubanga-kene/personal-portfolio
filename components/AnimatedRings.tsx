'use client'
import React from "react";
import { motion } from "framer-motion";

interface AnimatedRingsProps {
  size?: number;
}

export default function AnimatedRings({ size = 340 }: AnimatedRingsProps) {
  const ringSize = size + 40;

  /**
   * Tailwind cannot calculate translate based on JS interpolations (45 * i).
   * So here we define fixed hover transforms per ring.
   */
  const hoverTransforms = [
    "group-hover:translate-x-0 group-hover:-translate-y-0", // Ring 1 (no shift)
    "group-hover:translate-x-8 group-hover:-translate-y-6", // Ring 2
    "group-hover:translate-x-16 group-hover:-translate-y-10", // Ring 3
  ];

  const spinFast = {
    animate: {
      rotate: 360,
      transition: { repeat: Infinity, duration: 4, ease: "linear" },
    },
  };

  const spinMedium = {
    animate: {
      rotate: 360,
      transition: { repeat: Infinity, duration: 7, ease: "linear" },
    },
  };

  const spinReverse = {
    animate: {
      rotate: -360,
      transition: { repeat: Infinity, duration: 6, ease: "linear" },
    },
  };

  return (
    <div
      className="relative flex items-center justify-center group"
      style={{ width: size, height: size }}
    >
      {/* Ring 1 */}
      <motion.div
        style={{ width: ringSize, height: ringSize }}
        className={`absolute transition-all duration-700 ease-in-out ${hoverTransforms[0]} group-hover:-rotate-90 group-hover:skew-y-6`}
        {...spinMedium}
      >
        <svg viewBox="0 0 344 344" className="w-full h-full fill-none stroke-cyan-300">
          <circle cx="172" cy="172" r="100" strokeWidth="2" />
          <circle cx="172" cy="172" r="60" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Ring 2 */}
      <motion.div
        style={{ width: ringSize, height: ringSize }}
        className={`absolute transition-all duration-700 ease-in-out ${hoverTransforms[1]} group-hover:-rotate-90 group-hover:skew-y-6`}
        {...spinReverse}
      >
        <svg viewBox="0 0 344 344" className="w-full h-full fill-none stroke-yellow-300">
          <circle cx="172" cy="172" r="110" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Ring 3 */}
      <motion.div
        style={{ width: ringSize, height: ringSize }}
        className={`absolute transition-all duration-700 ease-in-out ${hoverTransforms[2]} group-hover:-rotate-90 group-hover:skew-y-6`}
        {...spinFast}
      >
        <svg viewBox="0 0 344 344" className="w-full h-full fill-none stroke-purple-300">
          <circle cx="172" cy="172" r="125" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Center Pulse */}
      <motion.div
        className="w-6 h-6 rounded-full bg-white shadow-xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      />
    </div>
  );
}