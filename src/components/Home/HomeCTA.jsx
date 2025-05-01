import React from "react";
import { motion } from "framer-motion";
import { Folder, MessageCircle, Calendar } from "lucide-react";
import Button from "../../ui/Components/Button";

const HomeCTA = () => {
  const springConfig = {
    type: "spring",
    stiffness: 100,
    damping: 15,
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ ...springConfig, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Perfect Property?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Our team of experts is ready to guide you through every step of your
            real estate journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Project CTA */}
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.1, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white/10 rounded-full p-5 mb-4 backdrop-blur-sm">
              <Folder size={32} className="text-blue-100" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Browse Properties</h3>
            <p className="text-blue-100 text-center mb-6">
              Explore our curated selection of premium properties.
            </p>
            <Button
              variant="primary"
              action="navigate"
              to="/projects"
              size="medium"
              className="bg-white text-blue-800 hover:bg-blue-50"
            >
              View Our Projects
            </Button>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white/10 rounded-full p-5 mb-4 backdrop-blur-sm">
              <MessageCircle size={32} className="text-blue-100" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Support</h3>
            <p className="text-blue-100 text-center mb-6">
              Get answers to your questions right away via WhatsApp.
            </p>
            <Button
              variant="custom"
              color="green"
              action="link"
              to="https://wa.me/1234567890" // Replace with your WhatsApp number
              size="medium"
              icon={<MessageCircle size={18} />}
            >
              Chat on WhatsApp
            </Button>
          </motion.div>

          {/* Schedule Call CTA */}
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.3, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white/10 rounded-full p-5 mb-4 backdrop-blur-sm">
              <Calendar size={32} className="text-blue-100" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Personal Consultation
            </h3>
            <p className="text-blue-100 text-center mb-6">
              Book a call with our expert advisory team.
            </p>
            <Button
              variant="outline"
              action="link"
              to="/contact#calendar"
              size="medium"
              className="border-white text-white hover:bg-white/10"
              icon={<Calendar size={18} />}
            >
              Schedule a Call
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
