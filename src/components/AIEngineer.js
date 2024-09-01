// src/components/WebDeveloper.js
import React from "react";
import SectionTemplate from "./SectionTemplate";

const AIEngineer = () => {
  const projects = [
    { name: "Project One", description: "A cool web development project.", link: "#" },
    { name: "Project Two", description: "Another cool web development project.", link: "#" },
    // Add more projects as needed
  ];

  return <SectionTemplate title="Suhaas as a Web Developer" projects={projects} />;
};

export default AIEngineer;
