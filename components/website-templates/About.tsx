import Image from "next/image";
import { SectionHeading } from "../section-heading";
import { Rocket } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="mt-20">
      <div className=" ">
        <SectionHeading
          title="Here's What You Need to Know"
          subtitle="About"
        />
        <div className="rounded-xl mt-10 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/50 p-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center gap-10 ">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600">
                Get Started Fast with Ready-to-Use Templates
                </h2>
              <p className="mb-2">
                Explore a curated collection of templates designed to 
                inspire your website and jumpstart your project.
              </p>
              <p className="mb-2">
                Can’t find one that perfectly fits your vision? No worries — 
                We can create a custom template tailored specifically to your needs.
              </p>
              <p className="mb-2">
                Simply share your ideas, and we’ll bring your unique website concept to life. 
              </p>
              <div className="flex gap-4 mt-10 bg-pink-500 justify-center items-center rounded-b-xl p-1 ">
                <p className="text-2xl">Let&apos;s Go</p>
                <Rocket className="text-3xl"/>
              </div>
            </div>
            <Image
            className="rounded-xl"
              src="/images/image-hero.jpg"
              alt="CTA photo"
              width={500}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
