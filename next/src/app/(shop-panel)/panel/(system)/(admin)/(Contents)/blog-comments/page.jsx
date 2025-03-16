"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Grid,Frame,FeatherIcon } from "@/Theme/Midone/Utils";

export default function List(){
    const {Lang,local} = useLang();
    const {laraAdmin ,nextAdmin} = useConfig();
    const formUrl = "/blog-comments"; 

    let info = {
        url: laraAdmin+formUrl,
        columns: [
            {label: "name", field: "sender_name"},
            {label: "email", field: "sender_email"},
            {label: "blog",  field:"blog.title"},
            {label: "status",  jsx: (item)=><span className={"text-"+item?.active_status?.color}>{item?.active_status?.["title_"+local]}</span>},
            {label: "",
                sort:false, 
                width:"110px", 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        <FeatherIcon name="Edit" url={nextAdmin+formUrl+"/"+item.id+"/edit"} tooltip={Lang('public.edit')} />
                    </div>
                </>
            },
        ],
    }

    return(
        <Frame title={Lang(["public.comments"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
            </div>
        </Frame>
    );
}