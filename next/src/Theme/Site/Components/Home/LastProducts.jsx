import { useEffect } from "react";
import { Cart } from "@/Theme/Site/Components/Public/Cart";
import { Like } from "@/Theme/Site/Components/Public/Like";
import { QuickView } from "@/Theme/Site/Components/Public/QuickView";
import { ProductGrid } from "@/Theme/Site/Components/Cards/ProductGrid";

export const LastProducts = ({ items,categories,mediaPath,local,Lang }) => {
	let delay = ["0.6s","0.8s","1.0s","1.2s","0.2s","0.4s","0.6s","2.0s"];
	let classLi = ["Tops","Dresses","Dresses","Tops","Dresses","Outerwear","Dresses","Tops"];
	
	useEffect(() => {
		// loadCategory()
	}, []);
	
	const loadCategory = () => {
		if(window.Pixio){
			window.Pixio && window.Pixio.load();
		}else{
			setTimeout(loadCategory, 1000)
		}
	}
	const masonryBox =()=>{
		console.log("masonryBox");
		// if (jQuery('#masonry, .masonry').length > 0) {
			var self = jQuery("#masonry, .masonry");
		// 	var filterValue = "";
		// }
		// if (jQuery('.filters').length > 0) {
			jQuery(".filters li").on('click', function () {

				jQuery('.filters li').removeClass('active');
				jQuery(this).addClass('active');

				var filterValue = $(this).attr("data-filter");

				self.isotope({
					filter: filterValue,
				});
			});
		// }
	}

    return(
		<>
			{/* Products  Section Start */}
			<section className="content-inner">
				<div className="container">
					<div className=" row justify-content-md-between align-items-start">
						<div className="col-lg-6 col-md-12">
							<div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.2s">
								<div className="left-content">
									<h2 className="title">{Lang("public.last_products")}</h2>
								</div>
							</div>	
						</div>
						{/* <div className="col-lg-6 col-md-12">
							<div className="site-filters clearfix style-1 align-items-center wow fadeInUp ms-lg-auto" data-wow-delay="0.4s">
								<ul className="filters" data-bs-toggle="buttons">
									<li className="btn active">
										<input type="radio"/>
										<a href="#!" >{Lang("public.ALL")}</a> 
									</li>
									{categories?.map((category, i)=>{
										if(i <= 3)
											return(
												<li data-filter={"."+category?.["title_"+local]} className="btn">
													<input type="radio"/>
													<a href="#!" onClick={masonryBox}>{category?.["title_"+local]}</a> 
												</li>
											);
									})}
								</ul>			
							</div>
						</div> */}
					</div>
					<div className="clearfix">
						<ul id="masonry" className="row g-xl-4 g-3">
							{items?.map((item,index)=>{
								let delayNew = delay[index];
								let classLiNew = classLi[index];

								return(
									<li className={"card-container col-6 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp "+classLiNew} data-wow-delay={delayNew} key={index}>
										<ProductGrid item={item} mediaPath={mediaPath} local={local} Lang={Lang} calssParent="" />
									</li>
								);
							})}
							</ul>
					</div>
				</div>
			</section>
			{/* Products Section Start */}
    	</>
	);
}