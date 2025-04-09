import RRSSIcon from "./RRSSIcon.jsx";
import GitHubIconSVG from "./GitHubIconSVG.jsx";
import LinkedinIconSVG from "./LinkedinIconSVG.jsx";
import Email from "./Email.jsx";
import logo from "../../assets/images/logo-bg-transparent.png";
import logoCircle from "../../assets/images/logo-square-bg-transparent.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-gray-300 py-8">
            <div className="max-w-7xl mx-auto px-4 border-t border-t-orange-app pt-4">
                <div className="flex flex-col justify-center md:flex-row md:justify-between items-center md:items-start gap-4 md:gap-8">
                    <div className="flex justify-center">
                        <a href="/" className="hidden md:block">
                            <img src={logo} alt="Manu Leyva - Desarrollador Web - Logo" className="w-80" />
                        </a>
                        <a href="/" className="md:hidden">
                            <img src={logoCircle} alt="Manu Leyva - Desarrollador Web - Logo" className="w-52" />
                        </a>
                    </div>
                    <div className="mt-4 flex-col md:flex-row">
                        <Email/>
                        <div className="mt-8 flex justify-center space-x-4">
                            <RRSSIcon href="https://www.linkedin.com/in/manuel-leyva-de-la-morena-5a094b65/">
                                <LinkedinIconSVG/>
                            </RRSSIcon>
                            <RRSSIcon href="https://github.com/leyvamanu">
                                <GitHubIconSVG/>
                            </RRSSIcon>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm text-center">
                            © {currentYear} - Manu Leyva | Desarrollador WEB
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
