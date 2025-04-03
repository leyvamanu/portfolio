import React from "react";

const ResetFiltersButton = ({onClick}) => {
    return (
        <button
            onClick={onClick}
            className="relative inline-block bg-orange-app p-2 text-white md:p-3 cursor-pointer rounded group"
        >
            <div className="flex items-center justify-center w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                     className="bi bi-eraser" viewBox="0 0 16 16">
                    <path
                        d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z"/>
                </svg>
            </div>
            <span className="absolute inset-0 bg-black/20 left-0 w-0 group-hover:w-full transition-all duration-500"></span>
        </button>
    );
};

export default ResetFiltersButton;
