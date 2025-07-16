"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TerminalLine {
  id: number
  type: "command" | "output" | "error" | "system" | "comment"
  content: string
  delay: number
  typingSpeed?: number
}

interface TerminalAnimationProps {
  name?: string
  title?: string
  location?: string
  skills?: string[]
  github?: string
  email?: string
  aboutMe?: string
  hobbies?: string[]
  education?: { degree: string; institution: string; year: string }[]
}

export default function TerminalAnimation({
  name = "",
  title = "",
  location = "",
  skills = [],
  github = "",
  email = "",
  aboutMe = " ",
  hobbies = [],
  education = [
    { degree: "", institution: "", year: "" },
    { degree: " ", institution: "", year: "" },
  ],
}: TerminalAnimationProps) {
  const [hasMounted, setHasMounted] = useState(false)
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [isComplete, setIsComplete] = useState(false)
  const [linesToDisplay, setLinesToDisplay] = useState<TerminalLine[]>([])
  const [currentTime, setCurrentTime] = useState("")
  const terminalRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHasMounted(true)
    setCurrentTime(new Date().toLocaleTimeString())

    const today = new Date()
    const dateString = today.toLocaleDateString()
    const timeString = today.toLocaleTimeString()

    const generatedLines: TerminalLine[] = [
      {
        id: 1,
        type: "system",
        content: `Last login: ${dateString} ${timeString}`,
        delay: 500,
      },
      { id: 2, type: "command", content: "$ whoami", delay: 1000, typingSpeed: 100 },
      { id: 3, type: "output", content: name, delay: 200 },
      { id: 4, type: "command", content: "$ about me", delay: 1500, typingSpeed: 80 },
      { id: 5, type: "output", content: aboutMe, delay: 500 },
      { id: 6, type: "command", content: "$ contact me on", delay: 1200, typingSpeed: 90 },
      { id: 7, type: "output", content: `Title: ${title}`, delay: 300 },
      { id: 8, type: "output", content: `Location: ${location}`, delay: 200 },
      { id: 9, type: "output", content: `Email: ${email}`, delay: 200 },
      { id: 10, type: "output", content: `GitHub: ${github}`, delay: 200 },
      { id: 11, type: "command", content: "$ skills", delay: 1800, typingSpeed: 85 },
      ...skills.map((skill, index) => ({
        id: 12 + index,
        type: "output" as const,
        content: `- ${skill}`,
        delay: 150,
      })),
      { id: 12 + skills.length, type: "command", content: "$ hobbies", delay: 1500, typingSpeed: 95 },
      ...hobbies.map((hobby, index) => ({
        id: 13 + skills.length + index,
        type: "output" as const,
        content: `- ${hobby}`,
        delay: 200,
      })),
      {
        id: 13 + skills.length + hobbies.length,
        type: "command",
        content: "$ education",
        delay: 1500,
        typingSpeed: 95,
      },
      ...education.map((edu, index) => ({
        id: 14 + skills.length + hobbies.length + index,
        type: "output" as const,
        content: `- ${edu.degree} from ${edu.institution} (${edu.year})`,
        delay: 200,
      })),
      {
        id: 14 + skills.length + hobbies.length + education.length,
        type: "command",
        content: "$ echo 'Profile loaded successfully! ✨'",
        delay: 2200,
        typingSpeed: 70,
      },
      {
        id: 15 + skills.length + hobbies.length + education.length,
        type: "output",
        content: "Profile loaded successfully! ✨",
        delay: 400,
      },
      {
        id: 16 + skills.length + hobbies.length + education.length,
        type: "command",
        content: "$ ",
        delay: 1500,
        typingSpeed: 0,
      },
    ]
    setLinesToDisplay(generatedLines)
  }, [name, title, location, skills, github, email, aboutMe, hobbies, education])

  useEffect(() => {
    if (terminalRef.current && contentRef.current) {
      const terminal = terminalRef.current
      const content = contentRef.current
      terminal.scrollTo({
        top: content.scrollHeight - terminal.clientHeight,
        behavior: "smooth",
      })
    }
  }, [currentLineIndex, currentChar, linesToDisplay])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (linesToDisplay.length === 0) return
    if (currentLineIndex >= linesToDisplay.length) {
      setIsComplete(true)
      return
    }

    const currentLine = linesToDisplay[currentLineIndex]
    const isTypingLine = currentLine.type === "command" && currentLine.typingSpeed !== 0

    if (isTypingLine) {
      if (currentChar < currentLine.content.length) {
        const timeout = setTimeout(() => {
          setCurrentChar((prev) => prev + 1)
        }, currentLine.typingSpeed || 100)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1)
          setCurrentChar(0)
        }, currentLine.delay)
        return () => clearTimeout(timeout)
      }
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1)
        setCurrentChar(0)
      }, currentLine.delay)
      return () => clearTimeout(timeout)
    }
  }, [currentLineIndex, currentChar, linesToDisplay])

  const getLineColor = (type: string) => {
    switch (type) {
      case "command":
        return "text-green-400"
      case "output":
        return "text-gray-300"
      case "error":
        return "text-red-400"
      case "system":
        return "text-blue-400"
      case "comment":
        return "text-gray-500"
      default:
        return "text-gray-300"
    }
  }

  const getPrompt = (type: string) => {
    switch (type) {
      case "command":
        return ""
      case "system":
        return "→ "
      default:
        return ""
    }
  }

  if (!hasMounted) return null

  return (
    <div className="relative w-full max-w-3xl h-[500px] bg-black rounded-lg shadow-2xl overflow-hidden font-mono border border-gray-700">
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-gray-400 text-sm">Terminal — solomon</div>
        <div className="w-16"></div>
      </div>

      <div
        ref={terminalRef}
        className="p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
        style={{ height: "calc(100% - 36px)" }}
      >
        <div ref={contentRef} className="space-y-1 min-h-full">
          {linesToDisplay.slice(0, currentLineIndex + 1).map((line, index) => {
            const isCurrentLine = index === currentLineIndex
            const isTypingLine = line.type === "command" && line.typingSpeed !== 0
            const displayContent = isCurrentLine && isTypingLine ? line.content.slice(0, currentChar) : line.content

            return (
              <motion.div
                key={line.id}
                className={`${getLineColor(line.type)} flex items-start`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
              >
                <span className="text-gray-500 mr-2">{getPrompt(line.type)}</span>
                <span className="flex-1">
                  {displayContent}
                  {isCurrentLine && isTypingLine && showCursor && (
                    <motion.span
                      className="bg-green-400 text-black px-1"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      _
                    </motion.span>
                  )}
                </span>
              </motion.div>
            )
          })}

          {isComplete && (
            <motion.div className="text-green-400 flex items-center">
              <span className="text-gray-500 mr-2"></span>
              <span>$ </span>
              {showCursor && (
                <motion.span
                  className="bg-green-400 text-black px-1 ml-1"
                  animate={{ opacity: [1, 1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
                >
                  _
                </motion.span>
              )}
            </motion.div>
          )}

          <AnimatePresence>
            {isComplete && (
              <motion.div
                className="mt-8 text-green-400 text-xs leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
              >
                <pre>{`
╔══════════════════════════════════════╗
║                                      ║
║         PROFILE LOADED               ║
║                                      ║
║    Explore my journey and passions   ║
║                                      ║
╚══════════════════════════════════════╝
                `}</pre>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {hasMounted && (
        <>
          <div className="absolute inset-0 pointer-events-none opacity-5">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-green-400 text-xs"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{ opacity: [0, 1, 0], y: [0, 20, 0] }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              >
                {Math.random().toString(36).charAt(0)}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="absolute inset-0 pointer-events-none bg-green-400 mix-blend-multiply"
            animate={{ opacity: [0, 0.02, 0] }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              repeatDelay: Math.random() * 10,
            }}
          />
        </>
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-gray-800 px-4 py-1 text-xs text-gray-400 border-t border-gray-700">
        <div className="flex justify-between">
          <span>{currentTime}</span>
        </div>
      </div>
    </div>
  )
}
