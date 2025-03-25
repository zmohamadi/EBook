"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData, useFormRefs, Input, Button, ButtonContainer, CheckBox, Box, Frame, Textarea } from "@/Theme/Midone/Forms";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { Select } from "@/Theme/Midone/Forms/Select";
import { Loading } from "@/Theme/Midone";

export function Form({ id,link="/users",titleFrame="" }) {
    const { Lang,local } = useLang();
    const { laraAdmin } = useConfig();
    let { save, get, getNeedles } = useData();
    let [needles, setNeedles] = useState();
    const router = useRouter();
    let component = useFormRefs();

    let uploadUrl=laraAdmin+"/upload/.-media-users";
    let deleteUrl=laraAdmin+"/deleteFile/.-media-users";
    let uploadDir='media/users/';

    let url = laraAdmin + link, method = "new";
    if (id != 0 && id != undefined) url = laraAdmin + link + "/" + id, method = "edit";

    useEffect(() => {
        getNeedles(laraAdmin+'/users/get-needles', setNeedles);
        if (id != 0 && id != undefined) get(url, component, "info");
    }, []);

    const saveItem = () => save(url, component, method, link);
    const back = () => router.back();

    const data = component?.state?.info;
    // let roles = needles?.role;
    let roles = [];
    let displayPass = (id>0)? "" : <Input label="password" refItem={[component, "password"]} type="password" />;
    

    return (
        <>
            {(data == undefined) ?
                <Loading />
            :
                <>
                    <Frame title={Lang(["public."+titleFrame])}>
                        <Box>
                            {/* نام */}
                            <Input label="firstname" refItem={[component, "firstname"]} required="true" />

                            {/* نام خانوادگی */}
                            <Input label="lastname" refItem={[component, "lastname"]} required="true" />

                            {/* شماره همراه */}
                            <Input label="mobile" refItem={[component, "mobile"]} required="true" />

                            {/* ملیت */}
                            <Input label="nationality" refItem={[component, "nationality"]} />

                            {/* تاریخ تولد */}
                            <Input label="birth_date" refItem={[component, "birth_date"]} type="date" />

                            {/* تاریخ درگذشت */}
                            <Input label="death_date" refItem={[component, "death_date"]} type="date" />

                            {/* رمز عبور */}
                            {displayPass}

                            {/* نقش کاربر */}
                            <Select label="role" refItem={[component, "role_id"]} data={roles} titleKey={"title_"+local} />

                            {/* زندگی‌نامه */}
                            <Textarea className="col-span-12" row="3" label="biography" refItem={[component, "biography"]} />

                            <div className="col-span-6">
                                {/* تصویر */}
                                <Dropzone refItem={[component, "photo"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir1={uploadDir} required="true" />
                            </div>
                            <div className="col-span-6">
                                {/* آیا راوی است؟ */}
                                <CheckBox className="col-span-12"
                                    label=" "
                                    name={Lang('public.is_it_narrator')}
                                    refItem={[component, "narrator"]}
                                    checked={data?.narrator == 1}
                                />

                                {/* آیا نویسنده است؟ */}
                                <CheckBox className="col-span-12"
                                    label=" "
                                    name={Lang('public.is_it_author')}
                                    refItem={[component, "author"]}
                                    checked={data?.author == 1}
                                />

                                {/* آیا مترجم است؟ */}
                                <CheckBox className="col-span-12"
                                    label=" "
                                    name={Lang('public.is_it_translator')}
                                    refItem={[component, "translator"]}
                                    checked={data?.translator == 1}
                                />
                                {/* وضعیت فعال/غیرفعال */}
                                <CheckBox
                                    label=" "
                                    name={Lang('public.active')}
                                    refItem={[component, "status_id"]}
                                    checked={data?.status_id == 1}
                                />
                            </div>
                        </Box>
                    </Frame>
                </>
            }
            <ButtonContainer>
                <Button label="save" onClick={saveItem} component={component} />
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>
    );
}