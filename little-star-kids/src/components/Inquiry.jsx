import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import toast, { Toaster } from "react-hot-toast";

// Scroll Animation Component
const ScrollAnimation = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

const Inquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    village: "",
    admissionYear: "",
    query: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      errors.phone = "Enter a valid 10-digit number";
    if (!formData.village.trim()) errors.village = "Village name is required";
    if (!formData.admissionYear) errors.admissionYear = "Select admission year";
    if (!formData.query.trim()) errors.query = "Query cannot be empty";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Clear form fields immediately
    setFormData({
      name: "",
      phone: "",
      village: "",
      admissionYear: "",
      query: "",
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "732ce86b-f0ae-4d2d-9f75-8c44bd91634f", // Replace with actual Web3Forms key
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Inquiry Submitted Successfully!");
      } else {
        toast.error("Submission Failed. Try Again!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="relative">
      {/* Background Image */}
      <motion.img
        src="/assets/contact.jpeg"
        alt="About Us"
        className="w-[400px] h-[300px] md:w-full md:h-[400px] object-cover object-center mx-auto mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Notification Toaster */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Content Container */}
      <motion.div
        className="relative z-10 py-9 px-6 md:px-20 text-gray-900 bg-blue-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        <div className="w-full max-w-6xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold text-center text-gray-800">
              Inquiry Form
            </h2>
            <p className="mt-2 text-lg text-center text-gray-600">
              Have any questions? Fill out the form, and we’ll get back to you soon!
            </p>
          </ScrollAnimation>

          {/* Inquiry Section - Two Columns */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side - Contact Info */}
            <ScrollAnimation>
              <div className="bg-gray-200 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Contact Information
                </h3>
                <p className="mt-2 text-gray-700">
                  Reach out to us for any inquiries or visit our school.
                </p>

                <div className="mt-4 space-y-4">
                  <p className="flex items-center gap-3 text-lg text-gray-700">
                    <FaPhoneAlt className="text-gray-600 text-xl shrink-0" />
                    <span>+91 97624 38948</span>
                  </p>

                  <p className="flex items-center gap-3 text-lg text-gray-700">
                    <FaEnvelope className="text-gray-600 text-xl shrink-0" />
                    <span>littlestarkids01@gmail.com</span>
                  </p>

                  <p className="flex items-start gap-3 text-lg text-gray-700">
                    <FaMapMarkerAlt className="text-gray-600 text-xl shrink-0 mt-1" />
                    <span>
                      Nasrapur, Cheladi Phata, Near PDCC Bank, 1st Floor, A/p. Nasrapur, Tal. Bhor, Dist. Pune, 412213
                    </span>
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Side - Inquiry Form */}
            <ScrollAnimation delay={0.2}>
              <form
                className="bg-white p-8 rounded-lg shadow-md"
                onSubmit={handleSubmit}
              >
                <h3 className="text-2xl font-semibold text-gray-800">Inquiry Form</h3>

                <div className="mt-4 space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-400"
                  />
                  {errors.name && <p className="text-red-600">{errors.name}</p>}

                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-400"
                  />
                  {errors.phone && <p className="text-red-600">{errors.phone}</p>}

                  <input
                    type="text"
                    name="village"
                    placeholder="Village"
                    value={formData.village}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-400"
                  />
                  {errors.village && <p className="text-red-600">{errors.village}</p>}

                  {/* Admission Year Dropdown */}
                  <select
                    name="admissionYear"
                    value={formData.admissionYear}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                  >
                    <option value="">Select Admission Year</option>
                    <option value="Play Group">Play Group</option>
                    <option value="Mini KG">Mini KG</option>
                    <option value="Jr KG">Jr KG</option>
                    <option value="Sr KG">Sr KG</option>
                  </select>
                  {errors.admissionYear && <p className="text-red-600">{errors.admissionYear}</p>}

                  <textarea
                    name="query"
                    placeholder="Your Query"
                    value={formData.query}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-400"
                  ></textarea>
                  {errors.query && <p className="text-red-600">{errors.query}</p>}

                  <button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </button>
                </div>
              </form>
            </ScrollAnimation>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Inquiry;
