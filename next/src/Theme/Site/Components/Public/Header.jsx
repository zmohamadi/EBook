"use client"

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = ({ data, assetsPath, mediaPath, local }) => {
  const pathname = usePathname();
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const toggleOffcanvas = () => setIsOffcanvasOpen(!isOffcanvasOpen);
  const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);
  const toggleRegisterModal = () => setIsRegisterModalOpen(!isRegisterModalOpen);

  return (
    <>
      {/* Header Top */}
      <div className="header-top-1">
        <div className="container">
          <div className="header-top-wrapper">
            <ul className="contact-list">
              <li>
                <i className="fa-regular fa-phone"></i>
                <a href="tel:+20866660112">+208-6666-0112</a>
              </li>
              <li>
                <i className="far fa-envelope"></i>
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
              <li>
                <i className="far fa-clock"></i>
                <span>Sunday - Fri: 9 aM - 6 pM</span>
              </li>
            </ul>
            <ul className="list">
              <li><i className="fa-light fa-comments"></i><Link href="/contact">Live Chat</Link></li>
              <li>
                <i className="fa-light fa-user"></i>
                <button onClick={toggleLoginModal}>Login</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="header-1 sticky-header">
        <div className="mega-menu-wrapper">
          <div className="header-main">
            <div className="container">
              <div className="row">
                <div className="col-6 col-md-6 col-lg-10 col-xl-8 col-xxl-10">
                  <div className="header-left">
                    <div className="logo">
                      <Link href="/" className="header-logo">
                        <img src={`${assetsPath}/img/logo/white-logo.svg`} alt="logo-img" />
                      </Link>
                    </div>
                    <div className="mean__menu-wrapper">
                      <div className="main-menu">
                        <nav>
                          <ul>
                            <li>
                              <Link href="/">Home</Link>
                            </li>
                            <li>
                              <Link href="/shop">Shop</Link>
                            </li>
                            <li>
                              <Link href="/about">Pages</Link>
                            </li>
                            <li>
                              <Link href="/blog">Blog</Link>
                            </li>
                            <li>
                              <Link href="/contact">Contact</Link>
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
                        <option value="1">Software Eng</option>
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
                      <Link href="/wishlist" className="cart-icon">
                        <i className="fa-regular fa-heart"></i>
                      </Link>
                      <Link href="/cart" className="cart-icon">
                        <i className="fa-regular fa-cart-shopping"></i>
                      </Link>
                      <div className="header-humbager ml-30">
                        <button className="sidebar__toggle" onClick={toggleOffcanvas}>
                          <div className="bar-icon-2">
                            <img src={`${assetsPath}/img/icon/icon-13.svg`} alt="img" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas Area */}
      <div className={`fix-area ${isOffcanvasOpen ? 'active' : ''}`}>
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src={`${assetsPath}/img/logo/black-logo.svg`} alt="logo-img" />
                  </Link>
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
                      <a target="_blank" href="/">Main Street, Melbourne, Australia</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="/">Mod-friday, 09am -05pm</a>
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
                  <Link href="/contact" className="theme-btn text-center">
                    Get A Quote <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
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
      </div>
      <div className={`offcanvas__overlay ${isOffcanvasOpen ? 'active' : ''}`} onClick={toggleOffcanvas}></div>

      {/* Login Modal */}
      <div className={`modal fade ${isLoginModalOpen ? 'show' : ''}`} style={{ display: isLoginModalOpen ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="close-btn">
                <button type="button" onClick={toggleLoginModal} className="btn-close"></button>
              </div>
              <div className="identityBox">
                <div className="form-wrapper">
                  <h1>welcome back!</h1>
                  <input className="inputField" type="email" name="email" placeholder="Email Address" />
                  <input className="inputField" type="password" name="password" placeholder="Enter Password" />
                  <div className="input-check remember-me">
                    <div className="checkbox-wrapper">
                      <input type="checkbox" className="form-check-input" name="save-for-next" id="saveForNext" />
                      <label htmlFor="saveForNext">Remember me</label>
                    </div>
                    <div className="text"> <a href="/">Forgot Your password?</a> </div>
                  </div>
                  <div className="loginBtn">
                    <a href="/" className="theme-btn rounded-0"> Log in </a>
                  </div>
                  <div className="orting-badge">Or</div>
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
                  <button type="button" className="rounded-0 login-btn" onClick={toggleLoginModal}>Log in</button>
                  <button type="button" className="theme-btn rounded-0 register-btn" onClick={() => {
                    toggleLoginModal();
                    toggleRegisterModal();
                  }}>Create Account</button>
                  <div className="loginBg">
                    <img src={`${assetsPath}/img/signUpbg.jpg`} alt="signUpBg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Registration Modal */}
      <div className={`modal fade ${isRegisterModalOpen ? 'show' : ''}`} style={{ display: isRegisterModalOpen ? 'block' : 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="close-btn">
                <button type="button" onClick={toggleRegisterModal} className="btn-close"></button>
              </div>
              <div className="identityBox">
                <div className="form-wrapper">
                  <h1>Create account!</h1>
                  <input className="inputField" type="text" name="name" id="name" placeholder="User Name" />
                  <input className="inputField" type="email" name="email" placeholder="Email Address" />
                  <input className="inputField" type="password" name="password" placeholder="Enter Password" />
                  <input className="inputField" type="password" name="password" placeholder="Enter Confirm Password" />
                  <div className="input-check remember-me">
                    <div className="checkbox-wrapper">
                      <input type="checkbox" className="form-check-input" name="save-for-next" id="rememberMe" />
                      <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <div className="text"> <a href="/">Forgot Your password?</a> </div>
                  </div>
                  <div className="loginBtn">
                    <a href="/" className="theme-btn rounded-0"> Log in </a>
                  </div>
                  <div className="orting-badge">Or</div>
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
                  <button type="button" className="theme-btn rounded-0 register-btn" onClick={toggleRegisterModal}>Create Account</button>
                  <div className="signUpBg">
                    <img src={`${assetsPath}/img/registrationbg.jpg`} alt="signUpBg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;