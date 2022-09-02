import { fetchUser } from "../utils/fetchLocalStorageData";
import { SET_LOADING, SET_USER } from "./actions";

const userInfo = fetchUser()

const initialState = {
  user: userInfo,
  loading: false,
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
    default:
      return {
        ...state
      }
  }
};

export default rootReducer;