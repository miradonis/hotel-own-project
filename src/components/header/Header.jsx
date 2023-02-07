import { Link } from "react-router-dom";
import "./Header.css";
import LoginIcon from '../../assets/img/icon/icon-login.png';
import BookingAside from '../bookingAside/BookingAside';
import { useState } from "react";

const Header = () => {
    // useState Hook um den Wert des openForm State zu verwalten
    const [openForm, setOpenForm] = useState(false);
    // console.log(openForm);

    // Funktion die openForm state umdreht
    const toggleButtonHandler = () => {
        setOpenForm(prev => !prev)
    }

    return (
        <>
            {/* 
            - BookingAside Komponente wird nur angezeigt, wenn openForm     true ist. 
            - Wenn openForm false ist wird sofort abgebrochen wegen dem && Operator.
            */}
            {openForm && <BookingAside openForm={openForm} setOpenForm={setOpenForm} />}

            <section className="headerSection">
                <div className="headerBox">
                    <h1 className="headerHeading">Welcome to <span>Hotel Lamoure</span></h1>
                    <nav>
                        {/* Klick auf Link ruft toggleButtonHandler auf */}
                        <Link className="headerLink" to="#" onClick={toggleButtonHandler}>Booking</Link>

                        <Link className="headerLink" to="#roomsAnker" onClick={() => {
                            const element = document.getElementById("roomsAnker");
                            element.scrollIntoView({ behavior: "smooth" });
                        }}>Rooms</Link>
                        <Link className="headerLink" to="#galleryAnker" onClick={() => {
                            const element = document.getElementById("galleryAnker");
                            element.scrollIntoView({ behavior: "smooth" });
                        }}>Gallery</Link>
                        <Link className="headerLink" to="#footer" onClick={() => {
                            const element = document.getElementById("footer");
                            element.scrollIntoView({ behavior: "smooth" });
                        }}>Contact</Link>
                        <Link className="headerLink headerLogin" to="/">
                            <img className="headerLoginImg" src={LoginIcon}></img>
                            Login
                        </Link>
                    </nav>
                </div>
            </section >
        </>
    );
}

export default Header;