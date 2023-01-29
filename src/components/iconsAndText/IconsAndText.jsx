import './IconsAndText.css';
import Calender from '../../assets/img/icon/icon-calendar.svg';
import Parking from '../../assets/img/icon/icon-parkingSign.svg'
import Cutlery from '../../assets/img/icon/icon-cutlery.svg';
import Wifi from '../../assets/img/icon/icon-wifi.svg';
import Paw from '../../assets/img/icon/icon-paw.svg';
import NoSmoking from '../../assets/img/icon/icon-noSmoking.svg';
import InfoSign from '../../assets/img/icon/icon-information.svg';

const IconsAndText = () => {
    {/* icons with explanations of what the hotel offers. Corona component added at the end */ }

    return (
        <section className='iconsAndTextSection'>
            <h1 className='iconsAndTextHeading'>Hotel Information</h1>
            <div className='justALine'></div>
            <article className='iconsAndTextBox'>

                {/* first IconBox ------- Icon and Infotmation */}
                <div className='iconsAndTextImg'>
                    <img src={Calender} alt='Calendar' />
                    <div className='iconsAndTextInfo'>
                        <p className='iconsAndTextName'>Check-in & Check-out</p>
                        <p className='iconsAndTextDescription'>
                            Check-in 4pm; check-out 10am
                        </p>
                    </div>
                </div>

                {/* second IconBox ------- Icon and Infotmation */}
                <div className='iconsAndTextImg'>
                    <img src={Parking} alt='Calendar' />
                    <div className='iconsAndTextInfo'>
                        <p className='iconsAndTextName'>Car Parking</p>
                        <p className='iconsAndTextDescription'>
                            Free
                        </p>
                    </div>
                </div>

                {/* third IconBox ------- Icon and Infotmation */}
                <div className='iconsAndTextImg'>
                    <img src={Cutlery} alt='Calendar' />
                    <div className='iconsAndTextInfo'>
                        <p className='iconsAndTextName'>Meal Times</p>
                        <p className='iconsAndTextDescription'>
                            Visit Food & Drink page for information
                        </p>
                    </div>
                </div>

                {/* fourth IconBox ------- Icon and Infotmation */}
                <div className='iconsAndTextImg'>
                    <img src={Paw} alt='Calendar' />
                    <div className='iconsAndTextInfo'>
                        <p className='iconsAndTextName'>Pet friendly</p>
                        <p className='iconsAndTextDescription'>
                            Pets accepted; 50€ per pet, per night
                        </p>
                    </div>
                </div>

                {/* fifth IconBox  ------- Icon and Infotmation*/}
                <div className='iconsAndTextImg'>
                    <img src={Wifi} alt='Calendar' />
                    <div className='iconsAndTextInfo'>
                        <p className='iconsAndTextName'>Wi-Fi</p>
                        <p className='iconsAndTextDescription'>
                            Free in public areas; unlimited access in bedroom for 100€ per 24 hours per device
                        </p>
                    </div>
                </div>

                {/* sixth IconBox ------- Icon and Infotmation */}
                <div className='iconsAndTextImg'>
                    <img src={NoSmoking} alt='Calendar' />
                    <div className='iconsAndTextInfo'>
                        <p className='iconsAndTextName'>No Smoking</p>
                        <p className='iconsAndTextDescription'>
                            Smoking is prohibited in all public areas and bedrooms
                        </p>
                    </div>
                </div>
            </article>


            {/* CoronaBox-Component ------ link to detailed corona information (Link is missing) */}
            <article className='coronaSection'>
                <div className='coronaIconAndHeading'>
                    <img alt='Info' src={InfoSign}></img>
                    <h2 className='coronaHeading'>
                        COVID-19 Information
                    </h2>
                </div>
                <div className='coronaText'>
                    <p className='coronaText First'>
                        We have a number of measures in place to ensure you can stay with us safely. For more information click <span className='coronaTextSpan'>here</span>
                    </p>
                    <p className='coronaText Second'>
                        Please be aware that hotels may be operating restricted services, for more information please contact the hotel directly.
                    </p>
                </div>
            </article>

        </section>
    );
}

export default IconsAndText;