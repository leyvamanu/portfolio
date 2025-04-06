import React, { useEffect, useState } from "react";
import CloseButton from "../../utils/CloseButton.jsx";

const PrivacyPolicyModal = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        setTimeout(() => setIsVisible(true), 10);

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 transition-opacity duration-300 mx-2">
            <div
                className={`bg-gradient border-14 p-4 shadow-xl rounded-4xl max-w-7xl w-full relative transform transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
                }`}
            >
                <CloseButton onClick={onClose} />
                <h2 className="text-3xl font-bold mb-4">
                    Política de Privacidad para el Formulario de Contacto
                </h2>
                <div className="overflow-y-auto h-96">
                    <h3 className="text-2xl font-bold">Recopilación de datos personales</h3>
                    <p>Al utilizar el formulario de contacto en mi sitio web, recopilo los siguientes datos personales:</p>
                    <ul className="list-disc ml-4">
                        <li>Nombre</li>
                        <li>Correo electrónico</li>
                        <li>Mensaje</li>
                    </ul>

                    <h3 className="text-2xl font-bold mt-4">Uso de los datos</h3>
                    <p>
                        Los datos recopilados a través del formulario de contacto se utilizarán exclusivamente para
                        responder a la consulta que envíes. Estos datos se enviarán directamente a mi dirección de correo
                        electrónico para que pueda ponerme en contacto contigo y proporcionarte la respuesta adecuada.
                    </p>

                    <h3 className="text-2xl font-bold mt-4">Almacenamiento de datos</h3>
                    <p>
                        Los datos que envíes a través del formulario de contacto no se almacenarán en una base de datos ni
                        en ninguna plataforma externa. Solo serán enviados a mi correo electrónico para gestionar la
                        comunicación. No conservo los datos más allá del tiempo necesario para responder a tu consulta.
                    </p>
                    <h3 className="text-2xl font-bold mt-4">Seguridad de los datos</h3>
                    <p>
                        Tu privacidad es importante para mí. Los datos enviados a través del formulario de contacto se
                        transmiten de forma segura y solo serán accesibles para las personas autorizadas que gestionen las
                        consultas.
                    </p>

                    <h3 className="text-2xl font-bold mt-4">Derechos del usuario</h3>
                    <p>
                        Tienes derecho a solicitar el acceso, corrección o eliminación de cualquier dato personal que me
                        hayas proporcionado. Si tienes alguna pregunta o inquietud sobre el uso de tus datos, no dudes en
                        ponerte en contacto conmigo.
                    </p>

                    <h3 className="text-2xl font-bold mt-4">Contacto</h3>
                    <p>
                        Si tienes alguna pregunta sobre mi política de privacidad o el uso de tus datos, por favor contáctame a través del correo electrónico:
                        <a href="mailto:info@manuleyva.com"
                           className="relative inline-block transition-colors duration-300 group text-white hover:text-orange-app">
                            <span>info@manuleyva.com</span>
                            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white transition-all duration-300"></span>
                            <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-orange-app group-hover:w-full transition-all duration-300"></span>
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyModal;