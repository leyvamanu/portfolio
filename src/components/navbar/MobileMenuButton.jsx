const MobileMenuButton = ({ menuOpen, toggleMenu }) => {
    return (
        <button onClick={toggleMenu} className="relative w-8 h-8 focus:outline-none">
            <span
                className={`block absolute left-0 w-8 h-0.5 bg-white transition-transform duration-400 ease-in-out ${
                    menuOpen ? 'top-1/2 rotate-45' : 'top-[20%]'
                }`}
            ></span>

            <span
                className={`block absolute left-0 w-8 h-0.5 bg-white transition-opacity duration-400 ease-in-out ${
                    menuOpen ? 'opacity-0' : 'top-1/2 transform -translate-y-1/2 opacity-100'
                }`}
            ></span>

            <span
                className={`block absolute left-0 w-8 h-0.5 bg-white transition-transform duration-400 ease-in-out ${
                    menuOpen ? 'top-1/2 -rotate-45' : 'top-[75%]'
                }`}
            ></span>
        </button>
    );
};

export default MobileMenuButton;
