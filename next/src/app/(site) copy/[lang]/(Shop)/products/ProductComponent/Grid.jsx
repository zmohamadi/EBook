"use client"
import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '@/Theme/Site/ShopTools/Context/ProductContext';
import { useData } from "@/Theme/Midone/Utils/Data";
import { ProductGrid } from "@/Theme/Site/Components/Cards/ProductGrid";
import { LoadMore } from "@/Theme/Site/Components/Public/LoadMore";
import LoadingPage from '@/Theme/Site/ShopTools/LoadingPage';

export const Grid = ({ mediaPath,local,Lang,page = "1" }) => {
	let { getNeedles } = useData();
	const {state} = useContext(ProductContext);
	const { products, url } = state;
	const [loadmore, setLoadmore] = useState(false);
	const [newProducts, setNewProducts] = useState([]);
	
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
			<div className="tab-pane fade show active" id="tab-list-grid" role="tabpanel" aria-labelledby="tab-list-grid-btn">
				<div className="row gx-xl-4 g-3 mb-xl-0 mb-md-0 mb-3">
					{(newProducts?.data)?.map((item,index)=>{
						return(
							<div className="col-6 col-xl-4 col-lg-4 col-md-4 col-sm-4 m-md-b15 m-sm-b0 m-b30" key={index}>
								<ProductGrid item={item} mediaPath={mediaPath} local={local} Lang={Lang} />
							</div>
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
							<Grid page={++page} mediaPath={mediaPath} local={local} Lang={Lang} />
					}
				</div>
			</div>
    	</>
	);
}