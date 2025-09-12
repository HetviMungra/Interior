import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function ChooseUs() {
  return (
    <section className="pb-25 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-[serif] leading-tight">
            WHY <br /> TO <br />
            <span className="block">CHOOSE</span>
            US?
          </h2>
        </motion.div>

        {/* Right Side Box */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#a97c51] text-white p-15 md:p-28 lg:p-56 relative shadow-lg"
        >
          {/* Top Label */}
          <div className="absolute -top-6 md:top-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 text-lg md:text-2xl bg-white px-6 md:py-3 py-1 flex items-center gap-3 text-[#a97c51] font-medium shadow ">
            <span>Trusted Clients</span>
            <Heart size={22} />
          </div>

          {/* Main Number */}
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mt-10">
            500+
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
