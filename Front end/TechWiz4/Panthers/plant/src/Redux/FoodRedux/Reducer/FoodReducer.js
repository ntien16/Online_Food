import { ADD_NEW_FOOD, DELETE_FOOD, UPDATE_FOOD,SET_SELECTED_FOOD } from "../CONSTANT/ActionTypeFood";

let initialState={
    listMenuFood:[],
};

 let MenuFoodReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case ADD_NEW_FOOD:
            let itemFood_new=action.payload;
            let listMenuFoodNew=state.listMenuFood;
            listMenuFoodNew.push(itemFood_new);
            return{
                ...state,
                listMenuFood:listMenuFoodNew
            };
            case DELETE_FOOD:
            let idDel=action.payload;
            let listMenuFood_del=state.listMenuFood;
           for(let index=0;index<listMenuFood_del;index++)
           {
            if(listMenuFood_del[index].id==idDel)
            {
                listMenuFood_del.splice(index,1);
            }
           }
            return{
                ...state,
                listMenuFood:listMenuFood_del
            };

            case UPDATE_FOOD:
            let udUpdate=action.payload;
            let listMenuFood_upDate=state.listMenuFood;
           for(let index=0;index<listMenuFood_del;index++)
           {
            if(listMenuFood_del[index].id==udUpdate)
            {
                listMenuFood_del.e(index,1);
            }
           }
            return{
                ...state,
                listMenuFood:listMenuFood_del
            };

            case SET_SELECTED_FOOD:
      return {
        ...state,
        selectedItemFood: action.payload,
      };

            default:
                return {
                  ...state,
                };    

            
    }
}
export default MenuFoodReducer;