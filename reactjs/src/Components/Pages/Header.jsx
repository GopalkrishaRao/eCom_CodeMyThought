
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Logo  from '../images/1-19.png';
import {useUser} from '../Provider/UserProvider';

const Pages = () => {
  const { cart } = useCart();
  const { isUserLoggedIn, setUserLoggedIn, userDetails } = useUser(); 
  
//   const navigate = useNavigate(); 
  
const handleLogout=()=>{
    setUserLoggedIn(false)

    // Redirect to home page
    // navigate('/');
}
  
  return (
    < > 
    <header>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="top-header">
                        <a href="index.html" class="cr-logo">
                            <img src="assets/img/logo/logo.png" alt="logo" class="logo"/>
                            <img src="assets/img/logo/dark-logo.png" alt="logo" class="dark-logo"/>
                        </a>
                        <form class="cr-search">
                            <input class="search-input" type="text" placeholder="Search For items..."/>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>All Categories</option>
                                <option value="1">Mens</option>
                                <option value="2">Womens</option>
                                <option value="3">Electronics</option>
                            </select>
                            <a href="javascript:void(0)" class="search-btn">
                                <i class="ri-search-line"></i>
                            </a>
                        </form>
                        <div class="cr-right-bar">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle cr-right-bar-item" href="javascript:void(0)">
                                        <i class="ri-user-3-line"></i>
                                        <span>
                                            {isUserLoggedIn ? userDetails.firstName:'Account'}
                                        </span>
                                    </a>
                                    <ul class="dropdown-menu">
                                        {
                                            isUserLoggedIn ?
                                            (
                                                <>
                                                <li>
                                                <Link class="dropdown-item" to="/UserDashBoard">User Profile</Link>
                                                </li>
                                                 <li>
                                                 <Link class="dropdown-item" to="/">
                                                    <button className='cr-button' onClick={handleLogout}>
                                                        Logout
                                                    </button>   
                                                 
                                                 </Link>
                                                 </li>
                                                </>

                                            ) : 
                                            (
                                                <>
                                                <li>
                                                <Link class="dropdown-item" to="/Register">Register</Link>
                                                </li>
                                                <li>
                                                <Link class="dropdown-item" to="/Checkout">Checkout</Link>
                                            </li>
                                            <li>
                                                <Link class="dropdown-item" to="/Login">Login</Link>
                                            </li>
                                            </>

                                            )
                                            
                                        }
                                       
                                        
                                    </ul>
                                </li>
                            </ul>
                            <a href="wishlist.html" class="cr-right-bar-item">
                                <i class="ri-heart-3-line"></i>
                                <span>Wishlist</span>
                            </a>
                            <Link to="/Cart" class="cr-right-bar-item Shopping-toggle">
                                <i class="ri-shopping-cart-line"> </i>
                                <span>Cart({cart.length})</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cr-fix" id="cr-main-menu-desk">
            <div class="container">
                <div class="cr-menu-list">
                    <div class="cr-category-icon-block">
                        <div class="cr-category-menu">
                            <div class="cr-category-toggle">
                                <i class="ri-menu-2-line"></i>
                            </div>
                        </div>
                        <div class="cr-cat-dropdown">
                            <div class="cr-cat-block">
                                <div class="cr-cat-tab">
                                    <div class="cr-tab-list nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                        aria-orientation="vertical">
                                        <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-home" type="button" role="tab"
                                            aria-controls="v-pills-home" aria-selected="true">
                                            Dairy &amp; Bakery</button>
                                        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-profile" type="button" role="tab"
                                            aria-controls="v-pills-profile" aria-selected="false" tabindex="-1">
                                            Fruits &amp; Vegetable</button>
                                        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-messages" type="button" role="tab"
                                            aria-controls="v-pills-messages" aria-selected="false" tabindex="-1">
                                            Snack &amp; Spice</button>
                                        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                            data-bs-target="#v-pills-settings" type="button" role="tab"
                                            aria-controls="v-pills-settings" aria-selected="false" tabindex="-1">
                                            Juice &amp; Drinks </button>
                                        <a class="nav-link" href="shop-left-sidebar.html">
                                            View All </a>
                                    </div>
                                    <div class="tab-content" id="v-pills-tabContent">
                                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                            aria-labelledby="v-pills-home-tab">
                                            <div class="tab-list row">
                                                <div class="col">
                                                    <h6 class="cr-col-title">Dairy</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="shop-left-sidebar.html">Milk</a></li>
                                                        <li><a href="shop-left-sidebar.html">Ice cream</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Cheese</a></li>
                                                        <li><a href="shop-left-sidebar.html">Frozen
                                                                custard</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Frozen
                                                                yogurt</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col">
                                                    <h6 class="cr-col-title">Bakery</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="shop-left-sidebar.html">Cake and
                                                                Pastry</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Rusk Toast</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Bread &amp;
                                                                Buns</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Chocolate
                                                                Brownie</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Cream Roll</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                            aria-labelledby="v-pills-profile-tab">
                                            <div class="tab-list row">
                                                <div class="col">
                                                    <h6 class="cr-col-title">Fruits</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="shop-left-sidebar.html">Cauliflower</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Bell
                                                                Peppers</a></li>
                                                        <li><a href="shop-left-sidebar.html">Broccoli</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Cabbage</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Tomato</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col">
                                                    <h6 class="cr-col-title">Vegetable</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="shop-left-sidebar.html">Cauliflower</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Bell
                                                                Peppers</a></li>
                                                        <li><a href="shop-left-sidebar.html">Broccoli</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Cabbage</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Tomato</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                            aria-labelledby="v-pills-messages-tab">
                                            <div class="tab-list row">
                                                <div class="col">
                                                    <h6 class="cr-col-title">Snacks</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="shop-left-sidebar.html">French
                                                                fries</a></li>
                                                        <li><a href="shop-left-sidebar.html">potato
                                                                chips</a></li>
                                                        <li><a href="shop-left-sidebar.html">Biscuits &amp;
                                                                Cookies</a></li>
                                                        <li><a href="shop-left-sidebar.html">Popcorn</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Rice Cakes</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col">
                                                    <h6 class="cr-col-title">Spice</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="shop-left-sidebar.html">Cinnamon
                                                                Powder</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Cumin
                                                                Powder</a></li>
                                                        <li><a href="shop-left-sidebar.html">Fenugreek
                                                                Powder</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Pepper
                                                                Powder</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Long Pepper</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                                            aria-labelledby="v-pills-settings-tab">
                                            <div class="tab-list row">
                                                <div class="col">
                                                    <h6 class="cr-col-title">Juice</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="shop-left-sidebar.html">Mango Juice</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Coconut
                                                                Water</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Tetra Pack</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Apple
                                                                Juices</a></li>
                                                        <li><a href="shop-left-sidebar.html">Lychee
                                                                Juice</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col">
                                                    <h6 class="cr-col-title">soft drink</h6>
                                                    <ul class="cat-list">
                                                        <li><a href="shop-left-sidebar.html">Breizh Cola</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Green Cola</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Jolt Cola</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Mecca Cola</a>
                                                        </li>
                                                        <li><a href="shop-left-sidebar.html">Topsia Cola</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav class="navbar navbar-expand-lg">
                        <a href="javascript:void(0)" class="navbar-toggler shadow-none">
                            <i class="ri-menu-3-line"></i>
                        </a>
                        <div class="cr-header-buttons">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="javascript:void(0)">
                                        <i class="ri-user-3-line"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <Link class="dropdown-item" to="/Register">Register</Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="/Checkout">Checkout</Link>
                                        </li>
                                        <li>
                                            <Link class="dropdown-item" to="/Login">Login</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <a href="wishlist.html" class="cr-right-bar-item">
                                <i class="ri-heart-line"></i>
                            </a>
                            <Link to="/Cart" class="cr-right-bar-item Shopping-toggle">
                                <i class="ri-shopping-cart-line"> ({cart.length})</i>
  
                            </Link>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                
                                <li class="nav-item">
                                  <Link class="nav-link" to="/About">
                                     About
                                    </Link>
                                </li>
                                
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)">
                                        Products
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="product-left-sidebar.html">product
                                                Left
                                                sidebar </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="product-right-sidebar.html">product
                                                Right
                                                sidebar </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="product-full-width.html">Product
                                                Full
                                                Width
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle" to="/Contact">
                                       Contact
                                    </Link>
                                   
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)">
                                        Blog
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="blog-left-sidebar.html">Left
                                                Sidebar</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="blog-right-sidebar.html">Right
                                                Sidebar</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="blog-full-width.html">Full
                                                Width</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="blog-detail-left-sidebar.html">Detail
                                                Left
                                                Sidebar</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="blog-detail-right-sidebar.html">Detail
                                                Right
                                                Sidebar</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="blog-detail-full-width.html">Detail
                                                Full
                                                Width</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="javascript:void(0)">
                                        Elements
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="elements-products.html">Products</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="elements-typography.html">Typography</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="elements-buttons.html">Buttons</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div class="cr-calling">
                        <i class="ri-phone-line"></i>
                        <a href="javascript:void(0)">+123 ( 456 ) ( 7890 )</a>
                    </div>
                </div>
            </div>
        </div>
    </header>

  
    <div class="cr-sidebar-overlay"></div>
    <div id="cr_mobile_menu" class="cr-side-cart cr-mobile-menu">
        <div class="cr-menu-title">
            <span class="menu-title">My Menu</span>
            <button type="button" class="cr-close">×</button>
        </div>
        <div class="cr-menu-inner">
            <div class="cr-menu-content">
                <ul>
                    <li class="dropdown drop-list">
                        <Link to="/">Home</Link>
                    </li>
                    <li class="dropdown drop-list">
                        <span class="menu-toggle"></span>
                        <a href="javascript:void(0)" class="dropdown-list">Category</a>
                        <ul class="sub-menu">
                            <li><a href="shop-left-sidebar.html">Shop Left sidebar</a></li>
                            <li><a href="shop-right-sidebar.html">Shop Right sidebar</a></li>
                            <li><a href="shop-full-width.html">Full Width</a></li>
                        </ul>
                    </li>
                    <li class="dropdown drop-list">
                        <span class="menu-toggle"></span>
                        <a href="javascript:void(0)" class="dropdown-list">product</a>
                        <ul class="sub-menu">
                            <li><a href="product-left-sidebar.html">product Left sidebar</a></li>
                            <li><a href="product-right-sidebar.html">product Right sidebar</a></li>
                            <li><a href="product-full-width.html">Product Full Width </a></li>
                        </ul>
                    </li>
                    <li class="dropdown drop-list">
                        <span class="menu-toggle"></span>
                        <a href="javascript:void(0)" class="dropdown-list">Pages</a>
                        <ul class="sub-menu">
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="contact-us.html">Contact Us</a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="track-order.html">Track Order</a></li>
                            <li><a href="wishlist.html">Wishlist</a></li>
                            <li><a href="faq.html">Faq</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="policy.html">Policy</a></li>
                        </ul>
                    </li>
                    <li class="dropdown drop-list">
                        <span class="menu-toggle"></span>
                        <a href="javascript:void(0)" class="dropdown-list">Blog</a>
                        <ul class="sub-menu">
                            <li><a href="blog-left-sidebar.html">Left Sidebar</a></li>
                            <li><a href="blog-right-sidebar.html">Right Sidebar</a></li>
                            <li><a href="blog-full-width.html">Full Width</a></li>
                            <li><a href="blog-detail-left-sidebar.html">Detail Left Sidebar</a></li>
                            <li><a href="blog-detail-right-sidebar.html">Detail Right Sidebar</a></li>
                            <li><a href="blog-detail-full-width.html">Detail Full Width</a></li>
                        </ul>
                    </li>
                    <li class="dropdown drop-list">
                        <span class="menu-toggle"></span>
                        <a href="javascript:void(0)">Element</a>
                        <ul class="sub-menu">
                            <li><a href="elements-products.html">Products</a></li>
                            <li><a href="elements-typography.html">Typography</a></li>
                            <li><a href="elements-buttons.html">Buttons</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>


    </>
    )
};

export default Pages;
