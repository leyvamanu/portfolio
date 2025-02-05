import { useState, useEffect } from 'react';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={scrollToTop}
                aria-label="Volver arriba"
                className={`relative overflow-hidden p-3 cursor-pointer bg-orange-app rounded-xl shadow-lg transition-all duration-500 ease-in-out transform group ${
                    isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
                }`}
            >
                <span className="absolute left-0 right-0 bottom-0 h-0 bg-black/20 group-hover:h-full transition-all duration-500"></span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white relative z-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </div>
    );
};

export default BackToTopButton;
