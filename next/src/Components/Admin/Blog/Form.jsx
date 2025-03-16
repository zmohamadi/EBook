"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Frame,Input,Button,ButtonContainer,CheckBox } from "@/Theme/Midone/Forms";
import { Tab,TabHeader,TabBody,TabList,TabPanel } from "@/Theme/Midone/Forms/Tab";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { CKEditor } from "@/Theme/Midone/Forms/Ckeditor";

export default function Form({id}){
    const { Lang } = useLang();
    const { laraAdmin } = useConfig();
    let component = useFormRefs();
    const router = useRouter();
    let { save, get } = useData();
    const formUrl = "/blogs"; 
    let uploadUrl = laraAdmin+"/upload/.-media-blogs";
    let deleteUrl = laraAdmin+"/deleteFile/.-media-blogs";

    let url = laraAdmin+formUrl, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";

    useEffect(() => {
        if(id != 0 && id != undefined) get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();

    return(
        <>
            <Frame title={Lang(["public.blogs"])}>
                <Tab className="col-span-12">
                    <TabHeader>
                        <TabList href="tab-first" title={Lang('public.specifications')} active={"true"}>{Lang("public.specifications")}</TabList>
                        <TabList href="tab-second" title={Lang('public.upload')}>{Lang("public.upload")}</TabList>
                    </TabHeader>
                    <TabBody>
                        <TabPanel id="tab-first" active={"true"}>
                            <Input label="title" refItem={[component, "title"]} required="true" />
                            <CheckBox label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
                            <line />
                            <Dropzone className="sm:col-span-12 col-span-6" label={Lang(["public.thumb","(upload:1)"])} refItem={[component, "thumb"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} required="true" />
                            <CKEditor className="col-span-12" label="text" refItem={[component, "text"]} required="true" />
                        </TabPanel>
                        <TabPanel id="tab-second">
                            <Dropzone className="sm:col-span-12 col-span-6" label={Lang("public.videos")} refItem={[component, "video"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} />
                            <Dropzone className="sm:col-span-12 col-span-6" label={Lang("public.documents")} refItem={[component, "document"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} />
                            <Dropzone className="sm:col-span-12" label={Lang("public.images")} refItem={[component, "img"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} />
                        </TabPanel>
                    </TabBody>
                </Tab>
            </Frame>
            <ButtonContainer>
                <Button label="save" onClick={saveItem} component={component} />
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>
    );
}