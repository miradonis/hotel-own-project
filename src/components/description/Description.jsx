import './Description.css';
import GoogleMaps from '../../assets/img/google-maps.png';

const Description = () => {
    {/* description about the hotel */ }

    return (
        <section className='descriptionSection'>
            <article>
                <h2 className='descriptionHeading'>
                    The Hotel Lamoure on every beach in the world
                </h2>
                <div className='justALine'></div>
                <div className='descriptionTextBoxGoogleMaps'>
                    <div className='descriptionText'>
                        <p className='descriptionTextParagraph'>
                            The <span className='descriptionTextSpan'>Hotel Lamoure </span> is a 4-star hotel located directly on the beach. It offers its guests breathtaking views of the sea and the beach. It has 70 rooms, all with balcony or terrace and sea view.
                        </p>
                        <p className='descriptionTextParagraph'>
                            Guests can spend their days on the beach or relax at the hotel's private beach club, which has loungers and umbrellas available. There is also a pool with sea view and a Jacuzzi.
                        </p>
                        <p className='descriptionTextParagraph'>
                            The hotel also has a restaurant that serves fresh seafood and regional cuisine, as well as a bar and lounge for relaxing evenings.
                            For those who want to stay active, the hotel offers diving lessons, a gym, and swimming with pigs. There is also a playground and a mini-club for children.
                        </p>
                        <p className='descriptionTextParagraph'>
                            The Hotel "Lamoure" is the ideal place for a relaxing beach vacation with family or friends.It has an excellent location near many attractions and activities.The staff is friendly and helpful, and is always available to make guests' stays as pleasant as possible.
                        </p>
                    </div>
                    <div className='descriptionGoogleMaps'>
                        <img src={GoogleMaps} />
                    </div>
                </div>
            </article>
        </section >
    );
}

export default Description;