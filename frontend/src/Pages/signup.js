import React, { useState, useEffect } from "react";
import "../Components/Login/login.css";
import { useNavigate } from "react-router-dom";
import { register } from "../Axios";
import { Form, Button } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { createCart } from "../Axios";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [cPasswordClass, setCPasswordClass] = useState("form-control");
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

  useEffect(() => {
    if (isCPasswordDirty) {
      if (password === cPassword) {
        setShowErrorMessage(false);
        setCPasswordClass("form-control is-valid");
        // console.log(password)
      } else {
        setShowErrorMessage(true);
        setCPasswordClass("form-control is-invalid");
      }
    }
  }, [cPassword]);

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
  };

  const handlePassword = (e) => {
    setFormData({
      ...formData,
      password: e.target.value,
    });
    setPassword(e.target.value);
  };

  const handleUsername = (e) => {
    setFormData({
      ...formData,
      username: e.target.value,
    });
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
    setEmail(e.target.value);
    console.log(phone);
  };

  const handlePhone = (e) => {
    setFormData({
      ...formData,
      phoneNumber: phone,
    });
  };

  return (
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-12 col-lg-9 col-xl-7">
            <div class="card shadow-2-strong card-registration">
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    //login(formData)
                    //console.log(formData)
                    register(formData)
                      .then((res) => {
                        alert("successfully registered");
                        console.log(res.data.user._id);
                        //   setId(res.data.user._id)
                        //   console.log(id);
                        //   setCart({ , userId: res.data.user._id });
                        //    console.log(cart.userId);
                        createCart({ userId: res.data.user._id, products: [] })
                          .then((res) => {
                            console.log("cart is created");
                          })
                          .catch((err) => console.log(err.response.data));
                        navigate("/");
                      })
                      .catch((err) => alert(err.response.data.message));
                  }}
                >
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="firstName"
                          s
                          class="form-control form-control-lg"
                          onChange={handleUsername}
                        />
                        <label class="form-label" for="firstName">
                          First Name
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="lastName"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="lastName">
                          Last Name
                        </label>
                      </div>
                    </div>
                  </div>
                  {showErrorMessage && isCPasswordDirty ? (
                    <div style={{ color: "red" }}>
                      {" "}
                      Passwords did not match{" "}
                    </div>
                  ) : (
                    ""
                  )}
                  <div class="row">
                    <div class="col-md-6 mb-4 pb-2">
                      <div class="form-outline">
                        <input
                          type="password"
                          id="passord"
                          class="form-control form-control-lg"
                          onChange={handlePassword}
                        />
                        <label class="form-label" for="emailAddress">
                          Password
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4 pb-2">
                      <div class="form-outline">
                        <input
                          type="password"
                          class="form-control form-control-lg"
                          id="confirmPassword"
                          value={cPassword}
                          onChange={handleCPassword}
                        />
                        <label class="form-label" for="phoneNumber">
                          Password Again
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4 pb-2">
                      <div class="form-outline">
                        <input
                          type="email"
                          id="emailAddress"
                          class="form-control form-control-lg"
                          onChange={handleEmail}
                        />
                        <label class="form-label" for="emailAddress">
                          Email
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4 pb-2">
                      <div class="form-outline">
                        <PhoneInput
                          inputStyle={{
                            width: "100%",
                            height: "45px",
                          }}
                          country={"tr"}
                          value={phone}
                          onChange={setPhone}
                          inputExtraProps={{
                            name: "phone",
                            required: true,
                            autoFocus: true,
                          }}
                          isValid={(v) => v === "1"}
                        />
                        <label class="form-label" for="phoneNumber">
                          Phone Number
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Button
                      variant="success"
                      type="submit"
                      disabled={
                        password === "" ||
                        username === "" ||
                        email === "" ||
                        !(password === cPassword) ||
                        phone === ""
                      }
                      onClick={handlePhone}
                    >
                      SIGN UP
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
