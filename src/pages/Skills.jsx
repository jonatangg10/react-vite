import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import skillImg from "../../public/skills.png";
import skillsData from "../data/skills.json";

function Skills() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-22">
        <section className="text-black min-h-[60vh] flex items-center">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Skills
              </h1>
              <Link to="/">
                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-6 py-3 rounded-lg flex items-center gap-2 text-white font-semibold shadow-md transition-transform transform hover:scale-105">
                  Home <FiArrowRight className="text-xl" />
                </button>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.map((item, idx) => (
                <div
                  key={idx}
                  className="group h-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-2">
                    <img
                      src={skillImg}
                      alt=""
                      className="h-28 w-28 shrink-0 rounded-md object-contain"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Skills;