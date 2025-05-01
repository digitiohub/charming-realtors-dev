import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../ui/Menu/Navbar";
import Footer from "../ui/Menu/Footer";

const MainLayout = () => {
  const location = useLocation();

  // Check if we're on either homepage
  const isHomePage =
    location.pathname === "/" || location.pathname === "/home2";

  return (
    <>
      {/* Only show the navbar if NOT on either homepage */}
      {!isHomePage && <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
