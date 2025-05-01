import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="font-bold text-xl text-blue-600">
            <motion.div
              whileHover={{
                translateY: -2,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
            >
              YourLogo
            </motion.div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {["/", "/about", "/projects", "/contact"].map((path, index) => (
              <NavLink
                key={path}
                to={path === "/" ? path : path.substring(1)}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-blue-600"
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
                  {path === "/"
                    ? "Home"
                    : path.substring(1).charAt(0).toUpperCase() +
                      path.substring(2)}
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
            <Menu size={24} />
          </motion.button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

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
