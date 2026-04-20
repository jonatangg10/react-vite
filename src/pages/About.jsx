import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-22">
        <section className="text-black min-h-[60vh] flex items-center">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    About Me
                </h1>
                <p className="mt-6 text-gray-600 max-w-md">
                    Esta es la página About
                </p>
                <Link to="/">
                  <button className="mt-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 py-3 rounded-lg flex items-center gap-2 text-white font-semibold shadow-md transition-transform transform hover:scale-105">
                    Home <FiArrowRight className="text-xl" />
                  </button>
                </Link>
            </div>
            <div className="flex justify-center">
              <img
                src="../public/foto.png"
                alt="avatar"
                className="w-[350px]"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About