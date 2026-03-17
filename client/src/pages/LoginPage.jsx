import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAuthStore from "../store/authStore.js";


function LoginPage() {
    const navigate = useNavigate()
    const { loginUser, token, loading, error } = useAuthStore()
    const [form, setForm ] = useState({ username:'', password:'' })

    useEffect(() => {
        if (token) navigate('/dashboard')
    }, [token])

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await loginUser(form)
       
    }
    return (
        <div className="login-page">
            <h1>Login</h1>
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <div className="username-input">
                    <label >Username</label>
                    <input
                       
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        required />
                </div>
                <div className="password-input">
                    <label >Password</label>
                    <input
                     
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required />

                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Loading...." : "Login"}
                </button>



            </form>

        </div>
    )
}
export default LoginPage
