"use client"
// import { ProductContext } from '@/Theme/Site/ShopTools/Context/ProductContext';
import React, { useContext } from 'react';
import { useData } from "@/Theme/Midone/Utils/Data";

export const Cart = ({ productId,assetsPath,mediaPath,local,Lang,type="Icon" }) => {
	let { getNeedles } = useData();
	// const {state} = useContext(ProductContext);
	const addToCart = (id)=>{		
		// بررسی وجود کلاس active
		if($('#cart-active-'+id).hasClass('active'))
		{
			alert("شما قبلا محصول مورد نظر را به سبد خرید خود اضافه کرده اید.")
		}
		else
		{
			// getNeedles(`${local}${state.laralelUrl}/add-to-cart/${id}`, "");
			getNeedles(`${local}/products/add-to-cart/${id}`, "");
			jQuery('#cart-active-'+id).toggleClass('active');
		}
	}
	let display = <div className="btn btn-primary meta-icon dz-carticon" id={"cart-active-"+productId} onClick={()=>addToCart(productId)}>
					<i className="flaticon flaticon-basket"></i>
					<i className="flaticon flaticon-shopping-basket-on dz-heart-fill"></i>
				</div>
	if(type=="Btn")
	{
		display = <a href="javascript:void(0);" className="btn btn-secondary btn-md btn-icon" id={"cart-active-"+productId} onClick={()=>addToCart(productId)}>
					<i className="icon feather icon-shopping-cart d-md-none d-block"></i>
					<span className="d-md-block d-none">{Lang("public.cart_detail_btn_2")}</span>
				</a>
	}

    return(
		<> {display} </>
	);
}