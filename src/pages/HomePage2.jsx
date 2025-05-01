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
          particleColors={["#b54426", "#d25a3a", "#e87654"]}
        />
      </div>
      <HomeBadges theme="terracotta" />
      <HomeCTA theme="terracotta" />
      <HomeTestimonials theme="terracotta" />
    </div>
  );
};

export default HomePage2;
