
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios"; // Import axios
// // import "../styling/auth.css"; // Importing CSS for styling
// // import { useDispatch } from "react-redux";
// // import { login } from "../store"; // Adjust the path to your store file
// // import { fetchUserData } from "../store"; // Adjust the path to your store file
// // import {toast} from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const Lrs = () => {
// //     const [isRegistering, setIsRegistering] = useState(false);
// //     const [formData, setFormData] = useState({ email: "", password: "", name: "" });
// //     const navigate = useNavigate();
// //     const dispatch = useDispatch(); // Add this line

// //     // Handle input change
// //     const handleChange = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value });
// //     };

// //     // Handle form submission
// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         const url = isRegistering
// //             ? "http://localhost:3000/user/register"
// //             : "http://localhost:3000/user/login";

// //         // Create request data (exclude name if logging in)
// //         const requestData = isRegistering
// //             ? formData
// //             : { email: formData.email, password: formData.password };

// //         try {
// //             const response = await axios.post(url, requestData);
// //             const { token, message, isAdmin } = response.data;

// //             // Store token in localStorage
// //             if (token) {
// //                 localStorage.setItem("token", token);
// //                 toast(message || "Success!");

// //                 // Dispatch login action
// //                 dispatch(login({ token, isAdmin }));

// //                 // Fetch user data
// //                 await dispatch(fetchUserData(token));

// //                 navigate("/"); // Redirect to home page
// //             } else {
// //                 alert("Authentication failed!");
// //             }
// //         } catch (error) {
// //             console.error("Error:", error);
// //             alert(error.response?.data?.error || "Something went wrong!");
// //         }
// //     };

// //     return (
// //         <div className="auth-container">
// //             <div className={`form-box ${isRegistering ? "register-mode" : ""}`}>
// //                 <h2>{isRegistering ? "Register" : "Login"}</h2>

// //                 <form onSubmit={handleSubmit}>
// //                     {isRegistering && (
// //                         <input
// //                             type="text"
// //                             name="name"
// //                             placeholder="Full Name"
// //                             value={formData.name}
// //                             onChange={handleChange}
// //                             required
// //                         />
// //                     )}
// //                     <input
// //                         type="email"
// //                         name="email"
// //                         placeholder="Email"
// //                         value={formData.email}
// //                         onChange={handleChange}
// //                         required
// //                     />
// //                     <input
// //                         type="password"
// //                         name="password"
// //                         placeholder="Password"
// //                         value={formData.password}
// //                         onChange={handleChange}
// //                         required
// //                     />

// //                     <button type="submit">{isRegistering ? "Register" : "Login"}</button>
// //                 </form>

// //                 <p>
// //                     {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
// //                     <span className="toggle-btn" onClick={() => setIsRegistering(!isRegistering)}>
// //                         {isRegistering ? "Login" : "Sign Up"}
// //                     </span>
// //                 </p>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Lrs;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../styling/auth.css";
// import { useDispatch } from "react-redux";
// import { login } from "../store";
// import { fetchUserData } from "../store";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Lrs = () => {
//   const [isRegistering, setIsRegistering] = useState(false);
//   const [formData, setFormData] = useState({ email: "", password: "", name: "" });
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const url = isRegistering
//       ? "http://localhost:3000/user/register"
//       : "http://localhost:3000/user/login";

//     const requestData = isRegistering
//       ? formData
//       : { email: formData.email, password: formData.password };

//     try {
//       const response = await axios.post(url, requestData);
//       const { token, message, isAdmin } = response.data;

//       if (token) {
//         localStorage.setItem("token", token);
//         toast.success(message || "Success!");

//         dispatch(login({ token, isAdmin }));
//         await dispatch(fetchUserData(token));

//         navigate("/");
//       } else {
//         toast.error("Authentication failed!");
//       }
//     } catch (error) {
//       console.error("Error:", error.response?.status);
//       if(error.response?.status === 400) {
//       toast.error(error.response?.data?.error || "User already Exists");
//     }
//       else{
//       toast.error("Invalid Credentials!");
//    }
//   };

//   return (
//     <div className="auth-container">
//       <div className={`form-box ${isRegistering ? "register-mode" : ""}`}>
//         <h2>{isRegistering ? "Register" : "Login"}</h2>

//         <form onSubmit={handleSubmit}>
//           {isRegistering && (
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           )}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">{isRegistering ? "Register" : "Login"}</button>
//         </form>

//         <p>
//           {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
//           <span className="toggle-btn" onClick={() => setIsRegistering(!isRegistering)}>
//             {isRegistering ? "Login" : "Sign Up"}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Lrs;
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