import { useSelector } from 'react-redux';

export const GetAuth = () => {
    return useSelector(state => state.auth);
};

export const IsUserLoggedIn = () => {
    let auth = GetAuth();
    return  typeof auth === "object"?auth.isLoggedIn: JSON.parse(auth).isLoggedIn;
};

export const GetRefreshToken = () => {
    let auth = GetAuth();
    return  typeof auth === "object"?auth.refreshToken: JSON.parse(auth).refreshToken;
};
export const GetAccessToken = () => {
    let auth = GetAuth();
    return  typeof auth === "object"?auth.accessToken: JSON.parse(auth).accessToken;
};

export const GetTokenExpiryTime = () => {
    let auth = GetAuth();
    return  typeof auth === "object"?auth.expiryTime: JSON.parse(auth).expiryTime;
};

export const GetLoggedInUser = () => {
    let auth = GetAuth();
    return  typeof auth === "object"?auth.user: JSON.parse(auth).user;
};

export const GetLoggedInUserRole = () => {
    let user = GetLoggedInUser();
    return user.roles;
};

export const GetLoggedInUserName = () => {
    let user = GetLoggedInUser();
    return user.name;
};

export const GetLoggedInUserDisplayName = () => {
    let user = GetLoggedInUser();
    return [user.first_name, user.last_name];
};

export const GetType = (p) => {
    if (Array.isArray(p)) return 'array';
    else if (typeof p == 'string') return 'string';
    else if (p != null && typeof p == 'object') return 'object';
    else return 'other';
}

export const imageUrl = 'http://localhost:8080/photos/';
//export const imageUrl = 'https://alpha.surfpoint.io/photos/';



