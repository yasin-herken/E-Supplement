import React, { useState} from 'react';
import {useNavigate} from "react-router-dom";
import { publicRequest } from '../../requestMethod';
import { useDispatch } from 'react-redux';
import { login } from '../Features/userSlice.js';
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await publicRequest.post("auth/login", {
                username: username,
                password: password
            }).then(
                res => {
                if (res.data.success && res.data.role === "Admin") {
                    dispatch(login({
                        username: res.data.username,
                        role: res.data.role,
                        token: res.data.token,
                        loggedIn: true
                    }));
                    navigate("/")
                } 
            })
        } catch {
            console.log((err)=>{console.log("error in login page",err)})
        }
    };
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <input
                style={{ padding: 10, marginBottom: 20 }}
                type="text"
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                style={{ padding: 10, marginBottom: 20 }}
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleClick} style={{ padding: 10, width: 100 }}>
                Login
            </button>
        </div>
    )
}

export default Login;