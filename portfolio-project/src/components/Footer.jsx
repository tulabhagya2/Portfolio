import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-gray-400 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Tula Bhagya Sri</h2>
          <p className="text-sm text-gray-400">
            Full Stack Web Developer
          </p>
          <p className="text-xs text-gray-500 mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 bg-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-700 transition"
        >
          <FaArrowUp />
          Top
        </button>

      </div>
    </footer>
  );
}
