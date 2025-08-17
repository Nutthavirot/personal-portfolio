// src/components/ProjectCard.js
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden p-4 hover:scale-105 transition">
      <img src={project.image} alt={project.title} className="rounded-lg mb-3" />
      <h3 className="text-lg font-bold">{project.title}</h3>
      <p className="text-gray-600 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 px-2 py-1 rounded-lg text-xs">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3 mt-3">
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          Demo
        </a>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
