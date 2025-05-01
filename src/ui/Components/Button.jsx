import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Button = ({
  // Content props
  children,
  icon = null,
  iconPosition = "left",

  // Style props
  variant = "primary", // 'primary', 'outline', or 'custom'
  color = "", // For 'custom' variant: 'blue', 'green', 'red', 'terracotta', etc.
  size = "medium", // 'small', 'medium', 'large'
  fullWidth = false,
  className = "",

  // Action props
  action = "button", // 'button', 'navigate', 'scroll', 'link'
  to = "", // For navigate and link actions
  section = "", // For scroll action
  onClick = null,

  // State props
  disabled = false,
  loading = false,

  // Animation props
  animate = true,
  customAnimation = {},
}) => {
  const navigate = useNavigate();

  // Spring animation config
  const springConfig = {
    type: "spring",
    stiffness: 400,
    damping: 10,
  };

  // Handle animations - removed translateY and scale from hover effect
  const motionProps = animate
    ? {
        whileHover: {
          ...customAnimation?.hover,
        },
        whileTap: {
          scale: 0.95,
          ...customAnimation?.tap,
        },
      }
    : {};

  // Size classes
  const sizeClasses = {
    small: "py-2 px-4 text-sm",
    medium: "py-3 px-8 text-base",
    large: "py-4 px-10 text-lg",
  };

  // Color classes
  const getColorClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-600 hover:bg-blue-700 text-white";
      case "outline":
        if (color === "terracotta") {
          return "bg-transparent border-2 border-[#b54426] text-[#b54426] hover:bg-[#fff5f2]";
        }
        return "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50";
      case "custom":
        if (color === "green") {
          return "bg-green-600 hover:bg-green-700 text-white";
        }
        if (color === "red") {
          return "bg-red-600 hover:bg-red-700 text-white";
        }
        if (color === "terracotta") {
          return "bg-[#b54426] hover:bg-[#d25a3a] text-white";
        }
        if (color === "accent") {
          return "bg-[#2d7c5e] hover:bg-[#3ca379] text-white";
        }
        // Default to the provided color
        return `bg-${color}-600 hover:bg-${color}-700 text-white`;
      default:
        return "bg-blue-600 hover:bg-blue-700 text-white";
    }
  };

  // Base classes - added cursor-pointer
  const buttonClasses = `
    ${getColorClasses()}
    ${sizeClasses[size] || sizeClasses.medium}
    ${fullWidth ? "w-full" : ""}
    rounded-full font-medium flex items-center justify-center 
    transition-colors duration-200 cursor-pointer
    ${disabled ? "opacity-60 cursor-not-allowed" : ""}
    ${className}
  `;

  // Handle click actions
  const handleClick = (e) => {
    if (disabled || loading) return;

    if (onClick) onClick(e);

    switch (action) {
      case "navigate":
        navigate(to);
        break;
      case "scroll":
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "link":
        // Handled by rendering a Link component
        break;
      default:
        // Default button behavior
        break;
    }
  };

  // Icon rendering
  const renderIcon = () => {
    if (!icon) return null;
    return (
      <span className={`${iconPosition === "left" ? "mr-2" : "ml-2"}`}>
        {icon}
      </span>
    );
  };

  // Content rendering
  const renderContent = () => (
    <>
      {iconPosition === "left" && renderIcon()}
      {loading ? "Loading..." : children}
      {iconPosition === "right" && renderIcon()}
    </>
  );

  // Button rendering based on action type
  if (action === "link" && to) {
    // External link
    if (to.startsWith("http")) {
      return (
        <motion.a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
          {...motionProps}
        >
          {renderContent()}
        </motion.a>
      );
    }

    // Internal link (React Router)
    return (
      <motion.div {...motionProps}>
        <Link to={to} className={buttonClasses}>
          {renderContent()}
        </Link>
      </motion.div>
    );
  }

  // Default button
  return (
    <motion.button
      onClick={handleClick}
      disabled={disabled || loading}
      className={buttonClasses}
      {...motionProps}
    >
      {renderContent()}
    </motion.button>
  );
};

export default Button;
