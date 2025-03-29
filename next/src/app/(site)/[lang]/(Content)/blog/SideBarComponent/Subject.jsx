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
		<div class="single-sidebar-widget">
                                <div class="wid-title">
                                    <h3>{Lang("public.subjects")}</h3>
                                </div>
                                <div class="news-widget-categories">
                                    <ul>
									{state?.subjects?.map((item,index)=>{
						return(
							<>
								<li key={index}>
									<a href="javascript:void(0);" onClick={()=>handleFilterSubject(item?.id)}>{item?.["title_"+local]}</a>
									<span>{"("+item?.count_blog+")"}</span>
								</li>
							</>
						);
					})}
                                       
                                    </ul>
                                </div>
                            </div>
			
    	</>
	);
};