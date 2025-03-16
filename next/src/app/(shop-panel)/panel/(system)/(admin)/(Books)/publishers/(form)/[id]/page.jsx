"use client";
import { View } from "@/Components/Admin/Publisher/View";
export default function page({params}){
    return(
        <View  id={params?.id} />
    );
}