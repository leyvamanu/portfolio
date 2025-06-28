import { useState, useEffect } from 'react';
import MenuLink from './MenuLink';
import MobileMenuButton from './MobileMenuButton';
import Logo from "./Logo.jsx";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('cv');

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        if (sections.length === 0) return; // Evitar errores si no hay secciones

        const handleScroll = () => {
            let currentSection = sections[0].id; // Tomamos la primera sección automáticamente

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Ejecutar al cargar para marcar la sección correcta

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="bg-gradient-menu p-4 fixed w-full z-20">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Logo />
                <div className="hidden md:flex space-x-8">
                    <MenuLink href="#cv" active={activeSection === 'cv'}>CV</MenuLink>
                    <MenuLink href="#experience" active={activeSection === 'experience'}>Experiencia</MenuLink>
                    <MenuLink href="#projects" active={activeSection === 'projects'}>Proyectos</MenuLink>
                    <MenuLink href="#about-me" active={activeSection === 'about-me'}>Sobre Mi</MenuLink>
                    <MenuLink href="#contact" active={activeSection === 'contact'}>Contacto</MenuLink>
                </div>
                <div className="md:hidden">
                    <MobileMenuButton menuOpen={menuOpen} toggleMenu={() => setMenuOpen(!menuOpen)}/>
                </div>
            </div>

            <div
                className={`fixed top-0 left-0 h-full w-64 bg-black/80 backdrop-blur-sm transform transition-transform duration-300 z-30 ${
                    menuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="p-4">
                    <ul className="flex flex-col space-y-4">
                        <li><MenuLink href="#cv" active={activeSection === 'cv'}>CV</MenuLink></li>
                        <li><MenuLink href="#experience" active={activeSection === 'experience'}>Experiencia</MenuLink></li>
                        <li><MenuLink href="#projects" active={activeSection === 'projects'}>Proyectos</MenuLink></li>
                        <li><MenuLink href="#about-me" active={activeSection === 'about-me'}>Sobre Mi</MenuLink></li>
                        <li><MenuLink href="#contact" active={activeSection === 'contact'}>Contacto</MenuLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;