import React from "react";
import techIcons from "./data/techIconsData";

const TechBadge = ({tech}) => {
    return (
        <span className="flex items-center bg-orange-app text-sm px-3 py-1 rounded gap-2">
            <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
                <img src={techIcons[tech] || "https://via.placeholder.com/20"} alt={tech} className="w-4 h-4" />
            </div>
            {tech}
        </span>
    );
};

export default TechBadge;
