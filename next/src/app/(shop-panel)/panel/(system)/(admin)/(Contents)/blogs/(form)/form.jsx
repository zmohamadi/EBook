"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,Textarea,CheckBox } from "@/Theme/Midone/Forms";
import { Tab,TabHeader,TabBody,TabList,TabPanel } from "@/Theme/Midone/Forms/Tab";
import { SelectTail } from "@/Theme/Midone/Forms/SelectTail";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { CKEditor } from "@/Theme/Midone/Forms/CKEditor";

export default function Form({id}){
    const formUrl = "/blogs"; 
    const {laraAdmin } = useConfig();
    const {activeLang,Lang,local} = useLang();
    let component = useFormRefs();
    const router = useRouter();
    let {save, get, getNeedles} = useData();
    let [needles, setNeedles] = useState();
    let uploadUrl=laraAdmin+"/upload/.-media-blogs";
    let deleteUrl=laraAdmin+"/deleteFile/.-media-blogs";
    let uploadDir='media/blogs/';

    let url = laraAdmin+formUrl, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";

    useEffect(() => {
        getNeedles(laraAdmin+formUrl+'/get-needles', setNeedles);
        get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();

    return <>
            <Tab>
                <TabHeader>
                    <TabList href="tab-first" title={Lang('public.info')} active={"true"}>{Lang("public.info")}</TabList>
                    <TabList href="tab-second" title={Lang('public.description')}>{Lang("public.description")}</TabList>
                </TabHeader>
                <TabBody>
                    <TabPanel id="tab-first" active={"true"}>
                        <Input required="true" label="title" refItem={[component, "title"]} />
                        <SelectTail required="true" label="subject" refItem={[component, "subject_id"]} data={needles?.blogsubject} titleKey={"title_"+local} />
                        <SelectTail className="col-span-12" label="keyword" multiple="true"
                            refItem={[component, "keyword_id"]} defaultValue={component?.state?.info?.keywords} data={needles?.keyword} />
                        <SelectTail required="true" label="lang" refItem={[component, "lang"]} data={activeLang} titleKey="symbol" valueKey="symbol" />
                        <CheckBox label="status"  name={Lang('public.active')} refItem={[component, "status_id"]} />
                        <Dropzone required="true" refItem={[component, "thumb"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} />
                        <Dropzone required="true" refItem={[component, "image"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} />
                    </TabPanel>
                    <TabPanel id="tab-second">
                        <Textarea className="col-span-12" required="true" label="conclusion" refItem={[component, "conclusion"]} />
                        <Textarea className="col-span-12" required="true" label="summary" refItem={[component, "summary"]} />
                        <CKEditor className="col-span-12"required="true" label="text" refItem={[component, "text"]} />
                    </TabPanel>
                </TabBody>
            </Tab>
            <ButtonContainer>
                <Button label="save" onClick={saveItem} />
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>;
}