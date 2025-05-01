import React from "react";
import { motion } from "framer-motion";
import Particles from "../../ui/Particles/Particles";

const HomeHero = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#4F46E5", "#3B82F6", "#60A5FA"]}
          particleCount={500}
          particleSpread={12}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          particleHoverFactor={1.5}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.17, 0.67, 0.83, 0.67],
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Building The Future
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.17, 0.67, 0.83, 0.67],
          }}
        >
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-100">
            Turning ideas into reality with innovative solutions and
            cutting-edge technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.17, 0.67, 0.83, 0.67],
          }}
        >
          <motion.button
            whileHover={{
              translateY: -5,
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full text-lg"
          >
            Explore Projects
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;
