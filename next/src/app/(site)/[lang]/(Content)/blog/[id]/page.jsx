"use client"

import React, { useContext, useEffect, useState } from 'react';
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { BlogContext } from '@/Theme/Site/ShopTools/Context/BlogContext';
import { useData } from "@/Theme/Midone/Utils/Data";
import { Banner } from "@/app/(site)/[lang]/(Content)/blog/Banner";
import { SideBar } from "@/app/(site)/[lang]/(Content)/blog/SideBar";
import LoadingPage from '@/Theme/Site/ShopTools/LoadingPage';
import { Info, RelatedBlogs } from "@/app/(site)/[lang]/(Content)/blog/[id]/DetailComponent";

export default function DetailPage({ params }) {
    const { Lang } = useLang();
    const { mediaPath, assetsPath } = useConfig();
    const { getNeedles } = useData();
    const { state, dispatch } = useContext(BlogContext);
    const { loading, mostVisitedBlogs, subjects } = state;

    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const id = params?.id;
    const local = params?.lang ? params?.lang : 'en';

    useEffect(() => {
        dispatch('START_LOADING');
        
        // Fetch blog details
        getNeedles(`${local}/blog/${id}`, (data) => {
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs || []);
            dispatch('STOP_LOADING');
        });

        // Fetch sidebar data if not already loaded
        if (!mostVisitedBlogs || !subjects) {
            getNeedles(`${local}/blog/sidebar-data`, (data) => {
                dispatch('SET_INFO', { 
                    mostVisitedBlogs: data.mostVisitedBlogs, 
                    subjects: data.subjects 
                });
            });
        }
    }, [id, local]);

    return (
        <>
                <Banner brName={blog?.title} assetsPath={assetsPath} local={local} Lang={Lang} />
            
            
                <section class="news-details fix section-padding">
        <div class="container">
            <div class="news-details-area">
                <div class="row g-5">
                    <div class="col-xl-3 col-lg-4"><SideBar 
                                assetsPath={assetsPath} 
                                mediaPath={mediaPath} 
                                local={local} 
                                Lang={Lang} 
                            /></div>
                    <div class="col-xl-9 col-lg-8">
                    {loading ? (
                                <LoadingPage />
                            ) : (
                                <>
                                    <Info 
                                        blog={blog} 
                                        Lang={Lang} 
                                        mediaPath={mediaPath} 
                                        local={local} 
                                    />
                                    
                                    <RelatedBlogs 
                                        blogs={relatedBlogs} 
                                        Lang={Lang} 
                                        mediaPath={mediaPath} 
                                    />
                                </>
                            )}
                    </div>
                    </div>
                    </div>
                    </div>
                    </section>
                        
        </>
    );
}