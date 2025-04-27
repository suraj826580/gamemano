"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, ArrowRight, User, Mail, Lock } from "lucide-react";
import { showAlert } from "../../../lib/helper";
import { useDispatch, useSelector } from "react-redux";
import { signupFunc } from "../../../redux/reducer/authReducer/action";
let formValues = {
  name: "",
  email: "",
  password: "",
};
export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setformData] = useState(formValues);
  const { userData } = useSelector((store) => store?.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    const isUserExists = userData?.some(
      (user) => user.email === formData.email
    );
    if (isUserExists) {
      showAlert({
        title: "Email already registered!",
        text: "Please try logging in or use a different email.",
        icon: "error",
        background: "#1E1D16",
        color: "#ffffff",
      });
      return;
    }
    dispatch(signupFunc(formData));
    showAlert({
      title: "Registration Successful!",
      text: "Your account has been created successfully.",
      icon: "success",
      background: "#1a1a1a",
      color: "#ffffff",
      confirmButtonColor: "#00FF0A",
    });
    setTimeout(() => {
      router.push("/login");
    }, 0);
    setformData(formValues);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        {/* Signup Form */}
        <div className="bg-primary/20 rounded-xl border border-gray-800 p-8 shadow-2xl shadow-yellow-500/5">
          <h1 className="font-wallpoet text-4xl text-cream mb-8 text-center">
            SIGN UP
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white/30 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cream text-white font-poppins"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white/30 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cream text-white font-poppins"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-white/30 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cream text-white font-poppins"
                  placeholder="Create a password"
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
              <p className="text-xs text-gray-400 mt-1">
                Password must be at least 8 characters long
              </p>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-700 rounded"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-white/30"
              >
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-cream hover:text-cream"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-cream hover:text-cream"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-cream text-primary font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Create Account <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-cream hover:text-yellow-400 font-medium"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>

        {/* Social Signup */}
        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-400">
                Or sign up with
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
