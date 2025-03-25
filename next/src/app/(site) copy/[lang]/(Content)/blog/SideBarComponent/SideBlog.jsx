"use client"
import React, { useContext } from 'react';
import { BlogContext } from '@/Theme/Site/ShopTools/Context/BlogContext';
import Link from 'next/link';

export const SideBlog = ({ mediaPath, local, Lang }) => {
	const { state } = useContext(BlogContext);

	return(
		<>
			<div className="widget recent-posts-entry">
				<h5 className="widget-title">{Lang("public.most_visited")}</h5>
				<div className="widget-post-bx">
					{state?.mostVisitedBlogs?.map((item,index)=>{
						return(
							<>
								<div className="widget-post clearfix" key={index}>
									<div className="dz-media"> 
										<Link href={`/${local}/blog/${item?.id}`}><img src={mediaPath+"/blog/"+item?.thumb} alt="/" /></Link>
									</div>
									<div className="dz-info">
										<div className="dz-meta">
											<ul>
												<li className="post-date">{item?.created_at}</li>
											</ul>
										</div>
										<h6 className="title"><a href={`/${local}/blog/${item?.id}`}>{item?.title}</a></h6>
									</div>
								</div>
							</>
						);
					})}
				</div>
			</div>
    	</>
	);
};