import React, { useState, useEffect } from "react";
import ProjectPopup from "./ProjectPopup";
import AllProjectsPopup from "./AllProjectsPopup";
import ProjectCard from "./ProjectCard";
import ViewAllButton from "./ViewAllButton.jsx";

const ProjectsSection = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const [selectedProject, setSelectedProject] = useState(null);
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [featuredProjects, setFeaturedProjects] = useState([]);
    const [allProjects, setAllProjects] = useState([]);
    const [skills, setSkills] = useState([]);

    // Bloquear o desbloquear el scroll
    useEffect(() => {
        if (selectedProject || showAllProjects) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [selectedProject, showAllProjects]);

    // Cargar proyectos destacados desde el backend
    useEffect(() => {
        const fetchFeaturedProjects = async () => {
            try {
                const response = await fetch(`${API_URL}/featured-projects`); // Endpoint para proyectos destacados
                if (!response.ok) {
                    throw new Error("Error al cargar proyectos destacados");
                }
                const jsonResponse = await response.json();
                const featuredProjectsData = jsonResponse?.data;
                setFeaturedProjects(featuredProjectsData);
            } catch (error) {
                console.error("Error cargando proyectos destacados:", error);
            }
        };

        fetchFeaturedProjects();
    }, []);

    // Cargar todos los proyectos desde el backend (para la modalidad de "ver todos")
    useEffect(() => {
        const fetchAllProjects = async () => {
            try {
                const response = await fetch(`${API_URL}/projects`); // Endpoint para todos los proyectos
                if (!response.ok) {
                    throw new Error("Error al cargar todos los proyectos");
                }
                const jsonResponse = await response.json();
                const allProjectsData = jsonResponse?.data;
                setAllProjects(allProjectsData); // Asignar todos los proyectos
            } catch (error) {
                console.error("Error cargando todos los proyectos:", error);
            }
        };

        fetchAllProjects();
    }, []);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch(`${API_URL}/skills`);
                if (!response.ok) {
                    throw new Error("Error al cargar las habilidades");
                }
                const jsonResponse = await response.json();
                const skillsData = jsonResponse?.data;
                setSkills(skillsData);
            } catch (error) {
                console.error("Error cargando todos las habilidades:", error);
            }
        };

        fetchSkills();
    }, []);

    return (
        <section id="projects" className="py-16 px-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-4xl font-bold text-left">Proyectos</h2>
                <ViewAllButton onClick={() => setShowAllProjects(true)} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.length > 0 ? (
                    featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
                    ))
                ) : (
                    <p>Cargando proyectos destacados...</p>
                )}
            </div>

            {selectedProject && <ProjectPopup project={selectedProject} onClose={() => setSelectedProject(null)} />}
            {showAllProjects && (
                <AllProjectsPopup skills={skills} projects={allProjects} onSelectProject={setSelectedProject} onClose={() => setShowAllProjects(false)} />
            )}
        </section>
    );
};

export default ProjectsSection;