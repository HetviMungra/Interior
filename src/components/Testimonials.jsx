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
    {
      name: "ABHAY SINGH",
      role: "Surya Hotel",
      text: "I have been working with Aceon Interio for around 15 years now. They’ve always done a great job and been really easy to work with. We’re based in Varanasi and trust them completely.",
    },
    {
      name: "ABHAY SINGH",
      role: "Surya Hotel",
      text: "I have been working with Aceon Interio for around 15 years now. They’ve always done a great job and been really easy to work with. We’re based in Varanasi and trust them completely.",
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-white overflow-hidden">
      {/* Background big heading */}
      <h2 className="absolute inset-0 flex justify-center lg:items-center text-[10vw] md:text-[7vw] font-bold text-black uppercase tracking-wide text-center pointer-events-none ">
        WHAT OUR <br /> CUSTOMERS SAY
      </h2>

      {/* Foreground Cards */}
      <div className="relative grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 max-w-7xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#fdeee3] p-6 rounded-lg shadow-md relative mt-5 lg:my-15"
          >
              {/* Quote mark */}
            <span className="text-6xl text-[#000000] absolute top-4 left-4 ">
              “
            </span>

            <p className="text-sm text-gray-700 font-light pl-5">{r.role}</p>
            <h4 className="text-lg font-semibold tracking-wide mb-4">
              {r.name}
            </h4>

          

            <p className="text-gray-800 relative z-10 leading-relaxed mt-6">
              {r.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
