import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="container mx-auto px-4 md:px-8 py-10">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
        🚀 Browse Freelance Tasks
      </h2>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <svg
            className="animate-spin h-10 w-10 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            ></path>
          </svg>
          <span className="ml-3 text-lg font-semibold text-blue-600">
            Loading tasks...
          </span>
        </div>
      ) : tasks.length === 0 ? (
        <p className="text-center text-xl text-gray-500 mt-10">
          No tasks available at the moment. Please check back later.
        </p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg p-6 transition duration-300"
            >
              {/* Bid Count Badge */}
              <div className="flex justify-end mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {task.bids || 0} Bids
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3 truncate">
                {task.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                  {task.category}
                </span>
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                  Budget: ${task.budget}
                </span>
                <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">
                  Deadline: {formatDate(task.deadline)}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                {task.description || "No description provided."}
              </p>

              {/* Actions */}
              <div className="flex justify-between gap-3">
                <Link
                  to={`/TaskDetails/${task._id}`}
                  className="flex-1 text-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition text-sm font-medium"
                >
                  See Details
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
