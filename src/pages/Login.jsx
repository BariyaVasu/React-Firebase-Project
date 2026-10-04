import { use, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {
  const { signinUser, signinWithGoogle } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGoogleLogin = () => {
    signinWithGoogle();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signinUser(formData.email, formData.password);
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

          <h1 className="mt-5 text-3xl font-bold">Welcome Back</h1>

          <p className="mt-2 text-gray-400 text-sm">
            Sign in to continue your journey
          </p>
        </div>

        {/* Login Card */}
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
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-pink-500/60 focus:ring-1 focus:ring-pink-500/30 transition"
              />
            </div>

            {/* Login Button */}
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 font-medium hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/20 transition duration-300">
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-gray-500">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full py-3 rounded-xl border border-white/10 bg-white/[0.02] text-gray-300 hover:bg-white/[0.06] hover:border-white/20 transition flex items-center justify-center gap-3"
          >
            <span className="font-bold text-lg">G</span>

            <span>Sign in with Google</span>
          </button>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-pink-400 hover:text-pink-300 transition"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};
