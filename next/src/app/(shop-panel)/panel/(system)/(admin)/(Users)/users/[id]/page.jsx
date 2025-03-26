"use client";
import { View } from "@/Components/Admin/UserCreator/View";

export default function page({params}){
    return(
        <View id={params?.id} link="/users" />
    );
}