import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Founder = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0, transition: { duration: 1 } } : {}}
      className="bg-white py-16 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 overflow-hidden"
    >
      {/* Left Side: Founder Image & Name */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0, transition: { duration: 0.8 } } : {}}
        className="text-center md:w-1/2 w-full"
      >
        <img
          src="/assets/founder.jpg"
          alt="Founder"
          className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full shadow-lg border-4 border-blue-500 mx-auto"
        />
        <h3 className="mt-4 text-2xl font-bold text-gray-900">Mrs. Deepali Amol Shilimkar</h3>
        <p className="text-lg text-gray-600">Founder & Director</p>
      </motion.div>

      {/* Right Side: Thoughts Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0, transition: { duration: 0.8 } } : {}}
        className="max-w-2xl text-center md:text-left w-full md:w-1/2"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600">From the Founder’s Desk</h2>
        <p className="mt-4 text-lg text-gray-800 leading-relaxed">
          "Education is the most powerful tool we can use to shape a better future. At our preschool,
          we believe in nurturing young minds with love, creativity, and curiosity. Our mission is to
          create a safe and joyful environment where children can grow, learn, and explore their potential."
        </p>
        <p className="mt-4 text-lg text-gray-700 italic">— Mrs. Deepali Amol Shilimkar</p>
      </motion.div>
    </motion.div>
  );
};

export default Founder;
