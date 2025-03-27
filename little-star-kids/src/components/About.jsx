import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Scroll Animation Wrapper
const ScrollAnimation = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Background Image Section */}
      <motion.img
        src="/assets/about.jpeg"
        alt="About Us"
        className="w-[400px] h-[300px] md:w-full md:h-[400px] object-cover object-center mx-auto mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />


      {/* General Info Section */}
      <section className="py-10 px-6 md:px-20 bg-yellow-100">
        <ScrollAnimation>
          <motion.h2
            className="text-4xl font-bold text-center text-yellow-800"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            About Little Star Kids
          </motion.h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <motion.p
            className="mt-4 text-lg text-gray-700 text-center leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            At Little Star Kids, we believe that early childhood education should
            be a blend of academics, creativity, and personal growth...
          </motion.p>
        </ScrollAnimation>
      </section>

      {/* Life at School Section */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-200 to-indigo-300">
        <ScrollAnimation>
          <motion.h2
            className="text-4xl font-bold text-center text-indigo-900"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Life at <br /> Little Star Kids
          </motion.h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <motion.p
            className="mt-4 text-lg text-black text-center leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Our school is a vibrant place where children explore, learn, and
            grow through hands-on experiences and joyful activities.
          </motion.p>
        </ScrollAnimation>

        {/* Life at School Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {[
            {
              title: "Pre-School Activities",
              img: "/assets/pre-school.jpeg",
              desc: "A mix of storytelling, creative crafts, group activities...",
            },
            {
              title: "Annual Gatherings",
              img: "/assets/gathering.jpeg",
              desc: "Music, dance, and performances by our little stars...",
            },
            {
              title: "Sport Activities",
              img: "/assets/sports.jpeg",
              desc: "Running, jumping, yoga, and simple team games...",
            },
            {
              title: "Secure Environment",
              img: "/assets/secure.jpeg",
              desc: "CCTV surveillance and a child-friendly infrastructure...",
            },
          ].map((item, index) => (
            <ScrollAnimation key={index} delay={index * 0.2}>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
                whileHover={{ scale: 1.1 }}
              >
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-44 object-cover rounded-md"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                />
                <h3 className="text-2xl font-semibold mt-4 text-indigo-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 mt-2">{item.desc}</p>
              </motion.div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 px-6 md:px-20 bg-pink-100">
        <ScrollAnimation>
          <motion.h2
            className="text-4xl font-bold text-center text-pink-800"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Fee Structure
          </motion.h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <motion.p
            className="mt-4 text-lg text-gray-700 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            We offer an affordable and flexible fee structure...
          </motion.p>
        </ScrollAnimation>
      </section>

      {/* Google Map Location */}
      {/* Google Map Location */}
      <section className="py-16 px-6 md:px-20 bg-gray-200">
        <ScrollAnimation>
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            Our Location
          </motion.h2>
        </ScrollAnimation>
        <ScrollAnimation delay={0.1}>
          <motion.p
            className="mt-4 text-lg text-gray-700 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Visit us at our school campus...
          </motion.p>
        </ScrollAnimation>

        {/* Google Map Embed */}
        <div className="mt-8 flex justify-center">
          <motion.div
            className="w-full max-w-3xl h-64 md:h-80 shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d473.6198166429058!2d73.88515682793387!3d18.25772241017383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1742555949907!5m2!1sen!2sin"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>

        {/* Get Directions Button */}
        <div className="mt-6 text-center">
          <motion.a
            href="https://www.google.com/maps/dir/?api=1&destination=18.25772241017383,73.88515682793387"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 inline-block"
            whileHover={{ scale: 1.1 }}
          >
            Get Directions
          </motion.a>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
