import React, { useState, useEffect } from "react";
import "../Components/Login/login.css";
import { useNavigate } from "react-router-dom";
import { register } from "../Axios";
import { Form , Button} from "react-bootstrap";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
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
      }) 
       setPassword(e.target.value)
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
                          class="form-control form-control-lg"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              username: e.target.value,
                            })
                          }
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
                      <div style={{color: "red"}}> Passwords did not match </div>
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
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                        <label class="form-label" for="emailAddress">
                          Email
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4 pb-2">
                      <div class="form-outline">
                        <input
                          type="tel"
                          id="phoneNumber"
                          class="form-control form-control-lg"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phoneNumber: e.target.value,
                            })
                          }
                        />
                        <label class="form-label" for="phoneNumber">
                          Phone Number
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Button variant="success" type="submit"  disabled={formData.email === "" || formData.password === "" || formData.phoneNumber === "" || formData.username === "" || !(password === cPassword)}>
                      Sign Up
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
