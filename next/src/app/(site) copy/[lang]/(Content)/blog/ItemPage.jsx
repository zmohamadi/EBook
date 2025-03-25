"use client";

import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogContext } from '@/Theme/Site/ShopTools/Context/BlogContext';
import { useData } from "@/Theme/Midone/Utils/Data";
import { LoadMore } from "@/Theme/Site/Components/Public/LoadMore";
import LoadingPage from '@/Theme/Site/ShopTools/LoadingPage';

export const ItemPage = ({ mediaPath, local, Lang, page = "1" }) => {
    const {state} = useContext(BlogContext);
    const { blogs, url, status, filters, laralelUrl, loading } = state;
    const [loadmore, setLoadmore] = useState(false);
    const [newBlogs, setNewBlogs] = useState([]);
    let { getNeedles } = useData();
    useEffect(()=>{
        page == 1 && setNewBlogs(blogs);
    }, [blogs])

    useEffect(()=>{
        if(page > 1){
            setLoadmore("loading");
            getNeedles(`${url}&page=${page}`, (items)=> {
                setNewBlogs(items.blogs);
                setLoadmore(false);
            });
        }
    }, [page]);

    useEffect(()=>{
        if(newBlogs?.last_page <= page) {
            setLoadmore("end");
        }
    }, [newBlogs]);

    return (
        // (loading)?
        //     <LoadingPage />
        // :
            <>
                {(newBlogs?.data)?.map((item,index)=>{
                    return (
                        <>
                            <div className="col-lg-6 col-md-6 m-lg-b30 m-b50 wow fadeInUp" key={index} data-wow-delay={`${0.1 * (index + 1)}s`} >
                                <div className="dz-card style-5 light">
                                    <div className="dz-media">
                                        <img src={mediaPath+"/blog/"+item?.thumb} alt="/" />
                                    </div>
                                    <div className="dz-info">
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="post-date">{item?.created_at}</li>
                                            </ul>
                                        </div>
                                        <h4 className="dz-title">
                                            <Link href={`/${local}/blog/${item?.id}`}>{item?.title}</Link>
                                        </h4>
                                        <span className="font-28">{Lang("public.subject")+" : "+item?.subject?.["title_"+local]}</span>
                                        <Link href={`/${local}/blog/${item?.id}`} className="font-14 read-btn">{Lang("public.read_more")}
                                            <i className="icon feather icon-chevron-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
                {
                    loadmore == "end" ?
                        <div></div>
                    : loadmore == "loading" ? 
                        <LoadingPage />
                    : loadmore === false ? 
                        <LoadMore onClick={()=>setLoadmore(true)} Lang={Lang} />
                    :
                        <ItemPage page={++page} mediaPath={mediaPath} local={local} Lang={Lang} />
                }
            </>	
	);
}