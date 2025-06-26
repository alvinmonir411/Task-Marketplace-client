import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiClock, FiTag, FiDollarSign, FiUser } from "react-icons/fi";

const BrowseTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ferelancemarketplace.vercel.app/add-task")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching tasks:", err);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
        🛠️ Explore Freelance Opportunities
      </h2>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
          <span className="ml-3 text-lg font-semibold text-blue-600">
            Loading tasks...
          </span>
        </div>
      ) : tasks.length === 0 ? (
        <p className="text-center text-xl text-gray-500 mt-10">
          No tasks available right now. Please check again later.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Bid count badge */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium text-gray-500 flex items-center gap-1">
                  <FiUser className="text-yellow-500" /> {task.bidsCount || 0}{" "}
                  Bids
                </span>
                <span className="text-xs text-gray-400">
                  {task.experienceLevel}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                {task.title}
              </h3>

              {/* Meta tags */}
              <div className="flex flex-col gap-1 text-sm mb-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <FiTag className="text-blue-500" />
                  <span>{task.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiDollarSign className="text-green-500" />
                  <span>
                    {task.currency} {task.budget}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FiClock className="text-red-500" />
                  <span>{formatDate(task.deadline)}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm mb-5 line-clamp-3 leading-relaxed">
                {task.description || "No description available."}
              </p>

              {/* Actions */}
              <div className="mt-auto pt-3">
                <Link
                  to={`/TaskDetails/${task._id}`}
                  className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-md transition"
                >
                  View Task
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseTasks;
