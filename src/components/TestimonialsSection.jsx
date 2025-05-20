import React from "react";
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alvin Monir",
      photo: "https://i.ibb.co/BHDhFQzn/FB-IMG-1657858486671-1.jpg",
      review:
        "I posted a design task and found an amazing freelancer within hours. This platform made it super easy!",
      role: "Startup Founder",
    },
    {
      name: "Jahidul Islam",
      photo: "https://i.ibb.co/GfmR2b8B/lawyer-2.jpg",
      review:
        "Freelance Task Marketplace helped me land my first freelance project. Great experience!",
      role: "Freelancer – Web Developer",
    },
    {
      name: "Nusrat Jahan",
      photo: "https://i.ibb.co/5Xs7MQmV/doctor-12.jpg",
      review:
        "I love how simple and efficient the platform is. It saves me time and connects me with skilled freelancers.",
      role: "Digital Marketer",
    },
  ];

  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
            >
              <img
                className="w-20 h-20 rounded-full object-cover mb-4"
                src={testimonial.photo}
                alt={testimonial.name}
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                {testimonial.role}
              </p>
              <p className="text-gray-700 dark:text-gray-200 text-sm italic">
                “{testimonial.review}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
