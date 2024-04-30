// reducers/authReducer.js


const getInitialState  = () => {
      let initState = {
        isLoggedIn: false,
        user: null,
        accessToken: null,
        refreshToken: null,
        expiryTime: null,
      };
      return JSON.parse(localStorage.getItem("fin-user")) || initState;
      
};

const setInitState = (payload) => {
   localStorage.setItem("fin-user", JSON.stringify(payload));
};

const resetInitState = () => {
  localStorage.removeItem("fin-user");
 
};


const initialState = getInitialState();
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        setInitState({
          isLoggedIn: true,
          user: action.payload.user,
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
          expiryTime: action.payload.expiryTime,
        });
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload.user,
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
          expiryTime: action.payload.expiryTime,
        };
      case 'LOGOUT':
        resetInitState();
        return initialState;
      case 'REFRESH_TOKEN_SUCCESS':
          return {
            ...state,
            accessToken: action.payload.accessToken,
            refreshToken: action.payload.refreshToken,
            expiryTime: action.payload.expiryTime
          };
      default:
        return state;
    }
  };
  
  export default authReducer;
  