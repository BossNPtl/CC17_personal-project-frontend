/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

import { getAccessToken, removeAccessToken, setAccessToken } from "../utils/local-storage";
import authApi from "../apis/auth-api";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    const [isUser, setIsUser] = useState(null);
    const fetchUser = async () => {
        try {
            if (getAccessToken()) {
                const res = await authApi.getAuthUser();
                setIsUser(res.data.user);
            }
        } catch (err) {
            console.log(err)
        }
    };
    console.log(isUser)
    useEffect(() => {

        fetchUser();
    }, []);

    const login = async credentials => {
        const res = await authApi.login(credentials);
        setAccessToken(res.data.accessToken);
        const resGetAuthUser = await authApi.getAuthUser();
        setIsUser(resGetAuthUser.data.user);
    };

    const logout = () => {
        removeAccessToken();
        setIsUser(null);
    };

    return (
        <AuthContext.Provider value={{ isUser, setIsUser, login, logout, fetchUser }}>
            {children}
        </AuthContext.Provider>
    );
}