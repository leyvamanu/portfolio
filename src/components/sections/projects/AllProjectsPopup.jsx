import React, { useState, useEffect } from "react";
import CloseButton from "./CloseButton";
import ProjectCard from "./ProjectCard";

const AllProjectsPopup = ({ projects, onSelectProject, onClose }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("Todos");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        setIsVisible(true); // Activa la animación cuando el pop-up se monta
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const filteredProjects = projects.filter((project) =>
        (filterType === "Todos" || project.type === filterType) &&
        project.technologies.some((tech) =>
            tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 transition-opacity duration-300">
            <div
                className={`bg-gradient border-14 p-4 shadow-xl rounded-4xl max-w-7xl w-full overflow-y-scroll h-[80vh] relative transform transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
                }`}
            >
                <CloseButton onClick={onClose} />
                <h3 className="text-2xl font-bold mb-4">Todos los proyectos</h3>

                <input
                    type="text"
                    placeholder="Buscar por tecnología..."
                    className="w-full p-2 border rounded-md mb-4"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select
                    className="p-2 border rounded-md mb-4"
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                >
                    <option>Todos</option>
                    <option>Profesional</option>
                    <option>Personal</option>
                </select>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} onClick={onSelectProject} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProjectsPopup;
