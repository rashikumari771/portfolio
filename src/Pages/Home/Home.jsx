import React from "react";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Technologies from "../../Components/Technologies/Technologies";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
