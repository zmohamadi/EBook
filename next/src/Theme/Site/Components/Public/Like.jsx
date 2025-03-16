"use client"
// import { ProductContext } from '@/Theme/Site/ShopTools/Context/ProductContext';
import React, { useContext } from 'react';
import { useData } from "@/Theme/Midone/Utils/Data";

export const Like = ({ productId,assetsPath,mediaPath,local,Lang,type="Icon" }) => {
	let { getNeedles } = useData();
	// const {state} = useContext(ProductContext);

	const addToFavorites = (id)=>{	
		// بررسی وجود کلاس active
		if($('#like-active-'+id).hasClass('active'))
		{
			alert("شما قبلا محصول مورد نظر را به علاقه مندی خود اضافه کرده اید.")
		}
		else
		{
			jQuery('#like-active-'+id).toggleClass('active');
			getNeedles(`${local}/products/add-to-favorites/${id}`, "");
		}
	}
	let display = <div className="btn btn-primary meta-icon dz-wishicon" id={"like-active-"+productId} onClick={()=>addToFavorites(productId)}>
					<i className="icon feather icon-heart dz-heart"></i>
					<i className="icon feather icon-heart-on dz-heart-fill"></i>
				</div>
	if(type=="Btn")
	{
		display = <div className="bookmark-btn style-1" id={"like-active-"+productId} onClick={()=>addToFavorites(productId)}>
				<input className="form-check-input" type="checkbox" id="favoriteCheck1"/>
				<label className="form-check-label" for="favoriteCheck1">
					<i className="fa-solid fa-heart"></i>
				</label>
			</div>
	}

    return(
		<> {display} </>
	);
}