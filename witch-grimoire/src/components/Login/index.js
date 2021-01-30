import React from "react";
import {NavLink} from "react-router-dom";


const activeStyle = {color: "#F15B2A"};
const Login = () => (
  
    <div className="d-flex justify-content-center align-items-center" >
              <form>
                <h3>Login</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Log me in</button>
                <p className="forgot-password text-right">
                    Not registered ? <NavLink to="/signup" activeStyle={activeStyle} exact>Sign up!</NavLink>
                </p>
            </form>
            </div>
            
);

export default Login;