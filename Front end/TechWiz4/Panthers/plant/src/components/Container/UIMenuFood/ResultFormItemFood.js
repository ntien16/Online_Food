import React ,{useState} from "react";
import { Button } from "reactstrap";
import ModalUpDateFood from "./UpDateFood/ModalUpDateFood";
import { useDispatch, useSelector } from "react-redux";
import { deleteFoodThunk } from "../../../Redux/slices/fetchListMenuFoodSlice";

function ResultFormItemFood(props) {
  //Nhận lại từ ResultFormFood
  let { onHanldeShowUpdate} = props;
  const dispatch = useDispatch()
  const menuList = useSelector((state) => state.fetchListMenuFood)
  const listMenuFood = menuList.listMenuFood
  // let array1 = Object.values(listMenuFood);
  console.log("listMenuFood in ResultFormItemFood", listMenuFood);
  let handleShowUpdate=(foodItem)=>{
    onHanldeShowUpdate(foodItem);
  }
  
  let itemFood = "";
  if (listMenuFood) {
    itemFood = listMenuFood.map((foodItem, index) => {
      
      return (
        <tr key={foodItem.menuid}>
          <td>{foodItem.menuid}</td>
          <td>{foodItem.menuname}</td>
          <td>${foodItem.price}</td>
          <td>{foodItem.image}</td>
          <td>{foodItem.categoryName}</td>

          <td>
            <Button color="warning"onClick={() => handleShowUpdate(foodItem)}>Edit</Button>
          </td>
          <td>
            <Button color="warning" onClick={()=> dispatch(deleteFoodThunk(foodItem.menuid))}>Delete</Button>
          </td>
        </tr>
      );
    });
  }
  console.log("itemFood là tôi",itemFood);
  return <>
  {itemFood}
  {/* <ModalUpDateFood 
  editItem={editItem}
  onHanldeShowUpdate={handleShowUpdate}/> */}

  </>;
}

export default ResultFormItemFood;
