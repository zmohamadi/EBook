"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Grid, Frame, FeatherIcon, Pic } from "@/Theme/Midone/Utils";
import { Select } from "@/Theme/Midone/Forms/Select";
import { useEffect, useRef, useState } from "react";
import { Box, Button, ButtonContainer, SelectTail } from "@/Theme/Midone";
import { useAuth } from "@/lib";
import Link from "next/link";

export function List({ query, link = "/text-books" }) {
    const { Lang, local } = useLang();
    const { mediaPath, laraAdmin, nextAdmin } = useConfig();
    const { destroy, getNeedles } = useData();
    const [needles, setNeedles] = useState();
    const [params, setParams] = useState({
        publication_status: "",
        type: "",
        publisher: "",
        file_type: "",
        author: "",
        narrator: "",
        translator: "",
        category: ""
    });
    let type = link == "/audio-books";
    const [url, setUrl] = useState(`${laraAdmin}/books?${query}`);
    const effectRan = useRef(false);
    const formUrl = nextAdmin + link;


    useEffect(() => {
        if (!effectRan.current) {
            getNeedles(`${laraAdmin}/books/get-needles`, setNeedles);
            effectRan.current = true;
        }
    }, [getNeedles, laraAdmin, formUrl]);

    useEffect(() => {
        const urlItems = Object.keys(params)
            .filter(key => params[key] !== "")
            .map(key => `${key}=${params[key]}`)
            .join("&");

        const combinedQuery = [query, urlItems].filter(Boolean).join("&");
        setUrl(`${laraAdmin}/books?${combinedQuery}`);
    }, [params, query, laraAdmin]);

    const handleFilterChange = (e, filter) => {
        setParams((prevParams) => ({ ...prevParams, [filter]: e?.target?.value ?  e?.target?.value : e?.value }));
    };

    const clearFilter = () => {
        setParams({
            publication_status: "",
            type: "",
            publisher: "",
            file_type: "",
            author: "",
            narrator: "",
            translator: "",
            category: ""
        });
    };

    let info = {
        insertLink: `${formUrl}/new`,
        url: url,
        columns: [
            {
                label: "",
                jsx: (item) => (
                    <Pic
                        src={mediaPath + "/books/" + item?.image}
                        defaultImg={`${mediaPath}/public/default/book.png`}
                        classImg="book-cover"
                        key={"img" + item?.image}
                    />
                ),
            },
            {
                label: "title",
                jsx: (item) => (
                    <Link href={`${formUrl}/${item.id}`}>
                        {`${item?.title}`}
                    </Link>
                ),
            },
            { label: "publication_year", field: "publication_year" },
            {
                label: "publisher",
                jsx: (item) => (
                    <span>
                        {item?.publisher?.name}
                    </span>
                )
            },
            {
                label: "file_type",
                jsx: (item) => <span className={"text-" + item?.file_type?.color}>{item?.file_type?.["title_" + local]}</span>
            },
            {
                label: "publication_status",
                jsx: (item) => <span className={"text-" + item?.publication?.color}>{item?.publication?.["title_" + local]}</span>
            },
            { label: "rating", field: "rating" },
            { label: "view_count", field: "view_count" },
            {
                label: "status",
                jsx: (item) => <span className={"text-" + item?.active_status?.color}>{item?.active_status?.["title_" + local]}</span>
            },
            {
                label: "",
                sort: false,
                jsx: (item) => (
                    <div className="flex justify-center">
                        <FeatherIcon
                            name="Edit"
                            url={formUrl + "/" + item?.id + "/edit"}
                            tooltip={Lang('public.edit')}
                        />
                        <FeatherIcon
                            name="Eye"
                            url={formUrl + "/" + item?.id}
                            tooltip={Lang('public.view')}
                        />
                        <FeatherIcon
                            name="XOctagon"
                            tooltip={Lang('public.delete')}
                            color="darkred"
                            onClick={() => destroy(laraAdmin + "/books/" + item?.id)}
                        />
                    </div>
                ),
            },
        ],
    };

    let active_status = needles?.status?.filter(item => item.group_id == 1);
    let publication_status = needles?.status?.filter(item => item.group_id == 4);
    let file_type = needles?.status?.filter(item => item.group_id == 7);
    let publisher = needles?.publisher;
    let category = needles?.category;
    let authors = needles?.user?.filter(item => item.author == true);
    let narrators = needles?.user?.filter(item => item.narrator == true);
    let translators = needles?.user?.filter(item => item.translator == true);

    return (
        <>
            <Frame title={Lang(["public.books"])}>
                <Box shadow={false} minIcon={true} min={true} cols={"grid-cols-10"}>
                    <SelectTail
                        className="col-span-5 md:col-span-3"
                        label="authors"
                        value={params.author}
                        onChange={(e) => handleFilterChange(e, "author")}
                    >
                        {authors?.map(author => (
                            <option key={author.id} value={author.id}>
                                {`${author.firstname} ${author.lastname}`}
                            </option>
                        ))}
                    </SelectTail>
                    {type && (
                        <SelectTail
                            className="col-span-5 md:col-span-3"
                            label="narrators"
                            value={params.narrator}
                            onChange={(e) => handleFilterChange(e, "narrator")}
                        >
                            {narrators?.map(narrator => (
                                <option key={narrator.id} value={narrator.id}>
                                    {`${narrator.firstname} ${narrator.lastname}`}
                                </option>
                            ))}
                        </SelectTail>
                    )}
                    <SelectTail
                        className="col-span-5 md:col-span-3"
                        label="translators"
                        value={params.translator}
                        onChange={(e) => handleFilterChange(e, "translator")}
                    >
                        {translators?.map(translator => (
                            <option key={translator.id} value={translator.id}>
                                {`${translator.firstname} ${translator.lastname}`}
                            </option>
                        ))}
                    </SelectTail>
                    <SelectTail
                        className="col-span-5 md:col-span-3"
                        label="category"
                        value={params.category}
                        onChange={(e) => handleFilterChange(e, "category")}
                        data={category}
                        titleKey={"name"}
                    />
                    <Select
                        defaultValue={params.publisher}
                        onChange={(e) => handleFilterChange(e, "publisher")}
                        className="col-span-5 md:col-span-3"
                        label="publisher"
                        data={publisher}
                        titleKey={"name"}
                    />
                    <Select
                        defaultValue={params.file_type}
                        onChange={(e) => handleFilterChange(e, "file_type")}
                        className="col-span-5 md:col-span-3"
                        label="file_type"
                        data={file_type}
                        titleKey={"title_" + local}
                        valueKey="code"
                    />
                    <Select
                        defaultValue={params.publication_status}
                        onChange={(e) => handleFilterChange(e, "publication_status")}
                        className="col-span-5 md:col-span-3"
                        label="publication_status"
                        data={publication_status}
                        titleKey={"title_" + local}
                        valueKey="code"
                    />
                    <ButtonContainer className="mt-7 md:mt-6 text-right">
                        <Button label="clear_filter" className="btn btn-secondary w-20" onClick={clearFilter} />
                    </ButtonContainer>
                </Box>
                <div className="intro-y col-span-12">
                    <Grid {...info} />
                </div>
            </Frame>
        </>
    );
}