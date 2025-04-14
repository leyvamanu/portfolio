import React, { useState, useEffect } from "react";
import TextInput from "./TextInput.jsx";
import TextareaInput from "./TextareaInput.jsx";
import PrivacyCheckbox from "./PrivacyCheckbox.jsx";
import SubmitButton from "./SubmitButton.jsx";
import PrivacyPolicyModal from "./PrivacyPolicyModal.jsx";
const API_URL = import.meta.env.VITE_API_URL;
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "", privacy: false });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(null);
    const [errors, setErrors] = useState({});
    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (success !== null) {
            const timer = setTimeout(() => setSuccess(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [success]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;

        setFormData((prev) => ({ ...prev, [name]: newValue }));

        // Si hay error en ese campo, lo eliminamos al modificarlo
        if (errors[name]) {
            setErrors((prev) => {
                const updatedErrors = { ...prev };
                delete updatedErrors[name];
                return updatedErrors;
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Obtener el token de Google ReCaptcha v3
            const token = await window.grecaptcha.execute(`${RECAPTCHA_SITE_KEY}`, { action: "submit" });

            // Enviar los datos junto con el token de ReCaptcha
            const response = await fetch(`${API_URL}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    privacy: formData.privacy,
                    recaptcha_token: token,
                }),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: "", email: "", message: "", privacy: false });
            } else {
                const data = await response.json();
                setErrors(data.errors || {});
            }
        } catch (error) {
            setSuccess(false);
        }

        setIsSubmitting(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="mt-6">
                <TextInput
                    id="name"
                    label="Nombre:"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name?.[0]}
                    placeholder="Escribe tu nombre..."
                />
                <TextInput
                    id="email"
                    label="Email:"
                    name="email"
                    type="text"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email?.[0]}
                    placeholder="Escribe tu e-mail..."
                />
                <TextareaInput
                    id="message"
                    label="Mensaje:"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message?.[0]}
                    placeholder="Escribe tu mensaje..."
                />
                <PrivacyCheckbox
                    checked={formData.privacy}
                    onChange={handleChange}
                    error={errors.privacy?.[0]}
                    onOpenModal={() => setIsPrivacyModalOpen(true)}
                />
                <SubmitButton isSubmitting={isSubmitting}>Enviar</SubmitButton>
                {success !== null && (
                    <p className={`mt-4 text-center ${success ? "text-green-600" : "text-red-600"}`}>
                        {success ? "Mensaje enviado con éxito" : "Error al enviar el mensaje"}
                    </p>
                )}
            </form>

            {isPrivacyModalOpen && <PrivacyPolicyModal onClose={() => setIsPrivacyModalOpen(false)} />}
        </>
    );
};

export default ContactForm;
