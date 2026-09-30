import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <span className="text-white font-bold text-lg">✦</span>
            </div>

            <span className="text-xl font-bold text-white tracking-wide group-hover:text-pink-400 transition">
              AniVerse
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-pink-400 transition duration-300 ${isActive ? "text-pink-400 " : "text-gray-300 "}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-pink-400 transition duration-300 ${isActive ? "text-pink-400 " : "text-gray-300 "}`
              }
            >
              About Us
            </NavLink>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-pink-400 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-5 py-2 rounded-full text-sm font-medium transition duration-300 ${
                  isActive
                    ? "bg-black border border-pink-400 text-pink-400"
                    : "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20"
                }`
              }
            >
              Login
            </NavLink>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-5 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-pink-400 transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-pink-400 transition"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-pink-400 transition"
              >
                Contact
              </Link>

              <div className="flex gap-3 pt-2">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-300 border border-white/10 rounded-lg"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
