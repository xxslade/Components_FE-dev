import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // You can use any icon libnpm install lucide-react


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleSidebar = () => setCollapsed(prev => !prev);

  return (
    <div className="h-full">
      {/* Collapsed State */}
      {collapsed ? (
        <div className="h-full w-[60px] bg-[#0f172a] flex flex-col items-center justify-start py-4 shadow-lg">
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-blue-400 transition-all"
          >
            <Menu size={28} />
          </button>
        </div>
      ) : (
        // Full Sidebar State
        <div className="bg-[#0f172a] text-white w-[20vw] h-full font-sans border-r border-[#1e293b] shadow-2xl flex flex-col transition-all duration-300 ease-in-out">
          {/* Sticky Top Header */}
          <div className="sticky top-0 z-10">
            <div className="h-[10vh] flex items-center justify-between px-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-lg font-semibold text-white shadow-md">
              <span>Element HUB</span>
              <button onClick={toggleSidebar} className="text-white hover:text-blue-200">
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3 p-5 mt-4">
            {[
              { to: "/buttons", label: "Buttons" },
              { to: "/navbars", label: "Navbars" },
              { to: "/cards", label: "Cards" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `group relative flex items-center justify-start px-5 py-3 rounded-lg text-md font-medium tracking-wide transition-all duration-200
                ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg"
                    : "bg-[#1e293b] hover:bg-[#273549] hover:shadow-md"
                }`
                }
              >
                <span
                  className={`absolute left-0 h-full w-1 rounded-r-full transition-all duration-300 ${
                    location.pathname === to
                      ? "bg-purple-400"
                      : "group-hover:bg-blue-400"
                  }`}
                ></span>
                <span className="ml-2">{label}</span>
              </NavLink>
            ))}
          </div>

          {/* <div className="mt-auto mb-6 px-5 text-sm text-gray-400">
            Crafted by Mahtab
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
