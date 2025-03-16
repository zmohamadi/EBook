"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,Box,CheckBox } from "@/Theme/Midone/Forms";
import { SelectTail } from "@/Theme/Midone/Forms/SelectTail";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";

export default function Form({id}){
    const {activeLang,Lang,local} = useLang();
    const {laraAdmin } = useConfig();
    const formUrl = "/banners"; 
    let component = useFormRefs();
    const router = useRouter();
    let {save, get, getNeedles} = useData();
    let [needles, setNeedles] = useState();
    let url = laraAdmin+formUrl, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";
    let uploadUrl=laraAdmin+"/upload/.-media-banners";
    let deleteUrl=laraAdmin+"/deleteFile/.-media-banners";
    let uploadDir='media/banners/';

    useEffect(() => {
        getNeedles(laraAdmin+formUrl+'/get-needles', setNeedles);
        get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();

    return <>
            <Box title={Lang(["public.banners"])}>
                <Input label="title" refItem={[component, "title"]} />
                <Input label="link" refItem={[component, "link"]} />
                <SelectTail label="position" refItem={[component, "position_id"]} data={needles?.bannerposition} titleKey={"title_"+local} />
                <Dropzone required="true" refItem={[component, "image"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} />
                <SelectTail required="true" label="lang" refItem={[component, "lang"]} data={activeLang} titleKey="symbol" valueKey="symbol" />
                <CheckBox label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
            </Box>                
            <ButtonContainer>
                <Button label="save" onClick={saveItem} />
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>;
}