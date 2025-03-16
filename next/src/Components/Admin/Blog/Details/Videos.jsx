"use client";

import { useLang } from "@/lib/lang";
import { useConfig } from '@/lib/config';
import { FeatherIcon } from "@/Theme/Midone/Utils";

export const Videos = ({ item }) => {
    const {Lang} = useLang();
    const {mediaPath} = useConfig();

    return <>
        <a href={mediaPath+"/blogs/"+item} target="blank" className="w-3/5 file__icon file__icon--file mx-auto">
            <div className="file__icon__file-name">MP4</div>
        </a>
        <a href={mediaPath+"/blogs/"+item} className="block font-medium mt-4 text-center truncate">{item}</a> 
        <div className="absolute top-0 left-0 ml-2 mt-2 dropdown mr-auto">
            <a className="dropdown-toggle w-5 h-5 block" href="#wrapper " aria-expanded="false">
                <FeatherIcon name="MoreVertical" />
            </a>
            <div className="dropdown-menu w-40">
                <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                    <a href={mediaPath+"/blogs/"+item} download={item} target="blank" className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md">
                        <FeatherIcon name="ExternalLink" className="w-4" />{Lang("public.download")}
                    </a>
                </div>
            </div>
        </div>  
    </>
}