import React from "react";

const TechBadge = ({tech}) => {
    return (
        <div className="flex items-center bg-orange-app px-3 py-1 rounded gap-2">
            <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
            </div>
            <span>{tech.name}</span>
        </div>
    );
};

export default TechBadge;
