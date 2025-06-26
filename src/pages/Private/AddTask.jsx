import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const AddTask = () => {
  const { user } = useContext(AuthContext);

  const handleAddTask = async (e) => {
    e.preventDefault();
    const form = e.target;
    const payload = {
      title: form.title.value,
      category: form.category.value,
      tags: form.tags.value.split(",").map((tag) => tag.trim()),
      description: form.description.value,
      deadline: form.deadline.value,
      bidDeadline: form.bidDeadline.value,
      deliveryDate: form.deliveryDate.value || null,
      budget: parseFloat(form.budget.value),
      currency: form.currency.value,
      experienceLevel: form.experienceLevel.value,
      location: form.location.value,
      visibility: form.visibility.value,
      isUrgent: form.isUrgent.checked,
      postedBy: {
        name: user.displayName,
        email: user.email,
      },
      createdAt: new Date().toISOString(),
      status: "open",
      bidsCount: 0,
      views: 0,
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
      if (data.insertedId) {
        console.log(data);
        toast.success("✅ Task added successfully!");
        form.reset();
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to add task");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg mt-10"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Add a New Task
      </h2>
      <form
        onSubmit={handleAddTask}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            name="title"
            type="text"
            required
            className="w-full border px-4 py-2 rounded"
            placeholder="E.g. Build a responsive website"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            name="category"
            required
            className="w-full border px-4 py-2 rounded"
          >
            <option value="">Select category</option>
            <option>Web Development</option>
            <option>Design</option>
            <option>Marketing</option>
            <option>Writing</option>
          </select>
        </div>

        {/* Tags */}
        <div className="md:col-span-2">
          <label className="block font-medium mb-1">
            Tags (comma separated)
          </label>
          <input
            name="tags"
            type="text"
            className="w-full border px-4 py-2 rounded"
            placeholder="e.g. React, Tailwind, Firebase"
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block font-medium mb-1">Budget</label>
          <input
            name="budget"
            type="number"
            min="0"
            className="w-full border px-4 py-2 rounded"
            placeholder="e.g. 500"
            required
          />
        </div>

        {/* Currency */}
        <div>
          <label className="block font-medium mb-1">Currency</label>
          <select name="currency" className="w-full border px-4 py-2 rounded">
            <option value="BDT">BDT</option>
            <option value="USD">USD</option>
          </select>
        </div>

        {/* Deadline */}
        <div>
          <label className="block font-medium mb-1">Deadline</label>
          <input
            name="deadline"
            type="date"
            className="w-full border px-4 py-2 rounded"
            required
          />
        </div>

        {/* Bid Deadline */}
        <div>
          <label className="block font-medium mb-1">Bid Deadline</label>
          <input
            name="bidDeadline"
            type="date"
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        {/* Delivery Date */}
        <div>
          <label className="block font-medium mb-1">Expected Delivery</label>
          <input
            name="deliveryDate"
            type="date"
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium mb-1">Location</label>
          <input
            name="location"
            type="text"
            className="w-full border px-4 py-2 rounded"
            placeholder="Remote / Dhaka / etc"
          />
        </div>

        {/* Experience Level */}
        <div>
          <label className="block font-medium mb-1">Experience Level</label>
          <select
            name="experienceLevel"
            className="w-full border px-4 py-2 rounded"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>

        {/* Visibility */}
        <div>
          <label className="block font-medium mb-1">Visibility</label>
          <select name="visibility" className="w-full border px-4 py-2 rounded">
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>

        {/* Is Urgent */}
        <div className="flex items-center gap-2">
          <input type="checkbox" name="isUrgent" id="isUrgent" />
          <label htmlFor="isUrgent" className="font-medium">
            Mark as urgent
          </label>
        </div>

        <div className="md:col-span-2">
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            rows="4"
            className="w-full border px-4 py-2 rounded"
            placeholder="Describe the task details..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Task
        </button>
      </form>
    </motion.div>
  );
};

export default AddTask;
