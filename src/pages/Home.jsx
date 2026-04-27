import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import LogoCarousel from "../components/LogoCarousel"
import Contact from "../components/Contact";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="home" className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-22">
        <HeroCarousel />
        <AboutSection />
        <LogoCarousel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;