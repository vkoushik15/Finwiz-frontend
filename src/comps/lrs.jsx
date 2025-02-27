
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styling/auth.css";
import { useDispatch } from "react-redux";
import { login } from "../store";
import { fetchUserData } from "../store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Lrs = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegistering
      ? "http://localhost:3000/user/register"
      : "http://localhost:3000/user/login";

    const requestData = isRegistering
      ? formData
      : { email: formData.email, password: formData.password };

    try {
      const response = await axios.post(url, requestData);
      const { token, message, isAdmin } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        toast.success(message || "Success!");

        dispatch(login({ token, isAdmin }));
        await dispatch(fetchUserData(token));

        navigate("/");
      } else {
        toast.error("Authentication failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response?.status === 400) {
        toast.error(error.response?.data?.error || "User already exists");
      } else {
        toast.error("Invalid credentials!");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className={`form-box ${isRegistering ? "register-mode" : ""}`}>
        <h2>{isRegistering ? "Register" : "Login"}</h2>

        <form onSubmit={handleSubmit}>
          {isRegistering && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">{isRegistering ? "Register" : "Login"}</button>
        </form>

        <p>
          {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
          <span className="toggle-btn" onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Lrs;
