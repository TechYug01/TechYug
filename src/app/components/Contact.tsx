"use client";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-20 text-gray-800"
    >
      <div className="w-full max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-bold text-blue-700">Contact Us</h2>
        <p className="mb-10 text-lg">
          🚀 Let&apos;s build something exceptional together! Whether you're
          ready to start or just have a question, we're here for you.
        </p>

        <form className="mx-auto max-w-2xl space-y-6 rounded-2xl bg-gray-100 p-8 text-left shadow-lg">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="johndoe@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        <div className="text-md mt-8 font-medium text-blue-700">
          📞 24/7 Dedicated Support — Chat, Email & Phone Assistance Anytime
        </div>
      </div>
    </section>
  );
};

export default Contact;
