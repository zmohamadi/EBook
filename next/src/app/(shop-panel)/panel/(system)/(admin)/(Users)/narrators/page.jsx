"use client";

import { List } from "@/Components/Admin/UserCreator/List";
import { useAuth } from "@/lib";

export default function Page() {
   
    return <List link="/narrators" title="narrators"/>;
}
