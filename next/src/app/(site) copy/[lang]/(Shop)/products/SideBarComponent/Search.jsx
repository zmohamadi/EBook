"use client"

import React, { useContext } from 'react';
import { ProductContext } from '@/Theme/Site/ShopTools/Context/ProductContext';

export const Search = ({ Lang }) => {
	const { dispatch } = useContext(ProductContext);
	const handleFilter = (e) => {
		if (e.key === 'Enter') {
			dispatch('SET_SEARCH', { filter: e.target.value });
		}
    };

    return(
		<>
			<div className="widget widget_search">
				<div className="form-group">
					<div className="input-group">
						<input name="dzSearch" required="required" type="search" className="form-control" placeholder={Lang("public.search_product")}
							onKeyDown={handleFilter}
						/>
						<div className="input-group-addon">
							<button name="submit" value="Submit" type="submit" className="btn">
								<i className="icon feather icon-search"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
    	</>
	);
}