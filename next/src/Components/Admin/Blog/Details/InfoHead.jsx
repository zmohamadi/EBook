"use client";

import { Tools,Pic } from "@/Theme/Midone/Utils";

export const InfoHead = ({ item,mediaPath,Lang }) => {
    
    return(
        <>
            <h2 className="intro-y font-medium text-xl sm:text-2xl">{item?.title}</h2>
            <div className="intro-y text-gray-700 dark:text-gray-600 mt-3 text-xs sm:text-sm ltr">{Tools?.toJalaliDateString(item?.created_at)}
                {item?.subject? <> <span className="mx-1">•</span> <a className="text-theme-17 dark:text-gray-500" href="">{item?.subject?.["title_fa"]}</a></> :""}
            </div>
            <div className="intro-y mt-6">
                <div className="news__preview image-fit">
                    <Pic src={mediaPath + "/blogs/" + item?.thumb} defaultImg={`${mediaPath}/public/default/blog.png`} classImg="rounded-md" key={"img" + item?.thumb}  />
                </div>
            </div>
            <div className="intro-y flex relative pt-16 sm:pt-6 items-center pb-6">
                <div className="absolute sm:relative -mt-12 sm:mt-0 w-full flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm">
                    <div className="intro-x mr-auto">{Lang("public.view")+" : "}<span className="font-medium">{item?.count_view}</span> </div>
                    <div className="intro-x mr-1 sm:mr-3 sm:ml-3">{Lang("public.comments")+" : "}<span className="font-medium">{item?.count_comment_confirmed}</span> </div>
                </div>
            </div>
        </>
    );
}