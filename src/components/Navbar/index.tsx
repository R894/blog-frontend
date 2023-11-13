import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Logout from "../Logout";

interface NavbarProps {
  title: string;
}

const Navbar = ({title}: NavbarProps) => {
  const { auth } = useAuth();

  

  const renderLinks = () => {
    if (!auth.token) {
      return (
        <>
          <li className="flex list-none gap-3 text-xl">
            <ul className="text-center">
              <Link to="/login">Login</Link>
            </ul>
            <ul className="text-center">
              <Link to="/register">Register</Link>
            </ul>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="flex list-none gap-3 text-xl">
            <ul className="text-center">
              <Link to="/posts">Posts</Link>
            </ul>
            <ul className="text-center">
              <Link to="/posts/new">Create Post</Link>
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
