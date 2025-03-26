"use client"

import React, { useContext } from 'react';
import { BlogContext } from '@/Theme/Site/ShopTools/Context/BlogContext';

export const Subject = ({ local, Lang }) => {
	const { state,dispatch } = useContext(BlogContext);
	const handleFilterSubject = (subjectId) => {
		dispatch('SET_SUBJECT', { filter: subjectId });
    };

	return(
		<>
			<div className="widget widget_categories style-1">
				<h5 className="widget-title">{Lang("public.subject")}</h5>
				<ul>
					{state?.subjects?.map((item,index)=>{
						return(
							<>
								<li className="cat-item" key={index}>
									<a href="javascript:void(0);" onClick={()=>handleFilterSubject(item?.id)}>{item?.["title_"+local]}</a>
									{"("+item?.count_blog+")"}
								</li>
							</>
						);
					})}
				</ul>
			</div>
    	</>
	);
};