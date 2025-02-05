import React, { useEffect, useState } from "react";
import CloseButton from "./CloseButton";

const ProjectPopup = ({ project, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        setTimeout(() => setIsVisible(true), 10); // 🔹 Retrasa el cambio de estado para permitir la animación

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-60 transition-opacity duration-300">
            <div
                className={`bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative transform transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
                }`}
            >
                <CloseButton onClick={onClose} />
                <img src={project.image} alt={project.title} className="w-full h-60 object-cover rounded" />
                <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
                <p className="text-gray-700 mt-2">{project.fullDesc}</p>
                <p className="mt-4 font-semibold">Tipo: <span className="text-gray-600">{project.type}</span></p>

                {/* Enlace al proyecto si está disponible */}
                {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition">
                        🌐 Ver proyecto
                    </a>
                )}

                {/* Enlace a GitHub si está disponible */}
                {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-gray-600 hover:text-gray-800 transition">
                        🔗 Ver en GitHub
                    </a>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="bg-orange-200 text-sm px-2 py-1 rounded">
              {tech}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectPopup;
