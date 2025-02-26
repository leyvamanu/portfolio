import './App.css'
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import CVSection from "./components/sections/cv/CVSection.jsx";
import BackToTopButton from "./components/BackToTopButton.jsx";
import ProjectsSection from "./components/sections/projects/ProjectsSection.jsx";
import AboutMeSection from "./components/sections/about/AboutMeSection.jsx";
import ContactSection from "./components/sections/contact/ContactSection.jsx";

const App = () => {
    return (
        <div className="flex-col min-h-screen items-center justify-center bg-gradient-menu text-white">
            <NavBar />
            <CVSection />
            <ProjectsSection />
            <AboutMeSection />
            <ContactSection />
            <Footer />
            <BackToTopButton />
        </div>
    );
}

export default App;