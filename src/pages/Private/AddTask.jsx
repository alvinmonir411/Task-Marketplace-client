import { useContext } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "./../../context/AuthContext";

const AddTask = () => {
  const { user } = useContext(AuthContext);

  const handleAddTask = async (e) => {
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
        "https://ferelancemarketplace.vercel.app/add-task",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      const data = await res.json();
      if (res.ok && data.insertedId) {
        toast.success("✅ Task added successfully!");
        e.target.reset();
      } else {
        throw new Error(data.error || "Failed to add task");
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ " + err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded pb-10 pt-10">
      <h2 className="text-4xl text-center font-semibold mb-4">
        Add a New Task
      </h2>
      <form onSubmit={handleAddTask} className="space-y-4">
        <div>
          <label className="block mb-1  font-medium">Task Title</label>
          <input
            name="title"
            type="text"
            required
            className="w-full border rounded px-3 py-2"
            placeholder="E.g. Build a landing page"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
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
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Budget (USD)</label>
          <input
            name="budget"
            type="number"
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
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
