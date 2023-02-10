import './BookingForm.css';
import ChooseDate from '../../assets/img/icon/bookingImg.svg';
import GreenArrowNew from '../../assets/img/icon/arrowGreen.png';
import BookingPerson from '../../assets/img/icon/bookingPerson.svg';

const BookingForm = () => {

    return (
        <section id='bookingForm' className='bookingFormSection'>
            {
                /* ----------Choose Date---------- */
            }
            <div className='bookingFormChooseDate'>
                <div className='bookingFormArrival'>
                    <p className='bookingFormParagraph'>Arrival</p>
                    <input type='date'></input>
                </div>

                <img className='bookingFormGreenArrow' src={GreenArrowNew} />
                <div className='bookingFormDeparture'>
                    <p className='bookingFormParagraph'>Departure</p>
                    <input type='date'></input>
                </div>

            </div>
            {
                /* -----Choose Room and number of people----- */
            }
            <div className='bookingChoosePersonRoom'>
                <p className='bookingPersonParagraph'>Guest, Guests</p>
                <select className='bookingFormSelect'>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                </select>
            </div>

            <button className='bookingBtn'>Check</button>
        </section>
    );
}

export default BookingForm;