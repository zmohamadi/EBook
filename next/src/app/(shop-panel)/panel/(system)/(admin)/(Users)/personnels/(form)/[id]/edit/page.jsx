"use client";
import Form from '@/app/(shop-panel)/panel/(system)/(Users)/personnels/(form)/form';

export default function Edit({params,id}){
    let userId = params? params?.id : id;

    return(
        <div>
            <Form id={userId} />
        </div>
    );
}