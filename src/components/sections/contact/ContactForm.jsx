import React, { useState } from "react";
import emailjs from "emailjs-com";
import cv from "../../../assets/CV Manuel Leyva.pdf";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
                "your_service_id",
                "your_template_id",
                formData,
                "your_user_id"
            );
            setSuccess(true);
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setSuccess(false);
        }

        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
                <label className="block">Nombre:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg mt-1"
                    required
                    placeholder="Escribe tu nombre..."
                />
            </div>
            <div className="mb-4">
                <label className="block">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg mt-1"
                    required
                    placeholder="Escribe tu e-mail..."
                />
            </div>
            <div className="mb-4">
                <label className="block">Mensaje:</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg mt-1 h-32"
                    required
                    placeholder="Escribe tu consulta..."
                />
            </div>
            <button
                type="submit"
                className="mt-3 md:text-lg relative cursor-pointer inline-block w-full bg-orange-app text-white px-3 md:px-6 py-3 rounded overflow-hidden transition-colors duration-300 group"
                disabled={isSubmitting}
            >
                <div className="flex items-center justify-center w-full">
                    {isSubmitting ? "Enviando..." : "Enviar"}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="size-5 ml-3" viewBox="0 0 16 16">
                        <path
                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                    </svg>
                </div>
                <span
                    className="absolute inset-0 bg-black/20 left-0 w-0 group-hover:w-full transition-all duration-500"></span>
            </button>
            {success !== null && (
                <p className={`mt-4 text-center ${success ? "text-green-600" : "text-red-600"}`}>
                    {success ? "Mensaje enviado con éxito" : "Error al enviar el mensaje"}
                </p>
            )}
        </form>
    );
};

export default ContactForm;
