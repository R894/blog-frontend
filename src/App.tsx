import { RouterProvider } from "react-router-dom";
import router from "./router";
import useAuth from "./hooks/useAuth";
import { useEffect } from "react";

const App = () => {
  const { setAuth } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAuth({token: token});
    }
  }, [setAuth]);

  return (
      <RouterProvider router={router} />
  );
};

export default App;
