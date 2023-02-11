import './Home.css';
import Certifications from '../../components/certifications/Certifications';
import IconsAndText from '../../components/iconsAndText/IconsAndText';
import Rooms from '../../components/rooms/Rooms';
import Footer from '../../components/footer/Footer';
import BookingForm from '../../components/bookingForm/BookingForm';
import Header from '../../components/header/Header';
import Description from '../../components/description/Description';
import Gallery from '../../components/gallery/Gallery';
import { motion, useScroll } from "framer-motion";

const Home = () => {
    {/* big picture as background ------ components inserted */ }
    const { scrollYProgress } = useScroll();

    return (
        <section className='homeSection' >
            <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }}></motion.div>
            <Header />

            {/* -------------- COMPONENTS ---------------- */}
            <BookingForm />
            <Description />
            <IconsAndText />
            <Rooms />
            <Gallery />
            <Certifications />
            <Footer />
        </section>
    );
}

export default Home;