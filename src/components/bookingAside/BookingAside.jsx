import './BookingAside.css';
import ChooseDate from '../../assets/img/icon/bookingImg.svg';
import GreenArrowNew from '../../assets/img/icon/arrowGreen.png';
import BookingPerson from '../../assets/img/icon/bookingPerson.svg';
import Close from '../../assets/img/icon/icon-close.png';

const BookingAside = () => {
    return (
        <section className='bookingAsideSection'>
            <img className='bookingAsideClose' src={Close} />
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
        </section>
    );
}

export default BookingAside;