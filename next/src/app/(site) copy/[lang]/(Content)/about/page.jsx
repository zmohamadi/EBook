"use client";

import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Banner,Counter,Info,Touch } from "@/app/(site)/[lang]/(Content)/about/DetailComponent";

export default function Page({ params }) {
    const { Lang } = useLang();
    const { assetsPath } = useConfig();
    const local = params?.lang ? params?.lang : "en"; 

    return (
        <>
            <div className="page-content bg-light">
                <Counter local={local} />
                <Banner assetsPath={assetsPath} />
                {/* Our Mission Section */}
                <Info assetsPath={assetsPath} />
                {/* Get In Touch */}
                <Touch Lang={Lang} local={local} />
                {/* Get In Touch End */}
            </div>	
        </>
    );
}
