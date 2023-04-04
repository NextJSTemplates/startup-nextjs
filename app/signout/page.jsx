"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const { logout } = require("@/api/auth")

const SignOutPage = () => {
    const router = useRouter();

    useEffect(() => {
        logout()
            .then((response) => router.replace('/'));
    });
    
    return <></>
}

export default SignOutPage;
