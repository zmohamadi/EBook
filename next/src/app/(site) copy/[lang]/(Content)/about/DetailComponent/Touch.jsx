"use client";

export const Touch = ({ Lang,local }) => {

    return (
        <>
            <section className="get-in-touch">
                <div className="m-r100 m-md-r0 m-sm-r0">
                    <h3 className="dz-title mb-lg-0 mb-3">Questions ?
                        <span>Our experts will help find the grar that’s right for you</span>
                    </h3>
                </div>
                <a href={`/${local}/contact`} className="btn btn-light">Get In Touch</a>
            </section>
        </>
    );
}
