"use client"
import { Cart } from "@/Theme/Site/Components/Public/Cart";
import { Like } from "@/Theme/Site/Components/Public/Like";
import { QuickView } from "@/Theme/Site/Components/Public/QuickView";

export const ProductColumn = ({ item,assetsPath,mediaPath,local,Lang,index }) => {
	let displayPrice = <> {"$"+item?.price} </>
	let discountPrice = <> {"$"+item?.price} </>
	let displayDiscount = "";
	if(item?.discount>0)
	{
		displayDiscount = <>{Lang("public.up_to")+" "+item?.discount+"%"+Lang("public.off")}</>;
		displayPrice = <>
			{"$"+item?.discount_price}
			<del>{"$"+item?.price}</del>
		</>
		discountPrice = <> {"$"+item?.discount_price} </>
	}

    return(
		<>
			<div className="col-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 m-md-b15 m-sm-b0 m-b30" key={index}>
				<div className="shop-card style-1">
					<div className="dz-media">
						<img src={mediaPath+"/product/"+item?.image} alt="image"/>
						<div className="shop-meta">
							<QuickView productId={item?.id} local={local} Lang={Lang} />
							<Like productId={item?.id} local={local} Lang={Lang} />
							<Cart productId={item?.id} local={local} Lang={Lang} />
						</div>							
					</div>
					{/* <div className="dz-content color-discount">
						<div>
							<span className="sale-title">{displayDiscount}</span>
							<h5 className="title"><a href={`/${local}/products/${item?.id}`}>{item?.name}</a></h5>
						</div>
						<h6 className="price">{displayPrice}</h6>
					</div> */}
					<div className="dz-content">
						<h5 className="title"><a href={`/${local}/products/${item?.id}`}>{item?.name}</a></h5>
						<h5 className="price">{discountPrice}</h5>
					</div>
					<div className="product-tag">
						<span className="badge ">{item?.category?.["title_"+local]}</span>
					</div>
				</div>
			</div>

    	</>
	);
}