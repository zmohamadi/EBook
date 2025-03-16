"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Grid,Frame,FeatherIcon,Pic } from "@/Theme/Midone/Utils";

export function List(){
    const {Lang,local} = useLang();
    const {laraAdmin,nextAdmin,mediaPath} = useConfig();
    const formUrl = "/blogComments"; 

    let info = {
        url: laraAdmin+"/blog-comments",
        columns: [
            {label: "", jsx: (item)=>(<Pic src={mediaPath + "/users/" + item?.photo} defaultImg={`${mediaPath}/public/default/avatar.png`} classImg="user-avatar rounded-full" key={"img" + item?.photo} />),},
            {label: "creator_record", jsx: (item)=><span>{item?.creator?.firstname + " " + item?.creator?.lastname} <div className="ltr">{item?.created_at}</div> </span>},
            {label: "editor_record", jsx: (item)=><span>{(item?.editor)? item?.editor?.firstname + " " + item?.editor?.lastname : "---"}</span>},
            {label: "blog",  field:"blog.title"},
            {label: "status",  jsx: (item)=><span className={" inline-flex items-center rounded-full py-1 px-2  text-white bg-"+item?.confirm_status?.color}>{item?.confirm_status?.["title_"+local]}</span>},
            {label: "", sort:false, width:"110px", jsx:(item)=><>
                    <div className='flex justify-center '>
                        <FeatherIcon name="Eye" url={nextAdmin+formUrl+"/"+item.id} tooltip={Lang('public.view')} />
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