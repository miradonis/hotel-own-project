import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import IconsAndText from '../../components/information/iconsAndText/IconsAndText';
import './Home.css';

const Home = () => {
    return (
        <section className='homeSection'>
            <Header />
            <article className='homeArticle'></article>
            <Footer />
            <IconsAndText />
        </section>
    );
}

export default Home;