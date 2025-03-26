"use client";

export function Books({ items,mediaPath,Lang }) {
    const authors = items?.filter((items,i)=>items?.type == 1);
    const narrators = items?.filter((items,i)=>items?.type == 2);
    const translators = items?.filter((items,i)=>items?.type == 3);
    return (
        <>
            <div className="tab-content mt-5">
                <div id="profile" className="tab-pane active" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="intro-y box col-span-12 lg:col-span-6">
                            <div className="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200 dark:border-dark-5">
                                <h2 className="font-medium text-base ml-auto">{Lang("public.title_details_list_1")}</h2>
                                <div className="dropdown mr-auto sm:hidden">
                                    <a className="dropdown-toggle w-5 h-5 block" href="javascript:;" aria-expanded="false"> <i data-feather="more-horizontal" className="w-5 h-5 text-gray-600 dark:text-gray-300"></i> </a>
                                    <div className="dropdown-menu w-40">
                                        <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                            <a href="javascript:;" className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 rounded-md"> <i data-feather="file" className="w-4 h-4 ml-2"></i> دانلود فایل اکسل</a>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-outline-secondary hidden sm:flex"> <i data-feather="file" className="w-4 h-4 ml-2"></i> دانلود فایل اکسل</button>
                            </div>
                            <div className="p-5">
                                {authors?.map((author,index)=>{
                                    let classMargin = index>0? "mt-5":"";
                                    return(
                                        <div className={"relative flex items-center "+classMargin}>
                                            <div className="w-12 h-12 flex-none image-fit">
                                                <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-7.jpg"/>
                                            </div>
                                            <div className="mr-4 ml-auto">
                                                <a href="" className="font-medium">ارنولد شواویتزگر</a> 
                                                <div className="text-gray-600 ml-5 sm:mr-5"l>قالب اچ تی ام ال بوت‌سترپ مدیریتی</div>
                                            </div>
                                            <div className="font-medium text-gray-700 dark:text-gray-600">19+ تومان</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="intro-y box col-span-12 lg:col-span-6">
                            <div className="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200 dark:border-dark-5">
                                <h2 className="font-medium text-base ml-auto">{Lang("public.title_details_list_2")}</h2>
                                <div className="dropdown mr-auto sm:hidden">
                                    <a className="dropdown-toggle w-5 h-5 block" href="javascript:;" aria-expanded="false"> <i data-feather="more-horizontal" className="w-5 h-5 text-gray-600 dark:text-gray-300"></i> </a>
                                    <div className="dropdown-menu w-40">
                                        <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                            <a href="javascript:;" className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 rounded-md"> <i data-feather="file" className="w-4 h-4 ml-2"></i> دانلود فایل اکسل</a>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-outline-secondary hidden sm:flex"> <i data-feather="file" className="w-4 h-4 ml-2"></i> دانلود فایل اکسل</button>
                            </div>
                            <div className="p-5">
                                {narrators?.map((narrator,index)=>{
                                    let classMargin = index>0? "mt-5":"";
                                    return(
                                        <div className={"relative flex items-center "+classMargin}>
                                            <div className="w-12 h-12 flex-none image-fit">
                                                <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-7.jpg"/>
                                            </div>
                                            <div className="mr-4 ml-auto">
                                                <a href="" className="font-medium">ارنولد شواویتزگر</a> 
                                                <div className="text-gray-600 ml-5 sm:mr-5"l>قالب اچ تی ام ال بوت‌سترپ مدیریتی</div>
                                            </div>
                                            <div className="font-medium text-gray-700 dark:text-gray-600">19+ تومان</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="intro-y box col-span-12 lg:col-span-6">
                            <div className="flex items-center px-5 py-5 sm:py-3 border-b border-gray-200 dark:border-dark-5">
                                <h2 className="font-medium text-base ml-auto">{Lang("public.title_details_list_3")}</h2>
                                <div className="dropdown mr-auto sm:hidden">
                                    <a className="dropdown-toggle w-5 h-5 block" href="javascript:;" aria-expanded="false"> <i data-feather="more-horizontal" className="w-5 h-5 text-gray-600 dark:text-gray-300"></i> </a>
                                    <div className="dropdown-menu w-40">
                                        <div className="dropdown-menu__content box dark:bg-dark-1 p-2">
                                            <a href="javascript:;" className="flex items-center p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 rounded-md"> <i data-feather="file" className="w-4 h-4 ml-2"></i> دانلود فایل اکسل</a>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-outline-secondary hidden sm:flex"> <i data-feather="file" className="w-4 h-4 ml-2"></i> دانلود فایل اکسل</button>
                            </div>
                            <div className="p-5">
                                {translators?.map((translator,index)=>{
                                    let classMargin = index>0? "mt-5":"";
                                    return(
                                        <div className={"relative flex items-center "+classMargin}>
                                            <div className="w-12 h-12 flex-none image-fit">
                                                <img alt="Icewall Tailwind HTML Admin Template" className="rounded-full" src="dist/images/profile-7.jpg"/>
                                            </div>
                                            <div className="mr-4 ml-auto">
                                                <a href="" className="font-medium">ارنولد شواویتزگر</a> 
                                                <div className="text-gray-600 ml-5 sm:mr-5"l>قالب اچ تی ام ال بوت‌سترپ مدیریتی</div>
                                            </div>
                                            <div className="font-medium text-gray-700 dark:text-gray-600">19+ تومان</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}