import React, { useState } from "react";
import ProjectPopup from "./ProjectPopup";
import AllProjectsPopup from "./AllProjectsPopup";
import ProjectCard from "./ProjectCard";
import ViewAllButton from "./ViewAllButton.jsx";
import projects from "./data/projectsData.js";

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showAllProjects, setShowAllProjects] = useState(false);

    return (
        <section id="projects" className="py-16 px-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-bold text-left">Proyectos</h2>
                <ViewAllButton onClick={() => setShowAllProjects(true)} />
            </div>

            {/* Mostrar solo 3 proyectos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.slice(0, 3).map((project) => (
                    <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
                ))}
            </div>

            {/* Pop-ups */}
            {selectedProject && <ProjectPopup project={selectedProject} onClose={() => setSelectedProject(null)} />}
            {showAllProjects && (
                <AllProjectsPopup projects={projects} onSelectProject={setSelectedProject} onClose={() => setShowAllProjects(false)} />
            )}
        </section>
    );
};

export default ProjectsSection;
