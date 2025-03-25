"use client";
import { useState } from "react";

export const TabsProduct = ({ item, Lang }) => {
    const [activeTab, setActiveTab] = useState("description");

    const renderTabContent = () => {
        switch (activeTab) {
            case "description":
                return (
                    <div className="detail-bx text-center">
                        <h5 className="title">{Lang("public.description")}</h5>
                        <p className="para-text" dangerouslySetInnerHTML={{ __html: item?.description }}></p>
                    </div>
                );
            case "usage":
                return (
                    <div className="detail-bx text-center">
                        <h5 className="title">{Lang("public.usage")}</h5>
                        <p className="para-text" dangerouslySetInnerHTML={{ __html: item?.usage }}></p>
                    </div>
                );
            case "review":
                return (
                    <div className="detail-bx text-center">
                        <h5 className="title">{Lang("public.review")}</h5>
                        <p className="para-text" dangerouslySetInnerHTML={{ __html: item?.review }}></p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="content-inner-3 pb-0">
            <div className="container">
                <div className="product-description">
                    <div className="dz-tabs">
                        <ul className="nav nav-tabs center" id="myTab1" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === "description" ? "active" : ""}`}
                                    onClick={() => setActiveTab("description")}
                                >
                                    {Lang("public.description")}
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === "usage" ? "active" : ""}`}
                                    onClick={() => setActiveTab("usage")}
                                >
                                    {Lang("public.usage")}
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === "review" ? "active" : ""}`}
                                    onClick={() => setActiveTab("review")}
                                >
                                    {Lang("public.reviews")}
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content">{renderTabContent()}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
