"use client";
import { Form } from "@/Components/Admin/UserCreator/Form";

export default function page({params}){
    
    return(
        <Form link="/translators" id={params?.id} />
    );
}