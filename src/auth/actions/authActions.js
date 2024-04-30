// actions/authActions.js
export const loginSuccess = ({ user, accessToken, refreshToken, expiryTime }) => ({
    type: 'LOGIN_SUCCESS',
    payload: { user, accessToken, refreshToken, expiryTime },
  });
  
  export const loginFailure = () => ({
    type: 'LOGIN_FAILURE',
  });

  // actions/authActions.js
export const logout = () => ({
    type: 'LOGOUT',
    
  });

  export const refreshTokenSuccess = ({ accessToken, refreshToken, expiryTime }) => ({
    type: 'REFRESH_TOKEN_SUCCESS',
    payload: { accessToken, refreshToken, expiryTime } // Assuming response contains new token and expiry time
  });

