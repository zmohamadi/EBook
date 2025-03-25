"use client"

import { useEffect,useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { GalleryProduct,InfoProduct,RelatedProduct,StepProduct,TabsProduct,AttachmentProduct } from "@/app/(site)/[lang]/(Shop)/products/[id]/ProductComponent";
import { BreadCrumb } from "@/Theme/Site/Components/Public/BreadCrumb";
import { Error404 } from "@/Theme/Site/Components/Public/Error404";

export default function Page({ params }) {
    const { Lang } = useLang();
    const { mediaPath,assetsPath } = useConfig();
    let {getNeedles,getInfoSite} = useData();
    let [items, setItems] = useState();
    const id = params?.id;
    const local = params?.lang ? params?.lang : 'en';
    const formUrl = "/products"; 
    const laralelUrl = "/products"; 

    useEffect(() => {
        getNeedles(local+laralelUrl+"/"+id, setItems);
    }, []);

    return(
        <>
            {(items==undefined)?
                // <Error404 assetsPath={assetsPath} />
                <span>Load...</span>
            :
                <div className="page-content bg-light">
                    <div className="d-sm-flex justify-content-between container-fluid py-3">
						<BreadCrumb brName={items?.product?.name} local={local} />
                    </div>
                    <InfoProduct item={items?.product} mediaPath={mediaPath} assetsPath={assetsPath} Lang={Lang} local={local} />
                    <TabsProduct item={items?.product} mediaPath={mediaPath} assetsPath={assetsPath} Lang={Lang} local={local} />
                    <AttachmentProduct item={items?.product} assetsPath={assetsPath} mediaPath={mediaPath} Lang={Lang} local={local} />
                    <RelatedProduct items={items?.products} mediaPath={mediaPath} Lang={Lang} local={local} />
                </div>
            }
        </>
    );
}