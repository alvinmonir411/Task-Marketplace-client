import { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "./../../context/AuthContext";

const UpdateTask = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
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
  }

  if (!data) {
    return <div>Loading task data...</div>; // or spinner
  }

  const handleUpdateTask = async (e) => {
    e.preventDefault();
    const { title, category, description, deadline, budget } = e.target;

    const payload = {
      title: title.value,
      category: category.value,
      description: description.value,
      deadline: deadline.value,
      budget: parseFloat(budget.value),
      userEmail: user.email,
      userName: user.displayName,
    };

    try {
      const res = await fetch(
        `https://ferelancemarketplace.vercel.app/add-task/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const result = await res.json();
      if (res.ok && result.modifiedCount > 0) {
        toast.success("✅ Task updated successfully!");
      } else {
        throw new Error(result.error || "Failed to update task");
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ " + err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded pb-10 pt-10">
      <h2 className="text-4xl text-center font-semibold mb-6">Update Task</h2>
      <form onSubmit={handleUpdateTask} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Task Title</label>
          <input
            name="title"
            type="text"
            defaultValue={data.title}
            required
            className="w-full border rounded px-3 py-2"
            placeholder="E.g. Build a landing page"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            defaultValue={data.category}
            required
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select category</option>
            <option>Web Development</option>
            <option>Design</option>
            <option>Writing</option>
            <option>Marketing</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            defaultValue={data.description}
            required
            className="w-full border rounded px-3 py-2"
            placeholder="Describe what needs to be done"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Deadline</label>
          <input
            name="deadline"
            type="date"
            defaultValue={data.deadline}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Budget (USD)</label>
          <input
            name="budget"
            type="number"
            defaultValue={data.budget}
            required
            min="0"
            step="0.01"
            className="w-full border rounded px-3 py-2"
            placeholder="E.g. 150.00"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Your Email</label>
          <input
            value={user.email}
            readOnly
            className="w-full border rounded bg-gray-100 px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Your Name</label>
          <input
            value={user.displayName}
            readOnly
            className="w-full border rounded bg-gray-100 px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default UpdateTask;
