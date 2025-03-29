"use client"

import { useLang } from '@/lib';
import Link from 'next/link';

const Footer = ({ data, assetsPath, mediaPath, local }) => {
  const { Lang } = useLang();
  
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="contact-info-area">
          <div className="contact-info-items wow fadeInUp" data-wow-delay=".2s">
            <div className="icon">
              <i className="icon-icon-5"></i>
            </div>
            <div className="content">
              <p>شماره تماس</p>
              <h3>
                <a href="tel:021-8934532">021-8934532</a>
              </h3>
            </div>
          </div>
          <div className="contact-info-items wow fadeInUp" data-wow-delay=".4s">
            <div className="icon">
              <i className="icon-icon-6"></i>
            </div>
            <div className="content">
              <p>ایمیل ما</p>
              <h3>
                <a href="mailto:example@gmail.com">example@gmail.com</a>
              </h3>
            </div>
          </div>
          <div className="contact-info-items wow fadeInUp" data-wow-delay=".6s">
            <div className="icon">
              <i className="icon-icon-7"></i>
            </div>
            <div className="content">
              <p>ساعت کاری</p>
              <h3>
              شنبه تا چهارشنبه - 9 تا 17
              </h3>
            </div>
          </div>
          {/* <div className="contact-info-items wow fadeInUp" data-wow-delay=".8s">
            <div className="icon">
              <i className="icon-icon-8"></i>
            </div>
            <div className="content">
              <p>Location</p>
              <h3>
                4517 Washington ave.
              </h3>
            </div>
          </div> */}
        </div>
      </div>
      <div className="footer-widgets-wrapper">
        <div className="plane-shape float-bob-y">
          <img src={`${assetsPath}/img/plane-shape.png`} alt="img" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <img src={`${assetsPath}/img/logo/white-logo.png`} alt="logo-img" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                   {Lang('public.footer_text')}
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://x.com"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
                    <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>{Lang('public.with_us')}</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href={`/${local}`}>
                      <i className="fa-solid fa-chevrons-left"></i>
                      {Lang('public.home')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${local}/books`}>
                      <i className="fa-solid fa-chevrons-left"></i>
                      {Lang('public.books')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${local}/blog`}>
                      <i className="fa-solid fa-chevrons-left"></i>
                      {Lang('public.blog')}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${local}/contact`}>
                      <i className="fa-solid fa-chevrons-left"></i>
                      {Lang('public.contact')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".6s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>{Lang('public.categories')}</h3>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="">
                      <i className="fa-solid fa-chevrons-left"></i>
                      {Lang('public.home')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/books">
                      <i className="fa-solid fa-chevrons-left"></i>
                      {Lang('public.books')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <i className="fa-solid fa-chevrons-left"></i>
                      {Lang('public.blog')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="fa-solid fa-chevrons-left"></i>
                      {Lang('public.contact')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      {/* <div className="footer-bottom">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              © All Copyright 2024 by <Link href="/">Bookle</Link>
            </p>
            
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;