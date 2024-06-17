/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import UserSignIn from "../../hooks/userSignIn";

export default function ProtectedRouteAdmin({ children }) {
    const { isUser } = UserSignIn();

    if (!isUser) {
        return <Navigate to='/auth/login' />
    }
    if (!isUser?.['isAdmin']) {
        return <Navigate to='/' />
    }

    return (
        <>
            {children}
        </>
    );
}

