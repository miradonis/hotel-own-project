import './Home.css';
import Certifications from '../../components/certifications/Certifications';
import IconsAndText from '../../components/iconsAndText/IconsAndText';
import Rooms from '../../components/rooms/Rooms';
import Footer from '../../components/footer/Footer';

const Home = () => {
    {/* big picture as background ------ components inserted */ }

    return (
        <section className='homeSection'>
            {/* <article className='homeArticle'></article> */}
            <article className='firstSection' >
                <div className='firstBox'>
                    <p className='firstText'>
                        Experience a stay of exceptional class at  <span className='firstSpan'>Hotel Lamoure</span> - where excellence becomes a habit
                    </p>
                </div>
            </article>

            {/* -------------- COMPONENTS ---------------- */}
            <IconsAndText />
            <Rooms />
            <Certifications />
            <Footer />
        </section>
    );
}

export default Home;