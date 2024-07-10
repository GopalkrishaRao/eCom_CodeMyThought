import { Link } from "react-router-dom";
const ForgoPassword = () => {
  return (
    <>
      <section className="section-breadcrumb">
        <div className="cr-breadcrumb-image">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cr-breadcrumb-title">
                  <h2>Forgot Password</h2>
                  <span>
                    {" "}
                    <Link to="/">Home</Link> - Forgot Password
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-login padding-tb-100">
        <div className="container">
          <div className="row d-none">
            <div className="col-lg-12">
              <div
                className="mb-30"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="400"
              >
                <div className="cr-banner">
                  <h2>Forgot Password</h2>
                </div>
                <div className="cr-banner-sub-title">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore lacus vel facilisis.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="cr-login"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="400"
              >
                <div className="form-logo">
                  <img src="assets/img/logo/logo.png" alt="logo" />
                </div>
                <form className="cr-content-form">
                  <div className="form-group">
                    <label>Email Address*</label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="cr-form-control"
                    />
                  </div>
                  <div className="login-buttons">
                    <button type="button" className="cr-button">
                      Submit
                    </button>
                    <a href="register.html" className="link">
                      Signup?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ForgoPassword;
