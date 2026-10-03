import React from "react";

export const About = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <span className="text-pink-400 text-sm font-medium">
            ✦ About AniVerse
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl font-bold">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              AniVerse
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-7">
            AniVerse is a simple anime-inspired platform created to bring
            together creativity, technology and the beautiful world of anime.
          </p>

        </div>
      </section>

      {/* About Content */}
      <section className="py-20 border-t border-white/5">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Illustration */}
            <div className="flex justify-center">

              <div className="relative w-72 h-72">

                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-600/20 blur-3xl" />

                <div className="relative w-full h-full rounded-3xl border border-white/10 bg-white/[0.03] flex items-center justify-center">

                  <div className="text-center">

                    <div className="text-7xl text-pink-400">
                      ✦
                    </div>

                    <h2 className="mt-4 text-2xl font-bold">
                      AniVerse
                    </h2>

                    <p className="mt-2 text-gray-500 text-sm">
                      Create • Explore • Enjoy
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Content */}
            <div>

              <span className="text-purple-400 text-sm">
                Our Story
              </span>

              <h2 className="mt-3 text-3xl font-bold">
                Built with creativity and passion
              </h2>

              <p className="mt-5 text-gray-400 leading-7">
                AniVerse was created with the idea of making a clean,
                modern and enjoyable digital experience inspired by anime.
              </p>

              <p className="mt-4 text-gray-400 leading-7">
                From the design to the smallest interactions, everything
                focuses on keeping the experience simple while maintaining
                an anime-inspired atmosphere.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <h3 className="text-2xl font-bold text-pink-400">
                    100%
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Creative
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <h3 className="text-2xl font-bold text-purple-400">
                    ∞
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Possibilities
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Values */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">

            <span className="text-pink-400 text-sm">
              ✦ What We Believe
            </span>

            <h2 className="mt-3 text-3xl font-bold">
              Simple things matter
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-pink-500/30 transition">
              <div className="text-3xl text-pink-400">
                ♡
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Passion
              </h3>

              <p className="mt-3 text-gray-400 text-sm leading-6">
                We believe great experiences start with genuine passion
                and creativity.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-purple-500/30 transition">
              <div className="text-3xl text-purple-400">
                ✦
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Creativity
              </h3>

              <p className="mt-3 text-gray-400 text-sm leading-6">
                We love experimenting with ideas and turning them into
                meaningful experiences.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-pink-500/30 transition">
              <div className="text-3xl text-pink-400">
                ◈
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Simplicity
              </h3>

              <p className="mt-3 text-gray-400 text-sm leading-6">
                Clean design and simple interactions are at the heart
                of AniVerse.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
};