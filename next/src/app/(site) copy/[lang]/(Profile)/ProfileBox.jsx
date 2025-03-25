"use client"

import { useEffect,useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Banner } from "@/app/(site)/[lang]/(Content)/blog/Banner";
import { ProfileMenus } from "./ProfileMenus";

export function ProfileBox({ children }) {
    const { Lang,local } = useLang();
    const { mediaPath,assetsPath } = useConfig();

    return(
        <>
            <Banner assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
            <div class="content-inner-1">
			<div class="container">
                <div class="row">
					<ProfileMenus/>
                    <section class="col-xl-9 account-wrapper">
					<div class="account-card">

							{children}
						</div>
                    </section>
                </div>
      		</div>
		</div>
        </>
    );
}