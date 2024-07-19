/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import userSignIn from "../../hooks/userSignIn";

export default function ProtectedRouteAdmin({ children }) {
    const { isUser } = userSignIn();

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

