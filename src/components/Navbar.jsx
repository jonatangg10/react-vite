import {
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className="bg-white fixed top-0 w-full z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" className="text-xl font-bold text-gray-900">
            JG / Jonatan Gutierrez
          </Link>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => setOpenMenu(link.name)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {link.path ? (
                <Link
                  to={link.path}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  {link.name}
                </Link>
              ) : (
                <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900">
                  {link.name}
                  <ChevronDownIcon className="h-3 w-3" />
                </button>
              )}

              {link.dropdown && openMenu === link.name && (
                <div className="absolute left-0 top-full bg-white border rounded shadow-md py-2">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;