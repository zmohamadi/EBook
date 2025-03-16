"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Grid,Frame,useData,FeatherIcon } from "@/Theme/Midone/Utils";

export default function List(){
    const {Lang,local} = useLang();
    const {laraAdmin ,nextAdmin} = useConfig();
    const formUrl = "/faqs"; 
    const {destroy} = useData();
    let info = {
        insertLink: nextAdmin+formUrl+"/new",
        url: laraAdmin+formUrl,
        columns: [
            {label: "question", field: "question"},
            {label: "category",  field:"category.title_"+local},
            {label: "lang", field: "lang"},
            {label: "status",  jsx: (item)=><span className={"text-"+item?.active_status?.color}>{item?.active_status?.["title_"+local]}</span>},
            {label: "",
                sort:false, 
                width:"110px", 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        <FeatherIcon name="Edit" url={nextAdmin+formUrl+"/"+item?.id+"/edit"} tooltip={Lang('public.edit')} />
                        <FeatherIcon name="XOctagon" tooltip={Lang('public.delete')} color="darkred" onClick={()=>destroy(laraAdmin+formUrl+"/"+item?.id)} />
                    </div>
                </>
            },
        ],
    }

    return(
        <Frame title={Lang(["public.faqs"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
            </div>
        </Frame>
    );
}