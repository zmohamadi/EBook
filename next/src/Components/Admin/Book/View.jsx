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

export function View({ id }) {
    const { user } = useAuth();
    const access = user?.role_id == 1 ? true : false;
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
                                {access && <>
                                    <TabList href="tab-second" title={Lang(['public.reviews']) + "(" + data?.reviews?.length + ")"} />
                                    <TabList href="tab-third" title={Lang(['public.ratings']) + "(" + data?.ratings?.length + ")"} />
                                </>}
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
                                            {/* Type */}
                                            <div>
                                                <p className="text-sm text-gray-500">{Lang(["public.type"])}</p>
                                                <h2 className="text-lg font-medium text-gray-700">{data?.type || "-"}</h2>
                                            </div>
                                            {/* File Type */}
                                            <div>
                                                <p className="text-sm text-gray-500">{Lang(["public.file_type"])}</p>
                                                <h2 className="text-lg font-medium text-gray-700">{data?.file_type || "-"}</h2>
                                            </div>
                                            {/* Page Count */}
                                            <div>
                                                <p className="text-sm text-gray-500">{Lang(["public.page_count"])}</p>
                                                <h2 className="text-lg font-medium text-gray-700">{data?.page_count || "-"}</h2>
                                            </div>
                                            {/* Duration */}
                                            <div>
                                                <p className="text-sm text-gray-500">{Lang(["public.duration"])}</p>
                                                <h2 className="text-lg font-medium text-gray-700">{data?.duration || "-"}</h2>
                                            </div>
                                            {/* File Size */}
                                            <div>
                                                <p className="text-sm text-gray-500">{Lang(["public.file_size"])}</p>
                                                <h2 className="text-lg font-medium text-gray-700">{data?.file_size || "-"}</h2>
                                            </div>
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
                                                <h2 className="text-lg font-medium text-gray-700">{data?.publication_status || "-"}</h2>
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
                                            {/* Language */}
                                            <div>
                                                <p className="text-sm text-gray-500">{Lang(["public.language"])}</p>
                                                <h2 className="text-lg font-medium text-gray-700">{data?.lang || "-"}</h2>
                                            </div>
                                            {/* Status */}
                                            <div>
                                                <p className="text-sm text-gray-500">{Lang(["public.status"])}</p>
                                                <h2 className="text-lg font-medium text-gray-700">{data?.status_id == 1 ? Lang(["public.active"]) : Lang(["public.inactive"])}</h2>
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
                                                        <Link href={`${nextAdmin}/reviews/${review.id}`} className="text-blue-600">
                                                            {index + 1}. {review?.user?.name} ({Lang('public.view')} {Lang('public.review')})
                                                        </Link>
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