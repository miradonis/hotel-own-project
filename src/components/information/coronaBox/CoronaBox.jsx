import './CoronaBox.css';
import InfoSign from '../../../assets/img/icon/icon-information.svg';

const CoronaBox = () => {
    {/* corona info box with link (link leads to nowhere) */ }
    return (
        <section className='coronaSection'>
            <div className='coronaIconAndHeading'>
                <img src={InfoSign}></img>
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
        </section>
    );
}

export default CoronaBox;