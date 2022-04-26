import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import photos from "../../../apis/photos.json";
import PhotoCard from "./PhotoCard";
import {Navigation} from "swiper";

import 'swiper/css';
import "swiper/css/navigation";

import "./ImageCarousel.css";

const ImageCarousel = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            loop={true}
        >
            {photos.map(d => {
                return <SwiperSlide key={d.id}>
                    <img className="w-full h-[450px] sm:h-[800px] object-cover shadow-lg rounded-lg" src={`https://drive.google.com/uc?export=view&id=${d.id}`} />
                </SwiperSlide>
            })}
        </Swiper>
    );
};

export default ImageCarousel;
