"use client"

import { useEffect,useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Slider,Category,CtaBanner,Books, Authors, Blog } from "@/Theme/Site/Components";

export default function Page({ params }) {
    const { Lang } = useLang();
    const { mediaPath,assetsPath } = useConfig();
    let {getNeedles} = useData();
    let [items, setItems] = useState();
    const local = params?.lang ? params?.lang : 'en' ;
    const formUrl = ""; 
    const laralelUrl = "/home"; 

    useEffect(() => {
        window.$ && window.$('#top-menu').addClass('style-1 header-transparent');
        // getNeedles(local, setItems);
        getNeedles(local+laralelUrl, setItems);
    }, []);

    console.log(items);

    return(
        <>
            <Slider local={local} items={items?.sliders} assetsPath={assetsPath} mediaPath={mediaPath} Lang={Lang} />
            <Books  items={items?.books} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
            <Category  items={items?.categories} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
            {/* <CtaBanner/> */}
            <Authors   items={items?.authors}  assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
            <Blog   items={items?.blog} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
            
        </>
    );
}