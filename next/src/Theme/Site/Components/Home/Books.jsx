"use client";

import { useConfig } from "@/lib/config";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Books = ({ items, mediaPath,assetsPath, local, Lang }) => {
  

  return (
    <section className="shop-section section-padding fix pt-0">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">{Lang('public.book_title')}</h2>
          </div>
          <Link href="/shop" className="theme-btn transparent-btn wow fadeInUp" data-wow-delay=".5s">
            {Lang('public.explore')}{Lang('public.y')} {Lang('public.more')} <i className="fa-solid fa-arrow-left-long"></i>
          </Link>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          effect="slide"
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="book-slider"
        >
          {items?.map((book) => (
            <SwiperSlide key={book?.id}>
              <div className="shop-box-items style-2 wow fadeInUp" data-wow-delay=".4s">
                <div className="book-thumb center">
                  <Link href={`/${local}/books/${book?.id}`}>
                    <img src={`${mediaPath}/books/${book?.image}`} alt={book?.title} />
                  </Link>
                  {book?.tags?.length > 0 && (
                    <ul className="post-box">
                      {book?.tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                      ))}
                    </ul>
                  )}
                  <ul className="shop-icon d-grid justify-content-center align-items-center">
                    <li>
                      <Link href="/shop-cart"><i className="far fa-heart"></i></Link>
                    </li>
                    <li>
                      <Link href="/shop-cart">
                        <img className="icon" src={`${assetsPath}/img/icon/shuffle.svg`} alt="svg-icon" />
                      </Link>
                    </li>
                    <li>
                      <Link href={`/${local}/books/${book?.id}`}><i className="far fa-eye"></i></Link>
                    </li>
                  </ul>
                </div>
                <div className="shop-content">
                  <h5>{book?.categories?.[0]?.name}</h5>
                  <h3>
                    <Link href={`/${local}/books/${book?.id}`}>{book?.title}</Link>
                  </h3>
                  <ul className="price-list">
                    <li>${book?.discounted_price}</li>
                    {book?.original_price && <li><del>${book?.original_price}</del></li>}
                  </ul>
                  <ul className="author-post">
                    <li className="authot-list">
                      <span className="thumb">
                        <img width={"30px"} src={`${mediaPath}/users/${book?.authors?.[0]?.photo}`} alt={book?.authors?.[0]?.firstname} />
                      </span>
                      <span className="content">{book?.authors?.[0]?.firstname} {book?.authors?.[0]?.lastname}</span>
                    </li>
                    <li className="star">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={i < book?.rating ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                      ))}
                    </li>
                  </ul>
                </div>
                <div className="shop-button">
                  <Link href={`/${local}/books/${book?.id}`} className="theme-btn">
                    <i className="fa-solid fa-basket-shopping"></i> {Lang('public.add_to_card')}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};