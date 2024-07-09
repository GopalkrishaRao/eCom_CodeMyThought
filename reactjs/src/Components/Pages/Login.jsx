import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import {useUser} from '../Provider/UserProvider';

const Login = () => {
  const { setUserLoggedIn } = useUser();

  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = loginData;

    try {
      const response = await fetch('http://localhost:3010/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }
      toast.success('Logged in successfully!');

      const data = await response.json();
      setLoginData({
        email: '',
        password: ''
      })

      setUserLoggedIn(true);
      
      // Redirect to home page
      navigate('/');

    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <>
      <section className="section-breadcrumb">
        <div className="cr-breadcrumb-image">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cr-breadcrumb-title">
                  <h2>Login</h2>
                  <span> <a href="index.html">Home</a> - Login</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-login padding-tb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cr-login" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                <div className="form-logo">
                  <img src="assets/img/logo/logo.png" alt="logo" />
                </div>
                <form className="cr-content-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Email Address*</label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="cr-form-control"
                      name="email"
                      value={loginData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password*</label>
                    <input
                      type="password"
                      placeholder="Enter Your password"
                      className="cr-form-control"
                      name="password"
                      value={loginData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="remember">
                    <span className="form-group custom">
                      <input type="checkbox" id="html" />
                      <label htmlFor="html">Remember Me</label>
                    </span>
                    <Link className="link" to="/ForgoPassword">
                      Forgot Password?
                    </Link>
                  </div>
                  <br />
                  <div className="login-buttons">
                    <button type="submit" className="cr-button">
                      Login
                    </button>
                    <Link to="/Register" className="link">
                      Signup?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Login;
