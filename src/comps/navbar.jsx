
import React, { useState, useEffect } from "react";
import "../styling/navbar.css";
import logo from "../images/finlogo.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLogged = useSelector((state) => state.auth.isLogged);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Navbar User Data:", userData);
  }, [userData, isLogged, isAdmin]);

  const handleLogout = () => {
    console.log("Logging out...");
    dispatch(logout());
    window.location.href = "/"; 
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  useEffect(() => {
    const closeMenu = (e) => {
      if (!e.target.closest(".navbar")) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="FinWiz Logo" className="logo" />
        <h1 className="navbar-heading">FinWiz</h1>
      </div>

     
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
      </div>

  
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        <NavLink to="/events" onClick={() => setIsMenuOpen(false)}>Events</NavLink>
        {isLogged ? (
          <>
            {isAdmin && <NavLink to="/admin" onClick={() => setIsMenuOpen(false)}>Admin</NavLink>}
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <NavLink to="/lr" onClick={() => setIsMenuOpen(false)}>Login / Register</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
