import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-indigo-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-semibold">
          QuizMaster!
        </Link>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex flex-col sm:flex-row sm:space-x-4 absolute sm:static left-0 top-16 sm:top-0 w-full sm:w-auto bg-indigo-600 sm:bg-transparent z-10`}
        >
          <Link
            to="/"
            className="text-white block px-4 py-2 sm:p-0 hover:text-indigo-200 transition"
          >
            Home
          </Link>
          <Link
            to="/quizzes"
            className="text-white block px-4 py-2 sm:p-0 hover:text-indigo-200 transition"
          >
            Quizzes
          </Link>
          <Link
            to="/about"
            className="text-white block px-4 py-2 sm:p-0 hover:text-indigo-200 transition"
          >
            About
          </Link>
          <Link
            to="/profile"
            className="text-white block px-4 py-2 sm:p-0 hover:text-indigo-200 transition"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
