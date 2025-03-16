"use client";
import { useEffect,useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData,useFormRefs,Frame } from "@/Theme/Midone/Forms";
import { Loading } from "@/Theme/Midone/Utils";
import { Comments,BlogInfo } from '@/Components/Blog/CommentDetails';

export default function View({ id }){
    const {Lang,local} = useLang();
    const {laraAdmin,mediaPath} = useConfig();
    let {get} = useData();
    let component = useFormRefs();
    let [infoServer, setInfoServer] = useState(1);
    const formUrl = "/blog-comments";
    let url = laraAdmin+formUrl+"/details/"+id;

    useEffect(() => {
        get(url, component, "info");
    }, [infoServer]);
    
    let data = component?.state?.info;
    let item = data?.item;
    let blog = (data?.blog)? data?.blog : [];
    let comments = (data?.comments)? data?.comments : [];

    return(
        <Frame title={Lang(["public.blog","public.comments"])}>
            {(data == undefined)?
                <Loading />
            :
                <>
                    <div className="col-span-12 lg:col-span-4 xxl:col-span-10 ">
                        <BlogInfo blog={blog} Lang={Lang} />
                    </div>
                    <div className="col-span-12 lg:col-span-8 xxl:col-span-10 ">
                        <Comments keyServer={setInfoServer} itemId={item?.id} comments={comments} laraAdmin={laraAdmin} formUrl={formUrl} Lang={Lang} local={local} mediaPath={mediaPath} />
                    </div>
                </>
            }
        </Frame>
    );
}