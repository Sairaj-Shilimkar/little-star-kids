import React from "react";
import { FaInstagram, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gradient-to-r from-gray-300 via-gray-300 to-gray-300 text-gray-800 py-10 px-5 md:px-20">
			<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

				{/* Contact Details */}
				<div className="text-center md:text-left">
					<h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
					<p className="flex items-center justify-center md:justify-start gap-2">
						<FaPhoneAlt className="text-gray-600" /> +91 97624 38948
					</p>
					<p className="flex items-center justify-center md:justify-start gap-2">
						<FaEnvelope className="text-gray-600" /> littlestarkids01@gmail.com
					</p>
					<p className="flex items-center justify-center md:justify-start gap-2">
						<FaWhatsapp className="text-green-500" /> +91 97624 38948
					</p>
				</div>

				{/* Social Media */}
				<div className="text-center md:text-right">
					<h3 className="text-lg font-semibold mb-3">Follow Us</h3>
					<div className="flex justify-center md:justify-end gap-4">
						<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-pink-500 transition">
							<FaInstagram />
						</a>
						<a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-red-500 transition">
							<FaYoutube />
						</a>
					</div>
				</div>

			</div>

			{/* Copyright Section */}
			<div className="mt-8 text-center border-t border-gray-400/50 pt-4">
				<p>&copy; {new Date().getFullYear()} Little Star Kids. All Rights Reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
