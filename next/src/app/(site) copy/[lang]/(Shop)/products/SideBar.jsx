"use client"

import React, { useContext } from 'react';
import { ProductContext } from '@/Theme/Site/ShopTools/Context/ProductContext';
import { Category,Color,Keywords,Price,Search,Size,Reset } from "@/app/(site)/[lang]/(Shop)/products/SideBarComponent";

export const SideBar = ({ local, Lang }) => {
	const { state,dispatch } = useContext(ProductContext);
	const filterMobile = ()=>{
        dispatch('DEACTIVE_FILTER_MOBILE');
	}

    return(
		<>
			<div className="col-xl-3 col-lg-12">
				<div className="sticky-xl-top">
					<a href="javascript:void(0);" className={"panel-close-btn"+state?.filterMobile} onClick={filterMobile}>																	
						<svg width="35" height="35" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M37.748 12.5L12.748 37.5" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M12.748 12.5L37.748 37.5" stroke="white" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</a>
					<div className={"shop-filter mt-xl-2 mt-0"+state?.filterMobile}>
						<aside>
							<div className="d-flex align-items-center justify-content-between m-b30">
								<h6 className="title mb-0 fw-normal d-flex">
									<i className="flaticon-filter me-3"></i>
									{Lang("public.filter")}
								</h6>
							</div>
							<Search Lang={Lang} />
							{/* <Price Lang={Lang} /> */}
							{/* <Color /> */}
							{/* <Size /> */}
							<Category local={local} Lang={Lang} />
							<Keywords Lang={Lang} />
							<Reset Lang={Lang} resetFor="product" />
						</aside>
					</div>
				</div>
			</div>	
    	</>
	);
}