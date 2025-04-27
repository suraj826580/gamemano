"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Home,
  Settings,
  MessageSquare,
  LogOut,
  ShoppingBag,
  Trophy,
  CreditCard,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const sidebarRef = useRef(null);
  const expandedSidebarRef = useRef(null);
  const router = useRouter();

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div className="relative">
      {/* Collapsed sidebar */}
      <aside
        ref={sidebarRef}
        className="sticky top-0 h-screen w-16 bg-primary border-r border-gray-800 flex flex-col items-center py-6 z-40"
      >
        <Link href="/" className="text-cream font-pressStart text-2xl">
          GQ
        </Link>
        <nav
          className="flex flex-col items-center gap-8 mt-8"
          onMouseEnter={handleMouseEnter}
        >
          <Link href="/" className="p-2 rounded-lg ">
            <Home className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="p-2 rounded-lg  hover:text-cream transition-colors"
          >
            <MessageSquare className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="p-2 rounded-lg  hover:text-cream transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="p-2 rounded-lg  hover:text-cream transition-colors"
          >
            <CreditCard className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="p-2 rounded-lg  hover:text-[#DAB785] transition-colors"
          >
            <Trophy className="h-5 w-5" />
          </Link>
        </nav>

        <div className="w-12 h-px bg-gray-700 my-6"></div>

        <div className="flex flex-col items-center gap-8">
          <Link
            href="#"
            className="p-2 rounded-lg  hover:text-[#DAB785] transition-colors"
          >
            <Settings className="h-5 w-5" />
          </Link>
          <div
            onClick={() => {
              sessionStorage.setItem("login", false);
              router.push("/login");
            }}
            className="p-2 rounded-lg  hover:text-[#DAB785] transition-colors"
          >
            <LogOut className="h-5 w-5" />
          </div>
        </div>
      </aside>

      <div
        ref={expandedSidebarRef}
        className={`fixed top-0 left-0 h-screen w-72 bg-primary/80 backdrop-blur-md border-r border-gray-800 z-[9999] shadow-lg transform transition-all duration-700 ease-in-out ${
          isExpanded
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-cream font-pressStart mb-8">
            GameQuest
          </h1>

          <nav className="flex flex-col gap-8 mt-8">
            <Link
              href="/"
              className="flex items-center gap-3 text-white hover:text-cream transition-colors"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-3 text-white hover:text-cream transition-colors relative"
            >
              <div className="relative">
                <MessageSquare className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
              <span>Messages</span>
            </Link>

            <Link
              href="/games"
              className="flex items-center gap-3 text-white hover:text-cream transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Game Store</span>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-3 text-white hover:text-cream transition-colors"
            >
              <CreditCard className="h-5 w-5" />
              <span>Payments</span>
            </Link>

            <Link
              href="#"
              className="flex items-center gap-3 text-white hover:text-cream transition-colors"
            >
              <Trophy className="h-5 w-5" />
              <span>Leaderboard</span>
            </Link>
          </nav>

          {/* Divider */}
          <div className="w-full h-px bg-gray-500 my-6"></div>

          {/* Settings and Logout */}
          <div className="space-y-6">
            <Link
              href="#"
              className="flex items-center gap-3 text-white hover:text-cream transition-colors"
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>

            <div
              className="flex items-center gap-3 text-white hover:text-cream transition-colors"
              onClick={() => {
                sessionStorage.setItem("login", false);
                router.push("/login");
              }}
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
