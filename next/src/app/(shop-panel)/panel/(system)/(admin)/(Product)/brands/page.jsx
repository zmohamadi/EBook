"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Grid,Frame,useData,FeatherIcon,Pic } from "@/Theme/Midone/Utils";

export default function List(){
    const { Lang,local } = useLang();
    const { laraAdmin,nextAdmin,mediaPath } = useConfig();
    const { destroy } = useData();
    const formUrl = nextAdmin+"/brands"; 

    let info = {
        insertLink: formUrl+"/new",
        url: laraAdmin+"/brands",
        columns: [
            {label: "", jsx:(item)=>
                <Pic src={mediaPath+"/brand/"+item?.logo} defaultImg={`${mediaPath}/public/default/avatar.png`} key={"img"+item?.logo} classImg="user-avatar rounded-full" />},
            {label: "brand", field: "name_"+local},
            {label: "count_product", field: "count_product"},
            {label: "status",  jsx: (item)=><span className={item.active_status?.color}>{item.active_status?.["title_"+local]}</span>},
            {label: "", sort:false, width:"110px", jsx:(item)=>
                <>
                    <div className='flex justify-center '>
                        <FeatherIcon name="Edit" url={formUrl+"/"+item.id+"/edit"} tooltip={Lang('public.edit')} />
                        <FeatherIcon name="Eye" url={formUrl+"/"+item?.id} tooltip={Lang('public.view')} />
                        {(item?.count_product==0)?
                            <FeatherIcon name="XOctagon" tooltip={Lang('public.delete')} color="darkred" onClick={()=>destroy(laraAdmin+formUrl+"/"+item.id)} />:""
                        }
                    </div>
                </>
            },
        ],
    }

    return(
        <Frame>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
            </div>
        </Frame>
    );
}