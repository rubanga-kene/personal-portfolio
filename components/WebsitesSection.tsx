'use client'
import Image from "next/image";
import { SectionHeading } from "./section-heading";
import AnimatedCard from "../components/AnimatedCard";
// import { Button } from "./ui/button";
import { RocketIcon } from "lucide-react";

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
                the website exactly the way you envision it. Your design, your
                rules — nothing less.
              </p>
              <a href="/website-templates">
              <div className="group relative flex justify-center items-center text-zinc-600 text-sm font-bold">
                <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md">
                  <div className="bg-lime-200 flex items-center gap-1 p-2 rounded-sm">
                    <RocketIcon />
                    <span>Own The Best Website With Our Templates</span>
                    <RocketIcon />
                  </div>

                  <div className="shadow-md bg-lime-200 absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>

                  <div className="rounded-md bg-white group-hover:opacity-0 group-hover:scale-[115%] group-hover:delay-700 duration-500 w-full h-full absolute top-0 left-0">
                    <div className="border-b border-r border-white bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
                  </div>
                </div>

                {/* MAIN BUTTON */}
                <div
                  className="shadow-md flex items-center group-hover:gap-2 
                    bg-gradient-to-r from-purple-500 to-pink-500 
                    p-3 rounded-md cursor-pointer duration-300"
                >
                  {/* ⭐ CHANGED ICON → TEXT ⭐ */}
                  <span className="text-white font-semibold">Click Me</span>

                  <span className="text-[0px] group-hover:text-sm duration-300 text-white">
                    To Explore Elegance
                  </span>
                </div>
              </div>
              </a> 
            </div>
            {/* <Image
              className="rounded-xl"
              src="/images/image-hero.jpg"
              alt="CTA photo"
              width={500}
              height={350}
            /> */}

                  <AnimatedCard />


          </div>
        </div>
      </div>
    </section>
  );
}
