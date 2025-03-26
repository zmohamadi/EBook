"use client"

import React, { useContext } from 'react';
import { BlogContext } from '@/Theme/Site/ShopTools/Context/BlogContext';

export const Search = ({ Lang }) => {
	const { dispatch } = useContext(BlogContext);
	const handleFilter = (e) => {
		if (e.key === 'Enter') {
			dispatch('SET_SEARCH', { filter: e.target.value });
		}
    };

    return(
		<>
			<div className="widget">
				<h5 className="widget-title">{Lang("public.search_title")}</h5>
				<div className="search-bx">
					{/* <form role="search" method="post"> */}
						<div className="input-group">
							<input name="text" className="form-control" placeholder={Lang("public.search_blog")} type="text" onKeyDown={handleFilter}/>
							<span className="input-group-btn">
									<button className="btn">
									<i className="icon feather icon-search"></i>
								</button>
							</span>
						</div>
					{/* </form> */}
				</div>
			</div>
    	</>
	);
}