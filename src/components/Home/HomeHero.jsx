import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "../../ui/Particles/Particles";
import { MessageCircle, Menu, X } from "lucide-react";
import Button from "../../ui/Components/Button";
import { NavLink } from "react-router-dom";

const HomeHero = ({ theme = "blue", particleColors }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Theme-specific styles
  const themeStyles = {
    blue: {
      buttonPrimary: "primary",
      buttonSecondary: "custom",
      buttonColor: "green",
    },
    terracotta: {
      buttonPrimary: "custom",
      buttonSecondary: "custom",
      buttonColor: "terracotta",
    },
  };

  const styles = themeStyles[theme] || themeStyles.blue;

  // Spring configuration for smoother animations
  const springConfig = {
    type: "spring",
    stiffness: 250,
    damping: 20,
  };

  return (
    <div className="relative w-full h-[100svh] sm:h-[100vh] overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={particleColors || ["#4F46E5", "#3B82F6", "#60A5FA"]}
          particleCount={1000}
          particleSpread={12}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          particleHoverFactor={1.5}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Navbar - Placed directly in the hero */}
      <div className="relative z-20">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="font-bold text-xl text-white">
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-white"
                  : "text-gray-200 hover:text-white"
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
                  ? "font-semibold text-white"
                  : "text-gray-200 hover:text-white"
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

            {["/about", "/projects", "/contact"].map((path, index) => (
              <NavLink
                key={path}
                to={path.substring(1)}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-white"
                    : "text-gray-200 hover:text-white"
                }
              >
                <motion.div
                  initial={{ translateY: 0 }}
                  whileHover={{
                    translateY: -2,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                >
                  {path.substring(1).charAt(0).toUpperCase() +
                    path.substring(2)}
                </motion.div>
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-white"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ translateX: "100%" }}
        animate={{
          translateX: isMenuOpen ? 0 : "100%",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="fixed top-0 right-0 h-full w-[70%] bg-white shadow-lg z-50 flex flex-col"
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-6 p-6">
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? `font-semibold ${
                    theme === "terracotta" ? "text-[#b54426]" : "text-blue-600"
                  }`
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Home 1
          </NavLink>

          <NavLink
            to="/home2"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? `font-semibold ${
                    theme === "terracotta" ? "text-[#b54426]" : "text-blue-600"
                  }`
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Home 2
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? `font-semibold ${
                    theme === "terracotta" ? "text-[#b54426]" : "text-blue-600"
                  }`
                : "text-gray-800 hover:text-blue-500"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? `font-semibold ${
                    theme === "terracotta" ? "text-[#b54426]" : "text-blue-600"
                  }`
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? `font-semibold ${
                    theme === "terracotta" ? "text-[#b54426]" : "text-blue-600"
                  }`
                : "text-gray-800 hover:text-blue-500"
            }
          >
            Contact
          </NavLink>
        </nav>
      </motion.div>

      {/* Overlay when mobile menu is open */}
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

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100%-70px)] px-4 text-center">
        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ...springConfig,
          }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
            Your Real Estate Journey, Guided by
            <br className="hidden md:block" />
            30+ Years of Excellence
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ...springConfig,
          }}
        >
          <p className="text-lg md:text-xl mb-10 max-w-3xl text-gray-100">
            Our team of former Finance Executives and Chartered Accountants
            transforms complex property decisions into clear, confident
            investments for your future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ...springConfig,
          }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Button
            variant={styles.buttonPrimary}
            action="navigate"
            to="/projects"
            size="large"
            color={theme === "terracotta" ? "terracotta" : ""}
          >
            Explore Properties
          </Button>

          <Button
            variant={styles.buttonSecondary}
            color={theme === "terracotta" ? "accent" : "green"}
            action="link"
            to="https://wa.me/1234567890" // Replace with your WhatsApp number
            size="large"
            icon={<MessageCircle size={20} />}
          >
            Connect with an Advisor
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;
