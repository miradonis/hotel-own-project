import './Rooms.css';
import ImageSlider from '../imageSlider/ImageSlider';
import RoomDescription from '../roomDescription/RoomDescription';

const Rooms = () => {
    return (
        <section className='rooms Section'>
            <div id='roomsAnker' className='roomsDivForLink'></div>
            <h2 className='roomsHeading'>Rooms</h2>
            <div className='justALine'></div>
            <h3 className='roomsHeadingSlider'><span>Hotel Lamoure</span> Rooms & Suites</h3>

            {/* Slider for Rooms & Suites ------  Component*/}
            <ImageSlider />

            {/* Description for Rooms & Suites ------  Component*/}
            <RoomDescription />
        </section>
    );
}

export default Rooms;