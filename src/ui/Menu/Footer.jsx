import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIconVariants = {
    hover: {
      translateY: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">YourCompany</h3>
            <p className="text-gray-600 mb-4">
              Creating beautiful experiences through innovative design and
              development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/projects", label: "Projects" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-600 hover:text-blue-500"
                  >
                    <motion.span
                      initial={{ translateX: 0 }}
                      whileHover={{ translateX: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      className="inline-block"
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { href: "https://github.com", icon: Github, label: "GitHub" },
                {
                  href: "https://twitter.com",
                  icon: Twitter,
                  label: "Twitter",
                },
                {
                  href: "https://linkedin.com",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:contact@example.com",
                  icon: Mail,
                  label: "Email",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <social.icon
                    className="text-gray-600 hover:text-blue-500"
                    size={20}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-center text-gray-500 text-sm">
          &copy; {currentYear} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
