import 'react';
import cv from '../../assets/CV Manuel Leyva.pdf';
import heroImage from '../../assets/hero.png';
import logo from '../../assets/logo-icon-bg-transparent.svg';

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
                                <a
                                    href={cv}
                                    download
                                    className="mt-3 md:text-lg flex bg-orange-app text-white p-3 md:px-5 rounded hover:bg-orange-app-hover transition-colors duration-300"
                                >
                                    <span className="mr-3">Descargar</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor" className="size-6">
                                        <path
                                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default CVSection;