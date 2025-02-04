import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";
import Navbar from "./Navbar";

function Signin() {

  return (
    <>
      <Navbar />

      <div className="Signin">
        <div className="Signin-box">
          <span className="Signin-borderLine"></span>
          <form>
            <h2>Sign In</h2>


            <div className="Signin-inputBox">
              <input
                type="text"
                required="required"
                value=""
              />
              <span>Enter Your Email / Phone No.</span>
              <i></i>
            </div>

            <div className="Signin-inputBox">
              <input
                type="password"
                required="required"
                value=""
                //onCha//nge={(e) => setPassword(e.target.value)}
              />
              <span>Enter Your Password</span>
              <i></i>
            </div>

            <div className="Signin-checkbox-group">
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <div className="Sign-btn">
              <button type="submit">Login</button>
            </div>

           

            <div className="Signin-links">
              <a href="/Forgotpassword">Forgot Password</a>
              <a href="/Signup">Sign Up</a>
            </div>

           
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;