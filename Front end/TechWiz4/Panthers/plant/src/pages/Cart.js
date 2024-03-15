
import { motion } from 'framer-motion';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Helmet from '../components/Helmet/Helmet';
import Commonsection from '../components/Container/UIMenuFood/Commonsection';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { cartAction } from '../Redux/slices/cartSlice';
import "../styles/cart.css"
function Cart(props) {

    let cartItems = useSelector((state) => state.cart.cartItems)
    let totalAmount = useSelector((state) => state.cart.totalAmount);
    
    // const dispatch = useDispatch();
    let Itemfoods = ({ item }) => {
        const dispatch = useDispatch();
        const deleteProduct = () => {
            dispatch(cartAction.deleteItem(item.menuid));
        };
        return (
            <tr>
                <td>
                    <img src={item.image} alt="" />
                </td>
                <td>{item.menuname}</td>
                <td>${item.price} </td>
                <td>{item.quantity}</td>
                <td>
                    <motion.i 
                        onClick={() => deleteProduct(item.menuid)}
                        whileTap={{ scale: "1.2" }}
                        className="ri-delete-bin-line"
                    ></motion.i>
                </td>
            </tr>
        );
    };
    return (
        <Helmet>
            <Commonsection title="Fooding Cart" />
            <section>
                <Container>
                    <Row>
                        <Col lg="9">
                            {cartItems.length === 0 ? (
                                <h2 className="fs-4 text-center mt-5">
                                    No item added to the cart
                                </h2>
                            ) : (
                                <table className="table bordered">
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Qty</th>
                                            <motion.th whileTap={{ scale: "1.2" }}>Delete</motion.th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {cartItems.map((item, index) => (
                                            <Itemfoods item={item} key={index} />
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </Col>
                        <Col lg="3">
                            <div className="mt-5">
                                <h6 className="d-flex align-items-center justify-content-between">
                                    Subtotal
                                    <span className="fs-4 fw-bold">${totalAmount} </span>
                                </h6>

                            </div>
                            <p className="fs-6 mt-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                                aliquid.
                            </p>
                            <div>
                                <button className="buy_btn mt-3">
                                    <Link to="/foodmain">Continue Shopping</Link>
                                </button>
                                <button className="buy_btn mt-3">
                                    <Link to="/checkout">Checkout</Link>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
}

export default Cart;