"use client";
import { Form } from "@/Components/Admin/UserCreator/Form";

export default function page({params}){
    
    return(
        <Form link="/narrators" id={params?.id} />
    );
}