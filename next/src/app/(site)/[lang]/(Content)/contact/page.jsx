"use client";

import { useLang } from "@/lib/lang";
import { useData,useFormRefs } from "@/Theme/Midone/Utils";
import { Banner } from "../blog/Banner";
import { useConfig } from "@/lib";

export default function Page({ params }) {
    const { Lang } = useLang();
    let { save } = useData();
    const local = params?.lang ? params?.lang : "en"; 
    let component = useFormRefs();
    let url = "/contact/save", method = "new";
        const { mediaPath, assetsPath } = useConfig();
    

    const saveItem = ()=>save(`${local}${url}`, component, method, "");

    return (
        <>
            <Banner  assetsPath={assetsPath} local={local} Lang={Lang} />
        
            <section class="contact-section fix section-padding">
        <div class="container">
            <div class="contact-wrapper">
                <div class="row g-4 align-items-center">
                    <div class="col-lg-4">
                        <div class="contact-left-items">
                            <div class="contact-info-area-2">
                                <div class="contact-info-items mb-4">
                                    <div class="icon">
                                        <i class="icon-icon-10"></i>
                                    </div>
                                    <div class="content">
                                        <p>Call Us 7/24</p>
                                        <h3>
                                            <a href="tel_3A+2085550112">+208-555-0112</a>
                                        </h3>
                                    </div>
                                </div>
                                <div class="contact-info-items mb-4">
                                    <div class="icon">
                                        <i class="icon-icon-11"></i>
                                    </div>
                                    <div class="content">
                                        <p>Make a Quote</p>
                                        <h3>
                                            <a href="mailto:example@gmail.com">example@gmail.com</a>
                                        </h3>
                                    </div>
                                </div>
                                <div class="contact-info-items border-none">
                                    <div class="icon">
                                        <i class="icon-icon-12"></i>
                                    </div>
                                    <div class="content">
                                        <p>Location</p>
                                        <h3>
                                            4517 Washington ave.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div class="video-image">
                                <img src={`${assetsPath}/img/contact.jpg`} alt="img"/>
                                <div class="video-box">
                                    <a href="../../../https@www.youtube.com/watch@v=Cn4G2lZ_g2I"
                                        class="video-btn ripple video-popup">
                                        <i class="fa-solid fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="contact-content">
                            <h2>Ready to Get Started?</h2>
                            <p>
                                Nunc tincidunt cursus lectus ac semper. Aenean ullamcorper quis arcu molestie consequat.
                                Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nec lobortis elit, eu
                                ultrices justo. Fusce auctor erat est, non fringilla nibh tempus quis. Aenean dignissim
                            </p>
                            <form action="contact.php" id="contact-form" method="POST" class="contact-form-items">
                                <div class="row g-4">
                                    <div class="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div class="form-clt">
                                            <span>Your name*</span>
                                            <input type="text" name="name" id="name" placeholder="Your Name"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                        <div class="form-clt">
                                            <span>Your Email*</span>
                                            <input type="text" name="email" id="email123" placeholder="Your Email"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                                        <div class="form-clt">
                                            <span>Write Message*</span>
                                            <textarea name="message" id="message"
                                                placeholder="Write Message"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-7 wow fadeInUp" data-wow-delay=".9s">
                                        <button type="submit" class="theme-btn">
                                            Send Message <i class="fa-solid fa-arrow-right-long"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}
