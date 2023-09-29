import { JSX } from "react";
import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface RequireAuthProps {
    children: JSX.Element;
}

const RequireAuth = ({ children }: RequireAuthProps) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.token? 
            (
                children
            )
            :<Navigate to="/login" state={{from: location}} replace /> 
    );
}

export default RequireAuth;