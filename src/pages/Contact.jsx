import React from "react";

export const Contact = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <section className="relative overflow-hidden py-24 sm:py-28">

        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">

          <span className="text-pink-400 text-sm font-medium">
            ✦ Get In Touch
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl font-bold">
            Contact{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Us
            </span>
          </h1>

          <p className="mt-5 text-gray-400 leading-7">
            Have a question, suggestion or just want to say hello?
            We'd love to hear from you.
          </p>

        </div>

      </section>

      {/* Contact Section */}
      <section className="pb-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Contact Information */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">

              <span className="text-purple-400 text-sm">
                Contact Information
              </span>

              <h2 className="mt-3 text-3xl font-bold">
                Let's talk
              </h2>

              <p className="mt-4 text-gray-400 leading-7">
                Feel free to reach out to us. Whether you have feedback,
                questions or ideas, your message is always welcome.
              </p>

              <div className="mt-8 space-y-5">

                {/* Email */}
                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400">
                    @
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Email
                    </p>

                    <p className="text-gray-200">
                      hello@aniverse.com
                    </p>
                  </div>

                </div>

                {/* Location */}
                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                    ◉
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Location
                    </p>

                    <p className="text-gray-200">
                      Somewhere in the anime world
                    </p>
                  </div>

                </div>

                {/* Response */}
                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400">
                    ✦
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Response Time
                    </p>

                    <p className="text-gray-200">
                      Usually within 24 hours
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02]">

              <h2 className="text-2xl font-bold">
                Send us a message
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Fill out the form below and we'll get back to you.
              </p>

              <form className="mt-7 space-y-5">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm text-gray-300"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-pink-500/60 focus:ring-1 focus:ring-pink-500/30 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-pink-500/60 focus:ring-1 focus:ring-pink-500/30 transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm text-gray-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-gray-500 outline-none resize-none focus:border-pink-500/60 focus:ring-1 focus:ring-pink-500/30 transition"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 font-medium hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/20 transition duration-300"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};