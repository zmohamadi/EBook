"use client";
import { FeatherIcon } from "@/Theme/Midone";

export function Info({ item,mediaPath,Lang }) {

    const displayDetails = (icon,field,color="") => { 
        return(
            <div className="truncate sm:whitespace-normal flex items-center">
                {color==""?
                    <> <FeatherIcon iconClassName="ml-2" size="18" name={icon} /><span>{field}</span> </>
                :
                    <> <FeatherIcon iconClassName="ml-2" size="18" name={icon} color={color}/><span>{field}</span> </>
                }
                {/* <FeatherIcon iconClassName="ml-2" size="18" name={icon} color={(color=="")? "":color}/><span>{field}</span> */}
            </div>
        );
    };
    const displayCount = (translate,field) => { 
        return(
            <div className="text-center rounded-md w-20 py-3">
                <div className="font-medium text-theme-17 dark:text-theme-3 text-xl">{field}</div>
                <div className="text-gray-600">{Lang("public."+translate)}</div>
            </div>
        );
    };

    return (
        <div className="intro-y box px-5 pt-5 mt-5">
            <div className="flex flex-col lg:flex-row border-b border-gray-200 dark:border-dark-5 pb-5 -mx-5">
                <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
                        <img alt={"Pic"+`${item?.firstname}`} className="rounded-full" src={`${mediaPath}/users/${item?.photo}`}/>
                    </div>
                    <div className="mr-5">
                        <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">{`${item?.firstname || "-"} ${item?.lastname || "-"}`}</div>
                        <div className="text-gray-600">
                            {item?.narrator == 1 && Lang(["public.narrator"," , "])}
                            {item?.author == 1 && Lang(["public.author"," , "])}
                            {item?.translator == 1 && Lang(["public.translator"])}
                        </div>
                    </div>
                </div>
                <div className="mt-6 lg:mt-0 flex-1 dark:text-gray-300 px-5 border-l border-r border-gray-200 dark:border-dark-5 border-t lg:border-t-0 pt-5 lg:pt-0">
                    <div className="font-medium text-center lg:text-right lg:mt-3">{Lang("public.view_info")}</div>
                    <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                        {displayDetails("PhoneCall",item?.mobile || "-")}
                        {displayDetails("Heart", item?.birth_date || "-", "red")}
                        {displayDetails("Heart", item?.death_date || "-", "black")}
                        {displayDetails("Flag",item?.nationality || "-")}
                        {displayDetails("User",item?.role_id == 1 ? Lang(["public.admin"]) : Lang(["public.user"]))}
                        {displayDetails("Activity",item?.status_id == 1 ? Lang(["public.active"]) : Lang(["public.inactive"]))}
                        {/* {displayDetails("Globe",item?.lang || "-")} */}
                    </div>
                </div>
                <div className="mt-6 lg:mt-0 flex-1 flex items-center justify-center px-5 border-t lg:border-0 border-gray-200 dark:border-dark-5 pt-5 lg:pt-0">
                    {displayCount("is_it_narrator",item?.narrator == 1 ? Lang(["public.yes"]) : Lang(["public.no"]))}
                    {displayCount("is_it_author",item?.author == 1 ? Lang(["public.yes"]) : Lang(["public.no"]))}
                    {displayCount("is_it_translator",item?.translator == 1 ? Lang(["public.yes"]) : Lang(["public.no"]))}
                </div>
            </div>
            <div className="nav nav-tabs flex-col sm:flex-row justify-center lg:justify-start" role="tablist">
                <p className="py-4 sm:mr-8 flex items-center">{Lang("public.biography")+" , "+item?.biography}</p>
            </div>
        </div>
    );
}