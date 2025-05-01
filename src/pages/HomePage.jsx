// In HomePage.jsx
import React from "react";
import HomeHero from "../components/Home/HomeHero";
import HomeBadges from "../components/Home/HomeBadges";
import HomeCTA from "../components/Home/HomeCTA";
import HomeTestimonials from "../components/Home/HomeTestimonials";

const HomePage = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800">
        <HomeHero />
      </div>
      <HomeBadges />
      <HomeCTA />
      <HomeTestimonials />
      {/* Other sections go here */}
    </div>
  );
};

export default HomePage;
