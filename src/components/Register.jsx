import React, { useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../api";

export default function Register() {
  const [data, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: "17",
    location: "Lahore",
    image: "https://avatars.githubusercontent.com/u/25560888?v=4",
  });
  const [sendData, setSendData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    age: "17",
    location: "Lahore",
    image: "https://avatars.githubusercontent.com/u/25560888?v=4",
  });

  const navigate = useNavigate();
  const [
    register,
    {
      isLoading: isRegisterLoading,
      isSuccess: isRegisterSuccess,
      isError: isRegisterError,
    },
  ] = useRegisterMutation();

  const changer = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => {
      setSendData({
        ...prevState,
        [name]: value,
      });
      return {
        ...prevState,
        [name]: value,
      };
    });
    console.log(value);
  };

  const handler = async (e) => {
    e.preventDefault();
    console.log(sendData);
    await register(sendData);
  };
  useEffect(() => {
    if (isRegisterSuccess) {
      alert("Sign up successfully");
      navigate("/home");
    }
  }, [isRegisterSuccess]);
  return (
    <div
      className="container-fluid d-flex justify-content-center bg-dark text-light align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="form-box">
        <div className="header-form">
          <h4 className="text-primary text-center text-light">
            Register Page{" "}
          </h4>
          <div className="image"></div>
        </div>
        <div className="body-form">
          <form>
            <div className="i">
              <label htmlFor="" style={{ float: "left" }}>
                {sendData.username ? `Welcome ${sendData.username}` : "Name"}
                {/* UserName */}
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Enter your UserName"
                onChange={changer}
              />
            </div>
            <div className="">
              <label htmlFor="" style={{ float: "left" }}>
                Email
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter Your Age"
                onChange={changer}
              />
            </div>
            <div className="">
              <label htmlFor="" style={{ float: "left" }}>
                Phone Number {sendData.phone}
              </label>
              <input
                name="phone"
                type="number"
                className="form-control"
                placeholder="Number Start With +92"
                onChange={changer}
              />
            </div>
            <div className="">
              <label htmlFor="" style={{ float: "left" }}>
                Password
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={changer}
              />
            </div>

            <button
              type="button"
              className="btn btn-success btn-block mt-2"
              onClick={(e) => handler(e)}
            >
              Register User
            </button>
            <div className="message">
              <div>
                <input type="checkbox" /> Remember ME
              </div>
              <div>
                <a href="#">Forgot your password</a>
              </div>
            </div>
            <div className="mt-2 ">
              <Link to={"/login"} className="text-light">
                Already Have Account? Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
