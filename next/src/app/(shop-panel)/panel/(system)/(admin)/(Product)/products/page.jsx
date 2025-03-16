"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Grid, Frame, FeatherIcon, Pic } from "@/Theme/Midone/Utils";
// import { useAuth } from "@/lib/auth";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function List(){
    const {Lang,local} = useLang();
    const {mediaPath,laraAdmin,nextAdmin} = useConfig();
    const {destroy} = useData();
    const formUrl = nextAdmin+"/products";
    const url = laraAdmin+"/products";

    let info = {
        insertLink: `${formUrl}/new`,
        // perPage:20,
        url: url,
        columns: [
            {label: "", jsx:(item)=>
                <Pic src={mediaPath+"/product/"+item?.image} defaultImg={`${mediaPath}/public/default/avatar.png`} key={"img"+item?.image} classImg="user-avatar" />},
            {label: "product", field: "name"},
            {label: "category", field: "category.title_"+local},
            {label: "brand", field: "brand.name_"+local},
            {label: "status",  jsx: (item)=><span className={item.active_status?.color}>{item.active_status?.["title_"+local]}</span>},
            {label: "", sort:false, 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        <FeatherIcon  name="Edit" url={formUrl+"/"+item?.id+"/edit"} tooltip={Lang('public.edit')} />
                        <FeatherIcon name="Eye" url={formUrl+"/"+item?.id} tooltip={Lang('public.view')} />
                        <FeatherIcon  name="XOctagon" tooltip={Lang('public.delete')} color="darkred" onClick={()=>destroy(laraAdmin+"/products"+"/"+item?.id)} />
                    </div>
                </>
            }, 
        ],
    }

    return(
        <>
            <Frame title={Lang(["public.products"])}>
                <div className="intro-y col-span-12">
                    <Grid {...info} />
                   
                </div>
            </Frame>
        </>
    );
}