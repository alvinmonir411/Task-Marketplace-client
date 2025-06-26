import { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";

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
    return <div>Loading task data...</div>;
  }

  const handleUpdateTask = async (e) => {
    e.preventDefault();
    const form = e.target;
    const payload = {
      title: form.title.value,
      category: form.category.value,
      tags: form.tags.value
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0),
      description: form.description.value,
      budget: parseFloat(form.budget.value),
      currency: form.currency.value,
      deadline: form.deadline.value,
      status: form.status.value,
      location: form.location.value,
      experienceLevel: form.experienceLevel.value,
      visibility: form.visibility.value,
      isUrgent: form.isUrgent.checked,
      bidDeadline: form.bidDeadline.value || null,
      deliveryDate: form.deliveryDate.value || null,
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
        form.reset(); 
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
        {/* Title */}
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

        {/* Category */}
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

        {/* Tags */}
        <div>
          <label className="block mb-1 font-medium">
            Tags (comma separated)
          </label>
          <input
            name="tags"
            type="text"
            defaultValue={data.tags?.join(", ") || ""}
            className="w-full border rounded px-3 py-2"
            placeholder="E.g. React, Tailwind CSS, Responsive Design"
          />
        </div>

        {/* Description */}
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

        {/* Budget */}
        <div>
          <label className="block mb-1 font-medium">Budget</label>
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

        {/* Currency */}
        <div>
          <label className="block mb-1 font-medium">Currency</label>
          <select
            name="currency"
            defaultValue={data.currency || "USD"}
            required
            className="w-full border rounded px-3 py-2"
          >
            <option value="USD">USD</option>
            <option value="BDT">BDT</option>
          </select>
        </div>

        {/* Deadline */}
        <div>
          <label className="block mb-1 font-medium">Deadline</label>
          <input
            name="deadline"
            type="date"
            defaultValue={data.deadline ? data.deadline.split("T")[0] : ""}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Bid Deadline */}
        <div>
          <label className="block mb-1 font-medium">Bid Deadline</label>
          <input
            name="bidDeadline"
            type="date"
            defaultValue={
              data.bidDeadline ? data.bidDeadline.split("T")[0] : ""
            }
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Delivery Date */}
        <div>
          <label className="block mb-1 font-medium">Delivery Date</label>
          <input
            name="deliveryDate"
            type="date"
            defaultValue={
              data.deliveryDate ? data.deliveryDate.split("T")[0] : ""
            }
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block mb-1 font-medium">Status</label>
          <select
            name="status"
            defaultValue={data.status || "open"}
            required
            className="w-full border rounded px-3 py-2"
          >
            <option value="open">Open</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            name="location"
            type="text"
            defaultValue={data.location || "Remote"}
            className="w-full border rounded px-3 py-2"
            placeholder="E.g. Remote, Dhaka, Chittagong"
          />
        </div>

        {/* Experience Level */}
        <div>
          <label className="block mb-1 font-medium">Experience Level</label>
          <select
            name="experienceLevel"
            defaultValue={data.experienceLevel || "Entry"}
            className="w-full border rounded px-3 py-2"
          >
            <option value="Entry">Entry</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>

        {/* Visibility */}
        <div>
          <label className="block mb-1 font-medium">Visibility</label>
          <select
            name="visibility"
            defaultValue={data.visibility || "public"}
            className="w-full border rounded px-3 py-2"
          >
            <option value="public">Public</option>
            <option value="private">Private (invite only)</option>
          </select>
        </div>

        {/* Is Urgent */}
        <div className="flex items-center gap-2">
          <input
            id="isUrgent"
            name="isUrgent"
            type="checkbox"
            defaultChecked={data.isUrgent || false}
            className="rounded"
          />
          <label htmlFor="isUrgent" className="font-medium">
            Mark as urgent
          </label>
        </div>

        {/* User Email */}
        <div>
          <label className="block mb-1 font-medium">Your Email</label>
          <input
            value={user.email}
            readOnly
            className="w-full border rounded bg-gray-100 px-3 py-2"
          />
        </div>

        {/* User Name */}
        <div>
          <label className="block mb-1 font-medium">Your Name</label>
          <input
            value={user.displayName}
            readOnly
            className="w-full border rounded bg-gray-100 px-3 py-2"
          />
        </div>

        {/* Submit */}
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
