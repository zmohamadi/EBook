"use client"

import { useConfig } from "@/lib/config";
import Link from "next/link";

export const MostVisited = ({ items, mediaPath, local, Lang }) => {
  const { assetsPath } = useConfig();

  const books = [
    {
      id: 1,
      image: "01.png",
      tags: ["Hot", "-30%"],
      title: "Simple Things You To Save BOOK",
      price: 30.00,
      originalPrice: 39.99,
      author: {
        name: "Wilson",
        image: "client-1.png"
      },
      rating: 4
    },
    {
      id: 2,
      image: "02.png",
      tags: [],
      title: "How Deal With Very Bad BOOK",
      price: 39.00,
      author: {
        name: "Esther",
        image: "client-2.png"
      },
      rating: 4
    },
    {
      id: 3,
      image: "03.png",
      tags: [],
      title: "The Hidden Mystery Behind",
      price: 29.00,
      author: {
        name: "Hawkins",
        image: "client-3.png"
      },
      rating: 4
    },
    {
      id: 4,
      image: "04.png",
      tags: ["-12%"],
      title: "Qple GPad With Retina Sisplay",
      price: 19.00,
      author: {
        name: "Albert",
        image: "client-4.png"
      },
      rating: 4
    },
    {
      id: 5,
      image: "05.png",
      tags: [],
      title: "Flovely and Unicom Erna",
      price: 30.00,
      author: {
        name: "Alexander",
        image: "client-5.png"
      },
      rating: 4
    }
  ];

  return (
    <section className="shop-section section-padding fix pt-0">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">Featured Books</h2>
          </div>
          <Link 
            href="/shop" 
            className="theme-btn transparent-btn wow fadeInUp" 
            data-wow-delay=".5s"
          >
            Explore More <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
        
        <div className="swiper book-slider">
          <div className="swiper-wrapper">
            {books.map((book) => (
              <div className="swiper-slide" key={book.id}>
                <div className="shop-box-items style-2">
                  <div className="book-thumb center">
                    <Link href={`/shop-details/${book.id}`}>
                      <img 
                        src={`${assetsPath}/img/book/${book.image}`} 
                        alt={book.title} 
                      />
                    </Link>
                    
                    {book.tags.length > 0 && (
                      <ul className="post-box">
                        {book.tags.map((tag, index) => (
                          <li key={index}>{tag}</li>
                        ))}
                      </ul>
                    )}
                    
                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                      <li>
                        <Link href="/shop-cart">
                          <i className="far fa-heart"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/shop-cart">
                          <img 
                            className="icon" 
                            src={`${assetsPath}/img/icon/shuffle.svg`} 
                            alt="shuffle" 
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href={`/shop-details/${book.id}`}>
                          <i className="far fa-eye"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="shop-content">
                    <h5>Design Low Book</h5>
                    <h3>
                      <Link href={`/shop-details/${book.id}`}>
                        {book.title}
                      </Link>
                    </h3>
                    
                    <ul className="price-list">
                      <li>${book.price.toFixed(2)}</li>
                      {book.originalPrice && (
                        <li>
                          <del>${book.originalPrice.toFixed(2)}</del>
                        </li>
                      )}
                    </ul>
                    
                    <ul className="author-post">
                      <li className="authot-list">
                        <span className="thumb">
                          <img 
                            src={`${assetsPath}/img/testimonial/${book.author.image}`} 
                            alt={book.author.name} 
                          />
                        </span>
                        <span className="content">{book.author.name}</span>
                      </li>
                      <li className="star">
                        {[...Array(5)].map((_, i) => (
                          <i 
                            key={i} 
                            className={i < book.rating ? "fa-solid fa-star" : "fa-regular fa-star"}
                          ></i>
                        ))}
                      </li>
                    </ul>
                  </div>
                  
                  <div className="shop-button">
                    <Link 
                      href={`/shop-details/${book.id}`} 
                      className="theme-btn"
                    >
                      <i className="fa-solid fa-basket-shopping"></i> Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};