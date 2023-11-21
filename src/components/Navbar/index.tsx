import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Logout from "../../features/Authentication/Logout";
import Logo from "../../assets/icons/logo.png"

const Navbar = () => {
  const { auth } = useAuth();

  

  const renderLinks = () => {
    if (!auth.token) {
      return (
        <>
          <li className="flex justify-center align-middle list-none gap-3 text-xl">
            <ul className="flex flex-col justify-center">
              <Link to="/posts">Blog</Link>
            </ul>
            <ul className="flex flex-col justify-center">
              <Link to="/about">About</Link>
            </ul>
            <ul className="flex flex-col justify-center border-2 px-3 rounded-lg border-black">
              <Link to="/login">Login</Link>
            </ul>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="flex list-none gap-3 text-xl">
            <ul className="text-center">
              <Link to="/posts">Blog</Link>
            </ul>
            <ul className="text-center">
              <Link to="/about">About</Link>
            </ul>
            <ul className="text-center">
              <Link to="/posts/new">New Post</Link>
            </ul>
            <ul className="text-center">
              <Logout />
            </ul>
          </li>
        </>
      );
    }
  };

  return (
    <div className="flex gap-3 justify-between">
      
      <Link to="/"><img src={Logo} alt="" className="h-14"/></Link>
      {renderLinks()}
    </div>
  );
};

export default Navbar;
