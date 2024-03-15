import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Food from "./UIMenuFood/Food";
import FoodList from "./UIMenuFood/FoodList";
import { getListMenuFood, getFoodbyID } from "./API/MenuFoodAPI";
function MenuFoodContainer(props) {
  // let { selectedCategory, selectedSortOption, searchText } = props
  let [listCategory, setListCategory] = useState([]);
  let [listMenuFood, setListMenuFood] = useState([]);
  let [totalPage, setTotalpage] = useState("");
  let [images, setImages] = useState([]);
  let {selectedCategory,selectedSortOption,searchText}=props



  let fetchMenuFood = () => {
    // axios
    //   .get("http://localhost:8080/menus", {
    //     headers: {
    //       Authorization: "Basic " + btoa("Username1:123456"),
    //     },
    //   })
    //   .then((res) => {
    //     setListMenuFood(res.data);
    //     console.log("abc", res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    getListMenuFood().then((Food_list) => {
      setListMenuFood(Food_list);
    })
  };
  let fetchGetFoodByID = () => {
    getFoodbyID().then((FoodItem) => {
      setListMenuFood(FoodItem);
      
    })
  }

  let fetchCategory = () => {
    axios
      .get("http://localhost:8080/categories", {
        headers: {
          Authorization: "Basic " + btoa("Username1:123456"),
        },
      })
      .then((res) => {
        setListCategory(res.data);

      });
  };
  useEffect(() => {
    fetchMenuFood();
    fetchGetFoodByID();
    fetchCategory();
  }, []);


  return (
    <Container>
      <FoodList listMenuFood={listMenuFood} images={images}
          selectedCategory={selectedCategory}
          selectedSortOption={selectedSortOption}
          searchText={searchText}
        />
      {/* <Food listMenuFood={listMenuFood}/> */}
    </Container>
  );
}

export default MenuFoodContainer;
