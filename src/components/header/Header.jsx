import { Link } from "react-router-dom";
import "./Header.css";
import LoginIcon from '../../assets/img/icon/icon-login.png'

const Header = () => {
    {/* name from hotel and navigation to components */ }
    return (
        <section className="headerSection">
            <div className="headerBox">
                <h1 className="headerHeading">Welcome to <span>Hotel Lamoure</span></h1>
                <nav>
                    <Link className="headerLink" to="/">Booking</Link>
                    <Link className="headerLink" to="#roomsAnker" onClick={() => {
                        const element = document.getElementById("roomsAnker");
                        element.scrollIntoView({ behavior: "smooth" });
                    }}>Rooms</Link>
                    <Link className="headerLink" to="/">Gallery</Link>
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
    );
}

export default Header;