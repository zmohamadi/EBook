"use client";
import { useEffect } from "react";
import { useConfig } from "@/lib/config";
import { useLang } from "@/lib/lang";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,Box,CheckBox,Textarea} from "@/Theme/Midone/Forms";
import { Tab,TabHeader,TabBody,TabList,TabPanel } from "@/Theme/Midone/Forms/Tab";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { Tools } from "@/Theme/Midone/Utils/Tools";

export default function Form({id}){
    const formUrl = "/site-texts";
    const {Lang,activeLang} = useLang();
    const {laraAdmin } = useConfig();
    const router = useRouter();
    let component = useFormRefs();
    let {save, get} = useData();
    let url = laraAdmin+formUrl, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";
    let uploadUrl=laraAdmin+"/upload/.-media-siteText";
    let deleteUrl=laraAdmin+"/deleteFile/.-media-siteText";
    let uploadDir='media/siteText/';

    useEffect(() => {
        get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();

    return <>
            <Tab>
                <TabHeader>
                    {Tools.getArray(activeLang).map((lang, index)=>
                            <TabList href={lang.symbol} title={Lang('public.site_texts')} active={index==0?"true":""} >{lang.title}</TabList>
                    )}
                </TabHeader>
                <TabBody>
                    {Tools.getArray(activeLang).map((lang, index)=>
                        <TabPanel id={lang.symbol} active={index==0?"true":""}>
                            <Input className={"col-span-12 "+lang.dir}
                                labelClassName={lang.dir}
                                label= {"title_"+lang.symbol}
                                refItem={[component, "title_"+lang.symbol]}
                            />
                            <Textarea className={"col-span-6 "+lang.dir} label= {"text_"+lang.symbol} labelClassName={lang.dir}
                                refItem={[component, "text_"+lang.symbol]} />
                            <Textarea className={"col-span-6 "+lang.dir} label= {"btn_text_"+lang.symbol} labelClassName={lang.dir}
                                refItem={[component, "btn_text_"+lang.symbol]} />
                        </TabPanel>
                    )}
                </TabBody>
            </Tab>
            <Box shadow={false}>
                <div className="col-span-6">
                    <Input label="link" refItem={[component, "link"]} />
                    <CheckBox label="status"  name={Lang('public.active')} refItem={[component, "status_id"]} />
                </div>
                <Dropzone refItem={[component, "image"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} />
            </Box>
            <ButtonContainer>
                <Button label="save" onClick={saveItem} />
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>;
}