"use client";

import { useData,useFormRefs,Button,Textarea } from "@/Theme/Midone/Forms";

export const InfoReply = ({ sendKeyServer,laraAdmin,blogId,parentId=0 }) => {
    let { save } = useData();
    let component = useFormRefs();
    const saveItem = ()=>save(laraAdmin+`/blog-comments/send?b=${blogId}&p=${parentId}`, component, "save", `/blogs/${blogId}?`+Math.random(), (request, response)=>sendKeyServer(Math.random()));

    return(
        <>
            <Textarea placeholder="پیام خود را بنویسید..." refItem={[component, "comment"]} required="true" />
            <Button className="btn btn-primary w-20 m-3" label="send" onClick={saveItem} component={component} />
        </>
    );
}