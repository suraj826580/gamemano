import { Search, ShoppingBag, User } from "lucide-react";
import NotificationButton from "./NotificationButton";
import SearchInput from "./SearchInput";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 pt-2 z-50 backdrop-blur-sm  bg-primary">
      <div className="flex items-center justify-between h-16 px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center gap-8">
          {/* Navigation */}
          <nav className="hidden md:flex gap-6 font-poppins">
            <Link
              href="/"
              className="text-white hover:text-cream transition-colors"
            >
              Home
            </Link>
            <div className="h-7 w-px bg-white/30"></div>

            <Link
              href="/games"
              className="text-white  hover:text-cream transition-colors"
            >
              Game Store
            </Link>
            <div className="h-7 w-px bg-white/30"></div>

            <Link
              href="/leaderboard"
              className="text-white  hover:text-cream transition-colors"
            >
              Leaderboard
            </Link>
          </nav>
        </div>

        {/* Search and Actions */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center border border-gray-300 rounded-full px-4 py-2 w-80">
            <Search className="text-gray-300 h-4 w-4 text-white mr-3" />
            <SearchInput />
          </div>
          {/* Actions */}
          <div className="flex items-center gap-3 text-white/80">
            {/* Notifications */}
            <div className="relative">
              <NotificationButton />
            </div>
            <div className="h-7 w-px bg-white/30"></div>

            {/* Bag */}
            <button className="p-2 rounded-full transition-colors border hover:border-secondary">
              <ShoppingBag
                className="h-4 w-4 hover:text-secondary "
                fill="currentColor"
              />
            </button>
            <div className="h-7 w-px bg-white/30"></div>

            {/* User */}
            <button className="p-2 rounded-full transition-colors border hover:border-secondary">
              <User
                className="h-4 w-4 hover:text-secondary "
                fill="currentColor"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
