import 'react';
import RRSSIcon from "./RRSSIcon.jsx";
import GitHubIconSVG from "./GitHubIconSVG.jsx";
import LinkedinIconSVG from "./LinkedinIconSVG.jsx";
import Email from "./Email.jsx";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-gray-300 py-8">
            <div className="max-w-7xl mx-auto px-4 border-t border-t-orange-app pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-bold text-white">MiPortfolio</h2>
                        <p className="text-sm">
                            © {currentYear} MiNombre. Todos los derechos reservados.
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
