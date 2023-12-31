import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataProvider } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { user, logout } = useContext(DataProvider);

  const userLogOut = () => {
    logout()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  };
  return (
    <nav className="bg-black bg-opacity-50 fixed z-10 container mx-auto p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-white font-semibold text-xl">
              SwiftEn<span className="text-red-700">roll</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className="text-white hover:text-red-700 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/colleges"
              className="text-white hover:text-red-700 px-3 py-2 rounded-md"
            >
              Colleges
            </Link>
            <Link
              to="/admission"
              className="text-white hover:text-red-700 px-3 py-2 rounded-md"
            >
              Admission
            </Link>
            <Link
              to="/mycollege"
              className="text-white hover:text-red-700 px-3 py-2 rounded-md"
            >
              My College
            </Link>
            {user ? (
              <Link
                onClick={userLogOut}
                className="px-3 py-2 bg-red-700 text-white rounded-lg hover:bg-red-600"
              >
                Logout
              </Link>
            ) : (
              <Link
                to="/login"
                className="py-2 px-3  bg-white text-black hover:bg-black hover:text-white rounded-lg"
              >
                Login
              </Link>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-40 py-2">
          <Link
            to="/"
            className="block text-white hover:text-red-700 px-4 py-2"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-red-700 px-4 py-2"
          >
            Colleges
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-red-700 px-4 py-2"
          >
            Admission
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-red-700 px-4 py-2"
          >
            My College
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
