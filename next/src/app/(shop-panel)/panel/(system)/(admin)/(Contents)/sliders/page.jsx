"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Grid,Frame,useData,FeatherIcon } from "@/Theme/Midone/Utils";

export default function List(){
    const {Lang} = useLang();
    const {laraAdmin,nextAdmin,mediaPath} = useConfig();
    const formUrl = "/sliders"; 
    const {destroy} = useData();
    let info = {
        insertLink: nextAdmin+formUrl+"/new",
        url: laraAdmin+formUrl,
        columns: [
            {label: "pic", jsx:(item)=><img src={mediaPath+"/sliders/"+item?.image} width={100} height={100} alt={item?.image} />},
            {label: "title", field: "title"},
            {label: "title2", field: "title2"},
            {label: "link", field: "link"},
            {label: "lang", field: "lang"},
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
        <Frame title={Lang(["public.sliders"])}>
            <div className="intro-y col-span-12">
                <Grid {...info} key={"table key"} />
            </div>
        </Frame>
    );
}