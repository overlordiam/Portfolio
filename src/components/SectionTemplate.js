// src/components/SectionTemplate.js
import React from "react";

const SectionTemplate = ({ title, subtitle, projects, internships }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <h3 className="text-xl font-bold mb-8">{subtitle}</h3>

      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded hover:bg-gray-700 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
            <p className="mb-4">
              <span className="font-bold">A short description:</span>{" "}
              {project.description}
            </p>
            <p className="mb-4">
              <span className="font-bold">Story time:</span> {project.storyTime}
            </p>
            {/* Conditional rendering using logical AND */}
            {project.technologies && (
              <p className="mb-4">
                <span className="font-bold">Tech:</span> {project.technologies}
              </p>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              View
            </a>
          </div>
        ))}
      </div>

      {/* Internships Section */}
      {internships && internships.length > 0 && (
        <>
          <h3 className="text-2xl font-bold mt-12 mb-6">Internships</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded hover:bg-gray-700 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{internship.company}</h3>
                <p className="mb-4">
                  <span className="font-bold">Role:</span> {internship.role}
                </p>
                <p className="mb-4">
                  <span className="font-bold">Duration:</span> {internship.duration}
                </p>
                {internship.technologies && (
                  <p className="mb-4">
                    <span className="font-bold">Tech:</span> {internship.technologies}
                  </p>
                )}
                {internship.description && internship.description.length > 0 && (
                  <div className="mb-4">
                    <span className="font-bold">Description:</span>
                    <ul className="list-disc list-inside mt-2">
                      {internship.description.map((point, i) => (
                        <li key={i} className="text-gray-300">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {internship.link && (
                  <a
                    href={internship.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    More Info
                  </a>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SectionTemplate;
