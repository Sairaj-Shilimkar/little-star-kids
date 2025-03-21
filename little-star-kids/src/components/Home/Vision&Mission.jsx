import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  // Vision & Mission Data
  const slides = [
    {
      title: "Our Vision 🌟",
      text: "To create a nurturing environment where young minds can explore, learn, and grow with creativity and joy.",
    },
    {
      title: "Our Mission 🚀",
      text: "To provide a fun, safe, and stimulating learning experience that builds a strong foundation for lifelong learning.",
    },
  ];

  // Auto Slide Change Every 4 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative flex flex-col md:flex-row items-center justify-center gap-6 px-6 py-10 md:py-10 bg-white min-h-[85vh] overflow-hidden"
    >
      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-6 left-10 text-yellow-400 text-4xl md:text-5xl opacity-30"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        ⭐
      </motion.div>
      <motion.div
        className="absolute top-16 right-12 text-pink-400 text-3xl md:text-4xl opacity-30"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      >
        ✨
      </motion.div>

      {/* Left Side: Enlarged TV Frame for Laptops */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative w-full md:w-[50%] lg:w-[60%] max-w-lg lg:max-w-3xl flex justify-center"
      >
        <div className="tv-frame p-4 md:p-6 border-[10px] md:border-[12px] lg:border-[16px] border-gray-800 rounded-xl bg-gray-900 shadow-lg relative lg:scale-[1.3]">
          <a
            href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group w-full h-full"
          >
            <motion.img
              src="https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg"
              alt="School Preview"
              className="w-full h-full object-cover rounded-lg shadow-md transform transition duration-500 group-hover:scale-105"
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg"
              animate={{ opacity: [0.6, 0.8, 0.6] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <motion.div
                className="bg-white p-1.5 md:p-2 lg:p-2.5 rounded-full shadow-lg"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <svg
                  className="w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 16.5l6-4.5-6-4.5z" />
                </svg>
              </motion.div>
            </motion.div>
          </a>

          {/* TV Frame Legs */}
          <div className="tv-legs absolute -bottom-5 left-1/4 w-1/5 h-5 md:h-6 lg:h-8 bg-gray-800 rounded-md"></div>
          <div className="tv-legs absolute -bottom-5 right-1/4 w-1/5 h-5 md:h-6 lg:h-8 bg-gray-800 rounded-md"></div>
        </div>
        {/* Glow effect */}
        <motion.div
          className="absolute -z-10 w-56 md:w-72 lg:w-[28rem] h-56 md:h-72 lg:h-[28rem] bg-yellow-300 opacity-20 blur-3xl rounded-full top-[-10%] left-[-20%]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 6 }}
        ></motion.div>
      </motion.div>


      {/* Right Side: Larger Card for Laptops */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative w-full md:w-[50%] lg:w-[55%] max-w-lg lg:max-w-2xl p-6 md:p-8 lg:p-10 rounded-lg md:rounded-xl lg:rounded-2xl shadow-md bg-gradient-to-r from-[#ffafbd] via-[#ffc3a0] to-[#ffafbd] text-gray-900 flex flex-col justify-center items-center border border-white border-opacity-30 backdrop-blur-lg lg:scale-[1.1]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-10 text-center w-[90%]"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-[Poppins] drop-shadow-md">
              {slides[currentIndex].title}
            </h2>
            <p className="mt-3 text-md md:text-lg lg:text-xl leading-relaxed">
              {slides[currentIndex].text}
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default HomeSection;
