import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { MdArrowCircleRight } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const FeatureTask = () => {
  const [featureTasks, setFeatureTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/FetureTask")
      .then((res) => res.json())
      .then((data) => setFeatureTasks(data));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        🚀 Featured Tasks
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureTasks.map((task) => (
          <Fade key={task._id} cascade damping={0.5} triggerOnce>
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300">
              {" "}
              <div className="flex justify-end mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {task.bids || 0} Bids
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {task.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium text-gray-700">Category:</span>{" "}
                <span className="text-blue-600">{task.category}</span>
              </p>
              <p className="text-gray-700 text-sm mb-4">
                {task.description.length > 100
                  ? task.description.slice(0, 100) + "..."
                  : task.description}
              </p>
              <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                  💰 ${task.budget}
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
                  📅 {task.deadline}
                </span>
              </div>
              <div className="flex justify-between gap-3">
                <Link
                  to={`/TaskDetails/${task._id}`}
                  className="flex-1 text-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-sm font-medium"
                >
                  See Details
                </Link>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      {/* Browse More Button */}
      <div className="flex justify-center mt-10">
        <NavLink to="/browse-tasks">
          <button className="group relative inline-flex items-center gap-2 px-6 py-3 text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300">
            <MdArrowCircleRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
            Browse More Tasks
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default FeatureTask;
