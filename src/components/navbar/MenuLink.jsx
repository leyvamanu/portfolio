import React from 'react';

const MenuLink = ({ href, active, onClick, children }) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`relative inline-block transition-colors duration-300 group 
        ${active ? 'text-orange-logo' : 'text-white'} 
        hover:text-orange-logo`}
        >
            {children}
            <span
                className={`absolute left-0 bottom-0 h-0.5 bg-orange-logo transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
            ></span>
        </a>
    );
};

export default MenuLink;