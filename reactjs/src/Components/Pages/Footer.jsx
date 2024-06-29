import { Link } from "react-router-dom";
const Footer =()=>{
    const currentYear = new Date().getFullYear();
    
  return (
      <>
      
 <div>
  <footer className="footer padding-t-100 bg-off-white">
    <div className="container">
      <div className="row footer-top padding-b-100">
        <div className="col-xl-4 col-lg-6 col-sm-12 col-12 cr-footer-border">
          <div className="cr-footer-logo">
            <div className="image">
              <img src="assets/img/logo/logo.png" alt="logo" className="logo" />
              <img src="assets/img/logo/dark-logo.png" alt="logo" className="dark-logo" />
            </div>
            <p>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
          </div>
          <div className="cr-footer">
            <h4 className="cr-sub-title cr-title-hidden">
              Contact us
              <span className="cr-heading-res" />
            </h4>
            <ul className="cr-footer-links cr-footer-dropdown">
              <li className="location-icon">
                51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
              </li>
              <li className="mail-icon">
                example@email.com
              </li>
              <li className="phone-icon">
                +91 123 4567890
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-sm-12 col-12 cr-footer-border">
          <div className="cr-footer">
            <h4 className="cr-sub-title">
              Company
              <span className="cr-heading-res" />
            </h4>
            <ul className="cr-footer-links cr-footer-dropdown">
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Delivery Information</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">Terms &amp; Conditions</Link></li>
            <li><Link to="/">Contact Us</Link></li>
             <li><Link to="/">Support Center</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-2 col-lg-3 col-sm-12 col-12 cr-footer-border">
          <div className="cr-footer">
            <h4 className="cr-sub-title">
              Category
              <span className="cr-heading-res" />
            </h4>
            <ul className="cr-footer-links cr-footer-dropdown">
              <li><Link to='/'>Dairy &amp; Bakery</Link></li>
              <li><Link to='/'>Fruits &amp; Vegetable</Link></li>
              <li><Link to='/'>Snack &amp; Spice</Link></li>
              <li><Link to='/'>Juice &amp; Drinks</Link></li>
              <li><Link to='/'>Chicken &amp; Meat</Link></li>
              <li><Link to='/'>Fast Food</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-12 col-sm-12 col-12 cr-footer-border">
          <div className="cr-footer cr-newsletter">
            <h4 className="cr-sub-title">
              Subscribe Our Newsletter
              <span className="cr-heading-res" />
            </h4>
            <div className="cr-footer-links cr-footer-dropdown">
              <form className="cr-search-footer">
                <input className="search-input" type="text" placeholder="Search here..." />
                <Link to='/'  className="search-btn">
                  <i className="ri-send-plane-fill" />
                </Link>
              </form>
            </div>
            <div className="cr-social-media">
              <span><Link to='/' ><i className="ri-facebook-line" /></Link></span>
              <span><Link to='/' ><i className="ri-twitter-x-line" /></Link></span>
              <span><Link to='/' ><i className="ri-dribbble-line" /></Link></span>
              <span><Link to='/' ><i className="ri-instagram-line" /></Link></span>
            </div>
          </div>
        </div>
      </div>
      <div className="cr-last-footer">
        <p>&#169;<span id="copyright_year">{currentYear}</span> <Link to='/' href="index.html">Carrot</Link>, All rights reserved.</p>
      </div>
    </div>
  </footer>
  <a href="#Top" className="back-to-top result-placeholder">
    <i className="ri-arrow-up-line" />
    <div className="back-to-top-wrap">
      <svg viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
    </div>
  </a>

  
   {/*<div className="cr-cart-overlay" />
  <div className="cr-cart-view">
    <div className="cr-cart-inner">
      <div className="cr-cart-top">
        <div className="cr-cart-title">
          <h6>My Cart</h6>
          <button type="button" className="close-cart">×</button>
        </div>
        <ul className="crcart-pro-items">
          <li>
            <a href="product-left-sidebar.html" className="crside_pro_img"><img src="assets/img/product/4.jpg" alt="product-1" /></a>
            <div className="cr-pro-content">
              <a href="product-left-sidebar.html" className="cart_pro_title">Fresh Pomegranate</a>
              <span className="cart-price"><span>$56.00</span> x 1kg</span>
              <div className="cr-cart-qty">
                <div className="cart-qty-plus-minus">
                  <button type="button" className="plus">+</button>
                  <input type="text" placeholder="." defaultValue={1} minLength={1} maxLength={20} className="quantity" />
                  <button type="button" className="minus">-</button>
                </div>
              </div>
              <Link to='/'  className="remove">×</Link>
            </div>
          </li>
          <li>
            <a href="product-left-sidebar.html" className="crside_pro_img"><img src="assets/img/product/2.jpg" alt="product-2" /></a>
            <div className="cr-pro-content">
              <a href="product-left-sidebar.html" className="cart_pro_title">Green Apples</a>
              <span className="cart-price"><span>$75.00</span> x 1kg</span>
              <div className="cr-cart-qty">
                <div className="cart-qty-plus-minus">
                  <button type="button" className="plus">+</button>
                  <input type="text" placeholder="." defaultValue={1} minLength={1} maxLength={20} className="quantity" />
                  <button type="button" className="minus">-</button>
                </div>
              </div>
              <a href="javascript:void(0)" className="remove">×</a>
            </div>
          </li>
          <li>
            <a href="product-left-sidebar.html" className="crside_pro_img"><img src="assets/img/product/3.jpg" alt="product-3" /></a>
            <div className="cr-pro-content">
              <a href="product-left-sidebar.html" className="cart_pro_title">Watermelon - Small</a>
              <span className="cart-price"><span>$48.00</span> x 5kg</span>
              <div className="cr-cart-qty">
                <div className="cart-qty-plus-minus">
                  <button type="button" className="plus">+</button>
                  <input type="text" placeholder="." defaultValue={1} minLength={1} maxLength={20} className="quantity" />
                  <button type="button" className="minus">-</button>
                </div>
              </div>
              <a href="javascript:void(0)" className="remove">×</a>
            </div>
          </li>
        </ul>
      </div>
      <div className="cr-cart-bottom">
        <div className="cart-sub-total">
          <table className="table cart-table">
            <tbody>
              <tr>
                <td className="text-left">Sub-Total :</td>
                <td className="text-right">$300.00</td>
              </tr>
              <tr>
                <td className="text-left">VAT (20%) :</td>
                <td className="text-right">$60.00</td>
              </tr>
              <tr>
                <td className="text-left">Total :</td>
                <td className="text-right primary-color">$360.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="cart_btn">
          <a href="cart.html" className="cr-button">View Cart</a>
          <a href="checkout.html" className="cr-btn-secondary">Checkout</a>
        </div>
      </div>
    </div>
  </div>
  <div className="cr-tool-overlay" />
  <div className="cr-tool">
    <div className="cr-tool-btn">
      <a href="javascript:void(0)" className="btn-cr-tool result-placeholder">
        <i className="ri-settings-line" />
      </a>
      <div className="color-variant">
        <div className="cr-bar-title">
          <h6>Tools</h6>
          <a href="javascript:void(0)" className="close-tools">
            <i className="ri-close-line" />
          </a>
        </div>
        <div className="cr-tools-detail">
          <div className="heading">
            <h2>Select Color</h2>
          </div>
          <ul className="cr-color">
            <li className="colors c1 active-colors">
            </li>
            <li className="colors c2">
            </li>
            <li className="colors c3">
            </li>
            <li className="colors c4">
            </li>
            <li className="colors c5">
            </li>
            <li className="colors c6">
            </li>
            <li className="colors c7">
            </li>
            <li className="colors c8">
            </li>
            <li className="colors c9">
            </li>
            <li className="colors c10">
            </li>
          </ul>
        </div>
        <div className="cr-tools-detail">
          <div className="heading">
            <h2>Dark mode</h2>
          </div>
          <ul className="dark-mode">
            <li className="dark">
            </li>
            <li className="white active-dark-mode">
            </li>
          </ul>
        </div>
        <div className="cr-tools-detail">
          <div className="heading">
            <h2>Backgrounds</h2>
          </div>
          <ul className="bg-panel">
            <li className="bg-1">
              <img src="assets/img/shape/bg-shape-1.png" alt="bg-shape-1" />
            </li>
            <li className="bg-2">
              <img src="assets/img/shape/bg-shape-2.png" alt="bg-shape-2" />
            </li>
            <li className="bg-3">
              <img src="assets/img/shape/bg-shape-3.png" alt="bg-shape-3" />
            </li>
            <li className="bg-4">
              <img src="assets/img/shape/bg-shape-4.png" alt="bg-shape-4" />
            </li>
            <li className="bg-5">
              <img src="assets/img/shape/bg-shape-5.png" alt="bg-shape-5" />
            </li>
            <li className="bg-6 active-bg-panel">
              <img src="assets/img/shape/bg-shape-6.png" alt="bg-shape-6" />
            </li>
          </ul>
        </div>
      </div>
    </div> 
   </div> */}
</div>

      </>
  )
}
export  default Footer