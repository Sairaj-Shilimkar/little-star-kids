import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Scroll Animation Component with Fade-in Effect
const ScrollAnimation = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

// Sample Images (Replace with actual URLs)
const galleryData = {
  "Classrooms": ["/assets/cs1.jpeg", "/assets/cr2.jpeg", "/assets/about.jpeg",],
  "Craft Activities": ["/assets/craft.jpeg", "/assets/home4.jpeg", "/assets/pre-school.jpeg",],
  "Annual Gathering": ["/assets/gathering.jpeg", "/assets/g2.jpeg", "/assets/g3.jpeg",],
  "Sports Activities": ["/assets/sports.jpeg", "/assets/sports2.jpeg", "/assets/sports3.jpeg", ],
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Classrooms");

  return (
    <div className="relative bg-orange-100">	
      {/* Background Image */}
      <motion.img
              src="/assets/gallery.jpeg"
              alt="About Us"
              className="w-[400px] h-[300px] md:w-full md:h-[400px] object-cover object-center mx-auto mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

      {/* Gallery Heading */}
      <ScrollAnimation>
        <div className="text-center mt-9">
          <h2 className="text-4xl font-bold text-gray-800">Our School Gallery</h2>
          <p className="mt-2 text-lg text-gray-600">Select a category to see images related to it</p>
        </div>
      </ScrollAnimation>

      {/* Category Tabs with Fade-in Effect */}
      <ScrollAnimation delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex justify-center gap-4 mt-6 px-4 md:px-20">
          {Object.keys(galleryData).map((category) => (
            <motion.button
              key={category}
              className={`py-3 px-6 rounded-lg text-lg font-semibold ${
                selectedCategory === category
                  ? "bg-gray-800 text-white"
                  : "bg-gray-300 text-gray-800"
              } transition-all duration-300`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </ScrollAnimation>

      {/* Gallery Images with Fade-in Effect */}
      <ScrollAnimation delay={0.2}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-6 md:px-20 pb-10">
          {galleryData[selectedCategory].map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={image} alt={`Gallery ${selectedCategory}`} className="w-full h-64 object-cover" />
            </motion.div>
          ))}
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Gallery;
