import { Link } from 'react-router-dom';
import HeaderCSS from './header.module.css';
import useAuth from '../../hooks/useAuth';
import Logout from '../Logout';

const Header = () => {
    const { auth } = useAuth();

    const renderLinks = () => {
        if(!auth.token){
            return (
                <>
                    <li className={HeaderCSS.li}>
                        <ul><Link to="/">Home</Link></ul>
                        <ul><Link to="/login">Login</Link></ul>
                        <ul><Link to="/register">Register</Link></ul>
                    </li>
                </>
            );
        } else {
            return (
                <>
                    <li className={HeaderCSS.li}>
                        <ul><Link to="/">Home</Link></ul>
                        <ul><Link to="/posts">Posts</Link></ul>
                        <ul><Logout/></ul>
                    </li>
                </>
            );
        }

    }

    return (
        <div className={HeaderCSS.navbar}>
            <h1>Blog</h1>
            {renderLinks()}
        </div>
    );
};

export default Header;