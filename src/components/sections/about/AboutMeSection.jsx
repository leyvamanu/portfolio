import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';
import Slide from "./Slide.jsx";

const AboutMeSection = () => {
    const [reviews, setReviews] = useState([]); // Inicializar con un array vacío
    const [error, setError] = useState(null); // Estado para manejar errores
    const [isLoading, setIsLoading] = useState(true); // Estado de carga
    const API_URL = import.meta.env.VITE_API_URL; // Leer variable ENV

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(`${API_URL}/reviews`); // Llamada a la API
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: No se pudo cargar las reseñas`);
                }
                const jsonResponse = await response.json(); // Parsear respuesta JSON
                const reviewsData = jsonResponse?.data; // Acceder a la propiedad "data"
                if (Array.isArray(reviewsData)) {
                    setReviews(reviewsData); // Establecer las reseñas si son válidas
                } else {
                    throw new Error("La estructura de la respuesta no es válida.");
                }
            } catch (error) {
                console.error("Error al obtener las reseñas:", error.message);
                setError(error.message); // Guardar mensaje de error
            } finally {
                setIsLoading(false); // Finalizar estado de carga
            }
        };

        fetchReviews(); // Llamar a la función para obtener las reseñas
    }, [API_URL]);

    if (isLoading) {
        return (
            <section id="about-me" className="py-16 px-6 max-w-7xl mx-auto">
                <div className="loader"></div>
            </section>
        );
    }
    if (error) {
        return (
            <section id="about-me" className="py-16 px-6 max-w-7xl mx-auto">
                <p className="error-message">❌ Ocurrió un error: {error}</p>
            </section>
        );
    }

    return (
        <section id="about-me" className="py-16 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-left">Sobre Mí</h2>
            <p className="text-lg mb-4">
                Creo que dice más de mí lo que opina la gente con la que he tenido oportunidad de trabajar que lo que
                pueda contaros yo mismo, así que ahí va:
            </p>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <Slide review={review} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default AboutMeSection;
