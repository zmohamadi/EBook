"use client";
import { View } from "@/Components/Admin/UserCreator/View";
export default function page({params}){
    return(
        <View link="/translators" id={params?.id} />
    );
}