"use client"

import { useLang } from "@/lib/lang";
import { usePathname } from "next/navigation";
import { getBrItems } from "@/Theme/Site/Utils/BreadCrumbData";

export const BreadCrumb = ({ brName="",local }) => {
	const { Lang } = useLang();
	const pathname = usePathname();
	const url = pathname.split("/");
	let items = getBrItems(local);
	
	return(
		<>
			<nav aria-label="breadcrumb" className="breadcrumb-row">
				<ul className="breadcrumb">
					{url?.map((nameUrl, index)=>{
						if(nameUrl != "" && items[nameUrl] != undefined) 
						{
							let length = url?.length;
							let i = index+1;
							let display = (length == i)?
								<li className="breadcrumb-item">{Lang("public."+items[nameUrl][1])}</li>
							:
								<li className="breadcrumb-item"><a href={items[nameUrl][0]}>{Lang("public."+items[nameUrl][1])}</a></li>
							return(
								display
							);
						}
					})}
					{(brName!="")&& <li className="breadcrumb-item">{brName}</li>}
				</ul>
			</nav>
    	</>
	);
}