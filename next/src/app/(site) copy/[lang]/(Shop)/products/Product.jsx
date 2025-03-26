"use client"

import React, { useContext, useEffect } from 'react';
import { ProductContext } from '@/Theme/Site/ShopTools/Context/ProductContext';
import { List,Column,Grid,FilterRight,FilterLeft } from "@/app/(site)/[lang]/(Shop)/products/ProductComponent";
import { useData } from "@/Theme/Midone/Utils/Data";
import LoadingPage from '@/Theme/Site/ShopTools/LoadingPage';

export const Product = ({ assetsPath, mediaPath, local, Lang }) => {
	let { getNeedles } = useData();
	const { state, dispatch } = useContext(ProductContext);
	const { status, filters, laralelUrl, loading, page } = state;

	useEffect(() => {		
		if(status == "FIRST") 
			return;
        
		dispatch('START_LOADING');
        // const query = new URLSearchParams();
		const query = (status == "")? new URLSearchParams(window.location.search) : new URLSearchParams();
        Object.keys(filters).map((key)=>{
			let value= filters[key];
            if(value != "") query.set(key, value);
        });
		// const url = `${local}${laralelUrl}?${query.toString()}&type=${status == "" && "first"}`;
		const url = `${local}${laralelUrl}?${query.toString()}`;
        getNeedles(url+`&type=${status == "" && "first"}&page=${page}`, (items)=>
            {
				if(state.status == ""){
					dispatch('SET_INFO', { products: items.products, categories: items.categories, url: url });
				}else{
					dispatch('SET_PRODUCTS', { products: items.products, url: url });
				}
                dispatch('STOP_LOADING');
            }
        );
        window.history.replaceState({}, '', `?${query.toString()}`);
		
		dispatch('DEACTIVE_FILTER_MOBILE');
    }, [filters]);
	
	return(
		<>
			{(loading)?
				<LoadingPage />
			:
				<div className="col-xl-9 col-lg-12">
					<div className="filter-wrapper">
						<div className="filter-left-area">
							<FilterLeft Lang={Lang} local={local} />	
						</div>
						<div className="filter-right-area">
							<FilterRight Lang={Lang} />
						</div>
					</div>
					<div className="row">
						<div className="col-12 tab-content shop-" id="pills-tabContent">
							{/* {(filters.display=="" || filters.display=="grid")? */}
							{(!filters.display || filters.display=="" || filters.display=="grid")?
								<Grid assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
							:
								(filters.display=="column")?
									<Column assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
								:
									<List assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
							}
						</div>
					</div>
				</div>
			}		
    	</>
	);
}