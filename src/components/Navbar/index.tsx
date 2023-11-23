import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Logout from "../../features/Authentication/Logout";
import Logo from "../../assets/icons/logo.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { auth } = useAuth();
  const [authenticated, setAuthenticated] = useState(!!auth.token);
  useEffect(() => {
    console.log("Auth state changed:", auth.token);
    setAuthenticated(!!auth.token);
  }, [auth.token]);

  const renderLinks = () => {
    if (!authenticated) {
      return (
        <>
          <li className="flex justify-center items-center list-none gap-3 text-xl py-1 font-main">
            <ul className="flex flex-col justify-center items-center">
              <Link to="/login">
                <button className="btn-primary w-32">Login</button>
              </Link>
            </ul>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="flex justify-center align-middle list-none gap-3 text-xl py-1 font-main">
            <ul className="flex flex-col justify-center">
              <Link to="/posts/new">New Post</Link>
            </ul>
            <ul className="flex flex-col justify-center">
              <Logout />
            </ul>
          </li>
        </>
      );
    }
  };

  return (
    <div className="flex gap-3 justify-between">
      <div className="flex">
        <li className="flex justify-center align-middle list-none gap-8 text-xl py-1 font-main">
          <ul>
            <Link to="/">
              <img src={Logo} alt="" className="h-14" />
            </Link>
          </ul>
          <ul className="flex flex-col justify-center">
            <Link to="/">Home</Link>
          </ul>
          <ul className="flex flex-col justify-center">
            <Link to="/about">About</Link>
          </ul>
        </li>
      </div>
      {renderLinks()}
    </div>
  );
};

export default Navbar;
