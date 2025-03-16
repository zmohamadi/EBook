"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Grid,Frame,FeatherIcon } from "@/Theme/Midone/Utils";

export default function List(){
    const {local,Lang} = useLang();
    const {laraAdmin ,nextAdmin} = useConfig();
    const formUrl = "/banner-positions"; 
    // const {destroy} = useData();
    let info = {
        insertLink: nextAdmin+formUrl+"/new",
        url: laraAdmin+formUrl,
        columns: [
            {label: "title", field: "title_"+local},
            {label: "dimensions", field: "dimensions"},
            {label: "status", jsx: (item)=><span>{item?.active_status['title_'+local]}</span>},
            {label: "",
                sort:false, 
                width:"110px", 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        <FeatherIcon name="Edit" url={nextAdmin+formUrl+"/"+item.id+"/edit"} tooltip={Lang('public.edit')} />
                        {/* <FeatherIcon name="XOctagon" tooltip={Lang('public.delete')} color="darkred" onClick={()=>destroy(laraAdmin+formUrl+"/"+item.id)} /> */}
                    </div>
                </>
            },
        ],
    }

    return(
        <Frame title={Lang(["public.banner-positions"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
            </div>
        </Frame>
    );
}