"use client";

import View from '@/Components/Admin/Blog/Comments/View';

export default function ShowInfo({ params }){
    return(
        <View id={params?.id} />
    );
}