import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">
            Tula Bhagya Sri
          </h2>

          <p className="text-sm text-indigo-100">
            Full Stack Web Developer
          </p>

          <p className="text-xs text-indigo-200 mt-2">
            Designed with React & Tailwind CSS
          </p>

          <p className="text-xs text-indigo-200 mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 bg-white text-indigo-600 px-4 py-2 rounded-full font-medium shadow-md hover:scale-105 transition-all duration-300"
        >
          <FaArrowUp />
          Top
        </button>

      </div>
    </footer>
  );
}
