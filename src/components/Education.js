// src/components/Education.js
import React from "react";

const Education = () => {
  const degrees = [
    {
      degree: "Master's in Applied Computer Science",
      institution: "Concordia University",
      duration: "2022 - 2024",
      gpa: "3.6",
      courses: [
        "Advanced Programming Practices",
        "Software Design Methodolgies",
        "Natural Language Processing",
        "Big Data Analytics",
        "Algorithms and Data Structures",
        "Applied Artificial Intelligence",
        "Comupter Networks"
      ],
    },
    {
      degree: "Bachelor's in Information Science",
      institution: "Dayananda Sagar College of Engineering",
      duration: "2018 - 2022",
      gpa: "3.9",
      courses: [
        "Data Structures and Algorithms",
        "Machine Learning Algorithms",
        "Database Management Systems",
        "Software Design Principles and Testing",
        "Blockchain",
        "Database Management",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-6xl font-bold mb-16 text-center">My Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {degrees.map((degree, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-bold mb-4">{degree.degree}</h3>
            <p className="text-lg font-semibold mb-2">{degree.institution}</p>
            <p className="text-md mb-4">{degree.duration}</p>
            <h4 className="text-lg font-semibold mb-2">Key Courses:</h4>
            <ul className="list-disc list-inside text-md">
              {degree.courses.map((course, i) => (
                <li key={i} className="mb-1">{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
