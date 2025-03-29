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
                 {newBlogs?.data?.map((post, index) => (
            <div 
              key={post.id}
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" 
              data-wow-delay={`${0.2 + (index * 0.2)}s`}
            >
              <div className="news-card-items">
                <div className="news-image">
                  <img src={`${mediaPath}/blogs/${post.image}`} alt="img" />
                  <img src={`${mediaPath}/blogs/${post.image}`} alt="img" />
                  <div className="post-box">
                    {post?.subject?.title_fa}
                  </div>
                </div>
                <div className="news-content">
                  <ul>
                    <li>
                      <i className="fa-light fa-calendar-days"></i>
                      {post.created_at}
                    </li>
                    {/* <li>
                      <i className="fa-regular fa-user"></i>
                      By {post.author}
                    </li> */}
                  </ul>
                  <h3>
                    <Link href={`/${local}/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <Link href={`/${local}/blog/${post.id}`} className="theme-btn-2">
                  {Lang('public.read')} {Lang('public.more')} <i className="fa-regular fa-arrow-left-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
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