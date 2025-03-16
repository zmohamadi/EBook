"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from "@/lib/auth";
import { Loading } from "@/Theme/Midone/Utils";
import { useData, useFormRefs, Input, Button, ButtonContainer, Box, CheckBox, Textarea, Frame, Radio } from "@/Theme/Midone/Forms";
import { SelectTail } from "@/Theme/Midone/Forms/SelectTail";
import { Select } from "@/Theme/Midone/Forms/Select";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";

export default function Form({ id }) {
    const link = "/personnels";
    const { Lang, local } = useLang();
    const { laraAdmin } = useConfig();
    const router = useRouter();
    const pathname = usePathname();
    const { user } = useAuth();
    
    let component = useFormRefs();
    let { save, get, getNeedles } = useData();
    let [needles, setNeedles] = useState();

    let uploadUrl = laraAdmin + "/upload/.-media-users";
    let deleteUrl = laraAdmin + "/deleteFile/.-media-users";
    let uploadDir = 'media/users/';

    // اگر روت پروفایل باشد، از user.id استفاده می‌شود
    let finalId = pathname.includes("profile") ? user?.id : id;
    let url = laraAdmin + link;
    let method = "new";
    let nextUrl = link;
    
    if (finalId !== 0 && finalId !== undefined) {
        url = `${laraAdmin + link}/${finalId}`;
        method = "edit";
        nextUrl = "/";
    }

    useEffect(() => {
        getNeedles(laraAdmin+link+'/get-needles', setNeedles);
        get(url, component, "info");
    }, [url]);

    const saveItem = () => save(url, component, method, nextUrl);
    const back = () => router.back();
    let data = component?.state?.info;
    
    return (
        <>
            <Frame title={Lang(["public.personnel"])}>
                <Box>
                    <Input label="name" refItem={[component, "firstname"]} required="true" />
                    <Input label="family" refItem={[component, "lastname"]} required="true" />
                    <Input dir="ltr" label="mobile" refItem={[component, "mobile"]} required="true" />
                    <Dropzone refItem={[component, "photo"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl + "/"} uploadDir={uploadDir} required="true" />
                    <Radio className="col-span-4" defaultValue={data?.status_id ? data?.status_id: 1} 
                        type="col" label="status" refItem={[component, `status_id`]}
                        data={needles?.status?.filter(item => item.group_id == 1)} 
                        valueKey="code" titleKey={"title_"+local}  
                        key={"status_id"+data?.status_id}
                    /> 
                </Box>
            </Frame>
            <ButtonContainer>
                <Button label="save" onClick={saveItem} component={component} />
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>
    );
}
