"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { ProfileBox } from "../ProfileBox";

export default function Page({ params }) {
    const { Lang } = useLang(); // برای ترجمه استفاده می‌شود
    const { mediaPath, assetsPath } = useConfig();
    const { getNeedles } = useData();
    const [items, setItems] = useState([]);

    const local = params?.lang ? params?.lang : "en";
    const laralelUrl = "/blog";

    // داده‌های سمپل برای نمایش
    const sampleData = [
        {
            order_number: "1001",
            date_purchased: "1403-01-15",
            status: "completed",
            status_class: "success",
            total: "940.000",
        },
        {
            order_number: "1002",
            date_purchased: "1403-01-18",
            status: "pending",
            status_class: "warning",
            total: "1.200.000",
        },
        {
            order_number: "1003",
            date_purchased: "1404-01-20",
            status: "cancelled",
            status_class: "danger",
            total: "5.000.000",
        },
    ];

    useEffect(() => {
        // برای نمایش داده‌های سمپل
        setItems(sampleData);

        // در آینده می‌توانید اینجا داده‌ها را از API یا دیتابیس دریافت کنید
        // getNeedles(local + laralelUrl, setItems);
    }, []);

    return (
        <>
            <ProfileBox>
                <div className="table-responsive table-style-1">
                    <table className="table table-hover mb-3">
                        <thead>
                            <tr>
                                <th>{Lang("public.order_number")}</th>
                                <th>{Lang("public.date")}</th>
                                <th>{Lang("public.status")}</th>
                                <th>{Lang("public.price")}</th>
                                <th>{Lang("public.opration")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items && items.length > 0 ? (
                                items.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <a href="account-order-details.html" className="fw-medium">
                                                {item?.order_number || "-"}
                                            </a>
                                        </td>
                                        <td>{item?.date_purchased || "-"}</td>
                                        <td>
                                            <span className={`badge m-0 bg-${item?.status_class || "info"}`}>
                                                {Lang(`public.${item?.status}`) || "-"}
                                            </span>
                                        </td>
                                        <td>{item?.total || "-"}</td>
                                        <td>
                                            <a href="account-order-details.html" className="btn-link text-underline p-0">
                                                {Lang("public.view")}
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">
                                        {Lang("public.no_data")}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </ProfileBox>
        </>
    );
}
