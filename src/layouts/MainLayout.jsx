import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../ui/Menu/Navbar";
import Footer from "../ui/Menu/Footer";

const MainLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {/* Only show the navbar if NOT on the homepage */}
      {!isHomePage && <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
