"use client"

import Link from 'next/link';

export const RelatedBlogs = ({ blogs,mediaPath,Lang,local }) => {

    return(
        <>
            <div className="dz-related-post">
                <h4 className="widget-title">{Lang("public.related_blogs")}</h4>
                <div className="row">
                    {blogs?.map((blog, index)=>{
                        return(
                            <div className="col-lg-6 col-md-6 m-b30" key={index}>
                                <div className="dz-card style-5">
                                    <div className="dz-media">
                                        <img src={mediaPath+"/blog/"+blog?.thumb} alt="/"/>
                                    </div>
                                    <div className="dz-info">
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="post-date">{blog?.created_at}</li>
                                            </ul>
                                        </div>
                                        <h4 className="dz-title">
                                            <Link href={`/${local}/blog/${blog?.id}`}>{blog?.title}</Link>
                                        </h4>
                                        <Link href={`/${local}/blog/${blog?.id}`} className="font-14 read-btn">{Lang("public.read_more")} 
                                            <i className="icon feather icon-chevron-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}