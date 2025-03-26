"use client";

import { Subject,Search,Reset,SideBlog,Keywords } from "@/app/(site)/[lang]/(Content)/blog/SideBarComponent";

export const SideBar = ({ assetsPath, mediaPath, local, Lang }) => {
    return (
        <>
            <div className="col-xl-4 col-lg-4">
                <aside className="side-bar sticky-top mt-lg-0 mt-md-5 mt-3">
                    <Search Lang={Lang} />
                    <Subject local={local} Lang={Lang} />
                    <SideBlog mediaPath={mediaPath} assetsPath={assetsPath} local={local} Lang={Lang} />
                    {/* <Keywords Lang={Lang} /> */}
                    <Reset Lang={Lang} resetFor="blog" />
                </aside>
            </div>
        </>
    );
};
