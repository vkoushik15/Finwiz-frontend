import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import '../styling/footer.css'
const Footer = () => {
  return (
    <footer className="footer">
            <div className="social-icons">
                <a href="https://www.instagram.com/finwiz_nitw/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="icon" />
                </a>
                <a href="https://www.linkedin.com/company/finwiz/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon" />
                </a>
                <a href="https://www.facebook.com/nitw.finwiz/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="icon" />
                </a>
            </div>
            <div className="developer">
                Developed by <strong>Venkat Koushik</strong>
                <br />
                For any issues, contact: <a href="mailto:venkatkoushik15@gmail.com">venkatkoushik15@gmail.com</a>
            </div>
        </footer>
  )
}

export default Footer