import React from "react";
import { motion } from "framer-motion";
import Particles from "../../ui/Particles/Particles";
import { MessageCircle } from "lucide-react";
import Button from "../../ui/Components/Button";

const HomeHero = () => {
  // Spring configuration for smoother animations
  const springConfig = {
    type: "spring",
    stiffness: 250,
    damping: 20,
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#4F46E5", "#3B82F6", "#60A5FA"]}
          particleCount={1000}
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
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ...springConfig,
          }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
            Your Real Estate Journey, Guided by
            <br className="hidden md:block" />
            30+ Years of Excellence
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ...springConfig,
          }}
        >
          <p className="text-lg md:text-xl mb-10 max-w-3xl text-gray-100">
            Our team of former Finance Executives and Chartered Accountants
            transforms complex property decisions into clear, confident
            investments for your future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ...springConfig,
          }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Button
            variant="primary"
            action="navigate"
            to="/projects"
            size="large"
          >
            Explore Properties
          </Button>

          <Button
            variant="custom"
            color="green"
            action="link"
            to="https://wa.me/1234567890" // Replace with your WhatsApp number
            size="large"
            icon={<MessageCircle size={20} />}
          >
            Connect with an Advisor
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeHero;
