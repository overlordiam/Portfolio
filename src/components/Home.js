// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Suhaas</h1>
        <p className="text-xl mb-8">Welcome to my portfolio website!</p>
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-2xl hover:text-gray-400" />
          </a>
          <a href="mailto:your-email@gmail.com">
            <FaEnvelope className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://medium.com/@yourusername" target="_blank" rel="noreferrer">
            <FaMedium className="text-2xl hover:text-gray-400" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/web-developer" className="bg-gray-800 p-6 rounded hover:bg-gray-700 transition duration-300">
            Suhaas as a Web Developer
          </Link>
          <Link to="/ai-engineer" className="bg-gray-800 p-6 rounded hover:bg-gray-700 transition duration-300">
            Suhaas as an AI Engineer
          </Link>
          <Link to="/data-engineer" className="bg-gray-800 p-6 rounded hover:bg-gray-700 transition duration-300">
            Suhaas as a Data Engineer
          </Link>
          <Link to="/blogger" className="bg-gray-800 p-6 rounded hover:bg-gray-700 transition duration-300">
            Suhaas as a Blogger
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
