"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,Box,CheckBox } from "@/Theme/Midone/Forms";
import { SelectTail } from "@/Theme/Midone/Forms/SelectTail";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { CKEditor } from "@/Theme/Midone/Forms/CKEditor";

export default function Form({id}){
    const {activeLang,Lang} = useLang();
    const formUrl = "/sliders";
    let component = useFormRefs();
    const {laraAdmin } = useConfig();
    const router = useRouter();
    let {save, get} = useData();
    let url = laraAdmin+formUrl, method = "new", key = 0;
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";
    let uploadUrl=laraAdmin+"/upload/.-media-sliders";
    let deleteUrl=laraAdmin+"/deleteFile/.-media-sliders";
    let uploadDir='media/sliders/';

    useEffect(() => {
        get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();

    return <>
            <Box title={Lang(["public.sliders"])}>
                <Input label="title" refItem={[component, "title"]} required="true" />
                <Input label="title2" refItem={[component, "title2"]} />
                <Input label="link" refItem={[component, "link"]} />
                <Input label="order" refItem={[component, "order"]} required="true" />
                <SelectTail className="col-span-6" required="true" label="lang" refItem={[component, "lang"]} data={activeLang} titleKey="symbol" valueKey="symbol" />
                <CheckBox className="col-span-3" label="type" name={Lang('public.mobile_size')} refItem={[component, "mobile"]} />
                <CheckBox className="col-span-3" label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
                <CKEditor className="col-span-6" label="text" refItem={[component, "text"]} />
                <Dropzone refItem={[component, "image"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} required="true" />
            </Box>                
            <ButtonContainer>
                <Button label="save" onClick={saveItem} />
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>;
}