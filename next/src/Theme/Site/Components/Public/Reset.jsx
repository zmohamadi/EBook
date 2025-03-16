"use client"

import React, { useContext } from 'react';
import { ProductContext } from '@/Theme/Site/ShopTools/Context/ProductContext';
import { BlogContext } from '@/Theme/Site/ShopTools/Context/BlogContext';

export const Reset = ({ Lang,resetFor="product" }) => {
	let { dispatch } = {};
	if(resetFor=="product")
	{
		dispatch = useContext(ProductContext).dispatch;
	}
	else if(resetFor=="blog")
	{
		dispatch = useContext(BlogContext).dispatch;
	}
	const handleReset = () => {
		window.history.replaceState({}, '', `${window.location.pathname}`);
		dispatch('RESET');
	};

    return(
		<>
			<a href="javascript:void(0);" className="btn btn-sm font-14 btn-secondary btn-sharp" onClick={handleReset}>
				{Lang("public.reset_title_btn")}
			</a>
    	</>
	);
}