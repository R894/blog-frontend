import { Link } from 'react-router-dom';
import HeaderCSS from './header.module.css';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {auth} = useAuth();
    return (
        <>
            <div className={HeaderCSS.navbar}>
                <h1>Blog</h1>
                <li className={HeaderCSS.li}>
                    <ul><Link to="/">Home</Link></ul>
                    { auth.token? (<ul><Link to="/posts">Posts</Link></ul>): '' }
                    { !auth.token? (<ul><Link to="/login">Login</Link></ul>): (<ul><Link to="/logout">Logout</Link></ul>) }
                    { !auth.token? (<ul><Link to="/register">Register</Link></ul>) : '' }
                </li>
            </div>
        </>
    );
};

export default Header;