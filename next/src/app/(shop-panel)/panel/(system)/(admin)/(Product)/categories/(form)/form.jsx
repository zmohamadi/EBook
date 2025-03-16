"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,CheckBox,Box, Frame, SelectTail } from "@/Theme/Midone/Forms";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";

export default function Form({ id }){
    const { Lang,local } = useLang();
    const { laraAdmin } = useConfig();
    let { save,get,getNeedles} = useData();
    let [needles, setNeedles] = useState();
    let component = useFormRefs();
    const router = useRouter();
    const formUrl = "/categories"; 
    let url = laraAdmin+formUrl, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";
    
    let uploadUrl = laraAdmin+"/upload/.-media-category";
    let deleteUrl = laraAdmin+"/deleteFile/.-media-category";
    let uploadDir = 'media/category/';
    
    useEffect(()=>{
        getNeedles(laraAdmin+'/categories/get-needles', setNeedles);
        if(id != 0) get(url, component, "info");
    }, [id]);

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();

    return(
        <>
        <Frame>
            <Box>     
                <Input label="name" refItem={[component, "title_"+local]} required="true" />
                {/* <SelectTail label="main_cat" refItem={[component, "parent_id"]}  */}
                <SelectTail label="line" refItem={[component, "parent_id"]} 
                    required="true"
                    data={needles?.category}
                    titleKey={"title_"+local}
                />    
                <Dropzone refItem={[component, "image"]} uploadUrl={uploadUrl} deleteUrl={deleteUrl+"/"} uploadDir={uploadDir} required="true" />
                <CheckBox label="status" name={Lang('public.active')} refItem={[component, "status_id"]} />        
            </Box>
            </Frame>
            <ButtonContainer>
                <Button label="save" onClick={saveItem} />
                <Button label="back" onClick={back} />
            </ButtonContainer>        
        </>
    );
}