import React from "react";
import Accordion from "./Accordion.jsx";
import { experiences } from "../../../data/experiences.js";

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-16 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-left mb-6">Experiencia</h2>
            <div className="space-y-4">
                {experiences.map((exp, index) => (
                    <Accordion key={index} experience={exp} />
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
