import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

export const Authors = ({ items, mediaPath,assetsPath, local, Lang }) => {
  const swiperRef = useRef(null);
  
  // const authors = [
  //   {
  //     name: "Esther Howard",
  //     image: "01.jpg",
  //     publishedBooks: 10,
  //   },
  //   {
  //     name: "Shikhon Islam",
  //     image: "02.jpg",
  //     publishedBooks: 7,
  //   },
  //   {
  //     name: "Kawser Ahmed",
  //     image: "03.jpg",
  //     publishedBooks: 4,
  //   },
  //   {
  //     name: "Brooklyn Simmons",
  //     image: "04.jpg",
  //     publishedBooks: 15,
  //   },
  //   {
  //     name: "Leslie Alexander",
  //     image: "05.jpg",
  //     publishedBooks: 5,
  //   },
  //   {
  //     name: "Guy Hawkins",
  //     image: "06.jpg",
  //     publishedBooks: 12,
  //   }
  // ];
  

  return (
    <>
      <section className="team-section fix section-padding pt-5 margin-bottom-30">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">{Lang('public.author_title')}</h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
          {Lang('public.author_p')}
          <br/>
          {Lang('public.author_p1')}
          </p>
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
          spaceBetween={30}
          slidesPerView={6}
          navigation={{
            prevEl: '.array-prev',
            nextEl: '.array-next',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          modules={[Navigation, Pagination, Autoplay]}
          className="team-slider"
        >
          {items?.map((author, index) => (
            <SwiperSlide key={index}>
              <div className="team-box-items">
                <div className="team-image">
                  <div className="thumb">
                    <img src={`${mediaPath}/users/${author.photo}`} alt={author.name} />
                  </div>
                  <div className="shape-img">
                    <img src={`${assetsPath}/img/team/shape-img.png`} alt="img" />
                  </div>
                </div>
                <div className="team-content text-center">
                  <h6><a href="team-details.html">{author.firstname} {author.lastname}</a></h6>
                  <p>{author.publishedBooks} {Lang('public.published_books')}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </>
  );
};
