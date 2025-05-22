import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const MyTasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://ferelancemarketplace.vercel.app/add-task")
      .then((res) => res.json())
      .then((data) => {
        const usertaks = data.filter((taks) => taks.userEmail === user.email);
        setTasks(usertaks);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch tasks:", err);
        setLoading(false);
      });
  }, [user]);

  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://ferelancemarketplace.vercel.app/add-task/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            deleted(id);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };
  const deleted = (id) => {
    let updatetask = tasks.filter((coffe) => coffe._id !== id);
    setTasks(updatetask);
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <svg
          className="animate-spin h-10 w-10 text-blue-600"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          />
        </svg>
        <span className="ml-3 text-lg font-medium text-blue-600">
          Loading tasks...
        </span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-6">My Posted Tasks</h2>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven't posted any tasks yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 shadow-sm rounded-md">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Deadline</th>
                <th className="px-4 py-2 text-left">Budget</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {tasks.map((task) => (
                <tr
                  key={task._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2">{task.title}</td>
                  <td className="px-4 py-2">{task.category}</td>
                  <td className="px-4 py-2">{task.deadline}</td>
                  <td className="px-4 py-2">${task.budget}</td>
                  <td className="px-4 py-2 flex flex-wrap gap-2">
                    <Link
                      to={`/update-task/${task._id}`}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded text-sm"
                    >
                      Update
                    </Link>

                    <button
                      disabled
                      className="cursor-not-allowed bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                    >
                      {task.bids}
                    </button>
                    <button
                      onClick={() => handledelete(task._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTasks;
