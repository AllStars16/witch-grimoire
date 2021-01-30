import React from "react";
import {NavLink} from "react-router-dom";


const activeStyle = {color: "#F15B2A"};
const Signup = () => (
    <div className="d-flex justify-content-center align-items-center" >
    <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered ?<NavLink to="/login" activeStyle={activeStyle} exact>Log in!</NavLink>
                </p>
            </form>
            </div>
            
);

export default Signup;