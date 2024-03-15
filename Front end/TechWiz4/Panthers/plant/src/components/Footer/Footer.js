import React from 'react';
import { Col, Container, Row, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Footer/footer.css';

function Footer(props) {
    let year=new Date().getFullYear();
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg="4">
                        <div className="logo">
                           <div>
                                <h1 className='text-black'>Food Order Online</h1>
                            </div>
                        </div>
                        <p className='footer_text mt-4'>
                            Incididunt nostrud ut enim dolor consectetur consectetur sint proident.
                            Dolor aliqua sint eiusmod aute consectetur ullamco aliquip.
                        </p>
                    </Col>
                    <Col lg="3">
                        <div className='footer_quick-link'>
                            <h4 className='quick_link-title'>Top Categories</h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">Breakfast</Link>
                                </ListGroupItem>
                            </ListGroup>

                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">Lunch</Link>
                                </ListGroupItem>
                            </ListGroup>

                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">Dinner</Link>
                                </ListGroupItem>
                            </ListGroup>

                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">Combo</Link>
                                </ListGroupItem>
                            </ListGroup>

                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">Drink</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className='footer_quick-link'>
                            <h4 className='quick_link-title'>Userful Link</h4>
                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="/foodmain">Food</Link>
                                </ListGroupItem>
                            </ListGroup>

                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="/cart">Cart</Link>
                                </ListGroupItem>
                            </ListGroup>

                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="/login">Login</Link>
                                </ListGroupItem>
                            </ListGroup>

                            <ListGroup>
                                <ListGroupItem className='ps-0 border-0'>
                                    <Link to="#">Privacy Policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className='footer_quick-link'>
                            <h4 className='quick_link-title'>Contact</h4>
                            <ListGroup className='footer_contact'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i class="ri-map-pin-line"></i></span>
                                    <p>Non duis pariatur dolor quis ut veniam</p>
                                </ListGroupItem>
                            </ListGroup>

                            <ListGroup className='footer_contact'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i class="ri-phone-line"></i></span>
                                    <p>+84123456789</p>
                                </ListGroupItem>
                            </ListGroup>

                            <ListGroup className='footer_contact'>
                                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                                    <span><i class="ri-mail-line"></i></span>
                                    <p>vtiacademy@gmail.com.</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="12">
                        <p className='footer_copyright'>
                            @Copyright {year} developed by NT Railway65 VTI Academy. All rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;