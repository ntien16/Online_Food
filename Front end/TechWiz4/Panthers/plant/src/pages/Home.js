import React from 'react';
import '../styles/home.css'
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import Hamburger1 from '../images/Food/Hamburger1.png';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Services from '../services/Services';
import Clock from "../components/Container/UIMenuFood/Clock";
import BeefSteak from "../images/Food/BeefSteak.png";
import FoodPage from './FoodPage';


function Home(props) {
    let year = new Date().getFullYear();
    return <Helmet title={" Home"}>
        <section className='hero_section'>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className='hero_content'>
                            <p className='hero_subtitle'>Trending product in {year}</p>
                            <h2>Make  your Decision  More  Simple  &  Easily</h2>
                            <p>Fugiat  qui  sint  pariatur  labore  consequat  pariatur  sit  dolor  dolor  deserunt.
                                Deserunt  adipisicing  fugiat  ut  eu.
                                Non  ipsum  sint  occaecat  id  eu  sunt  mollit  laborum  est  qui.
                            </p>
                            <motion.button whileTap={{ scale: 1.2 }} className='buy_btn'><Link to="/foodmain">Food Now</Link></motion.button>
                        </div>
                    </Col>
                    <Col lg='6' md='6' >
                        <div className="hero_img">
                            <motion.img whileHover={{ scale: 1.1 }} src={Hamburger1} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
          {/* -----------Display Services----------- */}
        <Services />
        {/* -----------Display Services End----------- */}
        {/* -----------Display FoodList----------- */}
        <Container>
            <Row>
                <Col lg="12" className='text-center'>
                    <h2 className='section_title'>List of Foods</h2>
                    <FoodPage/>
                </Col>
            </Row>
        </Container>
        
         {/* -----------Display FoodList End----------- */}
        <section className='time_count'>
            <Container>
                <Row>
                    <Col lg="6" md="12">
                        <div className='clock_top-content'>
                            <h4 className="text-white fs-6 mb-2">Limit Offers</h4>
                            <h3 className="text-white fs-5 mb-3">Quality Foods</h3>
                        </div>
                        <Clock />
                        <motion.button whileTap={{ sacle: 1.2 }} className='buy_btn food_btn'>
                            <Link to="/foodmain">Visit Food</Link>
                        </motion.button>
                    </Col>
                    <Col lg="6" md="12" className="text-end counter_img">
                        <img src={BeefSteak} alt='' />
                    </Col>
                </Row>

            </Container>
        </section>
       
    </Helmet>
}

export default Home;