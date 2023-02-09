import './Description.css';
import GoogleMaps from '../../assets/img/google-maps.png';

const Description = () => {
    {/* description about the hotel */ }

    return (
        <section className='description Section'>
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
                        {/* <img src={GoogleMaps} /> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31759600.10143068!2d-69.6471852651855!3d-13.663582219177615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasilien!5e0!3m2!1sde!2sde!4v1675691309465!5m2!1sde!2sde" width="500" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </article>
        </section >
    );
}

export default Description;