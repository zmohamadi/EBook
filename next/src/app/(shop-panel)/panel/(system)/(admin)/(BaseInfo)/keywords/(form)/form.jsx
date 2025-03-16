"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData,useFormRefs,Input,Button,ButtonContainer,CheckBox,Frame,Box } from "@/Theme/Midone/Forms";
import { Loading } from "@/Theme/Midone/Utils";

export default function Form({id}){
    const {activeLang,Lang} = useLang();
    const { laraAdmin } = useConfig();
    let { save, get } = useData();
    let component = useFormRefs();
    const router = useRouter();
    const formUrl = "/keywords"; 
    let url = laraAdmin+formUrl, method = "new";
    if(id != 0 && id != undefined) url = laraAdmin+formUrl+"/"+id, method = "edit";
    
    useEffect(()=>{
        if(id != 0) get(url, component, "info");
    }, [id]);

    const saveItem = ()=>save(url, component, method, formUrl);
    const back = ()=>router.back();
    let data = component?.state?.info;

    return(
            <>
                <Frame title={Lang("public.keywords")}>
                    {(method == "edit" && data?.id == undefined)?
                        <Loading className="mt-5" />
                    :
                        <Box>     
                            <Input required="true" label="title" refItem={[component, "title"]} />
                            <Input required="true" label="order" refItem={[component, "order"]} />
                            <CheckBox label="status" name={Lang('public.active')} refItem={[component, "status_id"]} value={0} />        
                        </Box>
                    }
                </Frame>
                <ButtonContainer>
                    <Button label="save" onClick={saveItem} />
                    <Button label="back" onClick={back} />
                </ButtonContainer>        
            </>
        );
}