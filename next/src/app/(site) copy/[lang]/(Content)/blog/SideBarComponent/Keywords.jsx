"use client"

import React, { useContext } from 'react';
import { BlogContext } from '@/Theme/Site/ShopTools/Context/BlogContext';

export const Keywords = ({ Lang }) => {
	const { state,dispatch } = useContext(BlogContext);
	
    return(
		<>
			<div className="widget widget_tag_cloud">
				<h5 className="widget-title">{Lang("public.tags")}</h5>
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