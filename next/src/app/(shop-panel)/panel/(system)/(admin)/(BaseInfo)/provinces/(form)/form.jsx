"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,Box,Frame,CheckBox } from "@/Theme/Midone/Forms";
import { Tab,TabHeader,TabBody,TabList,TabPanel } from "@/Theme/Midone/Forms/Tab";
import { SelectTail } from "@/Theme/Midone/Forms/SelectTail";
import { Tools,Loading } from "@/Theme/Midone/Utils";

export default function Form({id}){
    const { Lang,activeLang,local } = useLang();
    const { laraAdmin } = useConfig();
    const router = useRouter();
    const formUrl = "/provinces"; 
    let component = useFormRefs();
    let {save, get, getNeedles} = useData();
    let [needles, setNeedles] = useState();
    let url = laraAdmin+formUrl, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";

    useEffect(() => {
        getNeedles(laraAdmin+formUrl+'/get-needles', setNeedles);
        if(id != 0 && id != undefined) get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, formUrl+"?"+Math.random());
    const back = ()=>router.back();
    let data = component?.state?.info;

    return(
        <>
            <Frame title={Lang("public.provinces")}>
                {((method == "edit" && data?.id == undefined) || needles == undefined)?
                    <Loading className="mt-5" />
                :
                    <div class="col-span-12">
                        <Tab>
                            <TabHeader>
                                {Tools.getArray(activeLang).map((lang, index)=>
                                        <TabList href={lang.symbol} title={Lang('public.province')} active={index==0?"true":""} >{lang.title}</TabList>
                                )}
                            </TabHeader>
                            <TabBody>
                                {Tools.getArray(activeLang).map((lang, index)=>
                                    <TabPanel id={lang.symbol} active={index==0?"true":""}>
                                        <Input className={"col-span-6 "+lang.dir} labelClassName={lang.dir} label= {"name_"+lang.symbol}
                                            refItem={[component, "name_"+lang.symbol]} required="true"
                                        />
                                    </TabPanel>
                                )}
                            </TabBody>
                        </Tab>
                        <Box shadow={false}>
                            <SelectTail required="true" label="country" refItem={[component, "country_id"]} data={needles?.country} titleKey={"name_"+local} />
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