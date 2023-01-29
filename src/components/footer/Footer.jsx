import './Footer.css';
import Facebook from '../../assets/img/icon/icon-facebook.svg';
import Instagram from '../../assets/img/icon/icon-instagram.svg';

const Footer = () => {
    return (
        <section className='footerSection'>
            <article className='footerBox'>
                <div className='footerSmallBox'>
                    <p className='footerHeading'>Address</p>
                    <span className='footerSpan'>Hotel Lamoure</span>
                    <p>On every beach - worldwide</p>
                    <p>Phone: 0123/45678</p>
                    <p>Mail: ueberall@abc.de</p>
                </div>

                <div className='footerSmallBox socialContact'>
                    <p className='footerHeading'>Social</p>
                    <img className='socialIcons' src={Facebook} alt='Facebook-Icon'></img>
                    <img className='socialIcons' src={Instagram} alt='Facebook-Icon'></img>
                </div>

                <div className='footerSmallBox'>
                    <p className='footerHeading'>Important</p>
                    <p>Impressum</p>
                    <p>Privacy Policy</p>
                    <p>Designed by Steffi 👸🏼</p>
                </div>
            </article>
        </section>
    );
}

export default Footer;