import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuItems] = useState([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Try It Now", path: "/project" },
    { name: "Contribute", path: "/contribute" },
  ]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 p-2 md:p-4 shadow-lg w-full">
      <div className="max-w-[853px] mx-auto px-3 md:px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-base md:text-xl font-bold whitespace-nowrap">Niance Editor</h1>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <ul className="hidden md:flex space-x-6 bg-transparent rounded-full h-[50px] px-6 py-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`text-white px-6 py-2 rounded-full transition-all duration-300 ease-in-out text-lg font-semibold tracking-normal uppercase ${
                    location.pathname === item.path
                      ? "bg-gray-700/40 text-white shadow-md"
                      : "hover:bg-gray-700/20 hover:text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`block px-4 py-2 text-base font-medium text-white rounded-lg ${
                    location.pathname === item.path
                      ? "bg-gray-700/40 text-white"
                      : "hover:bg-gray-700/20 hover:text-gray-300"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
