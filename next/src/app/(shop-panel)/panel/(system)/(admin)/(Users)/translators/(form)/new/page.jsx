"use client";
import { Form } from "@/Components/Admin/UserCreator/Form";

export default function page(){
    
    return(
        <Form id={params?.id} link="/translators" titleFrame="translators"/>
    );
}