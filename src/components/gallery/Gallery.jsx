import './Gallery.css';
import Breakfast from '../../assets/img/gallery/breakfast.jpeg';
import Gym from '../../assets/img/gallery/gym.jpeg';
import Pool from '../../assets/img/gallery/hotelPool.jpeg';
import PigWater from '../../assets/img/gallery/pigWater.jpeg';
import RelaxingRoom2 from '../../assets/img/gallery/relaxingroom2.jpeg';
import BootBeach from '../../assets/img/gallery/bootBeach.jpeg';
import Cafe from '../../assets/img/gallery/cafe.jpeg';
import Lobby from '../../assets/img/gallery/lobby.jpeg';
import RelaxingRoom from '../../assets/img/gallery/relaxingroom.jpeg';
import Terrasse from '../../assets/img/gallery/terrasse.jpeg';

const Gallery = () => {
    return (
        <section className='gallerySection'>
            <div id='galleryAnker' className='galleryDivForLink'></div>
            <h2 className='galleryHeading'>Gallery</h2>
            <div className='justALine'></div>

            <article className='galleryHighPicturesBox'>
                <img className='gallery HighPictures' src={Breakfast} />
                <img className='gallery HighPictures' src={RelaxingRoom2} />
                <img className='gallery HighPictures' src={Gym} />
                <img className='gallery HighPictures' src={Pool} />
                <img className='gallery HighPictures' src={PigWater} />
            </article>

            <article className='galleryWidePicturesBox'>
                <img className='gallery WidePictures' src={BootBeach} />
                <img className='gallery WidePictures' src={Cafe} />
                <img className='gallery WidePictures' src={RelaxingRoom} />
                <img className='gallery WidePictures' src={Terrasse} />
            </article>
        </section>
    );
}

export default Gallery;