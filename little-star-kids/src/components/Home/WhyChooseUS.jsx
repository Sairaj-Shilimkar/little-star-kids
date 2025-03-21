import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaBookOpen, FaChalkboardTeacher, FaScroll, FaGamepad, FaVideo, FaHeartbeat } from "react-icons/fa";

// Reason Cards Data
const reasons = [
  {
    title: "Best Phonics Learning Education",
    description: "We provide the best phonics-based learning approach to develop early reading skills.",
    icon: <FaBookOpen className="text-yellow-500 w-10 h-10" />,
    color: "bg-yellow-500",
  },
  {
    title: "Qualified and Caring Staff",
    description: "Our teachers are highly qualified and provide a nurturing environment for kids.",
    icon: <FaChalkboardTeacher className="text-blue-500 w-10 h-10" />,
    color: "bg-blue-500",
  },
  {
    title: "Academic Syllabus Designed by Experts",
    description: "Our curriculum is designed by early education experts for holistic development.",
    icon: <FaScroll className="text-orange-500 w-10 h-10" />,
    color: "bg-orange-500",
  },
  {
    title: "More than 100 Types of Educational Games",
    description: "We use interactive educational games to make learning fun and engaging.",
    icon: <FaGamepad className="text-purple-500 w-10 h-10" />,
    color: "bg-purple-500",
  },
  {
    title: "Entire School Using CCTV Camera",
    description: "Ensuring complete security with round-the-clock CCTV surveillance.",
    icon: <FaVideo className="text-green-500 w-10 h-10" />,
    color: "bg-green-500",
  },
  {
    title: "Yearly Dental, Eye, and Health Checkups",
    description: "We conduct annual checkups to ensure your child's health and well-being.",
    icon: <FaHeartbeat className="text-pink-500 w-10 h-10" />,
    color: "bg-pink-500",
  },
];

const WhyChooseUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0, transition: { duration: 1 } } : {}}
      className="py-16 bg-yellow-200 text-center"
    >
      {/* Section Title */}
      <motion.h2
        className="text-5xl font-extrabold font-[Montserrat] text-black mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
        transition={{ duration: 0.8 }}
      >
        Why Choose Us
      </motion.h2>
      <p className="text-lg text-black mb-10 px-6 md:px-20">
        Choosing the right preschool is a crucial decision to ensure early childhood development.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-20">
        {reasons.map((reason, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

          return (
            <motion.div
              ref={ref}
              key={index}
              className={`p-6 rounded-lg shadow-lg text-white flex flex-col items-center ${reason.color}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white mb-4 shadow-md">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-center">{reason.title}</h3>
              <p className="mt-2 text-sm text-center">{reason.description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
