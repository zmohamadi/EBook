"use client"

import React, { useContext } from 'react';
import { ProductContext } from '@/Theme/Site/ShopTools/Context/ProductContext';

export const Keywords = ({ Lang }) => {
	const { state,dispatch } = useContext(ProductContext);
	
    return(
		<>
			<div className="widget widget_tag_cloud">
				<h6 className="widget-title">{Lang("public.tags")}</h6>
				<div className="tagcloud">
					{state.categories?.map((item,index)=>{
						return(
							<a href="blog-tag.html" key={index}>Vintage </a>
						);
					})}
				</div>
			</div>
    	</>
	);
}