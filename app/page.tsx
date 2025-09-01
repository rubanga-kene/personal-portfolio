import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";

import { Button } from "../components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { Timeline } from "@/components/timeline";
import { Education } from "@/components/education";
import { ContactForm } from "../components/contact-form";
// import { CreativeHero } from "@/components/creative-hero";
import { FloatingNav } from "@/components/floating-nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";
import TerminalAnimation from "@/components/terminal-animation";


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden px-4">
     
    
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <span className="relative z-10">
                  Software Developer And Creative Inovator
                </span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I&apos;m</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Solomon Rubanga Kene
              </span>
            </h1>
            <p className="text-xl text-white-400 max-w-[600px]">
              I craft exceptional digital experiences with code, creativity, and
              a passion for innovation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                  <span className="relative z-10 flex items-center">
                    View Projects{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </a>
              <a href="/downloads/Rubanga-Kene-Solomon-CV.pdf" download>
                <Button
                  size="sm"
                  className="ml-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
                >
                  Download Resume
                </Button>
              </a>
              <a href="#contact">
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500"
                >
                  Contact Me
                </Button>
              </a>
            </div>
            <div className="flex gap-4 pt-4">
              <Link
                href="https://github.com/rubanga-kene"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-600/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/rubangakenesolomon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-600/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              
              <Link href="mailto:rubangakene20@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-600/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className=" hidden lg:block justify-center ">
           <TerminalAnimation
            name="Rubanga Kene Solomon"
            title="Full Stack Developer"
            location="Kampala, Uganda"
            skills={["React, TypeScript, Node.js, Python, Django, PostgreSQL, and more"]}
            github="github.com/rubanga-kene"
            email="rubangakene20@gmail.com"
            aboutMe="I craft exceptional digital experiences with code, creativity, and
              a passion for innovation."
            hobbies={["Reading", "Watching movies", "Playing football"]}
            education={[
              { degree: "B.Sc. Computer Science", institution: "Busitema University", year: "2022-2025" },
            ]}
          />
            {/* <CreativeHero /> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="About Me"
            subtitle="My Background And Journey"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                
                <Image
                  src="/images/me.png"
                  width={600}
                  height={600}
                  alt="Rubanga Kene Solomon"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 about bg-slate-50">
              <p className="text-lg text-slate-800">
                Adaptable and driven software developer with a strong academic background in 
                Computer Science and hands-on experience in both frontend and 
                backend web development.
              </p>
              <p className="text-lg text-slate-800 mt-4">
                Skilled in problem-solving, time management, and collaboration, with a 
                passion for applying technical knowledge to build innovative and effective 
                solutions. 

              </p>
              <p className="text-lg text-slate-800 mt-4">
                Thrives in team-oriented environments and is committed to contributing to 
                organizational success with a strong work ethic and growth mindset.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="space-y-1">
                  <div className="text-sm text-slate-600">Name</div>
                  <div className="font-medium text-gray-800">
                    Rubanga Kene Solomon
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-slate-600">Email</div>
                  <div className="font-medium text-blue-600">
                    <a href="mailto:rubangakene20@gmail.com">
                      rubangakene20@gmail.com
                    </a>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-slate-600">Location</div>
                  <div className="font-medium text-gray-800">
                    Kampala - Uganda
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-800">Availability</div>
                  <div className="font-medium text-green-700">
                    Open to opportunities
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a href="/downloads/Rubanga-Kene-Solomon-CV.pdf" download>
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="My Skills"
            subtitle="Technologies I Work With"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge level={80} iconPath="/icons/python.svg" />
            <SkillBadge level={75} iconPath="/icons/django.svg" />
            <SkillBadge level={80} iconPath="/icons/react.svg" />
            <SkillBadge level={80} iconPath="/icons/nextjs.svg" />
            <SkillBadge level={80} iconPath="/icons/js.svg" />
            <SkillBadge level={80} iconPath="/icons/tailwind.svg" />
            <SkillBadge level={85} iconPath="/icons/php.svg" />
            <SkillBadge level={85} iconPath="/icons/mysql.svg" />
            <SkillBadge level={80} iconPath="/icons/mongodb.svg" />
            <SkillBadge level={80} iconPath="/icons/wordpress.svg" />
            <SkillBadge level={80} iconPath="/icons/git.svg" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Featured Projects"
            subtitle="Some of My Recent Work"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Business Management System"
              description="An online web application for automating day to day business activities such as inventory
              management, sales, reports and analytics"
              tags={["Next.js", "TypeScript", "Tailwind CSS", "Django", "PostgreSQL"]}
              image="/images/business-manager.png?height=400&width=600"
              demoUrl="#"
              repoUrl="https://github.com/rubanga-kene/business-manager-frontend.git"
            />
            <ProjectCard
              title="DevsHub"
              description="An online platform where devlopers share matters on topics of common interest."
              tags={[
                "Django ",
                "Python",
                "HTM/CSS",
                "JavaScript",
                "PostgreSQL",
              ]}
              image="/images/devshub.png?height=400&width=600"
              demoUrl="#"
              repoUrl="https://github.com/rubanga-kene/devshub.git"
            />
            
            <ProjectCard
              title="Student Assessment System"
              description="A platform that schools can use to assess the performance of their students, make report cards among others."
              tags={["HTML", "CSS", "JavaScript", "PHP", "MySQL"]}
              image="/images/student-report.png?height=400&width=600"
              demoUrl="#"
              repoUrl="https://github.com/rubanga-kene/Assessment-Reports-Mgt-System.git"
            />

            <ProjectCard
              title="DealFlow Website"
              description="A beautiful website for dealflow company for several business purposes."
              tags={["React", "NextJS", "TypeScript", "Tailwind CSS"]}
              image="/images/dealflow.png?height=400&width=600"
              demoUrl="https://dealflowsdr.com/"
              repoUrl="#"
            />
            <ProjectCard
              title="My Portfolio Website"
              description="This portfolio website built with Next.js and Tailwind CSS."
              tags={["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]}
              image="/images/portfolio.png?height=400&width=600"
              demoUrl="#"
              repoUrl="https://github.com/rubanga-kene/personal-portfolio.git"
            />
            <ProjectCard
              title="Student Support Application"
              description="An online platform where students can obtain support from the different university departments."
              tags={["Flutter", "Dart", "Firebase"]}
              image="/images/support-app.png?height=400&width=600"
              demoUrl="#"
              repoUrl="https://github.com/rubanga-kene/student-support-app.git"
            />
            <ProjectCard
              title="Information Sharing System"
              description="An information sharing platform for the IEEE students Community of Busitema University"
              tags={["HTML", "CSS", "JavaScript", "PHP", "MySQL"]}
              image="/images/ieee.png?height=400&width=600"
              demoUrl="#"
              repoUrl="https://github.com/rubanga-kene/Infromation-Sharing-System.git"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Work Experience"
            subtitle="My Professional Journey"
          />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Education Experience"
            subtitle="My Education Journey"
          />

          <div className="mt-16">
            <Education />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's Work Together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">
                      <a className="text-gray-300 hover:text-zinc-100" href="mailto:rubangakene20@gmail.com">
                        rubangakene20@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Phone</div>
                    <div className="font-medium">
                      <a className="text-gray-300 hover:text-zinc-100" href="tel:+256780828358">
                        +256 780 828358
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">
                      <a className="text-gray-300 hover:text-zinc-100"
                        href="https://linkedin.com/in/rubangakenesolomon"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        linkedin.com/in/rubangakenesolomon
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">
                      <a className="text-gray-300 hover:text-zinc-100"
                        href="https://github.com/rubanga-kene/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/rubanga-kene
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>
                    Available for freelance work and full-time opportunities
                  </span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl mb-3l">
              <Image
                width={80}
                height={80}
                src="/images/my-logo.png"
                alt="Rubanga Kene Solomon"
                // className="w-full h-full object-cover"
              />
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Rubanga Kene Solomon. All rights
              reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://github.com/rubanga-kene"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/rubangakenesolomon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            
            <Link href="mailto:rubangakene20@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
