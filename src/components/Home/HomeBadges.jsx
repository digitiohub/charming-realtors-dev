import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Home, Users } from "lucide-react";

const HomeBadges = () => {
  // Spring animation configuration
  const springConfig = {
    type: "spring",
    stiffness: 100,
    damping: 15,
    mass: 1,
  };

  const badges = [
    {
      icon: <Award size={32} />,
      title: "Chartered Accountant",
      description: "Financial expertise you can trust",
    },
    {
      icon: <Briefcase size={32} />,
      title: "30+ Years @ Reliance Industries",
      description: "Corporate excellence & leadership",
    },
    {
      icon: <Home size={32} />,
      title: "100+ Projects Advised",
      description: "Proven real estate knowledge",
    },
    {
      icon: <Users size={32} />,
      title: "Trusted by 100+ Clients",
      description: "Satisfied homeowners & investors",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            ...springConfig,
          }}
        >
          Why Choose Our Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg border border-gray-100 shadow-sm hover:shadow-md"
                initial={{
                  opacity: 0,
                  translateY: 30,
                  translateX: index % 2 === 0 ? -10 : 10,
                }}
                whileInView={{
                  opacity: 1,
                  translateY: 0,
                  translateX: 0,
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * index,
                  ...springConfig,
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                {/* Curtain overlay */}
                <motion.div
                  className="absolute inset-0 bg-blue-800"
                  initial={{ scaleY: 0 }}
                  animate={{
                    scaleY: isHovered ? 1 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                  }}
                  style={{ transformOrigin: "top" }}
                />

                {/* Content */}
                <div className="flex flex-col items-center text-center p-6 relative z-10">
                  <motion.div
                    className={`p-3 rounded-full mb-4 ${
                      isHovered
                        ? "bg-blue-700 text-white"
                        : "bg-blue-50 text-blue-600"
                    }`}
                    animate={{
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    }}
                  >
                    {badge.icon}
                  </motion.div>

                  <motion.h3
                    className={`font-bold text-lg mb-2 ${
                      isHovered ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {badge.title}
                  </motion.h3>

                  <motion.p
                    className={isHovered ? "text-blue-100" : "text-gray-600"}
                  >
                    {badge.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeBadges;
