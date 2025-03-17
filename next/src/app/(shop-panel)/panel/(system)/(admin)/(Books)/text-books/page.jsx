"use client";

import { List } from "@/Components/Admin/Book/List";
import { useAuth } from "@/lib";

export default function Page() {
    
    return <List query="type=1" link="/text-books" />;
}
