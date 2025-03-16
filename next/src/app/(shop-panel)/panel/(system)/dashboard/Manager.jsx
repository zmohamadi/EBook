"use client";

import { useConfig } from "@/lib/config";
import { useFormRefs } from "@/Theme/Midone";
import { useData } from "@/Theme/Midone/Utils/Data";
// import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useAuth } from "@/lib/auth";
import Shop from "./Shop";
import ChartHome from "./ChartHome";

export default function Manager() {
    const { user } = useAuth({ guard: "admin" });
    const { Lang } = useLang();
    const {laraAdmin,nextAdmin} = useConfig();
    let {get} = useData();
    let component = useFormRefs();

  
    // let info  = component?.state?.info;
    return <>
    <div className="content">
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 xxl:col-span-9">
        <div className="grid grid-cols-12 gap-6">
        <Shop />
        <ChartHome/>
        </div>
        </div>
        </div>
        </div>
    </>
}