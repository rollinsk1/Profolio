import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Testimonials";
import axios from "axios";

export default function App() {
  return(
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Contact />
      <Navbar />
      <Projects />
      <Skills />
      <Testimonials />
    </main>
  )
}
