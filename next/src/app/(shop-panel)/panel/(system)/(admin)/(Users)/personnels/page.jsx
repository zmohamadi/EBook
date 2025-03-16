"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Grid, Frame, FeatherIcon, Pic } from "@/Theme/Midone/Utils";
import Link from "next/link";
import { ButtonContainer } from "@/Theme/Midone";

export default function List(){
    const {Lang, local} = useLang();
    const {mediaPath,laraAdmin,nextAdmin} = useConfig();
    const {destroy} = useData();

    const formUrl = nextAdmin+"/personnels";

    let info = {
        insertLink: formUrl + "/new",
        perPage:20,
        url: laraAdmin+"/personnels",
        columns: [
            {
                label: "",
                jsx: (item) => (
                    <Pic 
                        src={mediaPath + "/users/" + item?.photo} 
                        defaultImg={`${mediaPath}/public/default/avatar.png`} 
                        classImg="user-avatar rounded-full" 
                        key={"img" + item?.photo} 
                    />
                ),
            },
            {
                label: "name", 
                jsx: (item) => <span>{item?.firstname + " " + item?.lastname}</span>,
            },
            { label: "mobile", field: "mobile" },
            {label: "status", jsx: (item)=><span className={"rounded-full py-1 px-2  text-white bg-"+item?.active_status?.color}>{item?.active_status?.["title_"+local]}</span>},
           
            
            {label: "", sort:false, 
                jsx:(item)=><>
                    <div className='flex justify-center '>
                        <FeatherIcon name="Edit" url={formUrl+"/"+item?.id+"/edit"} tooltip={Lang('public.edit')} />
                        <FeatherIcon name="Lock" url={nextAdmin+"/change-password/"+item?.id} tooltip={Lang('public.change_password')} />
                        <FeatherIcon name="Eye" url={formUrl+"/"+item?.id} tooltip={Lang('public.view')} />
                        <FeatherIcon name="XOctagon" tooltip={Lang('public.delete')} color="darkred" onClick={()=>destroy(laraAdmin+"/personnels"+"/"+item?.id)} />
                    </div>
                </>
            }, 
        ],
    }

    return(
        <>
            <Frame title={Lang(["public.personnels"])}>
                <div className="intro-y col-span-12">
                    <Grid {...info} />
                   
                </div>
            </Frame>
        </>
    );
}