"use client";

import { useState } from "react";
import {InfoHead} from '@/Components/Blog/Details/InfoHead';
import {InfoUserAdmin} from '@/Components/Blog/Details/InfoUserAdmin';
import {InfoReply} from '@/Components/Blog/Details/InfoReply';
import {InfoComments} from '@/Components/Blog/Details/InfoComments';

export const Info = ({ access,item,comments,creator,editor,laraAdmin,mediaPath,Lang,local,keyServer }) => {
    let [parentId, setParentId] = useState();
    let textComment = (comments?.length)? "text_comments_yes" : "text_comments_no";

    return(
        <>
            <div className="intro-y news p-5 box mt-1">
                <InfoHead item={item} mediaPath={mediaPath} Lang={Lang} />
                <div className="intro-y text-justify leading-relaxed" dangerouslySetInnerHTML={{__html: item?.text}} />
                {access? <InfoUserAdmin creator={creator} editor={editor} mediaPath={mediaPath} Lang={Lang} /> :"" }
                <div className="intro-y mt-5 pt-5 border-t border-gray-200 dark:border-dark-5">
                    <div className="text-base sm:text-lg font-medium">{Lang("public."+textComment)}</div>   
                </div>
                <InfoComments comments={comments} access={access} parent={setParentId} parentId={parentId} mediaPath={mediaPath} Lang={Lang} local={local} />
                <InfoReply laraAdmin={laraAdmin} blogId={item?.id} parentId={parentId} sendKeyServer={keyServer} />
            </div>
        </>
    );
}