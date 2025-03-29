"use client"
import {useEffect} from "react"

import { ProductGrid } from "@/Theme/Site/Components/Cards/ProductGrid";

export const InfoProduct = ({ item,assetsPath,mediaPath,local,Lang }) => {
	useEffect(() => {
        loadInfo();
	}, []);
    const loadInfo = ()=>{
        if(window.jQuery('#lightgallery').length > 0 || jQuery('#lightgallery2').length > 0){
            handleLightgallery();
            ProductGallerySwiper1();
        }
        else{
			setTimeout(() => loadInfo(), 1000);
		}
    }
	const ProductGallerySwiper1 = ()=>{
        if(jQuery('.product-gallery-swiper').length > 0){
            var swiper = new Swiper(".product-gallery-swiper", {
                spaceBetween: 10,
                slidesPerView: 2,
                //freeMode: true,
                //watchSlidesProgress: true,
                pagination: {
                    el: ".swiper-pagination-trading",
                },
            });
            var swiper2 = new Swiper(".product-gallery-swiper2", {
                spaceBetween: 0,
                updateOnWindowResize: true,	
                navigation: {
                nextEl: ".gallery-button-next",
                prevEl: ".gallery-button-prev",
                },
                thumbs: {
                swiper: swiper,
                },
            });
        }
    }
	const handleLightgallery = ()=>{
        if (jQuery('#lightgallery').length > 0) {
            lightGallery(document.getElementById('lightgallery'), {
                plugins: [lgThumbnail, lgZoom],
                selector: '.lg-item',
                thumbnail: true,
                exThumbImage: 'data-src'
            });
        }
        if (jQuery('#lightgallery2').length > 0) {
            lightGallery(document.getElementById('lightgallery2'), {
                plugins: [lgThumbnail, lgZoom],
                selector: '.lg-item',
                thumbnail: true,
                exThumbImage: 'data-src'
            });
        }
	}
    let displayDiscount = (item?.discount>0)? <span className="badge bg-secondary mb-2">{Lang("public.sale")+" "+item?.discount+"% "+Lang("public.off")}</span> : "";
    let attachments = (item?.img)? item?.img?.split("###") : [];
    
    return(
		<>
			<section className="content-inner py-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-md-4">
                            <div className="dz-product-detail sticky-top">
                                <div className="swiper-btn-center-lr" >
                                    <div className="swiper product-gallery-swiper2 rounded" >
                                        <div className="swiper-wrapper" id="lightgallery2">
                                            <div className="swiper-slide">
                                                <div className="dz-media DZoomImage">
                                                    <a className="mfp-link lg-item" href={mediaPath+"/product/"+item?.image} data-src={mediaPath+"/product/"+item?.image}>
                                                        <i className="feather icon-maximize dz-maximize top-left"></i>
                                                    </a>
                                                    <img src={mediaPath+"/product/"+item?.image} alt="image" />
                                                </div>
                                            </div>
                                            {attachments?.map((attachment,index)=>{
                                                return(
                                                    <div className="swiper-slide" key={index}>
                                                        <div className="dz-media DZoomImage">
                                                            <a className="mfp-link lg-item" href={mediaPath+"/productGallery/"+attachment} data-src={mediaPath+"/productGallery/"+attachment}>
                                                                <i className="feather icon-maximize dz-maximize top-left"></i>
                                                            </a>
                                                            <img src={mediaPath+"/productGallery/"+attachment} alt="image" />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div className="swiper product-gallery-swiper thumb-swiper-lg">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <img src={mediaPath+"/product/"+item?.image} alt="image" />
                                            </div>
                                            {attachments?.map((attachment,index)=>{
                                                return(
                                                    <div className="swiper-slide">
                                                        <img src={mediaPath+"/productGallery/"+attachment} alt="image" />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>							
                            </div>	
                        </div>
                        <div className="col-xl-8 col-md-8">
                            <div className="row">
                                <div className="col-xl-7">
                                    <div className="dz-product-detail style-2 p-t20 ps-0">
                                        <div className="dz-content">
                                            <div className="dz-content-footer">
                                                <div className="dz-content-start">
                                                    {displayDiscount}
                                                    <h4 className="title mb-1">{item?.name}</h4>
                                                    {/* <div className="review-num">
                                                        <ul className="dz-rating me-2">
                                                            <li className="star-fill">
                                                                <i className="flaticon-star-1"></i>
                                                            </li>										
                                                            <li className="star-fill">
                                                                <i className="flaticon-star-1"></i>
                                                            </li>
                                                            <li className="star-fill">
                                                                <i className="flaticon-star-1"></i>
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-star-1"></i>
                                                            </li>
                                                            <li>
                                                                <i className="flaticon-star-1"></i>
                                                            </li>
                                                        </ul>
                                                        <span className="text-secondary me-2">4.7 Rating</span>
                                                        <a href="javascript:void(0);">(5 customer reviews)</a>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <p className="para-text">{item?.summary}</p>
                                            {/* <div className="meta-content m-b20 d-flex align-items-end">
                                                <div className="btn-quantity quantity-sm light d-xl-none d-blcok d-sm-block">
                                                    <label className="form-label">Quantity</label>
                                                    <input  type="text" value="1" name="demo_vertical2"/>
                                                </div>
                                            </div>
                                            <div className="product-num">
                                                <div className="btn-quantity light d-xl-block d-sm-none d-none">
                                                    <label className="form-label">Quantity</label>
                                                    <input  type="text" value="1" name="demo_vertical2"/>
                                                </div>
                                                <div className="d-block">
                                                    <label className="form-label">Size</label>
                                                    <div className="btn-group product-size m-0">
                                                        <input type="radio" className="btn-check" name="btnradio1" id="btnradio101" checked=""/>
                                                        <label className="btn" for="btnradio101">S</label>
            
                                                        <input type="radio" className="btn-check" name="btnradio1" id="btnradiol02"/>
                                                        <label className="btn" for="btnradiol02">M</label>
            
                                                        <input type="radio" className="btn-check" name="btnradio1" id="btnradiol03"/>
                                                        <label className="btn" for="btnradiol03">L</label>
                                                    </div>

                                                </div>
                                                <div className="meta-content">
                                                    <label className="form-label">Color</label>
                                                    <div className="d-flex align-items-center color-filter">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel21" value="#24262B" aria-label="..." checked />
                                                            <span></span>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel22" value="#8CB2D1" aria-label="..." />
                                                            <span></span>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel23" value="#0D775E" aria-label="..." />
                                                            <span></span>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel24" value="#FEC4C4" aria-label="..." />
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div className="dz-info">
                                                <ul>
                                                    <li><strong>{Lang("public.code_product")+":"}</strong></li>
                                                    <li>PRT584E63A</li>
                                                </ul>
                                                <ul>
                                                    <li><strong>{Lang("public.category")+":"}</strong></li>
                                                    <li><a href="shop-standard.html">{item?.category_parent?.["title_"+local]+","}</a></li>
                                                    <li><a href="shop-standard.html">{item?.category?.["title_"+local]}</a></li>											
                                                </ul>
                                                <ul>
                                                    <li><strong>{Lang("public.tags")+":"}</strong></li>
                                                    {(item?.keywords)?.map((keyword,index)=>{
                                                        return(
                                                            <li key={index}><a href="shop-standard.html">{(index==0)? "" : ","}{keyword?.title}</a></li>												
                                                            // <li><a href="shop-standard.html">Casual,</a></li>												
                                                        );
                                                    })}												
                                                </ul>
                                                {/* <ul className="social-icon">
                                                    <li><strong>{Lang("public.share")+":"}</strong></li>
                                                    <li>
                                                        <a href="../../https@www.facebook.com/dexignzone" target="_blank">
                                                            <i className="fa-brands fa-facebook-f"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="../../https@www.linkedin.com/showcase/3686700/admin/default.htm" target="_blank">
                                                            <i className="fa-brands fa-linkedin-in"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="../../https@www.instagram.com/dexignzone/default.htm" target="_blank">
                                                            <i className="fa-brands fa-instagram"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="../../https@twitter.com/dexignzones" target="_blank">
                                                            <i className="fa-brands fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                </ul> */}
                                            </div>
                                        </div>
                                        {/* <div className="banner-social-media">
                                            <ul>
                                                <li>
                                                    <a href="../../https@www.instagram.com/dexignzone/default.htm">Instagram</a>
                                                </li>
                                                <li>
                                                    <a href="../../https@www.facebook.com/dexignzone">Facebook</a>
                                                </li>
                                                <li>
                                                    <a href="../../https@twitter.com/dexignzones">twitter</a>
                                                </li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-xl-5">
                                    <div className="cart-detail">
                                        <a href="javascript:void(0);" className="btn btn-outline-secondary w-100 m-b20">{Lang("public.title_cart_detail_box_1")}</a>
                                        <div className="icon-bx-wraper style-4 m-b15">
                                            <div className="icon-bx">
                                                <i className="flaticon flaticon-ship"></i>
                                            </div>
                                            <div className="icon-content">
                                                <span className=" font-14">{Lang("public.title_cart_detail_box_2")}</span>
                                                <h6 className="dz-title">{Lang("public.text_cart_detail_box_2")}</h6>
                                            </div>
                                        </div>
                                        <div className="icon-bx-wraper style-4 m-b30">
                                            <div className="icon-bx">
                                                <img src={assetsPath+"/pixio/images/shop/shop-cart/icon-box/pic2.png"} alt="/" />
                                            </div>
                                            <div className="icon-content">
                                                <h6 className="dz-title">{Lang("public.title_cart_detail_box_3")}</h6>
                                                <p>{Lang("public.text_cart_detail_box_3")}</p>
                                            </div>
                                        </div>
                                        <div className="save-text">
                                            <i className="icon feather icon-check-circle"></i>
                                            <span className="m-l10">{Lang("public.text_cart_detail")}</span>
                                        </div>
                                        <table>
                                            <tbody>
                                                <tr className="total">
                                                    <td>
                                                        <h6 className="mb-0">{Lang("public.price_cart_detail")}</h6>
                                                    </td>
                                                    <td className="price">
                                                        {item?.price}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <a href="shop-wishlist.html" className="btn btn-outline-secondary btn-icon m-b20">
                                            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.24805 16.9986C8.99179 16.9986 8.74474 16.9058 8.5522 16.7371C7.82504 16.1013 7.12398 15.5038 6.50545 14.9767L6.50229 14.974C4.68886 13.4286 3.12289 12.094 2.03333 10.7794C0.815353 9.30968 0.248047 7.9162 0.248047 6.39391C0.248047 4.91487 0.755203 3.55037 1.67599 2.55157C2.60777 1.54097 3.88631 0.984375 5.27649 0.984375C6.31552 0.984375 7.26707 1.31287 8.10464 1.96065C8.52734 2.28763 8.91049 2.68781 9.24805 3.15459C9.58574 2.68781 9.96875 2.28763 10.3916 1.96065C11.2292 1.31287 12.1807 0.984375 13.2197 0.984375C14.6098 0.984375 15.8885 1.54097 16.8202 2.55157C17.741 3.55037 18.248 4.91487 18.248 6.39391C18.248 7.9162 17.6809 9.30968 16.4629 10.7792C15.3733 12.094 13.8075 13.4285 11.9944 14.9737C11.3747 15.5016 10.6726 16.1001 9.94376 16.7374C9.75136 16.9058 9.50417 16.9986 9.24805 16.9986ZM5.27649 2.03879C4.18431 2.03879 3.18098 2.47467 2.45108 3.26624C1.71033 4.06975 1.30232 5.18047 1.30232 6.39391C1.30232 7.67422 1.77817 8.81927 2.84508 10.1066C3.87628 11.3509 5.41011 12.658 7.18605 14.1715L7.18935 14.1743C7.81021 14.7034 8.51402 15.3033 9.24654 15.9438C9.98344 15.302 10.6884 14.7012 11.3105 14.1713C13.0863 12.6578 14.6199 11.3509 15.6512 10.1066C16.7179 8.81927 17.1938 7.67422 17.1938 6.39391C17.1938 5.18047 16.7858 4.06975 16.045 3.26624C15.3152 2.47467 14.3118 2.03879 13.2197 2.03879C12.4197 2.03879 11.6851 2.29312 11.0365 2.79465C10.4585 3.24179 10.0558 3.80704 9.81975 4.20255C9.69835 4.40593 9.48466 4.52733 9.24805 4.52733C9.01143 4.52733 8.79774 4.40593 8.67635 4.20255C8.44041 3.80704 8.03777 3.24179 7.45961 2.79465C6.811 2.29312 6.07643 2.03879 5.27649 2.03879Z" fill="black"></path>
                                            </svg>
                                            {Lang("public.cart_detail_btn_2")}
                                        </a>
                                        <a href="shop-cart.html" className="btn btn-secondary w-100">{Lang("public.cart_detail_btn_2")}</a>
                                    </div>	
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    	</>
	);
}