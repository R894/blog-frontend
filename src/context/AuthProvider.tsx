import { createContext, ReactNode, useState, useEffect } from "react";

interface AuthContextType {
    auth: {
      token?: string;
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
    const [auth, setAuth] = useState<{token?: string }>({});
  
    useEffect(() => {
      if(!auth) return;

      if (auth.token) {
        localStorage.setItem("accessToken", auth.token);
      } else {
        localStorage.removeItem("accessToken");
      }
    }, [auth]);
  
    return (
      <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
      </AuthContext.Provider>
    );
  };

export default AuthContext;
