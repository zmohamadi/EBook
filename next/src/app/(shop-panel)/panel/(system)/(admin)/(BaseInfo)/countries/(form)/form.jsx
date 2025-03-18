"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,Box,Frame,CheckBox } from "@/Theme/Midone/Forms";
import { Tab,TabHeader,TabBody,TabList,TabPanel } from "@/Theme/Midone/Forms/Tab";
import { Tools,Loading } from "@/Theme/Midone/Utils";

export default function Form({id}){
    const { Lang,activeLang } = useLang();
    const { laraAdmin } = useConfig();
    let {save, get} = useData();
    let component = useFormRefs();
    const router = useRouter();
    const formUrl = "/countries"; 
    let url = laraAdmin+formUrl, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";

    useEffect(() => {
        if(id != 0 && id != undefined) get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();
    let data = component?.state?.info;

    return(
                <>
                        <Frame title={Lang("public.countries")}>
                                {(method == "edit" && data?.id == undefined)?
                                        <Loading className="mt-5" />
                                :
                                        <div class="col-span-12">
                                                <Tab>
                                                        <TabHeader>
                                                                {Tools.getArray(activeLang).map((lang, index)=>
                                                                        <TabList href={lang.symbol} title={Lang('public.country')} active={index==0?"true":""} >{lang.title}</TabList>
                                                                )}
                                                        </TabHeader>
                                                        <TabBody>
                                                                {Tools.getArray(activeLang).map((lang, index)=>
                                                                        <TabPanel id={lang.symbol} active={index==0?"true":""}>
                                                                                        <Input className={"col-span-6 "+lang.dir}
                                                                                                labelClassName={lang.dir}
                                                                                                label= {"name_"+lang.symbol}
                                                                                                refItem={[component, "name_"+lang.symbol]} required="true"
                                                                                        />
                                                                                        <Input className={"col-span-6 "+lang.dir} label= {"nationality_"+lang.symbol} labelClassName={lang.dir}
                                                                                                refItem={[component, "nationality_"+lang.symbol]} required="true" />
                                                                        </TabPanel>
                                                                )}
                                                        </TabBody>
                                                </Tab>
                                                <Box shadow={false}>
                                                        {/* <Input required="true" label="phone_code" refItem={[component, "phonecode"]} /> */}
                                                        <CheckBox label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
                                                </Box>
                                        </div>
                                }
                        </Frame>
                        <ButtonContainer>
                                <Button label="save" onClick={saveItem} />
                                <Button label="back" onClick={back} />
                        </ButtonContainer>
                </>
        );
}