"use client"
import React, { useContext } from 'react';
import { BlogContext } from '@/Theme/Site/ShopTools/Context/BlogContext';
import Link from 'next/link';

export const SideBlog = ({ mediaPath, local, Lang }) => {
	const { state } = useContext(BlogContext);

	return(
		<>
		<div class="single-sidebar-widget">
                                <div class="wid-title">
                                    <h3>{Lang("public.most_visited")}</h3>
                                </div>
                                <div class="recent-post-area">
								{state?.mostVisitedBlogs?.map((item,index)=>{
						return(<>
                                    <div class="recent-items">
                                        <div class="recent-thumb">
										<img src={mediaPath+"/blog/"+item?.thumb} alt="/" />
                                        </div>
                                        <div class="recent-content">
                                            <ul>
                                                <li>
                                                    <i class="fa-solid fa-calendar-days"></i>
													{item?.created_at}
													                                                </li>
                                            </ul>
                                            <h6>
											<Link href={`/${local}/blog/${item?.id}`}>
											{item?.title}
                                                </Link>
                                            </h6>
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