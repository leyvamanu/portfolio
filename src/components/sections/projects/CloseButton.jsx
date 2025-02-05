import React from "react";

const CloseButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute top-2 right-2 text-orange-app hover:cursor-pointer transition-colors duration-300"
            aria-label="Cerrar"
        >
            ✖
        </button>
    );
};

export default CloseButton;
