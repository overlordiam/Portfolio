// src/components/Skills.js
import React from "react";

const Skills = () => {
  const skills = {
    "Programming Languages": ["Python", "Java", "C/C++", "JavaScript"],
    Technologies: [
      "Pandas", "NumPy", "Langchain", "LoopGPT", "TensorFlow", "PyTorch", "NLTK", "spaCy", "Scikit-learn", "Azure Data Factory",
      "PySpark", "Git", "Docker", "Kubernetes", "FastAPI", "SQL", "MongoDB", "Neo4j", "Linux scripting", "Next.js", "React.js",
      "Redux", "React Query", "TypeScript", "Express.js", "Node.js", "MySQL", "PostgreSQL", "TailWindCSS", "AWS", "DataBricks",
      "Azure DevOps Services", "Microsoft SQL Server"
    ],
    Concepts: [
      "Artificial Intelligence", "Machine Learning", "Deep Learning", "Natural Language Processing (NLP)", "Retrieval-augmented Generation",
      "Large Language Models (LLMs)", "GenAI", "Graph Databases", "Prompt Engineering", "Algorithms Design", "Data Analysis",
      "Communication", "Collaboration", "State Management", "RESTful APIs", "React Hooks", "Agile Methodology", "Application Development",
      "Data Engineering", "Problem Solving", "Attention to Detail"
    ]
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-6xl font-bold mb-8 text-center">My Skills</h2>
      {Object.entries(skills).map(([category, skillsList], index) => (
        <div key={index} className="mb-12">
          <h3 className="text-2xl font-bold mb-6">{category}</h3>
          <div className="flex flex-wrap gap-4">
            {skillsList.map((skill, i) => (
              <span key={i} className="bg-gray-800 text-white py-2 px-4 rounded-full shadow-md hover:bg-gray-700 transition duration-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
