"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useUtility } from "@/lib/utility";
import { Box, FeatherIcon, useData, useFormRefs, Frame, Pic } from "@/Theme/Midone";

export default function View({params}){
    const {laraAdmin,mediaPath } = useConfig();
    const {Lang,local} = useLang();
    const { getRelation } = useUtility();
    const formUrl = "/personnels"; 
    const title = "personnel" ; 
    // let id = params.id , url = laraAdmin+formUrl+"/"+id;
    let id = params.id , url = `${laraAdmin}/personnels/${id}`;
    let component = useFormRefs();
    let {get} = useData();
    useEffect(() => {get(url, component, "info");}, []);
    const data = component?.state?.info;

    return(
        <Frame title={Lang(["public.personnel"])}>
             <div className="col-span-12">
                <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                        <div>
                            <p className="text-sm text-gray-500">{Lang(["public.firstname"])}</p>
                            <h2 className="text-lg font-medium text-gray-700">{data?.firstname || "-"}</h2>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">{Lang(["public.lastname"])}</p>
                            <h2 className="text-lg font-medium text-gray-700">{data?.lastname || "-"}</h2>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">{Lang(["public.mobile"])}</p>
                            <h2 className="text-lg font-medium text-gray-700">{data?.mobile || "-"}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Frame>
    );
}