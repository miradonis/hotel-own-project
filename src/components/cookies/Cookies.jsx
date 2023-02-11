import './Cookies.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useState } from 'react';

const Cookies = () => {
    const [modalClose, setModalClose] = useState(true);
    return (
        <>
            {modalClose && (
                <motion.section className='cookiesSection cookiesSectionHiden'
                    initial={{ scale: 0.5 }
                    }
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                    <h2 className='cookiesHeading'>Cookies for all</h2>
                    <p className='cookiesParagraph'>
                        We use cookies on our website. Some of them are essential, while others help us improve this website and your experience.
                    </p>
                    <div className='cookiesRadioDiv'>
                        <div>
                            <input className='cookiesSingleRadio' type='radio' name='cookieBox' checked></input>
                            <label>Essential</label>
                        </div>
                        <div>
                            <input className='cookiesSingleRadio' type='radio' name='cookieBox'></input>
                            <label>Statistics</label>
                        </div>
                        <div>
                            <input className='cookiesSingleRadio' type='radio' name='cookieBox'></input>
                            <label>External Media</label>
                        </div>
                    </div>
                    <div className='cookiesBtnBox'>
                        <button className='cookiesBtn' onClick={() => setModalClose(false)}>Accept all</button>
                        <button className='cookiesBtn' onClick={() => setModalClose(false)}>Save</button>
                        <button className='cookiesBtn' onClick={() => setModalClose(false)}>Only accept essential cookies</button>
                    </div>


                    <div className='cookiesMenu'>
                        <Link className='cookiesLink' to='/'>Individual privacy settings</Link>
                        <div>
                            <p>Cookie-details</p>
                            <p>Data protection</p>
                            <p>Impressum</p>
                        </div>
                    </div>
                </motion.section>
            )}
        </>
    );
}

export default Cookies;