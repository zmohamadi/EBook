"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useRouter } from 'next/navigation';
import { useData, useFormRefs, Input, Button, ButtonContainer, Textarea, Radio, CheckBox, SelectTail, Frame } from "@/Theme/Midone/Forms";
import { Dropzone } from "@/Theme/Midone/Forms/Dropzone";
import { CheckBoxGroup } from "@/Theme/Midone/Forms/CheckBoxGroup";
import { Loading } from "@/Theme/Midone";

export function Form({ id , link }) {
    const { Lang, local } = useLang();
    const { laraAdmin } = useConfig();
    const router = useRouter();
    let component = useFormRefs();
    let { save, get, getNeedles } = useData();
    let [needles, setNeedles] = useState();

    let uploadUrl = laraAdmin + "/upload/.-media-books";
    let deleteUrl = laraAdmin + "/deleteFile/.-media-books";
    let uploadDir = 'media/books/';

    let url = laraAdmin + "/books", method = "new";
    if (id != 0 && id != undefined) url = laraAdmin + "/books/" + id, method = "edit";

    useEffect(() => {
        getNeedles(laraAdmin + '/books/get-needles', setNeedles);
        if (id != 0 && id != undefined) get(url, component, "info");
    }, []);

    const saveItem = () => save(url, component, method, link);
    const back = () => router.back();
    const data = component?.state?.info;
    let active_status = needles?.status?.filter(item => item.group_id == 1);
    let publication_status = needles?.status?.filter(item => item.group_id == 4);
    let file_type = needles?.status?.filter(item => item.group_id == 7);
    let publisher = needles?.publisher;
    let category = needles?.category;
    let authors = needles?.user?.filter(item => item.author == true);
    let translators = needles?.user?.filter(item => item.translator == true);
    let narrators = needles?.user?.filter(item => item.narrator == true);
    let type = link =="/audio-books" ? true : false ; 
// console.log(type);

    return (
        <>
            {(data == undefined || needles == null) ?
                <Loading />
                :
                <>
                    {/* <Frame> */}
                        <div className="pos intro-y grid grid-cols-12 gap-5 mt-5">
                            <div className="intro-y col-span-12 lg:col-span-8">
                                <Input type="hidden"
                                        refItem={[component, `type`]}
                                        defaultValue={type == true ?  2 : 1 }
                                    />
                                <Input label="title" refItem={[component, "title"]} required="true" />
                                <div className="post intro-y p-3 box mt-5 ">
                                    
                                    <SelectTail
                                    multiple="true"
                                        label="authors"
                                        refItem={[component, "authors"]}
                                        required="true"
                                        valueKey="id"
                                        defaultValue={data?.creators?.filter(item => item.author == true)}
                                    >
                                        {authors.map(author => (
                                            <option key={author.id} value={author.id}>
                                                {`${author.firstname} ${author.lastname}`}
                                            </option>
                                        ))}
                                    </SelectTail>
                                    {type&& <SelectTail
                                        multiple="true"
                                            label="narrators"
                                            refItem={[component, "narrators"]}
                                            required="true"
                                            valueKey="id"
                                            defaultValue={data?.creators?.filter(item => item.narrator == true)}

                                        >
                                            {narrators.map(narrator => (
                                                <option key={narrator.id} value={narrator.id}>
                                                    {`${narrator.firstname} ${narrator.lastname}`}
                                                </option>
                                            ))}
                                        </SelectTail>
                                    }
                                    <SelectTail
                                    multiple="true"
                                        label="translators"
                                        refItem={[component, "translators"]}
                                        required="true"
                                        valueKey="id"
                                        defaultValue={data?.creators?.filter(item => item.translator == true)}

                                    >
                                        {translators.map(translator => (
                                            <option key={translator.id} value={translator.id}>
                                                {`${translator.firstname} ${translator.lastname}`}
                                            </option>
                                        ))}
                                    </SelectTail>
                                    <SelectTail multiple="true" label="category" data={category}
                                        refItem={[component, "categories"]} required="true" titleKey={"name"} valueKey="id" />
                                    <Textarea label="introduction" required="true" refItem={[component, "introduction"]} />
                                    <Textarea label="recommended_audience" refItem={[component, "recommended_audience"]} />
                                    <Textarea label="excerpt" refItem={[component, "excerpt"]} />
                                    <Dropzone className="col-span-12" refItem={[component, "image"]} required="true" uploadUrl={uploadUrl} deleteUrl={deleteUrl + "/"} uploadDir={uploadDir} />
                                    <Dropzone className="col-span-12" refItem={[component, "file"]} required="true" uploadUrl={uploadUrl} deleteUrl={deleteUrl + "/"} uploadDir={uploadDir} />
                                    <Dropzone className="col-span-12" refItem={[component, "sample_file"]} required="true" uploadUrl={uploadUrl} deleteUrl={deleteUrl + "/"} uploadDir={uploadDir} />
                                    {/* {type&&<> */}
                                        {/* <Dropzone className="col-span-12" refItem={[component, "audio_file"]} required="true" uploadUrl={uploadUrl} deleteUrl={deleteUrl + "/"} uploadDir={uploadDir} /> */}
                                    {/* </>} */}
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-4">
                                <div className="intro-y box p-5">
                                    
                                    <SelectTail label="publisher" data={publisher}
                                        refItem={[component, "publisher_id"]} required="true" titleKey={"name"} valueKey="id" />

                                    <Input type="price" label="original_price" refItem={[component, "original_price"]} required="true" />
                                    <Input type="price" label="discounted_price" refItem={[component, "discounted_price"]} />
                                    <Input type="number" label="publication_year" refItem={[component, "publication_year"]} required="true" />

                                    

                                    <SelectTail className="mt-5" label="file_type" data={file_type}
                                        refItem={[component, "file_type"]} titleKey={"title_" + local} valueKey="code" />

                                    <Input type="number" label="page_count" refItem={[component, "page_count"]} />
                                    {type&& <><Input  label="duration" refItem={[component, "duration"]} />
                                    <Input  label="file_size" refItem={[component, "file_size"]} /></>}

                                    <Radio className="mt-5 border-b-2"
                                        type="col" label="publication_status"
                                        refItem={[component, `publication_status`]}
                                        data={publication_status}
                                        valueKey="code" titleKey={"title_" + local}
                                        key={"publication_status" + data?.publication_status}
                                    />

                                    <CheckBox
                                        label="status"
                                        valueKey="code"
                                        name={Lang('public.active')}
                                        refItem={[component, "status_id"]}
                                        checked={data?.status_id == 1}
                                    />                            
                                </div>
                            </div>
                        </div>
                    {/* </Frame> */}
                </>
            }
            <ButtonContainer>
                <Button label="save" onClick={saveItem} component={component} />
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>
    );
}