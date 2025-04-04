import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules';
import Slide from "./Slide.jsx";
import reviewsData from "./data/reviewsData.js";

const AboutMeSection = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setReviews(reviewsData);
    }, []);

    return (
        <section id="about-me" className="py-16 px-6 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-left">Sobre Mí</h2>
            <p className="text-lg mb-4">
                En esta sección podría haber escrito un párrafo interminable sobre mis cualidades, pero nunca se me ha
                dado bien autodescribirme. Prefiero que lo hagan los demás.
            </p>

            {/*<h3 className="text-2xl font-bold text-left mb-2">Lo que dicen de mí</h3>*/}
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
