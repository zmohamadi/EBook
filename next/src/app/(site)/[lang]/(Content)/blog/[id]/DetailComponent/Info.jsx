"use client"
import { Keywords } from "@/app/(site)/[lang]/(Content)/blog/[id]/DetailComponent/Keywords";

export const Info = ({ blog,Lang,local }) => {
    let keywords = blog?.keywords;

    return(
        <>
            <div className="dz-blog blog-single style-1 sidebar">
                <h1 className="dz-title">{blog?.title}</h1>
                <div className="dz-meta">
                    <ul>
                        <li className="post-date">{blog?.created_at}</li>
                        <li className="dz-user">
                            <i className="fa-solid fa-user"></i>
                            By <a href="javascript:void(0);">{Lang("public.name_website")}</a>
                        </li>
                        <li className="dz-comment">
                            <i className="fa-solid fa-message"></i>
                            <a href="javascript:void(0);">{blog?.count_comment}</a>
                        </li>
                    </ul>
                </div>
                <div className="dz-info">
                    <div className="dz-post-text">
                        <p>{blog?.summary}</p>
                        {/* <blockquote className="wp-block-quote is-style-default"><p>{blog?.blockquote}</p><cite>Ronald M. Spino</cite><i className="flaticon-right-quote"></i></blockquote> */}
                        <blockquote className="wp-block-quote is-style-default"><p>{blog?.blockquote}</p><cite>{blog?.subject?.["title_"+local]}</cite><i className="flaticon-right-quote"></i></blockquote>
                        <p>{blog?.text}</p>
                    </div>
                    {keywords?.lenght > 0 && <Keywords keywords={keywords} Lang={Lang} />}
                </div>
            </div>
        </>
    );
}