import { useEffect, useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendWhatsApp = () => {
    if (!form.name || !form.message) {
      alert("Please enter your name and message");
      return;
    }

    const phoneNumber = "919866490652";
    const text = `Hello,
Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}
Message: ${form.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className={`w-full py-16 px-4 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-black`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-600 dark:text-indigo-400">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT SIDE */}
          <div className="space-y-4">
            <InfoCard icon={<FaPhoneAlt />} text="+91 9866490652" />
            <InfoCard icon={<FaMapMarkerAlt />} text="Bhimavaram, Andhra Pradesh" />
            <InfoCard icon={<FaEnvelope />} text="tulabhagyasri1@gmail.com" />
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-xl p-4 shadow-md space-y-3">
            <h3 className="text-lg md:text-xl font-semibold text-center text-indigo-600 dark:text-indigo-400">
              Feel Free To Contact
            </h3>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 md:p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition text-sm md:text-base"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 md:p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition text-sm md:text-base"
            />
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-2 md:p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition text-sm md:text-base"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows="3"
              className="w-full p-2 md:p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white transition text-sm md:text-base resize-none"
            />

            <button
              onClick={sendWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-2.5 rounded-lg font-medium hover:bg-green-600 transition text-sm md:text-base"
            >
              <FaWhatsapp className="text-lg" />
              Send via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Reusable Info Card */
function InfoCard({ icon, text }) {
  return (
    <div className="flex items-center gap-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 shadow-sm hover:shadow-md transition text-sm md:text-base">
      <span className="text-indigo-600 dark:text-indigo-400 text-lg">{icon}</span>
      <span className="text-gray-800 dark:text-gray-200 font-medium">{text}</span>
    </div>
  );
}
