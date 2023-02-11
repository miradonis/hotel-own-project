import './Gallery.css';
import Breakfast from '../../assets/img/gallery/breakfast.jpeg';
import Gym from '../../assets/img/gallery/gym.jpeg';
import PigWater from '../../assets/img/gallery/pigWater.jpeg';
import Beach from '../../assets/img/gallery/beach.jpeg';
import Cafe from '../../assets/img/gallery/cafe.jpeg';
import Cocktail from '../../assets/img/gallery/cocktail.jpeg';
import Restaurant from '../../assets/img/gallery/restaurant.jpeg';
import RelaxingArea from '../../assets/img/gallery/relaxingArea.jpeg';
import HotelNight from '../../assets/img/gallery/hotelNight.jpeg';
import PoolBeach from '../../assets/img/gallery/poolBeach.jpeg';
import Food from '../../assets/img/gallery/food.jpeg';
import { useState } from 'react';

const images = [
    Breakfast,
    Gym,
    PigWater,
    Beach,
    Cafe,
    RelaxingArea,
    Restaurant,
    Cocktail,
    HotelNight,
    PoolBeach,
    Food
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <section className='gallerySection'>
            <div id='galleryAnker' className='galleryDivForLink'></div>
            <h2 className='galleryHeading'>Gallery</h2>
            <div className='justALine'></div>
            <article className='galleryWidePicturesBox'>
                {images.map((image, index) => (
                    <img
                        key={index}
                        className='gallery WidePictures'
                        src={image}
                        onClick={() => setSelectedImage(image)}
                    />
                ))}
            </article>
            {selectedImage && (
                <div className='modal-overlay'>
                    <div className='modal-body'>
                        <img className='modalImg' src={selectedImage} />
                        <button className='modalBtn' onClick={() => setSelectedImage(null)}>Close</button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Gallery;