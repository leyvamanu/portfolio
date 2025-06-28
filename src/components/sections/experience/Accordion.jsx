import React, { useState } from "react";
import TechBadge from "../../utils/TechBadge.jsx";

const Accordion = ({ experience }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" };
        return new Date(dateString).toLocaleDateString("es-ES", options);
    };

    return (
        <div className="bg-gradient border-4 shadow-xl rounded-xl">
            <div
                className={`md:flex justify-between items-center p-2 md:p-4 cursor-pointer group relative bg-orange-app ${
                    isOpen ? "rounded-t-md" : "rounded-md"
                }`}
                onClick={toggleAccordion}
            >
                <span className={`absolute inset-0 bg-black/20 left-0 w-0 group-hover:w-full transition-all duration-500 ${
                    isOpen ? "rounded-t-md" : "rounded-md"
                }`}></span>
                <div className="flex items-center space-x-4 bg-b z-10">
                    {experience.logo && (
                        <img src={experience.logo} alt={experience.company}
                             className="w-12 h-12 object-contain rounded-full bg-white"/>
                    )}
                    <div>
                        <h3 className="text-lg font-bold">{experience.company}</h3>
                        <p className="text-sm">{experience.position}</p>
                    </div>
                </div>

                <div className="text-sm z-1 mt-2 md:m-0">
                    {formatDate(experience.start_date)} -{" "}
                    {experience.end_date ? formatDate(experience.end_date) : "Actualmente"}
                </div>
            </div>

            <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out bg-gradient rounded-b-lg ${
                    isOpen ? "max-h-96" : "max-h-0"
                }`}
            >
                <div className="p-4">
                    <div className="max-h-64 overflow-y-auto">
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: experience.description.replace(/\n/g, "<br />") }} />
                    </div>
                    <div>
                        <h4 className="font-bold my-2">Habilidades:</h4>
                        {experience.skills && experience.skills.length > 0 ? (
                            <div className="flex gap-3 overflow-auto pb-3">
                                {experience.skills.map((skill) => (
                                    <TechBadge key={skill} tech={skill}/>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-white">No se proporcionaron habilidades específicas.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;