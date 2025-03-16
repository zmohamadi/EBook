"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,Box,CheckBox,Textarea } from "@/Theme/Midone/Forms";
import { SelectTail } from "@/Theme/Midone/Forms/SelectTail";

export default function Form({id}){
    const formUrl = "/faqs"; 
    const {activeLang,Lang,local} = useLang();
    const {laraAdmin } = useConfig();
    let component = useFormRefs();
    const router = useRouter();
    let {save, get, getNeedles} = useData();
    let [needles, setNeedles] = useState();

    let url = laraAdmin+formUrl, method = "new", key = 0;
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";

    useEffect(() => {
        getNeedles(laraAdmin+formUrl+'/get-needles', setNeedles);
        get(url, component, "info");
    }, []);

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();

    return <>
            <Box title={Lang(["public.faqs"])}>
                <SelectTail required="true" label="category" refItem={[component, "category_id"]} data={needles?.faqcategory} titleKey={"title_"+local} />
                <Input required="true" label="order" refItem={[component, "order"]} />
                <SelectTail required="true" label="lang" refItem={[component, "lang"]} data={activeLang} titleKey="symbol" valueKey="symbol" />
                <CheckBox label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />
                <Textarea className="col-span-6" required="true" label="question" refItem={[component, "question"]} />
                <Textarea className="col-span-6" required="true" label="answer" refItem={[component, "answer"]} />
            </Box>
            <ButtonContainer>
                <Button label="save" onClick={saveItem} />
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>;
}