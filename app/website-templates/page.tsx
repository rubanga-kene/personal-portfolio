import { FloatingNav } from "@/components/website-templates/FloatingNav";
import { ScrollProgress } from "@/components/scroll-progress";
import { Button } from "@/components/ui/button";
import { CreativeHero } from "@/components/creative-hero";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { GlassmorphicCard } from "@/components/glassmorphic-card";
import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import { TemplateCard } from "@/components/website-templates/TemplateCard";
import About from "@/components/website-templates/About";
import Benefits from "@/components/website-templates/Benefits";

export default function Templates() {
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
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Welcome to the</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Home of Elegance
              </span>
            </h1>
            <p className="text-xl text-white-400 max-w-[600px]">
              Give your business or organization the best professional digital
              identity with our various website templates.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="text-3xl">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                  <span className="relative z-10 flex items-center">
                    Contact Us Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </a>
            </div>
          </div>
          <div className=" hidden lg:block justify-center ">
            <CreativeHero />
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Templates Section */}
      <section id="templates" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className=" relative z-10">
          <SectionHeading
            title="Professional Templates"
            subtitle="Explore my templates"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <TemplateCard
              title="Solid Template"
              description="A versatile multipurpose template with a bold, modern design. 
              Great for businesses and organizations looking for a professional, 
              no-nonsense online presence."
              image="/templates/solid-template.png?height=400&width=600"
              demoUrl="https://solomon-solid-template.vercel.app/"
            />
            <TemplateCard
              title="Professional Portfolio"
              description="A feature-rich portfolio template with sections for 
              projects, case studies, testimonials, and a contact form — perfect for creatives 
              and professionals who want to showcase their full body of work.."
              image="/templates/portfolio-1.png?height=400&width=600"
              demoUrl="https://solomon-portfolio-1.vercel.app/"
            />
            <TemplateCard
              title="Startup Template"
              description="Crafted for new businesses and tech startups, this template highlights 
              your product or service with sections for features, pricing, testimonials, and calls to action."
              image="/templates/startup-template.png?height=400&width=600"
              demoUrl="https://startup-template-alpha.vercel.app/"
            />
            <TemplateCard
              title="Construction Services"
              description="Tailored for contractors and construction businesses, 
              this template includes service listings, project galleries, and request-a-quote 
              functionality to attract and convert clients."
              image="/templates/construction-template.png?height=400&width=600"
              demoUrl="https://construction-services-template.vercel.app/"
            />
            <TemplateCard
              title="Play Template"
              description="An all-in-one template for service-based businesses. 
              It comes with service listings, team bios, contact forms, and strong CTAs 
              to help you generate leads effectively."
              image="/templates/play-template.png?height=400&width=600"
              demoUrl="https://solomon-play.vercel.app/"
            />
            <TemplateCard
              title="Portfolio - Minimalist"
              description="A clean and lightweight design focused on simplicity 
              and elegance. Ideal for artists, freelancers, or designers who want 
              their work to take center stage without distractions.."
              image="/templates/portfolio-2.png?height=400&width=600"
              demoUrl="https://solomon-portfolio-2.vercel.app/"
            />
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <Benefits />

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
                      <a
                        className="text-gray-300 hover:text-zinc-100"
                        href="mailto:rubangakene20@gmail.com"
                      >
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
                      <a
                        className="text-gray-300 hover:text-zinc-100"
                        href="tel:+256780828358"
                      >
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
                      <a
                        className="text-gray-300 hover:text-zinc-100"
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
                      <a
                        className="text-gray-300 hover:text-zinc-100"
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
                src="/images/my-logo.png"
                width={100}
                height={100}
                alt="Logo"
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
