import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import useAuthStore from "../store/authStore.js";




function Navbar() {
    const navigate = useNavigate()
    const {token, user, logout ,fetchUser }= useAuthStore()
    
    useEffect(()=>{
         fetchUser()
    },[token])
   

    const handleLogout = () => {
        logout()
        navigate("/login")
    }
    const handleGetUser = () => {
        
        if (!token) {
            navigate("/login")
            return;
        }
        alert(`Username: ${user?.username} \nType: ${user?.user_type}  \nEmail: ${user?.email}`)
    }
    return (
        <nav>

            <Link to="/login">
                Launcher
            </Link>
            <div>
                {token && user?.user_type==="admin" &&(
                    <Link to="/register">Register</Link>
                )}
                {token && (user?.user_type==="admin" || user?.user_type==="intelligence")&&(
                    <Link to="/add">➕ Add Launcher</Link>
                )}

                <button onClick={handleGetUser}>My Account</button>

                {token && (
                    <button onClick={handleLogout}>Log Out</button>
                )}
            </div>
        </nav>
    )

}

export default Navbar