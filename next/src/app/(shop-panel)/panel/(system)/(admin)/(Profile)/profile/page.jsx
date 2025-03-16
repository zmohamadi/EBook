"use client";

import { useAuth } from "@/lib/auth";
import PersonnelForm from '@/app/(shop-panel)/panel/(system)/(Users)/personnels/(form)/form';

export default function page()
{
    const {user} = useAuth();
    const role_id = user?.role_id;
    // return role_id == 1 ? <PersonnelForm />: <Form /> ;
    return <PersonnelForm /> ;
}