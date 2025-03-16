"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData, useFormRefs, Input, Button, ButtonContainer, Textarea, Radio, CheckBox, SelectTail, Frame } from "@/Theme/Midone/Forms";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { CheckBoxGroup } from "@/Theme/Midone/Forms/CheckBoxGroup";
import { Loading } from "@/Theme/Midone";

export function Form({ id }) {
    const link = "/books";
    const { Lang, local } = useLang();
    const { laraAdmin } = useConfig();
    const router = useRouter();
    let component = useFormRefs();
    let { save, get, getNeedles } = useData();
    let [needles, setNeedles] = useState();

    let uploadUrl = laraAdmin + "/upload/.-media-books";
    let deleteUrl = laraAdmin + "/deleteFile/.-media-books";
    let uploadDir = 'media/books/';

    let url = laraAdmin + link, method = "new";
    if (id != 0 && id != undefined) url = laraAdmin + link + "/" + id, method = "edit";

    useEffect(() => {
        getNeedles(laraAdmin + '/books/get-needles', setNeedles);
        if (id != 0 && id != undefined) get(url, component, "info");
    }, []);

    const saveItem = () => save(url, component, method, link);
    const back = () => router.back();
    const data = component?.state?.info;

    return (
        <>
            {(data == undefined || needles == null) ?
                <Loading />
                :
                <>
                    <Frame>
                        <div className="pos intro-y grid grid-cols-12 gap-5 mt-5">
                            <div className="intro-y col-span-12 lg:col-span-8">
                                <Input label="title" refItem={[component, "title"]} required="true" />
                                <div className="post intro-y p-3 box mt-5 ">
                                    <Input type="text" label="publication_year" refItem={[component, "publication_year"]} required="true" />
                                    <Textarea label="introduction" required="true" refItem={[component, "introduction"]} />
                                    <Textarea label="recommended_audience" refItem={[component, "recommended_audience"]} />
                                    <Textarea label="excerpt" refItem={[component, "excerpt"]} />
                                    <Dropzone className="col-span-12" refItem={[component, "image"]} required="true" uploadUrl={uploadUrl} deleteUrl={deleteUrl + "/"} uploadDir={uploadDir} />
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-4">
                                <div className="intro-y box p-5">
                                    <SelectTail label="publisher" data={needles?.publishers}
                                        refItem={[component, "publisher_id"]} required="true" titleKey={"name"} valueKey="id" />

                                    <Input type="number" label="original_price" refItem={[component, "original_price"]} required="true" />
                                    <Input type="number" label="discounted_price" refItem={[component, "discounted_price"]} />

                                    <Radio className="mt-5 border-b-2"
                                        type="col" label="type"
                                        refItem={[component, `type`]}
                                        data={[
                                            { code: "text", title_fa: "متنی", title_en: "Text" },
                                            { code: "audio", title_fa: "صوتی", title_en: "Audio" }
                                        ]}
                                        valueKey="code" titleKey={"title_" + local}
                                        key={"type" + data?.type}
                                    />

                                    <SelectTail className="mt-5" label="file_type" data={[
                                        { code: "EPUB", title_fa: "EPUB", title_en: "EPUB" },
                                        { code: "PDF", title_fa: "PDF", title_en: "PDF" },
                                        { code: "MP3", title_fa: "MP3", title_en: "MP3" },
                                        { code: "WAV", title_fa: "WAV", title_en: "WAV" }
                                    ]}
                                        refItem={[component, "file_type"]} titleKey={"title_" + local} valueKey="code" />

                                    <Input type="number" label="page_count" refItem={[component, "page_count"]} />
                                    <Input type="number" label="duration" refItem={[component, "duration"]} />
                                    <Input type="number" label="file_size" refItem={[component, "file_size"]} />

                                    <Radio className="mt-5 border-b-2"
                                        type="col" label="publication_status"
                                        refItem={[component, `publication_status`]}
                                        data={needles?.status?.filter(item => item.group_id == 11)}
                                        valueKey="code" titleKey={"title_" + local}
                                        key={"publication_status" + data?.publication_status}
                                    />

                                    <CheckBox
                                        label="status_id"
                                        name={Lang('public.active')}
                                        refItem={[component, "status_id"]}
                                        checked={data?.status_id == 1}
                                    />                            
                                </div>
                            </div>
                        </div>
                    </Frame>
                </>
            }
            <ButtonContainer>
                <Button label="save" onClick={saveItem} component={component} />
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>
    );
}