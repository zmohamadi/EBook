"use client"

import { BreadCrumb } from "@/Theme/Site/Components/Public/BreadCrumb";

export const Banner = ({ assetsPath,local,Lang }) => {    
    return(
		<>
			{/* Banner Start */}
			<div className="dz-bnr-inr bg-secondary overlay-black-light" style={{backgroundImage:`url(${assetsPath}/pixio/images/background/bg1.jpg)`}}>
				<div className="container">
					<div className="dz-bnr-inr-entry">
						<h1>{Lang("public.products")}</h1>
						<BreadCrumb local={local} />
					</div>
				</div>	
			</div>
			{/* Banner End */}
    	</>
	);
}