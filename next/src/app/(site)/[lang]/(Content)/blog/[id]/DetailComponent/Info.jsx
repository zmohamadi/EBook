"use client"
import { Keywords } from "@/app/(site)/[lang]/(Content)/blog/[id]/DetailComponent/Keywords";

export const Info = ({ blog,Lang,local,mediaPath }) => {
    let keywords = blog?.keywords;

    return(
        <>
        <div class="blog-post-details">
                            <div class="single-blog-post">
                                <div class="post-featured-thumb1 bg-cover1"
                                >
                                    <img src={`${mediaPath}/blogs/${blog?.image}`} alt="img" />

                                </div>
                                <div class="post-content">
                                <p>{blog?.summary}</p>
                                <blockquote className="wp-block-quote is-style-default"><p>{blog?.blockquote}</p><cite>{blog?.subject?.["title_"+local]}</cite><i className="flaticon-right-quote"></i></blockquote>
                                <p>{blog?.text}</p>
                                </div>
                            </div>
                            {/* <div class="row tag-share-wrap mt-4 mb-5">
                                <div class="col-lg-8 col-12">
                                    <div class="tagcloud">
                                        <span class="me-3">Tags:</span>
                                        <a href="news-details.html">Adventure</a>
                                        <a href="news-details.html">Education</a>
                                        <a href="news-details.html">Store</a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                                    <div class="social-share">
                                        <span class="me-3">Share:</span>
                                        <a href="../../../https@www.facebook.com/default.htm"><i class="fab fa-facebook-f"></i></a>
                                        <a href="../../../https@x.com/default.htm"><i class="fab fa-twitter"></i></a>
                                        <a href="../../../https@www.linkedin.com/default.htm"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div class="comments-area">
                                <div class="comments-heading">
                                    <h3>02 Comments</h3>
                                </div>
                                <div class="blog-single-comment d-flex gap-4 pt-4 pb-5">
                                    <div class="image">
                                        <img src="assets/img/news/comment.png" alt="image">
                                    </div>
                                    <div class="content">
                                        <div
                                            class="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                            <div class="con">
                                                <h5><a href="news-details.html">Leslie Alexander</a></h5>
                                                <span>March 20, 2024 at 2:37 pm</span>
                                            </div>
                                            <div class="star">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                        <p class="mt-30 mb-4">Neque porro est qui dolorem ipsum quia quaed inventor
                                            veritatis et quasi
                                            architecto var sed efficitur turpis gilla sed
                                            sit amet finibus eros. Lorem Ipsum is simply dummy</p>
                                        <a href="news-details.html" class="reply">Reply</a>
                                    </div>
                                </div>
                                <div class="blog-single-comment d-flex gap-4 pt-5 pb-5">
                                    <div class="image">
                                        <img src="assets/img/news/comment-2.png" alt="image">
                                    </div>
                                    <div class="content">
                                        <div
                                            class="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                            <div class="con">
                                                <h5><a href="news-details.html">Alex Flores</a></h5>
                                                <span>March 20, 2024 at 2:37 pm</span>
                                            </div>
                                            <div class="star">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-regular fa-star"></i>
                                            </div>
                                        </div>
                                        <p class="mt-30 mb-4">Neque porro est qui dolorem ipsum quia quaed inventor
                                            veritatis et quasi
                                            architecto var sed efficitur turpis gilla sed
                                            sit amet finibus eros. Lorem Ipsum is simply dummy</p>
                                        <a href="news-details.html" class="reply">Reply</a>
                                    </div>
                                </div>
                            </div>
                            <div class="comment-form-wrap pt-5">
                                <h3>Leave a comments</h3>
                                <form action="#" id="contact-form" method="POST">
                                    <div class="row g-4">
                                        <div class="col-lg-6">
                                            <div class="form-clt">
                                                <span>Your Name*</span>
                                                <input type="text" name="name" id="name" placeholder="Your Name">
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-clt">
                                                <span>Your Email*</span>
                                                <input type="text" name="email" id="email2" placeholder="Your Email">
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-clt">
                                                <span>Message*</span>
                                                <textarea name="message" id="message"
                                                    placeholder="Write Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <button type="submit" class="theme-btn ">
                                                post comment<i class="fa-solid fa-arrow-right-long"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div> */}
                        </div>
            {/* <div className="dz-blog blog-single style-1 sidebar">
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
                        <blockquote className="wp-block-quote is-style-default"><p>{blog?.blockquote}</p><cite>{blog?.subject?.["title_"+local]}</cite><i className="flaticon-right-quote"></i></blockquote>
                        <p>{blog?.text}</p>
                    </div>
                    {keywords?.lenght > 0 && <Keywords keywords={keywords} Lang={Lang} />}
                </div>
            </div> */}
        </>
    );
}