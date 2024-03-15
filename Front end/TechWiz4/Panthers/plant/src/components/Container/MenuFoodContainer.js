import axios from "axios"
import React, { useEffect, useState } from "react";
import CreateButton from "../Container/UIMenuFood/CreateButton";
import ModalCreateNewItemFood from "../Container/UIMenuFood/ModalCreateNewItemFood";
import ResultFormFood from "../Container/UIMenuFood/ResultFormFood";
import { Container } from "reactstrap";
import {AddFoodNewAPI,updateFoodByID,deleteFoodbyID} from "../Container/API/MenuFoodAPI";
import { getListMenuFood, getFoodbyID } from "./API/MenuFoodAPI";
import {getListCategory} from "./API/CategoryApi"
import ModalUpDateFood from "./UIMenuFood/UpDateFood/ModalUpDateFood";
import { getListMenuFoodThunk, listMenuAction, updateFoodThunk } from  "../../Redux/slices/fetchListMenuFoodSlice";
import { useDispatch, useSelector } from "react-redux";


function MenuFoodContainer(props) {
  
  let [showModal, setShowModal] = useState(false);
  let [listCategory,setListCategory]=useState([]);
  let [listMenuFood, setListMenuFood] = useState([]);
  let [listMenucategory, setListMenucategory] = useState([]);
  let [showUpDateForm,setShowUpDateForm]=useState(false);
  let [editItem,setEditItem]=useState("");

  let dispatch=useDispatch();
//Hàm Callback Mở model
  let onHandleCreateNewItemFood = () => {
    setShowModal(true);
  };
  //Hàm Callback đóng model
  let onHandleCloseModal=()=>{
    setShowModal(false);
  }

let onHanldeShowUpdate=(foodItem)=>{
  setShowUpDateForm(true);
  setEditItem(foodItem)
}

let onHanldeCloseUpdate=()=>{
  setShowUpDateForm(false);
}
let onHandEven=()=>{
  let listCategoryEven = listCategory.filter((e)=>e.menuid%2!==0)
}
  //Hàm callback xử lý khi nhấn nút Create
  let onHandleCreateNewItemFoodCallBack = (itemFood_param) => {

    // let newFoodItem_API = {
    //   menuid: itemFood_param.menuid,
    //   menuname: itemFood_param.menuname,
    //   price: itemFood_param.price,
    //   image:itemFood_param.image,
    //   categoryid: itemFood_param.category
    // };
    AddFoodNewAPI(itemFood_param).then((res) => {
      // listMenuFood.push(res);
      // setListMenuFood(res);
      console.log("itemFood_param:",res);
      // fetchMenuFood();
      listMenuFood.push(res);
      setListMenuFood(listMenuFood);
      fetchMenuFood();
    });
    
    // fetchMenuFood();
    setShowModal(false);
  }
  
  
  let fetchMenuFood = () => {
    // axios.get("http://localhost:8080/menus", {
    //   headers: {
    //     Authorization: "Basic " + btoa("Username1:123456")
    //   }
    // })
    //   .then((res) => {
    //     setListMenuFood(res.data);
    
    //     console.log("abc",res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // getListMenuFood().then((Food_list) => {
    //   setListMenuFood(Food_list);
    // })
    dispatch(getListMenuFoodThunk())
  }

  let fetchCategory=()=>
  {
    // axios.get("http://localhost:8080/categories",{
    //   headers:{
    //     Authorization:"Basic " + btoa("Username1:123456")
    //   }
    // }).then((res)=>{
    //     setListCategory(res.data);
  
    // })
    getListCategory().then((Category_API)=>{
      setListCategory(Category_API);
    })
  }
  console.log("danh sach category trong container", listCategory);
  useEffect(() => {
    fetchMenuFood();
    fetchCategory();
  }, []);

  const onHandleUpdateCallBack = (newFoodItem) => {
    dispatch(updateFoodThunk(newFoodItem))
    setShowUpDateForm(false)
  }
  return (
    <Container>
    <CreateButton onHandleCreateNewItemFood={onHandleCreateNewItemFood}/>
    <ModalCreateNewItemFood showModal={showModal}
    onHandleCloseModal={onHandleCloseModal}
    onHandleCreateNewItemFoodCallBack={onHandleCreateNewItemFoodCallBack}
    listCategory={listCategory}
    listMenucategory={listMenucategory}/>
    <ResultFormFood listMenuFood={listMenuFood}
    onHanldeShowUpdate={onHanldeShowUpdate}
    />
    <ModalUpDateFood 
    onHanldeShowUpdate={onHanldeShowUpdate}
    onHanldeCloseUpdate={onHanldeCloseUpdate}
    showUpDateForm={showUpDateForm}
    listCategory={listCategory}
    editItem={editItem}
    onHandleUpdateCallBack={onHandleUpdateCallBack}
    />
    </Container>

  )
 
}

export default MenuFoodContainer;
