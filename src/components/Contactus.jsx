import React from "react";

const Contactus = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 lg:px-40">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-12 max-w-3xl">
          We're here to help! Whether you have questions about our marketplace,
          need assistance with your account, or want to partner with us, please
          fill out the form below or reach out via our contact details.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            className="bg-white p-8 rounded-lg shadow-lg"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 font-semibold text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block mb-2 font-semibold text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Brief subject"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-md px-4 py-3 resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Get in Touch
              </h3>

              <div className="mb-8 space-y-4 text-gray-700">
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h2l3 9 4-16 3 9h2"
                    />
                  </svg>
                  <p>123 Marketplace Blvd, Commerce City, NY 10001</p>
                </div>

                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m-6 7h12m-6 0v10"
                    />
                  </svg>
                  <p>+1 (555) 123-4567</p>
                </div>

                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12H8m0 0v6m0-6V6m0 6H4"
                    />
                  </svg>
                  <p>support@marketplace.com</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.995 9.995 0 008 9.8v-6.93H7v-2.87h3V9.75c0-3 1.793-4.65 4.533-4.65 1.313 0 2.686.235 2.686.235v2.96h-1.513c-1.492 0-1.958.93-1.958 1.885v2.27h3.328l-.532 2.87h-2.796v6.93A9.996 9.996 0 0022 12z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5.5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2zM4 3a2 2 0 110 4 2 2 0 010-4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
