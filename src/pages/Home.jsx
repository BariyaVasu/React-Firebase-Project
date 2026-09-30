import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 min-h-[calc(100vh-4rem)] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Hero Content */}
            <div>
              <span className="inline-block px-4 py-2 mb-6 rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-400 text-sm">
                ✦ Welcome to AniVerse
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                Enter Your
                <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Anime World
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-gray-400 text-base sm:text-lg leading-8">
                Discover a simple and beautiful anime-inspired experience.
                Explore, connect and enjoy a world created for anime lovers.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/register"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-medium hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 transition duration-300"
                >
                  Get Started
                </Link>

                <Link
                  to="/about"
                  className="px-6 py-3 rounded-full border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition duration-300"
                >
                  Explore More
                </Link>
              </div>
            </div>

            {/* Anime Illustration Area */}
            <div className="relative hidden lg:flex justify-center items-center">
              <div className="relative w-80 h-80">
                {/* Outer Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-600/20 blur-3xl" />

                {/* Circle */}
                <div className="absolute inset-8 rounded-full border border-pink-400/20 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl mb-4">✦</div>

                    <h2 className="text-2xl font-bold">AniVerse</h2>

                    <p className="text-gray-500 text-sm mt-2">
                      Your story begins here
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <span className="absolute top-5 right-12 text-pink-400 text-xl animate-pulse">
                  ✦
                </span>

                <span className="absolute bottom-10 left-4 text-purple-400 text-2xl animate-pulse">
                  ✧
                </span>

                <span className="absolute top-32 -left-2 text-pink-300">·</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-pink-400 text-sm font-medium">
              ✦ Why AniVerse?
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              A world made for you
            </h2>

            <p className="mt-4 text-gray-400">
              Simple, clean and inspired by the beauty of anime.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-pink-500/30 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition">
                ✦
              </div>

              <h3 className="text-lg font-semibold">Beautiful Design</h3>

              <p className="mt-3 text-gray-400 text-sm leading-6">
                A minimal interface inspired by modern anime aesthetics.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-purple-500/30 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition">
                ◈
              </div>

              <h3 className="text-lg font-semibold">Simple Experience</h3>

              <p className="mt-3 text-gray-400 text-sm leading-6">
                Everything is designed to keep your experience simple and
                enjoyable.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-pink-500/30 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition">
                ♡
              </div>

              <h3 className="text-lg font-semibold">Made With Love</h3>

              <p className="mt-3 text-gray-400 text-sm leading-6">
                Built with creativity, passion and a little anime magic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-10 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-br from-pink-500/10 to-purple-600/10">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to begin your journey?
            </h2>

            <p className="mt-4 text-gray-400">
              Create your account and step into the world of AniVerse.
            </p>

            <Link
              to="/register"
              className="inline-block mt-8 px-7 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-medium hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition duration-300"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
