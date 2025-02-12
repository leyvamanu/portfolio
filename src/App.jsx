import './App.css'
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import CVSection from "./components/sections/cv/CVSection.jsx";
import BackToTopButton from "./components/BackToTopButton.jsx";
import ProjectsSection from "./components/sections/projects/ProjectsSection.jsx";

const App = () => {
    return (
        <div className="flex-col min-h-screen items-center justify-center bg-gradient-menu text-white">
            <NavBar />
            <CVSection />
            <ProjectsSection />

            <section id="services" className="min-h-screen flex items-center justify-center">
                <h2 className="text-3xl font-bold">Servicios</h2>
            </section>

            <section id="contact" className="min-h-screen flex items-center justify-center">
                <h2 className="text-3xl font-bold">Contacto</h2>
            </section>
            <Footer />
            <BackToTopButton />
        </div>
    );
}

export default App;