"use client"

import { useEffect,useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Slider,Category,LastProducts,BestSeller,Line,MostVisited,Brand } from "@/Theme/Site/Components/";

export default function Page({ params }) {
    const { Lang } = useLang();
    const { mediaPath,assetsPath } = useConfig();
    let {getNeedles} = useData();
    let [items, setItems] = useState();
    const local = params?.lang ? params?.lang : 'en' ;
    const formUrl = ""; 
    const laralelUrl = "/"; 

    useEffect(() => {
        window.$ && window.$('#top-menu').addClass('style-1 header-transparent');
        getNeedles(local, setItems);
        // getNeedles(local+laralelUrl, setItems);
    }, []);

    return(
        <>
            <Slider local={local} items={items?.sliders} assetsPath={assetsPath} mediaPath={mediaPath} Lang={Lang} />
            <Category  items={items?.categories?.filter(cat=>cat?.parent_id>0)} mediaPath={mediaPath} local={local} Lang={Lang} />
            <LastProducts   items={items?.lastProducts} categories={items?.categories} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
            <BestSeller  local={local} items={items?.bestSellerProducts} mediaPath={mediaPath} Lang={Lang} />
            <Line  items={items?.categories?.filter(cat=>cat?.parent_id==0)} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
            <Brand  local={local} items={items?.brands} assetsPath={assetsPath} mediaPath={mediaPath} Lang={Lang} />
            <MostVisited  items={items?.mostVisitedProducts} assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
        </>
    );
}