import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Acerca de mí", path: "#about" },
    { name: "Habilidades", path: "#skills" },
    { name: "Contacto", path: "#contacto" },
  ];

  const handleClick = (e, path) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(path);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="bg-white fixed top-0 w-full z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-900">
          JG / Jonatan Gutierrez
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => setOpenMenu(link.name)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <a
                href={link.path}
                onClick={(e) => handleClick(e, link.path)}
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;