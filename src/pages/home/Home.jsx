import './Home.css';
import Certifications from '../../components/certifications/Certifications';
import IconsAndText from '../../components/iconsAndText/IconsAndText';
import Rooms from '../../components/rooms/Rooms';
import Footer from '../../components/footer/Footer';
import BookingForm from '../../components/bookingForm/BookingForm';
import Header from '../../components/header/Header';
import Description from '../../components/description/Description';

const Home = () => {
    {/* big picture as background ------ components inserted */ }

    return (
        <section className='homeSection'>
            <Header />
            {/* <article className='homeArticle'></article> */}
            {/* <article className='firstSection' >
                <div className='firstBox'>
                <p className='firstText'>
                Experience a stay of exceptional class at  <span className='firstSpan'>Hotel Lamoure</span> - where excellence becomes a habit
                </p>
                </div>
            </article> */}

            {/* -------------- COMPONENTS ---------------- */}
            <BookingForm />
            <Description />
            <IconsAndText />
            <Rooms />
            <Certifications />
            <Footer />
        </section>
    );
}

export default Home;