import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden ">

      {/* Background Image */}
      <img
        src="/hero-sofa.jpg"
        alt="hero"
        className="w-full h-full object-fill  rounded-b-3xl"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-top items-center text-center z-10 ">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl py-2 mt-25 font-light md:tracking-wide text-[#55391e]"
         
        >
          LIVE WITH
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-9xl tracking-wider py-2 font-light  text-[#55391e]"
        >
          COMFORT
        </motion.h2>
      </div>

      {/* Bottom Right Scroll Message */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-10 bg-white px-6 py-2 rounded-tl-3xl rounded-br-3xl shadow-md">
        <p className="text-gray-700 text-sm md:text-lg">Scroll To Explore</p>
      </div>
    </section>
  );
}
