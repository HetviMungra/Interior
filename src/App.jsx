
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Partners from "./components/Partners";
import ChooseUs from "./components/ChooseUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import './App.css'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Partners />
      <ChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
}

