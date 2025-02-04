import './App.css'
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

export default function App() {
    return (
        <div className="flex-col min-h-screen items-center justify-center bg-gradient text-white">
            <NavBar />
            <section id="home" className="min-h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold">Bienvenido</h1>
            </section>

            <section id="about" className="min-h-screen flex items-center justify-center">
                <h2 className="text-3xl font-bold">Acerca de Mí</h2>
            </section>

            <section id="services" className="min-h-screen flex items-center justify-center">
                <h2 className="text-3xl font-bold">Servicios</h2>
            </section>

            <section id="contact" className="min-h-screen flex items-center justify-center">
                <h2 className="text-3xl font-bold">Contacto</h2>
            </section>
            <Footer />
        </div>
    );
}
