"use client"

import { useEffect,useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Banner } from "@/app/(site)/[lang]/(Content)/blog/Banner";

export const Keywords = ({ keywords,Lang }) => {

    return(
        <>
            <div className="dz-share-post meta-bottom">
                <div className="post-tags">
                    <strong>{Lang("public.tags")+":"}</strong>
                    {keywords?.map((keyword, index)=>{
                        return(
                            <a href="javascript:void(0);" key={index}>Dresses</a>
                            // <a href="javascript:void(0);" key={index}>{keyword?.title}</a>
                        );
                    })}
                </div>
                {/* <div className="dz-social-icon primary-light">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/dexignzone">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/dexignzone/">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/dexignzones">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/showcase/3686700/admin/">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </>
    );
}