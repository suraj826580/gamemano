"use client";

import { useState } from "react";
import { Bell } from "lucide-react";
import NotificationDropdown from "./NotificationDropdown";

export default function NotificationButton() {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-2 rounded-full hover:text-secondary transition-colors relative border hover:border-secondary"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        <Bell className="h-4 w-4 hover:text-secondary " fill="currentColor" />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      {/* Notification Dropdown */}
      {showNotifications && <NotificationDropdown />}
    </div>
  );
}
