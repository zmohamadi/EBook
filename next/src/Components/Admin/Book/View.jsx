"use client";
import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { Button, ButtonContainer, CheckBox, Input, useData, useFormRefs } from "@/Theme/Midone/Forms";
import { Loading, Pic } from "@/Theme/Midone";
import { Frame } from "@/Theme/Midone/Forms";
import { Tab, TabBody, TabHeader, TabList, TabPanel } from "@/Theme/Midone/Forms/Tab";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { CheckBoxGroup } from "@/Theme/Midone/Forms/CheckBoxGroup";
import { useAuth } from "@/lib";

export function View({ id,link }) {
    
    // const { user } = useAuth();
    // const access = user?.role_id == 1 ? true : false;
    const access = true;
    const { Lang, local } = useLang();
    const { laraAdmin, mediaPath, nextAdmin } = useConfig();
    const { save, get } = useData();
    let url = `${laraAdmin}/books/${id}`;
    const router = useRouter();

    let component = useFormRefs();
    useEffect(() => {
        get(url, component, "info");
    }, []);
    const data = component?.state?.info;
    const back = () => router.back();
    // console.log(data?.type);

    return (
        <>
            <Frame title={data?.title || Lang(["public.book_details"])}>
                {((data == undefined)) ?
                    <Loading />
                    :
                    <>
                        <Tab className="col-span-12">
                            <TabHeader>
                                <TabList href="tab-first" title={Lang('public.book_details')} active={"true"}>{Lang("public.book_details")}</TabList>
                                <TabList href="tab-second" title={Lang(['public.reviews']) + "(" + data?.reviews?.length + ")"} />
                                {/* <TabList href="tab-third" title={Lang(['public.ratings']) + "(" + data?.ratings?.length + ")"} /> */}
                            </TabHeader>
                            <TabBody>
                                <TabPanel id="tab-first" active={"true"}>
                                    <div className="col-span-12">
                                        <div>
                                            <Pic
                                                src={mediaPath + "/books/" + data?.image}
                                                defaultImg={`${mediaPath}/public/default/book.png`}
                                                className="rounded-md border"
                                                key={"img" + data?.image}
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                                            {/* Title */}
                                            <div>
                                                <p className="text-sm text-gray-500">{Lang(["public.title"])}</p>
                                                <h2 className="text-lg font-medium text-gray-700">{data?.title || "-"}</h2>
                                            </div>
                                            {/* Publisher */}
                                            <div>
                                                <p className="text-sm text-gray-500">{Lang(["public.publisher"])}</p>
                                                <h2 className="text-lg font-medium text-gray-700">{data?.publisher?.name || "-"}</h2>
                                            </div>
                                            {/* Publication Year */}
                                            <div>
                                                <p className="text-sm text-gray-500">{Lang(["public.publication_year"])}</p>
                                                <h2 className="text-lg font-medium text-gray-700">{data?.publication_year || "-"}</h2>
                                            </div>
                                            {/* File Type */}
                                            <div>
                                                <p className="text-sm text-gray-500">{Lang(["public.file_type"])}</p>
                                                <h2 className="text-lg font-medium text-gray-700">{data?.file_type?.["title_" + local]}</h2>
                                            </div>
                                            {/* Page Count */}
                                            <div>
                                                <p className="text-sm text-gray-500">{Lang(["public.page_count"])}</p>
                                                <h2 className="text-lg font-medium text-gray-700">{data?.page_count || "-"}</h2>
                                            </div>
                                            {/* Duration */}
                                            {
                                                data?.type == 2 &&<>
                                                    <div>
                                                        <p className="text-sm text-gray-500">{Lang(["public.duration"])}</p>
                                                        <h2 className="text-lg font-medium text-gray-700">{data?.duration || "-"}</h2>
                                                    </div>
                                                    {/* File Size */}
                                                    <div>
                                                        <p className="text-sm text-gray-500">{Lang(["public.file_size"])}</p>
                                                        <h2 className="text-lg font-medium text-gray-700">{data?.file_size || "-"}</h2>
                                                    </div>
                                                </>
                                            }
                                            {/* Introduction */}
                                            <div className="lg:col-span-2">
                                                <p className="text-sm text-gray-500">{Lang(["public.introduction"])}</p>
                                                <p className="text-gray-700">{data?.introduction || "-"}</p>
                                            </div>
                                            {/* Recommended Audience */}
                                            <div className="lg:col-span-2">
                                                <p className="text-sm text-gray-500">{Lang(["public.recommended_audience"])}</p>
                                                <p className="text-gray-700">{data?.recommended_audience || "-"}</p>
                                            </div>
                                            {/* Excerpt */}
                                            <div className="lg:col-span-2">
                                                <p className="text-sm text-gray-500">{Lang(["public.excerpt"])}</p>
                                                <p className="text-gray-700">{data?.excerpt || "-"}</p>
                                            </div>
                                            {/* Publication Status */}
                                            <div>
                                                <p className="text-sm text-gray-500">{Lang(["public.publication_status"])}</p>
                                                <h2 className="text-lg font-medium text-gray-700">{data?.publication?.["title_" + local]}</h2>
                                            </div>
                                            {/* Rating */}
                                            <div>
                                                <p className="text-sm text-gray-500">{Lang(["public.rating"])}</p>
                                                <h2 className="text-lg font-medium text-gray-700">{data?.rating || "-"}</h2>
                                            </div>
                                            {/* Rating Count */}
                                            <div>
                                                <p className="text-sm text-gray-500">{Lang(["public.rating_count"])}</p>
                                                <h2 className="text-lg font-medium text-gray-700">{data?.rating_count || "-"}</h2>
                                            </div>
                                            {/* View Count */}
                                            <div>
                                                <p className="text-sm text-gray-500">{Lang(["public.view_count"])}</p>
                                                <h2 className="text-lg font-medium text-gray-700">{data?.view_count || "-"}</h2>
                                            </div>
                                            {/* Status */}
                                            <div>
                                                <p className="text-sm text-gray-500">{Lang(["public.status"])}</p>
                                                <h2 className="text-lg font-medium text-gray-700">{data?.active_status?.["title_" + local]}</h2>
                                            </div>
                                            {/* Authors */}
                                            <div className="lg:col-span-2">
                                                <p className="text-sm text-gray-500">{Lang(["public.authors"])}</p>
                                                <ul className="list-disc list-inside">
                                                {data.creators?.filter(item => item?.author)?.map((author, index) => (                                                        
                                                    <li key={index} className="text-gray-700">
                                                            {author.firstname} {author.lastname}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            {/* Narrators */}
                                            {data?.type == 2 &&
                                                <div className="lg:col-span-2">
                                                    <p className="text-sm text-gray-500">{Lang(["public.narrators"])}</p>
                                                    <ul className="list-disc list-inside">
                                                    {data.creators?.filter(item => item?.narrator)?.map((narrator, index) => (
                                                            <li key={index} className="text-gray-700">
                                                                {narrator.firstname} {narrator.lastname}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            }
                                            {/* Translators */}
                                            <div className="lg:col-span-2">
                                                <p className="text-sm text-gray-500">{Lang(["public.translators"])}</p>
                                                <ul className="list-disc list-inside">
                                                {data.creators?.filter(item => item?.translator)?.map((translator, index) => (
                                                        <li key={index} className="text-gray-700">
                                                            {translator.firstname} {translator.lastname}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            {/* Categories */}
                                            <div className="lg:col-span-2">
                                                <p className="text-sm text-gray-500">{Lang(["public.categories"])}</p>
                                                <ul className="list-disc list-inside">
                                                    {data?.categories?.map((category, index) => (
                                                        <li key={index} className="text-gray-700">
                                                            {category.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            {/* Original Price */}
                                            <div>
                                                <p className="text-sm text-gray-500">{Lang(["public.original_price"])}</p>
                                                <h2 className="text-lg font-medium text-gray-700">{data?.original_price || "-"} {Lang(["public.currency"])}</h2>
                                            </div>
                                            {/* Discounted Price */}
                                            <div>
                                                <p className="text-sm text-gray-500">{Lang(["public.discounted_price"])}</p>
                                                <h2 className="text-lg font-medium text-gray-700">{data?.discounted_price || "-"} {Lang(["public.currency"])}</h2>
                                            </div>
                                            {/* Files */}
                                            <div className="lg:col-span-2">
                                                <p className="text-sm text-gray-500">{Lang(["public.files"])}</p>
                                                <ul className="list-disc list-inside">
                                                    {data?.image && (
                                                        <li className="text-gray-700">
                                                            <a href={`${mediaPath}/books/${data.image}`} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                                                                {Lang(["public.image"])}
                                                            </a>
                                                        </li>
                                                    )}
                                                    {data?.file && (
                                                        <li className="text-gray-700">
                                                            <a href={`${mediaPath}/books/${data.file}`} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                                                                {Lang(["public.file"])}
                                                            </a>
                                                        </li>
                                                    )}
                                                    {data?.sample_file && (
                                                        <li className="text-gray-700">
                                                            <a href={`${mediaPath}/books/${data.sample_file}`} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                                                                {Lang(["public.sample_file"])}
                                                            </a>
                                                        </li>
                                                    )}
                                                    {data?.audio_file && (
                                                        <li className="text-gray-700">
                                                            <a href={`${mediaPath}/books/${data.audio_file}`} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                                                                {Lang(["public.audio_file"])}
                                                            </a>
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>

                                {/* Tab 2: Reviews */}
                                <TabPanel id="tab-second">
                                    <div className="col-span-12">
                                        {data?.reviews?.length ? (
                                            <ul className="list-disc list-inside">
                                                {data.reviews.map((review, index) => (
                                                    <li key={index}>
                                                        {Lang('public.comment')} {index + 1} . {review?.comment}{" "}
                                                        {review?.user ? (
                                                            <span className="italic">
                                                                {review.user.firstname} {review.user.lastname}
                                                            </span>
                                                        ) : (
                                                            ""
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </TabPanel>

                                {/* Tab 3: Ratings */}
                                <TabPanel id="tab-third">
                                    <div className="col-span-12">
                                        {data?.ratings?.length ? (
                                            <ul className="list-disc list-inside">
                                                {data.ratings.map((rating, index) => (
                                                    <li key={index}>
                                                        <Link href={`${nextAdmin}/ratings/${rating.id}`} className="text-blue-600">
                                                            {index + 1}. {rating?.user?.name} ({Lang('public.view')} {Lang('public.rating')})
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </TabPanel>
                            </TabBody>
                        </Tab>
                    </>
                }
            </Frame>
            <ButtonContainer>
                <Button label="back" onClick={back} />
            </ButtonContainer>
        </>
    );
}