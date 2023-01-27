import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <section className='headerSection'>
            <div className='headerBox'>
                <h1 className='headerHeading'>Welcome to <span>Hotel Lamoure</span></h1>
                <nav>
                    <Link className='headerLink' to='./anlage'>Booking</Link>
                    <Link className='headerLink' to='./rooms'>Rooms</Link>
                    <Link className='headerLink' to='./buchung'>Galery</Link>
                    <Link className='headerLink' to='./contact'>Contact</Link>
                </nav>
            </div>
        </section>
    );
}

export default Header;