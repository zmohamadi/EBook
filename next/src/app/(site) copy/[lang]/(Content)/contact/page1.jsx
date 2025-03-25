"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";

export default function Page({ params }) {
    const { Lang } = useLang();
    const { mediaPath, assetsPath } = useConfig();
    let { getNeedles } = useData();
    let [items, setItems] = useState();
    const local = params?.lang ? params?.lang : "en";
    let laralelUrl = "/products";

    useEffect(() => {
        getNeedles(local + laralelUrl, setItems);
    }, [local, laralelUrl]);

    return (
        <>
            <div className="page-content bg-light" dir="rtl">
                <div className="contact-bnr bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="contact-info style-1 text-end text-white">
                                    <h2 className="title wow fadeInUp" data-wow-delay="0.1s">
                                        ما را کشف کنید
                                    </h2>
                                    <p className="text wow fadeInUp" data-wow-delay="0.2s">
                                        <span className="text-decoration-underline">
                                            <a href="our-team.html">پیکسـیو آماده کمک به شماست؛</a>
                                        </span>
                                        <br /> کارشناسان ما آماده پاسخگویی به هرگونه سوال شما هستند. ما پاسخ‌ها را داریم.
                                    </p>
                                    <div className="contact-bottom wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="contact-left">
                                            <h3>تماس با ما</h3>
                                            <ul>
                                                <li>+01-123-456-7890</li>
                                                <li>+01-123-456-7890</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-area1 style-1 m-r20 m-md-r0 wow fadeInUp" data-wow-delay="0.5s">
                                    <form className="dz-form dzForm" method="POST" action="script/contact_smtp.php">
                                        <input
                                            type="hidden"
                                            className="form-control"
                                            name="dzToDo"
                                            value="Contact"
                                        />
                                        <input
                                            type="hidden"
                                            className="form-control"
                                            name="reCaptchaEnable"
                                            value="0"
                                        />
                                        <div className="dzFormMsg"></div>
                                        <label className="form-label">نام شما</label>
                                        <div className="input-group">
                                            <input required type="text" className="form-control" name="dzName" />
                                        </div>
                                        <label className="form-label">آدرس ایمیل</label>
                                        <div className="input-group">
                                            <input required type="text" className="form-control" name="dzEmail" />
                                        </div>
                                        <label className="form-label">شماره تماس</label>
                                        <div className="input-group">
                                            <input required type="text" className="form-control" name="dzPhoneNumber" />
                                        </div>
                                        <label className="form-label">پیام</label>
                                        <div className="input-group m-b30">
                                            <textarea
                                                name="dzMessage"
                                                rows="4"
                                                required
                                                className="form-control m-b10"
                                            ></textarea>
                                        </div>
                                        <div className="input-recaptcha m-b30">
                                            <div
                                                className="g-recaptcha"
                                                data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                                                data-callback="verifyRecaptchaCallback"
                                                data-expired-callback="expiredRecaptchaCallback"
                                            ></div>
                                            <input
                                                className="form-control d-none"
                                                style={{ display: "none" }}
                                                data-recaptcha="true"
                                                required
                                                data-error="لطفاً کپچا را کامل کنید"
                                            />
                                        </div>
                                        <div>
                                            <button
                                                name="submit"
                                                type="submit"
                                                value="submit"
                                                className="btn w-100 btn-white btnhover"
                                            >
                                                ارسال
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-inner-2 pt-0">
                    <div className="map-iframe map">
                        {/* 
                        <iframe src="../../https@www.google.com/maps/embed@pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!004187594F" 
                        style="border:0; width:100%; min-height:100%; margin-bottom: -8px;" 
                        allowfullscreen></iframe> 
                        */}
                    </div>
                </div>
            </div>
        </>
    );
}
