import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

// Parent Reviews Data
const reviews = [
  {
    name: "Anita Sharma",
    feedback:
      "This preschool is the best decision we made for our child! The phonics learning and caring staff made a huge difference.",
  },
  {
    name: "Rohit Mehta",
    feedback:
      "Amazing learning environment! My child loves the activities and interactive games. Highly recommended!",
  },
  {
    name: "Pooja Verma",
    feedback:
      "The school’s expert-designed syllabus and CCTV security made us feel confident in our choice. Great experience!",
  },
  {
    name: "Suresh Nair",
    feedback:
      "The staff is very professional and caring. My kid enjoys every day here. Special thanks to the teachers!",
  },
];

const ParentsReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Auto Slide Change Every 5 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0, transition: { duration: 1 } } : {}}
      className="py-16 bg-blue-100 text-center"
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-blue-900 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
        transition={{ duration: 0.8 }}
      >
        What Parents Say
      </motion.h2>
      <p className="text-lg text-gray-700 mb-10 px-6 md:px-20">
        Hear from parents who have experienced our preschool’s nurturing and
        high-quality education.
      </p>

      {/* Reviews Carousel */}
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="p-8 bg-white shadow-lg rounded-lg text-center flex flex-col items-center"
            >
              <FaQuoteLeft className="text-blue-400 text-4xl mb-3" />
              <p className="text-lg text-gray-800 italic">
                "{reviews[currentIndex].feedback}"
              </p>
              <h3 className="text-xl font-semibold mt-4 text-blue-900">
                - {reviews[currentIndex].name}
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Buttons for More Reviews & Add Review */}
      <motion.div
        className="mt-10 flex flex-col md:flex-row justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a
          href="https://www.google.com/search?q=preschool+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition"
        >
          Read More Reviews
        </a>
        <a
          href="https://www.google.com/maps/place/YOUR-PRESCHOOL-NAME/reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-green-700 transition"
        >
          Add a Review
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ParentsReviews;
