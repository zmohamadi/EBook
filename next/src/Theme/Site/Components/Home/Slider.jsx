"use client"

import { useConfig } from "@/lib/config";

export const Slider = ({ items, mediaPath, Lang, local }) => {
  const { assetsPath } = useConfig();
  
  return (
    <>
      {/* Hero Slider Section */}
      <div className="hero-section hero-1 fix mb-4">
        <div className="container">
          <div className="row">
           
            <div className="col-12">
              <img 
                              className="hero-image"
                  src={`${mediaPath}/sliders/M-04.jpg`} 
                  alt="hero" 
                />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      {/* <section className="feature-section fix section-padding">
        <div className="container">
          <div className="feature-wrapper">
            <div className="feature-box-items wow fadeInUp" data-wow-delay=".2s">
              <div className="icon">
                <i className="icon-icon-1"></i>
              </div>
              <div className="content">
                <h3>Return & refund</h3>
                <p>Money back guarantee</p>
              </div>
            </div>
            <div className="feature-box-items wow fadeInUp" data-wow-delay=".4s">
              <div className="icon">
                <i className="icon-icon-2"></i>
              </div>
              <div className="content">
                <h3>Secure Payment</h3>
                <p>30% off by subscribing</p>
              </div>
            </div>
            <div className="feature-box-items wow fadeInUp" data-wow-delay=".6s">
              <div className="icon">
                <i className="icon-icon-3"></i>
              </div>
              <div className="content">
                <h3>Quality Support</h3>
                <p>Always online 24/7</p>
              </div>
            </div>
            <div className="feature-box-items wow fadeInUp" data-wow-delay=".8s">
              <div className="icon">
                <i className="icon-icon-4"></i>
              </div>
              <div className="content">
                <h3>Daily Offers</h3>
                <p>20% off by subscribing</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};