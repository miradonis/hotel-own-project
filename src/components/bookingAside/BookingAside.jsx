import './BookingAside.css';
import GreenArrowNew from '../../assets/img/icon/arrowGreen.png';
import Close from '../../assets/img/icon/icon-close.png';
import { motion } from "framer-motion";

const BookingAside = ({ openForm, setOpenForm }) => {

    // über die props wird aus der Header Komponente der useState übergeben.

    // Funktion die openForm state umdreht
    // Sobald der Button (close) geklickt wird, wird der Wert in der Header Komponente verändert. Dies passiert weil hier mit props gearbeitet wird.

    const toggleButton = () => {
        setOpenForm(prev => !prev);
    };
    return (
        <motion.section className={`bookingAsideSection ${!openForm ? 'bookingAsideSectionHidden' : ''}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
            }}
        >

            {
                /* Durch Klick wird die Funktion toggleButton ausgelößt die den useState in Header ändert*/
            }
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
        </motion.section >
    );
}

export default BookingAside;