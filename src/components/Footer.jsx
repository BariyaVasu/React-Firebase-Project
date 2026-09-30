import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo / About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold">✦</span>
              </div>

              <span className="text-xl font-bold text-white">AniVerse</span>
            </Link>

            <p className="text-gray-400 text-sm leading-6 max-w-sm">
              A simple anime-inspired space built with passion, creativity and a
              little bit of magic.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="text-gray-400 hover:text-pink-400 transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-400 transition"
              >
                X
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-400 transition"
              >
                IG
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-400 transition"
              >
                GH
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AniVerse. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Made with <span className="text-pink-500">♥</span> & React
          </p>
        </div>
      </div>
    </footer>
  );
};
