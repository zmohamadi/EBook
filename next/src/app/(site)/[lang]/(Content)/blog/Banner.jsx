"use client"
import { BreadCrumb } from "@/Theme/Site/Components/Public/BreadCrumb";

export const Banner = ({ assetsPath,local,Lang }) => {
	
    return(
		<>

			<div class="breadcrumb-wrapper">
				<div class="book1">
					<img src={`${assetsPath}/img/hero/book1.png`} alt="book"/>
				</div>
				<div class="book2">
					<img src={`${assetsPath}/img/hero/book2.png`} alt="book"/>
				</div>
        <div class="container">
            <div class="page-heading">
			<h1>{Lang("public.blog")}</h1>
			<BreadCrumb local={local} />

            </div>
        </div>
    </div>
    	</>
	);
}