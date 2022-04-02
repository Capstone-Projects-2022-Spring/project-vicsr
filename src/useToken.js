import { useState } from 'react';

export default function useToken(){

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        console.log("tokenString from session storage: " + tokenString)
        //const userToken = JSON.parse(tokenString);
        console.log("userToken from session storage: " + tokenString)
        //return userToken?.key
        return tokenString
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        //sessionStorage.setItem('token', JSON.stringify(userToken));
        //setToken(userToken.token)
        sessionStorage.setItem('token', userToken);
        console.log("usertoken in savetoken: " + userToken)
    };

    return {
        setToken: saveToken,
        token
    }
}



