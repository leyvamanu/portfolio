import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "", privacy: false });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.privacy) return;
        setIsSubmitting(true);

        try {
            const response = await fetch("https://tu-backend.com/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message }),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: "", email: "", message: "", privacy: false });
            } else {
                setSuccess(false);
            }
        } catch (error) {
            setSuccess(false);
        }

        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
                <label htmlFor="name" className="block">Nombre:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:outline-none border-orange-app focus:border-orange-app-focus focus:ring-orange-app-focus"
                    required
                    placeholder="Escribe tu nombre..."
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block">Email:</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:outline-none border-orange-app focus:border-orange-app-focus focus:ring-orange-app-focus"
                    required
                    placeholder="Escribe tu e-mail..."
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block">Mensaje:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 mt-1 h-32 border rounded-lg focus:ring-2 focus:outline-none border-orange-app focus:border-orange-app-focus focus:ring-orange-app-focus"
                    required
                    placeholder="Escribe tu mensaje..."
                />
            </div>
            <div className="mb-4 flex items-center gap-2 text-sm">
                <input
                    id="privacy"
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="accent-orange-app cursor-pointer h-4 w-4"
                    required
                />
                <label htmlFor="privacy" className="cursor-pointer">
                    <span>Acepto la </span>
                    <a href="/privacidad"
                       className="relative inline-block transition-colors duration-300 group text-white hover:text-orange-app">
                        <span>Política de Privacidad</span>
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white transition-all duration-300"></span>
                        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-orange-app group-hover:w-full transition-all duration-300"></span>
                    </a>
                </label>
            </div>
            <button type="submit" disabled={isSubmitting}
                className="mt-3 md:text-lg relative cursor-pointer inline-block w-full bg-orange-app text-white px-3 md:px-6 py-3 rounded overflow-hidden transition-colors duration-300 group disabled:opacity-50">
                <div className="flex items-center justify-center w-full">
                    {isSubmitting ? "Enviando..." : "Enviar"}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="size-5 ml-3" viewBox="0 0 16 16">
                        <path
                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                    </svg>
                </div>
                <span className="absolute inset-0 bg-black/20 left-0 w-0 group-hover:w-full transition-all duration-500"></span>
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
