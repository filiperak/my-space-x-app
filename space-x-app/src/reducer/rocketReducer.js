export const initialState = {
    rockets: [],
    loading: false,
    error: null,
  };
  
  export const rocketReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_ROCKETS_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
  
      case "FETCH_ROCKETS_SUCCESS":
        return {
          ...state,
          loading: false,
          rockets: action.payload,
        };
      case "FETCH_ROCKETS_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.payload, //false
        };
  
      default:
        return state;
    }
  };
  