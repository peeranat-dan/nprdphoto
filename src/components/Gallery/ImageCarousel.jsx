import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";

// import css
import 'swiper/css';
import "swiper/css/navigation";
import "./ImageCarousel.css";

const ImageCarousel = (props) => {
    const photos = props.photos;
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            loop={true}
            breakpoints={{
                500: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },

                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1400: {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
                1900: {
                    slidesPerView: 7,
                    spaceBetween: 10,
                },
            }}
        >
            {photos.map(d => {
                return <SwiperSlide key={d.url}>
                    <img className="mx-auto w-[250px] h-[400px] sm:h-[350px] object-cover shadow-lg rounded-lg" src={d.url} />
                </SwiperSlide>
            })}
        </Swiper>
    );
};

export default ImageCarousel;
