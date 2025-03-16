"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData, useFormRefs, Input, Button, ButtonContainer, CheckBox, Box, Frame } from "@/Theme/Midone/Forms";
import { Loading } from "@/Theme/Midone";

export function Form({ id }) {
    const link = "/book-categories";
    const { Lang } = useLang();
    const { laraAdmin } = useConfig();
    const router = useRouter();
    let component = useFormRefs();
    let { save, get } = useData();

    let url = laraAdmin + link, method = "new";
    if (id != 0 && id != undefined) url = laraAdmin + link + "/" + id, method = "edit";

    useEffect(() => {
        if (id != 0 && id != undefined) get(url, component, "info");
    }, []);

    const saveItem = () => save(url, component, method, link);
    const back = () => router.back();
    const data = component?.state?.info;

    return (
        <>
            <Frame>
            {(data == undefined) ?
                <Loading />
                :
                <>
                    <Box>

                            {/* نام ناشر */}
                            <Input label="name" refItem={[component, "name"]} required="true" />

                            {/* وضعیت فعال/غیرفعال */}
                            <CheckBox
                                label="status"
                                name={Lang('public.active')}
                                refItem={[component, "status_id"]}
                                checked={data?.status_id == 1}
                            />
                    </Box>
                </>
            }
            </Frame>
            <ButtonContainer>
                <Button label="save" onClick={saveItem} component={component} />
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>
    );
}