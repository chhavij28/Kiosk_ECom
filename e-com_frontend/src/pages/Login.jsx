import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if(email != "admin@kiosk.com" || password != "harrypotter@123"){
            alert("Email or Password is Incorrect!");
        }
        else{
            navigate("/admin");
        }
    }

    return (
        <form onSubmit={onSubmitHandler} className="container mt-5" style={{ maxWidth: '30rem', width: '90%' }}>
            <div className="d-flex align-items-center gap-2 mt-4 mb-3 justify-content-center">
            <p className="h3">Admin Login</p>
            </div>

            <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            required
            />

            <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            required
            />

            <div className="d-flex justify-content-between w-100 text-muted small mb-2">
            <p className="text-decoration-underline" style={{ cursor: 'pointer' }}>
                Forgot your password?
            </p>
            </div>

            <button type="submit" className="btn btn-dark">
            Sign In
            </button>
        </form>
    );

}

export default Login;