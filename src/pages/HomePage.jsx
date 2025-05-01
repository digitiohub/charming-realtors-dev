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
        <HomeHero 
          theme="blue" 
          particleColors={["#4F46E5", "#3B82F6", "#60A5FA"]} 
        />
      </div>
      <HomeBadges theme="blue" />
      <HomeCTA theme="blue" />
      <HomeTestimonials theme="blue" />
    </div>
  );
};

export default HomePage;
