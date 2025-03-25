"use client"

import { useEffect,useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Banner,Info,RelatedBlogs } from "@/app/(site)/[lang]/(Content)/blog/[id]/DetailComponent";

export default function Page({ params }) {
    const { Lang } = useLang();
    const { mediaPath,assetsPath } = useConfig();
    let  { getNeedles } = useData();
    let [items, setItems] = useState();
    const id = params?.id;
    const local = params?.lang ? params?.lang : 'en';
    const formUrl = "/blog"; 
    const laralelUrl = "/blog"; 

    useEffect(() => {
        getNeedles(local+laralelUrl+"/"+id, setItems);
    }, []);
    let blog = items?.blog;
    let blogs = items?.blogs;

    return(
        <>
            <div className="page-content bg-light">
            {/* Banner Start */}
                <Banner brName={blog?.title} assetsPath={assetsPath} local={local} Lang={Lang} />
            {/* Banner End */}
                <section className="content-inner-1 z-index-unset">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-xl-6 mb-xl-0 mb-4"> 
                                <div className="corner-media">
                                    <img src={mediaPath+"/blog/"+blog?.thumb} alt="" className="rounded"/>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6">
                            {/* blog start  */}
                                <Info blog={blog} Lang={Lang} local={local} />
                                <RelatedBlogs blogs={blogs} mediaPath={mediaPath} Lang={Lang} local={local} />
                            {/* blog END */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}