import React, { useState, useEffect } from "react";
import CloseButton from "../../utils/CloseButton.jsx";
import ProjectCard from "./ProjectCard";
import TechBadgeFilter from "./TechBadgeFilter.jsx";
import techIcons from "./data/techIconsData";
import ResetFiltersButton from "./ResetFiltersButton.jsx";

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
            selectedTech.every((tech) => project.technologies.includes(tech));

        return matchesTech;
    });

    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 transition-opacity duration-300 mx-2">
            <div
                className={`bg-gradient border-14 p-4 shadow-xl rounded-4xl max-w-7xl w-full overflow-hidden h-[80vh] relative transform transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
                }`}
            >
                <CloseButton onClick={onClose} />
                <h3 className="text-2xl font-bold mb-4">Todos los proyectos</h3>

                {/* Contenedor de filtros y botón para desmarcar */}
                <div className="flex justify-between items-start mb-4 space-x-3">
                    <div className="flex md:flex-wrap gap-3 overflow-auto">
                        {Object.keys(techIcons).map((tech) => (
                            <TechBadgeFilter
                                key={tech}
                                tech={tech}
                                onClick={() => toggleTechFilter(tech)}
                                isActive={selectedTech.includes(tech)}
                            />
                        ))}
                    </div>
                    <ResetFiltersButton onClick={() => setSelectedTech([])}/>
                </div>

                <div className="overflow-y-auto max-h-[57vh] md:max-h-[60vh] p-4">
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
