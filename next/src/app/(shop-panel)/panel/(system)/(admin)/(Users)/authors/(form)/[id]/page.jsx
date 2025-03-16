"use client";
import { View } from "@/Components/Admin/UserCreator/View";
export default function page({params}){
    return(
        <View link="/authors" id={params?.id} />
    );
}