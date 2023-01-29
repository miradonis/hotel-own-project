import './Home.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Certifications from '../../components/information/certifications/Certifications';
import IconsAndText from '../../components/information/iconsAndText/IconsAndText';
import Rooms from '../../components/rooms/Rooms';

const Home = () => {
    {/* big picture as background ------ components inserted */ }

    return (
        <section className='homeSection'>
            <Header />
            <article className='homeArticle'></article>
            <Footer />
            <IconsAndText />
            <Certifications />
            <Rooms />
        </section>
    );
}

export default Home;