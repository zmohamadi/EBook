"use client";

import { Tools,Pic,FeatherIcon } from "@/Theme/Midone/Utils";

export const WaitingComments = ({ waitingComments,nextAdmin,mediaPath,Lang }) => {

    return(
        <>
        {/* BEGIN: Inbox Content */}
            <div className="intro-y inbox box mt-5">
                {waitingComments?.lenght == 0?
                    <div className="p-5 flex flex-col-reverse sm:flex-row text-gray-600 border-b border-gray-200 dark:border-dark-1">{Lang("public.no_data")}</div>
                :
                    <div className="overflow-x-auto sm:overflow-x-visible">
                        {waitingComments?.map((comment, index)=>{
                            const gender = Tools?.displayGender(comment?.gender, comment?.gender_id);
                            return(
                                <div className="intro-y">
                                    <div className="inbox__item inline-block sm:block text-gray-700 dark:text-gray-500 bg-gray-100 dark:bg-dark-1 border-b border-gray-200 dark:border-dark-1">
                                        <div className="flex px-5 py-3">
                                            <div className="w-56 flex-none flex items-center ml-5">
                                                <FeatherIcon name="Edit" url={nextAdmin+"/blogComments/"+comment?.id} />
                                                <div className="w-6 h-6 flex-none image-fit relative mr-5">
                                                    <Pic src={mediaPath+"/users/"+comment?.creator?.photo} defaultImg={`${mediaPath}/public/default/avatar.png`} classImg="rounded-full" key={"img"+comment?.creator?.photo}  />
                                                </div>
                                                <div className="inbox__item--sender truncate mr-3">{gender+" "+comment?.creator?.firstname+" "+comment?.creator?.lastname}</div>
                                            </div>
                                            <div className="w-64 sm:w-auto truncate"> <span className="inbox__item--highlight">{comment?.comment}</span></div>
                                            <div className="inbox__item--time whitespace-nowrap mr-auto pr-10 ltr">{Tools?.toJalaliDateString(comment?.created_at)}</div>
                                        </div>
                                    </div>
                                </div>        
                            );
                        })}
                    </div>
                }
            </div>
        {/* END: Inbox Content */}
        </>
    );
}