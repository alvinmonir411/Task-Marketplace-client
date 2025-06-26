import { NavLink, Outlet } from "react-router-dom";
import React from 'react'
import { FiClipboard, FiMenu, FiUsers } from 'react-icons/fi';

const Sideberdashbord = () => {
  return (
    <div>
      <div className="drawer  lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  flex flex-col items-start justify-start p-4">
          {/* Icon Button for Opening Drawer */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden mb-4"
          >
            <FiMenu className="text-2xl" />
          </label>

          {/* Page Content */}
          <Outlet />
        </div>

        <div className="drawer-side py-10">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <NavLink
              to="/dashboard/users"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition ${
                  isActive ? "bg-blue-100 text-blue-600" : "text-gray-700"
                }`
              }
            >
              <FiUsers className="text-xl" />
              Total Users
            </NavLink>

            <NavLink
              to="/dashboard/tasks"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition ${
                  isActive ? "bg-blue-100 text-blue-600" : "text-gray-700"
                }`
              }
            >
              <FiClipboard className="text-xl" />
              Total Job Tasks
            </NavLink>
            <NavLink
              to="/dashboard/add-task"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition ${
                  isActive ? "bg-blue-100 text-blue-600" : "text-gray-700"
                }`
              }
            >
              ➕ Add Task
            </NavLink>
            <NavLink
              to="/dashboard/my-posted-tasks"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-100 hover:text-blue-600 transition ${
                  isActive ? "bg-blue-100 text-blue-600" : "text-gray-700"
                }`
              }
            >
              📋 My Posted Tasks
            </NavLink>
          </ul>
        </div>
      </div>
      ;
    </div>
  );
}

export default Sideberdashbord
