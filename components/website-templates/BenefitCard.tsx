"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface BenefitCardProps {
  title: string
  description: string
  icon: string
}

export function BenefitCard({ title, description, icon }: BenefitCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 10, damping: 20 }}
      className="relative h-full overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 hover:border-purple-500/50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

      <div className="relative p-6 flex flex-col h-full">
        {/* icon */}
        <div className="flex items-center justify-center h-16 w-16 rounded-md bg-purple-500/20 mb-5">
          <Image src={icon} width={36} height={36} alt={title} />
        </div>

        {/* title */}
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>

        {/* description */}
        <p className="text-zinc-400">{description}</p>
      </div>

      {/* corner indicator */}
      <div className="absolute top-3 right-3 z-20">
        <div
          className={`w-3 h-3 rounded-full ${
            isHovered ? "bg-green-500" : "bg-zinc-500"
          } transition-colors duration-300`}
        ></div>
      </div>
    </motion.div>
  )
}
