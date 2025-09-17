"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight} from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "../ui/button"

interface TemplateCardProps {
  title: string
  description: string
  image: string
  demoUrl: string
}


export function TemplateCard({ title, description,  image, demoUrl }: TemplateCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="relative h-full overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 transition-all duration-300 group-hover:border-purple-500/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative h-full flex flex-col">
          <div className="relative overflow-hidden h-48">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <Image
              src={image || "/placeholder.svg"}
              height={400}
              width={600}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
            />
          </div>

          <div className="p-6 flex-grow">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-zinc-400 mb-4">{description}</p>

            <div className="flex justify-between mt-auto pt-4 border-t border-zinc-700/50">
    
              <Button
                size="sm"
                className="bg-gradient-to-r w-full from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
                asChild
              >
                <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
             </Button>

              
            </div>
          </div>

          <div className="absolute top-3 right-3 z-20">
            <div
              className={`w-3 h-3 rounded-full ${isHovered ? "bg-green-500" : "bg-zinc-500"} transition-colors duration-300`}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
