import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const programs = [
  {
    title: "Free Summer Camp",
    image: "/assets/summer.webp",
    description: "An exciting summer adventure with fun-filled learning activities.",
  },
  {
    title: "Free Fire Camp",
    image: "/assets/fire.jpg",
    description: "A thrilling fire camp to ignite curiosity and team spirit.",
  },
  {
    title: "Craft Activities",
    image: "/assets/craft.jpeg",
    description: "Let your child's creativity shine with hands-on craft projects.",
  },
  {
    title: "Annual Gathering",
    image: "/assets/gathering.jpeg",
    description: "A grand celebration filled with performances and memories.",
  },
  {
    title: "Sports Activities",
    image: "/assets/sports.jpeg",
    description: "Encourage fitness and teamwork with engaging sports events.",
  },
];

const OurPrograms = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % programs.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0, transition: { duration: 1 } } : {}}
      className="relative bg-gradient-to-r from-blue-200 to-indigo-300 text-black py-10 flex flex-col items-center overflow-hidden"
    >
      {/* Background Themed Dots */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-blue-300 rounded-full opacity-30 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-24 h-24 bg-indigo-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-blue-400 rounded-full opacity-25 blur-xl animate-pulse"></div>

      <h2 className="text-4xl font-extrabold font-[Montserrat] text-center text-indigo-700 drop-shadow-lg mb-10">
        Our Programs
      </h2>

      {/* Cards Container */}
      <div className="relative w-full max-w-6xl flex justify-center overflow-hidden h-[350px]">
        {programs.map((program, index) => {
          const isActive = index === currentIndex;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{
                opacity: isActive ? 1 : 0.3,
                scale: isActive ? 1.1 : 0.9,
                x: isActive ? 0 : (index - currentIndex) * 300,
                filter: isActive ? "blur(0px)" : "blur(4px)",
              }}
              transition={{ duration: 0.6 }}
              className={`absolute bg-white text-gray-900 shadow-2xl rounded-xl p-6 w-[90%] md:w-[420px] h-[300px] sm:h-[320px] text-center transition-all ${
                isActive ? "z-10 scale-105" : "z-0"
              }`}
              style={{ borderRadius: "20px" }} // Fix for disappearing border-radius
            >
              <h3 className="text-2xl font-bold font-[Montserrat] text-blue-600 drop-shadow-md">
                {program.title}
              </h3>
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-36 sm:h-40 object-cover rounded-xl my-4 shadow-lg"
              />
              <p className="text-md font-medium overflow-hidden text-ellipsis">
                {program.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default OurPrograms;
