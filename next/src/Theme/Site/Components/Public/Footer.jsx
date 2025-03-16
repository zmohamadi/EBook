import Link from "next/link";
import Script from 'next/script'
import { useLang } from "@/lib";

export const Footer = ({ data,assetsPath,mediaPath,local }) => {
	const { Lang } = useLang();

	let parentCategories = data?.categories?.filter((category)=>category?.parent_id==0);
	let subjects = data?.subjects;
	let blogs = data?.blogs;

	return(
		<>
		    <button className="scroltop" type="button"><i className="fas fa-arrow-up"></i></button>	
			{/* Footer */}
			<footer className="site-footer style-1">
				{/* Footer Top */}
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-xl-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.1s">
								<div className="widget widget_about me-2">
									<div className="footer-logo logo-white">
										<Link href={`/${local}`}><img src={`${assetsPath}/pixio/images/logo.svg`} alt="logo"/></Link>
									</div>
									<ul className="widget-address">
										<li>
											<p><span>{Lang('public.address')}</span> : {Lang('public.address_info')}</p>
										</li>
										<li>
											<p><span>{Lang('public.email')}</span> : {Lang('public.email_info')}</p>
										</li>
										<li>
											<p><span>{Lang('public.tel')}</span> : {Lang('public.tel_info')}</p>
										</li>
									</ul>
									{/* <div className="subscribe_widget">
										<h6 className="title fw-medium text-capitalize">subscribe to our newsletter</h6>	
										<form className="dzSubscribe style-1" action="script/mailchamp.php" method="post">
											<div className="dzSubscribeMsg"></div>
											<div className="form-group">
												<div className="input-group mb-0">
													<input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email Address"/>
													<div className="input-group-addon">
														<button name="submit" defaultValue="Submit" type="submit" className="btn">
															<i className="icon feather icon-arrow-right"></i>
														</button>
													</div>
												</div>
											</div>
										</form>
									</div> */}
								</div>
							</div>
							<div className="col-xl-4 col-md-4 col-sm-4 col-6 wow fadeInUp" data-wow-delay="0.3s">
								<div className="widget widget_services">
									<h5 className="footer-title">{Lang('public.shop')}</h5>
									<ul>
										{parentCategories?.map((item,index)=>
										{
											return(
												<li key={index}>
													<Link href={`/${local}/products?line=${item.id}`}>{item?.["title_"+local]}</Link>
												</li>
											);
										})}
									</ul>   
								</div>
							</div>
							<div className="col-xl-4 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.2s">
								<div className="widget widget_post">
									<h5 className="footer-title">{Lang('public.last')} {Lang('public.blog')}</h5>
									<ul>
										{blogs?.map((blog, index)=>
										{
											return(
												<li key={index}>
													<div className="dz-media">
														<img src={mediaPath+"/blog/"+blog?.thumb} alt={blog?.title}/>
													</div>
													<div className="dz-content">
														<h6 className="name">
															<Link href={`/${local}/blog/${blog?.id}`}>
																{blog?.title}
															</Link>
														</h6>
														<span className="time">{blog?.created_at}</span>
													</div>
												</li>
											);
										})}
									</ul>
								</div>
							</div>
							{/* <div className="col-xl-2 col-md-4 col-sm-4 col-6 wow fadeInUp" data-wow-delay="0.4s">
								<div className="widget widget_services">
									<h5 className="footer-title">Useful Links</h5>
									<ul>
										<li><a href="#!">Privacy Policy</a></li>
										<li><a href="#!">Returns</a></li>
										<li><a href="#!">Terms & Conditions</a></li>
										<li><a href="#!">Contact Us</a></li>
										<li><a href="#!">Latest News</a></li>
										<li><a href="#!">Our Sitemap</a></li>
									</ul>
								</div>
							</div> */}
							{/* <div className="col-xl-2 col-md-4 col-sm-4 wow fadeInUp" data-wow-delay="0.5s">
								<div className="widget widget_services">
									<h5 className="footer-title">Footer Menu</h5>
									<ul>
										<li><a href="#!">Instagram profile</a></li>
										<li><a href="#!">New Collection</a></li>
										<li><a href="#!">Woman Dress</a></li>
										<li><a href="#!">Contact Us</a></li>
										<li><a href="#!">Latest News</a></li>
									</ul>
								</div>
							</div> */}
						</div>
					</div>
				</div>
				{/* Footer Top End */}
				{/* Footer Bottom */}
				<div className="footer-bottom">
					<div className="container">
						<div className="row fb-inner wow fadeInUp" data-wow-delay="0.1s">
							<div className="col-lg-12 col-md-12 text-center"> 
								<p className="copyright-text">© <span className="current-year">1403</span> 
								<a href="/">{Lang('public.main_title_info')}</a> {Lang('public.copyright')}</p>
							</div>
							{/* <div className="col-lg-6 col-md-12 text-end"> 
								<div className="d-flex align-items-center justify-content-center justify-content-md-center justify-content-xl-end">
									<span className="me-3">We Accept: </span>
									<img src={assetsPath+"/pixio/images/shop/product/small/1.png"} alt=""/>
								</div>
							</div> */}
						</div>
					</div>
				</div>
				{/* Footer Bottom End */}	
			</footer>
			{/* Footer End */}

			{/* <Script id='jquery.min.js' src={assetsPath + '/pixio/js/jquery.min.js'} strategy='afterInteractive' /> */}
			<Script src={`${assetsPath}/pixio/vendor/wow/wow.min.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/bootstrap/dist/js/bootstrap.bundle.min.js`} strategy='beforeInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/bootstrap-select/dist/js/bootstrap-select.min.js`} strategy='beforeInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/bootstrap-touchspin/bootstrap-touchspin.js`} strategy='beforeInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/swiper/swiper-bundle.min.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/magnific-popup/magnific-popup.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/imagesloaded/imagesloaded.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/masonry/masonry-4.2.2.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/masonry/isotope.pkgd.min.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/countdown/jquery.countdown.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/wnumb/wNumb.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/nouislider/nouislider.min.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/slick/slick.min.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/lightgallery/dist/lightgallery.min.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/lightgallery/dist/plugins/thumbnail/lg-thumbnail.min.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/lightgallery/dist/plugins/zoom/lg-zoom.min.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/vendor/group-slide/group-loop.js`} strategy='afterInteractive' />
			<Script src={`${assetsPath}/pixio/js/dz.carousel.js`} strategy='afterInteractive' />
			{/* <Script src={`${assetsPath}/pixio/js/dz.ajax.js`} strategy='afterInteractive' /> */}
			<Script src={`${assetsPath}/pixio/js/custom.js`} strategy='afterInteractive' />
		</>
	);
}