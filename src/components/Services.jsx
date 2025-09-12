import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { title: "Modular Kitchen", img: "/s-1.jpeg" },
    { title: "Wardrobe", img: "/s-2.jpeg" },
    { title: "Full Interior", img: "/s-3.jpeg" },
  ];

  return (
    <section id="services" className="relative py-20 px-6 overflow-hidden bg-white">
      {/* Background big heading */}
      <h2 className="absolute inset-0 flex justify-center lg:items-start md:items-start text-[13vw] px-5 md:text-[9vw] font-bold text-black uppercase tracking-wide pointer-events-none">
        OUR SERVICES
      </h2>

      {/* Foreground cards */}
      <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl lg:h-120 mx-auto lg:my-15 my-13">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="overflow-hidden  shadow-lg group relative"
          >
            {/* Image with hover effect */}
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-80 lg:h-120 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-left">
              <h3 className="text-white text-2xl lg:text-3xl font-semibold">
                {s.title}
              </h3>
              <div className="w-16 h-[3px] bg-white mt-2"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
