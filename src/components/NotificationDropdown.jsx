export default function NotificationDropdown() {
  const notifications = [
    {
      id: 1,
      title: "New Game Release",
      message: "Valorant has just been released! Check it out now.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      title: "Friend Request",
      message: "GamerX123 sent you a friend request",
      time: "5 hours ago",
      read: false,
    },
    {
      id: 3,
      title: "Sale Alert",
      message: "Summer sale is now live! Up to 70% off on selected games.",
      time: "1 day ago",
      read: true,
    },
  ];

  return (
    <div className="absolute right-0 mt-2 w-80 bg-primary border border-gray-800 rounded-lg shadow-lg z-50">
      <div className="p-3 border-b border-gray-800">
        <h3 className="font-medium">Notifications</h3>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-3 border-b border-gray-800 hover:bg-cream/30 hover:text-white transition-colors ${
              notification.read ? "opacity-70" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`w-2 h-2 rounded-full mt-1.5 ${
                  notification.read ? "bg-gray-600" : "bg-cream"
                }`}
              ></div>
              <div>
                <h4 className="font-medium text-sm">{notification.title}</h4>
                <p className="text-gray-400 text-xs mt-1">
                  {notification.message}
                </p>
                <span className="text-gray-500 text-xs mt-2 block">
                  {notification.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-2 text-center border-t border-gray-800">
        <button className="text-cream text-sm hover:text-text-cream/80 transition-colors">
          View All Notifications
        </button>
      </div>
    </div>
  );
}
