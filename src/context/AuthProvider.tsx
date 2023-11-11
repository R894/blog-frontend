import { createContext,ReactNode, useState, useEffect } from "react";

interface AuthContextType{
    auth: {
        token?:string;
    };
    setAuth: (auth: { token?: string  }) => void;
}

const defaultAuthContext: AuthContextType = {
    auth: {},
    setAuth: () => {}, 
};

const AuthContext = createContext<AuthContextType>(defaultAuthContext);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [auth, setAuth] = useState<{ token?: string }>(() => {
        const storedToken = localStorage.getItem("authToken");
        return { token: storedToken || undefined };
    });

    useEffect(() => {
        if (auth.token) {
            localStorage.setItem("authToken", auth.token);
        } else {
            localStorage.removeItem("authToken");
        }
    }, [auth]);
    
    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;