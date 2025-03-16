"use client";
import { Form } from "@/Components/Admin/Book/Form";

export default function page({params}){
    
    return(
        <Form link="/audio-books" id={params?.id} />
    );
}