import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer_div">
       <div className="footer-inner-div">
        <div className="footer-contact">
          <h2>Contact Us</h2>
          
          <a className="footer-anchor" href=""><img src="" alt="" className="footer-icons" />Dy Patil College Of Enginerring</a>
          <a className="footer-anchor" href=""> <img  className="footer-icons" src="" alt="" />agritrade@gmail.com</a>
        </div>
        <div className="followus-div">
          <h2>Follow Us</h2>
          <img  className="footer-icons" src="" alt="" />
          <img  className="footer-icons" src="" alt="" />
          <img  className="footer-icons" src="" alt="" />
          <img  className="footer-icons" src="" alt="" />
          <img  className="footer-icons" src="" alt="" />

        </div>
       </div>
       <div className="footer-last-div">
          <h3>All Rights Reserved</h3>
        </div>
      </div>
    </>
  );
}
