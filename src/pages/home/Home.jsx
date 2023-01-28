import Footer from '../../components/footer/Footer';
import Gallery from '../../components/gallery/Gallery';
import Header from '../../components/header/Header';
import Certifications from '../../components/information/certifications/Certifications';
import IconsAndText from '../../components/information/iconsAndText/IconsAndText';
import './Home.css';

const Home = () => {
    return (
        <section className='homeSection'>
            <Header />
            <article className='homeArticle'></article>
            <Footer />
            <IconsAndText />
            <Certifications />
            <Gallery />
        </section>
    );
}

export default Home;