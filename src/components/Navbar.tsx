import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [menuItems] = useState([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Try It Now", path: "/project" },
    { name: "Contribute", path: "/contribute" },
  ]);

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-gray-900/40 backdrop-blur-md p-4 shadow-lg rounded-full w-[853px] px-6 flex items-center justify-between space-x-8">
      {/* Website Name */}
      <h1 className="text-white text-xl font-bold">Niance Editor</h1>

      {/* Menu Items */}
      <ul className="flex space-x-6 bg-transparent rounded-full h-[50px] px-6 py-2">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`text-white px-6 py-2 rounded-full transition-all duration-300 ease-in-out text-lg font-semibold tracking-wide uppercase ${
                location.pathname === item.path
                  ? "bg-gray-700/40 text-white shadow-md"
                  : "hover:bg-gray-700 hover:bg-gray-700/20 hover:text-gray-300"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
