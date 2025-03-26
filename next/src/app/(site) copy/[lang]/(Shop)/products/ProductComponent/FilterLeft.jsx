"use client"
import React, { useContext } from 'react';
import { ProductContext } from '@/Theme/Site/ShopTools/Context/ProductContext';

export const FilterLeft = ({ Lang,local }) => {
	const { state,filterDispatch } = useContext(ProductContext);
	const handleFilterRemove = (key) => {
		const params = new URLSearchParams(window.location.search);
		params.delete(key);
		window.history.replaceState({}, '', `?${params.toString()}`);
		// window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);
        filterDispatch("Remove_FILTER");
    };

    return(
		<>
			<ul className="filter-tag">
				{Object.keys(state.filters).map((key)=>
					{
						if(key!="sort" && key!="display")
						{
							let value= state.filters[key];
							let titleFilter = value;
							if(value!= "") 
							{
								if(key=="line") titleFilter = state?.categories?.find((line)=>line?.id==value)?.["title_"+local];
								if(key=="category") titleFilter = state?.categories.map((category) => category.childs).flat().find((child)=>child.id==value)?.["title_"+local];
								return(
									<li key={key}>
										<a href="javascript:void(0);" className="tag-btn" onClick={()=>handleFilterRemove(key)}>{titleFilter} 
											<i className="icon feather icon-x tag-close"></i>
										</a>
									</li>
								);
							}
						}
					})
				}
			</ul>
			{/* <span>{Lang("public.showing")} 1–5 {Lang("public.of")} 50 {Lang("public.results")}</span> */}
			{/* <span>{Lang("public.showing_1")} 1–5 {Lang("public.showing_2")} 50 {Lang("public.showing_3")}</span> */}	
    	</>
	);
}