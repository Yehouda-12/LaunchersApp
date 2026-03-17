import { Navigate } from "react-router";
import useAuthStore from "../store/authStore.js";


function PrivatRoute({ children, roles }) {
    const { token, user } = useAuthStore()
    if (!token) {
        return <Navigate to="/login" />
    }
   
    if (roles && !roles.includes(user?.user_type)) {
        return <Navigate to="/dashboard" />
    }
    return children
}
export default PrivatRoute