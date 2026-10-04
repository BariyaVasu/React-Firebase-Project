import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Register = () => {
  const { signupUser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signupUser(formData.email, formData.password);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 py-20">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />

      <div className="relative w-full max-w-md">
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-xl shadow-lg shadow-purple-500/20">
            ✦
          </div>

          <h1 className="mt-5 text-3xl font-bold">Create Account</h1>

          <p className="mt-2 text-gray-400 text-sm">
            Start your journey with AniVerse
          </p>
        </div>

        {/* Register Card */}
        <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
          <form className="space-y-5" onSubmit={handleFormSubmit}>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-300"
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                onChange={handleInputData}
                value={formData.email}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-pink-500/60 focus:ring-1 focus:ring-pink-500/30 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm text-gray-300"
              >
                Password
              </label>

              <input
                type="password"
                name="password"
                onChange={handleInputData}
                value={formData.password}
                placeholder="Create a password"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-pink-500/60 focus:ring-1 focus:ring-pink-500/30 transition"
              />
            </div>

            {/* Register Button */}
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 font-medium hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/20 transition duration-300">
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-pink-400 hover:text-pink-300 transition"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};
