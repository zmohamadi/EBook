"use client";

import { useEffect,useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from '@/lib/config';
import { useRouter } from 'next/navigation';
import { Loading } from "@/Theme/Midone/Utils";
import { useData,useFormRefs,Button,Frame } from "@/Theme/Midone/Forms";
import { Images,Videos,Documents,WaitingComments,Info } from '@/Components/Blog/Details';

export default function View({ id }){
    const {Lang,local} = useLang();
    const {laraAdmin,nextAdmin,mediaPath} = useConfig();
    let component = useFormRefs();
    const router = useRouter();
    let {get} = useData();
    let [infoServer, setInfoServer] = useState(1);
    const formUrl = "/blogs"; 
    let url = laraAdmin+formUrl+"/details/"+id;
    // if(id != 0 && id != undefined) url = url;

    useEffect(() => {
        get(url, component, "info");
    }, [infoServer]);

    const back = ()=>router.back();

    const changeCalss = (idTab)=>{
        window?.$(".classTab").removeClass("bg-theme-17 text-white");
        window?.$(`#${idTab}-tab`).addClass("bg-theme-17 text-white");
    };
    let data = component?.state?.info;
    let access = data?.access;
    let item = data?.item;
    let creator = data?.creator;
    let editor = data?.editor;
    let images = (data?.item?.img)? data?.item?.img?.split("###") : [];
    let videos = (data?.item?.video)? data?.item?.video?.split("###") : [];
    let documents = (data?.item?.document)? data?.item?.document?.split("###") : [];
    let comments = (data?.comments)? data?.comments : [];
    let waitingComments = (data?.waiting_comments)? data?.waiting_comments : [];

    const listTabs = [
        {"tabInfo":"image", "arrayInfo":images, "tagInfo":Images, "displayInfo":"",},
        {"tabInfo":"video", "arrayInfo":videos, "tagInfo":Videos, "displayInfo":"",},
        {"tabInfo":"document", "arrayInfo":documents, "tagInfo":Documents, "displayInfo":"",},
    ];

    return(
        <>
            <Frame title={Lang(["public.blogs"])} key={infoServer}>
                {(Object.keys(data)?.length == 0)?
                    <Loading  />
                :
                    <>
                        <div className="col-span-12 lg:col-span-3 xxl:col-span-2">
                            <div className="intro-y box p-5 mt-6 overflow-hidden">
                                <div className="mt-1 post__tabs">
                                    <a href="#wrapper " data-toggle="tab" data-target="#info" id="info-tab" role="tab" aria-controls="info" aria-selected="true"
                                        className="flex items-center px-3 py-2 rounded-md font-medium bg-theme-17 text-white active classTab" onClick={()=>changeCalss("info")}>
                                            <i className="w-4 h-4 ml-2" data-feather="info"></i>{Lang("public.view_info")}
                                    </a>
                                    <a href="#wrapper " data-toggle="tab" data-target="#image" id="image-tab" role="tab" aria-controls="image" aria-selected="false"
                                        className="flex items-center px-3 py-2 mt-2 rounded-md classTab" onClick={()=>changeCalss("image")}>
                                            <i className="w-4 h-4 ml-2" data-feather="image"></i>{Lang("public.images")}
                                    </a>
                                    <a href="#wrapper " data-toggle="tab" data-target="#video" id="video-tab" role="tab" aria-selected="false"
                                        className="flex items-center px-3 py-2 mt-2 rounded-md classTab" onClick={()=>changeCalss("video")}>
                                            <i className="w-4 h-4 ml-2" data-feather="video"></i>{Lang("public.videos")}
                                    </a>
                                    <a href="#wrapper " data-toggle="tab" data-target="#document" id="document-tab" role="tab" aria-selected="false"
                                        className="flex items-center px-3 py-2 mt-2 rounded-md classTab" onClick={()=>changeCalss("document")}>
                                            <i className="w-4 h-4 ml-2" data-feather="document"></i>{Lang("public.documents")}
                                    </a>
                                    {access?
                                        <a href="#wrapper " data-toggle="tab" data-target="#waitingComments" id="waitingComments-tab" role="tab" aria-selected="false"
                                        className="flex items-center px-3 py-2 mt-2 rounded-md classTab" onClick={()=>changeCalss("waitingComments")}>
                                            <i className="w-4 h-4 ml-2" data-feather="waitingComments"></i>{Lang("public.not_check_comments")}
                                    </a>
                                    : ""}
                                </div>
                            </div>
                            <Button className="btn btn-primary w-20 m-3" label="back" onClick={back} />
                        </div>
                        <div className="col-span-12 lg:col-span-9 xxl:col-span-10 ">
                            <div className="intro-y flex flex-col-reverse sm:flex-row items-center">
                                <div className="w-full sm:w-auto mr-auto">
                                    {/* <Button className="btn btn-primary w-20 mr-1 ml-1" label="back" onClick={back} /> */}
                                    {/* <CheckBox className="" label="confirm" id="confirmed" name={Lang('public.is_confirmed')}
                                        checked={checked.status} refItem={[component, "confirm_id"]}
                                        onChange={()=>confirmed()} key={"x"+checked.key} /> */}
                                </div>
                            </div>
                            <div className="post__content tab-content">
                                <div id="info" className="tab-pane p-5 active" role="tabpanel" aria-labelledby="info-tab">   
                                    <Info access={access} item={item} comments={comments} creator={creator} editor={editor}
                                        mediaPath={mediaPath} laraAdmin={laraAdmin} Lang={Lang} local={local} keyServer={setInfoServer} />
                                </div>
                                {listTabs?.map((tab, i)=>
                                {
                                    return(
                                        <div id={tab?.["tabInfo"]} className={"tab-pane "+tab?.displayInfo} role="tabpanel" aria-labelledby={tab?.["tabInfo"]+"-tab"} >
                                            <div className="intro-y grid grid-cols-12 gap-3 sm:gap-6 mt-6">
                                                {(tab?.["arrayInfo"]?.length == 0)?
                                                    <div className="intro-y col-span-12 sm:col-span-12 md:col-span-12 xxl:col-span-12 mt-5">
                                                        <div className="alert alert-warning-soft show flex items-center mb-2 text-center">{Lang("public.no_data")}</div>
                                                    </div>
                                                :
                                                    (tab?.["arrayInfo"])?.filter(record => record !== "")?.map((record, i)=>{
                                                        const Com = tab?.["tagInfo"];
                                                        return (
                                                            <div className="intro-y col-span-6 sm:col-span-4 md:col-span-3 xxl:col-span-2">
                                                                <div className="file box rounded-md pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                                                                    <Com item={record} deleteUrl={laraAdmin+formUrl+"/delete-file/"+record?.id} />
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </div>
                                    );
                                })}
                                {access?
                                    <div id="waitingComments" className="tab-pane p-5" role="tabpanel" aria-labelledby="waitingComments-tab">   
                                        <WaitingComments waitingComments={waitingComments} mediaPath={mediaPath} nextAdmin={nextAdmin} Lang={Lang}  />
                                    </div>
                                : ""}
                            </div>
                        </div>
                    </>
                }
            </Frame>
        </>
    );
}