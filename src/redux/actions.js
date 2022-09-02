export const SET_USER = "SET_USER";
export const SET_LOADING = "SET_LOADING"


export const setUsers = (payload)=>{
      return  {
            type: SET_USER,
            payload: {...payload}
        }
}

export const setIsLoading = () => {
      return {
            type: SET_LOADING
      }
}