"use client";

import { useConfig } from "@/lib/config";
import Link from "next/link";

export const Blog = ({ items, assetsPath, mediaPath, local, Lang }) => {
  // const { assetsPath } = useConfig();

  // const blogPosts = [
  //   {
  //     id: 1,
  //     images: ["09.jpg", "09.jpg"],
  //     category: "Activities",
  //     date: "Feb 10, 2024",
  //     author: "Admin",
  //     title: "Montes suspendisse massa curae malesuada",
  //   },
  //   {
  //     id: 2,
  //     images: ["10.jpg", "10.jpg"],
  //     category: "Activities",
  //     date: "Mar 20, 2024",
  //     author: "Admin",
  //     title: "Playful Picks Paradise: Kids' Essentials with Dash.",
  //   },
  //   {
  //     id: 3,
  //     images: ["11.jpg", "11.jpg"],
  //     category: "Activities",
  //     date: "Jun 14, 2024",
  //     author: "Admin",
  //     title: "Tiny Emporium: Playful Picks for Kids' Delightful Days.",
  //   },
  //   {
  //     id: 4,
  //     images: ["12.jpg", "12.jpg"],
  //     category: "Activities",
  //     date: "Mar 12, 2024",
  //     author: "Admin",
  //     title: "Eu parturient dictumst fames quam tempor",
  //   },
  // ];

  return (
    <section className="news-section fix section-padding section-bg">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">{Lang('public.blog_title')}</h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
          {Lang('public.blog_p')}
          <br/>
          {Lang('public.blog_p1')}
          </p>
        </div>
        <div className="row">
          {items?.map((post, index) => (
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
        </div>
      </div>
    </section>
  );
};