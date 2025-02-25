import React from "react";

const ViewAllButton = ({ onClick, text = "Ver todos" }) => {
    return (
        <button
            onClick={onClick}
            className="relative inline-block hover:text-orange-app cursor-pointer transition-colors duration-300 group"
        >
            {text}
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white transition-all duration-300"></span>
            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-orange-app group-hover:w-full transition-all duration-300"></span>
        </button>
    );
};

export default ViewAllButton;
