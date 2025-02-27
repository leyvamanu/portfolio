import React, { useState, useEffect } from "react";
import CloseButton from "./CloseButton";
import ProjectCard from "./ProjectCard";
import TechBadgeFilter from "./TechBadgeFilter.jsx";
import techIcons from "./data/techIconsData";

const AllProjectsPopup = ({ projects, onSelectProject, onClose }) => {
    const [selectedTech, setSelectedTech] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        setIsVisible(true);
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const toggleTechFilter = (tech) => {
        setSelectedTech((prevSelected) =>
            prevSelected.includes(tech)
                ? prevSelected.filter((t) => t !== tech)
                : [...prevSelected, tech]
        );
    };

    const filteredProjects = projects.filter((project) => {
        const matchesTech =
            selectedTech.length === 0 ||
            selectedTech.some((tech) => project.technologies.includes(tech));

        return matchesTech;
    });

    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 transition-opacity duration-300">
            <div
                className={`bg-gradient border-14 p-4 shadow-xl rounded-4xl max-w-7xl w-full overflow-hidden h-[80vh] relative transform transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
                }`}
            >
                <CloseButton onClick={onClose} />
                <h3 className="text-2xl font-bold mb-4">Todos los proyectos</h3>

                {/* Contenedor de filtros y botón para desmarcar */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex flex-wrap gap-2">
                        {Object.keys(techIcons).map((tech) => (
                            <TechBadgeFilter
                                key={tech}
                                tech={tech}
                                onClick={() => toggleTechFilter(tech)}
                                isActive={selectedTech.includes(tech)}
                            />
                        ))}
                    </div>
                    <button
                        onClick={() => setSelectedTech([])}
                        className="relative inline-block bg-orange-app text-white p-3 cursor-pointer rounded group"
                    >
                        <div className="flex items-center justify-center w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                 className="bi bi-eraser" viewBox="0 0 16 16">
                                <path
                                    d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z"/>
                            </svg>
                        </div>
                        <span className="absolute inset-0 bg-black/20 left-0 w-0 group-hover:w-full transition-all duration-500"></span>
                    </button>
                </div>

                <div className="overflow-y-auto max-h-[50vh] md:max-h-[60vh] p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} onClick={onSelectProject}/>
                            ))
                        ) : (
                            <p className="text-center text-white">
                                No hay proyectos que coincidan con el filtro seleccionado.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProjectsPopup;
