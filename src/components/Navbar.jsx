import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="flex justify-between items-center px-6 py-4 shadow-sm bg-white sticky top-0 z-50 "
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <motion.div
        className="font-bold text-xl flex items-center gap-2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img src="/logo.png" alt="logo" className="h-16 md:h-20" />
      </motion.div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-black lg:text-2xl lg:px-6 font-light ">
        {["Home", "About", "Services", "Contacts"].map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
          >
            <a href={`#${item.toLowerCase()}`} className="hover:text-[#a97c51] transition">
              {item}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ul className="flex flex-col items-center gap-6 py-6 text-gray-700 font-medium">
            {["Home", "About", "Services", "Contacts"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#a97c51] transition"
                  onClick={() => setIsOpen(false)} // close menu on click
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
