"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Grid, Frame, FeatherIcon } from "@/Theme/Midone/Utils";
import { useEffect, useRef, useState } from "react";
import { Box, Button, ButtonContainer, CheckBox } from "@/Theme/Midone";
import { useAuth } from "@/lib";
import Link from "next/link";

export function List({ query=null,link,title }) {
    // const { user } = useAuth();
    // const access = user?.role_id == 1 ? true : false;
    const access = true;
    const { Lang,local } = useLang();
    const { laraAdmin, nextAdmin } = useConfig();
    const { destroy, getNeedles } = useData();
    const [needles, setNeedles] = useState();
    const effectRan = useRef(false);
    const formUrl = nextAdmin + link; // تغییر لینک به users

    useEffect(() => {
        if (!effectRan.current) {
            getNeedles(`${laraAdmin}/users/get-needles`, setNeedles); // تغییر لینک به users
            effectRan.current = true;
        }
    }, [getNeedles, laraAdmin, formUrl]);

    let info = {
        insertLink: access ? `${formUrl}/new` : "", // لینک ایجاد کاربر جدید
        url: `${laraAdmin}${link}?${query}`, // تغییر لینک به users
        columns: [
            {
                label: "firstname", // نام
                jsx: (item) => (
                    <Link href={`${formUrl}/${item.id}`}>
                        {`${item?.firstname} ${item?.lastname}`} 
                    </Link>
                ),
            },
            {
                label: "mobile", // شماره همراه
                jsx: (item) => (
                    <span>{item?.mobile}</span>
                ),
            },
            // {
            //     label: "role_id", // نقش کاربر
            //     jsx: (item) => (
            //         <span>{item?.role_id == 1 ? "Admin" : "User"}</span> // نمایش نقش
            //     ),
            // },
            {label: "status",  jsx: (item)=><span className={"text-"+item?.active_status?.color}>{item?.active_status?.["title_"+local]}</span>},

            {
                label: "",
                sort: false,
                jsx: (item) => (
                    <div className="flex justify-center">
                        <FeatherIcon
                            access={access}
                            name="Edit"
                            url={formUrl + "/" + item?.id + "/edit"}
                            tooltip={Lang('public.edit')}
                        />
                        <FeatherIcon
                            name="Eye"
                            url={formUrl + "/" + item?.id}
                            tooltip={Lang('public.view')}
                        />
                        <FeatherIcon
                            access={access}
                            name="XOctagon"
                            tooltip={Lang('public.delete')}
                            color="darkred"
                            onClick={() => destroy(laraAdmin + "/users/" + item?.id)} // تغییر لینک به users
                        />
                    </div>
                ),
            },
        ],
    };

    return (
        <>
            <Frame title={Lang(["public."+title])}> {/* تغییر عنوان به users */}
                <div className="intro-y col-span-12">
                    <Grid {...info} />
                </div>
            </Frame>
        </>
    );
}