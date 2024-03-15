import React, { useEffect, useRef, useState } from 'react';
import Commonsection from '../components/Container/UIMenuFood/Commonsection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, ListGroupItem, ListGroup } from 'reactstrap';

import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Banner from "../images/Food/BannerFood.jpg"
import '../styles/product-detail.css'
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../Redux/slices/cartSlice';
import { getFoodByIDThunk } from "../Redux/slices/fetchListMenuFoodSlice"
import { setCommentUser, setCommentMessage, setAddComment, setRating } from "../Redux/slices/commentSlice"
function ProductDetail(props) {

    let [food, setFood] = useState([]);

    // let [scrollTop, setScrollTop] = useState(0);
    
    let paramid = useParams();
    let foodId = paramid.menuid;
    let [tab, setTab] = useState('desc');
    let reviewUser = useRef("")
    let reviewMsg = useRef("");
    let fetchFoodDetail = () => {
        axios
            .get(`http://localhost:8080/menus/${foodId}`, {
                headers: {
                    Authorization: "Basic " + btoa("Username1:123456"),
                },
            })
            .then((res) => {
                setFood(res.data);

            });
    };

    let handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFoodByIDThunk(paramid.menuid))
        fetchFoodDetail();
    }, [paramid.menuid]);
    console.log("food", food);


    const menuList = useSelector((state) => state.fetchListMenuFood)
    const listMenuFood = menuList.listMenuFood
    let items = "";

    if (listMenuFood && listMenuFood.length > 0) {
        items = listMenuFood.filter((item) => item.categoryName === food.categoryName).map((foodItem, index) => {
            let url = "/ProductDetail/" + foodItem.menuid;

            // const categoryNames = foodItem.menucategory.join(', ');
            return (
                <Col lg="3" md="4" xs="4" key={foodItem.menuid}>
                    <div className="food_item">
                        <div className="food_img">
                            <motion.img
                                whileHover={{ scale: 0.9 }}
                                src={foodItem.image}
                                alt={foodItem.menuname}
                            />
                        </div>
                        <div className="p-2 product_info">
                            <h3>
                                <Link to={url} onClick={handleScrollUp}>{foodItem.menuname}</Link>
                            </h3>
                        </div>
                        <div className="food_cart-bottom d-flex align-items-center justify-content-between p-2">
                            <span className="price">${foodItem.price}</span>
                            <motion.span whileTap={{ scale: 1.2 }} onClick={() => addToCart(foodItem)}>
                                <i className="ri-add-line" />
                            </motion.span>
                        </div>
                        <div className="food_cart-bottom d-flex align-items-center justify-content-between p-2">
                            <span className="price"> {foodItem.categoryName}</span>
                        </div>
                    </div>
                </Col>
            );
        });
    }

    let addToCart = (foodItem) => {
        dispatch(cartAction.addItem({
            menuid: foodItem.menuid,
            menuname: foodItem.menuname,
            price: foodItem.price,
            image: foodItem.image,
        }));
    }


    console.log("itemasdfsdfsdfsd", items);
    let [reviews, setReviews] = useState([]);
    let [reviewUserName, setReviewUserName] = useState('');
    let [reviewUserMsg, setReviewUserMsg] = useState('');
    // let [rating, setRating] = useState(null);
    let commentUser = useSelector((state => state.comment.commentUser));
    let commentMessge = useSelector((state => state.comment.commentMessge));
    let rating = useSelector((state => state.comment.rating));
    let listComment = useSelector((state) => state.comment.listComment);
    let CountComment = useSelector((state) => state.comment.countComment)
    let hanldeAddComment = (e) => {
        e.preventDefault();
       
        let newComment = {
            reviewUser: commentUser,
            reviewMsg: commentMessge,
            rating: rating,
        }
        if(reviewUser==null)
        {
            console.log("Error lỗi reviewUser rồi ạ");
        }
        else if(reviewMsg==null)
        {
            console.log("Error lỗi reviewMsg rồi ạ");
        } else if(rating==null)
        {
            console.log("Error lỗi  rating rồi ạ");
        } else
        {
            dispatch(setAddComment(newComment));

            dispatch(setCommentUser(''));
            dispatch(setCommentMessage(''));
            dispatch(setRating(null));
        }
        
    }
    // const submitHandler = (e) => {
    //     e.preventDefault();

    //     reviewUserName = reviewUser.current.value;
    //     reviewUserMsg = reviewMsg.current.value;

    //     let reviewObj = {
    //         userName: reviewUserName,
    //         text: reviewUserMsg,
    //         rating,
    //     };

    //     console.log("Review Object:", reviewObj); // Check the review object

    //     setReviews([...reviews, reviewObj]);

    //     setReviewUserName('');
    //     setReviewUserMsg('');
    //     setRating(null);
    // };

    console.log("listcomment", listComment);
    console.log("usercomment", commentUser);
    console.log("commentMessge", commentMessge);
    console.log("rating", rating);

    return (
        <Helmet title="Foods">
            <Commonsection title={food.menuname} />
            <section className='pt-5'>
                <Container>
                    <Row >
                        <Col lg="6" className='item_detail'>
                            <img src={food.image} alt={food.menuname} />
                        </Col>

                        <Col lg="6" >
                            <div className='product_details'>
                                <h2 >{food.menuname}</h2>
                                <div className='product_rating d-flex align-items-center gap-5 mb-3'>
                                    <div>
                                        <span ><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-half-s-line"></i></span>
                                    </div>
                                    <p><span>(4.5Rating)</span></p>
                                </div>
                                <span className='product_price'>${food.price}</span>
                                <span className='product_price'>{food.categoryname}</span>
                                <p className='mt-3'>Ea cillum do quis mollit occaecat fugiat irure.</p>
                                <div>
                                    <motion.button whileTap={{ scale: 1.2 }} className='buy_btn ' onClick={() => addToCart(food)}>
                                        Add To Cart
                                    </motion.button>
                                    <motion.button whileTap={{ scale: 1.2 }} className='buy_btn' >
                                        <Link to="/foodmain">Continue Shopping</Link>
                                    </motion.button>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className='tap_wrapper d-flex align-items-center gap-5 '>
                                <h6 className={`${tab === "desc" ? "active_tab" : ""}`}
                                    onClick={() => setTab('desc')}> Description</h6>
                                <h6 className={`${tab === "rev" ? "active_tab" : ""}`}
                                    onClick={() => setTab('rev')}>Reviews {CountComment}</h6>
                            </div>
                            {
                                tab === 'desc' ? (<div className='tab_content mt-5'>
                                    Sint aute laborum consectetur pariatur officia magna laboris est et sint consequat in laboris velit.
                                </div>) : (<div className='product_review mt-5'>
                                    <div className='review_wrapper'>
                                        <ListGroup>
                                            {listComment.map((comment, index) => (
                                                <ListGroupItem key={index}>
                                                    <span>({comment.rating} Rating)</span>
                                                    <p>{comment.reviewMsg}</p>
                                                    <span>{comment.reviewUser}</span>
                                                </ListGroupItem>
                                            ))}

                                        </ListGroup>
                                        <div className='review_form'>
                                            <h4>
                                                Leave your experient
                                            </h4>
                                            <form action='' onSubmit={hanldeAddComment}   >
                                                <div className='form_group'>
                                                    <input type='text' placeholder='Enter yourname' value={commentUser} onChange={(event) => {
                                                        dispatch(setCommentUser(event.target.value));

                                                    }} />
                                                </div>

                                                <div className='form_group d-flex align-items-center gap-5 rating_group'>
                                                    {[1, 2, 3, 4, 5].map((value) => (
                                                        <span key={value} onClick={() => dispatch(setRating(value))}>
                                                            {value}<i className="ri-star-s-fill"></i>
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className='form_group'>
                                                    <textarea row={5} type='text' placeholder='Review message...'
                                                        value={commentMessge} onChange={(e) => dispatch(setCommentMessage(e.target.value))} />
                                                </div>
                                                <button type='submit' className='buy_btn'>Submit</button>
                                            </form>
                                        </div>
                                    </div>

                                </div>)
                            }

                        </Col>
                        <Col lg="12">
                            <h2 className="related_title mt-5">You might also like</h2>
                        </Col>
                        <Col className='relative_food d-flex align-items-center gap-5 flex-wrap' >
                            {items}
                        </Col>




                    </Row>
                </Container>
            </section>
        </Helmet>
    );
}

export default ProductDetail;