import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroProfile() {
  const trackRef = useRef(null);
  const heroHeight = "h-[85vh]";

  const images = [
    "https://picsum.photos/600/600?random=1",
    "https://picsum.photos/600/600?random=2",
    "https://picsum.photos/600/600?random=3",
    "https://picsum.photos/600/600?random=4",
    "https://picsum.photos/600/600?random=5",
    "https://picsum.photos/600/600?random=6",
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const scrollWidth = track.scrollWidth / 3;

    gsap.to(track, {
      x: -scrollWidth,
      ease: "none",
      duration: 25,
      repeat: -1,
    });

    gsap.to(".carrusel-item", {
      opacity: 1,
      duration: 0.8,
      stagger: 0.05,
      ease: "power2.out",
    });
  }, []);

  // Función para scroll suave
  const scrollToAbout = () => {
    const element = document.getElementById("about-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white w-full">
      {/* --- SECCIÓN HERO --- */}
      <div className={`relative overflow-hidden ${heroHeight} border-b border-gray-100`}>
        <section className="relative h-full w-full flex items-center justify-center">
          <div className="w-full flex items-center">
            <div ref={trackRef} className="flex gap-5 items-center whitespace-nowrap">
              {[...images, ...images, ...images].map((src, i) => (
                <div
                  key={i}
                  className={`carrusel-item flex-shrink-0 rounded-[24px] overflow-hidden shadow-md bg-gray-50 opacity-0
                    ${i % 2 === 0 ? "w-[320px] h-[320px]" : "w-[480px] h-[480px]"}
                  `}
                >
                  <img src={src} className="w-full h-full object-cover pointer-events-none" alt="" />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/90 backdrop-blur-xl p-8 rounded-lg shadow-2xl border border-gray-100 text-left max-w-md pointer-events-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
                Jonatan Gutierrez <br />
                <span className="text-slate-500 font-medium text-xl md:text-2xl">
                  Consultor DevOps
                </span>
              </h1>

              <div className="flex justify-end">
                <button
                  onClick={scrollToAbout}
                  className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-2 rounded-md text-sm font-medium transition-all active:scale-95 shadow-sm"
                >
                  Saber más
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}