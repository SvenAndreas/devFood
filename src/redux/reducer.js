import { fetchUser } from "../utils/fetchLocalStorageData";
import { SET_FOOD_ITEMS, SET_LOADING, SET_USER } from "./actions";

const userInfo = fetchUser()

const initialState = {
  user: userInfo,
  loading: false,
  foodItems: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading
      }
    case SET_FOOD_ITEMS:
      return {
        ...state,
        foodItems:action.payload
      }
    default:
      return {
        ...state
      }
  }
};

export default rootReducer;