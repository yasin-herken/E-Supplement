import React from "react";
import { useState } from "react";
import "./login.css";
import "react-router-dom";
import {login} from "../../redux/apiCalls.js"
import { Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <div className="wrapper">
        <div className="logo">
          <img
            src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
            alt=""
          ></img>
        </div>
        <div className="text-center mt-4 name">Application</div>
        <Form
          className="p-3 mt-3"
        >
          <div className="form-field d-flex align-items-center">
            <Form.Group className="mb-3">
              <input
              /*  onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="text"
              name="userName"
              id="userName"
              placeholder="email"*/
              onChange={(e) => setUsername(e.target.value)}
              ></input>
            </Form.Group>
          </div>
          <div className="form-field d-flex align-items-center">
            <Form.Group className="mb-3">
              <input
              /*  onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"*/
              onChange={(e) => setPassword(e.target.value)}
              ></input>
            </Form.Group>
          </div>
          <button
            /*  disabled={formData.email === "" || formData.password === ""}*/
            type="submit"
            className="btn mt-3"
            onClick={handleClick} disabled={isFetching}
          >
            {" "}
            Login
          </button>
          <center>
            {" "}
            <a href="/signup">Sign Up</a>
          </center>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
