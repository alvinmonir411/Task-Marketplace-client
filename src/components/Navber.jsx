import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from './../context/AuthContext';
import { motion } from 'framer-motion';



const Navber = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const location = useLocation();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast("Sign-out successful.");
        setDropdownOpen(false);
      })
      .catch((error) => {
        console.error("Logout Error:", error);
      });
  };

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const closeDropdownOnOutsideClick = (e) => {
    if (!e.target.closest(".user-dropdown")) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdownOnOutsideClick);
    return () =>
      document.removeEventListener("click", closeDropdownOnOutsideClick);
  }, []);

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
      </NavLink>{" "}
      <NavLink
        to="/contactus"
        className={({ isActive }) =>
          isActive ? "px-3 py-2 text-blue-500" : "px-3 py-2 hover:text-blue-500"
        }
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/aboutUs"
        className={({ isActive }) =>
          isActive ? "px-3 py-2 text-blue-500" : "px-3 py-2 hover:text-blue-500"
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive ? "px-3 py-2 text-blue-500" : "px-3 py-2 hover:text-blue-500"
        }
      >
        Services
      </NavLink>
    </>
  );

  return (
    <motion.div
    initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{duration:.5}}
      className="navbar bg-base-100 shadow-sm">
      {/* Left Side */}
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
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        {/* Logo */}
        <img
          className="hidden md:block w-12 h-12 mr-2"
          src="/images.jpg"
          alt="logo"
        />
        <Link to="/" className="text-xs md:text-2xl font-bold text-blue-600">
          FreelanceHub
        </Link>
      </div>

      {/* Center Nav for Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end relative">
        {user ? (
          <div className="relative user-dropdown">
            <img
              src={user.photoURL}
              alt="user"
              onClick={toggleDropdown}
              className="w-10 h-10 rounded-full border-2 border-blue-500 cursor-pointer object-cover"
            />

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 top-12 bg-white border rounded-lg shadow-lg p-4 text-sm w-44 z-20">
                <span className="block text-blue-600 font-semibold mb-2 text-center">
                  {user.displayName}
                </span>

                <NavLink
                  to="/add-task"
                  onClick={() => setDropdownOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 py-1"
                >
                  ➕ Add Task
                </NavLink>
                <NavLink
                  to="/my-posted-tasks"
                  onClick={() => setDropdownOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 py-1"
                >
                  📋 My Posted Tasks
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="block text-red-500 hover:underline py-1 mt-2 w-full text-left"
                >
                  🚪 Log out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <NavLink
              to="/login"
              className="btn bg-blue-500 md:mt-2 text-white hover:underline text-sm"
            >
              Log in
            </NavLink>
            <NavLink
              to="/register"
              className="btn bg-blue-500 md:mt-2 text-white hover:underline text-sm"
            >
              Sign-Up
            </NavLink>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Navber;
