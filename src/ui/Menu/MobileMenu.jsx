import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";

const MobileMenu = ({ isOpen, setIsOpen, theme = "blue" }) => {
  const isTerracotta = theme === "terracotta";

  return (
    <motion.div
      initial={{ translateX: "100%" }}
      animate={{
        translateX: isOpen ? 0 : "100%",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="fixed top-0 right-0 h-full w-[70%] bg-white shadow-lg z-50 flex flex-col"
    >
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-2">
          <img src="/logos/logo_icon.png" alt="Logo" className="h-8 w-auto" />
          <span
            className={`font-bold ${
              isTerracotta ? "text-[#b54426]" : "text-blue-600"
            }`}
          >
            
          </span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className={isTerracotta ? "text-[#b54426]" : "text-blue-600"}
        >
          <X size={24} />
        </button>
      </div>

      <nav className="flex flex-col gap-6 p-6">
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive
              ? `font-semibold ${
                  isTerracotta ? "text-[#b54426]" : "text-blue-600"
                }`
              : "text-gray-800 hover:text-blue-500"
          }
        >
          Home 1
        </NavLink>

        <NavLink
          to="/home2"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-[#b54426]"
              : "text-gray-800 hover:text-[#d25a3a]"
          }
        >
          Home 2
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive
              ? `font-semibold ${
                  isTerracotta ? "text-[#b54426]" : "text-blue-600"
                }`
              : "text-gray-800 hover:text-blue-500"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive
              ? `font-semibold ${
                  isTerracotta ? "text-[#b54426]" : "text-blue-600"
                }`
              : "text-gray-800 hover:text-blue-500"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive
              ? `font-semibold ${
                  isTerracotta ? "text-[#b54426]" : "text-blue-600"
                }`
              : "text-gray-800 hover:text-blue-500"
          }
        >
          Contact
        </NavLink>
      </nav>
    </motion.div>
  );
};

export default MobileMenu;
