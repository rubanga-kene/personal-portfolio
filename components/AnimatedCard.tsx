import Image from "next/image";
import React from "react";

const AnimatedCard = () => {
  return (
    <div className="relative w-[450px] h-[300px] bg-zinc-800/50 backdrop-blur-lg  grid place-content-center rounded-[10px] overflow-hidden transition-all duration-500 ease-in-out group">
      
      {/* Border */}
      <div className="absolute inset-0 border-2 border-[#bd9f67] opacity-0 rotate-[10deg] transition-all duration-500 ease-in-out group-hover:inset-[22.5px] group-hover:opacity-100 group-hover:rotate-0"></div>

      <div className="relative flex flex-col items-center justify-center h-full">
        {/* Single centered logo */}
        <div className="transition-transform duration-500 ease-in-out group-hover:scale-125">
          <Image
            src={'/images/my-logo.png'}
            alt="My Logo"
            width={150}
            height={150}
          />
          <span className="text-[#bd9f67] tracking-[5px] transition-opacity duration-500 ease-in-out group-hover:opacity-0">
            WEB SERVICES
          </span>
        </div>
      </div>

      {/* Bottom texts */}
      <span className="absolute left-1/2 top-[17px] -translate-x-1/2 text-[9px] uppercase px-[12px] py-0 bg-[#243137] text-[#bd9f67] tracking-[10px] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
        ELEGANCE
      </span>

      <span className="absolute left-1/2 bottom-[17px] -translate-x-1/2 text-[9px] uppercase px-[12px] py-0 bg-[#243137] text-[#bd9f67] tracking-[10px] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
        WEB SERVICES
      </span>
    </div>
  );
};

export default AnimatedCard;
