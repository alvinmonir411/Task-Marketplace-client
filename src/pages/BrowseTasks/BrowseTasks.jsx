import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BrowseTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/add-task")
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

  // Format date nicely
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">
        Browse Tasks
      </h2>

      {loading ? (
        <div className="flex justify-center items-center">
          <svg
            className="animate-spin h-10 w-10 text-blue-600"
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
          <span className="ml-3 text-lg font-medium text-blue-600">
            Loading...
          </span>
        </div>
      ) : tasks.length === 0 ? (
        <p className="text-center text-xl text-gray-500 mt-10">
          No tasks found. Please check back later.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">
                {task.title}
              </h3>

              <div className="mb-3 flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {task.category}
                </span>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  Budget: ${task.budget}
                </span>
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  Deadline: {formatDate(task.deadline)}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {task.description || "No description provided."}
              </p>

              <Link
                to={`/TaskDetails/${task._id}`}
                className="inline-block text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 rounded px-4 py-2 text-sm font-medium transition"
              >
                See Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseTasks;
