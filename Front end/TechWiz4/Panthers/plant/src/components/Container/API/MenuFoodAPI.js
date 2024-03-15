import { api } from "./apiFood"

let getListMenuFood = () => {
    
    return api("GET", "menus", null);
  };

let AddFoodNewAPI=(FoodNew)=>{
    return api("POST","menus",FoodNew);
}

let getFoodbyID=(id)=>
{
    return api("GET","menus",id);
}

let updateFoodByID=(foodItem)=>{
    return api("PUT","menus/"+foodItem.menuid,foodItem);
}

let deleteFoodbyID=(id)=>
{
    return api("DELETE","menus/"+id,null);
}
export {getListMenuFood,AddFoodNewAPI,getFoodbyID,updateFoodByID,deleteFoodbyID};