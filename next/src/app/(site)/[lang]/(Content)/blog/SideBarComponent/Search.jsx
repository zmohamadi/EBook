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
		<div class="single-sidebar-widget">
			<div class="wid-title">
				<h3>{Lang("public.search_title")}</h3>
			</div>
			<div class="search-widget">
				<form action="#">
					<input placeholder={Lang("public.search_blog")} type="text" onKeyDown={handleFilter}/>
					<button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
				</form>
			</div>
		</div>
			
    	</>
	);
}