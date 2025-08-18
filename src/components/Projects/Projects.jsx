import { useState } from 'react';
import { useRef } from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/portfolioData';

function Projects() {
    const [filter, setFilter] = useState('all');
    const scrollRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir === 'left' ? -350 : 350, behavior: 'smooth' });
    // Get unique technologies for filter
    const technologies = ['all', ...new Set(
    projects.flatMap(project => project.technologies)
    )];
  
  // Filter projects based on selected technology
    const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.technologies.includes(filter)
      );

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">My Projects</h2>
                <p className="section-subtitle">Here are some of the projects I've worked on recently.</p>

                {/* Filter Buttons */}
            <div className="project-filters">
                {technologies.map(tech => (
                <button
                key={tech}
                className={`filter-btn ${filter === tech ? 'active' : ''}`}
                onClick={() => setFilter(tech)}
                >
                {tech.charAt(0).toUpperCase() + tech.slice(1)}
                </button>
                ))}
            </div>

                <div className="scroll-buttons">
                    <button onClick={() => scroll('left')}>&lt;</button>
                    <button onClick={() => scroll('right')}>&gt;</button>
                </div>

                <div className="projects-grid" ref={scrollRef}>
                    {loading ? (
                        <p className="loading-text">Loading...</p> // ✅ แสดง loading
                    ) : (
                    filteredProjects.map((p, i) => <ProjectCard key={i} project={p} />)
                )}
                </div>
            </div>
        </section>
    );
}

export default Projects;