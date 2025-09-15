import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      name: "ABHAY SINGH",
      role: "Surya Hotel",
      text: "I have been working with Aceon Interio for around 15 years now. They’ve always done a great job and been really easy to work with. We’re based in Varanasi and trust them completely.",
    },
    {
      name: "ABHAY SINGH",
      role: "Surya Hotel",
      text: "I have been working with Aceon Interio for around 15 years now. They’ve always done a great job and been really easy to work with. We’re based in Varanasi and trust them completely.",
    },
    {
      name: "ABHAY SINGH",
      role: "Surya Hotel",
      text: "I have been working with Aceon Interio for around 15 years now. They’ve always done a great job and been really easy to work with. We’re based in Varanasi and trust them completely.",
    },
    {
      name: "ABHAY SINGH",
      role: "Surya Hotel",
      text: "I have been working with Aceon Interio for around 15 years now. They’ve always done a great job and been really easy to work with. We’re based in Varanasi and trust them completely.",
    },

  ];

  return (
    <section className="relative py-20 px-6 bg-white overflow-hidden">
      {/* Background big heading */}
      <h2
        className="absolute inset-0 flex justify-center lg:items-center text-[10vw] md:text-[7vw] lg:text-9xl font-bold text-black uppercase tracking-wide text-center pointer-events-none "
        style={{ fontFamily: "VELISTA" }}
      >
        WHAT OUR <br /> CUSTOMERS SAY
      </h2>

      {/* Scrolling container */}
      <div className="relative w-full overflow-hidden  ax-w-7xl mx-auto">
        <motion.div
          className="flex space-x-6 md:space-x-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-[350px] lg:min-w-[400px] bg-[#FFF0E3] p-6 rounded-lg shadow-md relative"
            >
              <p
                className="text-sm text-gray-700 font-light"
                style={{ fontFamily: "Poppins" }}
              >
                {r.role}
              </p>

              <span className="text-8xl  text-[#FFDDBF] absolute py-3">
                “
              </span>

              <h4
                className="text-lg tracking-wide py-1"
                style={{ fontFamily: "VELISTA" }}
              >
                {r.name}
              </h4>

              <p
                className="text-gray-800 relative z-10 leading-relaxed mt-6"
                style={{ fontFamily: "Poppins" }}
              >
                {r.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

       {/* Scrolling container */}
      <div className="relative w-full overflow-hidden mt-10 md:mt-30">
        <motion.div
          className="flex space-x-6 md:space-x-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-[350px] lg:min-w-[400px] bg-[#FFF0E3] p-6 rounded-lg shadow-md relative"
            >
              <p
                className="text-sm text-gray-700 font-light"
                style={{ fontFamily: "Poppins" }}
              >
                {r.role}
              </p>

              <span className="text-8xl text-[#FFDDBF] absolute py-3">
                “
              </span>

              <h4
                className="text-lg tracking-wide py-1"
                style={{ fontFamily: "VELISTA" }}
              >
                {r.name}
              </h4>

              <p
                className="text-gray-800 relative z-10 leading-relaxed mt-6"
                style={{ fontFamily: "Poppins" }}
              >
                {r.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
