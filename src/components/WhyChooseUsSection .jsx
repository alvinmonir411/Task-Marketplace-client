// components/WhyChooseUsSection.jsx
import { FaShieldAlt, FaUsers, FaClock, FaThumbsUp } from "react-icons/fa";

const WhyChooseUsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          Why Choose Our Marketplace?
        </h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <FaUsers className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Skilled Freelancers</h3>
            <p className="text-gray-600">
              Find expert freelancers from multiple categories who deliver
              quality work.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <FaShieldAlt className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
            <p className="text-gray-600">
              Your data and tasks are protected with industry-standard security.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <FaClock className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quick Turnaround</h3>
            <p className="text-gray-600">
              Post a task and get responses within minutes. Time matters, we
              value it.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <FaThumbsUp className="text-4xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trusted by Many</h3>
            <p className="text-gray-600">
              Hundreds of satisfied users and a growing community of
              professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
