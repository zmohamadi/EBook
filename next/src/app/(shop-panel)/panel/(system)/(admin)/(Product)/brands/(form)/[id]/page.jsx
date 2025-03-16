"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Box,Frame,Pic,useData,useFormRefs } from "@/Theme/Midone";

export default function View({params}){
    const { Lang } = useLang();
    const { laraAdmin,mediaPath} = useConfig();
    let { get } = useData();
    let component = useFormRefs();
    const formUrl = "/brands";
    let url = laraAdmin+formUrl+"/"+params?.id;
    
    useEffect(()=>{
        get(url, component, "info");
    }, []);

    let data = component?.state?.info;

    return(
        <>
        <Frame>
            <Box cols={"cols-1"}>
           
                        <h2 className="intro-y font-medium text-xl sm:text-2xl">
                            {data?.name_fa}
                        </h2>
                        
                        <div className="intro-y mt-6">
                                <Pic  key={"img"+data?.logo} src={mediaPath+"/brand/"+data?.logo} defaultImg={`${mediaPath}/public/default/avatar.png`} classImg="rounded-md" />
                        </div>
            </Box>
        </Frame>
        </>
    );
}