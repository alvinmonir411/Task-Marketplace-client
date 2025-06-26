import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { motion, AnimatePresence } from "framer-motion";

const MyTasks = () => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    fetch("https://ferelancemarketplace.vercel.app/add-task")
      .then((res) => res.json())
       .then((data) => {
     const mydata = data.filter((item) => item.postedBy.email === user?.email);
        setTasks(mydata);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch tasks:", err);
        setLoading(false);
      });
  }, [user]);
  
  

  const handleDelete = (id) => {
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
          .then(() => {
            removeTaskFromList(id);
            Swal.fire({
              title: "Deleted!",
              text: "Your task has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };

  const removeTaskFromList = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="h-10 w-10 text-blue-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
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
        </motion.svg>
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
              <AnimatePresence>
                {tasks.map((task) => (
                  <motion.tr
                    key={task._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-2">{task.title}</td>
                    <td className="px-4 py-2">{task.category}</td>
                    <td className="px-4 py-2">
                      {new Date(task.deadline).toLocaleDateString()}
                    </td>
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
                        className="cursor-not-allowed bg-blue-500 text-white px-3 py-1 rounded text-sm"
                        title={`${task.bidsCount || 0} Bids`}
                      >
                        {task.bidsCount || 0}
                      </button>
                      <button
                        onClick={() => handleDelete(task._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTasks;
