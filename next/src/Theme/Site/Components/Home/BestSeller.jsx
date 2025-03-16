export const BestSeller = ({ items,mediaPath,Lang,local }) => {
	let delay = ["0.2s","0.3s","0.4s","0.6s"];

    return(
		<>
			{/* About Section */}
			<section className="content-inner overflow-hidden p-b0">
				<div className="container">
					<div className="row ">
						<div className="col-lg-6 col-md-12 align-self-center">
							<div className="row">
								{items?.map((item,index)=>{
									let classSpan = "text-success";
									let displayDiscount = Lang("public.free_delivery");
									let displayPrice = <> {"$"+item?.price} </>
									if(item?.discount>0)
									{
										classSpan = "";
										displayDiscount = <>{Lang("public.up_to")+" "+item?.discount+"%"+Lang("public.off")}</>;
										displayPrice = <>
											{"$"+item?.discount_price}
											<del>{"$"+item?.price}</del>
										</>
									}
									return(
										<div className="col-lg-6 col-md-6 col-sm-6 m-b30" key={index}>
											<div className="shop-card style-3 wow fadeInUp" data-wow-delay={delay}>
												<div className="dz-media">
													<img src={mediaPath+"/product/"+item?.image} alt="image"/>
												</div>
												<div className="dz-content">
													<div>
														<span className={"sale-title "+classSpan}>{displayDiscount}</span>
														<h6 className="title"><a href={`/${local}/products/${item.id}`}>{item?.name}</a></h6>
													</div>
													<h6 className="price">{displayPrice}</h6>
												</div>
											</div>
										</div>
									);
								})}
							</div>	
						</div>
						<div className="col-lg-6 col-md-12 m-b30">
							<div className="about-box style-1  clearfix h-100 right">
								<div className="dz-media h-100">
									<img src={mediaPath+"/siteText/pic1.jpg"} alt=""/>
									<div className="media-contant">
									<h2 className="title">{Lang("public.tilte_best")}</h2> 
										<h5 className="sub-title">{Lang("public.text_best")}</h5>
										<a href={`/${local}/products`} className="btn btn-white btn-lg">{Lang("public.see_all")}</a>
									</div>
									<svg className="title animation-text" viewBox="0 0 1320 300">
										<text x="0" y="">{Lang("public.animate_best")}</text>
									</svg>	
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* About Section */}
    	</>
	);
}