"use client"
import {useEffect} from "react";
import Link from "next/link";
import { ProductGrid } from "@/Theme/Site/Components/Cards/ProductGrid";

export const RelatedProduct = ({ items,assetsPath,mediaPath,local,Lang }) => {
	useEffect(() => {
        handleSwiperFour();
	}, []);
    const handleSwiperFour = ()=>{
		if(jQuery('.swiper-four').length > 0){
			var swiper = new Swiper( '.swiper-four', {
				speed: 1000,
				loop: true,
				parallax: true,
				slidesPerView: 4,
				spaceBetween: 30,
				autoplay: {
					delay: 2500,
				},
				navigation: {
					nextEl: ".tranding-button-next",
					prevEl: ".tranding-button-prev",
				},	
				breakpoints: {
					1200: {
						slidesPerView: 4,
					},
					1024: {
						slidesPerView: 4,
					},
					991: {
						slidesPerView: 3,
					},
					591: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					340: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
				}
			});
		}
	}
    return(
		<>
            <section className="content-inner-1  overflow-hidden">
                <div className="container">
                    <div className="section-head style-2 d-md-flex justify-content-between align-items-center">
                        <div className="left-content">
                            <h2 className="title mb-0">{Lang("public.related_products")}</h2>
                        </div>
                        <Link href={`/${local}/products`} className="text-secondary font-14 d-flex align-items-center gap-1">{Lang("public.see_all")}
                            <i className="icon feather icon-chevron-right font-18"></i>
                        </Link>			
                    </div>
                    <div className="swiper-btn-center-lr">
                        <div className="swiper swiper-four">
                            <div className="swiper-wrapper">
                                {items?.map((item,index)=>{
                                    return(
                                        <div className="swiper-slide" key={index}>
                                            <ProductGrid item={item} mediaPath={mediaPath} local={local} Lang={Lang} />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="pagination-align">
                            <div className="tranding-button-prev btn-prev">
                                <i className="flaticon flaticon-left-chevron"></i>
                            </div>
                            <div className="tranding-button-next btn-next">
                                <i className="flaticon flaticon-chevron"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
    	</>
	);
}