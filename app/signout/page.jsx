"use client"
import { logout } from "@/api/auth";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";


const SignOutPage = () => {
    const authContext = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        logout()
            .then((response) => {
                authContext.clearAuthState();
            });
    }, [logout, authContext, router]);
    
    router.replace('/');
}

export default SignOutPage;
