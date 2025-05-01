import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const HomeTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [cardHeight, setCardHeight] = useState("auto");

  // Spring configuration
  const springConfig = {
    type: "spring",
    stiffness: 100,
    damping: 15,
  };

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Mehta",
      position: "Business Owner",
      company: "Sunrise Enterprises",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      stars: 5,
      text: "The financial insights provided by the team were invaluable. They helped me identify a property that not only suits my family's needs but is also a sound investment with excellent appreciation potential.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "IT Professional",
      company: "Tech Solutions Inc.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      stars: 5,
      text: "As a first-time homebuyer, I was overwhelmed with options. Their chartered accountant background brought clarity to the financial aspects of my purchase, ensuring I made a well-informed decision.",
    },
    {
      id: 3,
      name: "Vikram Singh",
      position: "CFO",
      company: "Global Industries Ltd.",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      stars: 5,
      text: "Their 30+ years of corporate finance experience is evident in every consultation. They provided analytical insights that helped us make strategic property investments aligned with our long-term goals.",
    },
  ];

  // Calculate the maximum height of testimonials for consistent sizing
  useEffect(() => {
    setCardHeight("min-h-[220px] md:min-h-[180px]");
  }, []);

  // Handle navigation
  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Variants for animations
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, translateY: 20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{ ...springConfig, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from people who trusted our expertise for their
            real estate decisions.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <motion.div
            className="absolute -top-10 -left-4 text-blue-100 z-0 hidden md:block"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...springConfig, delay: 0.3 }}
          >
            <Quote size={80} />
          </motion.div>

          {/* Testimonial Cards - Fixed height container */}
          <div className="bg-white rounded-xl shadow-lg relative z-10 overflow-hidden border border-gray-100">
            <div className="p-8 md:p-10">
              <div className={`relative ${cardHeight}`}>
                <AnimatePresence custom={direction} initial={false}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      ...springConfig,
                      duration: 0.5,
                    }}
                    className="absolute inset-0 flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-10"
                  >
                    {/* Image and Info */}
                    <div className="flex flex-col items-center md:items-start md:min-w-[200px] md:border-r md:border-gray-200 md:pr-8">
                      {/* Person Image with decorative circle */}
                      <div className="relative mb-5">
                        <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white shadow-md">
                          <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-1.5">
                          <Quote size={16} className="text-white" />
                        </div>
                      </div>

                      <div className="text-center md:text-left">
                        <h4 className="font-bold text-xl text-gray-800 mb-1">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-blue-600 font-medium">
                          {testimonials[currentIndex].position}
                        </p>
                        <p className="text-gray-500 text-sm mb-3">
                          {testimonials[currentIndex].company}
                        </p>
                        <div className="flex justify-center md:justify-start">
                          {[...Array(testimonials[currentIndex].stars)].map(
                            (_, i) => (
                              <Star
                                key={i}
                                size={16}
                                fill="#FFB400"
                                color="#FFB400"
                              />
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Text - Vertically centered */}
                    <div className="flex-1 flex items-center justify-center">
                      <p className="text-gray-600 italic leading-relaxed text-lg">
                        "{testimonials[currentIndex].text}"
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-blue-600" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400 w-2.5"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
