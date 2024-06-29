import { Link } from "react-router-dom"

const  About =()=>{
    return (
        <>
<div>
  <section className="section-breadcrumb">
    <div className="cr-breadcrumb-image">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cr-breadcrumb-title">
              <h2>About Us</h2>
              <span> 
                <Link to="/">Home  </Link>- About Us
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-about padding-tb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="cr-about" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={400}>
            <h4 className="heading">About The Carrot</h4>
            <div className="cr-about-content">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae
                necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda
                rerum quod. Tempora magni autem a voluptatibus neque.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae rerum cum
                accusamus magni consequuntur architecto, ipsum deleniti expedita doloribus suscipit
                voluptatum eius perferendis amet!.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maxime amet
                architecto est exercitationem optio ea maiores corporis beatae, dolores doloribus libero
                nesciunt qui illum? Voluptates deserunt adipisci voluptatem magni sunt
                sed blanditiis quod aspernatur! Iusto?</p>
              <div className="elementor-counter">
                <div className="row">
                  <div className="col-sm-4 col-12 margin-575">
                    <h4 className="elementor">
                      <span className="elementor-counter-number">1.2</span>
                      <span className="elementor-suffix">k</span>
                    </h4>
                    <div className="elementor-counter-title">
                      <span>Vendors</span>
                    </div>
                  </div>
                  <div className="col-sm-4 col-12 margin-575">
                    <h4 className="elementor">
                      <span className="elementor-counter-number">410</span>
                      <span className="elementor-suffix">k</span>
                    </h4>
                    <div className="elementor-counter-title">
                      <span>Customers</span>
                    </div>
                  </div>
                  <div className="col-sm-4 col-12 margin-575">
                    <h4 className="elementor">
                      <span className="elementor-counter-number">34</span>
                      <span className="elementor-suffix">k</span>
                    </h4>
                    <div className="elementor-counter-title">
                      <span>Products</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="cr-about-image" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={800}>
            <img src="assets/img/about/1.jpg" alt="side-view" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="section-faq padding-tb-100">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="cr-faq-img">
            <img src="assets/img/about/1.jpg" alt="about" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="cr-faq" data-aos="fade-up" data-aos-duration={2000} data-aos-delay={400}>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-1">
                  <button className="accordion-button shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                    What Facilities Does Your Hotel Have?
                  </button>
                </h2>
                <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad voluptate doloribus eos sunt labore ea enim voluptatem,
                      sequi voluptas rem doloremque architecto. Libero, vero
                      natus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-2">
                  <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                    How Do I Book A Room For My Vacation?
                  </button>
                </h2>
                <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad voluptate doloribus eos sunt labore ea enim voluptatem,
                      sequi voluptas rem doloremque architecto. Libero, vero
                      natus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-3">
                  <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                    How We are best among others?
                  </button>
                </h2>
                <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad voluptate doloribus eos sunt labore ea enim voluptatem,
                      sequi voluptas rem doloremque architecto. Libero, vero
                      natus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-4">
                  <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                    Is There Any Fitness Center In Your Hotel?
                  </button>
                </h2>
                <div id="collapse-4" className="accordion-collapse collapse" aria-labelledby="heading-4" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad voluptate doloribus eos sunt labore ea enim voluptatem,
                      sequi voluptas rem doloremque architecto. Libero, vero
                      natus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-5">
                  <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
                    What Type Of Room Service Do You Offer?
                  </button>
                </h2>
                <div id="collapse-5" className="accordion-collapse collapse" aria-labelledby="heading-5" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad voluptate doloribus eos sunt labore ea enim voluptatem,
                      sequi voluptas rem doloremque architecto. Libero, vero
                      natus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-6">
                  <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
                    What Facilities Does Your Hotel Have?
                  </button>
                </h2>
                <div id="collapse-6" className="accordion-collapse collapse" aria-labelledby="heading-6" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad voluptate doloribus eos sunt labore ea enim voluptatem,
                      sequi voluptas rem doloremque architecto. Libero, vero
                      natus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-7">
                  <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">
                    How Do I Book A Room For My Vacation?
                  </button>
                </h2>
                <div id="collapse-7" className="accordion-collapse collapse" aria-labelledby="heading-7" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad voluptate doloribus eos sunt labore ea enim voluptatem,
                      sequi voluptas rem doloremque architecto. Libero, vero
                      natus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-8">
                  <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-8" aria-expanded="false" aria-controls="collapse-8">
                    Is There Any Fitness Center In Your Hotel?
                  </button>
                </h2>
                <div id="collapse-8" className="accordion-collapse collapse" aria-labelledby="heading-8" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad voluptate doloribus eos sunt labore ea enim voluptatem,
                      sequi voluptas rem doloremque architecto. Libero, vero
                      natus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-9">
                  <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-9" aria-expanded="false" aria-controls="collapse-9">
                    There Any Fitness Is Center In Your Hotel?
                  </button>
                </h2>
                <div id="collapse-9" className="accordion-collapse collapse" aria-labelledby="heading-9" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ad voluptate doloribus eos sunt labore ea enim voluptatem,
                      sequi voluptas rem doloremque architecto. Libero, vero
                      natus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
        </>
    )
}

export default About