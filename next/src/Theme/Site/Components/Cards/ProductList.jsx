"use client"
import { Cart } from "@/Theme/Site/Components/Public/Cart";
import { Like } from "@/Theme/Site/Components/Public/Like";
import { QuickView } from "@/Theme/Site/Components/Public/QuickView";

export const ProductList = ({ item,assetsPath,mediaPath,local,Lang,index }) => {

    return(
		<>
			<div className="col-md-12 col-sm-12" key={index}>
				<div className="dz-shop-card style-2">
					<div className="dz-media">
						<img src={mediaPath+"/product/"+item?.image} alt="image"/>
					</div>
					<div className="dz-content">
						<div className="dz-header">
							<div>
								<h4 className="title mb-0"><a href={`/${local}/products/${item?.id}`}>{item?.name}</a></h4>
								<ul className="dz-tags">
									<li><a href="javascript:void(0);" style={{cursor:"default"}}>{item?.category_parent?.["title_"+local]},</a></li>
									<li><a href="javascript:void(0);" style={{cursor:"default"}}>{item?.category?.["title_"+local]}</a></li>
								</ul>
							</div>
							{/* {rating()} */}
						</div>
						<div className="dz-body">
							<div className="dz-rating-box">
								<div>
									<p className="dz-para" dangerouslySetInnerHTML={{ __html: item?.summary }}></p>
								</div>
							</div>
							<div className="rate">
								<div className="d-flex align-items-center mb-xl-3 mb-2">
									{price(item,Lang)}
									{/* {color()}	 */}
								</div>
								<div className="d-flex">
									<Cart productId={item?.id} local={local} Lang={Lang} type="Btn" />
									<Like productId={item?.id} local={local} Lang={Lang} type="Btn" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
    	</>
	);
}
const rating = ()=>{
	return(
		<div className="review-num">
			<ul className="dz-rating">
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
			<span><a href="javascript:void(0);"> 370 Review</a></span>
		</div>
	);
}
const price = (item,Lang)=>{
	let displayPrice = <> {"$"+item?.price} </>
	if(item?.discount>0)
	{
		displayPrice = <>
			{"$"+item?.discount_price}
			<span></span>
			<del>{"$"+item?.price}</del>
		</>
	}
	return(
		<>
			<div className="meta-content">
				<span className="price-name">{Lang("public.price")}</span>
				<span className="price">{displayPrice}</span>
			</div>
		</>
	);
}
const color = ()=>{
	return(
		<div className="meta-content">
			<span className="color-name">Color</span>
			<div className="d-flex align-items-center color-filter">
				<div className="form-check">
					<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel11" value="#24262B" aria-label="..." checked=""/>
					<span style={{backgroundColor: "rgb(36, 38, 43)"}}></span>
				</div>
				<div className="form-check">
					<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel12" value="#8CB2D1" aria-label="..."/>
					<span style={{backgroundColor: "rgb(140, 178, 209)"}}></span>
				</div>
				<div className="form-check">
					<input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel13" value="#0D775E" aria-label="..."/>
					<span style={{backgroundColor: "rgb(13, 119, 94)"}}></span>
				</div>
			</div>
		</div>
	);
}
