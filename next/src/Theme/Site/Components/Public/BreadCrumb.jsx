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
		<div class="page-header">
                    <ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                        {/* <li>
                            <a href="index.html">
                                Home
                            </a>
                        </li>
                        <li>
                            <i class="fa-solid fa-chevron-right"></i>
                        </li> */}
						{url?.map((nameUrl, index)=>{
						if(nameUrl != "" && items[nameUrl] != undefined) 
						{
							let length = url?.length;
							let i = index+1;
							let display = (length == i)?<>
								<i class="fa-solid fa-chevron-left"></i>
								<li>{Lang("public."+items[nameUrl][1])}</li>
							</>
							:
								<li><a href={items[nameUrl][0]}>{Lang("public."+items[nameUrl][1])}</a></li>
							return(
								display
							);
						}
					})}
					{(brName!="")&& <li>{brName}</li>}
                    </ul>
                </div>
    	</>
	);
}