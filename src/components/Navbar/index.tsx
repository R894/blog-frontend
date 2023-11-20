import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Logout from "../../features/Authentication/Logout";
import DarkModeBtn from "../../assets/icons/darkmode-btn.png"

interface NavbarProps {
  title: string;
}

const Navbar = ({title}: NavbarProps) => {
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
            <ul className="flex flex-col justify-center">
              <Link to="/login">Login</Link>
            </ul>
            <ul className="flex flex-col justify-center">
              <Link to="/register">Register</Link>
            </ul>
            <img src={DarkModeBtn} className="w-auto h-10" alt="" />
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
      <h1 className="text-2xl font-semibold"><Link to="/">{title}</Link></h1>
      {renderLinks()}
    </div>
  );
};

export default Navbar;
