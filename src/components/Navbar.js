// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-8 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Home Link */}
        <Link to="/" className="text-2xl font-bold hover:text-gray-400">
          Suhaas Portfolio
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/education" className="hover:text-gray-400">
            Education
          </Link>
          <Link to="/skills" className="hover:text-gray-400">
            Skills
          </Link>
          <Link to="/web-developer" className="hover:text-gray-400">
            Web Developer
          </Link>
          <Link to="/ai-engineer" className="hover:text-gray-400">
            AI Engineer
          </Link>
          <Link to="/data-engineer" className="hover:text-gray-400">
            Data Engineer
          </Link>
          <Link to="/blogger" className="hover:text-gray-400">
            Blogger
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
