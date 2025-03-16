"use client";
import { View } from "@/Components/Admin/BookCategory/View";
export default function page({params}){
    return(
        <View  id={params?.id} />
    );
}