import './Footer.css';
import ArrowDown from '../../assets/img/pfeil-unten.png';

const Footer = () => {
    return (
        <section className='footerSection'>
            <div className='footerBox'>
                <img className='footerImg' src={ArrowDown} alt='Pfeil nach unten'></img>
                <p className='footerText'>
                    Experience a stay of exceptional class at  <span className='footerSpan'>Hotel Lamoure</span> - where excellence becomes a habit
                </p>
                <img className='footerImg' src={ArrowDown} alt='Pfeil nach unten'></img>
            </div>
        </section>
    );
}

export default Footer;