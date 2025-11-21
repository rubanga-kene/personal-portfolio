"use client"

import React, { useEffect, useRef, useState } from "react"
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
  height?: string | number
}

export default function HackerTerminal({
  name = "",
  title = "",
  location = "",
  skills = [],
  github = "",
  email = "",
  aboutMe = "",
  hobbies = [],
  education = [
    { degree: "", institution: "", year: "" },
  ],
  height = 500,
}: TerminalAnimationProps) {
  const [mounted, setMounted] = useState(false)
  const [lines, setLines] = useState<TerminalLine[]>([])
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [cursorOn, setCursorOn] = useState(true)
  const [complete, setComplete] = useState(false)
  const terminalRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setMounted(true)

    const now = new Date()
    const dateString = now.toLocaleDateString()
    const timeString = now.toLocaleTimeString()

    const generated: TerminalLine[] = [
      { id: 1, type: "system", content: `Last login: ${dateString} ${timeString}`, delay: 600 },
      { id: 2, type: "command", content: "$ whoami", delay: 800, typingSpeed: 80 },
      { id: 3, type: "output", content: name || "visitor", delay: 300 },
      { id: 4, type: "command", content: "$ about me", delay: 1000, typingSpeed: 70 },
      { id: 5, type: "output", content: aboutMe || "--", delay: 400 },
      { id: 6, type: "command", content: "$ contact", delay: 900, typingSpeed: 80 },
      { id: 7, type: "output", content: `Title: ${title}` , delay: 250},
      { id: 8, type: "output", content: `Location: ${location}` , delay: 250},
      { id: 9, type: "output", content: `Email: ${email}` , delay: 250},
      { id: 10, type: "output", content: `GitHub: ${github}` , delay: 250},
      { id: 11, type: "command", content: "$ skills", delay: 1100, typingSpeed: 75 },
      ...skills.map((s, i) => ({ id: 100 + i, type: "output" as const, content: `- ${s}`, delay: 120 })),
      { id: 200, type: "command", content: "$ hobbies", delay: 900, typingSpeed: 85 },
      ...hobbies.map((h, i) => ({ id: 300 + i, type: "output" as const, content: `- ${h}`, delay: 150 })),
      { id: 400, type: "command", content: "$ education", delay: 900, typingSpeed: 85 },
      ...education.map((e, i) => ({ id: 500 + i, type: "output" as const, content: `- ${e.degree} from ${e.institution} (${e.year})`, delay: 180 })),
      { id: 600, type: "command", content: "$ echo 'Profile loaded'", delay: 1200, typingSpeed: 70 },
      { id: 700, type: "output", content: "Profile loaded — ✨", delay: 400 },
      { id: 800, type: "command", content: "$ ", delay: 900, typingSpeed: 0 },
    ]

    setLines(generated)
  }, [name, title, aboutMe, skills, hobbies, education, github, email, location])

  // typing & line progression
  useEffect(() => {
    if (!lines.length) return
    if (index >= lines.length) {
      setComplete(true)
      return
    }

    const current = lines[index]
    const isTyping = current.type === "command" && (current.typingSpeed ?? 0) > 0

    if (isTyping) {
      if (charIndex < current.content.length) {
        const t = setTimeout(() => setCharIndex((c) => c + 1), current.typingSpeed ?? 80)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => {
          setIndex((i) => i + 1)
          setCharIndex(0)
        }, current.delay)
        return () => clearTimeout(t)
      }
    } else {
      const t = setTimeout(() => {
        setIndex((i) => i + 1)
        setCharIndex(0)
      }, current.delay)
      return () => clearTimeout(t)
    }
  }, [index, charIndex, lines])

  // cursor blink
  useEffect(() => {
    const id = setInterval(() => setCursorOn((s) => !s), 530)
    return () => clearInterval(id)
  }, [])

  // auto scroll
  useEffect(() => {
    if (!terminalRef.current || !contentRef.current) return
    const el = terminalRef.current
    const content = contentRef.current
    el.scrollTo({ top: content.scrollHeight, behavior: "smooth" })
  }, [index, charIndex, lines])

  const colorForType = (type: string) => {
    switch (type) {
      case "command":
        return "text-neon-green"
      case "output":
        return "text-slate-300"
      case "error":
        return "text-red-400"
      case "system":
        return "text-neon-blue"
      case "comment":
        return "text-slate-500"
      default:
        return "text-slate-300"
    }
  }

  const promptFor = (type: string) => (type === "command" ? "$" : type === "system" ? "→" : "")

  if (!mounted) return null

  return (
    <div className="relative w-full max-w-4xl rounded-xl overflow-hidden font-mono" style={{ height }}>
      {/* MATRIX RAIN LAYER */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="matrix-wrap w-full h-full">
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} className="matrix-col" style={{ left: `${(i / 28) * 100}%` }}>
              {Array.from({ length: 40 }).map((__, j) => (
                <span key={j} className="matrix-char">{String.fromCharCode(0x30 + Math.floor(Math.random() * 50))}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Terminal shell */}
      <div className="relative z-20 h-full bg-gradient-to-b from-[#041014] to-[#020205] border border-[#083a08] shadow-[0_10px_30px_rgba(0,0,0,0.6)] rounded-xl overflow-hidden">
        {/* header */}
        <div className="flex items-center justify-between px-4 py-2 bg-black/40 border-b border-[#073007]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_8px_rgba(255,95,87,0.2)]"></div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[0_0_8px_rgba(254,188,46,0.15)]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28ca41] shadow-[0_0_8px_rgba(40,202,65,0.2)]"></div>
          </div>

          <div className="text-sm text-slate-300/80">Terminal — {name || "guest"}</div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="px-2 py-0.5 rounded bg-black/20 border border-[#083a08]">SSH</span>
            <span className="px-2 py-0.5 rounded bg-black/20 border border-[#083a08]">v1.2</span>
          </div>
        </div>

        {/* content area */}
        <div ref={terminalRef} className="p-6 overflow-auto h-[calc(100%-72px)]">
          <div ref={contentRef} className="space-y-1 text-sm">
            {lines.slice(0, index + 1).map((line, i) => {
              const isCurrent = i === index
              const isTyping = line.type === "command" && (line.typingSpeed ?? 0) > 0
              const text = isCurrent && isTyping ? line.content.slice(0, charIndex) : line.content

              return (
                <motion.div
                  key={line.id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.16 }}
                  className={`flex items-start gap-3 ${colorForType(line.type)}`}
                >
                  <div className="text-slate-500/80 w-6 mt-0.5">{promptFor(line.type)}</div>
                  <div className="flex-1 leading-tight break-words whitespace-pre-wrap">{text}{isCurrent && isTyping && cursorOn && (
                    <motion.span className="inline-block ml-1 w-2 h-4 rounded-sm bg-neon-green text-black" animate={{ opacity: [1, 0] }} transition={{ duration: 0.45, repeat: Infinity }}>
                      &nbsp;
                    </motion.span>
                  )}</div>
                </motion.div>
              )
            })}

            {complete && (
              <div className="mt-6 text-neon-green text-sm">
                <pre className="whitespace-pre-wrap text-sm leading-snug">{
`╔════════════════════════════════════╗
║           PROFILE LOADED            ║
║   Welcome — explore my work & code  ║
╚════════════════════════════════════╝`
                }</pre>
              </div>
            )}

            {/* idle prompt */}
            {complete && (
              <div className="mt-4 text-neon-green flex items-center gap-2">
                <div className="text-slate-500/80 w-6">$</div>
                <div className="flex-1">{cursorOn ? <span className="inline-block w-2 h-4 rounded-sm bg-neon-green" /> : <span className="inline-block w-2 h-4" />}</div>
              </div>
            )}
          </div>
        </div>

        {/* footer */}
        <div className="px-4 py-2 bg-black/30 border-t border-[#073007] text-xs text-slate-400 flex justify-between">
          <div>connected</div>
          <div>{new Date().toLocaleTimeString()}</div>
        </div>
      </div>

      {/* decorative overlays */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <div className="scanline" />
        <div className="vignette" />
      </div>

      {/* styles */}
      <style>{`
        :root{
          --neon: #39ff14;
          --neon-2: #22e06a;
          --neon-blue: #66d9ff;
        }

        .text-neon-green{ color: var(--neon); text-shadow: 0 0 8px rgba(57,255,20,0.12), 0 0 18px rgba(57,255,20,0.06); }
        .bg-neon-green{ background: var(--neon); }
        .text-neon-blue{ color: var(--neon-blue); text-shadow: 0 0 8px rgba(102,217,255,0.09); }

        /* MATRIX RAIN */
        .matrix-wrap{ position:absolute; inset:0; overflow:hidden; z-index:10; mix-blend-mode:screen; opacity:0.06 }
        .matrix-col{ position:absolute; top:-10%; width:3.5%; font-size:12px; display:flex; flex-direction:column; gap:2px; align-items:flex-start; animation:colFall 9s linear infinite; }
        .matrix-col:nth-child(odd){ animation-duration:10s }
        .matrix-char{ display:block; transform:translateY(0); user-select:none }
        @keyframes colFall{ 0%{ transform:translateY(-120%) } 100%{ transform:translateY(120%) } }

        /* scanline + vignette */
        .scanline{ position:absolute; inset:0; background-image:linear-gradient(rgba(0,0,0,0) 49%, rgba(0,0,0,0.03) 50%, rgba(0,0,0,0) 51%); background-size:100% 6px; mix-blend-mode:overlay; opacity:0.35 }
        .vignette{ position:absolute; inset:0; box-shadow:inset 0 120px 220px rgba(0,0,0,0.55); }

        /* subtle flicker */
        @keyframes flicker{ 0%{ opacity:1 } 50%{ opacity:0.96 } 100%{ opacity:1 } }
        .matrix-wrap, .scanline{ animation: flicker 6s infinite }

        /* responsive fixes */
        @media (max-width:640px){ .matrix-col{ font-size:10px } }
      `}</style>
    </div>
  )
}
