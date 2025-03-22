import React from "react";

const CloseButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute top-2 right-3 text-orange-app hover:text-orange-app-hover cursor-pointer transition-colors duration-300 font-bold text-3xl"
            aria-label="Cerrar"
        >
            ✖
        </button>
    );
};

export default CloseButton;
