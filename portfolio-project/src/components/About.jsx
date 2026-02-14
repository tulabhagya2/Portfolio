import { FaFilePdf, FaDownload } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-slate-50 px-6"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Profile"
            className="w-64 h-72 object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            About Me
          </h2>

          <div className="text-slate-700 space-y-4">
            <p>
              I am a passionate web developer focused on building clean,
              user-friendly, and responsive web applications. I have hands-on
              experience with HTML, CSS, JavaScript, React, and basic backend
              concepts. I am self-motivated, eager to learn, and excited to
              contribute to real-world projects.
            </p>

            {/* Resume Buttons */}
            <div className="flex gap-4 mt-6 flex-wrap">

              {/* View Resume */}
              <a
                href={`${import.meta.env.BASE_URL}TulaBhagyasriResume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition"
              >
                <FaFilePdf />
                View Resume
              </a>

              {/* Download Resume */}
              <a
                href={`${import.meta.env.BASE_URL}TulaBhagyasriResume.pdf`}
                download
                className="flex items-center gap-2 px-5 py-2.5 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition"
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
