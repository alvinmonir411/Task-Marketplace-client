import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load task by ID
  useEffect(() => {
    fetch(`https://ferelancemarketplace.vercel.app/add-task/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading task:", err);
        setLoading(false);
      });
  }, [id]);

  // Handle Bid Button Click
  const handleBidClick = () => {
    fetch(`https://ferelancemarketplace.vercel.app/add-task/bid/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then(() => {
        fetch(`https://ferelancemarketplace.vercel.app/add-task/${id}`)
          .then((res) => res.json())
          .then((data) => setTask(data));
        toast.success(`Your bid was submitted for "${task.title}"`);
      })
      .catch((error) => {
        console.error("Failed to bid", error);
        toast.error("Bid submission failed");
      });
  };

  // Format date
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
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
        <span className="ml-4 text-lg font-medium text-blue-600">
          Loading...
        </span>
      </div>
    );

  if (!task)
    return (
      <div className="text-center mt-20 text-red-600 font-semibold text-xl">
        ❌ Task not found.
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-8 mt-10 bg-white shadow-xl rounded-xl border border-gray-200">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{task.title}</h1>

      {/* Tags & Info */}
      <div className="flex flex-wrap gap-3 text-sm mb-6">
        <span className="bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-full">
          Category: {task.category}
        </span>
        <span className="bg-green-100 text-green-800 font-medium px-3 py-1 rounded-full">
          Budget: {task.currency} {task.budget}
        </span>
        <span className="bg-red-100 text-red-800 font-medium px-3 py-1 rounded-full">
          Deadline: {formatDate(task.deadline)}
        </span>
        <span className="bg-yellow-100 text-yellow-800 font-medium px-3 py-1 rounded-full">
          Bids: {task.bidsCount || 0}
        </span>
        <span className="bg-indigo-100 text-indigo-800 font-medium px-3 py-1 rounded-full">
          Experience: {task.experienceLevel}
        </span>
        <span className="bg-purple-100 text-purple-800 font-medium px-3 py-1 rounded-full">
          Location: {task.location}
        </span>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {task.description || "No description provided."}
        </p>
      </div>

      {/* Tags */}
      {task.tags?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Skills & Tags
          </h2>
          <div className="flex flex-wrap gap-2">
            {task.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Posted By */}
      <div className="mb-6 border-t pt-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Client Info
        </h2>
        <p>
          <strong className="text-gray-600">Name:</strong>{" "}
          {task.postedBy?.userName || task.postedBy?.name || "N/A"}
        </p>
        <p>
          <strong className="text-gray-600">Email:</strong>{" "}
          {task.postedBy?.userEmail || task.postedBy?.email || "N/A"}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-8">
        <Link
          to="/browse-tasks"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Back to Browse Tasks
        </Link>
        <button
          onClick={handleBidClick}
          className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md transition"
        >
          Bids Now
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
