import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import {useUser} from '../Contexts/AuthContext';

const Register = () => {
  const { setUserLoggedIn, setUserDetails } = useUser();
  const navigate = useNavigate(); 
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    postcode: '',
    country: '',
    regionState: '',
    password: '',
    confirmPassword: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Regular expressions for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const postcodeRegex = /^[0-9]{6}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;


    // Validate email format
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    // Validate phone number format
    if (!phoneRegex.test(formData.phoneNumber)) {
      toast.error('Please enter a valid 10-digit phone number.');
      return;
    }

    // Validate postcode format (optional, if required)
    if (formData.postcode && !postcodeRegex.test(formData.postcode)) {
      toast.error('Please enter a valid 6-digit postcode.');
      return;
    }

    if (!passwordRegex.test(formData.password)) {
      toast.error('Password must contain at least one uppercase letter, one number, and one special character.');
      return;
    }

    // Password match validation
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match. Please try again.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3010/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log('Registration successful:', data);

      setUserLoggedIn(true);
      setUserDetails({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        city: formData.city,
        postcode: formData.postcode,
        country: formData.country,
        regionState: formData.regionState
      });

      navigate('/');
      toast.success('Registration successful!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setFormData(initialFormData); // Clear the form
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Registration failed. Please try again.');
    }
  };
  return (
    <>
      <section className="section-register padding-tb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cr-register" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                <div className="form-logo">
                  <img src="assets/img/logo/logo.png" alt="logo"/>
                </div>
                <form className="cr-content-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>First Name*</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter Your First Name"
                          className="cr-form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Last Name*</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter Your Last Name"
                          className="cr-form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Email*</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter Your Email"
                          className="cr-form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Phone Number*</label>
                        <input
                          type="text"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="Enter Your Phone Number"
                          className="cr-form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label>Address*</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Enter Your Address"
                          className="cr-form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>City*</label>
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="cr-form-control"
                          required
                        >
                          <option value="">Select City</option>
                          <option value="city1">City 1</option>
                          <option value="city2">City 2</option>
                          <option value="city3">City 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Postcode</label>
                        <input
                          type="text"
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleChange}
                          placeholder="Enter Your Postcode"
                          className="cr-form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Country*</label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="cr-form-control"
                          required
                        >
                          <option value="">Select Country</option>
                          <option value="country1">Country 1</option>
                          <option value="country2">Country 2</option>
                          <option value="country3">Country 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Region/State*</label>
                        <select
                          name="regionState"
                          value={formData.regionState}
                          onChange={handleChange}
                          className="cr-form-control"
                          required
                        >
                          <option value="">Select Region/State</option>
                          <option value="region1">Region/State 1</option>
                          <option value="region2">Region/State 2</option>
                          <option value="region3">Region/State 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Password*</label>
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Enter Your Password"
                          className="cr-form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="form-group">
                        <label>Confirm Password*</label>
                        <input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm Your Password"
                          className="cr-form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="cr-register-buttons">
                      <button type="submit" className="cr-button">Signup</button>
                      <Link to="/Login" className="link">
                        Already have an account? Login here
                      </Link>
                    </div>
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

export default Register;
