import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    {/* name from hotel and navigation to components */ }
    return (
        <section className="headerSection">
            <div className="headerBox">
                <h1 className="headerHeading">Welcome to <span>Hotel Lamoure</span></h1>
                <nav>
                    <Link className="headerLink" to="/">Booking</Link>
                    <Link className="headerLink" to="#rooms" onClick={() => {
                        const element = document.getElementById("rooms");
                        element.scrollIntoView({ behavior: "smooth" });
                    }}>Rooms</Link>
                    <Link className="headerLink" to="/">Gallery</Link>
                    <Link className="headerLink" to="/">Contact</Link>
                </nav>
            </div>
        </section>
    );
}

export default Header;