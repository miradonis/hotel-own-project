import './ImageSlider.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rooms from '../../data/RoomsArray';

const ImageSlider = () => {
    // const [sliderImages] = useState(Rooms);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <section className='imageSliderSection'>
            <Slider {...settings} className="sliderBox">
                {Rooms.map((image, index) => (
                    <img key={index} src={image.image} className="slider-image" alt="Slider Image" />
                ))}
            </Slider>
        </section>
    );
}

export default ImageSlider;