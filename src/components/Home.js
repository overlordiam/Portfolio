import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        {/* Name Section */}
        <h1 className="text-7xl font-bold mb-4">Suhaas Gummalam</h1>
        <p className="text-3xl mb-8">Welcome to my portfolio website!</p>

        {/* Social Icons Section */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/overlordiam" target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://linkedin.com/in/suhaas-gummalam" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-2xl hover:text-gray-400" />
          </a>
          <a href="mailto:suhaasgummalam7710@gmail.com">
            <FaEnvelope className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://medium.com/@suhaasgummalam" target="_blank" rel="noreferrer">
            <FaMedium className="text-2xl hover:text-gray-400" />
          </a>
        </div>

        {/* About Me Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Who Am I?</h2>
          <p className="text-lg mb-4">
            Hi there! Pleasure to meet you. Curious as to who Suhaas is? A wizard in Web Development? The G.O.A.T. in Artificial Intelligence? Or perhaps a Data Engineering Maestro? Well, I’m pretty much all of that—minus the ostentatious adjectives!
            I am also a technical blogger, sharing insights and experiences from my journey through the tech world. More formally, I am a passionate software developer and engineer who thrives at the intersection of technology and creativity. With a Bachelor's and a Master's degree in Computer Science, along with a strong background in web development, AI, and data engineering, I bring a diverse set of skills to tackle complex challenges and create impactful solutions.
          </p>
          <p className="text-lg mb-4">
            Over the years, I have developed several web applications, explored the potential of artificial intelligence in solving real-world problems, and worked with vast datasets to derive meaningful insights. I love building things from scratch, whether it's a website, a machine learning model, or a compelling story on my blog.
          </p>
          <p className="text-lg">
            When I'm not coding or experimenting with new tech, you’ll find me reading, playing an active sport like volleyball or football (I can play them all day) and learning new languages (currently Japanese and Korean, crazy right!!).
          </p>
        </div>

        {/* Buttons for Education and Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Link to="/education" className="bg-gray-800 p-6 rounded hover:bg-gray-700 transition duration-300">
            My Education
          </Link>
          <Link to="/skills" className="bg-gray-800 p-6 rounded hover:bg-gray-700 transition duration-300">
            My Skills
          </Link>
        </div>

        {/* Different roles Section */}
        <h2 className="text-3xl font-bold mb-10">Tap in to explore the different versions of me</h2>
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
