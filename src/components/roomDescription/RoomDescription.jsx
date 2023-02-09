import './RoomDescription.css';

const RoomDescription = () => {
    return (
        <section className='roomDescription Section'>

            {/* Description for Rooms ---------------------- */}
            <p className='roomDescriptionParagraph'>
                Our rooms can accommodate 1-2 people and have a comfortable double bed, a desk and a seating area. All rooms have air conditioning, flat screen TVs, WiFi and a safe. The bathroom comes with a shower, toilet and free toiletries.
            </p>
            <p className='roomDescriptionParagraph'>
                Enjoy beautiful views of the beach from your window. We also offer room service and a cleaning service.
            </p>

            <div className='justALine'></div>

            {/* Description for Suits (pictures are missing) */}
            <div className='suitBox'>
                <p className='suitParagraph'>

                    The "Presidential Suite" at <span className='suitSpan'>Hotel Lamoure</span> offers guests luxurious accommodation overlooking the beach. The suite features a spacious bedroom with a king-size bed, a living room with a sofa, armchairs and a dining table, and a separate study.
                </p>
                <p className='suitParagraph'>
                    There is also a fully equipped kitchenette with a fridge, microwave and dishwasher. The bathroom has a double sink, a bathtub and a separate shower.
                </p>
                <p className='suitParagraph'>
                    Guests can also enjoy the breathtaking view of the beach from the private terrace.
                </p>
            </div>
        </section>
    );
}

export default RoomDescription;