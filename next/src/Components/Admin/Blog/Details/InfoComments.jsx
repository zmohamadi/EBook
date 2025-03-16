"use client";

import { useState } from "react";
import { Tools,Pic,FeatherIcon } from "@/Theme/Midone/Utils";

export const InfoComments = ({ comments,access,parent,parentId,mediaPath,Lang,local }) => {
    let [parentComment, setParentComment] = useState();
    let limit = 100;
    let parentReply = parentComment;
    if(parentComment?.length > limit) parentReply = parentComment?.substring(0, limit)+"...";

    const changeParent = (id,comment)=>{
        parent(id);
        setParentComment(comment);
        typeof window !== "undefined" && window?.$('html,body').animate({ scrollTop: document.body.scrollHeight }, "slow");
    }
    const clearParent = ()=>{
        parent(0);
        setParentComment("");
    }
    
    return(
        <>
            <div className="intro-y mt-5 pb-10">
                {comments?.map((comments, i)=>{
                    let classDiv = (i==0)? "pt-5" : "mt-5 pt-5 border-t border-gray-200 dark:border-dark-5";
                    return(
                        <>
                            <div className={classDiv} id={comments?.id}>
                                <div className="flex">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex-none image-fit">
                                        <Pic src={mediaPath+"/users/"+comments?.creator?.photo} defaultImg={`${mediaPath}/public/default/avatar.png`} classImg="rounded-full" key={"img"+comments?.creator?.photo}  />
                                    </div>
                                    <div className="mr-3 flex-1">
                                        <div className="flex items-center">
                                            <span className="font-medium">{comments?.creator?.firstname+" "+comments?.creator?.lastname}</span>
                                            {(comments?.confirm_id==1)?
                                                <a className="mr-auto text-xs text-green-600 cursor-pointer" onClick={()=>changeParent(comments?.id,comments?.comment)} >{Lang("public.to_answer")}</a>
                                            :""
                                            }
                                        </div>
                                        <div className="text-gray-600 text-xs sm:text-sm ltr">{Tools?.toJalaliDateString(comments?.created_at)}</div>
                                        <div className="mt-2">{comments?.comment}</div>
                                        {(access)? <div className="intro-y flex text-xs sm:text-sm flex-col sm:flex-row">
                                            <>
                                                {(comments?.confirmer)&&
                                                    <div className="flex items-center">
                                                        <div className="mr-3 ml-auto">
                                                            <span className="font-medium">{comments?.confirmer?.firstname+" "+comments?.confirmer?.lastname}</span>{" , "}
                                                            <span className={"mr-auto  text-xl text-"+comments?.confirm_status?.color}>{comments?.confirm_status?.["title_"+local]}</span>{" "+Lang("public.comment")}
                                                        </div>
                                                    </div>
                                                }
                                                {(comments?.editor)&&
                                                    <div className="flex items-center text-gray-700 dark:text-gray-600 sm:mr-auto mt-5 sm:mt-0">
                                                        <div className="mr-3 ml-auto">
                                                            <span className="font-medium">{comments?.editor?.firstname+" "+comments?.editor?.lastname}</span>{" "+Lang([",","public.editor_record"])}
                                                        </div>
                                                    </div> 
                                                }
                                                </>
                                            </div>               
                                        :""}
                                    </div>
                                </div>
                            </div>
                            {comments?.childs?.map((child, i)=>{
                                let classDiv = (i==0)? "pt-5" : "mt-5 pt-5 border-t border-gray-200 dark:border-dark-5";
                                return(
                                    <div className={"sm:mr-10 mr-7 "+classDiv}>
                                        <div className="flex">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-none image-fit">
                                                <Pic src={mediaPath + "/users/" + child?.creator?.photo} defaultImg={`${mediaPath}/public/default/avatar.png`} classImg="rounded-full" key={"img" + child?.creator?.photo}  />
                                            </div>
                                            <div className="mr-3 flex-1">
                                                <div className="flex items-center">
                                                    <span className="font-medium">{child?.creator?.firstname+" "+child?.creator?.lastname}</span>
                                                </div>
                                                <div className="text-gray-600 text-xs sm:text-sm ltr">{Tools?.toJalaliDateString(child?.created_at)}</div>
                                                <div className="mt-2">{child?.comment}</div>
                                                {(access)? <div className="intro-y flex text-xs sm:text-sm flex-col sm:flex-row">
                                                    <>
                                                        {(child?.confirmer)&&
                                                            <div className="flex items-center">
                                                                <div className="mr-3 ml-auto">
                                                                    <span className="font-medium">{child?.confirmer?.firstname+" "+child?.confirmer?.lastname}</span>{" , "}
                                                                    <span className={"mr-auto  text-xl text-"+child?.confirm_status?.color}>{child?.confirm_status?.["title_"+local]}</span>{" "+Lang("public.comment")}
                                                                </div>
                                                            </div>
                                                        }
                                                        {(child?.editor)&&
                                                            <div className="flex items-center text-gray-700 dark:text-gray-600 sm:mr-auto mt-5 sm:mt-0">
                                                                <div className="mr-3 ml-auto">
                                                                    <span className="font-medium">{child?.editor?.firstname+" "+child?.editor?.lastname}</span>{" "+Lang([",","public.editor_record"])}
                                                                </div>
                                                            </div> 
                                                        }
                                                        </>
                                                    </div>               
                                                :""}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </>
                    );
                })}
                {(parentId>0)?
                    <>
                        <FeatherIcon name="XCircle" onClick={clearParent} />
                        <a href={"#"+parentId} className="cursor-auto"><div className="alert alert-secondary show mr-5 p-3" role="alert">{parentReply}</div></a>
                    </>
                :""}
            </div>
        </>
    );
}