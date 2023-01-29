import { useState } from 'react';
import './ImageSlider.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rooms from '../../data/RoomsArray';

const ImageSlider = () => {
    const [sliderImages] = useState(Rooms);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    };

    return (
        <section className='imageSliderSection'>
            <Slider {...settings} className="sliderBox">
                {sliderImages.map((image, index) => (
                    <img key={index} src={image.image} className="slider-image" alt="Slider Image" />
                ))}
            </Slider>
        </section>
    );
}

export default ImageSlider;