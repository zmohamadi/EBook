"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// const categories = [
//   { id: 1, img: "/book-categori/01.png", title: "Romance Books", count: 80 },
//   { id: 2, img: "/book-categori/02.png", title: "Design Low Book", count: 6 },
//   { id: 3, img: "/book-categori/03.png", title: "Safe Home", count: 5 },
//   { id: 4, img: "/book-categori/04.png", title: "Grow Flower", count: 7 },
//   { id: 4, img: "/book-categori/04.png", title: "Grow Flower", count: 7 },
//   { id: 4, img: "/book-categori/04.png", title: "Grow Flower", count: 7 },
//   { id: 4, img: "/book-categori/04.png", title: "Grow Flower", count: 7 },
//   { id: 4, img: "/book-categori/04.png", title: "Grow Flower", count: 7 },
//   { id: 5, img: "/book-categori/05.png", title: "Adventure Book", count: 4 },
// ];

export const Category = ({ items,assetsPath, mediaPath, local, Lang }) => {
  const swiperRef = useRef(null);
  return (
    <section className="book-catagories-section fix section-padding">
      <div className="container">
        <div className="book-catagories-wrapper">
          <div className="section-title text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">{Lang('public.cat_title')}</h2>
          </div>
          <div className="array-button">
            <button onClick={() => swiperRef.current?.slidePrev()} className="array-prev">
              <i className="fal fa-arrow-left"></i>
            </button>
            <button onClick={() => swiperRef.current?.slideNext()} className="array-next">
              <i className="fal fa-arrow-right"></i>
            </button>
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={5}
            speed={1000}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {items?.map((category) => (
              <SwiperSlide key={category.id}>
                <div className="book-catagories-items">
                  <div className="book-thumb">
                    <img src={`${mediaPath}/category/${category.image}`} alt={category.name} />
                    <div className="circle-shape">
                      <img src={`${assetsPath}/img/book-categori/circle-shape.png`} alt="shape" />
                    </div>
                  </div>
                  <div className="number">{category.id}</div>
                  <h3><a href="shop-details.html">{category.name} ({category.book_count})</a></h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
