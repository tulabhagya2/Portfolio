import { useEffect, useState } from "react";

export default function Projects() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Project details
  const project = {
    title: "Time Tracker Web App",
    description:
      "A personal productivity tool to log daily activities and visualize time spent. Built with HTML, CSS, JavaScript, and Firebase Realtime Database. Features login/signup, dashboard, and analytics charts.",
    image: "dashboard.JPG", // Place your screenshot in public/images/dashboard.png
    github: "https://github.com/tulabhagya2/ai-evaluation-repo",
    liveDemo: "https://shiny-llama-9f88d6.netlify.app"

  };

  return (
    <section
      id="projects"
      className={`pt-28 p-8 bg-white dark:bg-gray-900 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-indigo-600">
        Projects
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
        {/* Left: Screenshot */}
        <div className="md:w-1/2 w-full">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-xl shadow-lg object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right: Description */}
        <div className="md:w-1/2 w-full bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold mb-4 text-indigo-600">
            {project.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
          <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              GitHub
            </a>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
