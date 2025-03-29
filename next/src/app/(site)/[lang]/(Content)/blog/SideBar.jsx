"use client";

import { Subject,Search,Reset,SideBlog,Keywords } from "@/app/(site)/[lang]/(Content)/blog/SideBarComponent";

export const SideBar = ({ assetsPath, mediaPath, local, Lang }) => {
    return (
        <>
        <div class="main-sidebar">
            <Search Lang={Lang} />
            <Subject local={local} Lang={Lang} />
            <SideBlog mediaPath={mediaPath} assetsPath={assetsPath} local={local} Lang={Lang} />
            <Reset Lang={Lang} resetFor="blog" />
            
        </div>
           
        </>
    );
};
