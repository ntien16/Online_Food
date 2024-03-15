
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../../../styles/food.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartAction } from "../../../Redux/slices/cartSlice";
import ProductDetail from "../../../pages/ProductDetail";


function Food(props) {
  let {listMenuFood,selectedCategory,selectedSortOption,searchText}=props
  
  let dispatch = useDispatch();
  let addToCart = (foodItem) => {
    dispatch(cartAction.addItem({
      menuid: foodItem.menuid,
      menuname: foodItem.menuname,
      price: foodItem.price,
      image: foodItem.image,
    }));
  }
  let handleScrollUp=()=>
  {
    window.scrollTo({top:0,behavior:"smooth"})
  }
  
  if (selectedCategory && selectedCategory !== "All") {
    listMenuFood = listMenuFood.filter(foodItem =>
      foodItem.categoryName === selectedCategory
    );
}

if (searchText) {
  listMenuFood = listMenuFood.filter(foodItem =>
        foodItem.menuname.toLowerCase().includes(searchText.toLowerCase())
    );
}

if (selectedSortOption === 'ascending') {
  listMenuFood = listMenuFood.sort((a, b) => a.price - b.price);
} else if (selectedSortOption === 'descending') {
  listMenuFood = listMenuFood.sort((a, b) => b.price - a.price);
}

  console.log(process.env.PUBLIC_URL);
  // let array1 = Object.values(listMenuFood);
  let items = "";
  if (listMenuFood && listMenuFood.length > 0) {
    items = listMenuFood.map((foodItem, index) => {
      let url="/ProductDetail/"+foodItem.menuid;
      let {image,menuid,menuname,price}=foodItem;
      // const categoryNames = foodItem.menucategory.join(', ');
      return (
        <Col lg="3" md="4" xs="4" key={foodItem.menuid}>
          <div className="food_item">
            <div className="food_img">
              <motion.img
                whileHover={{ scale: 0.9 }}
                src={foodItem.image}
                alt={menuname}
              />
            </div>
            <div className="p-2 product_info">
              <h3>
                <Link to={url} onClick={handleScrollUp}>{menuname}</Link>
              </h3>
            </div>
            <div className="food_cart-bottom d-flex align-items-center justify-content-between p-2">
              <span className="price">${price}</span>
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

  return (
    <Row>
      {items}
      
    </Row>
  );


  // return (
  //   <>
  //     {items}
  //   </>
  // )


}

export default Food;

