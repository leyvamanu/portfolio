import RRSSIcon from "./RRSSIcon.jsx";
import GitHubIconSVG from "./GitHubIconSVG.jsx";
import LinkedinIconSVG from "./LinkedinIconSVG.jsx";
import Email from "./Email.jsx";
import logo from "../../assets/images/logo-square-bg-transparent.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-gray-300 py-8">
            <div className="max-w-7xl mx-auto px-4 border-t border-t-orange-app pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <div className="flex justify-center">
                            <img src={logo} alt="Manu Leyva - Desarrollador Web - Logo" className="w-60"/>
                        </div>
                        <p className="text-sm text-center">
                            Manu Leyva - Desarrollador WEB
                        </p>
                        <p className="text-sm text-center">
                            © {currentYear} Todos los derechos reservados
                        </p>
                    </div>

                    <div className="flex-col md:flex-row">
                        <Email/>
                        <div className="flex space-x-4">
                            <RRSSIcon href="https://www.linkedin.com/in/manuel-leyva-de-la-morena-5a094b65/">
                                <LinkedinIconSVG/>
                            </RRSSIcon>
                            <RRSSIcon href="https://github.com/leyvamanu">
                                <GitHubIconSVG/>
                            </RRSSIcon>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
