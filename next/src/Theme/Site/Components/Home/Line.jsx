export const Line = ({ items,mediaPath,assetsPath,local,Lang }) => {
	let delay = "0.8s";

    return(
		<>
			{/* About Section Start */}
			<section className="content-inner overflow-hidden">
				<div className="container">
					<div className="row about-style1">
						<div className="col-lg-6 col-md-12 m-b30">
							<div className="about-thumb wow fadeInUp  position-relative" data-wow-delay="0.2s">
								<div className="dz-media h-100">	
									<img src={mediaPath+"/category/"+items?.[0]?.image} alt=""/>
									{/* <img src={assetsPath+"/pixio/images/women.png"} alt=""/> */}
								</div>	
								<a href={`/${local}/products?line=${items?.[0]?.id}`} className="btn btn-outline-secondary btn-light btn-xl">{items?.[0]?.["title_"+local]}</a>	
							</div>
						</div>
						<div className="col-lg-6 col-md-12 align-self-center">
							<div className="about-content">
								<div className="section-head style-1 wow fadeInUp" data-wow-delay="0.4s">
									<h3 className="title ">{Lang("public.tilte_line")}</h3>
									<p>{Lang("public.text_line")}</p>
								</div>
								<a className="service-btn-2 wow fadeInUp" data-wow-delay="0.6s" href={`/${local}/products`} >
									<span className="icon-wrapper">
										<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12.832 31.1663L31.1654 12.833" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M12.832 12.833H31.1654V31.1663" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</span>
								</a>
								<div className="row">
									{items?.filter(item=>item?.id>1)?.map((item,index)=>{
										delay = parseFloat(delay+0.2);
										let delayNew = delay+"s";

										return(
											<div className="col-lg-6 col-md-6 col-sm-6" key={index}>
												<div className="shop-card style-6 wow fadeInUp" data-wow-delay={delayNew}>
													<div className="dz-media">
														<img src={mediaPath+"/category/"+item?.image} alt="image"/>
													</div>
													<div className="dz-content">
														<a href={`/${local}/products?line=${item?.id}`} className="btn btn-outline-secondary btn-light btn-md">{item?.["title_"+local]}</a>
													</div>
												</div>
											</div>);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* About Section End */}
    	</>
	);
}