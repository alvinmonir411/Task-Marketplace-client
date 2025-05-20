import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import CarouselDefault from "./CarouselDefault";

const Navber = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast("Sign-out successful.");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "px-3 py-2 text-blue-500" : "px-3 py-2 hover:text-blue-500"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/browse-tasks"
        className={({ isActive }) =>
          isActive ? "px-3 py-2 text-blue-500" : "px-3 py-2 hover:text-blue-500"
        }
      >
        Browse Tasks
      </NavLink>
      <NavLink
        to="/add-task"
        className={({ isActive }) =>
          isActive ? "px-3 py-2 text-blue-500" : "px-3 py-2 hover:text-blue-500"
        }
      >
        Add Task
      </NavLink>

      <NavLink
        to="/my-posted-tasks"
        className={({ isActive }) =>
          isActive ? "px-3 py-2 text-blue-500" : "px-3 py-2 hover:text-blue-500"
        }
      >
        My Posted Tasks
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <img className="w-12 h-12 mr-2" src="/images.jpg" alt="logo" />
        <Link to="/" className="text-2xl font-bold text-blue-600">
          FreelanceHub
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <>
            <NavLink to="/login" className="px-3 py-2 hover:text-green-500">
              Login
            </NavLink>
            <NavLink to="/Register" className="px-3 py-2 hover:text-green-500">
              Signup
            </NavLink>
          </>
        ) : (
          <>
            {/* User photo with hover display name */}
            <div className="relative group">
              <img
                src={user.photoURL}
                alt="user"
                className="w-10 h-10 rounded-full border-2 border-blue-500 cursor-pointer"
              />
              <div className="absolute left-1/2 -translate-x-1/2 top-10 hidden group-hover:block bg-red-500 text-white text-sm px-3 py-1 rounded shadow-md whitespace-nowrap">
                {user.displayName}
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="px-3 py-2 text-red-500 hover:underline"
            >
              Log out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;
