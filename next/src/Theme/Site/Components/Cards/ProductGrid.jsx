"use client"
import { Cart } from "@/Theme/Site/Components/Public/Cart";
import { Like } from "@/Theme/Site/Components/Public/Like";
import { QuickView } from "@/Theme/Site/Components/Public/QuickView";

export const ProductGrid = ({ item,mediaPath,local,Lang,calssParent=" style-1" }) => {
	let displayPrice = <> {"$"+item?.price} </>
	let displayDiscount = "";
	if(item?.discount>0)
	{
		displayDiscount = <>{Lang("public.up_to")+" "+item?.discount+"%"+Lang("public.off")}</>;
		displayPrice = <>
			{"$"+item?.discount_price}
			<del>{"$"+item?.price}</del>
		</>
	}

    return(
		<>
			<div className={"shop-card"+calssParent}>
				<div className="dz-media">
					{/* <img src={mediaPath+"/product/"+item?.image} alt="image" /> */}
					<img src={mediaPath+"/product/"+item?.image} className="back-image back-color-image-6" alt="image" />
					<div className="shop-meta">
						<QuickView productId={item?.id} local={local} Lang={Lang} />
						<Like productId={item?.id} local={local} Lang={Lang} />
						<Cart productId={item?.id} local={local} Lang={Lang} />
					</div>							
				</div>
				<div className="dz-content color-discount">
					<div>
						<span className="sale-title">{displayDiscount}</span>
						<h5 className="title"><a href={`/${local}/products/${item?.id}`}>{item?.name}</a></h5>
					</div>
					<h6 className="price">{displayPrice}</h6>
				</div>
				<div className="product-tag">
					<span className="badge ">{item?.category?.["title_"+local]}</span>
				</div>
			</div>
    	</>
	);
}