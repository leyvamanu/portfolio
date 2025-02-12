import "react";

const ProjectCard = ({ project, onClick }) => {
    return (
        <div
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
            onClick={() => onClick(project)}
        >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600">{project.shortDesc}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="bg-gray-200 text-sm px-2 py-1 rounded">
              {tech}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
