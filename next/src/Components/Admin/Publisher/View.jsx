"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Box, Button, ButtonContainer, Input, useData, useFormRefs } from "@/Theme/Midone/Forms";
import { Loading } from "@/Theme/Midone";
import { Frame } from "@/Theme/Midone/Forms";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/lib";

export function View({ id }) {
    const { user } = useAuth();
    const access = user?.role_id == 1 ? true : false;
    const { Lang, local } = useLang();
    const { laraAdmin } = useConfig();
    const { get } = useData();
    let url = `${laraAdmin}/publishers/${id}`;
    const router = useRouter();

    let component = useFormRefs();
    useEffect(() => {
        get(url, component, "info");
    }, []);
    const data = component?.state?.info;
    const back = () => router.back();

    return (
        <>
            <Frame>
                {((data == undefined)) ?
                    <Loading />
                    :
                    <Box cols={"cols-span-1"}>
                        {/* Name */}
                            <p className="text-sm text-gray-500">{Lang(["public.name"])}</p>
                            <h2 className="text-lg font-medium text-gray-700">{data?.name || "-"}</h2>
                        {/* Status */}
                            <p className="text-sm text-gray-500">{Lang(["public.status"])}</p>
                            <h2 className="text-lg font-medium text-gray-700">
                                {data?.status_id == 1 ? Lang(["public.active"]) : Lang(["public.inactive"])}
                            </h2>
                    </Box>
                }
            </Frame>
            <ButtonContainer>
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>
    );
}