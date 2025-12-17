// Sidebar.jsx
const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: "🏠", active: true },
  { id: "find-mentors", label: "Find Mentors", icon: "🔍" },
  { id: "my-bookings", label: "My Bookings", icon: "🗓️" },
  { id: "purchase-history", label: "Purchase History", icon: "💰" },
  { id: "favorites", label: "Favorites", icon: "⭐" },
  { id: "wallet", label: "Wallet", icon: "💰" },
  { id: "settings", label: "Settings", icon: "⚙️" },
];

function Sidebar() {
  return (
    // Card container
    <aside className="w-56 bg-white rounded-xl shadow-md border border-gray-100">
      {/* Card inner padding */}
      <div className="pt-4 pb-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`flex w-full items-center gap-2 px-5 py-2 text-sm font-semibold
              ${
                item.active
                  ? "bg-teal-50 text-gray-900"
                  : "text-gray-800 hover:bg-gray-50"
              }`}
          >
            <span className="w-5 text-left">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
