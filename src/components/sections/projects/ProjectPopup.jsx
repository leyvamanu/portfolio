import React, { useEffect, useState } from "react";
import CloseButton from "./CloseButton";
import TechBadge from "./TechBadge.jsx";

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
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-60 transition-opacity duration-300 mx-2">
            <div
                className={`bg-gradient border-14 p-4 shadow-xl rounded-4xl max-w-xl w-full relative transform transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
                }`}
            >
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <div className="border-4 rounded-xl h-full overflow-y-auto">
                    <CloseButton onClick={onClose} />
                    <img src={project.image} alt={project.title} className="w-full h-60 object-cover rounded" />
                    <div className="p-2">
                        <p className="mt-2 max-h-32 overflow-y-auto" dangerouslySetInnerHTML={{ __html: project.fullDesc.replace(/\n/g, "<br />") }} />
                        <p className="mt-4 font-semibold">Tipo: <span>{project.type}</span></p>

                        {project.url && (
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition">
                                🌐 Ver proyecto
                            </a>
                        )}

                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-gray-600 hover:text-gray-800 transition">
                                🔗 Ver en GitHub
                            </a>
                        )}

                        <div className="mt-4 flex md:flex-wrap overflow-auto gap-2">
                            {project.technologies.map((tech) => (
                                <TechBadge key={tech} tech={tech} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPopup;
