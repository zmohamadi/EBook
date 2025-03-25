"use client";
import { Form } from "@/Components/Admin/UserCreator/Form";

export default function page({params}){
    
    return(
        <Form id={params?.id} link="/narrators" titleFrame="narrators"/>
    );
}