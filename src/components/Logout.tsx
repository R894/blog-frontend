import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Logout = () => {
    const {setAuth} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        setAuth({});
        navigate("/");
    }
    
    return(
        <Link to="/" onClick={handleLogout}>Logout</Link>
    )
}
export default Logout;