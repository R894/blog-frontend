import { createContext,ReactNode, useState } from "react";

interface AuthContextType{
    auth: {
        token?:string;
    };
    setAuth: (auth: { token?: string }) => void;
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
    const [auth, setAuth] = useState<object>({});

    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;