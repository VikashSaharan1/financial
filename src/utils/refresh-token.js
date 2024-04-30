import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshTokenSuccess, logout } from '../auth/actions/authActions';
import api from './api';
import { GetRefreshToken, GetTokenExpiryTime } from './local-store';


// Action creator to refresh token
export const refreshToken = () => async (dispatch, getState) => {
  const navigate = useNavigate();

    try {
     // Call refresh token API
      
      const response = await api.post('/auth/refreshtoken', { "refreshToken": GetRefreshToken() })
      const { accessToken, refreshToken, expiryTime } = response.data;
      // Dispatch action to update token in Redux state
      dispatch(refreshTokenSuccess({
        payload: { accessToken, refreshToken, expiryTime } // Assuming response contains new token and expiry time
      }));
    } catch (error) {
      console.error('Error refreshing token:', error);
      dispatch(logout());
      navigate("/");
      // Handle error (e.g., logout user)
    }
};


export const CheckRefreshToken  = () => {
  const dispatch = useDispatch();
  const expiryTime = GetTokenExpiryTime() / 1000;
  // console.log(expiryTime);
  useEffect(() => {
    const checkTokenExpiry = () => {
      const currentTime = Date.now() / 1000; // Convert to seconds
      
      if (expiryTime && expiryTime < currentTime) {
        // Token expired, refresh it
        console.log("Expired time");
        console.log(expiryTime);
        dispatch(refreshToken());
      }
    };

    const interval = setInterval(checkTokenExpiry, 60000); // Check every minute

    return () => clearInterval(interval); // Cleanup
  }, [dispatch, expiryTime]);
} 

