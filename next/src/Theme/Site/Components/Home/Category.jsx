"use client"

import { useConfig } from "@/lib/config";
import Link from "next/link";
import { useEffect } from "react";

export const Category = ({ items, mediaPath, local, Lang }) => {
  const { assetsPath } = useConfig();

  const categories = [
    {
      id: 1,
      image: "01.png",
      name: "Romance Books",
      count: 80
    },
    {
      id: 2,
      image: "02.png",
      name: "Design Low Book",
      count: 6
    },
    {
      id: 3,
      image: "03.png",
      name: "safe Home",
      count: 5
    },
    {
      id: 4,
      image: "04.png",
      name: "Grow flower",
      count: 7
    },
    {
      id: 5,
      image: "05.png",
      name: "Adventure book",
      count: 4
    }
  ];

  useEffect(() => {
    // Initialize Swiper slider here if needed
    // Make sure to clean up event listeners on unmount
    return () => {
      // Cleanup code if needed
    };
  }, []);

  return (
    <section className="book-catagories-section fix section-padding">
      <div className="container">
        <div className="book-catagories-wrapper">
          <div className="section-title text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">Top Categories Book</h2>
          </div>
          
          <div className="array-button">
            <button className="array-prev">
              <i className="fal fa-arrow-left"></i>
            </button>
            <button className="array-next">
              <i className="fal fa-arrow-right"></i>
            </button>
          </div>
          
          <div className="swiper book-catagories-slider">
            <div className="swiper-wrapper">
              {categories.map((category, index) => (
                <div className="swiper-slide" key={category.id}>
                  <div className="book-catagories-items">
                    <div className="book-thumb">
                      <img 
                        src={`${assetsPath}/img/book-categori/${category.image}`} 
                        alt={category.name} 
                      />
                      <div className="circle-shape">
                        <img 
                          src={`${assetsPath}/img/book-categori/circle-shape.png`} 
                          alt="category background" 
                        />
                      </div>
                    </div>
                    <div className="number">0{index + 1}</div>
                    <h3>
                      <Link href={`/shop-details/${category.id}`}>
                        {category.name} ({category.count})
                      </Link>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};