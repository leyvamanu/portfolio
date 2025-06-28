import React, { useState, useEffect } from "react";
import Accordion from "./Accordion.jsx";
const API_URL = import.meta.env.VITE_API_URL;

const ExperienceSection = () => {
    const [experiences, setExperiences] = useState([]);

    // Función para obtener datos desde el backend
    const fetchExperiences = async () => {
        try {
            const response = await fetch(`${API_URL}/experiences`);
            const data = await response.json();
            setExperiences(data.data || []);
        } catch (error) {
            console.error("Error fetching experiences:", error);
        }
    };

    useEffect(() => {
        fetchExperiences();
    }, []);

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
