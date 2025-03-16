"use client"

import { useEffect,useState } from "react";
import Link from "next/link";
// import { useAuth } from "../Auth/auth";
import Img from "@/Theme/Site/Utils";
import { usePathname, useSearchParams } from "next/navigation";

export const Header = ({ params,menus,assetsPath,mediaPath,local }) => {
	// const { logout, user, mutate } = useAuth({ middleware: 'guest' })
	const { logout, user, mutate } = {};
	const pathname = usePathname();
	const searchParams = useSearchParams();
	let classHeader = (pathname=="/"+local)? " header-transparent" : "";
	let parentCategories = menus?.categories?.filter((category)=>category?.parent_id==0);
	let childCategories = menus?.categories?.filter((category)=>category?.parent_id>0);
	let subjects = menus?.subjects;
	let listMenus = [];
	let hrefMenus = [`/${local}`,`"#!"`,`"#!"`,`/${local}/about`,`/${local}/contact`];
	(local=="en")?
		listMenus = ['Home','Shop','Blog','About us','Contact us']
	:
		listMenus = ['خانه','فروشگاه','مطالب','درباره ما','ارتباط با ما']
		
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		handleMenu()
	}, [isOpen]);
	const toggleMenu = ()=>{
		setIsOpen(!isOpen); // تغییر وضعیت منو
	}
	const handleMenu = ()=>{
		if(isOpen)
		{
			// jQuery('.navicon').toggleClass('open');
			// jQuery('#navbarNavDropdown').toggleClass('show');
			typeof window != "undefined" && window?.$('.navicon').addClass('open');
			typeof window != "undefined" && window?.$('#navbarNavDropdown').addClass('show');
		}
		else if(!isOpen && $('#navbarNavDropdown').hasClass('show'))
		{
        	typeof window != "undefined" && window?.$('.navicon').removeClass('open');
        	typeof window != "undefined" && window?.$('#navbarNavDropdown').removeClass('show');
		}
	}
	

	return(
		<>
			<header id="top-menu" className={"site-header mo-left header style-1"+classHeader}>		
				<div className="sticky-header main-bar-wraper navbar-expand-lg">
					<div className="main-bar clearfix">
						<div className="container-fluid clearfix d-lg-flex d-block">
							<div className="logo-header logo-dark me-md-5">
								<Link href={`/${local}`}><img src={`${assetsPath}/pixio/images/logo.svg`} alt="logo"/></Link>
							</div>
							{/* <!-- Nav Toggle Button --> */}
							{/* <button class="navbar-toggler collapsed navicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"> */}
							<button class="navbar-toggler collapsed navicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"
							 onClick={toggleMenu}
							>
								<span></span>
								<span></span>
								<span></span>
							</button>
							{/* <!-- Main Nav --> */}
							{/* <div className="header-nav w3menu navbar-collapse collapse justify-content-start" id="navbarNavDropdown"> */}
							<div className="header-nav w3menu navbar-collapse collapse justify-content-start" id="navbarNavDropdown">
								<div className="logo-header logo-dark">
									<a href={hrefMenus[0]}><img src={`${assetsPath}/pixio/images/logo.svg`} alt=""/></a>
								</div>
								<ul className="nav navbar-nav">
									<li className="has-mega-menu sub-menu-down auto-width menu-left">
										<Link href={hrefMenus[0]}><span>{listMenus[0]}</span><i className="fas fa-chevron-down tabIndex" ></i></Link>
									</li>
									<li className="has-mega-menu sub-menu-down auto-width">
										<a href={hrefMenus[1]}><span>{listMenus[1]}</span><i className="fas fa-chevron-down tabIndex"></i></a>
										<div className="mega-menu">
											<ul>
												{parentCategories?.map((category,index)=>{
													return(
														<li className="post-menu" key={index}>
															<a href={`/${local}/products?line=${category?.id}`} className="menu-title">{category?.["title_"+local]}</a>
															<div className="widget widget_post pt-2">
																<ul>
																	{childCategories?.filter(child=>child?.parent_id==category?.id)?.map((child,i)=>{
																		return(
																			<li key={i}>
																				<div className="dz-media">
																					<img src={mediaPath+"/category/"+child?.image} alt=""/>
																				</div>
																				<div className="dz-content">
																					<h6 className="name"><a href={`/${local}/products?category=${child?.id}`}>{child?.["title_"+local]}</a></h6>
																					<span className="time">{"("+child?.count_product+")"}</span>
																				</div>
																			</li>
																		);
																	})}
																</ul>
															</div>
														</li>
													);
												})}
											</ul>
										</div>
									</li>
									<li className="has-mega-menu sub-menu-down">
										<a href={hrefMenus[2]}><span>{listMenus[2]}</span><i className="fas fa-chevron-down tabIndex"></i></a>
										<div className="mega-menu portfolio-menu">
											<ul>
												<li className="side-left">
													<ul className="portfolio-nav-link">
														{subjects?.map((subject,index)=>{
															return(
																<li key={index}>
																	<a href={`/${local}/blog?subject=${subject?.id}`}>
																		<img src={mediaPath+"/subject/"+subject?.image} alt=""/>
																		<span>{subject?.["title_"+local]}</span>
																	</a>
																</li>
															);
														})}
													</ul>
												</li>
											</ul>
										</div>
									</li>
									{/* <li className="has-mega-menu sub-menu-down auto-width">
										<a href={hrefMenus[2]}><span>{listMenus[2]}</span><i className="fas fa-chevron-down tabIndex"></i></a>
										<div className="mega-menu">
											<ul>
												{subjects?.map((subject,index)=>{
													return(
														<li key={index}>
															<a href="#!" className="menu-title">Blog Dark Style</a>
															<ul>
																<li><a href="blog-dark-2-column.html">{subject?.["title_"+local]}</a></li>
															</ul>
														</li>
													);
												})}
											</ul>
										</div>
									</li> */}
									<li className="has-mega-menu sub-menu-down auto-width menu-left">
										<Link href={hrefMenus[3]}><span>{listMenus[3]}</span><i className="fas fa-chevron-down tabIndex" ></i></Link>
									</li>
									<li className="has-mega-menu sub-menu-down auto-width menu-left">
										<a href={hrefMenus[4]}><span>{listMenus[4]}</span><i className="fas fa-chevron-down tabIndex" ></i></a>
									</li>
								</ul>
								{/* <div className="dz-social-icon">
									<ul>
										<li><a className="fab fa-facebook-f" target="_blank" href="../../https@www.facebook.com/dexignzone"></a></li>
										<li><a className="fab fa-twitter" target="_blank" href="../../https@twitter.com/dexignzones"></a></li>
										<li><a className="fab fa-linkedin-in" target="_blank" href="../../https@www.linkedin.com/showcase/3686700/admin/default.htm"></a></li>
										<li><a className="fab fa-instagram" target="_blank" href="../../https@www.instagram.com/dexignzone/default.htm"></a></li>
									</ul>
								</div> */}
							</div>
							{/* <div className="extra-nav">
								<div className="extra-cell">						
									<ul className="header-right">
										<li className="nav-item search-link">
											<a className="nav-link" href="#!" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
												<i className="iconly-Light-Search"></i>
											</a>
										</li>
									</ul>
								</div>
							</div> */}
						</div>
					</div>
				</div>
				<div className="dz-search-area dz-offcanvas offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop">
					<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
						&times;
					</button>
					<div className="container">
						<form className="header-item-search">
							<div className="input-group search-input">
								<select className="default-select">
									<option>All Categories</option>
									<option>Clothes</option>
									<option>UrbanSkirt</option>
									<option>VelvetGown</option>
									<option>LushShorts</option>
									<option>Vintage</option>
									<option>Wedding</option>
									<option>Cotton</option>
									<option>Linen</option>
									<option>Navy</option>
									<option>Urban</option>
									<option>Business Meeting</option>
									<option>Formal</option>
								</select>
								<input type="search" className="form-control" placeholder="Search Product"/>
								<button className="btn" type="button">
									<i className="iconly-Light-Search"></i>
								</button>
							</div>
							<ul className="recent-tag">
								<li className="pe-0"><span>Quick Search :</span></li>
								<li><a href="shop-list.html">Clothes</a></li>
								<li><a href="shop-list.html">UrbanSkirt</a></li>
								<li><a href="shop-list.html">VelvetGown</a></li>
								<li><a href="shop-list.html">LushShorts</a></li>
							</ul>
						</form>
						<div className="row">
							<div className="col-xl-12">
								<h5 className="mb-3">You May Also Like</h5>
								<div className="swiper category-swiper2">
									<div className="swiper-wrapper">
										<div className="swiper-slide">
											<div className="shop-card">
												<div className="dz-media ">
													<img src={`${assetsPath}/pixio/images/shop/product/1.png`} alt="image"/>
												</div>
												<div className="dz-content">
													<h6 className="title"><a href="shop-list.html">SilkBliss Dress</a></h6>
													<h6 className="price">$40.00</h6>
												</div>
											</div>
										</div>
										<div className="swiper-slide">
											<div className="shop-card">
												<div className="dz-media ">
													<img src={`${assetsPath}/pixio/images/shop/product/3.png`} alt="image"/>
												</div>
												<div className="dz-content">
													<h6 className="title"><a href="shop-list.html">GlamPants</a></h6>
													<h6 className="price">$30.00</h6>
												</div>
											</div>
										</div>
										<div className="swiper-slide">
											<div className="shop-card">
												<div className="dz-media ">
													<img src={`${assetsPath}/pixio/images/shop/product/4.png`} alt="image"/>
												</div>
												<div className="dz-content">
													<h6 className="title"><a href="shop-list.html">ComfyLeggings</a></h6>
													<h6 className="price">$35.00</h6>
												</div>
											</div>
										</div>
										<div className="swiper-slide">
											<div className="shop-card">
												<div className="dz-media ">
													<img src={`${assetsPath}/pixio/images/shop/product/2.png`} alt="image"/>
												</div>
												<div className="dz-content">
													<h6 className="title"><a href="shop-list.html">ClassicCapri</a></h6>
													<h6 className="price">$20.00</h6>
												</div>
											</div>
										</div>
										<div className="swiper-slide">
											<div className="shop-card">
												<div className="dz-media ">
													<img src={`${assetsPath}/pixio/images/shop/product/5.png`} alt="image"/>
												</div>
												<div className="dz-content">
													<h6 className="title"><a href="shop-list.html">DapperCoat</a></h6>
													<h6 className="price">$70.00</h6>
												</div>
											</div>
										</div>
										<div className="swiper-slide">
											<div className="shop-card">
												<div className="dz-media ">
													<img src={`${assetsPath}/pixio/images/shop/product/6.png`} alt="image"/>
												</div>
												<div className="dz-content">
													<h6 className="title"><a href="shop-list.html">ComfyLeggings</a></h6>
													<h6 className="price">$45.00</h6>
												</div>
											</div>
										</div>
										<div className="swiper-slide">
											<div className="shop-card">
												<div className="dz-media ">
													<img src={`${assetsPath}/pixio/images/shop/product/7.png`} alt="image"/>	
												</div>
												<div className="dz-content">
													<h6 className="title"><a href="shop-list.html">DenimDream Jeans</a></h6>
													<h6 className="price">$40.00</h6>
												</div>
											</div>
										</div>
										<div className="swiper-slide">
											<div className="shop-card">
												<div className="dz-media ">
													<img src={`${assetsPath}/pixio/images/shop/product/4.png`} alt="image"/>	
												</div>
												<div className="dz-content">
													<h6 className="title"><a href="shop-list.html">SilkBliss Dress</a></h6>
													<h6 className="price">$60.00</h6>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="offcanvas dz-offcanvas offcanvas offcanvas-end " tabIndex="-1" id="offcanvasRight">
					<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
						&times;
					</button>
					<div className="offcanvas-body">
						<div className="product-description">
							<div className="dz-tabs">
								<ul className="nav nav-tabs center" id="myTab" role="tablist">
									<li className="nav-item" role="presentation">
										<button className="nav-link active" id="shopping-cart" data-bs-toggle="tab" data-bs-target="#shopping-cart-pane" type="button" role="tab" aria-controls="shopping-cart-pane" aria-selected="true">Shopping Cart
											<span className="badge badge-light">5</span>
										</button>
									</li>
									<li className="nav-item" role="presentation">
										<button className="nav-link" id="wishlist" data-bs-toggle="tab" data-bs-target="#wishlist-pane" type="button" role="tab" aria-controls="wishlist-pane" aria-selected="false">Wishlist
											<span className="badge badge-light">2</span>
										</button>
									</li>
								</ul>
								<div className="tab-content pt-4" id="dz-shopcart-sidebar">
									<div className="tab-pane fade show active" id="shopping-cart-pane" role="tabpanel" aria-labelledby="shopping-cart" tabIndex="0">
										<div className="shop-sidebar-cart">
											<ul className="sidebar-cart-list">
												<li>
													<div className="cart-widget">
														<div className="dz-media me-3">
															<img src={`${assetsPath}/pixio/images/shop/shop-cart/pic1.jpg`} alt=""/>
														</div>
														<div className="cart-content">
															<h6 className="title"><a href="product-thumbnail.html">Sophisticated Swagger Suit</a></h6>
															<div className="d-flex align-items-center">
																<div className="btn-quantity light quantity-sm me-3">
																	<input type="text" defaultValue="1" name="demo_vertical2"/>
																</div>
																<h6 className="dz-price mb-0">$50.00</h6>
															</div>
														</div>
														<a href="#!" className="dz-close">
															<i className="ti-close"></i>
														</a>
													</div>
												</li>
												<li>
													<div className="cart-widget">
														<div className="dz-media me-3">
															<img src={`${assetsPath}/pixio/images/shop/shop-cart/pic2.jpg`} alt=""/>
														</div>
														<div className="cart-content">
															<h6 className="title"><a href="product-thumbnail.html">Cozy Knit Cardigan Sweater</a></h6>
															<div className="d-flex align-items-center">
																<div className="btn-quantity light quantity-sm me-3">
																	<input type="text" defaultValue="1" name="demo_vertical2"/>
																</div>
																<h6 className="dz-price mb-0">$40.00</h6>
															</div>
														</div>
														<a href="#!" className="dz-close">
															<i className="ti-close"></i> 
														</a>
													</div>
												</li>
												<li>
													<div className="cart-widget">
														<div className="dz-media me-3">
															<img src={`${assetsPath}/pixio/images/shop/shop-cart/pic3.jpg`} alt=""/>
														</div>
														<div className="cart-content">
															<h6 className="title"><a href="product-thumbnail.html">Athletic Mesh Sports Leggings</a></h6>
															<div className="d-flex align-items-center">
																<div className="btn-quantity light quantity-sm me-3">
																	<input type="text" defaultValue="1" name="demo_vertical2"/>
																</div>
																<h6 className="dz-price  mb-0">$65.00</h6>
															</div>
														</div>
														<a href="#!" className="dz-close">
															<i className="ti-close"></i>
														</a>
													</div>
												</li>	
											</ul>
											<div className="cart-total">
												<h5 className="mb-0">Subtotal:</h5>
												<h5 className="mb-0">300.00$</h5>
											</div>
											<div className="mt-auto">
												<div className="shipping-time">													
													<div className="dz-icon">
														<i className="flaticon flaticon-ship"></i>
													</div>
													<div className="shipping-content">
														<h6 className="title pe-4">Congratulations , you've got free shipping!</h6>
														<div className="progress">
															<div className="progress-bar progress-animated border-0" style={{width: "75%"}} role="progressbar">
															{/* <div className="progress-bar progress-animated border-0" style="width: 75%;" role="progressbar"> */}
																<span className="sr-only">75% Complete</span>
															</div>
														</div>
													</div>
												</div>
												<a href="shop-checkout.html" className="btn btn-outline-secondary btn-block m-b20">Checkout</a>	
												<a href="shop-cart.html" className="btn btn-secondary btn-block">View Cart</a>	
											</div>	
										</div>	
									</div>
									<div className="tab-pane fade" id="wishlist-pane" role="tabpanel" aria-labelledby="wishlist" tabIndex="0">
										<div className="shop-sidebar-cart">
											<ul className="sidebar-cart-list">
												<li>
													<div className="cart-widget">
														<div className="dz-media me-3">
															<img src={`${assetsPath}/pixio/images/shop/shop-cart/pic1.jpg`} alt=""/>
														</div>
														<div className="cart-content">
															<h6 className="title"><a href="product-thumbnail.html">Sophisticated Swagger Suit</a></h6>
															<div className="d-flex align-items-center">
																<h6 className="dz-price  mb-0">$50.00</h6>
															</div>
														</div>
														<a href="#!" className="dz-close">
															<i className="ti-close"></i>
														</a>
													</div>
												</li>
												<li>
													<div className="cart-widget">
														<div className="dz-media me-3">
															<img src={`${assetsPath}/pixio/images/shop/shop-cart/pic2.jpg`} alt=""/>
														</div>
														<div className="cart-content">
															<h6 className="title"><a href="product-thumbnail.html">Cozy Knit Cardigan Sweater</a></h6>
															<div className="d-flex align-items-center">
																<h6 className="dz-price  mb-0">$40.00</h6>
															</div>
														</div>
														<a href="#!" className="dz-close">
															<i className="ti-close"></i> 
														</a>
													</div>
												</li>
												<li>
													<div className="cart-widget">
														<div className="dz-media me-3">
															<img src={`${assetsPath}/pixio/images/shop/shop-cart/pic3.jpg`} alt=""/>
														</div>
														<div className="cart-content">
															<h6 className="title"><a href="product-thumbnail.html">Athletic Mesh Sports Leggings</a></h6>
															<div className="d-flex align-items-center">
																<h6 className="dz-price  mb-0">$65.00</h6>
															</div>
														</div>
														<a href="#!" className="dz-close">
															<i className="ti-close"></i>
														</a>
													</div>
												</li>	
											</ul>
											<div className="mt-auto">
												<a href="shop-wishlist.html" className="btn btn-secondary btn-block">Check Your Favourite</a>
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="offcanvas dz-offcanvas offcanvas offcanvas-end " tabIndex="-1" id="offcanvasLeft">
					<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
						&times;
					</button>
					<div className="offcanvas-body">
						<div className="product-description">
							<div className="widget widget_search">
								<div className="form-group">
									<div className="input-group">
										<input name="dzSearch" required="required" type="search" className="form-control" placeholder="Search Product"/>
										<div className="input-group-addon">
											<button name="submit" defaultValue="Submit" type="submit" className="btn">
												<i className="icon feather icon-search"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="widget">
								<h6 className="widget-title">Price</h6>
								<div className="price-slide range-slider">
									<div className="price">
										<div className="range-slider style-1">
											<div id="slider-tooltips" className="mb-3"></div>
											<span className="example-val" id="slider-margin-value-min"></span>
											<span className="example-val" id="slider-margin-value-max"></span>
										</div>
									</div>
								</div>
							</div>
							<div className="widget">
								<h6 className="widget-title">Color</h6>
								<div className="d-flex align-items-center flex-wrap color-filter ps-2">
									<div className="form-check">
										<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" defaultValue="#000000" aria-label="..." defaultChecked={true} />
										<span></span>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2" defaultValue="#9BD1FF" aria-label="..."/>
										<span></span>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel3" defaultValue="#21B290" aria-label="..."/>
										<span></span>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel4" defaultValue="#FEC4C4" aria-label="..."/>
										<span></span>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel5" defaultValue="#FF7354" aria-label="..."/>
										<span></span>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel6" defaultValue="#51EDC8" aria-label="..."/>
										<span></span>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel7" defaultValue="#B77CF3" aria-label="..."/>
										<span></span>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel8" defaultValue="#FF4A76" aria-label="..."/>
										<span></span>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel9" defaultValue="#3E68FF" aria-label="..."/>
										<span></span>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabe20" defaultValue="#7BEF68" aria-label="..."/>
										<span></span>
									</div>
								</div>
							</div>

							<div className="widget">
								<h6 className="widget-title">Size</h6>
								<div className="btn-group product-size">
									<input type="radio" className="btn-check" name="btnradio1" id="btnradio11" defaultChecked=""/>
									<label className="btn" htmlFor="btnradio11">4</label>

									<input type="radio" className="btn-check" name="btnradio1" id="btnradio21"/>
									<label className="btn" htmlFor="btnradio21">6</label>

									<input type="radio" className="btn-check" name="btnradio1" id="btnradio31"/>
									<label className="btn" htmlFor="btnradio31">8</label>
									
									<input type="radio" className="btn-check" name="btnradio1" id="btnradio41"/>
									<label className="btn" htmlFor="btnradio41">10</label>
									
									<input type="radio" className="btn-check" name="btnradio1" id="btnradio51"/>
									<label className="btn" htmlFor="btnradio51">12</label>
									
									<input type="radio" className="btn-check" name="btnradio1" id="btnradio61"/>
									<label className="btn" htmlFor="btnradio61">14</label>
									
									<input type="radio" className="btn-check" name="btnradio1" id="btnradio71"/>
									<label className="btn" htmlFor="btnradio71">16</label>
									
									<input type="radio" className="btn-check" name="btnradio1" id="btnradio81"/>
									<label className="btn" htmlFor="btnradio81">18</label>
									
									<input type="radio" className="btn-check" name="btnradio1" id="btnradio91"/>
									<label className="btn" htmlFor="btnradio91">20</label>
								</div>
							</div>
							<div className="widget widget_categories">
								<h6 className="widget-title">Category</h6>
								<ul>
									<li className="cat-item cat-item-26"><a href="blog-category.html">Dresses</a> (10)</li>
									<li className="cat-item cat-item-36"><a href="blog-category.html">Top &amp; Blouses</a> (5)</li>
									<li className="cat-item cat-item-43"><a href="blog-category.html">Boots</a> (17)</li>
									<li className="cat-item cat-item-27"><a href="blog-category.html">Jewelry</a> (13)</li>
									<li className="cat-item cat-item-40"><a href="blog-category.html">Makeup</a> (06)</li> 
									<li className="cat-item cat-item-40"><a href="blog-category.html">Fragrances</a> (17)</li> 
									<li className="cat-item cat-item-40"><a href="blog-category.html">Shaving &amp; Grooming</a> (13)</li> 
									<li className="cat-item cat-item-43"><a href="blog-category.html">Jacket</a> (06)</li> 
									<li className="cat-item cat-item-36"><a href="blog-category.html">Coat</a> (22)</li> 
								</ul>
							</div>

							<div className="widget widget_tag_cloud">
								<h6 className="widget-title">Tags</h6>
								<div className="tagcloud"> 
									<a href="blog-tag.html">Vintage </a>
									<a href="blog-tag.html">Wedding</a>
									<a href="blog-tag.html">Cotton</a>
									<a href="blog-tag.html">Linen</a>
									<a href="blog-tag.html">Navy</a>
									<a href="blog-tag.html">Urban</a>
									<a href="blog-tag.html">Business Meeting</a>
									<a href="blog-tag.html">Formal</a>
								</div>
							</div>
							<a href="#!" className="btn btn-sm font-14 btn-secondary btn-sharp">RESET</a>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}