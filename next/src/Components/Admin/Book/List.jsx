"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Grid, Frame, FeatherIcon, Pic } from "@/Theme/Midone/Utils";
import { Select } from "@/Theme/Midone/Forms/Select";
import { useEffect, useRef, useState } from "react";
import { Box, Button, ButtonContainer } from "@/Theme/Midone";
import { useAuth } from "@/lib";
import Link from "next/link";

export function List({query,link="/text-books"}) {
    // const { user } = useAuth();
    // const access = user?.role_id == 1 ? true : false;
    const access = true;
    const {Lang, local} = useLang();
    const {mediaPath,laraAdmin,nextAdmin} = useConfig();
    const {destroy,getNeedles} = useData();
    const [ needles, setNeedles ] = useState();
    const [ params, setParams ] = useState({ publication_status: "", type: "" });
    const [ url, setUrl ] = useState(`${laraAdmin}/books?${query}`);
    const effectRan = useRef(false);
    const formUrl = nextAdmin+link;

    useEffect(() => {
        if (!effectRan.current) {
          getNeedles(`${laraAdmin}/books/get-needles`, setNeedles);
          effectRan.current = true;
        }
      }, [getNeedles, laraAdmin, formUrl]);
    
      useEffect(() => {
        // ساختن query string از params
        const urlItems = Object.keys(params)
            .filter(key => params[key] !== "")
            .map(key => `${key}=${params[key]}`)
            .join("&");
    
        // ادغام query و urlItems با در نظر گرفتن شرایط
        const combinedQuery = [query, urlItems].filter(Boolean).join("&");
    
        // تنظیم URL نهایی
        setUrl(`${laraAdmin}/books?${combinedQuery}`);
    }, [params, query, laraAdmin]);
    
    const handleFilterChange = (e, filter) => {
        setParams((prevParams) => ({ ...prevParams, [filter]: e.target.value }));
      };
    
      const clearFilter = () => {
        setParams({ publication_status: "", type: "" });
      };
    
    let info = {
        insertLink: access ? `${formUrl}/new` : "",
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
            { label: "publisher", jsx: (item) => (
                    <span>
                        {item?.publisher?.name}
                    </span>
                )},
            // { label: "type", jsx: (item) => (
            //         <span>
            //             {item?.type}
            //         </span>
            //     )},
            { label: "file_type", jsx: (item) => (
                    <span>
                        {item?.file_type}
                    </span>
                )},
            { label: "publication_status", jsx: (item) => (
                    <span className={" inline-flex items-center rounded-full py-1 px-2  text-white bg-"+item?.publication_status?.color}>
                        {item?.publication_status}
                    </span>
                )},
            { label: "rating", field: "rating" },
            { label: "view_count", field: "view_count" },
            {label: "status",  jsx: (item)=><span className={"text-"+item?.active_status?.color}>{item?.active_status?.["title_"+local]}</span>},

            {
                label: "",
                sort: false,
                jsx: (item) => (
                    <div className="flex justify-center">
                        <FeatherIcon 
                            access={access} 
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
                            // displayIf={item?.view_count == 0}
                            access={access} 
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
    
    return(
        <>
            <Frame title={Lang(["public.books"])}>
                {access &&<>
                    <Box shadow={false} minIcon={true} min={true} cols={"grid-cols-10"}>
                        <Select
                            defaultValue={params.publication_status}
                            onChange={(e) => handleFilterChange(e, "publication_status")}
                            className="col-span-5 md:col-span-3"
                            label="publication_status"
                            data={needles?.status?.filter(item => item.group_id == 11)}
                            titleKey={"title_" + local} valueKey="code"
                        />
                        <Select
                            defaultValue={params.type}
                            onChange={(e) => handleFilterChange(e, "type")}
                            className="col-span-5 md:col-span-3"
                            label="type"
                            data={[
                                { code: "text", title_fa: "متنی", title_en: "Text" },
                                { code: "audio", title_fa: "صوتی", title_en: "Audio" }
                            ]}
                            titleKey={"title_" + local} valueKey="code"
                        />
                        
                        <ButtonContainer className="mt-7 md:mt-6 text-right ">
                            <Button label="clear_filter" className="btn btn-secondary w-20" onClick={clearFilter} />
                        </ButtonContainer>
                        </Box>
                </>}
                <div className="intro-y col-span-12">
                    <Grid {...info} />
                </div>
            </Frame>
        </>
    );
}