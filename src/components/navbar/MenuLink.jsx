const MenuLink = ({href, active, onClick, children}) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`relative inline-block transition-colors duration-300 group
        ${active ? 'text-orange-app' : 'text-white'} 
        hover:text-orange-app`}
        >
            {children}
            <span
                className={`absolute left-0 bottom-0 h-0.5 bg-orange-app transition-all duration-300 ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
            ></span>
        </a>
    );
};

export default MenuLink;