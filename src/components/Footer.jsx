import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white mt-10 text-center text-gray-600">
      <div className="flex flex-col md:flex-row justify-between px-6 max-w-7xl mx-auto">
        
        {/* Quick Links */}
        <motion.div 
          className="mb-8 md:mb-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl lg:text-4xl mb-2 text-black py-5 text-center md:text-left">
            Quick Links
          </h3>
          <ul className="space-y-4 lg:text-2xl text-center md:text-left font-extralight text-black">
            <li><a href="#" className="hover:text-[#a97c51] transition">HOME</a></li>
            <li><a href="#about" className="hover:text-[#a97c51] transition">ABOUT</a></li>
            <li><a href="#services" className="hover:text-[#a97c51] transition">SERVICES</a></li>
            <li><a href="#contacts" className="hover:text-[#a97c51] transition">CONTACTS</a></li>
          </ul>
        </motion.div>

        {/* Logo */}
        <motion.div 
          className="text-center mt-6 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img src="/logo-1.png" alt="logo" className="h-24 md:h-32 lg:h-40 mx-auto" />
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          className="text-black mt-8 md:mt-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="font-extralight text-xl lg:text-4xl text-black py-5">
            Say Hello!
          </h3>
          <p className="text-lg lg:text-2xl py-2">90863451X2</p>
          <p className="text-lg lg:text-2xl py-2">care@aceoninterio.com</p>
          <p className="text-lg lg:text-2xl">
            Vivekananda colony, Ward No. 13 <br />
            Mal bazar, West Bengal
          </p>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.p 
        className="mt-8 text-sm text-white p-2 mb-0"
        style={{ backgroundColor: "#a97c51" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        © 2025 All Copyrights are reserved by The RD GROUP OF INDUSTRIES
      </motion.p>
    </footer>
  );
}
