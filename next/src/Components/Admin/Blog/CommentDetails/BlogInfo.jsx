"use client";

export const BlogInfo = ({ blog,Lang }) => {
    let limit = 500;
    let text = blog?.text;
    if(text?.length > limit) text = text?.substring(0, limit)+"...";

    return(
        <>
            <div className="intro-y box p-5 bg-theme-17 text-white mt-5">
                <div className="flex items-center">
                    <h2 className="text-2xl font-medium leading-none mt-3">{blog?.title}</h2>
                </div>
                <div className="mt-4">
                    <h6 className="text-sm font-medium leading-none mt-4">{Lang("public.creator_record")+" : "+blog?.creator?.firstname+" "+blog?.creator?.lastname}</h6>
                    {(blog?.editor)? <h6 className="text-sm font-medium leading-none mt-4">{Lang("public.editor_record")+" : "+blog?.editor?.firstname+" "+blog?.editor?.lastname }</h6> : ""}
                    <div className="mt-5" dangerouslySetInnerHTML={{__html: text}} />
                </div>
            </div>
        </>
    );
}