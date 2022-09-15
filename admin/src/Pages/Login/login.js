import React, {  useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Redux/apiCalls';
import { selectUser } from '../../Redux/userRedux';
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = async (e) => {
        e.preventDefault();
        login(dispatch, {username,password})
    };
    useEffect(()=>{
        console.log(user)
        if(user?.role==="admin"){
            navigate("/")   
        }
    },[user])
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