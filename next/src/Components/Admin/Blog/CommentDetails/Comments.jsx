"use client";

import { useData,useFormRefs,Tools,Pic,FeatherIcon } from "@/Theme/Midone/Utils";
import { Button,Textarea } from "@/Theme/Midone/Forms";

export const Comments = ({ keyServer,itemId,comments,laraAdmin,formUrl,mediaPath,Lang,local }) => {
    const {save} = useData();
    let component = useFormRefs();
    const displayIcon = (id) => {
        return(
            <>
                <div className='float-left flex flex-row mr-auto'>
                    <div className='bg-white py-1 flex flex-row float-left mx-1 rounded-md'>
                        <FeatherIcon iconClassName="ml-2 text-green-600" size="18" name="Pocket" tooltip={Lang('public.confirm')}
                            onClick={()=>confirm(id)} />
                        <FeatherIcon iconClassName="ml-2 text-red-600" size="18" name="Delete" tooltip={Lang('public.rejected')}
                            onClick={()=>rejected(id)} />
                    </div>
                    <div className="text-lg leading-4 text-black hidden">|</div>
                    <div className='bg-white py-1 flex flex-row float-left mx-1 rounded-md'>
                        <FeatherIcon iconClassName="ml-2 text-black-600" size="18" name="Edit2" tooltip={Lang('public.edit')}
                            onClick={()=>edit(id)} />
                        <FeatherIcon iconClassName="ml-2 text-red-500" size="18" name="Trash2" tooltip={Lang('public.delete')}
                            onClick={()=>deleted(id)} />
                    </div>
                </div>
            </>
        );
    }
    const completeEdit = ()=>{
        completeSetState();
        typeof window != "undefined" && window?.$(`.show-comment`).addClass("hidden").removeClass("sm:flex sm:flex-row mt-2");
    };
    const completeSetState = ()=>{ keyServer(Math.random()); };
    const confirm = (id) => {
        typeof window != "undefined" && window?.$(`.show-comment`).addClass("hidden").removeClass("sm:flex sm:flex-row mt-2");
        save(`${laraAdmin}${formUrl}/${id}?type=1`, component, "edit", `/blogComments/${itemId}?`+Math.random(), ()=>completeSetState())
    }
    const rejected = (id) => {
        typeof window != "undefined" && window?.$(`.show-comment`).addClass("hidden").removeClass("sm:flex sm:flex-row mt-2");
        save(`${laraAdmin}${formUrl}/${id}?type=2`, component, "edit", `/blogComments/${itemId}?`+Math.random(), ()=>completeSetState())
    }
    const deleted = (id) => {
        let redirectUrl = "/blogComments";
        let callBackUrl = ()=>{};
        if(itemId != id)
        {
            redirectUrl = `/blogComments/${itemId}?`+Math.random();
            callBackUrl = ()=>completeSetState();
        }
        typeof window != "undefined" && window?.$(`.show-comment`).addClass("hidden").removeClass("sm:flex sm:flex-row mt-2");
        save(laraAdmin+formUrl+"/delete/"+id, component, "edit", redirectUrl, callBackUrl);
    }
    const edit = (id) => {
        typeof window != "undefined" && window?.$(`.show-comment`).addClass("hidden").removeClass("sm:flex sm:flex-row mt-2");
        typeof window != "undefined" && window?.$(`#comment-${id}`).removeClass("hidden").addClass("sm:flex sm:flex-row mt-2");
    }
    const editItem = (id)=>{
        save(`${laraAdmin}${formUrl}/${id}?type=3`, component, "edit", "", ()=>completeEdit());
    };

    return(
        <>
            <div className="intro-y news p-5 box mt-1">
                <div className="intro-y mt-5 pb-10">
                    {comments?.map((comments, i)=>{
                        let classDiv = (i==0)? "pt-5" : "mt-5 pt-5 border-t border-gray-200 dark:border-dark-5";
                        let classColor = (itemId==comments?.id)? "alert alert-warning show mr-5 p-3" : "";

                        return(
                            <>
                                <div className={classDiv+" "+classColor}>
                                    <div className="flex">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 flex-none image-fit">
                                            <Pic src={mediaPath+"/users/"+comments?.creator?.photo} defaultImg={`${mediaPath}/public/default/avatar.png`} classImg="rounded-full" key={"img"+comments?.creator?.photo}  />
                                        </div>
                                        <div className="mr-3 flex-1">
                                            <div className="flex items-center">
                                                <span className="font-medium">{comments?.creator?.firstname+" "+comments?.creator?.lastname}</span>
                                                {(comments?.confirm_id==2)&& displayIcon(comments?.id)}
                                            </div>
                                            <div className="text-gray-600 text-xs sm:text-sm ltr">{Tools?.toJalaliDateString(comments?.created_at)}</div>
                                            <div className="mt-2">{comments?.comment}</div>
                                            <div className="intro-y flex text-xs sm:text-sm flex-col sm:flex-row">
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
                                            </div>
                                            <div className="hidden show-comment" id={"comment-"+comments?.id}>
                                                <div className="sm:w-full">
                                                    <Textarea row="2" label="edit_comment" required="true" refItem={[component, "comment-"+comments?.id]} defaultValue={comments?.comment} />
                                                </div>
                                                <div className="sm:mt-10 sm:mr-auto">
                                                    <Button label="send" onClick={()=>editItem(comments?.id)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {comments?.childs?.map((child, i)=>{
                                    let classDiv = (i==0)? "pt-5" : "mt-5 pt-5 border-t border-gray-200 dark:border-dark-5";
                                    classColor = (itemId==child?.id)? "alert alert-warning show mr-5 p-3" : "";

                                    return(
                                        <div className={"sm:mr-10 mr-7 "+classDiv+" "+classColor}>
                                            <div className="flex">
                                                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-none image-fit">
                                                    <Pic src={mediaPath + "/users/" + child?.creator?.photo} defaultImg={`${mediaPath}/public/default/avatar.png`} classImg="rounded-full" key={"img" + child?.creator?.photo}  />  
                                                </div>
                                                <div className="mr-3 flex-1">
                                                    <div className="flex items-center">
                                                        <span className="font-medium">{child?.creator?.firstname+" "+child?.creator?.lastname}</span>
                                                        {(child?.confirm_id==2)&& displayIcon(child?.id)}
                                                    </div>
                                                    <div className="text-gray-600 text-xs sm:text-sm ltr">{Tools?.toJalaliDateString(child?.created_at)}</div>
                                                    <div className="mt-2">{child?.comment}</div>
                                                    <div className="intro-y flex text-xs sm:text-sm flex-col sm:flex-row">
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
                                                    </div>
                                                    <div className="hidden show-comment" id={"comment-"+child?.id}>
                                                        <div className="sm:w-full">
                                                            <Textarea row="2" label="edit_comment" required="true" refItem={[component, "comment-"+child?.id]} defaultValue={child?.comment} />
                                                        </div>
                                                        <div className="sm:mt-10 sm:mr-auto">
                                                            <Button label="send" onClick={()=>editItem(child?.id)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}