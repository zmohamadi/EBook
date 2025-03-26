"use client"

import React, { useContext } from 'react';
import { ProductContext } from '@/Theme/Site/ShopTools/Context/ProductContext';

export const Category = ({ local, Lang }) => {
	const counter = [26,36,43,27,40,40,40,43,36];
	const { state,dispatch } = useContext(ProductContext);
	const handleFilterLine = (lineId) => {
		dispatch('SET_LINE', { filter: lineId });
    };
	const handleFilterCategory = (categoryId) => {
		dispatch('SET_CATEGORY', { filter: categoryId });
    };

	return(
		<>
			<div className="widget widget_categories">
				<h6 className="widget-title">{Lang("public.category")}</h6>
				<ul>
					{state.categories?.map((item,index)=>{
						return(
							<>
								<li className={"title cat-item cat-item-"+counter[index]}>
									<a href="javascript:void(0);" onClick={()=>handleFilterLine(item?.id)}>{item?.["title_"+local]}</a>
									{"("+item?.count_product+")"}
								</li>		
								<ul style={{marginLeft: "10px"}} key={index}>
									{item?.childs?.map((child,i)=>{
										return(
											<li className={"cat-item cat-item-"+counter[index]} key={i}>
												<a href="javascript:void(0);" onClick={()=>handleFilterCategory(child?.id)} >{child?.["title_"+local]}</a>
												{"("+child?.count_product+")"}
											</li>
										);
									})}
									
								</ul>
							</>
						);
					})}
				</ul>
			</div>
    	</>
	);
};