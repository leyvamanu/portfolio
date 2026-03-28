import React, { useState, useEffect } from "react";
import TextInput from "./TextInput.jsx";
import TextareaInput from "./TextareaInput.jsx";
import PrivacyCheckbox from "./PrivacyCheckbox.jsx";
import SubmitButton from "./SubmitButton.jsx";
import PrivacyPolicyModal from "./PrivacyPolicyModal.jsx";

const WEB3FORMS_ACCESS_KEY = "9e4b2259-ccf4-43c9-a754-92e07efc7383";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "", privacy: false });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(null);
    const [errors, setErrors] = useState({});
    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

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
        setErrors({});

        // Validación local
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = ["El nombre es obligatorio"];
        if (!formData.email.trim()) newErrors.email = ["El email es obligatorio"];
        if (!formData.message.trim()) newErrors.message = ["El mensaje es obligatorio"];
        if (!formData.privacy) newErrors.privacy = ["Debes aceptar la política de privacidad"];

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsSubmitting(false);
            return;
        }

        try {
            const form = new FormData();
            form.append("access_key", WEB3FORMS_ACCESS_KEY);
            form.append("name", formData.name);
            form.append("email", formData.email);
            form.append("message", formData.message);
            form.append("botcheck", "");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: form,
            });

            const data = await response.json();

            if (data.success) {
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
        <>
            <form onSubmit={handleSubmit} className="mt-6">
                <input type="hidden" name="botcheck" style={{ display: "none" }} />
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
