import { useState, useEffect } from "react";
import "./App.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/parallax/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Loading from "./components/loading/Loading"; // Import the Loading component
import Cursor from "./components/cursor/Cursor";
import Experience from "./components/Experience/Experience";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false); // Hide loading screen after it completes
  };

  return (
    <div>
      {isLoading ? (
        <Loading onComplete={handleLoadingComplete} /> // Show loading screen first
      ) : (
        <>
        <Cursor/>
          <section id="Homepage">
            <Navbar />
            <Hero />
          </section>
          <section id="AboutMe">
            <a href="#"><Parallax type="aboutme" /></a>
          </section>
          <section><Services /></section>
          <section id="Projects">
            <a href="#"><Parallax type="portfolio" /> </a>
          </section>
          <Portfolio />
          <section id="Experience"><Experience/></section>
          
          <section id="Contact"><Contact /></section>
          
        </>
      )}
    </div>
  );
};

export default App;
