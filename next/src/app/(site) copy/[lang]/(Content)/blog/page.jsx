"use client"

import React, { useContext,useEffect } from 'react';
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { BlogContext } from '@/Theme/Site/ShopTools/Context/BlogContext';
import { useData } from "@/Theme/Midone/Utils/Data";
import { Banner } from "@/app/(site)/[lang]/(Content)/blog/Banner";
import { SideBar } from "@/app/(site)/[lang]/(Content)/blog/SideBar";
import { ItemPage } from "@/app/(site)/[lang]/(Content)/blog/ItemPage";
import LoadingPage from '@/Theme/Site/ShopTools/LoadingPage';

export default function Page({ params }) {
    const { Lang } = useLang();
    const { mediaPath,assetsPath } = useConfig();
    const local = params?.lang ? params?.lang : 'en';
    let { getNeedles } = useData();
    const { state, dispatch, filterDispatch } = useContext(BlogContext);
	const { status, filters, laralelUrl, loading, page } = state;

    useEffect(() => {
        dispatch('START_LOADING');
        filterDispatch("SET_FILTER");
    }, []);

    useEffect(() => {
        if(status == "FIRST") 
            return;
        
        dispatch('START_LOADING');
        // const query = new URLSearchParams();
        const query = (status == "")? new URLSearchParams(window.location.search) : new URLSearchParams();
        Object.keys(filters).map((key)=>{
            let value= filters[key];
            if(value != "") query.set(key, value);
        });
        // const url = `${local}${laralelUrl}?${query.toString()}&type=${status == "" && "first"}`;
        const url = `${local}${laralelUrl}?${query.toString()}`;
        getNeedles(url+`&type=${status == "" && "first"}&page=${page}`, (items)=>
            {
                if(status == ""){
                    dispatch('SET_INFO', { blogs: items.blogs, mostVisitedBlogs: items.mostVisitedBlogs, subjects: items.subjects, url: url });
                }else{
                    dispatch('SET_BLOGS', { blogs: items.blogs, url: url });
                }
                dispatch('STOP_LOADING');
            }
        );
        window.history.replaceState({}, '', `?${query.toString()}`);        
    }, [filters]);

    return(
        <>
            <div className="page-content bg-light">
                <Banner assetsPath={assetsPath} local={local} Lang={Lang} />
            </div>
            <section className="content-inner-1 z-index-unset">
                <div className="container">
                    <div className="row">
                        <SideBar assetsPath={assetsPath} mediaPath={mediaPath} local={local} Lang={Lang} />
                        <div className="col-xl-8 col-lg-8">
                            <div className="row">
                                {(loading)? <LoadingPage /> : <ItemPage mediaPath={mediaPath} local={local} Lang={Lang} />}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}