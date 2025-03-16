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
    const formUrl = "/products";
    let url = laraAdmin+formUrl+"/"+params?.id;
    
    useEffect(()=>{
        get(url, component, "info");
    }, []);

    let data = component?.state?.info;

    return(
        <>
        <Frame>
            <Box cols={"cols-1"}>
            {/* <div className="content col-span-12"> */}
                    {/* <div className="intro-y news xl:w-3/5 p-5 box mt-8"> */}
                        <h2 className="intro-y font-medium text-xl sm:text-2xl">
                            {data?.name}
                        </h2>
                        <div className="intro-y text-gray-700 dark:text-gray-600 mt-3 text-xs sm:text-sm">
                            {/* 28 مهر 1400<span className="mx-1">•</span>  */}
                            <span className="mx-1">•</span>{data?.brand?.name_fa}
                            <span className="mx-1">•</span>{data?.category?.title_fa} 
                            </div>
                        <div className="intro-y mt-6">
                            {/* <div className="news__preview image-fit"> */}
                                <Pic  key={"img"+data?.image} src={mediaPath+"/product/"+data?.image} defaultImg={`${mediaPath}/public/default/avatar.png`} classImg="rounded-md" />
                            {/* </div>/ */}
                        </div>
                        {/* <div className="intro-y flex relative pt-16 sm:pt-6 items-center pb-6">
                            <a href="" className="intro-x w-8 h-8 sm:w-10 sm:h-10 flex flex-none items-center justify-center rounded-full border border-gray-400 dark:border-dark-5 dark:bg-dark-5 dark:text-gray-300 text-gray-600 ml-3 tooltip" title="بوکمارک"> <i data-feather="bookmark" className="w-3 h-3"></i> </a>
                            
                            <div className="absolute sm:relative -mt-12 sm:mt-0 w-full flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm">
                                <div className="intro-x mr-1 sm:mr-3"> نظرات: <span className="font-medium">67</span> </div>
                                <div className="intro-x mr-1 sm:mr-3"> مشاهده: <span className="font-medium">46k</span> </div>
                                <div className="intro-x sm:ml-3 mr-auto"> لایک: <span className="font-medium">42k</span> </div>
                            </div>
                            <a href="" className="intro-x w-8 h-8 sm:w-10 sm:h-10 flex flex-none items-center justify-center rounded-full bg-theme-31 dark:bg-dark-5 dark:text-gray-300 text-theme-26 mr-auto sm:ml-0 tooltip" title="اشتراک"> <i data-feather="share-2" className="w-3 h-3"></i> </a>
                            <a href="" className="intro-x w-8 h-8 sm:w-10 sm:h-10 flex flex-none items-center justify-center rounded-full bg-theme-17 text-white mr-3 tooltip" title="دانلود پی‌دی‌اف"> <i data-feather="share" className="w-3 h-3"></i> </a>
                        </div> */}
                        <div className="intro-y text-justify leading-relaxed">
                            <span className="font-medium">{Lang('review')}: </span>
                            {data?.review}
                        </div>
                        <div className="intro-y text-justify leading-relaxed">
                        <span className="font-medium">{Lang('usage')}: </span>

                            {data?.usage}
                        </div>
                        <div className="intro-y text-justify leading-relaxed">
                        <span className="font-medium">{Lang('description')}: </span>

                            {data?.description}
                        </div>
                        {/* <div className="intro-y flex text-xs sm:text-sm flex-col sm:flex-row items-center mt-5 pt-5 border-t border-gray-200 dark:border-dark-5">
                            <div className="flex items-center">
                                <div className="w-12 h-12 flex-none image-fit">
                                    <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-13.jpg" />
                                </div>
                                <div className="mr-3 ml-auto">
                                    <a href="" className="font-medium">جانی دپ</a>, نویسنده
                                    <div className="text-gray-600">فرانت اند دولوپر سینیور</div>
                                </div>
                            </div>
                            <div className="flex items-center text-gray-700 dark:text-gray-600 sm:mr-auto mt-5 sm:mt-0">
                                اشتراک این پست: 
                                <a href="" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border dark:border-dark-5 mr-2 text-gray-500 zoom-in tooltip" title="فیسبوک"> <i className="w-3 h-3 fill-current" data-feather="facebook"></i> </a>
                                <a href="" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border dark:border-dark-5 mr-2 text-gray-500 zoom-in tooltip" title="توییتر"> <i className="w-3 h-3 fill-current" data-feather="twitter"></i> </a>
                                <a href="" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border dark:border-dark-5 mr-2 text-gray-500 zoom-in tooltip"title="لینکدین"> <i className="w-3 h-3 fill-current" data-feather="linkedin"></i> </a>
                            </div>
                        </div> */}
                       
                    {/* </div> */}
                {/* </div> */}
            </Box>
        </Frame>
        </>
    );
}