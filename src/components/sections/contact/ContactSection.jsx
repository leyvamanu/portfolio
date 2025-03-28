import React from "react";
import ContactForm from "./ContactForm.jsx";

const ContactSection = () => {

    return (
        <section id="contact" className="py-16 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-left">Contacto</h2>
            <ContactForm />
        </section>
    );
};

export default ContactSection;