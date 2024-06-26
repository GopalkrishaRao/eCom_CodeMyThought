import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  const initialFormData = {
    firstName: '',
    email: '',
    phoneNumber: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3010/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Contact failed');
      }

      const data = await response.json();
      console.log('Send enquiry successful:', data);

      toast.success('Send enquiry successful!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setFormData(initialFormData); // Clear the form
    } catch (error) {
      console.error('Contact error:', error); // Log the error for debugging
      toast.error('Contact failed. Please try again.');
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
                  <h2>Contact Us</h2>
                  <span>
                    <Link to="/">Home</Link> - Contact Us
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-contact padding-tb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-30" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                <div className="cr-banner">
                  <h2>Get in Touch</h2>
                </div>
                <div className="cr-banner-sub-title">
                  <p>
                    Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye
                    admire. His secure called esteem praise.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-minus-24">
            <div className="col-lg-4 col-md-6 col-12 mb-24" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
              <div className="cr-info-box">
                <div className="cr-icon">
                  <i className="ri-phone-line"></i>
                </div>
                <div className="cr-info-content">
                  <h4 className="heading">Contact</h4>
                  <p><a href="tel:+919876XXXXX"><i className="ri-phone-line"></i> &nbsp; (+91)-9876XXXXX</a></p>
                  <p><a href="tel:+91987654XXXX"><i className="ri-phone-line"></i> &nbsp; (+91)-987654XXXX</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-24" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
              <div className="cr-info-box">
                <div className="cr-icon">
                  <i className="ri-mail-line"></i>
                </div>
                <div className="cr-info-content">
                  <h4 className="heading">Mail & Website</h4>
                  <p><a href="mailto:mail.example@gmail.com"><i className="ri-mail-line"></i> &nbsp; mail.example@gmail.com</a></p>
                  <p><a href="http://www.yourdomain.com"><i className="ri-globe-line"></i> &nbsp; www.yourdomain.com</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 mb-24" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
              <div className="cr-info-box">
                <div className="cr-icon">
                  <i className="ri-map-pin-line"></i>
                </div>
                <div className="cr-info-content">
                  <h4 className="heading">Address</h4>
                  <p><a href="https://goo.gl/maps/3qT1M"><i className="ri-map-pin-line"></i> &nbsp; 140 Ruami Moraes Filho, 987 - Salvador - MA, 40352, Brazil.</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row padding-t-100 mb-minus-24">
            <div className="col-md-6 col-12 mb-24" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
                title="maps"
                style={{ width: '100%', height: '450px', border: '0' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="col-md-6 col-12 mb-24" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
              <form className="cr-content-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter Your First Name"
                    className="cr-form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="cr-form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="cr-form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="cr-form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="cr-button">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Contact;
