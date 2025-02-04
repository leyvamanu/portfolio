import React, { useState, useEffect } from 'react';
import MenuLink from './MenuLink';
import MobileMenuButton from './MobileMenuButton';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const options = { root: null, rootMargin: '0px', threshold: 0.6 };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <nav className="custom-gradient p-4 fixed w-full z-20">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">MiPortfolio</div>
                <div className="hidden md:flex space-x-8">
                    <MenuLink href="#home" active={activeSection === 'home'}>Inicio</MenuLink>
                    <MenuLink href="#about" active={activeSection === 'about'}>Acerca</MenuLink>
                    <MenuLink href="#services" active={activeSection === 'services'}>Servicios</MenuLink>
                    <MenuLink href="#contact" active={activeSection === 'contact'}>Contacto</MenuLink>
                </div>
                <div className="md:hidden">
                    <MobileMenuButton
                        menuOpen={menuOpen}
                        toggleMenu={() => setMenuOpen(!menuOpen)}
                    />
                </div>
            </div>
            {/* Menú móvil deslizable desde la izquierda */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-black/80 backdrop-blur-sm transform transition-transform duration-300 z-30 ${
                    menuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="p-4">
                    <ul className="flex flex-col space-y-4">
                        <li>
                            <MenuLink
                                href="#home"
                                active={activeSection === 'home'}
                                onClick={() => setMenuOpen(false)}
                            >
                                Inicio
                            </MenuLink>
                        </li>
                        <li>
                            <MenuLink
                                href="#about"
                                active={activeSection === 'about'}
                                onClick={() => setMenuOpen(false)}
                            >
                                Acerca
                            </MenuLink>
                        </li>
                        <li>
                            <MenuLink
                                href="#services"
                                active={activeSection === 'services'}
                                onClick={() => setMenuOpen(false)}
                            >
                                Servicios
                            </MenuLink>
                        </li>
                        <li>
                            <MenuLink
                                href="#contact"
                                active={activeSection === 'contact'}
                                onClick={() => setMenuOpen(false)}
                            >
                                Contacto
                            </MenuLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;