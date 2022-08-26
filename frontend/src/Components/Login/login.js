import React from 'react';
import { useState } from "react";
import "./login.css";
import "react-router-dom";
import { Container, Form, Button, Link } from "react-bootstrap";

const login = () => {
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
      /*  onSubmit={(e) => {
          e.preventDefault();

          login(formData)
            .then((res) => {
              console.log(res.data.user);
              localStorage.setItem("user", JSON.stringify(res.data.user));
              setUser(res.data.user);
             // navigate("/card");
            })
            .catch((err) => {
              alert(err.response.data.message);
            });
        }}*/
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
            ></input>
          </Form.Group>
        </div>
        <Button
        /*  disabled={formData.email === "" || formData.password === ""}*/
          type="submit"
          className=" btn mt-3"
        >
          {" "}
          Login
        </Button>

      </Form>
    </div>
  </Container>
);
}

  


export default login