import React from "react";

const TechBadge = ({ tech, onClick, isActive }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-3 py-1 rounded-full border-2 transition-colors cursor-pointer mb-1 md:mb-0 ${
                isActive ? "bg-orange-app text-white border-orange-app" : "bg-white text-black border-gray-300"
            }`}
        >
            <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                <img
                    src={tech.avatar || "https://via.placeholder.com/20"}
                    alt={tech.name}
                    className="w-4 h-4"
                />
            </div>
            <span className="text-sm">{tech.name}</span>
        </button>
    );
};

export default TechBadge;
