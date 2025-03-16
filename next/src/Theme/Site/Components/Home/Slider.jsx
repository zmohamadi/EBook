export const Slider = ({ items,mediaPath,Lang,local }) => {
		
    return(
		<>
			<div className="main-slider style-1">
				<div className="container-fluid">
					<div className="banner-content">
						<div className="row">
							<div className="col-lg-6">
								<div className="swiper-container main-swiper h-100">
									<div className="swiper-wrapper">
										{items?.map((item,index)=>{
											return(
												<div className="swiper-slide" key={index}>
													<div className="swiper-content">
														<div className="content-info">
															<h1 className="title  wow fadeInUp" data-wow-delay="0.2s">{item?.title}</h1>
															<div className="swiper-meta-items">
																<div className="meta-content wow fadeInUp" data-wow-delay="0.4s">
																	<span className="price-name">{Lang("public.price")}</span>
																	<span className="price-num d-inline-block">{item?.price}</span>
																</div>
															</div>
															<div className="content-btn m-b30 wow fadeInUp" data-wow-delay="0.8s">
																<a href={`/${local}${item?.link}`} className="btn btn-secondary me-xl-3 me-2 btnhover20">{item?.btn}</a>
																<a href={`/${local}${item?.link_2}`} className="btn btn-outline-secondary btnhover20">{item?.btn_2}</a>
															</div>
														</div>
													</div>
												</div>
											);
										})}
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="swiper-container main-swiper-thumb">
									<div className="swiper-wrapper">
										{items?.map((item,index)=>{
											return(
												<div className="swiper-slide" key={index}>
													{/* <div className="banner-media" data-name="Winter"> */}
													<div className="banner-media" data-name={item?.title_2}>
														<div className="img-preview">
															<img src={mediaPath+"/slider/"+item?.image} alt="banner-media"/>
														</div>
													</div>
												</div>
											);
										})}
									</div>
									<div className="pagination-align style-1">
										<div className="swiper-button-next icon feather icon-arrow-right"></div>
									</div>
								</div>
							</div>
						</div>
						<div className="bottom-content align-items-end wow fadeInUp" data-wow-delay="1.0s">
							<svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none">
								<path d="M52.6617 37.6496L58.7381 40.0325L75.0609 49.0874L66.6016 63.7422L49.9214 54.6872L45.1557 50.7554L46.1088 57.1892V75.18H28.952V57.1892L30.0243 50.5171L24.9011 54.6872L8.45924 63.7422L0 49.0874L16.3228 39.7942L22.3991 37.6496L16.3228 35.1475L0 26.2117L8.45924 11.557L25.1394 20.4928L30.0243 24.6629L28.952 18.3482V0H46.1088V18.3482L45.1557 24.4246L49.9214 20.4928L66.6016 11.557L75.0609 26.2117L58.7381 35.3858L52.6617 37.6496Z" fill="black" />
							</svg>
							<div>
								<span className="sub-title">{Lang("public.tilte_slider")}</span>
								<h4 className="title">{Lang("public.text_slider")}</h4>
							</div>
						</div>
					</div>
				</div>
				<svg className="star-1" xmlns="http://www.w3.org/2000/svg" width="94" height="94" viewBox="0 0 94 94" fill="none">
					<path d="M47 0L53.8701 30.4141L80.234 13.766L63.5859 40.1299L94 47L63.5859 53.8701L80.234 80.234L53.8701 63.5859L47 94L40.1299 63.5859L13.766 80.234L30.4141 53.8701L0 47L30.4141 40.1299L13.766 13.766L40.1299 30.4141L47 0Z" fill="#FEEB9D" />
				</svg>
				<svg className="star-2" xmlns="http://www.w3.org/2000/svg" width="82" height="94" viewBox="0 0 82 94" fill="none">
					<path d="M41 0L45.277 39.592L81.7032 23.5L49.554 47L81.7032 70.5L45.277 54.408L41 94L36.723 54.408L0.296806 70.5L32.446 47L0.296806 23.5L36.723 39.592L41 0Z" fill="black" />
				</svg>
				<a className="animation-btn popup-youtube" href="../../../https@www.youtube.com/watch@v=YwYoyQ1JdpQ">
					<div className="text-row word-rotate-box c-black">
						{/* <span className="word-rotate"> More Collection Explore </span> */}
						<span className="word-rotate"> {Lang("public.rotating_slider")} </span>
						<i className="fa-solid fa-play text-dark badge__emoji"></i>
					</div>
				</a>
			</div>
    	</>
	);
}