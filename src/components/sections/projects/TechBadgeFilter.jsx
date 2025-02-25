import React from "react";
import techIcons from "./data/techIconsData";

const TechBadge = ({ tech, onClick, isActive }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-3 py-1 rounded-full border-2 transition-colors cursor-pointer ${
                isActive ? "bg-orange-app text-white border-orange-app" : "bg-white text-black border-gray-300"
            }`}
        >
            <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                <img
                    src={techIcons[tech] || "https://via.placeholder.com/20"}
                    alt={tech}
                    className="w-4 h-4"
                />
            </div>
            <span className="text-sm">{tech}</span>
        </button>
    );
};

export default TechBadge;
