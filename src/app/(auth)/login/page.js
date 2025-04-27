"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { useDispatch } from "react-redux";
import { LoginFunc } from "../../../redux/reducer/authReducer/action";
import { showAlert } from "../../../lib/helper";
import { useRouter } from "next/navigation";

let formValues = {
  email: "",
  password: "",
};
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setformData] = useState(formValues);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let res = dispatch(LoginFunc(formData));
    if (res?.status) {
      showAlert({
        title: res?.message,
        text: "Your account has been logged in successfully.",
        icon: "success",
        background: "#1a1a1a",
        color: "#ffffff",
        confirmButtonColor: "#00FF0A",
      });
      setTimeout(() => {
        router.push("/");
      }, 0);
    } else {
      showAlert({
        title: res?.message,
        text:
          res?.message == "Incorrect password"
            ? "The password you entered is incorrect."
            : "No account found with this email.",
        icon: "error",
        background: "#1a1a1a",
        color: "#ffffff",
        confirmButtonColor: "#00FF0A",
      });
    }
    setformData(formValues);
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col justify-center items-center p-4 ">
      <div className="w-full max-w-md">
        {/* Login Form */}
        <div className="bg-primary/20 rounded-xl border border-white/30 p-8 shadow-2xl shadow-yellow-500/5">
          <h1 className="font-wallpoet text-4xl text-cream mb-8 text-center">
            LOGIN
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6 ">
            <div className="space-y-2 ">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white "
              >
                Email
              </label>
              <input
                value={formData.email}
                onChange={handleChange}
                name="email"
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 bg-white/30 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cream text-cream font-poppins"
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-white"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                  required
                  className="w-full px-4 py-3 bg-white/30 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cream  text-white pr-10 font-poppins"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-cream text-primary font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Login <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-cream font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Social Login */}
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="w-full flex justify-center py-3 px-4 border border-gray-800 rounded-lg shadow-sm bg-cream  text-orimary/60 transition-colors">
              <span className="sr-only">Sign in with Google</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
              </svg>
            </button>
            <button className="w-full flex justify-center py-3 px-4 border border-gray-800 rounded-lg shadow-sm bg-cream  text-orimary/60 transition-colors">
              <span className="sr-only">Sign in with Discord</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
