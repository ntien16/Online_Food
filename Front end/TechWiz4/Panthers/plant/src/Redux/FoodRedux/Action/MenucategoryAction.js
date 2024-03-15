import {ADD_NEW_MENUCATEGORY,DELETE_MENUCATEGORY,UPDATE_ACCOUNT}from "../CONSTANT/ActionTypeMenuCategory"

export let acctionAddItemFood = (itemFood_param) => {
    return {
      type: ADD_NEW_MENUCATEGORY,
      payload: itemFood_param,
    };
  };

  export let acctionDeleteItemFood = (idDelete) => {
    return {
      type: DELETE_MENUCATEGORY,
      payload: idDelete,
    };
  };

  export let acctionUpdateItemFood = (idUpdate) => {
    return {
      type: UPDATE_ACCOUNT,
      payload: idUpdate,
    };
  };