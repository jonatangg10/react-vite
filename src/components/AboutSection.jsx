import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="min-h-screen flex items-center justify-center px-6 py-20 md:px-24 bg-white"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Columna Izquierda */}
        <div className="space-y-8">
          <div className="w-16 h-16 bg-[#FFD600] rounded-full flex items-center justify-center shadow-inner">
            <span className="text-3xl">⚙️</span>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              DevOps Consultant <br />
              & Software Engineering Student
            </h2>
            
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-lg font-light">
              Consultor DevOps enfocado en automatización de procesos, 
              integración y despliegue continuo (CI/CD) y gestión de infraestructura.
              
              <br /><br />
              
              Estudiante de Ingeniería de Software con interés en arquitecturas 
              escalables y prácticas DevOps orientadas a la mejora continua.
            </p>
          </div>

          <div className="flex gap-8 text-slate-400 font-medium">
            <a href="#" className="hover:text-slate-900 transition-colors">GitHub</a>
            <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="relative flex justify-center md:justify-end">
          <div className="w-full max-w-[450px] aspect-[4/5] bg-gray-200 rounded-[50px] overflow-hidden rotate-3 hover:rotate-0 transition-all duration-700 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-8 border-white">
            <img 
              src="/south.png" 
              alt="Jonatan Gutierrez" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;