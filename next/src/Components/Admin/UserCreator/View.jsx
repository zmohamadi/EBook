"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Button, ButtonContainer, Input, useData, useFormRefs } from "@/Theme/Midone/Forms";
import { FeatherIcon, Loading } from "@/Theme/Midone";
import { Frame } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/lib";
import { Books,Info } from "@/Components/Admin/UserCreator/Details";

export function View({ id }) {
    const { user } = useAuth();
    const access = user?.role_id == 1 ? true : false; // دسترسی ادمین
    const { Lang, local } = useLang();
    const { laraAdmin, nextAdmin, mediaPath } = useConfig();
    const { get } = useData();
    let url = `${laraAdmin}/users/show-info/${id}`; // تغییر لینک به users
    const router = useRouter();

    let component = useFormRefs();
    useEffect(() => {
        get(url, component, "info");
    }, []);
    const data = component?.state?.info;
    const item = data?.item;
    const books = data?.books;

    if (!data) {
        alert(77);
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-lg text-gray-500">Loading...</div>
            </div>
        );
    }
    const back = () => router.back();

    return (
        <>
            {/* <Frame title={`${item?.firstname} ${item?.lastname}` || Lang(["public.user_details"])}> */}
                 {/* تغییر عنوان به نام کاربر */}
            <Frame title={Lang(["public.view_info"])}>
                {(item?.id)?
                    <>
                        <div className="col-span-12">
                            <Info item={item} mediaPath={mediaPath} Lang={Lang} />
                            <Books items={books} mediaPath={mediaPath} Lang={Lang} />
                        </div>
                    </>
                :
                    <Loading />
                }
            </Frame>
        </>
    );
}