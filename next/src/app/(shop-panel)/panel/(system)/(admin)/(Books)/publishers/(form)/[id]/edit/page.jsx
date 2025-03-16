"use client";
import { Form } from "@/Components/Admin/Publisher/Form";

export default function page({params}){
    
    return(
        <Form  id={params?.id} />
    );
}