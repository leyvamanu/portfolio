import "react";
import TechBadge from "../../utils/TechBadge.jsx";

const ProjectCard = ({ project, onClick }) => {
    return (
        <div
            className="bg-gradient border-4 shadow-xl rounded-xl cursor-pointer transition-transform hover:scale-105"
            onClick={() => onClick(project)}
        >
            <img src={project.image} alt={project.title} className="w-full h-60 object-cover rounded-t-lg" />
            <div className="p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p>{project.short_desc}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                    {project.skills.map((tech) => (
                        <TechBadge key={tech.id} tech={tech} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
