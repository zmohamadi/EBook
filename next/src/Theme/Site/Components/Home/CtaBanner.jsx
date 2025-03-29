"use client";

import { useConfig } from "@/lib/config";
import Link from "next/link";

export const CtaBanner = () => {
  const { assetsPath } = useConfig();

  return (
    <section className="cta-banner-section fix section-padding pt-0">
      <div className="container">
        <div 
          className="cta-banner-wrapper section-padding bg-cover"
          style={{ backgroundImage: `url(${assetsPath}/img/cta-banner.jpg)` }}
        >
          <div className="book-shape">
            <img src={`${assetsPath}/img/book-shape.png`} alt="shape-img" />
          </div>
          <div className="girl-shape float-bob-x">
            <img src={`${assetsPath}/img/girl-shape-2.png`} alt="shape-img" />
          </div>
          <div className="cta-content text-center">
            <h2 className="mb-40 wow fadeInUp" data-wow-delay=".3s">
              Get 25% discount in all <br /> kind of super Selling
            </h2>
            <Link 
              href="/shop" 
              className="theme-btn wow fadeInUp" 
              data-wow-delay=".5s"
            >
              Shop Now <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};