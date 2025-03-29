"use client"
import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '@/Theme/Site/ShopTools/Context/ProductContext';
import { useData } from "@/Theme/Midone/Utils/Data";
import { ProductColumn } from "@/Theme/Site/Components/Cards/ProductColumn";
import { LoadMore } from "@/Theme/Site/Components/Public/LoadMore";
import LoadingPage from '@/Theme/Site/ShopTools/LoadingPage';

export const Column = ({ mediaPath,local,Lang,assetsPath,page = "1" }) => {
	const {state} = useContext(ProductContext);
	const { products, url } = state;
	const [loadmore, setLoadmore] = useState(false);
	const [newProducts, setNewProducts] = useState([]);
	let { getNeedles } = useData();
	useEffect(()=>{
		page == 1 && setNewProducts(products);
	}, [products])

	useEffect(()=>{
		if(page > 1){
			setLoadmore("loading");
			getNeedles(`${url}&page=${page}`, (items)=> {
				setNewProducts(items.products);
				setLoadmore(false);
			});
		}
	}, [page]);

	useEffect(()=>{
		if(newProducts?.last_page <= page) {
			setLoadmore("end");
		}
	}, [newProducts]);

    return(
		<>
			<div className="tab-pane fade show active" id="tab-list-column" role="tabpanel" aria-labelledby="tab-list-column-btn">
				<div className="row gx-xl-4 g-3 mb-xl-0 mb-md-0 mb-3">
					{(newProducts?.data)?.map((item,index)=>{
						return(
							<ProductColumn item={item} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} index={index} />
						);
					})}
					{
						loadmore == "end" ?
							<div></div>
						: loadmore == "loading" ? 
							<LoadingPage />
						: loadmore === false ? 
							<LoadMore onClick={()=>setLoadmore(true)} Lang={Lang} />
						:
							<Column page={++page} mediaPath={mediaPath} local={local} Lang={Lang} />
					}
				</div>
			</div>			
    	</>
	);
}