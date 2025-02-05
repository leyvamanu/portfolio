import heroImage from '../../../assets/hero.png';
import logo from '../../../assets/logo-icon-bg-transparent.svg';
import DownloadButton from "./DownloadButton.jsx";

const CVSection = () => {
    return (
        <section
            id="cv"
            className="relative w-full h-screen min-h-[40rem] bg-fixed bg-cover bg-center"
            style={{backgroundImage: `url(${heroImage})`}}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gradient rounded-full mx-4 text-center flex justify-center items-center border-14 h-80 w-80 md:h-96 md:w-96">
                    <div className="rounded-full mx-4 flex justify-center items-center border-4 h-64 w-64 md:h-80 md:w-80">
                        <div className="flex-col justify-items-center">
                            <div className="flex items-center justify-center">
                                <img src={logo} className="h-14 md:h-20 mb-2" alt="Manuel Leyva Desarrollador Web - Logo"/>
                            </div>
                            <h1 className="text-3xl md:text-4xl text-white uppercase outlast">
                                Manu Leyva
                            </h1>
                            <h2 className="text-xl md:text-2xl text-orange-app outlast">
                                Desarrollador Web
                            </h2>
                            <div className="mt2 flex items-center justify-center">
                                <DownloadButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CVSection;