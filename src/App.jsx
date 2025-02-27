import Navbar from "./comps/navbar";
import Mainc from "./comps/mainc";
import Inc from "./comps/inc";
import About from "./comps/about";
import Dashboard from "./comps/dashboard";
import Events from "./pages/events";
import Admin from "./pages/admin";
import Home from "./pages/home";
import Footer from "./comps/footer";
import Lr from "./pages/lr";
import Test from "../src/pages/test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notfound from "./pages/notfound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  
  return (
    <>
    <Router>
    <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/lr" element={<Lr/>}/>
       <Route path ="/test" element={<Test/>}/>
       <Route path="*"element={<Notfound/>}/> 
      </Routes>
    </Router>
    <Footer/>
      </>
  );
}

export default App;