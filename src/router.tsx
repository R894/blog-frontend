import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import PostsPage from "./pages/Posts";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import RequireAuth from "./components/RequireAuth";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/posts",
      element: <RequireAuth><PostsPage/></RequireAuth>,
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/register",
      element: <RegisterPage/>,
    },
    {
      path: "/logout",
      element: <RegisterPage/>,
    }
  ]);

export default router;