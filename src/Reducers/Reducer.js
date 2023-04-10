

export const Reducer = (state, action) => {
    switch (action.type) {
      case "ADMIN_LOGIN":
        return {
          ...state,
          admin: action.payload,
        };
      case "ADMIN_LOGOUT":
        return {
          ...state,
          admin:[],
        };
     
      default:
        return state;
    }
  };
  
  
  
  
  