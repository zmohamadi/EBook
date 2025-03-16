"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Button, ButtonContainer, Input, useData, useFormRefs } from "@/Theme/Midone/Forms";
import { Loading } from "@/Theme/Midone";
import { Frame } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/lib";

export function View({ id }) {
    const { user } = useAuth();
    const access = user?.role_id == 1 ? true : false; // دسترسی ادمین
    const { Lang, local } = useLang();
    const { laraAdmin } = useConfig();
    const { get } = useData();
    let url = `${laraAdmin}/users/${id}`; // تغییر لینک به users
    const router = useRouter();

    let component = useFormRefs();
    useEffect(() => {
        get(url, component, "info");
    }, []);
    const data = component?.state?.info;

    if (!data) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-lg text-gray-500">Loading...</div>
            </div>
        );
    }
    const back = () => router.back();

    return (
        <>
            <Frame title={`${data?.firstname} ${data?.lastname}` || Lang(["public.user_details"])}> {/* تغییر عنوان به نام کاربر */}
                {((data == undefined)) ?
                    <Loading />
                    :
                    <>
                        <div className="col-span-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                                {/* نام و نام خانوادگی */}
                                <div>
                                    <p className="text-sm text-gray-500">{Lang(["public.name"])}</p>
                                    <h2 className="text-lg font-medium text-gray-700">
                                        {`${data?.firstname || "-"} ${data?.lastname || "-"}`}
                                    </h2>
                                </div>

                                {/* شماره همراه */}
                                <div>
                                    <p className="text-sm text-gray-500">{Lang(["public.mobile"])}</p>
                                    <h2 className="text-lg font-medium text-gray-700">{data?.mobile || "-"}</h2>
                                </div>

                                {/* نقش کاربر */}
                                <div>
                                    <p className="text-sm text-gray-500">{Lang(["public.role"])}</p>
                                    <h2 className="text-lg font-medium text-gray-700">
                                        {data?.role_id == 1 ? Lang(["public.admin"]) : Lang(["public.user"])}
                                    </h2>
                                </div>

                                {/* وضعیت */}
                                <div>
                                    <p className="text-sm text-gray-500">{Lang(["public.status"])}</p>
                                    <h2 className="text-lg font-medium text-gray-700">
                                        {data?.status_id == 1 ? Lang(["public.active"]) : Lang(["public.inactive"])}
                                    </h2>
                                </div>

                                {/* تاریخ تولد */}
                                <div>
                                    <p className="text-sm text-gray-500">{Lang(["public.birth_date"])}</p>
                                    <h2 className="text-lg font-medium text-gray-700">{data?.birth_date || "-"}</h2>
                                </div>

                                {/* تاریخ درگذشت */}
                                <div>
                                    <p className="text-sm text-gray-500">{Lang(["public.death_date"])}</p>
                                    <h2 className="text-lg font-medium text-gray-700">{data?.death_date || "-"}</h2>
                                </div>

                                {/* ملیت */}
                                <div>
                                    <p className="text-sm text-gray-500">{Lang(["public.nationality"])}</p>
                                    <h2 className="text-lg font-medium text-gray-700">{data?.nationality || "-"}</h2>
                                </div>

                                {/* زبان */}
                                <div>
                                    <p className="text-sm text-gray-500">{Lang(["public.language"])}</p>
                                    <h2 className="text-lg font-medium text-gray-700">{data?.lang || "-"}</h2>
                                </div>

                                {/* آیا راوی است؟ */}
                                <div>
                                    <p className="text-sm text-gray-500">{Lang(["public.narrator"])}</p>
                                    <h2 className="text-lg font-medium text-gray-700">
                                        {data?.narrator == 1 ? Lang(["public.yes"]) : Lang(["public.no"])}
                                    </h2>
                                </div>

                                {/* آیا نویسنده است؟ */}
                                <div>
                                    <p className="text-sm text-gray-500">{Lang(["public.author"])}</p>
                                    <h2 className="text-lg font-medium text-gray-700">
                                        {data?.author == 1 ? Lang(["public.yes"]) : Lang(["public.no"])}
                                    </h2>
                                </div>

                                {/* آیا مترجم است؟ */}
                                <div>
                                    <p className="text-sm text-gray-500">{Lang(["public.translator"])}</p>
                                    <h2 className="text-lg font-medium text-gray-700">
                                        {data?.translator == 1 ? Lang(["public.yes"]) : Lang(["public.no"])}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </Frame>
            <ButtonContainer>
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>
    );
}