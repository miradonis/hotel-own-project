import './Gallery.css';
import Breakfast from '../../assets/img/gallery/breakfast.jpeg';
import Gym from '../../assets/img/gallery/gym.jpeg';
import Pool from '../../assets/img/gallery/hotelPool.jpeg';
import PigWater from '../../assets/img/gallery/pigWater.jpeg';
import Beach from '../../assets/img/gallery/beach.jpeg';
import Cafe from '../../assets/img/gallery/cafe.jpeg';
import Cocktail from '../../assets/img/gallery/cocktail.jpeg';
import Restaurant from '../../assets/img/gallery/restaurant.jpeg';
import RelaxingArea from '../../assets/img/gallery/relaxingArea.jpeg';
import { useState } from 'react';

const images = [
    Breakfast,
    Gym,
    Pool,
    PigWater,
    Beach,
    Cafe,
    RelaxingArea,
    Restaurant,
    Cocktail
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className='gallery Section'>
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

            {/* {selectedImage && (
                <div className='modal-overlay'>
                    <div className='modal-body'>
                        <img className='modalImg' src={selectedImage} />
                        <button className='modalBtn' onClick={() => setSelectedImage(null)}>Close</button>
                    </div>
                </div>
            )} */}
        </section>
    );
}

// const Gallery = () => {
//     return (
//         <section className='gallery Section'>
//             <div id='galleryAnker' className='galleryDivForLink'></div>
//             <h2 className='galleryHeading'>Gallery</h2>
//             <div className='justALine'></div>

//             <article className='galleryHighPicturesBox'>
//                 <img className='gallery HighPictures' src={Breakfast} />
//                 <img className='gallery HighPictures' src={RelaxingRoom2} />
//                 <img className='gallery HighPictures' src={Gym} />
//                 <img className='gallery HighPictures' src={Pool} />
//                 <img className='gallery HighPictures' src={PigWater} />
//             </article>

//             <article className='galleryWidePicturesBox'>
//                 <img className='gallery WidePictures' src={BootBeach} />
//                 <img className='gallery WidePictures' src={Cafe} />
//                 <img className='gallery WidePictures' src={RelaxingRoom} />
//                 <img className='gallery WidePictures' src={Terrasse} />
//             </article>
//         </section>
//     );
// }

export default Gallery;