"use client";

import { useConfig } from "@/lib";
import { useLang } from "@/lib/lang";
import Link from "next/link";

export function ProfileMenus() {
    const { Lang, local } = useLang();
    const { mediaPath,assetsPath } = useConfig();

    // مسیر پایه برای لینک‌ها
    const basePath = `/${local}`;
    const user = {firstname : "الهام" ,lastname:"پارسا" , email : "Parsa@gmail.com"}

    // آرایه منوها
    const menuItems = [
        {
            title: Lang("public.dashboard"),
            links: [
                { label: Lang("public.dashboard"), path: `${basePath}/dashboard` },
                { label: Lang("public.orders"), path: `${basePath}/orders` },
            ]
        },
        {
            title: Lang("public.account_settings"),
            links: [
                { label: Lang("public.profile"), path: `${basePath}/profile` },
                { label: Lang("public.address"), path: `${basePath}/address` },
            ]
        }
    ];

    return (
        <aside className="col-xl-3">
            <div className="toggle-info">
                <h5 className="title mb-0">{Lang("public.accountnavbar")}</h5>
                <a className="toggle-btn" href="#accountSidebar">
                    {Lang("public.accountmenu")}
                </a>
            </div>
            <div className="sticky-top account-sidebar-wrapper">
                <div className="account-sidebar" id="accountSidebar">
                    <div className="profile-head text-center">
                        <div className="user-thumb">
                            <img
                                className="rounded-circle"
                                src={`${mediaPath}/users/profile4.jpg`}
                                alt={Lang("public.userimagealt")}
                            />
                        </div>
                        <h5 className="title mb-1">{user?.firstname} {user?.lastname}</h5>
                        <span className="text text-primary">{user?.email}</span>
                    </div>
                    <div className="account-nav">
                        {menuItems.map((menu, index) => (
                            <div key={index}>
                                <div className="nav-title bg-light">{menu.title}</div>
                                <ul className={menu.title === Lang("public.dashboard") ? "nav-list" : "account-info-list"}>
                                    {menu.links.map((link, index) => (
                                        <li key={index}>
                                            <Link href={link.path}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}
