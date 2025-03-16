"use client";
import { useLang } from "@/lib/lang";
import { useConfig } from "@/lib/config";
import { useData } from "@/Theme/Midone/Utils/Data";
import { Grid, Frame, FeatherIcon } from "@/Theme/Midone/Utils";
import { useAuth } from "@/lib";
import Link from "next/link";

export function List() {
    // const { user } = useAuth();
    // const access = user?.role_id == 1 ? true : false;
    const access = true;
    const {Lang, local} = useLang();
    const { laraAdmin, nextAdmin } = useConfig();
    const { destroy } = useData();
    
    const formUrl = nextAdmin + "/book-categories";

    let info = {
        insertLink: access ? `${formUrl}/new` : "",
        url: `${laraAdmin}/book-categories`,
        columns: [
            {
                label: "name",
                jsx: (item) => (
                    <Link href={`${formUrl}/${item.id}`}>
                        {`${item?.name}`}
                    </Link>
                ),
            },
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
                            access={access}
                            name="XOctagon"
                            tooltip={Lang('public.delete')}
                            color="darkred"
                            onClick={() => destroy(laraAdmin + "/publishers/" + item?.id)}
                        />
                    </div>
                ),
            },
        ],
    };

    return (
        <>
            <Frame title={Lang(["public.book-categories"])}>
                <div className="intro-y col-span-12">
                    <Grid {...info} />
                </div>
            </Frame>
        </>
    );
}