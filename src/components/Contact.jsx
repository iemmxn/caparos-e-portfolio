import { useState } from "react";
import { info } from "../data";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  // updates the form when the user types
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  }

  // checks if the fields are filled in properly
  function validate() {
    const newErrors = {};

    if (form.name.trim() === "") {
      newErrors.name = "Please enter your name.";
    }

    if (form.email.trim() === "") {
      newErrors.email = "Please enter your email.";
    } else if (!form.email.includes("@") || !form.email.includes(".")) {
      newErrors.email = "Please enter a valid email.";
    }

    if (form.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    // if there are no errors, open the email app with the message filled in
    if (Object.keys(newErrors).length === 0) {
      const subject = encodeURIComponent("Message from " + form.name);
      const body = encodeURIComponent(
        form.message + "\n\nFrom: " + form.name + " (" + form.email + ")"
      );
      window.location.href = "mailto:" + info.email + "?subject=" + subject + "&body=" + body;
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }
  }

  return (
    <section id="contact" className="scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-white border-b-4 border-blue-500 inline-block pb-1 mb-6">Contact</h2>

        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg p-6">
          {/* contact info */}
          <div className="text-gray-700 space-y-2">
            <p>You can reach me here:</p>
            <p>
              Email:{" "}
              <a href={"mailto:" + info.email} className="text-blue-600 hover:underline">
                {info.email}
              </a>
            </p>
            <p>
              Facebook:{" "}
              <a href={info.facebook} className="text-blue-600 hover:underline" target="_blank">
                {info.facebook}
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a href={info.github} className="text-blue-600 hover:underline" target="_blank">
                {info.github}
              </a>
            </p>
          </div>

          {/* contact form */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>

            {sent && (
              <p className="text-green-600 text-sm">
                Opening your email app so you can send the message.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
