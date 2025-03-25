"use client"

import React, { useContext,useEffect } from 'react';
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { ProductContext } from '@/Theme/Site/ShopTools/Context/ProductContext';
import { Banner } from "@/app/(site)/[lang]/(Shop)/products/Banner";
import { Product } from "@/app/(site)/[lang]/(Shop)/products/Product";
import { SideBar } from "@/app/(site)/[lang]/(Shop)/products/SideBar";

export default function Page({ params }) {
    const { Lang } = useLang();
    const { mediaPath,assetsPath } = useConfig();
    const local = params?.lang ? params?.lang : 'en';
    const { dispatch, filterDispatch } = useContext(ProductContext);

    useEffect(() => {
        dispatch('START_LOADING');
        filterDispatch("SET_FILTER");
    }, []);

    return(
        <>
            <Banner assetsPath={assetsPath} local={local} Lang={Lang} />
            <section className="content-inner-3 pt-3 z-index-unset">
                <div className="container">
                    <div className="row">
                        <SideBar assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
                        <Product assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
                    </div>
                </div>
            </section>
        </>
    );
};