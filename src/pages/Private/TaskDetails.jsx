import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/add-task/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading task details:", err);
        setLoading(false);
      });
  }, [id]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading)
    return (
      <div className="flex justify-center items-center mt-20">
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
    );

  if (!task)
    return (
      <div className="text-center mt-20 text-red-600 font-semibold">
        Task not found.
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-900">
        {task.title}
      </h1>

      <div className="flex flex-wrap gap-4 mb-6">
        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
          Category: {task.category}
        </span>
        <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
          Budget: ${task.budget}
        </span>
        <span className="inline-block bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
          Deadline: {formatDate(task.deadline)}
        </span>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          Description
        </h2>
        <p className="text-gray-700 whitespace-pre-line">
          {task.description || "No description provided."}
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Posted By</h2>
        <p>
          <strong className="font-medium">Name: </strong>{" "}
          {task.userName || "N/A"}
        </p>
        <p>
          <strong className="font-medium">Email: </strong>{" "}
          {task.userEmail || "N/A"}
        </p>
      </section>

      <Link
        to="/browse-tasks"
        className="inline-block mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition"
      >
        ← Back to Browse Tasks
      </Link>
    </div>
  );
};

export default TaskDetails;
