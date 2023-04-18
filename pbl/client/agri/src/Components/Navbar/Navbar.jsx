import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import About from '../../Pages/About'
// import VegetablesHome from "../vegetables/VegetablesHome";
// import FruitsHome from "../fruits/FruitsHome"
export default function Navbar() {
  return (
    <>
    <div className="nav_div">
        <div className="left_div">
            <div className="logo_div">
                <Link to="/"><h1>Logo</h1></Link>
            </div>
        </div>
        <div className="right_div">
            <ul>
                <Link to="/">Home</Link>
                {/* <Link to={VegetablesHome}>Vegitables</Link>
                <Link to={FruitsHome}>Fruits</Link> */}
                <Link to="/about">About</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>

            </ul>
        </div>
    </div>
    
    
    </>
  )
}
