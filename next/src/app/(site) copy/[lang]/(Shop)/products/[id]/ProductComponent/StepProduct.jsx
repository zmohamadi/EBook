"use client"
import { ProductGrid } from "@/Theme/Site/Components/Cards/ProductGrid";

export const StepProduct = ({ items,assetsPath,mediaPath,local,Lang }) => {
	
    return(
		<>
			<div className="page-content bg-light">
                <div className="d-sm-flex justify-content-between container-fluid py-3">
                    <nav aria-label="breadcrumb" className="breadcrumb-row">
                        <ul className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="index.html"> Home</a></li>
                            <li className="breadcrumb-item">Product Default</li>
                        </ul>
                    </nav>
                </div>  
                <section className="content-inner py-0">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-4 col-md-4">
                                <div className="dz-product-detail sticky-top">
                                    <div className="swiper-btn-center-lr">
                                        <div className="swiper product-gallery-swiper2 rounded" >
                                            <div className="swiper-wrapper" id="lightgallery2">
                                                <div className="swiper-slide">
                                                    <div className="dz-media DZoomImage">
                                                        <a className="mfp-link lg-item" href={assetsPath+"/pixio/images/products/product-detail2/product1.png"} data-src={assetsPath+"/pixio/images/products/product-detail2/product1.png"}>
                                                            <i className="feather icon-maximize dz-maximize top-left"></i>
                                                        </a>
                                                        <img src={assetsPath+"/pixio/images/products/product-detail2/product1.png"} alt="image" />
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="dz-media DZoomImage">
                                                        <a className="mfp-link lg-item" href={assetsPath+"/pixio/images/products/product-detail2/product2.png"} data-src={assetsPath+"/pixio/images/products/product-detail2/product2.png"}>
                                                            <i className="feather icon-maximize dz-maximize top-left"></i>
                                                        </a>
                                                        <img src={assetsPath+"/pixio/images/products/product-detail2/product2.png"} alt="image" />
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="dz-media DZoomImage">
                                                        <a className="mfp-link lg-item" href={assetsPath+"/pixio/images/products/product-detail2/product3.png"} data-src={assetsPath+"/pixio/images/products/product-detail2/product3.png"}>
                                                            <i className="feather icon-maximize dz-maximize top-left"></i>
                                                        </a>
                                                        <img src={assetsPath+"/pixio/images/products/product-detail2/product3.png"} alt="image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper product-gallery-swiper thumb-swiper-lg">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <img src={assetsPath+"/pixio/images/products/product-detail2/thumb-img/1.png"} alt="image" />
                                                </div>
                                                <div className="swiper-slide">
                                                    <img src={assetsPath+"/pixio/images/products/product-detail2/thumb-img/2.png"} alt="image" />
                                                </div>
                                                <div className="swiper-slide">
                                                    <img src={assetsPath+"/pixio/images/products/product-detail2/thumb-img/3.png"} alt="image" />
                                                </div>
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
                                                        <span className="badge bg-secondary mb-2">SALE 20% Off</span>
                                                        <h4 className="title mb-1">Curly Girl Beautiful Dress</h4>
                                                        <div className="review-num">
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
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="para-text">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                </p>
                                                <div className="meta-content m-b20 d-flex align-items-end">
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
                                                </div>
                                                <div className="dz-info">
                                                    <ul>
                                                        <li><strong>SKU:</strong></li>
                                                        <li>PRT584E63A</li>
                                                    </ul>
                                                    <ul>
                                                        <li><strong>Category:</strong></li>
                                                        <li><a href="shop-standard.html">Dresses,</a></li>												
                                                        <li><a href="shop-standard.html">Jeans,</a></li>												
                                                        <li><a href="shop-standard.html">Swimwear,</a></li>												
                                                        <li><a href="shop-standard.html">Summer,</a></li>												
                                                        <li><a href="shop-standard.html">Clothing,</a></li>												
                                                    </ul>
                                                    <ul>
                                                        <li><strong>Tags:</strong></li>
                                                        <li><a href="shop-standard.html">Casual,</a></li>												
                                                        <li><a href="shop-standard.html">Athletic,</a></li>												
                                                        <li><a href="shop-standard.html">Workwear,</a></li>												
                                                        <li><a href="shop-standard.html">Accessories,</a></li>												
                                                    </ul>
                                                    <ul className="social-icon">
                                                        <li><strong>Share:</strong></li>
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
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="banner-social-media">
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
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5">
                                        <div className="cart-detail">
                                            <a href="javascript:void(0);" className="btn btn-outline-secondary w-100 m-b20">Bank Offer 5% Cashback</a>
                                            <div className="icon-bx-wraper style-4 m-b15">
                                                <div className="icon-bx">
                                                    <i className="flaticon flaticon-ship"></i>
                                                </div>
                                                <div className="icon-content">
                                                    <span className=" font-14">Easy Returns</span>
                                                    <h6 className="dz-title">30 Days</h6>
                                                </div>
                                            </div>
                                            <div className="icon-bx-wraper style-4 m-b30">
                                                <div className="icon-bx">
                                                    <img src={assetsPath+"/pixio/images/shop/shop-cart/icon-box/pic2.png"} alt="/" />
                                                </div>
                                                <div className="icon-content">
                                                    <h6 className="dz-title">Enjoy The Product</h6>
                                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                                                </div>
                                            </div>
                                            <div className="save-text">
                                                <i className="icon feather icon-check-circle"></i>
                                                <span className="m-l10">You will save ₹504 on this order</span>
                                            </div>
                                            <table>
                                                <tbody>
                                                    <tr className="total">
                                                        <td>
                                                            <h6 className="mb-0">Total</h6>
                                                        </td>
                                                        <td className="price">
                                                            $125.75
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <a href="shop-wishlist.html" className="btn btn-outline-secondary btn-icon m-b20">
                                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.24805 16.9986C8.99179 16.9986 8.74474 16.9058 8.5522 16.7371C7.82504 16.1013 7.12398 15.5038 6.50545 14.9767L6.50229 14.974C4.68886 13.4286 3.12289 12.094 2.03333 10.7794C0.815353 9.30968 0.248047 7.9162 0.248047 6.39391C0.248047 4.91487 0.755203 3.55037 1.67599 2.55157C2.60777 1.54097 3.88631 0.984375 5.27649 0.984375C6.31552 0.984375 7.26707 1.31287 8.10464 1.96065C8.52734 2.28763 8.91049 2.68781 9.24805 3.15459C9.58574 2.68781 9.96875 2.28763 10.3916 1.96065C11.2292 1.31287 12.1807 0.984375 13.2197 0.984375C14.6098 0.984375 15.8885 1.54097 16.8202 2.55157C17.741 3.55037 18.248 4.91487 18.248 6.39391C18.248 7.9162 17.6809 9.30968 16.4629 10.7792C15.3733 12.094 13.8075 13.4285 11.9944 14.9737C11.3747 15.5016 10.6726 16.1001 9.94376 16.7374C9.75136 16.9058 9.50417 16.9986 9.24805 16.9986ZM5.27649 2.03879C4.18431 2.03879 3.18098 2.47467 2.45108 3.26624C1.71033 4.06975 1.30232 5.18047 1.30232 6.39391C1.30232 7.67422 1.77817 8.81927 2.84508 10.1066C3.87628 11.3509 5.41011 12.658 7.18605 14.1715L7.18935 14.1743C7.81021 14.7034 8.51402 15.3033 9.24654 15.9438C9.98344 15.302 10.6884 14.7012 11.3105 14.1713C13.0863 12.6578 14.6199 11.3509 15.6512 10.1066C16.7179 8.81927 17.1938 7.67422 17.1938 6.39391C17.1938 5.18047 16.7858 4.06975 16.045 3.26624C15.3152 2.47467 14.3118 2.03879 13.2197 2.03879C12.4197 2.03879 11.6851 2.29312 11.0365 2.79465C10.4585 3.24179 10.0558 3.80704 9.81975 4.20255C9.69835 4.40593 9.48466 4.52733 9.24805 4.52733C9.01143 4.52733 8.79774 4.40593 8.67635 4.20255C8.44041 3.80704 8.03777 3.24179 7.45961 2.79465C6.811 2.29312 6.07643 2.03879 5.27649 2.03879Z" fill="black"></path>
                                                </svg>
                                                Add To Wishlist
                                            </a>
                                            <a href="shop-cart.html" className="btn btn-secondary w-100">ADD TO CART</a>
                                        </div>	
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="content-inner-3 pb-0"> 
                    <div className="container">
                        <div className="product-description">
                            <div className="dz-tabs">					
                                <ul className="nav nav-tabs center" id="myTab1" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Description</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Reviews (12)</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                                        <div className="detail-bx text-center">
                                            <h5 className="title">Flawless Denim Delights</h5>
                                            <p className="para-text">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            </p>
                                            <ul className="feature-detail">
                                                <li>
                                                    <i className="icon feather icon-check"></i>
                                                    <h5>Versatile, enduring style for all occasions</h5>
                                                </li>
                                                <li>
                                                    <i className="icon feather icon-check"></i>
                                                    <h5>Handcrafted Elegance, Comfort</h5>
                                                </li>
                                                <li>
                                                    <i className="icon feather icon-check"></i>
                                                    <h5>Versatile, enduring style for all occasions</h5>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="row g-lg-4 g-3">
                                            <div className="col-xl-4 col-md-4 col-sm-4 col-6">
                                                <div className="related-img dz-media">
                                                    <img src={assetsPath+"/pixio/images/feature/product-feature/1.png"} alt="/" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-4 col-sm-4 col-6">
                                                <div className="related-img dz-media">
                                                    <img src={assetsPath+"/pixio/images/feature/product-feature/2.png"} alt="/" />
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-4 col-sm-4">
                                                <div className="related-img dz-media">
                                                    <img src={assetsPath+"/pixio/images/feature/product-feature/3.png"} alt="/" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                        <div className="clear" id="comment-list">
                                            <div className="post-comments comments-area style-1 clearfix">
                                                <h4 className="comments-title mb-2">Comments (02)</h4>
                                                <p className="dz-title-text">There are many variations of passages of Lorem Ipsum available.</p>
                                                <div id="comment">
                                                    <ol className="comment-list">
                                                        <li className="comment even thread-even depth-1 comment" id="comment-2">
                                                            <div className="comment-body">
                                                            <div className="comment-author vcard">
                                                                    <img src={assetsPath+"/pixio/images/profile4.jpg"} alt="/" className="avatar" />
                                                                    <cite className="fn">Michel Poe</cite> 
                                                            </div>
                                                        <div className="comment-content dz-page-text">
                                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                        </div>
                                                        <div className="reply">
                                                            <a rel="nofollow" className="comment-reply-link" href="javascript:void(0);">Reply</a>
                                                        </div>
                                                    </div>
                                                    <ol className="children">
                                                        <li className="comment byuser comment-author-w3itexpertsuser bypostauthor odd alt depth-2 comment" id="comment-3">
                                                            <div className="comment-body" id="div-comment-3">
                                                                <div className="comment-author vcard">
                                                                <img src={assetsPath+"/pixio/images/profile3.jpg"} alt="/" className="avatar" />
                                                                <cite className="fn">Celesto Anderson</cite>
                                                                </div>
                                                                <div className="comment-content dz-page-text">
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                                </div>
                                                                <div className="reply">
                                                                <a className="comment-reply-link" href="javascript:void(0);"> Reply</a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                    </li>
                                                    <li className="comment even thread-odd thread-alt depth-1 comment" id="comment-4">
                                                        <div className="comment-body" id="div-comment-4">
                                                            <div className="comment-author vcard">
                                                                <img src={assetsPath+"/pixio/images/profile2.jpg"} alt="/" className="avatar" />
                                                                <cite className="fn">Monsur Rahman Lito</cite>
                                                            </div>
                                                            <div className="comment-content dz-page-text">
                                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                                            </div>
                                                            <div className="reply">
                                                                <a className="comment-reply-link" href="javascript:void(0);"> Reply</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </div>
                                            <div className="default-form comment-respond style-1" id="respond">
                                                <h4 className="comment-reply-title mb-2" id="reply-title">Good Comments</h4>
                                                <p className="dz-title-text">There are many variations of passages of Lorem Ipsum available.</p>
                                                <div className="comment-form-rating d-flex">
                                                    <label className="pull-left m-r10 m-b20  text-secondary">Your Rating</label>
                                                    <div className="rating-widget">
                                                        {/* Rating Stars Box */}
                                                        <div  className="rating-stars">
                                                            <ul id="stars">
                                                                <li className="star" title="Poor" data-value="1">
                                                                    <i className="fas fa-star fa-fw"></i>
                                                                </li>
                                                                <li className="star" title="Fair" data-value="2">
                                                                    <i className="fas fa-star fa-fw"></i>
                                                                </li>
                                                                <li className="star" title="Good" data-value="3">
                                                                    <i className="fas fa-star fa-fw"></i>
                                                                </li>
                                                                <li className="star" title="Excellent" data-value="4">
                                                                    <i className="fas fa-star fa-fw"></i>
                                                                </li>
                                                                <li className="star" title="WOW!!!" data-value="5">
                                                                    <i className="fas fa-star fa-fw"></i>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="clearfix">
                                                    <form method="post" id="comments_form" className="comment-form" novalidate>
                                                    <p className="comment-form-author"><input id="name" placeholder="Author" name="author" type="text" value="" /></p>
                                                    <p className="comment-form-email"><input id="email" required="required" placeholder="Email" name="email" type="email" value="" /></p>
                                                    <p className="comment-form-comment"><textarea id="comments" placeholder="Type Comment Here" className="form-control4" name="comment" cols="45" rows="3" required="required"></textarea></p>
                                                    <p className="col-md-12 col-sm-12 col-xs-12 form-submit">
                                                        <button id="submit" type="submit" className="submit btn btn-secondary btnhover3 filled">
                                                        Submit Now
                                                        </button>
                                                    </p>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="content-inner-1  overflow-hidden">
                    <div className="container">
                        <div className="section-head style-2 d-md-flex justify-content-between align-items-center">
                            <div className="left-content">
                                <h2 className="title mb-0">Related products</h2>
                            </div>
                            <a href="shop-list.html" className="text-secondary font-14 d-flex align-items-center gap-1">See all products
                                <i className="icon feather icon-chevron-right font-18"></i>
                            </a>			
                        </div>
                        <div className="swiper-btn-center-lr">
                            <div className="swiper swiper-four">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="shop-card style-1">
                                            <div className="dz-media">
                                                <img src={assetsPath+"/pixio/images/shop/product/1.png"} alt="image" />
                                                <div className="shop-meta">
                                                                <a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i className="fa-solid fa-eye d-md-none d-block"></i>
                                                                    <span className="d-md-block d-none">Quick View</span>
                                                                </a>
                                                                <div className="btn btn-primary meta-icon dz-wishicon">
                                                                    <i className="icon feather icon-heart dz-heart"></i>
                                                                    <i className="icon feather icon-heart-on dz-heart-fill"></i>
                                                                </div>
                                                                <div className="btn btn-primary meta-icon dz-carticon">
                                                                    <i className="flaticon flaticon-basket"></i>
                                                                    <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                                                                </div>
                                                            </div>								
                                            </div>
                                            <div className="dz-content">
                                                <h5 className="title"><a href="shop-list.html">Cozy Knit Cardigan Sweater</a></h5>
                                                <h5 className="price">$80</h5>
                                            </div>
                                            <div className="product-tag">
                                                <span className="badge ">Get 20% Off</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="shop-card style-1">
                                            <div className="dz-media">
                                                <img src={assetsPath+"/pixio/images/shop/product/2.png"} alt="image" />
                                                <div className="shop-meta">
                                                                <a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i className="fa-solid fa-eye d-md-none d-block"></i>
                                                                    <span className="d-md-block d-none">Quick View</span>
                                                                </a>
                                                                <div className="btn btn-primary meta-icon dz-wishicon">
                                                                    <i className="icon feather icon-heart dz-heart"></i>
                                                                    <i className="icon feather icon-heart-on dz-heart-fill"></i>
                                                                </div>
                                                                <div className="btn btn-primary meta-icon dz-carticon">
                                                                    <i className="flaticon flaticon-basket"></i>
                                                                    <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                                                                </div>
                                                            </div>								
                                            </div>
                                            <div className="dz-content">
                                                <h5 className="title"><a href="shop-list.html">Sophisticated Swagger Suit</a></h5>
                                                <h5 className="price">$80</h5>
                                            </div>
                                            <div className="product-tag">
                                                <span className="badge ">Get 20% Off</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="shop-card style-1">
                                            <div className="dz-media">
                                                <img src={assetsPath+"/pixio/images/shop/product/3.png"} alt="image" />
                                                <div className="shop-meta">
                                                                <a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i className="fa-solid fa-eye d-md-none d-block"></i>
                                                                    <span className="d-md-block d-none">Quick View</span>
                                                                </a>
                                                                <div className="btn btn-primary meta-icon dz-wishicon">
                                                                    <i className="icon feather icon-heart dz-heart"></i>
                                                                    <i className="icon feather icon-heart-on dz-heart-fill"></i>
                                                                </div>
                                                                <div className="btn btn-primary meta-icon dz-carticon">
                                                                    <i className="flaticon flaticon-basket"></i>
                                                                    <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                                                                </div>
                                                            </div>								
                                            </div>
                                            <div className="dz-content">
                                                <h5 className="title"><a href="shop-list.html">Classic Denim Skinny Jeans</a></h5>
                                                <h5 className="price">$80</h5>
                                            </div>
                                            <div className="product-tag">
                                                <span className="badge ">Get 20% Off</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="shop-card style-1">
                                            <div className="dz-media">
                                                <img src={assetsPath+"/pixio/images/shop/product/4.png"} alt="image" />
                                                <div className="shop-meta">
                                                                <a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i className="fa-solid fa-eye d-md-none d-block"></i>
                                                                    <span className="d-md-block d-none">Quick View</span>
                                                                </a>
                                                                <div className="btn btn-primary meta-icon dz-wishicon">
                                                                    <i className="icon feather icon-heart dz-heart"></i>
                                                                    <i className="icon feather icon-heart-on dz-heart-fill"></i>
                                                                </div>
                                                                <div className="btn btn-primary meta-icon dz-carticon">
                                                                    <i className="flaticon flaticon-basket"></i>
                                                                    <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                                                                </div>
                                                            </div>								
                                            </div>
                                            <div className="dz-content">
                                                <h5 className="title"><a href="shop-list.html">Athletic Mesh Sports Leggings</a></h5>
                                                <h5 className="price">$80</h5>
                                            </div>
                                            <div className="product-tag">
                                                <span className="badge ">Get 20% Off</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="shop-card style-1">
                                            <div className="dz-media">
                                                <img src={assetsPath+"/pixio/images/shop/product/5.png"} alt="image" />
                                                <div className="shop-meta">
                                                                <a href="javascript:void(0);" className="btn btn-secondary btn-md btn-rounded" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                    <i className="fa-solid fa-eye d-md-none d-block"></i>
                                                                    <span className="d-md-block d-none">Quick View</span>
                                                                </a>
                                                                <div className="btn btn-primary meta-icon dz-wishicon">
                                                                    <i className="icon feather icon-heart dz-heart"></i>
                                                                    <i className="icon feather icon-heart-on dz-heart-fill"></i>
                                                                </div>
                                                                <div className="btn btn-primary meta-icon dz-carticon">
                                                                    <i className="flaticon flaticon-basket"></i>
                                                                    <i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
                                                                </div>
                                                            </div>								
                                            </div>
                                            <div className="dz-content">
                                                <h5 className="title"><a href="shop-list.html">Vintage Denim Overalls Shorts</a></h5>
                                                <h5 className="price">$80</h5>
                                            </div>
                                            <div className="product-tag">
                                                <span className="badge ">Get 20% Off</span>
                                            </div>
                                        </div>
                                    </div>
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
                
            </div>
    	</>
	);
}