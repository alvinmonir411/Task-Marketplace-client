import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdArrowCircleRight } from "react-icons/md";
import { Link, NavLink } from "react-router";

const FeatureTask = () => {
  const [featureTasks, setFeatureTasks] = useState([]);

  useEffect(() => {
    fetch("https://ferelancemarketplace.vercel.app/FetureTask")
      .then((res) => res.json())
      .then((data) => setFeatureTasks(data));
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const fadeInVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, type: "spring" },
    }),
  };

  return (
    <section className=" mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
        🌟 Featured Freelance Tasks
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {featureTasks.map((task, i) => (
          <motion.div
            key={task._id}
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            custom={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex justify-end mb-2">
              <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">
                {task.bids || 0} Bids
              </span>
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
              {task.title}
            </h3>

            <p className="text-sm mb-2">
              <span className="font-semibold text-gray-700">Category: </span>
              <span className="text-blue-600">{task.category}</span>
            </p>

            <p className="text-gray-700 text-sm mb-4 line-clamp-3">
              {task.description.length > 100
                ? task.description.slice(0, 100) + "..."
                : task.description}
            </p>

            <div className="flex justify-between text-sm mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                💰 {task.currency || "৳"} {task.budget}
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
                📅 {formatDate(task.deadline)}
              </span>
            </div>

            <div className="mt-auto pt-2">
              <Link
                to={`/TaskDetails/${task._id}`}
                className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2 rounded-md transition"
              >
                See Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <NavLink to="/browse-tasks">
          <button className="group relative inline-flex items-center gap-2 px-6 py-3 text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300">
            <MdArrowCircleRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
            Browse More Tasks
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default FeatureTask;
