import { api } from "./apiFood"

let getListCategory = () => {
    
    return api("GET", "categories", null);
  };



export {getListCategory};