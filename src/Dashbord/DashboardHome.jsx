import React, { useEffect, useState } from "react";
import { FiUsers, FiClipboard } from "react-icons/fi";

const DashboardHome = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);

  useEffect(() => {
    // Replace with your real backend API endpoints
    fetch("https://ferelancemarketplace.vercel.app/regestation")
      .then((res) => res.json())
      .then((data) => setTotalUsers(data.length))
      .catch((err) => console.error("User fetch error", err));

    fetch("https://ferelancemarketplace.vercel.app/add-task")
      .then((res) => res.json())
      .then((data) => setTotalTasks(data.length))
      .catch((err) => console.error("Task fetch error", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Total Users Card */}
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4">
          <FiUsers className="text-3xl text-blue-500" />
          <div>
            <p className="text-xl font-semibold">{totalUsers}</p>
            <p className="text-gray-500">Total Users</p>
          </div>
        </div>

        {/* Total Tasks Card */}
        <div className="bg-white shadow-md rounded-lg p-6 flex items-center gap-4">
          <FiClipboard className="text-3xl text-green-500" />
          <div>
            <p className="text-xl font-semibold">{totalTasks}</p>
            <p className="text-gray-500">Total Tasks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
