import { FaFilePdf, FaDownload } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-indigo-100 px-6 py-20"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-14 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Profile"
              className="w-72 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white"
            />
            <div className="absolute inset-0 rounded-3xl bg-indigo-400/10 blur-2xl -z-10"></div>
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-center text-indigo-600">
            About Me
          </h2>

          <div className="text-slate-700 text-lg leading-relaxed space-y-5">
            <p>
              I am a passionate web developer focused on building clean,
              user-friendly, and responsive web applications. I have hands-on
              experience with HTML, CSS, JavaScript, React, and basic backend
              concepts. I am self-motivated, eager to learn, and excited to
              contribute to real-world projects.
            </p>

            {/* Resume Buttons */}
            <div className="flex gap-4 mt-8 flex-wrap">

              {/* View Resume */}
              <a
                href={`${import.meta.env.BASE_URL}TulaBhagyasriResume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                <FaFilePdf />
                View Resume
              </a>

              {/* Download Resume */}
              <a
                href={`${import.meta.env.BASE_URL}TulaBhagyasriResume.pdf`}
                download
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                <FaDownload />
                Download
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
