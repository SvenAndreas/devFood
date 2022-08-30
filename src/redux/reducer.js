import { fetchUser } from "../utils/fetchLocalStorageData";
import { SET_USER } from "./actions";

const userInfo = fetchUser()

const initialState = {
    user: userInfo, 
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type){
      case SET_USER:
            return{
                ...state,
                user:action.payload
            }
      default:
        return {
          ...state
        }
    }
  };
  
  export default rootReducer;