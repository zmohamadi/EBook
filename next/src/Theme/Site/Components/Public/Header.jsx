"use client"

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from '@/lib';

const Header = ({ data, assetsPath, mediaPath, local }) => {
  const { Lang } = useLang();
  const pathname = usePathname();
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const toggleOffcanvas = () => setIsOffcanvasOpen(!isOffcanvasOpen);
  const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);
  const toggleRegisterModal = () => setIsRegisterModalOpen(!isRegisterModalOpen);

  return (
    <>
      {/* Offcanvas Area start */}
      {/* <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <a href="index.html">
                    <img src={`${assetsPath}/img/logo/black-logo.png`} alt="logo-img" />
                  </a>
                </div>
                <div className="offcanvas__close">
                  <button onClick={toggleOffcanvas}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio sem semper the is erat, a
                feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
              </p>
              <div className="mobile-menu fix mb-3"></div>
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="index.html">Main Street, Melbourne, Australia</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@example.com"><span>info@example.com</span></a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="index.html">Mod-friday, 09am -05pm</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+11002345909">+11002345909</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <a href="contact.html" className="theme-btn text-center">
                    Get A Quote <i className="fa-solid fa-arrow-right-long"></i>
                  </a>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://x.com"><i className="fab fa-twitter"></i></a>
                  <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
                  <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="offcanvas__overlay"></div> */}

      <div className="header-top-1">
        <div className="container">
          <div className="header-top-wrapper">
            <ul className="contact-list">
              <li>
                <i className="fa-regular fa-phone"></i>
                <a href="tel:021-8934532" className='fa-num'>021-8934532</a>
              </li>
              <li>
                <i className="far fa-envelope"></i>
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
              <li>
                <i className="far fa-clock"></i>
                <span>شنبه تا چهارشنبه - 9 تا 17</span>
              </li>
            </ul>
            <ul className="list">
              {/* <li><i className="fa-light fa-comments"></i><a href="contact.html">Live Chat</a></li> */}
              <li><i className="fa-light fa-user"></i>
                <button onClick={toggleLoginModal}>
                {Lang('public.login')}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sticky Header Section start */}
      <header className="header-1  sticky-header">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <div className="container">
              <div className="row">
                <div className="col-6 col-md-6 col-lg-10 col-xl-8 col-xxl-10">
                  <div className="header-left">
                    <div className="logo">
                      <a href="index.html" className="header-logo">
                        <img src={`${assetsPath}/img/logo/white-logo.png`} alt="logo-img" />
                      </a>
                    </div>
                    <div className="mean__menu-wrapper">
                      <div className="main-menu">
                        <nav>
                          <ul>
                            {/* <li>
                              <a href="index.html">
                                Home
                                <i className="fas fa-angle-down"></i>
                              </a>
                              <ul className="submenu">
                                <li><a href="index.html">Home 01</a></li>
                                <li><a href="index-2.html">Home 02</a></li>
                              </ul>
                            </li>
                            
                            <li>
                              <a href="news.html">
                                Blog
                                <i className="fas fa-angle-down"></i>
                              </a>
                              <ul className="submenu">
                                <li><a href="news-grid.html">Blog Grid</a></li>
                                <li><a href="news.html">Blog List</a></li>
                                <li><a href="news-details.html">Blog Details</a></li>
                              </ul>
                            </li> */}
                            <li>
                              <a href={`/${local}`}>{Lang('public.home')}</a>
                            </li>
                            <li>
                              <a href={`/${local}/books`}>{Lang('public.books')}</a>
                            </li>
                            <li>
                              <a href={`/${local}/blog`}>{Lang('public.blog')}</a>
                            </li>
                            <li>
                              <a href={`/${local}/contact`}>{Lang('public.contact')}</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-2 col-xl-4 col-xxl-2">
                  <div className="header-right">
                    <div className="category-oneadjust gap-6 d-flex align-items-center">
                      <div className="icon">
                        <i className="fa-sharp fa-solid fa-grid-2"></i>
                      </div>
                      <select name="cate" className="category">
                        <option value="1">Category</option>
                        <option value="1">Web Design</option>
                        <option value="1">Web Development</option>
                        <option value="1">Graphic Design</option>
                        <option value="1">Softwer Eng</option>
                      </select>
                      <form action="#" className="search-toggle-box d-md-block">
                        <div className="input-area">
                          <input type="text" placeholder="Author" />
                          <button className="cmn-btn">
                            <i className="far fa-search"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="menu-cart">
                      <a href="wishlist.html" className="cart-icon">
                        <i className="fa-regular fa-heart"></i>
                      </a>
                      <a href="shop-cart.html" className="cart-icon">
                        <i className="fa-regular fa-cart-shopping"></i>
                      </a>
                      <div className="header-humbager ml-30">
                        <a className="sidebar__toggle" href="javascript:void(0)" onClick={toggleOffcanvas}>
                          <div className="bar-icon-2">
                            <img  src={`${assetsPath}/img/icon/icon-13.svg`} alt="img" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Header Section start */}
      <header className="header-1 header-right">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <div className="container">
              <div className="row">
                <div className="col-6 col-md-6 col-lg-10 col-xl-8 col-xxl-10">
                  <div className="header-left">
                    <div className="logo">
                      <a href="index.html" className="header-logo">
                        <img src={`${assetsPath}/img/logo/white-logo.png`} alt="logo-img" />
                      </a>
                    </div>
                    <div className="mean__menu-wrapper">
                      <div className="main-menu">
                        <nav id="mobile-menu">
                          <ul>
                            {/* <li>
                              <a href="index.html">
                                Home
                                <i className="fas fa-angle-down"></i>
                              </a>
                              <ul className="submenu">
                                <li><a href="index.html">Home 01</a></li>
                                <li><a href="index-2.html">Home 02</a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="shop.html">
                                Shop
                                <i className="fas fa-angle-down"></i>
                              </a>
                              <ul className="submenu">
                                <li><a href="shop.html">Shop Default</a></li>
                                <li><a href="shop-list.html">Shop List</a></li>
                                <li><a href="shop-details.html">Shop Details</a></li>
                                <li><a href="shop-cart.html">Shop Cart</a></li>
                                <li><a href="wishlist.html">Wishlist</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                              </ul>
                            </li>
                            <li className="has-dropdown">
                              <a href="about.html">
                                Pages
                                <i className="fas fa-angle-down"></i>
                              </a>
                              <ul className="submenu">
                                <li><a href="about.html">About Us</a></li>
                                <li className="has-dropdown">
                                  <a href="team.html">
                                    Author
                                    <i className="fas fa-angle-down"></i>
                                  </a>
                                  <ul className="submenu">
                                    <li><a href="team.html">Author</a></li>
                                    <li><a href="team-details.html">Author Profile</a></li>
                                  </ul>
                                </li>
                                <li><a href="faq.html">Faq's</a></li>
                                <li><a href="404.html">404 Page</a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="news.html">
                                Blog
                                <i className="fas fa-angle-down"></i>
                              </a>
                              <ul className="submenu">
                                <li><a href="news-grid.html">Blog Grid</a></li>
                                <li><a href="news.html">Blog List</a></li>
                                <li><a href="news-details.html">Blog Details</a></li>
                              </ul>
                            </li>
                            <li>
                              <a href="contact.html">Contact</a>
                            </li> */}
                            <li><a href={`/${local}`}>{Lang('public.home')}</a></li>
                            <li><a href={`/${local}/books`}>{Lang('public.books')}</a></li>
                            <li><a href={`/${local}/blog`}>{Lang('public.blog')}</a></li>
                            <li><a href={`/${local}/contact`}>{Lang('public.contact')}</a></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-6 col-lg-2 col-xl-4 col-xxl-2">
                  <div className="header-right">
                    <div className="category-oneadjust gap-6 d-flex align-items-center">
                      <div className="icon">
                        <i className="fa-sharp fa-solid fa-grid-2"></i>
                      </div>
                      <select name="cate" className="category">
                        <option value="1">Category</option>
                        <option value="1">Web Design</option>
                        <option value="1">Web Development</option>
                        <option value="1">Graphic Design</option>
                        <option value="1">Softwer Eng</option>
                      </select>
                      <form action="#" className="search-toggle-box d-md-block">
                        <div className="input-area">
                          <input type="text" placeholder="Author" />
                          <button className="cmn-btn">
                            <i className="far fa-search"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="menu-cart">
                      <a href="wishlist.html" className="cart-icon">
                        <i className="fa-regular fa-heart"></i>
                      </a>
                      <a href="shop-cart.html" className="cart-icon">
                        <i className="fa-regular fa-cart-shopping"></i>
                      </a>
                      <div className="header-humbager ml-30">
                        <a className="sidebar__toggle" href="javascript:void(0)" onClick={toggleOffcanvas}>
                          <div className="bar-icon-2">
                            <img src={`${assetsPath}/img/icon/icon-13.svg`} alt="img" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Login Modal */}
      {/* {isLoginModalOpen && (
        <div className="modal show" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="close-btn">
                  <button type="button" className="btn-close" onClick={toggleLoginModal} aria-label="Close"></button>
                </div>
                <div className="identityBox">
                  <div className="form-wrapper">
                    <h1 id="loginModalLabel">welcome back!</h1>
                    <input className="inputField" type="email" name="email" placeholder="Email Address" />
                    <input className="inputField" type="password" name="password" placeholder="Enter Password" />
                    <div className="input-check remember-me">
                      <div className="checkbox-wrapper">
                        <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext" />
                        <label htmlFor="saveForNext">Remember me</label>
                      </div>
                      <div className="text"> <a href="index-2.html">Forgot Your password?</a> </div>
                    </div>
                    <div className="loginBtn">
                      <a href="index-2.html" className="theme-btn rounded-0"> Log in </a>
                    </div>
                    <div className="orting-badge">
                      Or
                    </div>
                    <div>
                      <a className="another-option" href="https://www.google.com">
                        <img src={`${assetsPath}/img/google.png`} alt="google" />
                        Continue With Google
                      </a>
                    </div>
                    <div>
                      <a className="another-option another-option-two" href="https://www.facebook.com">
                        <img src={`${assetsPath}/img/facebook.png`} alt="google" />
                        Continue With Facebook
                      </a>
                    </div>

                    <div className="form-check-3 d-flex align-items-center from-customradio-2 mt-3">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" />
                      <label className="form-check-label">
                        I Accept Your Terms & Conditions
                      </label>
                    </div>
                  </div>

                  <div className="banner">
                    <button type="button" className="rounded-0 login-btn" onClick={toggleLoginModal}>{Lang('public.login')}</button>
                    <button type="button" className="theme-btn rounded-0 register-btn" onClick={() => {
                      toggleLoginModal();
                      toggleRegisterModal();
                    }}>
                      Create Account
                    </button>
                    <div className="loginBg">
                      <img src={`${assetsPath}/img/signUpbg.jpg`} alt="signUpBg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
      
      {/* Registration Modal */}
      {/* {isRegisterModalOpen && (
        <div className="modal show" id="registrationModal" tabIndex="-1" aria-labelledby="registrationModalLabel" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <div className="close-btn">
                  <button type="button" className="btn-close" onClick={toggleRegisterModal} aria-label="Close"></button>
                </div>
                <div className="identityBox">
                  <div className="form-wrapper">
                    <h1 id="registrationModalLabel">Create account!</h1>
                    <input className="inputField" type="text" name="name" id="name" placeholder="User Name" />
                    <input className="inputField" type="email" name="email" placeholder="Email Address" />
                    <input className="inputField" type="password" name="password" placeholder="Enter Password" />
                    <input className="inputField" type="password" name="password" placeholder="Enter Confirm Password" />
                    <div className="input-check remember-me">
                      <div className="checkbox-wrapper">
                        <input type="checkbox" className="form-check-input" name="save-for-next" id="rememberMe" />
                        <label htmlFor="rememberMe">Remember me</label>
                      </div>
                      <div className="text"> <a href="index-2.html">Forgot Your password?</a> </div>
                    </div>
                    <div className="loginBtn">
                      <a href="index-2.html" className="theme-btn rounded-0"> Log in </a>
                    </div>
                    <div className="orting-badge">
                      Or
                    </div>
                    <div>
                      <a className="another-option" href="https://www.google.com">
                        <img src={`${assetsPath}/img/google.png`} alt="google" />
                        Continue With Google
                      </a>
                    </div>
                    <div>
                      <a className="another-option another-option-two" href="https://www.facebook.com">
                        <img src={`${assetsPath}/img/facebook.png`} alt="google" />
                        Continue With Facebook
                      </a>
                    </div>
                    <div className="form-check-3 d-flex align-items-center from-customradio-2 mt-3">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" />
                      <label className="form-check-label">
                        I Accept Your Terms & Conditions
                      </label>
                    </div>
                  </div>

                  <div className="banner">
                    <button type="button" className="rounded-0 login-btn" onClick={() => {
                      toggleRegisterModal();
                      toggleLoginModal();
                    }}>Log in</button>
                    <button type="button" className="theme-btn rounded-0 register-btn" onClick={toggleRegisterModal}>
                      Create Account
                    </button>
                    <div className="signUpBg">
                      <img src={`${assetsPath}/img/registrationbg.jpg`} alt="signUpBg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Header;