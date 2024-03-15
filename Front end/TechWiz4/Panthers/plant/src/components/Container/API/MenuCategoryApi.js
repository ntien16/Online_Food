import { api } from "./apiFood"

let getListMenuCategory = () => {
    
    return api("GET", "menucategories", null);
  };

let AddMenuCategory=(FoodNew)=>{
    return api("POST","menucategories",FoodNew);
}

let getMenuCategorybyID=(id)=>
{
    return api("GET",`menucategories/${id}`,null);
}

let updateMenuCategoryByID=(id)=>{
    
    return api("PUT","menucategories",id);
}

let deleteMenuCategorybyID=(id)=>
{
    return api("DELETE","menucategories",id);
}
export {getListMenuCategory,AddMenuCategory,getMenuCategorybyID,updateMenuCategoryByID,deleteMenuCategorybyID};