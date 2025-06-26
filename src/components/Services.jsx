import React from "react";

const Services = () => {
  const services = [
    {
      title: "Task Posting & Bidding",
      description:
        "Post tasks easily and allow qualified freelancers to bid, ensuring competitive pricing and quality work.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m2 0a8 8 0 11-16 0 8 8 0 0116 0z"
          />
        </svg>
      ),
    },
    {
      title: "Secure Payments",
      description:
        "Our platform ensures safe and secure payment transactions with escrow services to protect both buyers and sellers.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 11c0-1.657-1.343-3-3-3S6 9.343 6 11s1.343 3 3 3 3-1.343 3-3z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 17v5m0 0h3m-3 0h-3"
          />
        </svg>
      ),
    },
    {
      title: "Real-time Messaging",
      description:
        "Communicate instantly with your buyers and sellers through our integrated messaging system.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8-1.586 0-3.06-.457-4.312-1.23L3 20l1.23-4.312A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      title: "User Dashboard",
      description:
        "Manage your tasks, bids, payments, and profile easily with a personalized dashboard.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M3 6h18M3 14h18M3 18h18"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 lg:px-40">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-12 text-gray-900 text-center">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map(({ title, description, icon }, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <div className="mb-6">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {title}
              </h3>
              <p className="text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
