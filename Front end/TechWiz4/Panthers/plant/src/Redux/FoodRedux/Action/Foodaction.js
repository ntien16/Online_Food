import { ADD_NEW_FOOD, DELETE_FOOD, UPDATE_FOOD,SET_SELECTED_FOOD,FETCH_MENU_LIST } from "../CONSTANT/ActionTypeFood";

export let acctionAddItemFood = (itemFood_param) => {
    return {
      type: ADD_NEW_FOOD,
      payload: itemFood_param,
    };
  };

  export let acctionDeleteItemFood = (idDelete) => {
    return {
      type: DELETE_FOOD,
      payload: idDelete,
    };
  };

  export let acctionUpdateItemFood = (idUpdate) => {
    return {
      type: UPDATE_FOOD,
      payload: idUpdate,
    };
  };

  export const setSelectedFood = (idFood) => ({
    type: SET_SELECTED_FOOD,
    payload: idFood,
  });

  
  