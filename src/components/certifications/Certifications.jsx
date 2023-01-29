import './Certifications.css';
import Premium from '../../assets/img/certifications/icon-premium.png';
import Check from '../../assets/img/certifications/icon-check.svg';
import World from '../../assets/img/certifications/icon-world.svg';

const Certifications = () => {
    {/* certifications icons listing the individual points for the respective certification */ }

    return (
        <section className='certificationSection'>
            <h2 className='certificationHeading'>
                Certifications & Customer reviews
            </h2>
            <div className='justALine'></div>
            <article className='certificationsBoxes'>
                {/* Box for World Certification */}
                <div className='certification'>
                    <img className='certificationIcon World' src={World} alt='Check Siegel'></img>
                    <p className='certificationText'></p>
                    <ul className='certificationUl'>
                        <li className='certificationLi'>
                            Use of energy-saving devices and lighting
                        </li>
                        <li className='certificationLi'>
                            Avoidance of unnecessary packaging material
                        </li>
                        <li className='certificationLi'>
                            Use of environmentally friendly cleaning products
                        </li>
                    </ul>
                </div>

                {/* Box for Premium Certification */}
                <div className='certification'>
                    <img className='certificationIcon Premium' src={Premium} alt='Preium Siegel'></img>
                    <p className='certificationText'></p>
                    <ul className='certificationUl'>
                        <li className='certificationLi'>
                            Spacious and well-appointed rooms with quality furniture and textiles
                        </li>
                        <li className='certificationLi'>
                            Flat screen TV with many channels
                        </li>
                        <li className='certificationLi'>
                            Regularly checked by ABC CleanIsTrue World GmbH
                        </li>
                    </ul>
                </div>

                {/* Box for Check Certification */}
                <div className='certification'>
                    <img className='certificationIcon Check' src={Check} alt='Check Siegel'></img>
                    <p className='certificationText'></p>
                    <ul className='certificationUl'>
                        <li className='certificationLi'>
                            Timely and efficient problem solving in case of any problems
                        </li>
                        <li className='certificationLi'>
                            Organization of excursions or reservations
                        </li>
                        <li className='certificationLi'>
                            Cleaning and laundry service
                        </li>
                    </ul>
                </div>
            </article>
        </section>
    );
}

export default Certifications;