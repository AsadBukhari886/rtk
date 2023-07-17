import React, { useEffect, useState } from "react";
import "./login.css";
// import { useMutation } from "react-query";
// import { loginApi } from "../api";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../api";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";

export default function Login() {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
  });

  const [storeData, setStoreData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const [
    login,
    { isSuccess: isLoginSuccess, isError: isLoginError, data: user },
  ] = useLoginMutation();

  const navigate = useNavigate();

  const changer = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      setStoreData({ ...prevState, [name]: value });
      return {
        ...prevState,
        [name]: value,
      };
    });

    console.log(storeData);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    await login(storeData);
    console.log(storeData);
    // alert("Alert is beeing called");
  };

  useEffect(() => {
    if (isLoginSuccess) {
      // console.log("login Successful", storeData);
      dispatch(setUser(user));
      // console.log(dispatch(setUser(storeData)));
      navigate("/home");
    }
    console.log("current User", user);
  }, [isLoginSuccess]);
  return (
    <div
      className="container-fluid d-flex justify-content-center bg-dark text-light align-items-center"
      style={{ height: "100vh" }}
    >
      {/* {isLoginSuccess
        ? console.log("Login in successfully")
        : console.log("Error")} */}
      <div className="form-box">
        <div className="header-form">
          <h4 className="text-primary text-center text-light">Login Page </h4>
          <div className="image"></div>
        </div>
        <div className="body-form">
          <form>
            <div className="i">
              <label htmlFor="" style={{ float: "left" }}>
                Email
              </label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Username"
                onChange={changer}
              />
            </div>
            <div className="">
              <label htmlFor="" style={{ float: "left" }}>
                {" "}
                Password
              </label>
              <input
                type="text"
                name="password"
                className="form-control"
                placeholder="Password"
                onChange={changer}
              />
            </div>

            <button
              type="button"
              className="btn btn-success btn-block mt-2"
              onClick={handleLogin}
            >
              LOGIN
            </button>
            <div className="message">
              <div>
                <input type="checkbox" /> Remember ME
              </div>
              <div>
                <a href="#">Forgot your password</a>
              </div>
            </div>
            <div className="mt-5">
              <Link to={"/"} className="text-light">
                Don't have account??? Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
