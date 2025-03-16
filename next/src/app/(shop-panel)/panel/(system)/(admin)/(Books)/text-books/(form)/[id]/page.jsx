"use client";
import { View } from "@/Components/Admin/Book/View";
export default function page({params}){
    return(
        <View link="/text-books" id={params?.id} />
    );
}