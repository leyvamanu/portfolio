import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import reviewsData from "./data/reviewsData.js";

const AboutMeSection = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setReviews(reviewsData);
    }, []);

    const getAvatar = (name) => {
        if (name) {
            const initials = name.split(' ').map(word => word[0]).join('');
            return `https://ui-avatars.com/api/?name=${initials}`;
        }
        return '';
    };

    return (
        <section id="about-me" className="py-16 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-left">Sobre Mí</h2>
            <p className="text-lg">
                Soy un desarrollador web apasionado por crear soluciones eficientes y escalables. Mi enfoque se centra
                en la calidad del código y una experiencia de usuario excepcional. He trabajado en diversos proyectos,
                desde aplicaciones web hasta tiendas en línea, con un fuerte énfasis en la usabilidad y el rendimiento.
            </p>

            <h3 className="text-2xl font-semibold text-left my-6">Lo que dicen de mí</h3>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 2500 }}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Autoplay]}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-gradient border-4 shadow-xl rounded-xl cursor-pointer transition-transform p-4">
                            <div className="flex items-center mb-4">
                                <img
                                    src={review.avatar || getAvatar(review.name)}
                                    alt="Avatar"
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold">{review.name}</h4>
                                    <p className="text-sm text-orange-app">{review.role}</p>
                                </div>
                            </div>
                            <div className="flex mb-4">
                                <span className="text-yellow-400">
                                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                                </span>
                            </div>
                            <p>{review.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default AboutMeSection;
