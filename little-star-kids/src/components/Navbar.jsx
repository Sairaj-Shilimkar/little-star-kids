import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaImages, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Fixed School Name for Mobile */}
      {isMobile && (
        <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#F89A9E] to-[#E3435B] text-white text-center py-3 text-xl font-bold shadow-md z-50 font-[Fredoka One]">
          ✨ Little Star Kids ✨
        </div>
      )}

      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#F89A9E] to-[#E3435B] text-white shadow-lg z-50">
        {/* Desktop Navbar */}
        {!isMobile && (
          <div className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-3xl font-bold tracking-wide font-[Fredoka One] text-white">
            ✨ Little Star Kids ✨
            </h1>
            <div className="flex space-x-6 text-lg font-medium">
              <Link to="/" className="hover:text-[#FFFFFF] transition">Home</Link>
              <Link to="/about" className="hover:text-[#FFFFFF] transition">About Us</Link>
              <Link to="/gallery" className="hover:text-[#FFFFFF] transition">Gallery</Link>
              <Link to="/inquiry" className="hover:text-[#FFFFFF] transition">Inquiry</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Bottom Navbar */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#F89A9E] to-[#E3435B] text-white shadow-lg border-t flex justify-around py-3 z-50">
          <Link to="/" className="flex flex-col items-center">
            <FaHome className="text-xl" />
            <span className="text-sm font-medium">Home</span>
          </Link>
          <Link to="/about" className="flex flex-col items-center">
            <FaInfoCircle className="text-xl" />
            <span className="text-sm font-medium">About</span>
          </Link>
          <Link to="/gallery" className="flex flex-col items-center">
            <FaImages className="text-xl" />
            <span className="text-sm font-medium">Gallery</span>
          </Link>
          <Link to="/inquiry" className="flex flex-col items-center">
            <FaEnvelope className="text-xl" />
            <span className="text-sm font-medium">Inquiry</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
