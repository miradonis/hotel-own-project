import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Home.css';

const Home = () => {
    return (
        <section>
            <Header />
            <article className='homeArticle'></article>
            <Footer />
        </section>
    );
}

export default Home;