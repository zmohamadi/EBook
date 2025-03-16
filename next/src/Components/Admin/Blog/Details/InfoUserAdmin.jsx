"use client";

import { Pic } from "@/Theme/Midone/Utils";

export const InfoUserAdmin = ({creator,editor,mediaPath,Lang}) => {
    return(
        <>
            <div className="intro-y flex text-xs sm:text-sm flex-col sm:flex-row items-center mt-5 pt-5 border-t border-gray-200 dark:border-dark-5">
                <div className="flex items-center">
                    <div className="w-12 h-12 flex-none image-fit">
                        <Pic src={mediaPath + "/users/" + creator?.photo} defaultImg={`${mediaPath}/public/default/avatar.png`} classImg="rounded-full" key={"img" + creator?.photo}  />
                    </div>
                    <div className="mr-3 ml-auto">
                        <span className="font-medium">{creator?.firstname+" "+creator?.lastname}</span>{" "+Lang([",","public.creator_record"])}
                    </div>
                </div>
                {(editor)?
                    <div className="flex items-center text-gray-700 dark:text-gray-600 sm:mr-auto mt-5 sm:mt-0">
                        <div className="w-12 h-12 flex-none image-fit">
                            <Pic src={mediaPath + "/users/" + editor?.photo} defaultImg={`${mediaPath}/public/default/avatar.png`} classImg="rounded-full" key={"img" + editor?.photo}  />
                        </div>
                        <div className="mr-3 ml-auto">
                            <span className="font-medium">{editor?.firstname+" "+editor?.lastname}</span>{" "+Lang([",","public.editor_record"])}
                        </div>
                    </div>                                
                :""}
            </div>
        </>
    );
}