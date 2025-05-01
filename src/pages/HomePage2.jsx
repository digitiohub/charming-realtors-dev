import React from "react";
import HomeHero from "../components/Home/HomeHero";
import HomeBadges from "../components/Home/HomeBadges";
import HomeCTA from "../components/Home/HomeCTA";
import HomeTestimonials from "../components/Home/HomeTestimonials";

const HomePage2 = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#8f3517] to-[#5c2211]">
        <HomeHero
          theme="terracotta"
          particleColors={["#FFFFFF", "#FFF5EE", "#FFFAF0"]}
        />
      </div>
      <HomeBadges theme="terracotta" />
      <HomeCTA theme="terracotta" />
      <HomeTestimonials theme="terracotta" />
    </div>
  );
};

export default HomePage2;
