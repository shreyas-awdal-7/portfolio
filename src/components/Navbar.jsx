import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const links = [
    { id: 1, name: "Home", to: "home" },
    { id: 2, name: "About", to: "about" },
    { id: 3, name: "Skills", to: "skills" },
    { id: 4, name: "Projects", to: "projects" },
    { id: 5, name: "Services", to: "services" },
    { id: 6, name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed w-full bg-slate-900/90 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        <h1 className="text-3xl font-bold text-cyan-400">
          Shreyas<span className="text-white">.</span>
        </h1>

        <ul className="hidden md:flex gap-8 font-medium">
          {links.map((item) => (
            <li key={item.id}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-cyan-400 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {menu && (
        <div className="md:hidden bg-slate-900">
          <ul className="flex flex-col items-center py-6 gap-5">
            {links.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenu(false)}
                  className="cursor-pointer hover:text-cyan-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;