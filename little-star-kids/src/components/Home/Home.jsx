import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HomeSection from "./Vision&Mission";
import OurPrograms from "./OurPrograms";
import Founder from "./Founder";
import WhyChooseUs from "./WhyChooseUS";
import ParentsReviews from "./ParentsReviews";

// Importing Images for Slider
const images = [
  "/assets/home2.jpeg",
  "/assets/home3.jpeg",
  "/assets/home4.jpeg",
];

const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const Home = () => {
  return (
    <div className="bg-white">
      {/* Image Slider Section */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full mt-10"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <motion.img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[300px] md:h-[500px] object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* School Name & Tagline */}
      <motion.div
        className="text-center mt-6 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-4xl font-extrabold text-pink-600 drop-shadow-lg"
          animate={{
            scale: [1, 1.05, 1], // Slight popping effect
            textShadow: [
              "0px 0px 5px rgba(255, 105, 180, 0.6)",
              "0px 0px 10px rgba(224, 201, 83, 0)",
              "0px 0px 5px rgba(255, 105, 180, 0.6)",
            ],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        >
          Little Star Kids
        </motion.h1>
        <p className="text-md md:text-lg mt-1 font-semibold text-gray-700">
          Pre-School and Activity Center, Nasrapur
        </p>
      </motion.div>

      {/* Marquee Section */}
      <div className="w-full bg-gradient-to-r from-[#E6E6FA] to-[#FADADD] p-2 overflow-hidden mt-6">
        <motion.div
          className="text-gray-800 font-bold text-sm md:text-lg whitespace-nowrap"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          🌟 Enroll Now! 🌟 Admissions Open! 🌟 Fun Learning Experience! 🌟
        </motion.div>
      </div>

      {/* Noticeable Features Section */}
      <motion.div
        className="bg-gradient-to-r from-[#FADADD] to-[#E6E6FA] p-4 rounded-lg shadow-md mx-4 mt-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-pink-600">🎓 Programs Offered:</h2>
        <p className="text-gray-800 font-medium mt-2">
          Playgroup, Mini KG, Jr. KG, Sr. KG
        </p>
      </motion.div>

      {/* Other Sections */}
      <div>
        <HomeSection />
        <OurPrograms />
        <WhyChooseUs />
        <ParentsReviews />
        <Founder />
      </div>
    </div>
  );
};

export default Home;
