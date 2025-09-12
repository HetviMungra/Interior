import React from "react";
import { motion } from "framer-motion";

export default function Partners() {
  const logos = [
    "/godrej.jpeg",
    "/fevicol.jpeg",
    "/pidilite.jpeg",
    "/merino.jpeg",
    "/kaff.jpeg",
  ];

  return (
    <section className="w-full">
      {/* Quote Section */}
      <div className="bg-[#fdeede] py-12 px-6 text-center">
          <span className="text-9xl text-[#000000] ">
              “
          </span>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl italic font-light max-w-3xl mx-auto leading-relaxed"
        >
          
          "DO YOUR DUTY AND A LITTLE MORE. AND DO IT WITH 100% SINCERITY, WITHOUT EXPECTING ANYTHING IN RETURN."
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-4 text-lg font-serif"
        >
          GuruDev Sri Sri Ravishanker
        </motion.p>
      </div>

      {/* Trusted Partners Section */}
      <div className="py-12 bg-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-6"
        >
          OUR TRUSTED PARTNERS
        </motion.h2>
        <div className="w-32 mx-auto h-[2px] bg-black mb-10"></div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-10 px-6">
          {logos.map((logo, i) => (
            <motion.img
              key={i}
              src={logo}
              alt="partner"
              className="h-22 md:h-36 lg:h-56 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
