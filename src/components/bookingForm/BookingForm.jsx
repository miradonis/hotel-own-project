import './BookingForm.css';
import ChooseDate from '../../assets/img/icon/bookingImg.svg';
import GreenArrow from '../../assets/img/icon/greenArrow.png';
import GreenArrowNew from '../../assets/img/icon/arrowGreen.png';
import BookingPerson from '../../assets/img/icon/bookingPerson.svg';

const BookingForm = () => {

    return (
        <section id='bookingForm' className='bookingFormSection'>
            {
                /* ----------Choose Date---------- */
            }
            <div className='bookingFormChooseDate'>
                <img className='bookingFormImg' src={ChooseDate} />
                <p className='bookingFormParagraph'>Arrival</p>
                <img className='bookingFormGreenArrow' src={GreenArrowNew} />
                <img className='bookingFormImg' src={ChooseDate} />
                <p className='bookingFormParagraph'>Departure</p>
            </div>
            {
                /* -----Choose Room and number of people----- */
            }
            <div className='bookingChoosePersonRoom'>
                <img className='bookingPersonImg' src={BookingPerson} />
                <p className='bookingPersonParagraph'>1 Room, 1 Adult</p>
            </div>
            <button className='bookingBtn'>Check</button>
        </section>
    );
}

export default BookingForm;