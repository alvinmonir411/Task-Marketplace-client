import React, { useEffect, useState } from "react";
import { MdArrowCircleRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const FetureTask = () => {
  const [feturetask, setFeturetask] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/FetureTask")
      .then((res) => res.json())
      .then((data) => setFeturetask(data));
  }, []);

  return (
    <div className=" mx-auto px-4 py-10 capitalize">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        🚀 Featured Tasks
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {feturetask.map((task) => (
          <div
            key={task._id}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300"
          >
            {" "}
            {/* Bid Count Badge */}
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
            <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                💰 ${task.budget}
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
                📅 {task.deadline}
              </span>
            </div>
            <NavLink to={`/TaskDetails/${task._id}`}>
              <button className="btn mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                View Details
              </button>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-5">
        <NavLink to="/browse-tasks">
          <a class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <MdArrowCircleRight />
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <MdArrowCircleRight />
            </span>
            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Browse More Task
            </span>
          </a>
        </NavLink>
      </div>
    </div>
  );
};

export default FetureTask;
