import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

const Navbar = ({ transparent = false, theme = "blue" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we're on the terracotta theme page
  const isTerracotta = location.pathname === "/home2" || theme === "terracotta";

  return (
    <>
      <header
        className={`${transparent ? "" : "sticky top-0"} z-40 w-full ${
          transparent ? "bg-transparent" : "bg-white shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className={`font-bold text-xl ${
              transparent
                ? "text-white"
                : isTerracotta
                ? "text-[#b54426]"
                : "text-blue-600"
            }`}
          >
            <motion.div
              whileHover={{
                translateY: -2,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              className="flex items-center gap-2"
            >
              <img
                src="/logos/logo_icon.png"
                alt="Logo"
                className={`h-[2em] w-auto ${
                  transparent ? "filter brightness-0 invert" : ""
                }`}
              />
            </motion.div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `font-semibold ${
                      transparent
                        ? "text-white"
                        : isTerracotta
                        ? "text-[#b54426]"
                        : "text-blue-600"
                    }`
                  : transparent
                  ? "text-gray-200 hover:text-white"
                  : "text-gray-800 hover:text-blue-500"
              }
            >
              <motion.div
                initial={{ translateY: 0 }}
                whileHover={{
                  translateY: -2,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
              >
                Home 1
              </motion.div>
            </NavLink>

            <NavLink
              to="/home2"
              className={({ isActive }) =>
                isActive
                  ? `font-semibold ${
                      transparent ? "text-white" : "text-[#b54426]"
                    }`
                  : transparent
                  ? "text-gray-200 hover:text-white"
                  : "text-gray-800 hover:text-[#d25a3a]"
              }
            >
              <motion.div
                initial={{ translateY: 0 }}
                whileHover={{
                  translateY: -2,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
              >
                Home 2
              </motion.div>
            </NavLink>

            {["about", "projects", "contact"].map((path) => (
              <NavLink
                key={path}
                to={`/${path}`} // Use absolute paths with leading slash
                className={({ isActive }) =>
                  isActive
                    ? `font-semibold ${
                        transparent
                          ? "text-white"
                          : isTerracotta
                          ? "text-[#b54426]"
                          : "text-blue-600"
                      }`
                    : transparent
                    ? "text-gray-200 hover:text-white"
                    : "text-gray-800 hover:text-blue-500"
                }
              >
                <motion.div
                  initial={{ translateY: 0 }}
                  whileHover={{
                    translateY: -2,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                >
                  {path.charAt(0).toUpperCase() + path.substring(1)}
                </motion.div>
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden"
            aria-label="Open menu"
          >
            <Menu
              size={24}
              className={
                transparent
                  ? "text-white"
                  : isTerracotta
                  ? "text-[#b54426]"
                  : "text-blue-600"
              }
            />
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        theme={isTerracotta ? "terracotta" : "blue"}
      />

      {/* Overlay when mobile menu is open */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
