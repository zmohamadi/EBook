"use client";
import { Form } from "@/Components/Admin/UserCreator/Form";

export default function page({params}){
    
    return(
        <Form link="/authors" id={params?.id} />
    );
}