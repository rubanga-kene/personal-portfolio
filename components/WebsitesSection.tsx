import Image from "next/image";
import { SectionHeading } from "./section-heading";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function WebsitesSection() {
  return (
    <section>
      <div className=" ">
        <SectionHeading
          title="Explore Amazing Website Templates"
          subtitle=" Websites for Grabs"
        />
        <div className="rounded-xl mt-10 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/50 p-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center items-center gap-10 ">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600">
                Discover Stunning Website Templates
                </h2>
              <p className="mb-10">
                Browse a variety of templates crafted in different styles, 
                designs, and layouts — all tailored to suit your unique needs.
              </p>
              <p className="mb-10">
                Fully customizable and flexible, our templates let you create 
                the website exactly the way you envision it. Your design, your rules — nothing less.
              </p>
              <a href="/website-templates">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0">
                  <span className="relative z-10 flex items-center">
                    Explore our website templates{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </a>
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
