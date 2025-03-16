"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData, useFormRefs, Input, Button, ButtonContainer, CheckBox } from "@/Theme/Midone/Forms";
import { Loading } from "@/Theme/Midone";

export function Form({ id }) {
    const link = "/users";
    const { Lang } = useLang();
    const { laraAdmin } = useConfig();
    const router = useRouter();
    let component = useFormRefs();
    let { save, get } = useData();

    let url = laraAdmin + link, method = "new";
    if (id != 0 && id != undefined) url = laraAdmin + link + "/" + id, method = "edit";

    useEffect(() => {
        if (id != 0 && id != undefined) get(url, component, "info");
    }, []);

    const saveItem = () => save(url, component, method, link);
    const back = () => router.back();
    const data = component?.state?.info;

    return (
        <>
            {(data == undefined) ?
                <Loading />
                :
                <>
                    <div className="pos intro-y grid grid-cols-12 gap-5 mt-5">
                        <div className="intro-y col-span-12 lg:col-span-8">
                            {/* نام */}
                            <Input label="firstname" refItem={[component, "firstname"]} required="true" />

                            {/* نام خانوادگی */}
                            <Input label="lastname" refItem={[component, "lastname"]} required="true" />

                            {/* شماره همراه */}
                            <Input label="mobile" refItem={[component, "mobile"]} required="true" />

                            {/* زندگی‌نامه */}
                            <Input label="biography" refItem={[component, "biography"]} type="textarea" />

                            {/* تاریخ تولد */}
                            <Input label="birth_date" refItem={[component, "birth_date"]} type="date" />

                            {/* تاریخ درگذشت */}
                            <Input label="death_date" refItem={[component, "death_date"]} type="date" />

                            {/* ملیت */}
                            <Input label="nationality" refItem={[component, "nationality"]} />

                            {/* رمز عبور */}
                            <Input label="password" refItem={[component, "password"]} type="password" />

                            {/* نقش کاربر */}
                            <Input label="role_id" refItem={[component, "role_id"]} type="number" />

                            {/* آیا راوی است؟ */}
                            <CheckBox
                                label="narrator"
                                name={Lang('public.narrator')}
                                refItem={[component, "narrator"]}
                                checked={data?.narrator == 1}
                            />

                            {/* آیا نویسنده است؟ */}
                            <CheckBox
                                label="author"
                                name={Lang('public.author')}
                                refItem={[component, "author"]}
                                checked={data?.author == 1}
                            />

                            {/* آیا مترجم است؟ */}
                            <CheckBox
                                label="translator"
                                name={Lang('public.translator')}
                                refItem={[component, "translator"]}
                                checked={data?.translator == 1}
                            />

                            {/* تصویر */}
                            <Input label="photo" refItem={[component, "photo"]} type="file" />

                           

                            {/* وضعیت فعال/غیرفعال */}
                            <CheckBox
                                label="status_id"
                                name={Lang('public.active')}
                                refItem={[component, "status_id"]}
                                checked={data?.status_id == 1}
                            />
                        </div>
                    </div>
                </>
            }
            <ButtonContainer>
                <Button label="save" onClick={saveItem} component={component} />
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>
    );
}