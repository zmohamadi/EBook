"use client";
import { Form } from "@/Components/Admin/BookCategory/Form";

export default function page({params}){
    
    return(
        <Form  id={params?.id} />
    );
}