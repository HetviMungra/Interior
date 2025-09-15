import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[27vh] md:h-screen bg-white overflow-hidden">
      
      {/* Background Image */}
      <img
        src="/Hero.png"
        alt="hero"
        className="w-full p-2 md:h-full object-fit-contain  md:object-cover rounded-3xl"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-Start md:justify-center lg:justify-start lg:py-30 items-center text-center z-10 sm:py-0 px-4 pt-12 md:pt-0">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide lg:tracking-widest text-[#704c2a]"
        >
          LIVE  WITH
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl sm:text-4xl md:text-8xl lg:text-9xl font-semiboldtracking-wide lg:tracking-widest text-[#704c2a] "
          style={{ fontFamily: "Camiro"}}
        >
          COMFORT
        </motion.h2>
      </div>

      {/* Bottom Right Scroll Message */}
      <div className="absolute  right-0 bottom-0 md:bottom-8 md:right-10 bg-white/90 px-6 py-2 rounded-tl-3xl rounded-br-3xl shadow-md ">
        <p className="text-black text-xs sm:text-sm md:text-lg font-extralight">
          Scroll To Explore
        </p>
      </div>
    </section>
  );
}
