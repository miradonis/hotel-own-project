import './BookingAside.css';
import GreenArrowNew from '../../assets/img/icon/arrowGreen.png';
import Close from '../../assets/img/icon/icon-close.png';
import { useState } from 'react';
import Header from '../header/Header';

const BookingAside = () => {

    const [closeForm, setCloseForm] = useState(false);

    const toggleButton = () => {
        setCloseForm(prev => !prev);
    };


    return (
        <section className={`bookingAsideSection ${closeForm ? 'bookingAsideSectionHidden' : ''}`}>
            <Header toggleButton={toggleButton} />
            <img className='bookingAsideClose' onClick={toggleButton} src={Close} />
            <h2 className='bookingAsideHeading'>
                Book a room now
            </h2>
            <div className='bookingAsideChooseDate'>
                <div className='bookingAsideArrival'>
                    <p className='bookingAsideParagraph'>
                        Arrival
                    </p>
                    <input type='date'></input>
                </div>
                <img className='bookingAsideGreenArrow' src={GreenArrowNew} />
                <div className='bookingAsideDeparture'>
                    <p className='bookingAsideParagraph'>
                        Departure
                    </p>
                    <input type='date'></input>
                </div>

            </div>

            <div className='bookingAsideChoosePersonRoomBox'>
                <div className='bookingAsideChoosePersonText'>
                    {/* <img className='bookingAsideChoosePersonRoom' src={BookingPerson} /> */}
                    <p className='bookingAsidePersonParagraph'>
                        Guest, Guests
                    </p>
                </div>
                <select className='bookingAsideSelect'>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                </select>
            </div>
            <div className='bookingAsideJustALine'></div>
            <button className='bookingAsideBtn'>Check</button>
        </section >
    );
}

export default BookingAside;