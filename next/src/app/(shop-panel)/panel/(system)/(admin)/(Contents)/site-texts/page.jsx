"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Grid,Frame,FeatherIcon } from "@/Theme/Midone/Utils";

export default function List(){
    const {Lang,local} = useLang();
    const {nextAdmin, laraAdmin} = useConfig();
    const formUrl = "/site-texts";
    // const {destroy} = useData();
    let info = {
        url: laraAdmin+formUrl,
        columns: [
            {label: "title", field: "title_"+local},
            {label: "text_button", field: "btn_text_"+local},
            {label: "link", field: "link"},
            {label: "status",  jsx: (item)=><span className={"text-"+item?.active_status?.color}>{item?.active_status?.["title_"+local]}</span>},
            {label: "",
                sort:false, 
                width:"110px", 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        <FeatherIcon name="Edit" url={nextAdmin+formUrl+"/"+item?.id+"/edit"} tooltip={Lang('public.edit')} />
                    </div>
                </>
            },
        ],
    }

    return(
        <Frame title={Lang(["public.site_texts"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
            </div>
        </Frame>
    );
}